"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";
import { RadialBar, ResponsiveContainer } from "recharts";



const data = [
  {
    name: "Total",
    count: 106,
    fill: "white",
  },
  {
    name: "Girls",
    count: 53,
    fill: "#FAE27C",
  },
  {
    name: "Boys",
    count: 53,
    fill: "#C3EBFA",
  },
];

const RadialBarChartWithNoSSR = dynamic<Partial<RadialBarChartProps>>(
  () => import('recharts').then((mod) => mod.RadialBarChart as any),
  { ssr: false }
);


function CountChart() {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/*TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font=semibold">Student</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      {/*CHART */}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChartWithNoSSR
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChartWithNoSSR>
        </ResponsiveContainer>
        <Image
          src="/maleFemale.png"
          alt=""
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {/*BOTTOM */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-smSky rounded-full " />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-gray-300">Boys (55%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-smYellow rounded-full " />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-gray-300">Girls (55%)</h2>
        </div>
      </div>
    </div>
  );
}

export default CountChart;
