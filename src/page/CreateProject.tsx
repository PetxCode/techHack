import hard from "../assets/100.jpg";
import styled from "styled-components";
import { useState } from "react";
import { AiOutlineCamera } from "react-icons/ai";
import {
  useCountedNumber,
  useCreateProject,
  useUserDataState,
} from "../global/jotai";
import { createProject } from "../api/API";
import { useNavigate } from "react-router-dom";

const Step1 = () => {
  const [state, setState]: any = useCreateProject();
  const [stateCount, setStateCount] = useCountedNumber();

  const [title, setTitle] = useState<string>(state.title);
  const [url, setURL] = useState<string>(state.url);

  console.log(stateCount);
  return (
    <div className="mt-8 w-full flex items-center flex-col ">
      <div className="w-full flex justify-center">
        <div className="flex items-center">
          <div className="w-[40px] h-[40px] rounded-full border-pupple-600 border-1 text-white text-[12px] bg-purple-700 flex justify-center items-center font-bold mx-2 ">
            1
          </div>

          <div className="w-[50px] h-1 bg-purple-500" />

          <div className="w-[40px] h-[40px] rounded-full border-purple-600 border-1 text-purple-950 text-[12px] bg-purple-100 flex justify-center items-center font-bold mx-2 ">
            2
          </div>

          <div className="w-[50px] h-1 bg-purple-300" />
          <div className="w-[40px] h-[40px] rounded-full border-purple-600 border-1 text-purple-950 text-[12px] bg-purple-100 flex justify-center items-center font-bold mx-2 ">
            3
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <input
        className="w-[90%] text-[12px] border rounded-sm h-[45px] pl-2 outline-none "
        placeholder="Enter Title"
        value={title}
        onChange={(e: any) => {
          setTitle(e.target.value);
        }}
      />
      <input
        className="w-[90%] mt-2 text-[12px] border rounded-sm h-[45px] pl-2 outline-none "
        placeholder="Enter URL"
        value={url}
        onChange={(e: any) => {
          setURL(e.target.value);
        }}
      />

      <div className="flex justify-end w-[91%]">
        <button
          className="bg-purple-500 text-white px-5 text-[12px] mt-4 py-2 rounded-sm mx-1"
          onClick={() => {
            setState({
              title: title,
              url: url,
              task: state.task,
              about: state.about,
            });
            setStateCount(1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

const Step2 = () => {
  const [state, setState]: any = useCreateProject();
  const [stateCount, setStateCount] = useCountedNumber();

  const [task, setTask] = useState<string>(state.task);
  const [about, setAbout] = useState<string>(state.about);

  console.log(stateCount);

  return (
    <div className="mt-8 w-full flex items-center flex-col ">
      <div className="w-full flex justify-center">
        <div className="flex items-center">
          <div className="w-[40px] h-[40px] rounded-full border-pupple-600 border-1 text-white text-[12px] bg-purple-700 flex justify-center items-center font-bold mx-2 ">
            1
          </div>

          <div className="w-[50px] h-1 bg-purple-500" />

          <div className="w-[40px] h-[40px] rounded-full border-purple-600 border-1 text-white text-[12px] bg-purple-700 flex justify-center items-center font-bold mx-2 ">
            2
          </div>

          <div className="w-[50px] h-1 bg-purple-300" />
          <div className="w-[40px] h-[40px] rounded-full border-purple-600 border-1 text-purple-950 text-[12px] bg-purple-100 flex justify-center items-center font-bold mx-2 ">
            3
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <textarea
        className="w-[90%] h-[105px] py-1 resize-none [90%] text-[12px] border rounded-sm  pl-2 outline-none "
        placeholder="Enter Task"
        value={task}
        onChange={(e: any) => {
          setTask(e.target.value);
        }}
      />
      <textarea
        className="w-[90%] h-[105px] py-1 resize-none mt-2 text-[12px] border rounded-sm  pl-2 outline-none "
        placeholder="Enter About the Project"
        value={about}
        onChange={(e: any) => {
          setAbout(e.target.value);
        }}
      />

      <div className="flex  w-[91%] justify-end">
        <button
          className="bg-black text-white px-5 text-[12px] mt-4 py-2 rounded-sm mx-1 "
          onClick={() => {
            // setState({ title, url });
            setStateCount(0);
          }}
        >
          Prev
        </button>
        <button
          className="bg-purple-500 text-white px-5 text-[12px] mt-4 py-2 rounded-sm mx-1"
          onClick={() => {
            setState({
              title: state.title,
              url: state.url,

              task: task,
              about: about,
            });
            setStateCount(2);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

const Step3 = () => {
  const navigate = useNavigate();
  const [state, setState]: any = useCreateProject();
  const [stateCount, setStateCount] = useCountedNumber();
  const [userID]: any = useUserDataState();

  console.log(stateCount);

  const [stack, setStack] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [imageFile, setImageFile] = useState<string>("");

  const onHandleImage = (e: any) => {
    console.log("state", e.target.files[0]);
    let file = e.target.files[0];
    let save = URL.createObjectURL(file);
    setImageFile(file);
    setImage(save);
  };

  const formData = new FormData();
  formData.append("url", state.url);
  formData.append("task", state.task);
  formData.append("title", state.title);
  formData.append("motivation", state.about);

  formData.append("stack", stack);
  formData.append("avatar", imageFile);

  return (
    <div className="mt-8 w-full flex items-center flex-col ">
      <div className="w-full flex justify-center">
        <div className="flex items-center">
          <div className="w-[40px] h-[40px] rounded-full border-pupple-600 border-1 text-white text-[12px] bg-purple-700 flex justify-center items-center font-bold mx-2 ">
            1
          </div>

          <div className="w-[50px] h-1 bg-purple-500" />

          <div className="w-[40px] h-[40px] rounded-full border-purple-600 border-1 text-white text-[12px] bg-purple-700 flex justify-center items-center font-bold mx-2 ">
            2
          </div>

          <div className="w-[50px] h-1 bg-purple-500" />
          <div className="w-[40px] h-[40px] rounded-full border-purple-600 border-1 text-white text-[12px] bg-purple-700 flex justify-center items-center font-bold mx-2 ">
            3
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="w-[300px] h-[200px] relative  mb-4 ">
        <img
          src={image === "" ? hard : image}
          className="w-[300px] object-cover h-[200px] rounded-md border mb-4 "
        />
        <input
          type="file"
          // accept="image/jpg"
          className="hidden"
          id="pix"
          onChange={onHandleImage}
        />
        <label
          className="absolute right-2 bottom-2 p-2 bg-purple-50 hover:bg-purple-200 rounded-full hover:cursor-pointer transition-all duration-300"
          htmlFor="pix"
        >
          <AiOutlineCamera size={30} />
        </label>
      </div>
      <input
        className="w-[90%] text-[12px] border rounded-sm h-[45px] pl-2 outline-none "
        placeholder="Tech used eg: React, MongoDB, PassportJS, NextJS"
        value={stack}
        onChange={(e: any) => {
          setStack(e.target.value);
        }}
      />

      <div className="flex  w-[91%] justify-end">
        <button
          className="bg-black text-white w-[67px] h-[35px] flex justify-center items-center text-[12px] mt-4  rounded-sm mx-1 "
          onClick={() => {
            setStateCount(1);
          }}
        >
          Prev
        </button>

        {state.title !== "" &&
        state.task !== "" &&
        state.url !== "" &&
        state.about !== "" &&
        stack !== "" &&
        image !== "" ? (
          <button
            className="bg-purple-500 text-white px-5 text-[12px] mt-4 py-2 rounded-sm mx-1"
            onClick={() => {
              setState({
                title: state.title,
                url: state.url,
                task: state.task,
                about: state.about,

                stack: state.stack !== "" ? state.stack : stack,
                image: state.image !== "" ? state.image : image,
              });

              console.log(state);
              createProject(formData, userID.id).then(() => {
                navigate("/");
                setStateCount(1);
                setState({
                  title: "",
                  url: "",
                  task: "",
                  about: "",

                  stack: "",
                  image: "",
                });
              });
            }}
          >
            Submit
          </button>
        ) : (
          <div>
            <button
              className="bg-purple-500 text-white w-[150px] h-[35px] text-[12px] mt-4  rounded-sm mx-1"
              disabled
            >
              Submit(Disabled)
            </button>
            <div className="text-red-500 text-[10px] flex justify-end mr-1">
              All Field hasn't been filled{" "}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const CreateProjectScreen = () => {
  const [stateCount] = useCountedNumber();

  return (
    <Container>
      <Main>
        <div className=" w-[95%] sm:w-[80%] border mt-6 p-4">
          <br />

          <div className="text-center font-bold  ">Creating New Project</div>
          <div></div>
          <br />
          <hr />

          {stateCount === 0 ? (
            <Step1 />
          ) : stateCount === 1 ? (
            <Step2 />
          ) : stateCount === 2 ? (
            <Step3 />
          ) : null}
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
