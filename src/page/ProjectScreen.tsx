import { AiOutlineLike } from "react-icons/ai";
import { BiCommentDots } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import { useOneUser, useProjectUser } from "../hooks/useAllUser";
import polo from "../assets/pix.jpg";
import { followME } from "../api/API";
import { useUserDataState } from "../global/jotai";

const ProjectScreen = () => {
  const [userID]: any = useUserDataState();
  const { id } = useParams();
  const { data } = useProjectUser(id!);
  const { userData } = useOneUser(id!);

  console.log("id2: ", userData?.data?._id);
  console.log("id: ", userID.id);

  return (
    <div className="w-[100%] mt-[50px]">
      <div className=" flex items-center flex-col ">
        {/* <img className="w-[100%] h-[400px] bg-purple-200" /> */}
        <div className="w-[80%] border mt-6 items-center flex flex-col ">
          <img
            src={polo}
            className="w-[100%] bg-purple-200 h-[200px] object-cover sm:h-[300px] "
          />
          <div className="w-full">
            <div className=" pl-4 text-[12px]">
              <div className="text-[15px] font-bold capitalize mt-8">
                {userData?.data?.userName}
              </div>
              <div className="mb-5">
                <a href="https://google.com" target="_blank">
                  Software Engineer
                </a>
              </div>

              {userData?.data?._id !== userID.id && (
                <div
                  className="h-[40px] w-[100px] bg-purple-700 rounded-sm text-white flex items-center justify-center hover:cursor-pointer "
                  onClick={() => {
                    followME(userID.id!, id!);
                    console.log(userID.id!, id!);
                  }}
                >
                  Follow Me
                </div>
              )}
            </div>
            <br />
            <hr />
            <br />
          </div>

          <div className="flex flex-wrap justify-center w-full  ">
            {data?.map((props: any) => (
              <div className="p-2 border rounded-sm m-2 text-[12px]  w-[300px] ">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-[15px] font-bold capitalize ">
                      {props.title}
                    </div>
                    <div className="mb-5">
                      <a href={`${props.url}`} target="_blank">
                        <div className="break-words w-[150px]  line-clamp-2 leading-tight italic text-[10px] font-[400] mt-2 ">
                          {props.url}
                        </div>
                      </a>
                    </div>
                  </div>
                  <Link to={`${props?._id}/detailed-project`}>
                    <div className="px-4 py-2 bg-purple-700 rounded-sm text-white ">
                      View Project
                    </div>
                  </Link>
                </div>

                <div>
                  <div>Assigned Task</div>
                  <div className="bg-purple-50 p-2 rounded-sm mt-1  ">
                    {props.motivation}
                  </div>
                  <br />
                  <hr />
                  <br />

                  <div>Tech used</div>
                  <div className="flex flex-wrap">
                    {props.stack.split(",").map((props: any) => (
                      <div className="py-1 px-2 m-1 rounded-full bg-orange-400 text-white text-[10px]  ">
                        {props}
                      </div>
                    ))}
                  </div>

                  <br />
                  <hr />
                  <br />

                  <div className="flex items-center justify-between">
                    <div>
                      {" "}
                      <AiOutlineLike
                        size={40}
                        className="mb-1 p-2 rounded-full 
                      transition-all duration-300s hover:bg-purple-100 hover:cursor-pointer "
                      />{" "}
                      {props?.like?.length} Likes
                    </div>
                    <div>
                      {" "}
                      <BiCommentDots
                        size={40}
                        className="mb-1 p-2 rounded-full 
                      transition-all duration-300s hover:bg-none "
                      />{" "}
                      {props?.comments?.length} comments
                    </div>
                  </div>
                </div>

                {/* <hr /> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectScreen;
