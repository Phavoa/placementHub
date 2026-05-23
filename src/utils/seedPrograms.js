import mongoose from "mongoose";
import { connectDB } from "../config/db.js";
import InternshipProgram from "../models/InternshipProgram.js";

const programsToSeed = [
  { title: "Tech & IT Internships", category: "Technology" },
  { title: "Business Internships", category: "Business" },
  { title: "Finance & Accounting Internships", category: "Finance" },
  { title: "Administrative & Office Internships", category: "Administrative" },
  { title: "Marketing & Media Internships", category: "Marketing" },
  { title: "Healthcare Internships", category: "Healthcare" },
  { title: "Legal & Compliance Internships", category: "Legal" },
  { title: "Logistics & Supply Chain Internships", category: "Logistics" },
  { title: "Engineering & Technical Internships", category: "Engineering" },
];

const seedPrograms = async () => {
  try {
    await connectDB();
    console.log("Connected to DB, starting seed...");

    for (const data of programsToSeed) {
      await InternshipProgram.findOneAndUpdate(
        { title: data.title },
        { ...data, isActive: true },
        { upsert: true, new: true, setDefaultsOnInsert: true },
      );
      console.log(`Upserted program: ${data.title}`);
    }

    console.log("Seeding completed successfully.");
    process.exit(0);
  } catch (error) {
    console.error("Seeding failed:");
    console.error(error);
    process.exit(1);
  }
};

seedPrograms();
