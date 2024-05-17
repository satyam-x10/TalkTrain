import { NextResponse } from "next/server";
import { connectToMongoDB } from "@/lib/db";
import Train from "@/lib/models/train";

export async function GET(req:Request) {
  const train_no = req.url.split("/").pop();
  try {
    await connectToMongoDB();

    const data = await Train.findOne({ number: train_no });

    return NextResponse.json({ data: data });
  } catch (error) {
    console.error("Errors fetching data:", error);
    return NextResponse.error();
  }
}

export async function POST(req:Request) {
  const { train_no, chat } = await req.json();

  try {
    await connectToMongoDB();

    const chatObject = { message: chat }; // Create an object with the message content

    let data = await Train.findOneAndUpdate(
      { number: train_no },
      { $push: { chats: chatObject } }, // Push the chat object
      { new: true },
    );

    if (!data) {
      // If train number doesn't exist, create a new document
      data = await Train.create({ number: train_no, chats: [chatObject] });
    }

    return NextResponse.json({ data: data });
  } catch (error) {
    console.error("Errors posting data:", error);
    return NextResponse.error();
  }
}
