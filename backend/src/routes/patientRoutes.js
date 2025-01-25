import { Router } from "express";
import { getSinglePatientDataController } from "../controllers/patentController.js";

const patientRouter = Router();

patientRouter.get("/get-single-patient-data/:patientId", getSinglePatientDataController);

export default patientRouter;
