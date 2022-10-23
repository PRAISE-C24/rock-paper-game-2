const Button = ({ img, color, shadow, handleClick, deviceSize }) => {
  let style = {
    backgroundColor: color,
    boxShadow:
      deviceSize > 760
        ? ` 0px 10px 0px -1px ${shadow}`
        : ` 0px 7px 0px -1px ${shadow}`,
    width: deviceSize > 760 && "250px",
    height: deviceSize > 760 && "250px",
  };

  return (
    <div
      style={style}
      className="flex justify-center items-center h-[120px] w-[120px] cursor-pointer rounded-full  md:h-[200px] md:w-[200px]"
    >
      <button
        onClick={handleClick}
        className="inner-shadow rounded-full bg-[#f5f5f5] w-[75%] h-[75%] flex items-center justify-center"
      >
        <img className=" md:w-20" src={img} alt="" />
      </button>
    </div>
  );
};

export default Button;

const Button2 = ({ img, color, shadow, handleClick, deviceSize }) => {
  let style = {
    backgroundColor: color,
    boxShadow:
      deviceSize > 760
        ? ` 0px 10px 0px -1px ${shadow}`
        : ` 0px 7px 0px -1px ${shadow}`,
  };
  return (
    <div
      style={style}
      className="Btn-shadow flex justify-center items-center h-[100px] w-[100px] cursor-pointer rounded-full md:h-[150px] md:w-[150px]"
    >
      <button
        onClick={handleClick}
        className="inner-shadow rounded-full bg-[#f5f5f5] w-[75%] h-[75%] flex items-center justify-center"
      >
        <img className=" md:w-14" src={img} alt="" />
      </button>
    </div>
  );
};

export { Button2 };
