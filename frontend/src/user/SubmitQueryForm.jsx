import React, { useEffect, useState } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { fetchConsultantProfile } from '../api/consultant';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../redux/authSlice';
import { sendQuery } from '../api/user';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SubmitQueryForm = () => {
  const [consultantData, setConsultantData] = useState(null);
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [sessionDateTime, setSessionDateTime] = useState(''); // store as ISO string
  const [duration, setDuration] = useState('');
  const [sessionLink, setSessionLink] = useState('');
  const [files, setFiles] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const para = useParams();
  const consultantId = para.consultant_id;
  const token = useSelector(selectCurrentToken);

  useEffect(() => {
    const fetchConsultant = async () => {
      try {
        const response = await fetchConsultantProfile({consultantId, token});
        setConsultantData(response.data);
console.log(response.data)
        // Reset fields
        setSubject('');
        setSessionDateTime('');
        setDuration('');
        setSessionLink('');
        setDescription('');
      } catch (error) {
        console.error('Error fetching consultant:', error);
      }
    };
    fetchConsultant();
  }, [consultantId]);

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  // Fix: always store ISO string
  const handleDateChange = (date) => {
    if (date instanceof Date && !isNaN(date)) {
      setSessionDateTime(date.toISOString());
    } else {
      setSessionDateTime('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    const formData = new FormData();
    formData.append('consultantId', consultantId);
    formData.append('querySub', subject);
    formData.append('queryText', description);
    formData.append('sessionDateTime', sessionDateTime);
    formData.append('duration', duration);
    formData.append('sessionLink', sessionLink);

    files.forEach((file) => formData.append('supportDocs', file));

    // Validation (check strings only)
    if (
      !subject.trim() ||
      !description.trim() ||
      !String(sessionDateTime).trim() ||
      !duration.trim() ||
      !sessionLink.trim()
    ) {
      alert('Please fill in all required fields.');
      setSubmitted(false);
      return;
    }

    try {
      const response = await sendQuery({ formData, token });
      console.log('Query submitted:', response.data);
      setSubmitted(false);

      // Reset form
      setSubject('');
      setDescription('');
      setFiles([]);
      setSessionDateTime('');
      setDuration('');
      setSessionLink('');
      alert('Query submitted successfully!');
    } catch (error) {
      console.error('Error submitting query:', error);
      setSubmitted(false);
    }
  };

  if (!consultantData) {
    return <div className="p-6 text-center text-gray-500">Loading consultant profile...</div>;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-md mt-8"
    >
      <h2 className="text-xl font-semibold mb-4">Submit Your Query</h2>

      {/* Consultant Info */}
      <div className="flex items-center gap-4 bg-primaryLight p-4 rounded-lg mb-6">
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

      {/* Session Date & Time */}
      <div className="mb-6">
        <label className="block font-medium text-sm mb-2">Session Date & Time</label>
        <DatePicker
          selected={sessionDateTime ? new Date(sessionDateTime) : null}
          onChange={handleDateChange}
          showTimeSelect
          dateFormat="Pp"
          className="w-full border border-gray-300 rounded-lg p-3 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Duration */}
      <div className="mb-6">
        <label className="block font-medium text-sm mb-2">Duration</label>
        <input
          required
          type="text"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Session Link */}
      <div className="mb-6">
        <label className="block font-medium text-sm mb-2">Session Link</label>
        <input
          required
          type="text"
          value={sessionLink}
          onChange={(e) => setSessionLink(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Subject */}
      <div className="mb-6">
        <label className="block font-medium text-sm mb-2">Subject</label>
        <textarea
          required
          rows="2"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Description */}
      <div className="mb-6">
        <label className="block font-medium text-sm mb-2">Describe your query</label>
        <textarea
          required
          rows="6"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* File Upload */}
      <div className="mb-6">
        <label className="block font-medium text-sm mb-2">Upload supporting documents</label>
        <input type="file" multiple onChange={handleFileChange} id="file-upload" hidden />
        <label
          htmlFor="file-upload"
          className="w-full h-32 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-center text-gray-500 text-sm p-4 bg-gray-50 cursor-pointer hover:border-primary"
        >
          <FaCloudUploadAlt className="text-2xl mb-2" />
          <p>Click to upload or drag and drop</p>
          <p className="text-xs text-gray-400">PDF, DOC, JPG (Max: 5MB)</p>
          {files.length > 0 && (
            <p className="text-green-600 mt-2">{files.length} file(s) selected</p>
          )}
        </label>
      </div>

      {/* Submit */}
      <button
        disabled={submitted}
        type="submit"
        className="w-full bg-primary text-white text-sm font-semibold py-3 rounded-lg hover:bg-primary transition"
      >
        {submitted ? 'Submitting...' : 'Submit & Proceed to Payment →'}
      </button>
    </form>
  );
};

export default SubmitQueryForm;
