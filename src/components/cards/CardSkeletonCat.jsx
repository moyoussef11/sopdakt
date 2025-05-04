import React from "react";
import { Skeleton } from "antd";

const CardSkeletonCat = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] md:w-[140px] md:h-[140px] lg:w-[200px] lg:h-[200px] rounded-full overflow-hidden">
      <Skeleton.Avatar size={150} />
      <Skeleton
        active
        paragraph={{ rows: 1, width: "100px" }}
        title={false}
        className="!mx-auto my-5 !w-fit"
      />
    </div>
  );
};

export default CardSkeletonCat;
