import { useRef } from "react";
import "../styles/Progress.css";

export default function Progress({ delay, mode, onSuccess }) {
  const timerRef = useRef(null);
  if (timerRef.current === null) {
    timerRef.current = setTimeout(onSuccess, delay);
  }
  if (typeof delay !== "number" || delay < 3000) {
    delay = 3000;
  }
  const dic = {
    mobile: "Creating your poster...",
    pad: "Creating your Innixi poster...",
    pc: "Creating your unique Innixi poster...",
  };
  return (
    <div className="progress">
      <h1 className="m-0">{dic[mode] || "Creating your Innixi poster..."}</h1>
      <div className="progress-bar">
        <div
          className="progress-bar__inner"
          style={{ animation: `${delay / 1000}s linear 0s 1 both ${mode === "mobile" ? "MobileLoading" : "Loading"}` }}
        ></div>
      </div>
    </div>
  );
}
