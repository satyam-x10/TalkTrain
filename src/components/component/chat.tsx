"use client";
import React, { useEffect, useState } from "react";
import Card from "./card";

export function Chat({ train_no }:{train_no: string}) {
  const [trainData, setTrainData] = useState<Array<object>>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/${train_no}`);
        const data = await response.json();
        setTrainData(data?.data?.chats);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData(); // Initial fetch

    const interval = setInterval(fetchData, 2000); // Fetch data every second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [train_no]); // Include train_no in dependency array to re-fetch if train_no changes

  return (
    <div className="flex flex-col h-[60vh] justify-start pb-10 overflow-y-auto">
      {trainData?.map((trainChat) => (
        <Card key={trainChat} trainChat={trainChat} />
      ))}
    </div>
  );
}
