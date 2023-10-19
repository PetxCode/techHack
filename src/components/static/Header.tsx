import logo from "../../assets/logo.png";
import { AiOutlineBell, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useToggle } from "../../global/jotai";

const Header = () => {
  const [state, setState] = useToggle();

  return (
    <div className="h-[45px] w-[100%] flex justify-center fixed z-10 bg-white border-b ">
      <div className="h-[45px] w-[95%] flex items-center justify-between">
        <img src={logo} className="h-[30px] " />

        <div className="flex items-center relative hover:cursor-pointer w-[40px] h-[40px] hover:bg-purple-100 rounded-full justify-center transition-all duration-300 ">
          <AiOutlineBell size={30} />
          <span className="absolute top-[5px] right-0 bg-red-500 text-white rounded-full w-[15px] h-[15px] text-[12px] flex justify-center items-center ">
            0
          </span>
        </div>

        {state ? (
          <div
            className="flex sm:hidden  "
            onClick={() => {
              setState(false);
            }}
          >
            <AiOutlineMenu size={30} />
          </div>
        ) : (
          <div
            className="flex sm:hidden  "
            onClick={() => {
              setState(true);
            }}
          >
            <AiOutlineClose size={30} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
