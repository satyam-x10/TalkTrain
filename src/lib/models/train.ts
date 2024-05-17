import exp from "constants";

// Define the Chat schema
const mongoose = require("mongoose");
const { Schema } = mongoose;
const TrainSchema = new Schema(
  {
    number: { type: Number, required: true },
    chats: [
      { message: { type: String, required: true } },
      { createdAt: { type: Date, default: Date.now } },
    ],
  },
  {
    timestamps: true,
  },
);

// Create a Mongoose model from the Chat schema
const Train = mongoose.models.Train || mongoose.model("Train", TrainSchema);

export default Train;
