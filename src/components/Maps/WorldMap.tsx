"use client";
import jsVectorMap from "jsvectormap";
import "jsvectormap/dist/css/jsvectormap.css";
import React, { useEffect } from "react";
import "../../js/us-aea-en";
import "jsvectormap/dist/maps/world";

const WorldMap: React.FC = () => {
  useEffect(() => {
    const mapOne = new jsVectorMap({
      selector: "#mapOne",
      map: "world",
      zoomButtons: false,

      regionStyle: {
        initial: {
          fill: "#A2D9CE",
        },
        hover: {
          fillOpacity: 1,
          fill: "#blue",
        },
      },
      regionLabelStyle: {
        initial: {
          fontFamily: "Satoshi",
          fontWeight: "semibold",
          fill: "#fff",
        },
        hover: {
          cursor: "pointer",
        },
      },

      labels: {
        regions: {
          render(code: string) {
            return code.split("-")[1];
          },
        },
      },
      markers: [
        {
          name: "Canada",
          coords: [62.393303, -116.8181455],
          style: { fill: "blue" },
        },
        {
          name: "Europe",
          coords: [50.3781, 30.436],
          style: { fill: "#E67E22" },
        },
        {
          name: "United States",
          coords: [37.0902, -95.7129],
          style: { fill: "purple" },
        },
        {
          name: "Australia",
          coords: [-26.853387500000004, 133.27515449999999],
          style: { fill: "#0B5345 " },
        },
      ],
    });

    return () => {
      mapOne.destroy();
    };
  }, []);

  return (
    <div className="md:w-140 md:h-95 w-140 flex h-100 flex-col rounded-lg border border-stroke bg-graybackground px-7.5 py-6 shadow-default shadow-md dark:border-strokedark dark:bg-boxdark xl:col-span-7">
      <div className="flex items-start justify-between">
        <div>
          <div>
            <h4 className="text-xl font-bold text-black">Top Engagement</h4>
          </div>
        </div>
      </div>

      <div className="h-65 oveflow-auto">
        <div id="mapOne" className="mapOne"></div>
        <div className="flex justify-center mt-6">
          <div className="mr-4 flex items-center">
            <div className="mr-1 h-3 w-3 rounded-full bg-blue-800"></div>
            <p className="text-s mr-1 font-bold text-black">Canada</p>
            <p className="text-xs text-graydark">(20%)</p>
          </div>
          <div className="mr-4 flex items-center">
            <div className="mr-1 h-3 w-3 rounded-full bg-purple-800"></div>
            <p className="text-s mr-1 font-bold text-black">USA</p>
            <p className="text-xs text-graydark">(18%)</p>
          </div>
          <div className="mr-4 flex items-center">
            <div className="mr-1 h-3 w-3 rounded-full bg-orange-500"></div>
            <p className="text-s mr-1 font-bold text-black">Europe</p>
            <p className="text-xs text-graydark">(12%)</p>
          </div>
          <div className="flex items-center">
            <div className="mr-1 h-3 w-3 rounded-full bg-green-800"></div>
            <p className="text-s mr-1 font-bold text-black">Australia</p>
            <p className="text-xs text-graydark">(8%)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldMap;
