import React from "react";
import LikeBtn from "../../../assets/like.svg";
import UnlikeBtn from "../../../assets/unlike.svg";

const VideoDescription = ({ video }) => {
  const { title, description, date, likes, unlikes } = video;
  return (
    <div>
      <h1 className="text-lg font-semibold tracking-tight text-slate-800">
        {title}
      </h1>
      <div className="pb-4 flex items-center space-between border-b">
        <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
          Uploaded on {date}
        </h2>

        {/* <!-- like/unlike --> */}
        <div className="flex gap-10 w-48">
          <div className="flex gap-1">
            <div className="shrink-0">
              <img className="w-5 block" src={LikeBtn} alt="Like" />
            </div>
            <div className="text-sm leading-[1.7142857] text-slate-600">
              {likes}
            </div>
          </div>
          <div className="flex gap-1">
            <div className="shrink-0">
              <img className="w-5 block" src={UnlikeBtn} alt="Unlike" />
            </div>
            <div className="text-sm leading-[1.7142857] text-slate-600">
              {unlikes}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
        {description}
      </div>
    </div>
  );
};

export default VideoDescription;
