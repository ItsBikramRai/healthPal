import React from "react";

const EmergencyPage = () => {
  return (
    <div className="min-h-screen bg-gray-800 flex flex-col items-center py-10">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Emergency Contacts
        </h1>

        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Emergency Tips</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Call for help immediately and provide precise information.</li>
            <li>Ensure the patient is in a safe and stable position.</li>
            <li>Follow first-aid procedures while waiting for medical assistance.</li>
            <li>Stay calm and keep communicating with responders.</li>
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Healthcare Emergency Contacts in Nepal
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center">
              <span className="font-semibold w-48">Ambulance:</span>
              <span className="text-blue-600">102</span>
            </li>
            <li className="flex items-center">
              <span className="font-semibold w-48">Police:</span>
              <span className="text-blue-600">100</span>
            </li>
            <li className="flex items-center">
              <span className="font-semibold w-48">Fire Service:</span>
              <span className="text-blue-600">101</span>
            </li>
            <li className="flex items-center">
              <span className="font-semibold w-48">Women Helpline:</span>
              <span className="text-blue-600">1145</span>
            </li>
            <li className="flex items-center">
              <span className="font-semibold w-48">National Helpline (COVID-19):</span>
              <span className="text-blue-600">1133</span>
            </li>
            <li className="flex items-center">
              <span className="font-semibold w-48">Nepal Red Cross Society:</span>
              <span className="text-blue-600">101</span>
            </li>
            <li className="flex items-center">
              <span className="font-semibold w-48">Blood Donation Hotline:</span>
              <span className="text-blue-600">1676</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EmergencyPage;
