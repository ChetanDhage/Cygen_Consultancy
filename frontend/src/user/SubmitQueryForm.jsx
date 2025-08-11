import React, { useEffect, useState } from 'react';
import { FaClosedCaptioning, FaCloudUploadAlt } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { fetchConsultantProfile } from '../api/consultant';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../redux/authSlice';
import { sendQuery } from '../api/user';

const SubmitQueryForm = () => {
  const [consultantData, setConsultantData] = useState(null);
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [files, setFiles] = useState([]);
  const para = useParams();
  const consultantId = para.consultant_id;
  const token = useSelector(selectCurrentToken);
  console.log("token: ", token)

  useEffect(() => {
    const fetchConsultant = async () => {
      try {
        const response = await fetchConsultantProfile(consultantId);
        setConsultantData(response);
      } catch (error) {
        console.error("Error fetching consultant:", error);
      }
    };
    fetchConsultant();
  }, [consultantId]);

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const handleSubmit = async (e) => {

    e.preventDefault();


    const formData = new FormData();
    formData.append('consultantId', consultantId);
    formData.append('querySub', subject);
    formData.append('queryText', description);
    files.forEach(file => formData.append('supportDocs', file));

    if(formData.get('qureySub') === '' || formData.get('queryText') === '') {
      alert("Please fill in all required fields."); 
      return;
    }

    try {
      const response = await sendQuery({ formData, token });
      console.log("Query submitted:", response.data);
      alert("Query submitted successfully!");
    } catch (error) {
      console.error("Error submitting query:", error);
    }
  };

  if (!consultantData) {
    return <div className="p-6 text-center text-gray-500">Loading consultant profile...</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-md mt-8">
      <h2 className="text-xl font-semibold mb-4">Submit Your Query</h2>

      {/* Consultant Info */}
      <div className="flex items-center gap-4 bg-primaryLight p-4 rounded-lg  mb-6">
        <img
          src={consultantData?.profileImage?.url || 'https://via.placeholder.com/150'}
          alt={consultantData?.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-1">
          <p className="font-medium">{consultantData?.name}</p>
          <p className="text-sm text-gray-600">{consultantData?.designation}</p>
        </div>
        <p className="text-primary font-semibold">{`₹ ${consultantData?.expectedFee}/hr`}</p>
      </div>

      {/* Subject */}
      <div className="mb-6">
        <label className="block font-medium text-sm mb-2">Subject</label>
        <textarea
          rows="2"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Please provide summary..."
        />
      </div>

      {/* Description */}
      <div className="mb-6">
        <label className="block font-medium text-sm mb-2">Describe your query</label>
        <textarea
          rows="4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Please provide details..."
        />
      </div>

      {/* File Upload */}
      <div className="mb-6">
        <label className="block font-medium text-sm mb-2">Upload supporting documents</label>
        <input type="file" multiple onChange={handleFileChange} id="file-upload" />
        <label
          htmlFor="file-upload"
          className="w-full h-32 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-center text-gray-500 text-sm p-4 bg-gray-50 cursor-pointer hover:border-primary"
        >
          <FaCloudUploadAlt className="text-2xl mb-2" />
          <p>Click to upload or drag and drop</p>
          <p className="text-xs text-gray-400">PDF, DOC, JPG (Max: 5MB)</p>
          <p>{ }</p>
        </label>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-primary text-white text-sm font-semibold py-3 rounded-lg hover:bg-primary transition"
      >
        Submit & Proceed to Payment →
      </button>
    </form>
  );
};

export default SubmitQueryForm;
