import mongoose from "mongoose";
import { Note } from "./noteType";

const noteSchema = new mongoose.Schema<Note>(
  {
    /* this type is given to the mongoose now we gonna give type with the help of ts
    title: {
        type: String,
        required: [true, "title must be provided"
    },
    subtitle: {
        type: String
    } */

    title: {
      type: String,
      required: true,
    },
    subtitle: String,
    description: {
      type: String,
      required: true,
    },
    file: String,
  },
  { timestamps: true }
);

export default mongoose.model<Note>("Note", noteSchema);
