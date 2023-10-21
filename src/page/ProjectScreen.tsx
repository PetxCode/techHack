import { AiOutlineLike } from "react-icons/ai";
import { BiCommentDots } from "react-icons/bi";

const ProjectScreen = () => {
  let data = Array.from({ length: 10 });
  console.log(data);
  return (
    <div className="w-[100%] mt-[50px]">
      <div className=" flex items-center flex-col ">
        {/* <img className="w-[100%] h-[400px] bg-purple-200" /> */}
        <div className="w-[80%] border mt-6 items-center flex flex-col ">
          <br />
          <br />
          <div>Developed product of Name</div>

          <br />
          <hr />
          <br />

          <div className="flex flex-wrap justify-center w-full  ">
            {data.map((props: any) => (
              <div className="p-2 border rounded-sm m-2 text-[12px]  w-[300px] ">
                <div>
                  <div className="text-[15px] font-bold capitalize ">
                    Project Name
                  </div>
                  <div className="mb-5">
                    <a href="https://google.com" target="_blank">
                      https://google.com
                    </a>
                  </div>
                </div>

                <div>
                  <div>Assigned Task</div>
                  <div className="bg-purple-50 p-2 rounded-sm mt-1  ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Obcaecati dolor est nulla, similique commodi rerum!
                    Obcaecati dolor est nulla, similique commodi rerum!
                    Obcaecati dolor est nulla, similique commodi rerum!
                  </div>
                  <br />
                  <hr />
                  <br />

                  <div>Tech used</div>
                  <div className="flex flex-wrap">
                    <div className="py-1 px-2 m-1 rounded-full bg-orange-400 text-white text-[10px]  ">
                      MongoDB
                    </div>
                    <div className="py-1 px-2 m-1 rounded-full bg-orange-400 text-white text-[10px]  ">
                      MongoDB
                    </div>
                    <div className="py-1 px-2 m-1 rounded-full bg-orange-400 text-white text-[10px]  ">
                      MongoDB
                    </div>
                    <div className="py-1 px-2 m-1 rounded-full bg-orange-400 text-white text-[10px]  ">
                      MongoDB
                    </div>
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
                      10 Likes
                    </div>
                    <div>
                      {" "}
                      <BiCommentDots
                        size={40}
                        className="mb-1 p-2 rounded-full 
                      transition-all duration-300s hover:bg-none "
                      />{" "}
                      30 comments
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
