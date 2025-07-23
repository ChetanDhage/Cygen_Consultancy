import React, { useState } from 'react'
import { FaComments, FaPhone, FaVideo, FaCloudUploadAlt } from 'react-icons/fa'

const SubmitQueryForm = () => {
  const [selectedMethod, setSelectedMethod] = useState('Chat')

  const handleCommunicationSelect = (method) => {
    setSelectedMethod(method)
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-md mt-8">
      <h2 className="text-xl font-semibold mb-4">Submit Your Query</h2>

      {/* Consultant Info */}
      <div className="flex items-center gap-4 bg-primary-light p-4 rounded-lg  mb-6">
        <img
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" // Replace with actual image path
          alt="Sarah Johnson"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-1">
          <p className="font-medium">Sarah Johnson</p>
          <p className="text-sm text-gray-600">Business Strategy Consultant</p>
        </div>
        <p className="text-primary font-semibold">$150/hr</p>
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

      {/* Communication Preference */}
      <div className="mb-6">
        <label className="block font-medium text-sm mb-2">
          Preferred Communication
        </label>
        <div className="flex gap-3">
          {[
            { label: 'Chat', icon: <FaComments /> },
            { label: 'Call', icon: <FaPhone /> },
            { label: 'Video', icon: <FaVideo /> }
          ].map(({ label, icon }) => (
            <button
              key={label}
              type="button"
              onClick={() => handleCommunicationSelect(label)}
              className={`flex-1 flex flex-col items-center justify-center border rounded-lg py-3 px-2 transition ${
                selectedMethod === label
                  ? 'border-primary bg-blue-50 text-primary'
                  : 'border-gray-300 text-gray-500 hover:border-primary'
              }`}
            >
              <div className="text-xl mb-1">{icon}</div>
              <span className="text-sm font-medium">{label}</span>
            </button>
          ))}
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
