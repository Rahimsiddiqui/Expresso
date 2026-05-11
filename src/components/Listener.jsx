import { useState, useEffect, useRef } from "react";

const Listener = ({ isRecording }) => {
  const [text, setText] = useState("");
  const recognitionRef = useRef(null);
  const isStarting = useRef(false);

  // 1. Initialize the API once on mount
  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.error("Speech Recognition not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US"; // Explicitly set language

    recognition.onresult = (event) => {
      let finalTranscript = "";
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        }
      }
      // Use functional update to append text correctly
      if (finalTranscript) {
        setText((prev) => prev + " " + finalTranscript);
      }
    };

    recognition.onerror = (event) => {
      console.error("Speech Error:", event.error);
      isStarting.current = false;
    };

    recognition.onend = () => {
      isStarting.current = false;
    };

    recognitionRef.current = recognition;

    return () => {
      recognition.stop();
    };
  }, []);

  // 2. Handle Start/Stop separately to avoid race conditions
  useEffect(() => {
    if (!recognitionRef.current) return;

    if (isRecording) {
      try {
        recognitionRef.current.start();
        isStarting.current = true;
      } catch (err) {
        // Suppress "already started" errors
        console.warn("Recognition already started or starting");
      }
    } else {
      recognitionRef.current.stop();
      isStarting.current = false;
    }
  }, [isRecording]);

  const mode = isRecording ? "Listening..." : "Idle";
  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;

  return (
    <div className="min-w-full px-8 pt-7 pb-8 mt-18 shadow-lg shadow-surface-inverse transition-all duration-300 bg-surface-highlight/30 rounded-lg border border-border">
      <div className="flex flex-col min-[420px]:flex-row gap-2.75 sm:gap-0 w-full items-center justify-between">
        <span
          className={`flex items-center ${mode === "Idle" ? "text-green-400 gap-2" : "text-amber-500 dark:text-amber-400 gap-2.5"} font-mono font-medium text-base`}
        >
          <div
            className={`w-2 h-2.25 ${mode === "Idle" ? "bg-green-400" : "bg-amber-500 dark:bg-amber-400 animate-pulse"} rounded-full`}
          ></div>
          {mode}
        </span>
        <span className="font-mono font-medium text-base">
          {wordCount} {wordCount === 1 ? "Word" : "Words"}
        </span>
      </div>

      <p className="w-full h-px bg-border mt-5.5 mb-8.75"></p>

      <textarea
        rows={8}
        value={text}
        className="w-full text-text/80 tracking-wide focus:outline-none resize-none"
        aria-label="Live transcript"
        placeholder="Start Talking..."
        readOnly
      ></textarea>
    </div>
  );
};

export default Listener;
