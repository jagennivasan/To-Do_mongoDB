import mongoose, { Schema } from "mongoose";

const toDoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ToDo = mongoose.models.ToDo || mongoose.model("ToDo", toDoSchema);

export default ToDo;
