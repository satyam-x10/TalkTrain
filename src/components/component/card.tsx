"use client";
import React from "react";
const Card = (trainChat: any) => {
  return (
    <div className="flex">
      <div className="p-2 space-y-4">
        <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-lg dark:bg-gray-800">
          <div className="flex-1">
            <p className="text-gray-500 dark:text-gray-400 line-clamp-1">
              {trainChat.trainChat.message}
            </p>
          </div>
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            {trainChat.trainChat.createdAt}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
