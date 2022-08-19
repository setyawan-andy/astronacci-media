import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <Image
          src="/assets/images/popular3.png"
          width={320}
          height={200}
          className="rounded-md object-cover"
          alt="popular"
        />
      </div>
      <div className="font-semibold text-gray-900">
        Ethereum 2.0: Upcoming Upgrade Will Not Eradicate High Gas Fees...
      </div>
      <div className="text-xs text-gray-500">
        The growing anticipation of the Merge of the Ethereum network's Beacon
        Chai...
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="mt-1">
            <Image
              src="/assets/images/avatar-2.jpg"
              width={32}
              height={32}
              className="rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <div className="text-xs font-light">name</div>
            <div className="text-xs font-light">username</div>
          </div>
        </div>
        <button className="py-2 px-4 text-xs border border-gray-200 rounded-md hover:bg-black hover:text-white">
          Read more
        </button>
      </div>
    </div>
  );
};

export default Card;
