import { model, Schema } from "mongoose";

const healthRecordSchema = new Schema(
  {
    patient: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true, 
    },
    medicalHistory:{
      type:[String],
      default:[]
    },
    medications:{
      type:[String],
      default:[],
    },
    symptomHistory: {
      type: [String],
      default: [],
    },
    recommendationMessage: {
      type: String,
      default: "", 
    },
    // doctorRecommendations: [
    //   {
    //     name: { type: String, required: true },
    //     specialty: { type: String, required: true },
    //     contact: { type: String, required: true },
    //   },
    // ],
    // hospitalRecommendations: [
    //   {
    //     name: { type: String, required: true },
    //     location: { type: String, required: true },
    //     specialty: { type: String, required: true },
    //     contact: { type: String, required: true },
    //   },
    // ],
    date: {
      type: Date,
      default: Date.now, // Automatically sets the current date
    },
  },
  {
    timestamps: true, // This adds createdAt and updatedAt fields
  }
);

export const HealthRecord = model("HealthRecord", healthRecordSchema);
