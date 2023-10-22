import polo from "../assets/pix.jpg";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import {
  useOneProject,
  useOneUser,
  useProjectCommentRead,
} from "../hooks/useAllUser";
import { createProjectComment } from "../api/API";
import { useUserDataState } from "../global/jotai";
import { useState } from "react";
import Personcard from "./Personcard";
import ReplyScreen from "./ReplyScreen";

const DetailedProjectScreen = () => {
  const { productID, id }: any = useParams();
  const [user]: any = useUserDataState();
  let { userData }: any = useOneUser(id);
  let { data } = useOneProject(productID!);

  const [state, setState] = useState<string>("");

  const { projectData } = useProjectCommentRead(productID);

  return (
    <Container>
      <Main>
        <div className="w-[80%] border mt-6 ">
          <br />
          <br />
          <br />

          <div className=" pl-4 flex">
            Developed product by{" "}
            <div className=" ml-1 font-bold capitalize ">
              {userData?.data?.userName}
            </div>
          </div>
          <br />
          <hr />
          <br />

          <img
            src={data?.avatar ? data?.avatar : polo}
            className="w-[100%] bg-purple-200 h-[300px] object-cover"
          />

          <div className=" pl-4 text-[12px]">
            <div className="text-[14px] capitalize mt-8 flex items-center">
              Project Name:
              <strong className=" ml-1 break-words flex-1 capitalize">
                {" "}
                {data?.title}
              </strong>
            </div>
            <div className="mb-5">
              <a href={`${data?.url}`} target="_blank">
                {data?.url}
              </a>
            </div>
          </div>
          <br />
          <hr />
          <br />
          <div className=" pl-4 ">Assigned Task</div>

          <div className="bg-purple-50 p-2 rounded-sm mt-1 text-[12px] ">
            {data?.task}
          </div>
          <br />
          <hr />
          <br />

          <div className=" pl-4 ">Motivation</div>

          <div className="bg-purple-50 p-2 rounded-sm mt-1 text-[12px] ">
            {data?.motivation}
          </div>
          <br />
          <hr />
          <br />
          <div className="w-full flex flex-col items-center">
            <textarea
              placeholder="say something..."
              className="text-[12px] p-2 w-[95%] h-[80px] border rounded-sm outline-none resize-none "
              value={state}
              onChange={(e: any) => {
                setState(e.target.value);
              }}
            />
            <div className="flex justify-start w-[95%] ">
              {data?.user === user?.id ? (
                <button
                  className={`
                  flex mt-4 bg-purple-700 text-white w-[120px] h-[45px] items-center justify-center rounded-sm hover:cursor-pointer text-[13px] leading-tight
                  `}
                  onClick={() => {
                    // createProjectComment(state, user.id, productID);
                  }}
                >
                  Don't worry, it's your Project
                </button>
              ) : (
                <button
                  className="flex mt-4  bg-purple-700 text-white w-[120px] h-[45px] items-center justify-center rounded-sm hover:cursor-pointer text-[14px]"
                  onClick={() => {
                    createProjectComment(state, user.id, productID);
                  }}
                >
                  comment
                </button>
              )}
            </div>
          </div>
          <br />
          <hr />
          <br />
          {projectData?.length > 0 ? (
            <>
              {projectData?.map((props: any) => (
                <div className="mx-4 text-[12px] my-4 ">
                  <Personcard props={props} />
                  <div className="p-2 bg-purple-100 rounded-sm">
                    {props?.title}
                  </div>

                  {data.user === user.id && (
                    <div className=" flex justify-end w-[100%]">
                      <div className="border mt-1 w-[90%] flex  ">
                        <input
                          className="flex-1 outline-none pl-1 "
                          placeholder="reply comment"
                        />
                        <button className="px-2 py-1 bg-purple-300 text-white rounded-sm">
                          Reply
                        </button>
                      </div>
                    </div>
                  )}

                  <ReplyScreen props={props} />
                </div>
              ))}
            </>
          ) : (
            <div className="text-[12px]   font-[400] p-2 bg-purple-100 ">
              Be the First to comment on the Project because No comment Yet, on
              this Project
            </div>
          )}
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
