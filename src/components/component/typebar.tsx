"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";

export function Typebar() {
  const [textMsg, setTextMsg] = useState("");
  const train_no = window.location.pathname.split("/").pop();

  const sendMessage = async () => {
    try {
      await fetch(`/api/${train_no}`, {
        method: "POST",
        body: JSON.stringify({ train_no, chat: textMsg }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setTextMsg(""); // Clear the input field after the message is sent
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="flex flex-row items-center justify-around space-x-2 space-y-2 m-2 p-2 w-[95vw]">
      <Input
        value={textMsg} // Set the value of the input to the state
        onChange={(e) => setTextMsg(e.target.value)}
        className="border-2 flex-1 border-gray-300 focus:border-blue-500 transition-colors duration-200"
        id="text-input"
        placeholder="Type here..."
        type="text"
      />
      <Button
        onClick={sendMessage}
        className="bg-blue-500 text-white mx-1 px-2 py-1 rounded"
      >
        Send
      </Button>
    </div>
  );
}
