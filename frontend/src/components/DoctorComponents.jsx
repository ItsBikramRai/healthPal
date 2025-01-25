import React from "react";

const doctors = [
  {
    id: 1,
    name: "Dr. Aayush Shrestha",
    specialty: "Cardiologist",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    name: "Dr. Meera Sharma",
    specialty: "Dermatologist",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    name: "Dr. Rajesh Kumar",
    specialty: "Neurologist",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 4,
    name: "Dr. Priya Yadav",
    specialty: "Pediatrician",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 5,
    name: "Dr. Suman Thapa",
    specialty: "Orthopedist",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 6,
    name: "Dr. Nisha Sharma",
    specialty: "General Physician",
    image: "https://pacificclinic.com.np/aayush-shrestha",
  },
];

export const DoctorsComponents = () => {
  return (
    <div className="p-16 bg-gray-800 min-h-screen">
      <h2 className="text-2xl text-white mb-6 text-center">Related Doctors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={doctor?.image}
              alt={doctor.name}
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{doctor.name}</h3>
              <p className="text-sm text-gray-600">{doctor.specialty}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
