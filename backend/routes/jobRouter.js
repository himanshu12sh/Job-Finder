import express from "express";
import {deleteJob, getAllJobs,getMyJobs,
  getSingleJob,postJob,updateJob,} from "../controllers/jobController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();
router.get("/getall", getAllJobs);
router.post("/post", isAuthenticated, postJob);
router.get("/getJobs", isAuthenticated, getMyJobs);
router.get("/getSingle/:id", isAuthenticated, getSingleJob);
router.put("/update/:id", isAuthenticated, updateJob);
router.delete("/delete/:id", isAuthenticated, deleteJob);
export default router;
