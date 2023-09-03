import { useState } from "react";
import Bottle from "./Bottle";
import "../styles/Bottles.css";

export default function Bottles({ initialBottles, onGeneratePoster }) {
  const [bottles, setBottles] = useState(initialBottles);

  function updateBottle(bottle) {
    const index = bottles.findIndex((item) => item.name === bottle.name);
    const copy = [...bottles];
    copy.splice(index, 1, bottle);
    setBottles(copy);
  }

  return (
    <div className="bottle-box">
      <header>
        <h1 className="m-0">How are you feeling today?</h1>
        <h2 className="m-0">Tap & hold a bottle to fill it up</h2>
      </header>
      <div className="container">
        {bottles.map((item) => (
          <Bottle key={item.name} bottle={item} onUpdate={updateBottle}></Bottle>
        ))}
      </div>
      <button onClick={() => onGeneratePoster(bottles)}>generate INNIXI poster</button>
    </div>
  );
}
