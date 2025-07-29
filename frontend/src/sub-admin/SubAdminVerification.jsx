// const SubAdminVerification = () => (
//   <div className="p-6">
//     <h2 className="text-xl font-bold mb-4">Pending Consultant Verifications</h2>
//     <p>Here you can view and verify consultant KYC details.</p>
//   </div>
// );
// export default SubAdminVerification;

import React from 'react';
import { FaThumbsUp, FaTimesCircle } from 'react-icons/fa';
import { AiFillFilePdf } from 'react-icons/ai';
import { BsBriefcaseFill } from 'react-icons/bs';

const SubAdminVerification = () => {
  return (
    <div className="p-6">
      {/* Page Title */}
      <h2 className="text-2xl font-semibold mb-1">Consultant Verifications</h2>
      <p className="text-sm text-gray-500 mb-6">Review and recommend consultant applications for approval</p>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">Pending (12)</button>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">Reviewed (42)</button>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">All (54)</button>
      </div>

      {/* Consultant Card */}
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-semibold">Michael Chen</h3>
            <p className="text-sm text-gray-600">Cloud Security Specialist</p>
          </div>
          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 text-xs font-semibold rounded">Pending Review</span>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4 text-sm">
          {/* Personal Info */}
          <div>
            <h4 className="font-medium mb-1">Personal Information</h4>
            <p><strong>Email:</strong> michael.chen@example.com</p>
            <p><strong>Location:</strong> San Francisco, CA</p>
            <p><strong>Experience:</strong> 8 years</p>
          </div>

          {/* Specializations */}
          <div>
            <h4 className="font-medium mb-1">Specializations</h4>
            <div className="flex flex-wrap gap-2">
              {['AWS Security', 'Azure Security', 'GCP Security', 'Cloud Architecture'].map((spec, i) => (
                <span key={i} className="bg-green-100 text-green-800 px-2 py-1 text-xs rounded">{spec}</span>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="font-medium mb-1">Certifications</h4>
            <div className="flex flex-wrap gap-2">
              {['AWS Certified Security', 'CISSP', 'CCSP'].map((cert, i) => (
                <span key={i} className="bg-green-100 text-green-800 px-2 py-1 text-xs rounded">{cert}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Documents */}
        <div className="mb-6">
          <h4 className="font-medium mb-2">Documents</h4>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded text-sm">
              <AiFillFilePdf className="text-xl text-gray-600" />
              ID_Proof.pdf
            </button>
            <button className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded text-sm">
              <AiFillFilePdf className="text-xl text-gray-600" />
              Certs_Bundle.pdf
            </button>
            <button className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded text-sm">
              <BsBriefcaseFill className="text-xl text-gray-600" />
              Resume.pdf
            </button>
          </div>
        </div>

        {/* Recommendation Buttons */}
        <div className="flex gap-4 mb-4">
          <button className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded">
            <FaThumbsUp /> Recommend Approval
          </button>
          <button className="flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded">
            <FaTimesCircle /> Request Changes
          </button>
        </div>

        {/* Comment Box (Optional) */}
        <textarea
          rows="3"
          className="w-full border border-gray-300 rounded p-2 text-sm"
          placeholder="Add your comments here..."
        />
      </div>
    </div>
  );
};

export default SubAdminVerification;
