import React, { useState } from 'react';
import axios from 'axios';
import {
  FaUserTie, FaBriefcase, FaCertificate, FaArrowRight, FaArrowLeft,
  FaPlusCircle, FaCheckCircle
} from 'react-icons/fa';
const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const StepTabs = ({ step }) => {
  const tabs = ["Personal Info", "Professional", "Certifications"];
  return (
    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-3 font-medium">
      {tabs.map((tab, i) => (
        <span
          key={tab}
          className={`tab-indicator w-1/3 text-center py-5 relative ${step === i
            ? 'text-primary dark:text-primary font-semibold'
            : 'text-gray-500 dark:text-gray-400'
            }`}
        >
          {i === 0 && <FaUserTie className="inline mr-2" />}
          {i === 1 && <FaBriefcase className="inline mr-2" />}
          {i === 2 && <FaCertificate className="inline mr-2" />}
          {tab}
        </span>
      ))}
    </div>
  );
};

const ProgressBar = ({ step }) => {
  const widths = ["w-1/3", "w-2/3", "w-full"];
  return (
    <div className="bg-gray-200 dark:bg-gray-700 h-2.5 rounded-full overflow-hidden">
      <div
        className={`bg-gradient-to-r from-secondary to-primary ${widths[step]} h-full transition-all duration-500`}
      ></div>
    </div>
  );
};

