import axios from "axios";

// Replace with your SerpAPI key
const API_KEY =
  "c6cf6eca805723fbc1e629874ed856fbbb7e3c6312bccc42deadfededd8e1784";

// Simulated patient data
// const data = {
//   symptoms: "chest pain, shortness of breath, dizziness",
//   age: 45,
//   gender: "male",
//   medicalHistory: "hypertension, type 2 diabetes",
//   medications: "lisinopril, metformin",
//   country: "Nepal",
// };

// Constructing the query
// const QUERY = `
// You are HealthPal, an AI-powered healthcare assistant designed to connect patients with the right doctors and hospitals efficiently, ensuring cost-effective and hassle-free healthcare.

// **Patient Information:**
// - **Symptoms**: "${data.symptoms}"
// - **Age**: ${data.age}
// - **Gender**: ${data.gender}
// - **Medical History**: ${data.medicalHistory || "Not provided"}
// - **Current Medications**: ${data.medications || "Not provided"}
// - **Country**: ${data.country}

// **Your Task:**
// 1. **Diagnosis**: Based only on the provided symptoms, suggest possible conditions.
// 2. **Treatment Plan**: Recommend necessary steps, including specific diagnostic tests or first-line treatments.
// 3. **Doctors**: List **3 relevant doctors** within ${data.country}, including their name, specialty, and contact details.
// 4. **Hospitals**: List **3 hospitals** in ${data.country} with relevant facilities, including their name, location, and contact details.

// **Important Notes:**
// - Only use the provided data for diagnosis and recommendations. Avoid assumptions or adding unrelated information.
// - Ensure recommendations focus on cost-effective and accessible healthcare solutions for the patient.
// - Provide location-specific details for doctors and hospitals to minimize patient effort.

// **Output Format:**
// - **Diagnosis**: [Key conditions based on symptoms].
// - **Treatment Plan**: [Steps for diagnosis and treatment].
// - **Doctors**:
//   1. [Name, Specialty, Location, Contact].
//   2. [Name, Specialty, Location, Contact].
//   3. [Name, Specialty, Location, Contact].
// - **Hospitals**:
//   1. [Name, Location, Facilities, Contact].
//   2. [Name, Location, Facilities, Contact].
//   3. [Name, Location, Facilities, Contact].

// Stick to the provided data, avoid adding unnecessary information, and ensure the recommendations are clear, actionable, and practical.
// `;

const QUERY = "list out cardiologist in Nepal ";
async function fetchDoctorList() {
  try {
    const url = `https://serpapi.com/search.json?engine=google&q=${encodeURIComponent(
      QUERY
    )}&api_key=${API_KEY}`;
    const response = await axios.get(url);

    // Extract and display the top 5 results
    const searchResults = response.data.organic_results || [];
    console.log("Top 5 Doctors in Nepal:");
    searchResults.slice(0, 5).forEach((result, index) => {
      console.log(`${index + 1}. ${result.title}`);
      console.log(`   Link: ${result.link}`);
    });
  } catch (error) {
    console.error("Error fetching search results:", error.message);
  }
}

// Call the function
fetchDoctorList();
