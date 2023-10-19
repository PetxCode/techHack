import { AiOutlineHome } from "react-icons/ai";
import pix from "../../assets/pix.jpg";
import { useToggle } from "../../global/jotai";
import styled from "styled-components";

const Sider = () => {
  const [state, setState] = useToggle();

  return (
    <Container>
      <div
        className={`relative 
       transition-all duration-300 
    `}
      >
        <div
          className="w-[200px] fixed bg-purple-50 flex flex-col"
          style={{
            height: "calc(100vh )",
            boxShadow:
              " rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
          }}
        >
          <br />
          <br />
          <div>
            <div
              className="flex items-center px-4 hover:cursor-pointer mt-4 
           hover:bg-purple-100 py-4 transition-all duration-300 "
            >
              <AiOutlineHome size={25} />
              <div
                className="text-[13px] uppercase ml-1 
          "
                onClick={() => {
                  setState(true);
                }}
              >
                Home
              </div>
            </div>
            <div
              className="flex items-center px-4 hover:cursor-pointer  
           hover:bg-purple-100 py-4 transition-all duration-300"
              onClick={() => {
                setState(true);
              }}
            >
              <AiOutlineHome size={25} />
              <div className="text-[13px] uppercase  ml-1 ">Home1</div>
            </div>
            <div
              className="flex items-center px-4 hover:cursor-pointer 
           hover:bg-purple-100 py-4 transition-all duration-300"
              onClick={() => {
                setState(true);
              }}
            >
              <AiOutlineHome size={25} />
              <div className="text-[13px] uppercase  ml-1 ">Home2</div>
            </div>
          </div>

          <div className="flex-1" />

          <div className="flex flex-col items-center mb-6">
            <img
              src={pix}
              className="w-[50px] h-[50px] rounded-full border mb-2 object-cover shadow-md "
            />

            <button className="px-4 py-2 bg-purple-700 text-white rounded transition-all duration-300 hover:transform-[scale(0.09)] hover:cursor-pointer ">
              Log Out
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Sider;

const Container = styled.div`
  background-color: red;
  width: 300px;
  /* display: none; */
  left: 0;
  @media screen and (max-width: 630px) {
    background-color: red;
  }
`;
