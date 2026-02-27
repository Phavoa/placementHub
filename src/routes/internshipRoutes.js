import express from "express";
import {
  applyForInternship,
  getAllApplications,
  getApplicationById,
  updateApplicationStatus,
  deleteApplication,
  getAllPrograms,
  createProgram,
  updateProgram,
  deleteProgram,
} from "../controllers/internshipController.js";
import multer from "multer";
import path from "path";
import fs from "fs";

const router = express.Router();

// Ensure uploads directory exists
const uploadDir = "uploads/cvs";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer Config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname),
    );
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (req, file, cb) => {
    const filetypes = /pdf|doc|docx/;
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase(),
    );
    const mimetype =
      file.mimetype === "application/pdf" ||
      file.mimetype === "application/msword" ||
      file.mimetype ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document";

    if (extname && mimetype) {
      return cb(null, true);
    } else {
      cb(new Error("Only PDF, DOC, and DOCX files are allowed"));
    }
  },
});

// Public Routes
router.post("/apply", upload.single("cv"), applyForInternship);

// Internship Program Routes (Moved up to prevent conflict with /:id)
router.get("/programs/all", getAllPrograms);
router.post("/programs", createProgram);
router.patch("/programs/:id", updateProgram);
router.delete("/programs/:id", deleteProgram);

// Admin Application Routes
router.get("/", getAllApplications);
router.get("/:id", getApplicationById);
router.patch("/:id/status", updateApplicationStatus);
router.delete("/:id", deleteApplication);

export default router;
