import mongoose from "mongoose";

const InternshipProgramSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Program title is required"],
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    category: {
      type: String,
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

const InternshipProgram = mongoose.model(
  "InternshipProgram",
  InternshipProgramSchema,
);

export default InternshipProgram;
