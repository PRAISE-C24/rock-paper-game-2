import { useState, useEffect } from "react";
import Button from "./Game-btn";
import Result from "./Result";

const Check = ({
  play,
  setPlay,
  result,
  playerPick,
  housePick,
  showResult,
  showHousePick,
  highLight,
}) => {
  const [deviceSize, setDeviceSize] = useState(window.innerWidth);

  const handleDeviceSize = () => {
    setDeviceSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleDeviceSize);

    return () => {
      window.removeEventListener("resize", handleDeviceSize);
    };
  }, []);

  let style = {
    backgroundImage:
      "repeating-radial-gradient(hsl(217, 6%, 25%, 0.205),hsl(217, 6%, 25%, 0.208), hsla(217, 16%, 45%, 0) " +
      10 +
      "%,hsla(217, 16%, 45%, 0)" +
      10 +
      "%)",
  };

  return (
    <section
      style={{ display: play ? "flex" : "none" }}
      className="relative w-full flex flex-col items-center gap-y-16 mt-20 mb-32 md:-mt-12 md:mb-0 lg:mb-28"
    >
      <div className="relative flex justify-evenly w-full lg:w-[85%] xl:w-[75%]">
        <div
          style={highLight === "you win" ? style : null}
          className="radial absolute flex flex-col justify-center items-center  rounded-full w-[230px] h-[230px] -top-12 -left-3 sm:w-[250px] sm:h-[250px] md:w-[450px] md:h-[450px] md:-top-12 md:-left-16 lg:w-[520px] lg:h-[520px] lg:-top-14 lg:-left-[5.5rem] xl:w-[550px] xl:h-[550px]"
        >
          <span className="uppercase font-bold md:text-xl absolute bottom-0 md:top-0 lg:top-16">
            You picked
          </span>
          <div
            className={
              !showResult && deviceSize > 760 ? "btn-end md:mr-8 " : null
            }
          >
            <Button
              img={
                playerPick === "rock"
                  ? "/images/icon-rock.svg"
                  : playerPick === "paper"
                  ? "/images/icon-paper.svg"
                  : playerPick === "scissors"
                  ? "/images/icon-scissors.svg"
                  : playerPick === "lizard"
                  ? "/images/icon-lizard.svg"
                  : playerPick === "spock"
                  ? "/images/icon-spock.svg"
                  : null
              }
              color={
                playerPick === "rock"
                  ? "hsl(349, 71%, 52%)"
                  : playerPick === "paper"
                  ? "hsl(230, 89%, 62%)"
                  : playerPick === "scissors"
                  ? "hsl(39, 89%, 49%)"
                  : playerPick === "lizard"
                  ? " hsl(261, 73%, 60%) "
                  : playerPick === "spock"
                  ? "hsl(189, 59%, 53%)"
                  : null
              }
              shadow={
                playerPick === "rock"
                  ? "hsl(349, 71%, 52%, 0.7)"
                  : playerPick === "paper"
                  ? "hsl(230, 89%, 62%, 0.7)"
                  : playerPick === "scissors"
                  ? "hsl(39, 89%, 49%, 0.7)"
                  : playerPick === "lizard"
                  ? " hsl(261, 73%, 60%, 0.7) "
                  : playerPick === "spock"
                  ? "hsl(189, 59%, 53%, 0.7)"
                  : null
              }
              deviceSize={deviceSize}
            />
          </div>
        </div>

        <div
          style={{ display: deviceSize > 760 && showResult ? "flex" : "none" }}
          className="hidden justify-center items-center z-10 relative top-24"
        >
          <Result result={result} setPlay={setPlay} />
        </div>

        <div
          style={highLight === "you lose" ? style : null}
          className={
            "radial absolute  rounded-full flex flex-col justify-center items-center w-[230px] h-[230px] -top-12 -right-3 sm:w-[250px] sm:h-[250px] md:w-[450px] md:h-[450px] md:-top-12 md:-right-16 lg:w-[520px] lg:h-[520px] lg:-top-14 lg:-right-[5.5rem] xl:w-[550px] xl:h-[550px]"
          }
        >
          <span className="uppercase font-bold md:text-xl absolute bottom-0 md:top-0 lg:top-16">
            The house picked
          </span>

          <div
            style={{ display: showHousePick ? "block" : "none" }}
            className={
              !showResult && deviceSize > 760 ? "btn-start md:ml-8" : null
            }
          >
            <Button
              img={
                housePick === "rock"
                  ? "/images/icon-rock.svg"
                  : housePick === "paper"
                  ? "/images/icon-paper.svg"
                  : housePick === "scissors"
                  ? "/images/icon-scissors.svg"
                  : housePick === "lizard"
                  ? "/images/icon-lizard.svg"
                  : housePick === "spock"
                  ? "/images/icon-spock.svg"
                  : null
              }
              color={
                housePick === "rock"
                  ? "hsl(349, 71%, 52%)"
                  : housePick === "paper"
                  ? "hsl(230, 89%, 62%)"
                  : housePick === "scissors"
                  ? "hsl(39, 89%, 49%)"
                  : housePick === "lizard"
                  ? " hsl(261, 73%, 60%) "
                  : housePick === "spock"
                  ? "hsl(189, 59%, 53%)"
                  : null
              }
              shadow={
                housePick === "rock"
                  ? "hsl(349, 71%, 52%, 0.7)"
                  : housePick === "paper"
                  ? "hsl(230, 89%, 62%, 0.7)"
                  : housePick === "scissors"
                  ? "hsl(39, 89%, 49%, 0.7)"
                  : housePick === "lizard"
                  ? " hsl(261, 73%, 60%, 0.7) "
                  : housePick === "spock"
                  ? "hsl(189, 59%, 53%, 0.7)"
                  : null
              }
              deviceSize={deviceSize}
            />
          </div>
          <div
            style={{ display: showHousePick ? "none" : "block" }}
            className={
              !showResult && deviceSize > 760
                ? "btn-start h-[120px] w-[120px] rounded-full bg-radial1 md:h-[250px] md:w-[250px] "
                : null
            }
          ></div>
        </div>
      </div>
      <div
        style={{ display: deviceSize < 760 && showResult ? "flex" : "none" }}
        className="md:hidden relative top-40"
      >
        <Result result={result} setPlay={setPlay} />
      </div>
    </section>
  );
};

export default Check;
