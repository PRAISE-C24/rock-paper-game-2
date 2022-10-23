const Result = ({ result, setPlay }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-4">
      <span className="uppercase font-bold text-5xl  md:text-4xl lg:text-5xl">
        {result}
      </span>
      <button
        onClick={setPlay}
        className="bg-white text-darkText uppercase font-bold w-full py-3 rounded-md hover:text-rock1"
      >
        Play again
      </button>
    </div>
  );
};

export default Result;
