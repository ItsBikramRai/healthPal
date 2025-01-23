import { HealthRecord } from "../models/healthRecordModels.js";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { configDotenv } from "dotenv";

configDotenv();
// Initialize the Generative AI client with your API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY); // Use an environment variable for the API key
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const fetchDoctorAndHospitalRecommendations = async (req, res) => {
  try {
    // Extract patient data from request body
    const {
      symptoms,
      age,
      gender,
      medicalHistory,
      medications,
      country,
      userId,
    } = req.body;

    // Check if the necessary data exists in the request
    if (!symptoms || !age || !gender || !country || !userId) {
      return res.status(400).json({
        success: false,
        message: "Missing required patient data",
      });
    }

    const prompt = `
    You are **HealthPal**, an AI healthcare assistant. Your job is to analyze patient symptoms, suggest possible conditions, recommend next steps, and guide patients to appropriate care. Be **brief, clear, and empathetic**, focusing on actionable advice.
    
    ### **Guidelines for Responses:**
    1. **Identify yourself as HealthPal** at the start.
    2. Stay focused on the patient's health concerns.
    3. Highlight **urgent care** if the symptoms suggest a serious issue.
    
    ---
    
    **Patient Information:**
    - **Symptoms**: "${symptoms}"
    - **Age**: ${age}
    - **Gender**: ${gender}
    - **Medical History**: ${medicalHistory || "Not provided"}
    - **Current Medications**: ${medications || "Not provided"}
    - **Country**: ${country}
    
    ---
    
    ### **Your Response:**
    1. **Possible Condition(s)**: Briefly state the likely causes based on the symptoms.
    2. **Suggested Actions**: Recommend simple steps (e.g., home remedies, lifestyle changes) and advise consulting a doctor if needed.
    3. **Urgency**: Clearly state if the patient needs immediate medical attention.
    
    Keep your response short (3-5 sentences), easy to understand, and supportive. Focus on being helpful, precise, and actionable.
    
    ---
    
    **Disclaimer**: HealthPal provides general health advice but is not a substitute for professional medical care. Always consult a healthcare provider for concerns or if symptoms worsen.
    `;

    // Use the Google Generative AI model to generate a response
    const result = await model.generateContent(prompt);

    if (!result || !result.response || !result.response.text) {
      return res.status(400).json({
        success: false,
        message: "Did not get valid response from API",
      });
    }

    const recommendationMessage = result.response.text();

    // Check if a health record already exists for the user
    const existingRecord = await HealthRecord.findOne({ patient: userId });

    if (existingRecord) {
      // If record exists, update the recommendation message
      existingRecord.recommendationMessage = recommendationMessage;
      existingRecord.medicalHistory = medicalHistory || [];
      existingRecord.medications = medications || [];

      await existingRecord.save();
      
      return res.status(200).json({
        success: true,
        message: "Successfully updated recommendation message",
        data: recommendationMessage, // Return the AI-generated message
      });
    } else {
      // If no record exists, create a new one
      const healthRecord = new HealthRecord({
        patient: userId,
        medicalHistory: medicalHistory || [],
        medications: medications || [],
        recommendationMessage, // Store the AI-generated message
      });

      await healthRecord.save();

      return res.status(200).json({
        success: true,
        message: "Successfully saved recommendation message",
        data: recommendationMessage, // Return the AI-generated message
      });
    }

  } catch (error) {
    console.error(
      "Error fetching recommendations:",
      error?.response?.data || error?.message
    );
    return res.status(500).json({
      success: false,
      message:
        error?.response?.data ||
        "An error occurred while fetching recommendations",
    });
  }
};
