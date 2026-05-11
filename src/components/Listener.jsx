const Listener = () => {
  const name = "Listening...";

  return (
    <div className="min-w-full px-8 pt-7 pb-8 mt-18 shadow-lg shadow-surface-inverse transition-all duration-300 bg-surface-highlight/30 rounded-lg border border-border">
      <div className="flex flex-col min-[420px]:flex-row gap-2.75 sm:gap-0 w-full items-center justify-between">
        <span
          className={`flex items-center ${name === "Idle" ? "text-green-400 gap-2" : "text-amber-500 dark:text-amber-400 gap-2.5"} font-mono font-medium text-base`}
        >
          <div
            className={`w-2 h-2.25 ${name === "Idle" ? "bg-green-400" : "bg-amber-500 dark:bg-amber-400 animate-pulse"} rounded-full`}
          ></div>
          {name}
        </span>
        <span className="font-mono font-medium text-base">204 Words</span>
      </div>

      <p className="w-full h-px bg-border mt-5.5 mb-8.75"></p>

      <textarea
        rows={8}
        className="w-full text-text/80 tracking-wide focus:outline-none resize-none"
        readOnly
        placeholder="Start Talking..."
      ></textarea>
    </div>
  );
};

export default Listener;