const SignUpUser = () => {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // ✅ Form 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    contactNumber: '',
    location: '',
    linkedin: '',
    role: 'consultant',
    designation: '', 
    company: '',
    industry: '',
    skills: '',
    yearsOfExperience: '',
    about: '',
    languages: '',
    expectedFee: '',
  });

  const [profilePhoto, setProfilePhoto] = useState(null);
  const [resume, setResume] = useState(null);
  const [certifications, setCertifications] = useState([{ name: '', file: null }]);

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 2));
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 0));
  const handleAddCertification = () => setCertifications([...certifications, { name: '', file: null }]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    
  e.preventDefault();
  setLoading(true);
  setErrorMsg('');

  try {
    const formDataObj = new FormData();

    // Append text fields
    Object.keys(formData).forEach((key) => {
      formDataObj.append(key, formData[key]);
    });

    // Append profile photo & resume
    if (profilePhoto) formDataObj.append('profilePhoto', profilePhoto);
    if (resume) formDataObj.append('resume', resume);

    // Append certification files and names
    certifications.forEach((cert) => {
      if (cert.file) formDataObj.append('certifications', cert.file); // All files under "certifications"
    });

    // Append names as JSON string
    formDataObj.append('certificationNames', JSON.stringify(certifications.map(cert => cert.name)));

    const response = await axios.post(
       `${BASE_URL}/BASE/auth/register/consultant`,
      formDataObj,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      }
    );

    console.log('✅ Registered User:', response.data);
    setSubmitted(true);
  } catch (error) {
    console.error('error:', error.response?.data || error.message);
    setErrorMsg(error.response?.data?.message || 'error');
  } finally {
    setLoading(false);
  }
};


  const resetForm = () => {
    setStep(0);
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      password: '',
      contactNumber: '',
      location: '',
      linkedin: '',
      role: 'consultant',
      designation: '',
      company: '',
      industry: '',
      skills: '',
      yearsOfExperience: '',
      about: '',
      languages: '',
      expectedFee: '',
    });
    setProfilePhoto(null);
    setResume(null);
    setCertifications([{ name: '', file: null }]);
  };

  // ✅ Success UI
  if (submitted) {
    return (
      <div className="text-center p-8 max-w-2xl mx-auto mt-10  shadow-md dark:bg-slate-800 bg-white  dark:text-gray-100">
        <div className="flex justify-center mb-6 ">
          <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center ">
            <FaCheckCircle className="text-white text-5xl" />
          </div>
        </div>
        <h2 className="text-3xl font-bold mb-4 dark:text-white">Application Submitted!</h2>
        <p className="text-lg mb-6 dark:text-white">
          Thank you for choosing our platform. We'll contact you soon.
        </p>
        <button
          onClick={resetForm}
          className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary transition"
        >
          <FaPlusCircle className="inline mr-2" /> Create New Application
        </button>
      </div>
    );
  }


  return (
    <div className="w-full mx-auto px-4 py-12 ">
      <div className="max-w-5xl m-auto bg-white dark:bg-[#0b1225] dark:text-gray-100 shadow-xl">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-secondary to-primary flex items-center justify-center shadow-lg">
              <FaUserTie className="text-white text-3xl" />
            </div>
          </div>
          <h1 className="text-black dark:text-white text-3xl md:text-4xl font-bold mb-3">
            User SignUp Portal
          </h1>
          <div className="mt-8 max-w-xl mx-auto">
            <StepTabs step={step} />
            <ProgressBar step={step} />
          </div>
        </div>

        {errorMsg && (
          <div className="text-red-500 text-center mb-4 font-semibold">{errorMsg}</div>
        )}

        <form onSubmit={handleSubmit} className="p-6 md:p-10 ">
          {/* Step 1 */}
          {step === 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-8">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input name="name" value={formData.name} onChange={handleChange} className="input-field" placeholder="Full Name" required />
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="input-field" placeholder="Email" required />
                <input name="contactNumber" value={formData.contactNumber} onChange={handleChange} className="input-field" placeholder="Contact Number" />
                <input name="location" value={formData.location} onChange={handleChange} className="input-field" placeholder="Location / City" />
                <input name="linkedin" value={formData.linkedin} onChange={handleChange} className="input-field" placeholder="LinkedIn Profile" />
                <input type="password" name="password" value={formData.password} onChange={handleChange} className="input-field" placeholder="Create Password" required />
              </div>
              <div className="mt-6">
                <label className="block mb-2">Profile Photo:</label>
                <input type="file" accept="image/*" onChange={(e) => setProfilePhoto(e.target.files[0])} />
              </div>
              <div className="mt-6">
                <label className="block mb-2">Upload Resume:</label>
                <input type="file" accept=".pdf" onChange={(e) => setResume(e.target.files[0])} />
              </div>
              <div className="flex justify-end mt-12">
                <button type="button" onClick={handleNext} className="btn-primary text-white bg-primary px-6 py-3 rounded-lg flex items-center">
                  Next: Professional <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2 */}
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold mb-8">Professional Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input name="designation" value={formData.designation} onChange={handleChange} className="input-field" placeholder="Designation / Job Title" />
                <input name="company" value={formData.company} onChange={handleChange} className="input-field" placeholder="Current Company" />
                <input name="industry" value={formData.industry} onChange={handleChange} className="input-field" placeholder="Industry / Domain" />
                <input name="skills" value={formData.skills} onChange={handleChange} className="input-field" placeholder="Skills" />
                <input name="languages" value={formData.languages} onChange={handleChange} className="input-field" placeholder="Languages Known" />
                <input name="expectedFee" type="number" value={formData.expectedFee} onChange={handleChange} className="input-field" placeholder="Expected Fee ($/hr)" />
                <input name="yearsOfExperience" type="number" value={formData.yearsOfExperience} onChange={handleChange} className="input-field" placeholder="Experience" />
                <textarea name="about" type="text" value={formData.about} onChange={handleChange} className="input-field" placeholder="about" />

              </div>
              <div className="flex justify-between mt-12">
                <button type="button" onClick={handleBack} className="px-6 py-3 bg-gray-200 rounded-lg flex items-center">
                  <FaArrowLeft className="mr-2" /> Back
                </button>
                <button type="button" onClick={handleNext} className="btn-primary text-white px-6 py-3 rounded-lg bg-primary flex items-center">
                  Next: Certifications <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold mb-8">Certifications & Documents</h2>
              {certifications.map((cert, i) => (
                <div key={i} className="bg-gray-50 p-6  mb-6 border border-gray-100">
                  <h3 className="font-medium text-lg mb-5">Certification #{i + 1}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <input
                      className="input-field"
                      placeholder="Certification Name"
                      value={cert.name}
                      onChange={(e) => {
                        const newCerts = [...certifications];
                        newCerts[i].name = e.target.value;
                        setCertifications(newCerts);
                      }}
                    />
                    <input
                      className="input-field"
                      type="file"
                      accept=".pdf,.jpg,.png"
                      onChange={(e) => {
                        const newCerts = [...certifications];
                        newCerts[i].file = e.target.files[0];
                        setCertifications(newCerts);
                      }}
                    />
                  </div>
                </div>
              ))}
              <div className="flex justify-center mb-8">
                <button type="button" onClick={handleAddCertification} className="px-5 py-3 bg-gray-100 rounded-lg flex items-center">
                  <FaPlusCircle className="mr-2" /> Add Another Certification
                </button>
              </div>
              <div className="p-6  mb-8 border border-primary">
                <label className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3 h-5 w-5" required />
                  <span>I agree to the Terms of Service and Privacy Policy.</span>
                </label>
              </div>
              <div className="flex justify-between mt-8">
                <button type="button" onClick={handleBack} className="px-6 py-3 bg-gray-200 rounded-lg flex items-center">
                  <FaArrowLeft className="mr-2" /> Back
                </button>
                <button type="submit" disabled={loading} className="px-8 py-4 bg-primary text-white rounded-lg font-semibold shadow-md flex items-center">
                  {loading ? 'Submitting...' : (<><FaCheckCircle className="mr-2" /> Submit Application</>)}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignUpUser;
