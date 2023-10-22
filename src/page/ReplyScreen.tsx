import { FC } from "react";
import polo from "../assets/pix.jpg";
import { useProjectCommentReadReply } from "../hooks/useAllUser";
import moment from "moment";
import Personcard from "./Personcard";
import ReplyPersonal from "./ReplyPersonal";

interface iProps {
  props: any;
}
const ReplyScreen: FC<iProps> = ({ props }) => {
  const { commentData } = useProjectCommentReadReply(props._id);

  console.log(commentData);

  return (
    <div>
      {commentData?.map((props: any) => (
        <div>
          <ReplyPersonal props={props} />

          <div className="p-2 bg-purple-50 rounded-sm ml-8 text-[11px] leading-tight  ">
            {props.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReplyScreen;
