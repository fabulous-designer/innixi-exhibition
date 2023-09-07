import { useState } from "react";
import { useMediaQuery } from "react-responsive";

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
    poster: "serene chamomile",
  },
  {
    name: "Reflective",
    color: "#ECCDFF",
    percent: 0,
    poster: "musing white tea",
  },
  {
    name: "Grateful",
    color: "#DDFFF7",
    percent: 0,
    poster: "lovely honey",
  },
  {
    name: "Happy",
    color: "#FFFAE9",
    percent: 0,
    poster: "cheery jasmine",
  },
  {
    name: "Excited",
    color: "#FFF6D7",
    percent: 0,
    poster: "brilliant peppermint",
  },
  {
    name: "Tired",
    color: "#CCC",
    percent: 0,
    poster: "restful lavender",
  },
  {
    name: "Stressed",
    color: "#FFD8D8",
    percent: 0,
    poster: "pressured basil",
  },
  {
    name: "Sad",
    color: "#D6EDFF",
    percent: 0,
    poster: "gloomy cinnamon",
  },
  {
    name: "Lonely",
    color: "#D9DFE3",
    percent: 0,
    poster: "hug-in-a-mug vanilla",
  },
  {
    name: "Angry",
    color: "#FFC5B2",
    percent: 0,
    poster: "peeved liquorice",
  },
  {
    name: "Confused",
    color: "#CFD4FF",
    percent: 0,
    poster: "baffled rosemary",
  },
  {
    name: "Uncertain",
    color: "url(#paint0_linear_46_2185)",
    percent: 0,
    poster: "mystery blend",
  },
];

function App() {
  const [step, setStep] = useState(0);
  const [bottles, setBottles] = useState([]);

  const isMobile = useMediaQuery({ query: "(max-width: 430px)" });
  const isPC = useMediaQuery({ query: "(min-width: 1024px)" });

  if (isPC && step === 0) {
    handleStart()
  }

  function handleStart() {
    setStep(1);
    setBottles(initialBottles);
  }
  function handleGeneratePoster(data) {
    setStep(2);
    setBottles(data);
  }
  const pages = {
    0: <Home onStart={handleStart} isMobile={isMobile}></Home>,
    1: (
      <Bottles
        initialBottles={bottles}
        isMobile={isMobile}
        onGeneratePoster={handleGeneratePoster}
        backHome={() => setStep(0)}
      ></Bottles>
    ),
    2: <Progress delay={3000} isMobile={isMobile} onSuccess={() => setStep(3)}></Progress>,
    3: <Poster bottles={bottles} isPC={isPC} backHome={() => setStep(0)}></Poster>,
  };
  return <div className={`App${isMobile ? " mobile" : ""}${isPC ? " pc" : ""}`}>{pages[step]}</div>;
}

export default App;
