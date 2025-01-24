import bcrypt from "bcryptjs";
import { configDotenv } from "dotenv";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndCookies.js";

import { User } from "../models/userModel.js";

configDotenv();

// signup
export const signupController = async (req, res) => {
  try {
    const { name, email, password, secret, confirmPassword, address, phone } =
      req.body;

    // Check if required fields are provided
    if (!email || !password || !name || !secret || !phone) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required credentials",
      });
    }

    // Validate password and confirmPassword
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Password and confirm password do not match",
      });
    }

    // Check if the user already exists
    const userExists = await User.findOne({
      email: email.toLowerCase().trim(),
    });
    if (userExists) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      password: hashedPassword,
      secret: secret.toLowerCase().trim(),
      address,
    });

    // Generate JWT and set cookie
    generateTokenAndSetCookie(res, user._id);

    // Save the user
    await user.save();

    // Return response
    return res.status(200).json({
      success: true,
      message: "User created successfully",
      user: {
        ...user._doc,
        password: undefined,
        secret: undefined,
      },
    });
  } catch (error) {
    console.error("Error during signup:", error); // For debugging
    return res.status(500).json({
      success: false,
      message: error.message || "Something went wrong during signup.",
    });
  }
};

// login
export const loginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide email and pasword",
      });
    }
    const user = await User.findOne({ email: email?.toLowerCase()?.trim() });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const isMatchPassword = await bcrypt.compare(password, user.password);

    if (!isMatchPassword) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }
    generateTokenAndSetCookie(res, user._id);
    await user.save();

    return res.status(200).json({
      success: true,
      message: "Login Successfully",
      user: {
        ...user._doc,
        password: undefined,
        secret: undefined,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error while trying to login",
    });
  }
};

// logout
export const logoutController = async (req, res) => {
  res.clearCookie("token").status(200).json({
    success: true,
    message: "Logout Successfully",
  });
};

//forgot password
export const forgotPasswordController = async (req, res) => {
  const { email, secret, password, confirmPassword } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Check if the provided secret matches the stored secret
    if (user.secret !== secret?.toLowerCase()?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Secret does not match",
      });
    }

    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Password and confirm password do not match",
      });
    }

    // Hash the new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Update user's password
    user.password = hashedPassword;
    await user.save();

    return res.status(200).json({
      success: true,
      message: "Password updated successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "An error occurred while resetting the password",
      error: error.message,
    });
  }
};
