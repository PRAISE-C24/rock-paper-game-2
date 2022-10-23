import Check from "./Check-section";
import Pick from "./Pick-section";
import RulesBtn, { LevelsBtn } from "./Rules";
import { useState, useEffect } from "react";

const Main = ({ handleScores, score, level, handleLevel, handleSound }) => {
  const [play, setPlay] = useState(false);
  const [isClick, setIsClick] = useState(0);
  const [playerPick, setPlayerPick] = useState();
  const [housePick, setHousePick] = useState();
  const [showResult, setShowResult] = useState(false);
  const [showHousePick, setShowHousePick] = useState(false);
  const [result, setResult] = useState();
  const [highLight, setHighLight] = useState("");

  const handleResult = () => {
    let text;
    if (playerPick === "rock" && housePick === "rock") {
      text = "draw";
    } else if (
      playerPick === "rock" &&
      (housePick === "scissors" || housePick === "lizard")
    ) {
      text = "you win";
    } else if (
      playerPick === "rock" &&
      (housePick === "paper" || housePick === "spock")
    ) {
      text = "you lose";
    } else if (playerPick === "paper" && housePick === "paper") {
      text = "draw";
    } else if (
      playerPick === "paper" &&
      (housePick === "rock" || housePick === "spock")
    ) {
      text = "you win";
    } else if (
      playerPick === "paper" &&
      (housePick === "scissors" || housePick === "lizard")
    ) {
      text = "you lose";
    } else if (playerPick === "scissors" && housePick === "scissors") {
      text = "draw";
    } else if (
      playerPick === "scissors" &&
      (housePick === "paper" || housePick === "lizard")
    ) {
      text = "you win";
    } else if (
      playerPick === "scissors" &&
      (housePick === "rock" || housePick === "spock")
    ) {
      text = "you lose";
    } else if (playerPick === "lizard" && housePick === "lizard") {
      text = "draw";
    } else if (
      playerPick === "lizard" &&
      (housePick === "paper" || housePick === "spock")
    ) {
      text = "you win";
    } else if (
      playerPick === "lizard" &&
      (housePick === "rock" || housePick === "scissors")
    ) {
      text = "you lose";
    } else if (playerPick === "spock" && housePick === "spock") {
      text = "draw";
    } else if (
      playerPick === "spock" &&
      (housePick === "rock" || housePick === "scissors")
    ) {
      text = "you win";
    } else if (
      playerPick === "spock" &&
      (housePick === "paper" || housePick === "lizard")
    ) {
      text = "you lose";
    }

    setResult(text);

    setTimeout(() => {
      handleScores(text);
      setShowResult(true);
      setHighLight(text);
    }, 3000);
  };

  useEffect(() => {
    handleResult();
  }, [isClick]);

  const getHousePick = () => {
    const name = ["rock", "paper", "scissors", "lizard", "spock"];
    let num;
    if (level === 2) {
      num = Math.floor(Math.random() * 5);
    } else {
      num = Math.floor(Math.random() * 3);
    }

    setHousePick(name[num]);
    setTimeout(() => {
      setShowHousePick(true);
    }, 1500);
  };

  const handleClick = (name) => {
    setPlay(true);
    setPlayerPick(name);
    setShowResult(false);
    setHighLight("");
    setShowHousePick(false);
    getHousePick();
    setIsClick((prevClick) => prevClick + 1);
    handleSound();
  };

  return (
    <main className="relative min-h-[80vh] flex flex-col justify-around items-center overflow-hidden lg:overflow-visible">
      {play && (
        <div className="absolute -top-2 left-2 text-2xl font-bold border-b-2 z-10 border-white md:ml-12 md:text-4xl xl:text-5xl">
          <h2>Level {level}</h2>
        </div>
      )}

      <Pick handleClick={handleClick} play={play} level={level} />
      <Check
        play={play}
        setPlay={() => setPlay(false)}
        playerPick={playerPick}
        housePick={housePick}
        result={result}
        showResult={showResult}
        showHousePick={showHousePick}
        highLight={highLight}
      />
      <div className="relative mt-24 w-[85%] flex justify-around lg:justify-between">
        <LevelsBtn handleLevel={handleLevel} setPlay={() => setPlay(false)} />
        <RulesBtn level={level} />
      </div>
    </main>
  );
};

export default Main;
