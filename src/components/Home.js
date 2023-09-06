import { useState } from "react";
import "../styles/Home.css";
import logo from "../assets/logo.svg";
import Welcome from "./WelcomePop";

export default function Home({ onStart, isMobile }) {
  const [isWelcome, setIsWelcome] = useState(false);
  return (
    <>
      <div className="home">
        <header>
          <h2 className="m-0">Hi there,</h2>
          <h1 className="m-0">I’m Innixi</h1>
        </header>
        <img src={logo} alt="logo"></img>
        {isMobile && <p className="only-mobile">Your companion through emotional moments</p>}
        <button onClick={() => (isMobile ? onStart() : setIsWelcome(true))}>GET STARTED</button>
      </div>
      {isWelcome && <Welcome onClick={onStart}></Welcome>}
    </>
  );
}
