import { Mic, Pause } from "lucide-react";

const controls = [
  { icon: Mic, title: "Record" },
  { icon: Pause, title: "Pause" },
];

const Controls = ({ isRecording, setIsRecording }) => {
  return (
    <ul className="fixed bottom-6 py-2 px-5 rounded-2xl bg-surface-highlight/50 backdrop-blur-md mx-auto left-0 right-0 w-full max-w-72 gap-6 transition-all duration-300 flex justify-around items-center border border-border/50">
      {controls.map((control, idx) => {
        const isActive =
          (control.title === "Record" && isRecording) ||
          (control.title === "Pause" && !isRecording);

        const activeStyles = isActive
          ? "bg-surface-highlight/90"
          : "hover:bg-surface-highlight/85";

        return (
          <li
            key={idx}
            onClick={() => {
              if (
                (control.title === "Record" && isRecording) ||
                (control.title === "Pause" && !isRecording)
              ) {
                setIsRecording((prev) => !prev);
              } else {
                setIsRecording(control.title === "Record");
              }
            }}
            className={`flex flex-col ${activeStyles} rounded-xl py-2.5 w-35 px-6 justify-center items-center text-xs gap-2.75 cursor-pointer transition-all duration-200`}
          >
            <control.icon className="size-4.75" />
            {control.title === "Record" && isRecording
              ? "Recording"
              : control.title === "Pause" && !isRecording
                ? "Paused"
                : control.title}
          </li>
        );
      })}
    </ul>
  );
};

export default Controls;
