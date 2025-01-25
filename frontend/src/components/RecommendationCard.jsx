import React from 'react';

const RecommendationCard = () => {
  // Parse the AI response
const data =`Hello, I am HealthPal, your AI-powered healthcare assistant.  Based on the information provided, I must stress the urgency of seeking immediate medical attention.  Chest pain, shortness of breath, and dizziness are serious symptoms that require prompt evaluation.\n\n*Diagnosis:\n\nGiven the patient's symptoms (chest pain, shortness of breath, dizziness), age (45), gender (male), medical history (hypertension, type 2 diabetes), and current medications (lisinopril, metformin), several potential conditions need to be considered.  These include, but are not limited to:\n\n *Acute Coronary Syndrome (ACS):*  This encompasses conditions like heart attack (myocardial infarction) and unstable angina.  The chest pain, shortness of breath, and dizziness strongly suggest this possibility, especially given the existing hypertension and diabetes.\n* *Pulmonary Embolism (PE):* A blood clot in the lungs can cause shortness of breath, chest pain, and dizziness.\n* *Cardiac Arrhythmia:* Irregular heartbeats can lead to dizziness and shortness of breath.\n\nIt is crucial to understand that this is not an exhaustive list, and a proper diagnosis can only be made by a qualified medical professional after a thorough examination.\n\n*Treatment:\n\nThe patient needs immediate medical evaluation. This should involve:\n\n *Emergency Room Visit:*  Go to the nearest emergency room immediately.  Do not attempt to self-treat.\n* *Electrocardiogram (ECG):* To assess heart rhythm and detect potential heart problems.\n* *Blood Tests:* To check for markers of heart damage, blood clots, and other relevant indicators.\n* *Chest X-Ray:* To rule out or confirm lung conditions.\n* *Further Investigations:*  Depending on the initial findings, further tests like echocardiogram, cardiac enzyme tests, and potentially CT pulmonary angiography may be necessary.\n\n\n*Doctors:\n\nI cannot provide specific doctor names, contact information, or referrals.  This information is protected and requires direct interaction with a healthcare provider or a referral service.  To find cardiologists and pulmonologists in Nepal, I recommend:\n\n1. **Contacting your insurance provider:* They can provide a list of in-network specialists.\n2. *Searching online directories:*  Use reputable online directories specific to Nepal to locate specialists and check their qualifications and reviews.\n3. *Consulting your primary care physician:* Your PCP can provide a referral to the appropriate specialists.\n\n\n*Hospitals:\n\nSimilarly, I cannot provide specific contact information for hospitals.  However, to locate hospitals in Nepal equipped to handle these conditions, I suggest:\n\n1. **Searching for major hospitals in Kathmandu and other major cities:*  Look for hospitals with dedicated cardiology and pulmonology departments and emergency services.  Many hospitals will have websites with contact information.\n2. *Consulting online hospital directories for Nepal:* Use reputable online resources to find hospitals and verify their accreditation and facilities.\n3. *Checking with your insurance provider:* Your insurer likely has a list of covered hospitals in Nepal.\n\n\n*Disclaimer:* This information is for general knowledge and does not constitute medical advice.  The symptoms described require immediate medical attention.  Please seek help immediately from a qualified healthcare professional.  I am an AI and cannot replace the judgment of a doctor.\n`

  const sections = {
    diagnosis: data.match(/Diagnosis:(.*?)Treatment:/s)?.[1]?.trim() || "No diagnosis available",
    treatment: data.match(/Treatment:(.*?)Doctors:/s)?.[1]?.trim() || "No treatment available",
    doctors: data.match(/Doctors:(.*?)Hospitals:/s)?.[1]?.trim() || "No doctors available",
    hospitals: data.match(/Hospitals:(.*?)Disclaimer:/s)?.[1]?.trim() || "No hospitals available",
    disclaimer: data.match(/Disclaimer:(.*)/s)?.[1]?.trim() || "No disclaimer available",
  };

  const doctorsList = sections.doctors.split(/\n|,/).map((doc, index) => <li key={index}>{doc.trim()}</li>);
  const hospitalsList = sections.hospitals.split(/\n|,/).map((hospital, index) => <li key={index}>{hospital.trim()}</li>);

  return (
    <div className="recommendation-card">
      <h1>HealthPal Recommendations</h1>
      
      <div className="recommendation-section">
        <h2>Diagnosis</h2>
        <p>{sections.diagnosis}</p>
      </div>

      <div className="recommendation-section">
        <h2>Treatment</h2>
        <p>{sections.treatment}</p>
      </div>

      <div className="recommendation-section">
        <h2>Doctors</h2>
        <ul>{doctorsList}</ul>
      </div>

      <div className="recommendation-section">
        <h2>Hospitals</h2>
        <ul>{hospitalsList}</ul>
      </div>

      <div className="recommendation-section">
        <h2>Disclaimer</h2>
        <p>{sections.disclaimer}</p>
      </div>
    </div>
  );
};

export default RecommendationCard;
