import { useState } from "react";

import Home from "./components/Home";
import Bottles from "./components/Bottles";
import Progress from "./components/Progress";
import Poster from "./components/Poster";
import "./styles/App.css";

const initialBottles = [
  {
    name: "Calm",
    color: "#EDF6F5",
    percent: 0,
  },
  {
    name: "Reflective",
    color: "#ECCDFF",
    percent: 0,
  },
  {
    name: "Grateful",
    color: "#DDFFF7",
    percent: 0,
  },
  {
    name: "Happy",
    color: "#FFFAE9",
    percent: 0,
  },
  {
    name: "Excited",
    color: "#FFF6D7",
    percent: 0,
  },
  {
    name: "Tired",
    color: "#CCC",
    percent: 0,
  },
  {
    name: "Stressed",
    color: "#FFD8D8",
    percent: 0,
  },
  {
    name: "Sad",
    color: "#D6EDFF",
    percent: 0,
  },
  {
    name: "Lonely",
    color: "#D9DFE3",
    percent: 0,
  },
  {
    name: "Angry",
    color: "#FFC5B2",
    percent: 0,
  },
  {
    name: "Confused",
    color: "#CFD4FF",
    percent: 0,
  },
  {
    name: "Uncertain",
    color: "url(#paint0_linear_46_2185)",
    percent: 0,
  },
];

function App() {
  const [step, setStep] = useState(0);
  const [bottles, setBottles] = useState([]);
  function handleStart() {
    setStep(1);
    setBottles(initialBottles);
  }
  function handleGeneratePoster(data) {
    setStep(2);
    setBottles(data);
  }
  const pages = {
    0: <Home onStart={handleStart}></Home>,
    1: <Bottles initialBottles={bottles} onGeneratePoster={handleGeneratePoster}></Bottles>,
    2: <Progress delay={3000} onSuccess={() => setStep(3)}></Progress>,
    3: <Poster bottles={bottles} backHome={() => setStep(0)}></Poster>,
  };
  return <div className="App">{pages[step]}</div>;
}

export default App;
