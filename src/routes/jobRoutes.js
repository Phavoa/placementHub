import express from "express";
import {
  createJob,
  getAllJobs,
  getJobById,
  updateJob,
  deleteJob,
} from "../controllers/jobController.js";

const router = express.Router();

router.route("/").post(createJob).get(getAllJobs);
router.route("/:id").get(getJobById).patch(updateJob).delete(deleteJob);

export default router;
