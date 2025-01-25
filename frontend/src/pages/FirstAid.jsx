import React from "react";

const FirstAidPage = () => {
  return (
    <div className="min-h-screen bg-gray-800 pt-12 p-6"> {/* Increased padding at top */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25h-4.5A2.25 2.25 0 007.5 6v2.25m0 0h9m-9 0a2.25 2.25 0 01-2.25 2.25H4.5v6h2.25c.621 0 1.2.252 1.65.702.45.45.7 1.029.7 1.65V21h6v-2.398c0-.621.252-1.2.702-1.65.45-.45 1.029-.7 1.65-.7h2.25v-6h-2.25a2.25 2.25 0 01-2.25-2.25z"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">First Aid Essentials</h1>
          </div>

          <p className="mt-4 text-gray-600">
            This platform is designed to provide an accessible and user-friendly
            guide to essential first aid techniques and procedures. Empower
            yourself to respond effectively to emergencies and save lives.
          </p>

          <h2 className="mt-6 text-xl font-semibold text-gray-800">Features:</h2>
          <ul className="mt-2 space-y-2 text-gray-600 list-disc pl-5">
            <li>
              <span className="font-medium text-gray-800">
                Interactive Guides:
              </span>{" "}
              Step-by-step instructions for handling emergencies like cuts,
              burns, fractures, and CPR.
            </li>
            <li>
              <span className="font-medium text-gray-800">Emergency Tips:</span>{" "}
              Quick-access advice for critical situations.
            </li>
            <li>
              <span className="font-medium text-gray-800">
                Resource Library:
              </span>{" "}
              A collection of videos, infographics, and articles on first aid.
            </li>
            <li>
              <span className="font-medium text-gray-800">
                Test Your Knowledge:
              </span>{" "}
              Quizzes to help users assess their understanding of first aid
              practices.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FirstAidPage;
