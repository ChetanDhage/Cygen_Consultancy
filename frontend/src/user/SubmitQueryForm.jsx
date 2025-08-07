import React, { useEffect, useState } from 'react'
import { FaComments, FaPhone, FaVideo, FaCloudUploadAlt } from 'react-icons/fa'
import { useParams } from 'react-router-dom';
import { fetchConsultantProfile } from '../api/consultant';

const SubmitQueryForm = () => {

  const [consultantData, setConsultantData] = useState(null);
    const para = useParams();
    const consultantId = para.consultant_id;
  
    useEffect(() => {
      const fetchConsultant = async () => {
        try {
          const response = await fetchConsultantProfile(consultantId);
          if (response) {
            setConsultantData(response);
            console.log("API Response:", response);
          }
        } catch (error) {
          console.error("Error fetching consultant:", error);
        }
      };
  
      fetchConsultant();
    }, [consultantId]);
  
    if (!consultantData) {
      return <div className="p-6 text-center text-gray-500">Loading consultant profile...</div>;
    }

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-md mt-8">
      <h2 className="text-xl font-semibold mb-4">Submit Your Query</h2>

      {/* Consultant Info */}
      <div className="flex items-center gap-4 bg-primaryLight p-4 rounded-lg  mb-6">
        <img
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" // Replace with actual image path
          alt="Sarah Johnson"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-1">
          <p className="font-medium">{consultantData?.name}</p>
          <p className="text-sm text-gray-600">{consultantData?.designation}</p>
        </div>
        <p className="text-primary font-semibold">{`₹ ${consultantData?.expectedFee}/hr`}</p>
      </div>

      <div className="mb-6">
        <label className="block font-medium text-sm mb-2">
          Subject
        </label>
        <textarea
          rows="2"
          className="w-full border border-gray-300 rounded-lg p-3 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Please provide summary about your business challenge or question..."
        />
      </div>

      {/* Query Textarea */}
      <div className="mb-6">
        <label className="block font-medium text-sm mb-2">
          Describe your query
        </label>
        <textarea
          rows="4"
          className="w-full border border-gray-300 rounded-lg p-3 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Please provide details about your business challenge or question..."
        />
      </div>

      {/* Upload */}
      <div className="mb-6">
        <label className="block font-medium text-sm mb-2">
          Upload supporting documents
        </label>
        <div className="w-full h-32 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-center text-gray-500 text-sm p-4 bg-gray-50 cursor-pointer hover:border-primary">
          <FaCloudUploadAlt className="text-2xl mb-2" />
          <p>Click to upload or drag and drop</p>
          <p className="text-xs text-gray-400">PDF, DOC, JPG (Max: 5MB)</p>
        </div>
      </div>



      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-primary text-white text-sm font-semibold py-3 rounded-lg hover:bg-primary transition"
      >
        Submit & Proceed to Payment →
      </button>
    </div>
  )
}

export default SubmitQueryForm
