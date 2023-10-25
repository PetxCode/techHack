import { AiOutlineCamera } from "react-icons/ai";
import { useOneUser } from "../hooks/useAllUser";
import polo from "../assets/pix.jpg";
import { updateProfileInfo, updateProfileNameInfo } from "../api/API";
import { useUserDataState } from "../global/jotai";
import { useState } from "react";

import { GrTasks } from "react-icons/gr";
import { BsPeople } from "react-icons/bs";
import Swal from "sweetalert2";

const SettingScreen = () => {
  const [userID]: any = useUserDataState();
  const { userData } = useOneUser(userID.id);

  const [stack, setStack] = useState<string>(userData?.data?.userName);

  const [bio, setBio] = useState<string>(userData?.data?.bio);

  const [setClass, setSetClass] = useState<string>(userData?.data?.classSet);

  const [image, setImage] = useState<string>("");
  const [imageFile, setImageFile] = useState<string>("");

  const onHandleImage = (e: any) => {
    let file = e.target.files[0];
    let save = URL.createObjectURL(file);
    setImageFile(file);
    // setImageFile(image === "" ? userData?.data?.userName : file);
    setImage(save);
  };
  const formData = new FormData();
  formData.append("avatar", imageFile);

  (function () {
    imageFile !== ""
      ? setTimeout(() => {
          updateProfileInfo(userID.id, formData);

          setImageFile("");
        }, 1000)
      : null;
  })();

  return (
    <div className="w-[100%] mt-[50px]">
      <div className=" flex items-center flex-col ">
        {/* <img className="w-[100%] h-[400px] bg-purple-200" /> */}
        <div className=" mb-[49px] w-[80%] border mt-6 items-center flex flex-col ">
          <img
            src={userData?.data?.avatar ? userData?.data?.avatar : polo}
            className="w-[100%] bg-purple-200 h-[200px] object-cover sm:h-[300px] "
          />

          <div className="w-full">
            <div className=" pl-4 text-[12px]">
              <div className="text-[15px] font-bold capitalize mt-8">
                {userData?.data?.userName}
              </div>
              <div className="mb-1">Software Engineer</div>
              <div className="mb-4 flex items-center">
                <GrTasks className="mx-1 text-[15px] " />{" "}
                {userData?.data?.projects.length} Projects
                <div className="w-1 h-1 bg-[rgba(0,0,0,0.6)] rounded-full mx-1 " />
                <BsPeople className="mx-1 text-[15px] " />{" "}
                {userData?.data?.follower.length} Follower{" "}
                <div className="w-1 h-1 bg-[rgba(0,0,0,0.6)] rounded-full mx-1 " />
                {userData?.data?.following.length} Following{" "}
              </div>
            </div>
            <br />
            <hr />
            <br />
          </div>

          <div className="flex flex-wrap justify-center w-full  ">
            <div className="mb-[20px]">
              <div className="w-[300px] h-[200px] relative  mb-4 overflow-hidden rounded-md ">
                <img
                  src={image === "" ? userData?.data?.avatar : image}
                  className="w-[300px] object-cover h-[200px] border mb-4 "
                />
                <div className="w-full h-full bg-[rgba(0,0,0,0.6)] absolute top-0 left-0 " />
                <input
                  type="file"
                  // accept="image/jpg"
                  className="hidden"
                  id="pix"
                  onChange={onHandleImage}
                />
                <div
                  className="flex absolute right-2 bottom-2
"
                >
                  <label
                    className=" mx-1 p-2 bg-purple-50 hover:bg-purple-200 rounded-full hover:cursor-pointer transition-all duration-300"
                    htmlFor="pix"
                  >
                    <AiOutlineCamera size={30} />
                  </label>
                </div>
              </div>

              <input
                className="w-[100%] text-[12px] border rounded-sm h-[45px] pl-2 outline-none my-2"
                placeholder="Enter your Choice userName"
                value={stack}
                onChange={(e: any) => {
                  setStack(e.target.value);
                }}
              />

              <input
                className="w-[100%] text-[12px] border rounded-sm h-[45px] pl-2 outline-none my-2"
                placeholder="Enter your set Class: 07"
                value={setClass}
                onChange={(e: any) => {
                  setSetClass(e.target.value);
                }}
              />

              <textarea
                className="w-[100%] h-[90px] text-[12px] border rounded-sm pl-2 outline-none my-2 resize-none"
                placeholder="Enter your Bio"
                value={bio}
                onChange={(e: any) => {
                  setBio(e.target.value);
                }}
              />

              <div
                className="h-[40px] w-[100%] bg-purple-700 rounded-sm text-white flex items-center text-[13px] justify-center hover:cursor-pointer mt-3 "
                onClick={() => {
                  Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your profile has been Updated",
                    showConfirmButton: false,
                    timer: 1500,
                  }).then(() => {
                    updateProfileNameInfo(userID.id, stack);
                    // updateProfileInfo(userID.id, formData);
                    console.log(stack);
                  });
                }}
              >
                Update Profile Name
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingScreen;
