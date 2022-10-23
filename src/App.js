import Header from "./Components/header";
import Main from "./Components/main";
import Footer from "./Components/footer";
import { useState, useEffect } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);

  useEffect(() => {
    let newScore = Number(localStorage.getItem("score"));
    newScore && setScore(newScore);
  }, []);

  const sendScore = (num) => {
    localStorage.setItem("score", num);
  };

  useEffect(() => {
    let newLevel = Number(localStorage.getItem("level"));
    newLevel && setLevel(newLevel);
  }, []);

  const sendLevel = (num) => {
    localStorage.setItem("level", num);
  };

  const handleLevel = (num) => {
    setLevel(num);
    sendLevel(num);
    setScore(0);
    sendScore(0);
  };

  const handleSound = (sound) => {
    let audio = new Audio(`sounds/${sound}.mp3`);
    audio.play();
  };
  const handleScores = (result) => {
    if (result === "you win") {
      sendScore(score + 1);
      setScore(score + 1);
      handleSound("Win");
    } else if (result === "you lose") {
      sendScore(score - 1);
      setScore(score - 1);
      handleSound("Lose");
    } else if (result === "draw") {
      sendScore(score);
      setScore(score);
      handleSound("Draw");
    }
  };

  return (
    <div className=" bg-radial2 -z-10 text-[#f5f5f5]">
      <Header score={score} level={level} />
      <Main
        handleScores={handleScores}
        level={level}
        score={score}
        handleLevel={handleLevel}
        handleSound={() => handleSound("Click")}
      />
      <Footer />
    </div>
  );
}

export default App;
