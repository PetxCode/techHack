import { AiOutlineLike } from "react-icons/ai";
import { BiCommentDots } from "react-icons/bi";
import polo from "../assets/pix.jpg";
import styled from "styled-components";

const CreateProjectScreen = () => {
  let data = Array.from({ length: 10 });
  console.log(data);
  return (
    <Container>
      <Main>
        <div className="w-[80%] border mt-6 p-4">
          <br />
          <br />
          <br />

          <div>card</div>
          <div className="w-full flex justify-center">
            <div className="flex items-center">
              <div className="w-[45px] h-[45px] rounded-full border-purple-600 border-1 text-purple-950 text-[12px] bg-purple-100 flex justify-center items-center font-bold mx-2 ">
                1
              </div>

              <div className="w-[100px] h-1 bg-purple-400" />
              <div className="w-[45px] h-[45px] rounded-full border-purple-600 border-1 text-purple-950 text-[12px] bg-purple-100 flex justify-center items-center font-bold mx-2 ">
                2
              </div>

              <div className="w-[100px] h-1 bg-purple-400" />
              <div className="w-[45px] h-[45px] rounded-full border-purple-600 border-1 text-purple-950 text-[12px] bg-purple-100 flex justify-center items-center font-bold mx-2 ">
                3
              </div>
            </div>
          </div>

          <div className="mt-8">
            <input
              className="w-[90%] text-[12px] border rounded-sm h-[45px] pl-2 outline-none "
              placeholder="Enter URL"
            />
          </div>
        </div>
      </Main>
    </Container>
  );
};

export default CreateProjectScreen;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
