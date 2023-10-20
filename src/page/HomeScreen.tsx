import React, { useState } from "react";
import pix from "../assets/pix.jpg";
import { GrTasks } from "react-icons/gr";
import { BsPeople } from "react-icons/bs";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";

const HomeScreen = () => {
  const [toggle, setToggle] = useState(false);
  const onToggle = () => {
    setToggle(!toggle);
  };

  const data = Array.from({ length: 10 }, () => {
    return { name: "Petr" };
  });

  return (
    <div>
      <div className="mt-[100px] flex flex-wrap justify-center w-full ">
        {data?.map((props: any) => (
          <div className="w-[220px] min-h-[200px] border rounded-sm p-2 m-2 ">
            <div className="flex ">
              <img
                src={pix}
                className=" object-cover w-[40px] h-[40px] rounded-full "
              />
              <div>
                <div className="text-[12px] ml-2 leading-[1] uppercase font-bold ">
                  name
                </div>
                <div className="text-[11px] ml-2 leading-[1.5] flex items-center">
                  <GrTasks className="mr-1" /> &middot; 3 Projects
                </div>
              </div>
            </div>

            <div className="p-1 text-[12px] bg-purple-50 my-2 text-[#4e4e4e] leading-tight ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate quaerat numquam esse facilis consectetur quod aliquid,
              quibusdam blanditiis natus fugit!
            </div>

            <div className="w-full items-center justify-between flex text-[12px]">
              <div className="">
                {toggle ? (
                  <MdOutlineFavorite
                    className="hover:cursor-pointer"
                    onClick={onToggle}
                  />
                ) : (
                  <MdOutlineFavoriteBorder
                    className="hover:cursor-pointer"
                    onClick={onToggle}
                  />
                )}
                <div className="text-[10px]">3 Likes</div>
              </div>
              <div>
                <BsPeople />
                <div className="text-[10px]">
                  3 Followers &middot; 4 Following{" "}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
