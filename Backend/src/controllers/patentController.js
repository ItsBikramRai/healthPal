import { HealthRecord } from "../models/healthRecordModels.js";

export const getSinglePatientDataController = async (req, res) => {
  const { patientId } = req.params; // ID of the patient

  try {
    // Validate patientId format
    if (!patientId) {
      return res.status(400).json({
        success: false,
        message: "Invalid patient ID format",
      });
    }

    // Find the health record and populate the patient details
    const healthRecord = await HealthRecord.findOne({
      patient: patientId,
    }).populate("patient");

    if (!healthRecord) {
      return res.status(404).json({
        success: false,
        message: "No health record found for this patient",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Successfully fetched user data with all details",
      data: healthRecord,
    });
  } catch (error) {
    console.error("Error fetching patient data:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while fetching patient data",
    });
  }
};
