import { AiOutlineLike } from "react-icons/ai";
import { BiCommentDots } from "react-icons/bi";
import polo from "../assets/pix.jpg";
import styled from "styled-components";

const DetailedProjectScreen = () => {
  let data = Array.from({ length: 10 });
  console.log(data);
  return (
    <Container>
      <Main>
        <div className="w-[80%] border mt-6 ">
          <br />
          <br />
          <br />

          <div className=" pl-4">Developed product of Name</div>
          <br />
          <hr />
          <br />

          <img
            src={polo}
            className="w-[100%] bg-purple-200 h-[300px] object-cover"
          />

          <div className=" pl-4 text-[12px]">
            <div className="text-[15px] font-bold capitalize mt-8">
              Project Name
            </div>
            <div className="mb-5">
              <a href="https://google.com" target="_blank">
                https://google.com
              </a>
            </div>
          </div>
          <br />
          <hr />
          <br />
          <div className=" pl-4 ">Assigned Task</div>

          <div className="bg-purple-50 p-2 rounded-sm mt-1 text-[12px] ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            dolor est nulla, similique commodi rerum! Obcaecati dolor est nulla,
            similique commodi rerum! Obcaecati dolor est nulla, similique
            commodi rerum!
          </div>
          <br />
          <hr />
          <br />
          <div className="w-full flex flex-col items-center">
            <textarea
              placeholder="say something..."
              className="text-[12px] p-4 w-[95%] h-[80px] border rounded-sm outline-none resize-none "
            />
            <div className="flex justify-start w-[95%] ">
              <button className="flex mt-4  bg-purple-400 text-white w-[120px] h-[45px] items-center justify-center rounded-sm hover:cursor-pointer text-[14px]">
                comment
              </button>
            </div>
          </div>
          <br />
          <hr />
          <br />
          <div className="mx-4 text-[12px]">
            <div className="flex mb-2 ">
              <img
                src={polo}
                className="w-[40px] h-[40px] rounded-full border-2 border-purple-600 mr-2 object-cover"
              />
              <div>
                <div className="leading-tight ">name</div>
                <span className="text-[10px] leading-tight  font-bold ">
                  Time
                </span>
              </div>
            </div>
            <div className="p-2 bg-purple-100 rounded-sm">
              comments Obcaecati dolor est nulla, similique commodi rerum!
              Obcaecati dolor est nulla, similique commodi rerum! Obcaecati
              dolor est nulla, similique commodi rerum!
            </div>

            <div className="flex items-center my-2 ml-8 text-[11px] ">
              <img
                src={polo}
                className="w-[30px] h-[30px] rounded-full border-2 border-purple-600 mr-2 object-cover"
              />
              <div>
                <div className="leading-tight ">name</div>
                <span className="text-[10px] leading-tight font-bold ">
                  Time
                </span>
              </div>
            </div>
            <div className="p-2 bg-purple-50 rounded-sm ml-8 text-[11px] ">
              comments Obcaecati dolor est nulla, similique commodi rerum!
              Obcaecati dolor est nulla, similique commodi rerum! Obcaecati
              dolor est nulla, similique commodi rerum!
            </div>
          </div>
          <br />
          <hr />
          <br />
        </div>
        <br />
        <br />
        <br />
      </Main>
    </Container>
  );
};

export default DetailedProjectScreen;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 100vh;
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
