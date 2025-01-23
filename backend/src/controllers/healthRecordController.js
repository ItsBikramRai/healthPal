import { HealthRecord } from "../models/healthRecordModels.js";
import { User } from "../models/userModel.js";

// Add Health Records
export const addHealthRecordsController = async (req, res) => {
  try {
    const {
      recordDetails,
      symptomHistory,
      medicalHistory,
      medications,
      patientId,
    } = req.body;

    // Validate required data
    if (!Array.isArray(recordDetails) || recordDetails.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Record details (array) are required and cannot be empty",
      });
    }
    if (!patientId) {
      return res.status(400).json({
        success: false,
        message: "Patient ID is required",
      });
    }

    // Check if the patient exists in the database
    const patient = await User.findById(patientId); // Assuming you have a Patient model
    if (!patient) {
      return res.status(404).json({
        success: false,
        message: "Patient not found with the provided ID",
      });
    }

    // Validate optional arrays
    if (symptomHistory && !Array.isArray(symptomHistory)) {
      return res.status(400).json({
        success: false,
        message: "Symptom history must be an array",
      });
    }
    if (medicalHistory && !Array.isArray(medicalHistory)) {
      return res.status(400).json({
        success: false,
        message: "Medical history must be an array",
      });
    }
    if (medications && !Array.isArray(medications)) {
      return res.status(400).json({
        success: false,
        message: "Medications must be an array",
      });
    }

    // Check if a health record already exists for the patient
    let healthRecord = await HealthRecord.findOne({ patient: patientId });

    if (healthRecord) {
      // If record exists, update it
      healthRecord.recordDetails = recordDetails;
      healthRecord.symptomHistory = symptomHistory || healthRecord.symptomHistory;
      healthRecord.medicalHistory = medicalHistory || healthRecord.medicalHistory;
      healthRecord.medications = medications || healthRecord.medications;

      // Save the updated record
      await healthRecord.save();

      return res.status(200).json({
        success: true,
        message: "Health record updated successfully",
        record: healthRecord,
        patient: {
          id: patient._id,
          name: patient.name,  // Assuming patient has a 'name' field
        },
      });
    } else {
      // If no record exists, create a new one
      const newRecord = new HealthRecord({
        patient: patientId,
        medicalHistory: medicalHistory || [],
        medications: medications || [],
        symptomHistory: symptomHistory || [],
        recordDetails,
      });

      // Save the new health record to the database
      await newRecord.save();

      return res.status(201).json({
        success: true,
        message: "Health record added successfully",
        record: newRecord,
        patient: {
          id: patient._id,
          name: patient.name,  // Assuming patient has a 'name' field
        },
      });
    }
  } catch (error) {
    console.error("Error adding health record:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while adding the health record",
      error: error.message || "Internal server error",
    });
  }
};



// Get Health Records
export const getHealthRecordsController = async (req, res) => {
  try {
    // Fetch all records as an example (you can filter by patientId or other criteria)
    const records = await HealthRecord.find();

    return res.status(200).json({
      success: true,
      message: "Health records retrieved successfully",
      data: records, // Return the records, including symptom history
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
