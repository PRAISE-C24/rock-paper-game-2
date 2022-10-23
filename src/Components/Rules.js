import { useState } from "react";

//Rules button
const RulesBtn = ({ level }) => {
  const [showRules, setShowRules] = useState(false);

  const toggleRule = () => {
    setShowRules((prevState) => !prevState);
  };

  let style = {
    transform: showRules ? "translateX(0%)" : "translateX(100%)",
  };
  return (
    <div>
      <div
        style={style}
        className="fixed top-0 left-0 z-20 flex justify-center items-center w-full h-full transition duration-300 md:duration-500 ease-out bg-[#00000062]"
      >
        <div className=" w-full h-full bg-[#f5f5f5] flex flex-col justify-evenly  items-center shadow-xl md:rounded-lg  md:w-[450px] md:h-[450px] md:top-[25%]">
          <div className="relative w-full text-center">
            <span className="text-darkText uppercase text-3xl font-bold ">
              rules
            </span>
            <img
              onClick={toggleRule}
              className=" hidden cursor-pointer md:absolute -top-2 right-8 md:block"
              src="/images/icon-close.svg"
              alt=""
            />
          </div>

          <img
            src={
              level === 2
                ? "/images/image-rules-bonus.svg"
                : "/images/image-rules.svg"
            }
            alt=""
          />
          <img
            onClick={toggleRule}
            className=" cursor-pointer md:hidden"
            src="/images/icon-close.svg"
            alt=""
          />
        </div>
      </div>

      <button
        onClick={toggleRule}
        className="uppercase text-xl border-2 border-headerOutline rounded-md w-[120px] py-1 text-center cursor-pointer"
      >
        rules
      </button>
    </div>
  );
};

export default RulesBtn;

//levels Button
const LevelsBtn = ({ handleLevel, setPlay }) => {
  const [showLevel, setShowLevel] = useState(false);

  const toggleLevel = () => {
    setShowLevel((prevState) => !prevState);
  };

  let style = {
    transform: showLevel ? "translateX(0%)" : "translateX(-100%)",
  };
  return (
    <div>
      <div
        style={style}
        className="w-full h-full fixed top-0 left-0 z-20 flex justify-center items-center bg-[#00000062] transition duration-300 md:duration-500 ease-out"
      >
        <img
          onClick={toggleLevel}
          className="cursor-pointer absolute top-24 right-16"
          src="/images/icon-close2.svg"
          alt=""
        />
        <div className="flex flex-col justify-center items-center w-[200px] h-[200px] bg-lizard1 hover:bg-paper1 border-[.8rem]  border-scissors1 rounded-3xl rotate-45 md:w-[350px] md:h-[350px] ">
          <span
            onClick={() => {
              handleLevel(1);
              setPlay();
              toggleLevel();
            }}
            className="py-4 text-2xl font-bold cursor-pointer text-rock1 -rotate-45 md:text-4xl"
          >
            Level 1
          </span>
          <span
            onClick={() => {
              handleLevel(2);
              setPlay();
              toggleLevel();
            }}
            className="py-4 text-2xl font-bold cursor-pointer text-spock1 -rotate-45 md:text-4xl"
          >
            Level 2
          </span>
        </div>
      </div>

      <button
        onClick={toggleLevel}
        className="uppercase text-xl border-2 border-headerOutline rounded-md w-[120px] py-1 text-center cursor-pointer"
      >
        Levels
      </button>
    </div>
  );
};
export { LevelsBtn };
