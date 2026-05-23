import mongoose from "mongoose";

const InternshipApplicationSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is strictly required"],
      trim: true,
      minlength: [2, "First name must be at least 2 characters long"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is strictly required"],
      trim: true,
      minlength: [2, "Last name must be at least 2 characters long"],
    },
    email: {
      type: String,
      required: [true, "Email address is strictly required"],
      trim: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please provide a valid email address",
      ],
    },
    age: {
      type: Number,
      required: [true, "Age is required"],
      min: [16, "Applicants must be at least 16 years old"],
      max: [100, "Please provide a valid age"],
    },
    program: {
      type: String,
      required: [true, "Internship program selection is required"],
    },
    notes: {
      type: String,
      trim: true,
      maxlength: [1000, "Notes cannot exceed 1000 characters"],
    },
    cvPath: {
      type: String,
      required: [true, "CV file path is missing - check upload logic"],
    },
    status: {
      type: String,
      enum: {
        values: [
          "pending",
          "reviewed",
          "interview_scheduled",
          "accepted",
          "rejected",
        ],
        message: "{VALUE} is not a valid status",
      },
      default: "pending",
    },
    interviewDate: {
      type: Date,
    },
    interviewLink: {
      type: String,
      trim: true,
    },
    adminFeedback: {
      type: String,
      trim: true,
      maxlength: [2000, "Admin feedback cannot exceed 2000 characters"],
    },
  },
  { timestamps: true },
);

const InternshipApplication = mongoose.model(
  "InternshipApplication",
  InternshipApplicationSchema,
);

export default InternshipApplication;
