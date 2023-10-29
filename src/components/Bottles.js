import { useState, useRef } from "react";
import Bottle from "./Bottle";
import "../styles/Bottles.css";

/**
 * 瓶子列表模块
 * @param {*} initialBottles:初始瓶子列表数据; isMobile:是否为mobile模式; onGeneratePoster:点击生成海报按钮回调; backHome:自动返回首页回调
 * @returns 
 */
export default function Bottles({ initialBottles, isMobile, onGeneratePoster, backHome }) {
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
    // 60未点击瓶子自动返回首页
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
        <h2 className="m-0">{isMobile ? "Tap & hold to fill up bottles" : "Tap & hold bottles to fill them up"}</h2>
      </header>
      <div className="container">
        {bottles.map((item) => (
          <Bottle key={item.name} bottle={item} isMobile={isMobile} onUpdate={updateBottle}></Bottle>
        ))}
      </div>
      {showButton && <button onClick={handleGeneratePoster} id="generatePosterBtn">generate INNIXI poster</button>}
    </div>
  );
}
