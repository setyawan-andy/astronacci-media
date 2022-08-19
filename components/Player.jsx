import React from "react";
import ReactPlayer from "react-player";

const Player = () => {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <ReactPlayer
          url="https://res.cloudinary.com/drgchltvv/video/upload/v1660877502/videoplayback_x8thip.mp4"
          controls={true}
          width="320px"
          height="182px"
        />
      </div>
      <div className="font-semibold text-gray-900">
        Ethereum 2.0: Upcoming Upgrade Will Not Eradicate High Gas Fees...
      </div>
      <div className="text-xs text-gray-500">
        The growing anticipation of the Merge of the Ethereum network's Beacon
        Chai...
      </div>
      <div className="text-xs text-gray-500">
        Copyright : © 2022 Youtube/WORO WIDOWATI OFFICIAL
      </div>
    </div>
  );
};

export default Player;
