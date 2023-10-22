import { AiOutlineHome, AiOutlineSetting } from "react-icons/ai";
import { IoCreateOutline } from "react-icons/io5";
import pix from "../../assets/pix.jpg";
import { useToggle, useUserData, useUserDataState } from "../../global/jotai";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useOneUser } from "../../hooks/useAllUser";

const MenuSider = () => {
  const [state, setState] = useToggle();
  const [user, setUser]: any = useUserData();
  const navigate = useNavigate();

  const [userID]: any = useUserDataState();
  const { userData } = useOneUser(userID.id!);

  console.log(user);

  return (
    <Container>
      <div
        className={`relative ${state ? "left-[-150px]" : "left-0"}
       transition-all duration-300 
    `}
      >
        <div
          className="w-[150px] fixed bg-purple-50 flex flex-col "
          style={{
            height: "calc(100vh )",
            boxShadow:
              " rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
          }}
        >
          <br />
          <br />
          <div>
            <Link to="/">
              <div
                className="flex items-center px-4 hover:cursor-pointer mt-4 
           hover:bg-purple-100 py-4 transition-all duration-300 "
              >
                <AiOutlineHome size={25} />
                <div
                  className="text-[11px] uppercase ml-1 
          "
                  onClick={() => {
                    setState(true);
                  }}
                >
                  Deshboard
                </div>
              </div>
            </Link>

            <Link to="/create-project">
              <div
                className="flex items-center px-4 hover:cursor-pointer 
           hover:bg-purple-100 py-4 transition-all duration-300"
                onClick={() => {
                  setState(true);
                }}
              >
                <IoCreateOutline size={25} />
                <div className="text-[11px] uppercase  ml-1 ">
                  Create Project
                </div>
              </div>
            </Link>

            <Link to="/setting">
              <div
                className="flex items-center px-4 hover:cursor-pointer  
           hover:bg-purple-100 py-4 transition-all duration-300"
                onClick={() => {
                  setState(true);
                }}
              >
                <AiOutlineSetting size={25} />
                <div className="text-[11px] uppercase  ml-1 ">Settings</div>
              </div>
            </Link>
          </div>

          <div className="flex-1" />

          <div className="flex flex-col items-center mb-6">
            <img
              src={userData?.data?.avatar ? userData?.data?.avatar : pix}
              className="w-[50px] h-[50px] rounded-full border mb-2 object-cover shadow-md "
            />
            <div className="text-[12px] leading-tight mb-4 uppercase font-bold ">
              {userData?.data?.userName}
            </div>
            <button
              className="px-4 py-2 bg-purple-700 text-white rounded transition-all duration-300 hover:transform-[scale(0.09)] hover:cursor-pointer "
              onClick={() => {
                setUser(null);
                navigate("/sign-in");
                // window.location.reload();
              }}
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MenuSider;

const Container = styled.div`
  left: 0;
  @media screen and (max-width: 630px) {
    background-color: red;
  }
`;
