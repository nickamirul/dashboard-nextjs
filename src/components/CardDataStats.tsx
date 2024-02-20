import React, { ReactNode, useState } from "react";

interface CardDataStatsProps {
  title: string;
  total: string;
  //rate: string;
  levelUp?: boolean;
  levelDown?: boolean;
  children: ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  total,
  //rate,
  levelUp,
  levelDown,
  children,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <div className="rounded-xl border border-stroke bg-white px-7.5 py-3 shadow-default dark:border-strokedark dark:bg-boxdark">
      {/* <div
        className={`rounded-xl border ${
          hovered ? "bg-greentheme" : "bg-white"
        } px-7.5 py-3 shadow-default dark:border-strokedark dark:bg-boxdark`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      > */}
        <div className="flex">
          <div className="flex h-14 w-14 items-center justify-center rounded-md bg-meta-2 dark:bg-meta-4">
          {/* <div
            className={`flex h-14 w-14 items-center justify-center rounded-md ${
              hovered ? "bg-greentheme" : "bg-white"
            } px-7.5 py-3 shadow-default dark:border-strokedark dark:bg-boxdark`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          > */}
            {children}
          </div>

          <div className="ml-5">
            <h4 className="text-title-md font-bold text-black dark:text-white">
              {total}
            </h4>
            <span className="text-sm font-medium text-meta-11">{title}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDataStats;
