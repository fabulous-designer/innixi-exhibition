import { useState, useRef } from "react";
import Bottle from "./Bottle";
import "../styles/Bottles.css";

export default function Bottles({ initialBottles, onGeneratePoster, backHome }) {
  const [bottles, setBottles] = useState(initialBottles);
  const timer = useRef(null);

  function updateBottle(bottle) {
    const index = bottles.findIndex((item) => item.name === bottle.name);
    const copy = [...bottles];
    copy.splice(index, 1, bottle);
    setBottles(copy);
  }

  function resetTimer() {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
    // console.log("start timer");
    timer.current = setTimeout(() => {
      // console.log("back home");
      backHome();
    }, 60000);
  }

  function handleGeneratePoster() {
    onGeneratePoster(bottles);
    if (timer.current) {
      clearTimeout(timer.current);
    }
  }

  const showButton = bottles.some((bottle) => bottle.percent);

  resetTimer();
  return (
    <div className="bottle-box">
      <header>
        <h1 className="m-0">How are you feeling today?</h1>
        <h2 className="m-0">Tap & hold bottles to fill them up</h2>
      </header>
      <div className="container">
        {bottles.map((item) => (
          <Bottle key={item.name} bottle={item} onUpdate={updateBottle}></Bottle>
        ))}
      </div>
      {showButton && <button onClick={handleGeneratePoster}>generate INNIXI poster</button>}
    </div>
  );
}
