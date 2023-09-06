import { useRef } from "react";
import bottleSrc from "../assets/bottle.svg";
import bottleActiveSrc from "../assets/bottle_active.svg";
import "../styles/Bottle.css";

export default function Bottle({ bottle, isMobile, onUpdate }) {
  const timer = useRef(null);
  const bottleRef = useRef(null);
  const src = bottle.percent ? bottleActiveSrc : bottleSrc;

  function handleStart() {
    // event.preventDefault();
    // console.log("start", event);
    let percent = bottle.percent;
    if (timer.current === null) {
      timer.current = setInterval(() => {
        percent = (percent + 1) % 101;
        onUpdate({
          ...bottle,
          isActive: true,
          percent: percent,
        });
      }, 20);
      if (bottleRef.current) {
        bottleRef.current.addEventListener('mouseup', handleStop);
        bottleRef.current.addEventListener('mouseleave', handleStop);
        bottleRef.current.addEventListener('touchend', handleStop);
      }
    }
  }
  function handleStop(event) {
    event.preventDefault();
    // console.log("stop", event);
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    }
    bottleRef.current.removeEventListener('mouseup', handleStop);
    bottleRef.current.removeEventListener('mouseleave', handleStop);
    bottleRef.current.removeEventListener('touchend', handleStop);
  }
  return (
    <div
      ref={bottleRef}
      className={`bottle${bottle.percent ? " active" : ""}`}
      onTouchStart={handleStart}
      onMouseDown={handleStart}
    >
      <div className="bottle-outer">
        <img src={src} alt="bottle"></img>
        <div className="water">
          <svg
            style={{ bottom: `${parseInt((isMobile ? 32 : 75) * (bottle.percent / 100 - 1))}px`, fill: bottle.color }}
            width={isMobile ? 26 : 44}
            height={isMobile ? 32 : 75}
            viewBox="0 0 44 75"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 1.94876C0 1.94876 3.38462 0 9.30769 0C15.2308 0 18.6154 2.91462 23.6923 3.62903C28.7692 4.34345 28.7825 4.34345 28.7825 4.34345H28.7692H32.1215H36.3846C38.9231 4.34345 44 1.94876 44 1.94876V74C44 74.5523 43.5523 75 43 75H0.999999C0.447714 75 0 74.5523 0 74V1.94876Z" />
            <defs>
              <linearGradient
                id="paint0_linear_46_2185"
                x1="0"
                y1="0"
                x2="73.4287"
                y2="8.71812"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#DB76F4" />
                <stop offset="0.0001" stopColor="#9AB6FF" />
                <stop offset="1" stopColor="#DB76F4" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="name">{bottle.name}</div>
    </div>
  );
}
