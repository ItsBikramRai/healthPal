import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { API } from "../../API";
import { toast } from "react-toastify"; // Importing Toastify
import { DoctorsComponents } from "./DoctorComponents";

const SymptomsChecker = () => {
  const [formData, setFormData] = useState({
    symptoms: "",
    age: "",
    gender: "",
    medicalHistory: "",
    medications: "",
    country: "",
  });

  const [responseData, setResponseData] = useState(null); // To store the API response data
  const [isLoading, setIsLoading] = useState(false); // State to track loading
  const [responseMessage, setResponseMessage] = useState(""); // For displaying response messages

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading to true when submitting

    try {
      const response = await API.post(
        "/health-records/doctor-hospital-recommendations",
        formData
      );

      if (response?.data?.success) {
        setResponseMessage(response.data.message);
        setResponseData(response.data);
        toast.success("scroll down "); // Success toast notification
        setFormData({
          symptoms: "",
          age: "",
          gender: "",
          medicalHistory: "",
          medications: "",
          country: "",
        });
      } else {
        setResponseMessage("Something went wrong. Please try again.");
        setResponseData(null);
        toast.error("Something went wrong. Please try again."); // Error toast notification
      }
    } catch (error) {
      console.error("Error sending data:", error);
      setResponseMessage("An error occurred. Please try again later.");
      toast.error("An error occurred. Please try again later."); // Error toast notification
    } finally {
      setIsLoading(false); // Set loading to false once the request finishes
    }
  };

  return (
    <div className="bg-gray-800  py-10">
      <form
        onSubmit={handleSubmit}
        className="w-full pt-2 h-screen max-w-2xl mx-auto p-4 bg-gray-600 text-gray-200 rounded-xl"
      >
        <h2 className="text-2xl font-bold mb-4">Health Check Form</h2>

        {/* Symptoms */}
        <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="symptoms">
            Symptoms
          </label>
          <textarea
            id="symptoms"
            name="symptoms"
            value={formData.symptoms}
            onChange={handleInputChange}
            required
            placeholder="Describe your symptoms"
            className="w-full p-2 border rounded-md text-gray-900"
          />
        </div>

        {/* Age */}
        <div className="mb-4">
          <label className="block font-medium " htmlFor="age">
            Age
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            required
            placeholder="Enter your age"
            className="w-full p-2 border rounded-md text-gray-900"
          />
        </div>

        {/* Gender */}
        <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="gender">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded-md text-gray-900"
          >
            <option value="" className="text-gray-900">
              Select your gender
            </option>
            <option value="male" className="text-gray-900">
              Male
            </option>
            <option value="female" className="text-gray-900">
              Female
            </option>
            <option value="other" className="text-gray-900">
              Other
            </option>
          </select>
        </div>

        {/* Medical History */}
        <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="medicalHistory">
            Medical History
          </label>
          <textarea
            id="medicalHistory"
            name="medicalHistory"
            value={formData.medicalHistory}
            onChange={handleInputChange}
            placeholder="List any medical conditions"
            className="w-full p-2 border rounded-md text-gray-900"
          />
        </div>

        {/* Medications */}
        <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="medications">
            Medications
          </label>
          <textarea
            id="medications"
            name="medications"
            value={formData.medications}
            onChange={handleInputChange}
            placeholder="List any medications you are taking"
            className="w-full p-2 border rounded-md text-gray-900"
          />
        </div>

        {/* Country */}
        <div className="mb-4 pb-10">
          <label className="block font-medium mb-2" htmlFor="country">
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={(formData.country = "Nepal")}
            onChange={handleInputChange}
            placeholder="Enter your country"
            className="w-full p-2  border rounded-md text-gray-900"
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 "
          disabled={isLoading} // Disable button when loading
        >
          {isLoading ? (
            <span className="spinner-border text-white" role="status"></span>
          ) : (
            "Submit"
          )}
        </Button>
      </form>

      {/* Minimal Response Message Box */}
      {responseData && (
        <div className="max-w-2xl mx-auto mt-6 p-6 bg-white text-gray-800 rounded-lg shadow-md border border-gray-200 transition-transform transform hover:scale-105">
          <h3 className="text-xl font-semibold text-center mb-4 text-blue-500">
            HealthPal Recommendation
          </h3>
          <div className="p-4 bg-gray-50 rounded-lg">
            {responseData?.message && (
              <p className="mt-2 text-gray-700">
                <strong>Message:</strong> {responseData?.data}
              </p>
            )}

            {!responseData?.message &&
              !responseData?.recommendation &&
              !responseData?.instructions && (
                <p className="mt-2 text-gray-600">
                  No specific recommendation available at the moment.
                </p>
              )}
          </div>
        </div>
      )}

      {responseData && responseData.data && (
        <div>
          <DoctorsComponents />
        </div>
      )}
    </div>
  );
};

export default SymptomsChecker;
