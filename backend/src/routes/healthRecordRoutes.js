import { Router } from "express";

import {
  addHealthRecordsController,
  getHealthRecordsController,
} from "../controllers/healthRecordController.js";
import { fetchDoctorAndHospitalRecommendations } from "../controllers/fetchDoctorAndHospitalRecommendationsController.js";

const healthRouter = Router();

healthRouter.post("/add-records", addHealthRecordsController);
healthRouter.get("/show-all-records", getHealthRecordsController);

// check health condition
healthRouter.post(
  "/doctor-hospital-recommendations",
  fetchDoctorAndHospitalRecommendations
);
export default healthRouter;
