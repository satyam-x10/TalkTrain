import React from "react";
import data from "../../lib/scraper/train_data.json";
import { Chatbar } from "@/components/component/chatbar";
import  {Chat}  from "@/components/component/chat";
import { Typebar } from "@/components/component/typebar";
const TrainPage = ({ params }: { params: { train_no: string } }) => {
  const { train_no } = params;

  // Find the train object with matching train number
  const train = data.find((train) => train.train_number === train_no);

  // Check if train is found
  if (!train) {
    return <div>Train not found</div>;
  }

  // Render train details
  return (
    <div> 
         <Chatbar trainData={train} />
         <div><Chat /></div>         
         <Typebar/>
    </div>
  );
};

export default TrainPage;
