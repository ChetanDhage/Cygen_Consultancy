import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import { HiOutlineDocument } from 'react-icons/hi';

const SubAdminModeration = () => {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-semibold">Content Moderation</h2>
        </div>
        <span className="bg-red-100 text-red-600 px-3 py-1 text-sm font-medium rounded">High Priority</span>
      </div>

      {/* Session Info Grid */}
      <div className="bg-white shadow rounded-lg p-6 mb-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
        <div>
          <h3 className="font-semibold mb-1">Flagged Session: <span className="text-black font-bold">#SESS-7821</span></h3>
          <p>Network Security Consultation</p>
        </div>

        <div>
          <h4 className="font-semibold mb-1">Session Details</h4>
          <p><strong>Consultant:</strong> David Kim</p>
          <p><strong>Client:</strong> TechSecure Inc.</p>
          <p><strong>Duration:</strong> 60 minutes</p>
          <p><strong>Date:</strong> Oct 12, 2023</p>
        </div>

        <div>
          <h4 className="font-semibold mb-1">Flag Details</h4>
          <p><strong>Flagged By:</strong> System (AI Detection)</p>
          <p><strong>Reason:</strong> Suspicious file sharing</p>
          <p><strong>Flagged At:</strong> 45 min into session</p>
        </div>
      </div>

      {/* Attachment */}
      <div className="bg-white shadow rounded-lg p-6 mb-6 text-sm">
        <h4 className="font-semibold mb-2">Attachments</h4>
        <div className="flex items-center gap-2 p-3 border border-gray-200 rounded w-fit hover:bg-gray-50 cursor-pointer">
          <HiOutlineDocument className="text-2xl text-gray-600" />
          <span className="text-gray-800">config.zip</span>
        </div>
      </div>

      {/* Flagged Messages */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h4 className="font-semibold mb-4">Flagged Messages</h4>

        <div className="space-y-4 text-sm">
          {/* Consultant message */}
          <div className="bg-gray-50 p-3 rounded shadow-sm">
            <p className="font-medium mb-1">David Kim (Consultant)</p>
            <p>I'm sharing a configuration file that will help solve your firewall issue. Please download and apply it.</p>
            <p className="text-xs text-gray-500 mt-2">Oct 12, 2023 14:23</p>
          </div>

          {/* Client message */}
          <div className="bg-blue-50 p-3 rounded shadow-sm">
            <p className="font-medium mb-1">Client (TechSecure)</p>
            <p>Thanks! Downloading now. The file looks suspicious though – are you sure this is safe?</p>
            <p className="text-xs text-gray-500 mt-2">Oct 12, 2023 14:25</p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-4">
        <button className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded font-medium text-sm flex items-center gap-2">
          <FaExclamationTriangle /> Warn User
        </button>
        <button className="bg-red-100 text-red-700 px-4 py-2 rounded font-medium text-sm">
          Escalate to Admin
        </button>
        <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded font-medium text-sm">
          Dismiss Flag
        </button>
      </div>
    </div>
  );
};

export default SubAdminModeration;
