import { Router } from "express";
import {
  forgotPasswordController,
  loginController,
  logoutController,
  signupController,
} from "../controllers/authController.js";
import { fetchDoctorAndHospitalRecommendations } from "../controllers/fetchDoctorAndHospitalRecommendationsController.js";

const authRouter = Router();

// sign up
authRouter.post("/signup", signupController);

//login
authRouter.post("/login", loginController);

// logout
authRouter.get("/logout", logoutController);

// forgot password
authRouter.post("/forgot-password", forgotPasswordController);


authRouter.post('/suggest', fetchDoctorAndHospitalRecommendations);

export default authRouter;
