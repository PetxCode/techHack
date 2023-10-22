import { FC } from "react";
import polo from "../assets/pix.jpg";
import { useOneUser } from "../hooks/useAllUser";
import moment from "moment";

interface iProps {
  props: any;
}

const Personcard: FC<iProps> = ({ props }) => {
  let { userData }: any = useOneUser(props.userID);

  return (
    <div>
      <div className="flex my-2 ">
        <img
          src={polo}
          className="w-[40px] h-[40px] rounded-full border-2 border-purple-600 mr-2 object-cover"
        />
        <div>
          <div className="leading-tight ">{userData?.data?.userName}</div>

          <span className="text-[10px] leading-tight  font-bold ">
            {moment(props.createdAt).fromNow()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Personcard;
