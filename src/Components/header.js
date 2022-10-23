const Header = ({ score, level }) => {
  return (
    <header className="container mx-auto py-12 flex justify-center">
      <div className="flex items-center p-4 w-[85%] rounded-sm  outline outline-4  outline-headerOutline z-10 md:w-2/3 lg:w-3/5 xl:w-1/2">
        <div className="mr-auto w-2/5 md:w-auto">
          <img
            className="w-full"
            src={level === 1 ? "/images/logo.svg" : "/images/logo-bonus.svg"}
            alt=""
          />
        </div>
        <div className="flex flex-col items-center px-4 py-2 bg-white rounded-md shadow-lg md:px-6">
          <span className=" font-bold text-[12px] text-scoreText uppercase md:text-[16px]">
            score
          </span>
          <span className=" text-darkText text-4xl font-bold md:text-7xl">
            {score}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
