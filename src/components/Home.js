import { useState } from "react";
import "../styles/Home.css";
import logo from "../assets/logo.svg";
import Welcome from "./WelcomePop";

export default function Home({ onStart }) {
  const [isWelcome, setIsWelcome] = useState(false);
  return (
    <>
      <div className="home">
        <header>
          <h2 className="m-0">Hi there,</h2>
          <h1 className="m-0">I’m Innixi</h1>
        </header>
        <img src={logo} alt="logo"></img>
        <p className="only-mobile">
          Your companion through emotional moments
        </p>
        <button onClick={() => setIsWelcome(true)}>GET STARTED</button>
      </div>
      {isWelcome && <Welcome onClick={onStart}></Welcome>}
    </>
  );
}
