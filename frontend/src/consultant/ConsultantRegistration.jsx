import React, { useState } from "react";

import { FaCheckCircle, FaUser, FaPhone, FaBriefcase, FaEnvelope, FaClock, FaStar, FaFilePdf, FaFileImage, FaTimes, FaCloudUploadAlt } from "react-icons/fa";

const ConsultantRegistration = () => {
  const [files, setFiles] = useState([
    { name: "MBA_Certificate.pdf", type: "pdf" },
    { name: "PM_Certificate.jpg", type: "image" }
  ]);

  const handleFileUpload = (e) => {
    // Handle file upload logic here
    const uploadedFiles = Array.from(e.target.files).map(file => ({
      name: file.name,
      type: file.type.includes("pdf") ? "pdf" : "image"
    }));
    setFiles([...files, ...uploadedFiles]);
  };

  const removeFile = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  return (
   
<main>
  <header className=" bg-white p-6 w-full flex justify-between items-center mb-2 ">
        <div>
          <h2 className="text-xl font-bold">Consultant Verification</h2>
          <p className="text-sm text-gray-600">Welcome back, John</p>
        </div>
      </header>
   
   <div className=" p-6 bg-gray-100 ">
    <div className=" mx-auto lg:p-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Consultant Registration</h1>
      <p className="text-gray-600 mb-6">Complete your profile to start accepting consulting sessions</p>
      
      <div className="border-t border-gray-200 pt-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Verification Status</h2>
        <div className="flex items-center text-green-600 mb-6">
          <FaCheckCircle className="mr-2" />
          <span className="font-medium">Verified</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <div className="flex items-center text-gray-700 mb-1">
            <FaUser className="mr-2 text-gray-500" />
            <span className="font-medium">Full Name</span>
          </div>
          <p className="text-gray-800 ml-6">John Doe</p>
        </div>

        <div>
          <div className="flex items-center text-gray-700 mb-1">
            <FaPhone className="mr-2 text-gray-500 rotate-90" />
            <span className="font-medium">Contact Number</span>
          </div>
          <p className="text-gray-800 ml-6">+1 (555) 123-4567</p>
        </div>

        <div>
          <div className="flex items-center text-gray-700 mb-1">
            <FaBriefcase className="mr-2 text-gray-500" />
            <span className="font-medium">Employment Type</span>
          </div>
          <p className="text-gray-800 ml-6">Full-time Consultant</p>
        </div>

        <div>
          <div className="flex items-center text-gray-700 mb-1">
            <FaEnvelope className="mr-2 text-gray-500" />
            <span className="font-medium">Email Address</span>
          </div>
          <p className="text-gray-800 ml-6">john.doe@example.com</p>
        </div>

        <div>
          <div className="flex items-center text-gray-700 mb-1">
            <FaClock className="mr-2 text-gray-500" />
            <span className="font-medium">Years of Experience</span>
          </div>
          <p className="text-gray-800 ml-6">8 years</p>
        </div>

        <div>
          <div className="flex items-center text-gray-700 mb-1">
            <FaStar className="mr-2 text-gray-500" />
            <span className="font-medium">Specialization</span>
          </div>
          <p className="text-gray-800 ml-6">Business Strategy</p>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Certifications</h2>
        
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center mb-4">
          <div className="flex flex-col items-center justify-center">
            <FaCloudUploadAlt className="text-3xl text-gray-400 mb-2" />
            <p className="text-gray-600 mb-1">Drag & drop files here or click to upload</p>
            <p className="text-sm text-gray-500">PDF, JPG, PNG files (Max: 5MB each)</p>
            <input 
              type="file" 
              id="file-upload" 
              className="hidden" 
              multiple 
              accept=".pdf,.jpg,.png"
              onChange={handleFileUpload}
            />
            <label 
              htmlFor="file-upload" 
              className="mt-3 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 cursor-pointer"
            >
              Select Files
            </label>
          </div>
        </div>

        <div className="space-y-2">
          {files.map((file, index) => (
            <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded">
              <div className="flex items-center">
                {file.type === "pdf" ? (
                  <FaFilePdf className="text-red-500 mr-2" />
                ) : (
                  <FaFileImage className="text-blue-500 mr-2" />
                )}
                <span className="text-gray-700">{file.name}</span>
              </div>
              <button 
                onClick={() => removeFile(index)}
                className="text-gray-400 hover:text-gray-600"
              >
                <FaTimes />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200">
        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50">
          Cancel
        </button>
        <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90">
          Update Profile
        </button>
      </div>
    </div>
   </div>
</main>
    
  );
};

export default ConsultantRegistration;