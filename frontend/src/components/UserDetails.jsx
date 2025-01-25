// import { AuthContext } from "@/contextAPi/AuthContext";
// import { API } from "../../API";
// import React, { useEffect, useState, useContext } from "react";

// function UserProfilePage() {
//   const { auth } = useContext(AuthContext);
//   const [userData, setUserData] = useState(null);
//   const [matchingRecords, setMatchingRecords] = useState([]);
//   const [error, setError] = useState(null);

//   // Dummy doctor data
//   const dummyDoctorData = {
//     name: "Dr. John Doe",
//     specialization: "Cardiology",
//     contact: "123-456-7890",
//     experience: "10 years",
//     address: "123 Health Street, Kathmandu, Nepal",
//   };

//   // Fetch user data (health records)
//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await API.get("/health-records/show-all-records");

//         if (response?.data?.success) {
//           setUserData(response.data);

//           if (auth?.data?._id) {
//             const filteredRecords = response.data.data?.filter(
//               (record) => record.patient === auth.data._id
//             );
//             setMatchingRecords(filteredRecords || []);
//           }
//         } else {
//           setError("Failed to fetch user data.");
//         }
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//         setError("Error fetching data. Please try again later.");
//       }
//     };

//     if (auth?.data?._id) {
//       fetchUserData();
//     }
//   }, [auth]);

//   if (error) {
//     return <div className="text-red-600">{error}</div>;
//   }

//   if (!userData) {
//     return <div>Loading...</div>;
//   }

//   const isAdmin = auth?.data?.isAdmin;
//   const userRecordsAvailable = matchingRecords?.length > 0;

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
//       {/* User Profile */}
//       <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg p-6 mb-6">
//         <div className="flex flex-col items-center">
//           <img
//             src="https://via.placeholder.com/150"
//             alt="Profile Picture"
//             className="w-32 h-32 rounded-full mb-4"
//           />
//           <h2 className="text-2xl font-bold text-gray-800">
//             {auth?.user || "Guest User"}
//           </h2>
//           <p className="text-gray-600">{auth?.data?.email || "No email available"}</p>
//         </div>

//         <div className="mt-6 space-y-2">
//           <h3 className="text-xl font-semibold text-gray-800">User Details</h3>
//           <p>
//             <strong>Address:</strong> {auth?.data?.address || "Not provided"}
//           </p>
//           <p>
//             <strong>Role:</strong> {isAdmin ? "Doctor" : "Patient"}
//           </p>
//         </div>

//         <div className="mt-6 text-center">
//           <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500">
//             Edit Profile
//           </button>
//         </div>
//       </div>

//       {/* Health Records */}
//       {userRecordsAvailable && (
//         <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg p-6 mb-6">
//           <h3 className="text-xl font-semibold text-gray-800 mb-4">Health Records</h3>
//           {matchingRecords.map((record) => (
//             <div key={record?._id} className="bg-gray-200 p-4 rounded-md mb-2">
//               {record?.medicalHistory?.length > 0 && (
//                 <>
//                   <h4 className="font-semibold text-gray-700">Medical History</h4>
//                   <p>{record.medicalHistory.join(", ")}</p>
//                 </>
//               )}
//               {record?.medications?.length > 0 && (
//                 <>
//                   <h4 className="font-semibold text-gray-700">Medications</h4>
//                   <p>{record.medications.join(", ")}</p>
//                 </>
//               )}
//               {record?.symptomHistory?.length > 0 && (
//                 <>
//                   <h4 className="font-semibold text-gray-700">Symptom History</h4>
//                   <p>{record.symptomHistory.join(", ")}</p>
//                 </>
//               )}
//               {record?.recommendationMessage && (
//                 <>
//                   <h4 className="font-semibold text-gray-700">Recommendation</h4>
//                   <p>{record.recommendationMessage}</p>
//                 </>
//               )}
//             </div>
//           ))}
//         </div>
//       )}

