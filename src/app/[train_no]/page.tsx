import React from "react";
import data from "../../lib/scraper/train_data.json";
import { Chatbar } from "@/components/component/chatbar";
import { Chat } from "@/components/component/chat";
import { Typebar } from "@/components/component/typebar";
import { Navbar } from "@/components/component/navbar";
const TrainPage = ({ params }: { params: { train_no: string } }) => {
  const { train_no } = params;

  // Find the train object with matching train number
  const train = data.find((train) => train.train_number === train_no);

  // Check if train is found
  if (!train) {
    return (
      <div className="flex flex-col justify-around">
        <Navbar />
        <span>Train not found</span>
      </div>
    );
  }

  // Render train details
  return (
    <div className="flex flex-col">
      <Navbar />
      <Chatbar trainData={train} />
      <Chat train_no={train_no} />
      <Typebar />
    </div>
  );
};

export default TrainPage;
