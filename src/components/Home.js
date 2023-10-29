import { useState } from "react";
import "../styles/Home.css";
import logo from "../assets/logo.svg";
import Welcome from "./WelcomePop";

/**
 * 首页
 * @param {*} onStart:开始按钮回调; mode:模式pad|mobile|pc
 * @returns 
 */
export default function Home({ onStart, mode }) {
  const [isWelcome, setIsWelcome] = useState(false);
  return (
    <>
      <div className="home">
        <header>
          <h2 className="m-0">Hi there,</h2>
          <h1 className="m-0">I’m Innixi</h1>
        </header>
        <img src={logo} alt="logo"></img>
        {mode === "mobile" && <p className="only-mobile">Your companion through emotional moments</p>}
        <button onClick={() => (mode === "mobile" ? onStart() : setIsWelcome(true))} id="startBtn">
          GET STARTED
        </button>
      </div>
      {mode !== "mobile" && isWelcome && <Welcome onClick={onStart}></Welcome>}
    </>
  );
}