//       {!userRecordsAvailable && (
//         <p className="text-gray-600">No health records found for this user.</p>
//       )}

//       {/* Doctor Dashboard */}
//       {isAdmin && (
//         <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg p-6">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">Doctor's Dashboard</h2>
//           <p>
//             <strong>Name:</strong> {dummyDoctorData.name}
//           </p>
//           <p>
//             <strong>Specialization:</strong> {dummyDoctorData.specialization}
//           </p>
//           <p>
//             <strong>Contact:</strong> {dummyDoctorData.contact}
//           </p>
//           <p>
//             <strong>Experience:</strong> {dummyDoctorData.experience}
//           </p>
//           <p>
//             <strong>Address:</strong> {dummyDoctorData.address}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default UserProfilePage;
import React, { useEffect, useState, useContext } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AuthContext } from "@/contextAPi/AuthContext";
import { API } from "../../API";

const PatientSection = () => {
  const { auth } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);
  const [matchingRecords, setMatchingRecords] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await API.get("/health-records/show-all-records");

        if (response?.data?.success) {
          setUserData(response.data);

          if (auth?.data?._id) {
            const filteredRecords = response.data.data?.filter(
              (record) => record.patient === auth.data._id
            );
            setMatchingRecords(filteredRecords || []);
          }
        } else {
          setError("Failed to fetch user data.");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError("Error fetching data. Please try again later.");
      }
    };

    if (auth?.data?._id) {
      fetchUserData();
    }
  }, [auth]);

  if (error) {
    return <div className="text-red-600">{error}</div>;
  }

  if (!userData) {
    return <div>Loading...</div>;
  }

  const isAdmin = auth?.data?.isAdmin;
  const userRecordsAvailable = matchingRecords?.length > 0;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="text-white p-4 shadow">
        <h1 className="text-lg font-bold text-center">Patient Section</h1>
      </header>
      <div className="flex flex-col md:flex-row flex-1">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 bg-gray-900 shadow p-4">
          <Card className="bg-gray-800 text-white">
            <CardHeader>
              <CardTitle>Patient Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Name: {auth?.user || "Guest User"}</p>
              <p className="text-sm">
                Email: {auth?.data?.email || "No email available"}
              </p>
              <p className="text-sm">
                Address: {auth?.data?.address || "Not provided"}
              </p>
              <p className="text-sm">Role: {isAdmin ? "Doctor" : "Patient"}</p>
            </CardContent>
          </Card>
        </aside>
        {/* Main Section */}
        <main className="flex-1 p-6">
          <Card className="bg-gray-800 text-white">
            <CardHeader>
              <CardTitle>Medical Information</CardTitle>
            </CardHeader>
            <CardContent>
              {userRecordsAvailable ? (
                <div className="grid gap-4">
                  {matchingRecords.map((record) => (
                    <div
                      key={record?._id}
                      className="bg-gray-700 p-4 rounded-md"
                    >
                      {record?.medicalHistory?.length > 0 && (
                        <div>
                          <h3 className="font-medium">Medical History:</h3>
                          <p className="text-sm">
                            {record.medicalHistory.join(", ")}
                          </p>
                        </div>
                      )}
                      {record?.medications?.length > 0 && (
                        <div>
                          <h3 className="font-medium">Medications:</h3>
                          <p className="text-sm">
                            {record.medications.join(", ")}
                          </p>
                        </div>
                      )}
                      {record?.symptomHistory?.length > 0 && (
                        <div>
                          <h3 className="font-medium">Symptom History:</h3>
                          <p className="text-sm">
                            {record.symptomHistory.join(", ")}
                          </p>
                        </div>
                      )}
                      {record?.recommendationMessage && (
                        <div>
                          <h3 className="font-medium">Recommendation:</h3>
                          <p className="text-sm">
                            {record.recommendationMessage}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400">
                  No health records found for this user.
                </p>
              )}
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default PatientSection;
