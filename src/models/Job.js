import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Job title is required"],
      trim: true,
    },
    companyName: {
      type: String,
      required: [true, "Company name is required"],
      trim: true,
    },
    companyLogo: {
      type: String, // Can be a URL or file path, optional
      trim: true,
    },
    location: {
      type: String,
      required: [true, "Location is required"],
      trim: true,
    },
    type: {
      type: String,
      required: [true, "Job type is required"],
      enum: ["Full Time", "Part Time", "Contract", "Internship", "Freelance"],
      default: "Full Time",
    },
    experienceLevel: {
      type: String,
      required: [true, "Experience level is required"],
      enum: ["Entry Level", "Mid Level", "Senior Level", "Executive"],
      default: "Mid Level",
    },
    salary: {
      type: String,
      trim: true,
    },
    overview: {
      type: String,
      required: [true, "Job overview is required"],
    },
    aboutCompany: {
      type: String,
    },
    responsibilities: [
      {
        type: String,
        trim: true,
      },
    ],
    requirements: [
      {
        type: String,
        trim: true,
      },
    ],
    benefits: [
      {
        type: String,
        trim: true,
      },
    ],
    tags: [
      {
        type: String,
        trim: true,
      },
    ],
    status: {
      type: String,
      enum: ["Draft", "Published", "Archived"],
      default: "Draft",
    },
    featured: {
      type: Boolean,
      default: false,
    },
    remote: {
      type: Boolean,
      default: false,
    },
    deadline: {
      type: Date,
    },
  },
  { timestamps: true },
);

const Job = mongoose.model("Job", JobSchema);

export default Job;
