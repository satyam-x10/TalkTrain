// @ts-ignore
"use  client";

import { JSX, SVGProps } from "react";

export function Chatbar({ trainData }:{trainData: any}) {
  return (
    <header className="bg-gray-900 text-white py-4 px-6 md:px-8 lg:px-10 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="bg-gray-800 rounded-md px-3 py-1 text-sm font-medium">
          {trainData.train_number || "Train no"}
        </div>
        <div className="text-lg font-semibold hidden sm:block">
          {trainData.train_name || "Train Name"}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span>{trainData.boarding_station || "Boarding Station"}</span>
          <ArrowRightIcon className="w-4 h-4" />
          <span>{trainData.destination_station || "Destination Station"}</span>
        </div>
      </div>
    </header>
  );
}

function ArrowRightIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
