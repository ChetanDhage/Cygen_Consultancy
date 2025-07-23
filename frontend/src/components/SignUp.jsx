import React, { useState } from 'react';
import {
  FaUserTie, FaUser, FaBriefcase, FaCertificate, FaArrowRight, FaArrowLeft,
  FaPlusCircle, FaCheckCircle
} from 'react-icons/fa';

const StepTabs = ({ step }) => {
  const tabs = ["Personal Info", "Professional", "Certifications"];
  return (
    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-3 font-medium">
      {tabs.map((tab, i) => (
        <span
          key={tab}
          className={`tab-indicator w-1/3 text-center py-5 relative ${
            step === i ? 'text-primary dark:text-primary font-semibold' : 'text-gray-500 dark:text-gray-400'
          }`}
        >
          {i === 0 && <FaUser className="inline mr-2" />}
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

const SignUp = () => {
  const [step, setStep] = useState(0);
  const [certifications, setCertifications] = useState([{}]);
  const [submitted, setSubmitted] = useState(false);

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 2));
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 0));
  const handleAddCertification = () => setCertifications([...certifications, {}]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setStep(0);
    setSubmitted(false);
    setCertifications([{}]);
  };

  if (submitted) {
    return (
      <div className="text-center p-8 max-w-2xl mx-auto mt-10  rounded-xl shadow-md dark:bg-slate-800">
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center ">
            <FaCheckCircle className="text-primary text-5xl" />
          </div>
        </div>
        <h2 className="text-3xl font-bold mb-4 dark:text-white">Application Submitted!</h2>
        <p className="text-lg mb-6 dark:text-white">
          Thank you for applying to become a CyGen consultant. We'll contact you within 1-2 business days.
        </p>
        <button onClick={resetForm} className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary transition">
          <FaPlusCircle className="inline mr-2 dark:text-white" /> Create New Application
        </button>
      </div>
    );
  }

  return (
    <div className=" w-full mx-auto px-4 py-12  transition-all duration-500 dark:bg-[#090d13] ">
      <div className=' max-w-5xl m-auto'>
        <div className="text-center mb-12 ">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-secondary to-primary  flex items-center justify-center shadow-lg bg-primary">
            <FaUserTie className="text-white text-3xl" />
          </div>
        </div>
        <h1 className="text-black dark:text-white text-3xl md:text-4xl font-bold mb-3">Consultant Signup Portal</h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
          Join our network of experts and share your knowledge with businesses worldwide.
        </p>
        <div className="mt-8 max-w-xl mx-auto">
          <StepTabs step={step} />
          <ProgressBar step={step} />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-6 md:p-10 bg-white dark:bg-[#0b1225] dark:text-gray-100 rounded-xl shadow-xl">
        {step === 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-8">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input className="input-field" placeholder="Full Name" />
              <input className="input-field" type="date" />
              <input className="input-field" type="email" placeholder="Email" />
              <input className="input-field" type="tel" placeholder="Contact Number" />
              <input className="input-field" placeholder="Location / City" />
              <input className="input-field" placeholder="LinkedIn Profile" />
              <input className="input-field" type="file" accept="image/*" />
              <input className="input-field" type="password" placeholder="Create Password" />
            </div>
            <div className="flex justify-end mt-12">
              <button type="button" onClick={handleNext} className="btn-primary text-white bg-primary px-6 py-3 rounded-lg hover:bg-primary flex items-center">
                Next: Professional <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        )}

        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold mb-8">Professional Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input className="input-field" placeholder="Designation / Job Title" />
              <input className="input-field" placeholder="Current Company" />
              <input className="input-field" placeholder="Industry / Domain" />
              <input className="input-field" placeholder="Skills" />
              <input className="input-field" placeholder="Languages Known" />
              <input className="input-field" type="number" placeholder="Expected Fee ($/hr)" />
              <select className="input-field">
                <option>Select work mode</option>
                <option>Remote</option>
                <option>On-site</option>
                <option>Hybrid</option>
              </select>
              <textarea className="input-field" rows="4" placeholder="About Me / Pitch"></textarea>
              <input className="input-field" type="file" accept=".pdf,.doc,.docx" />
            </div>
            <div className="flex justify-between mt-12">
              <button type="button" onClick={handleBack} className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 flex items-center">
                <FaArrowLeft className="mr-2" /> Back
              </button>
              <button type="button" onClick={handleNext} className="btn-primary text-white px-6 py-3 rounded-lg bg-primary hover:bg-primary flex items-center">
                Next: Certifications <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-2xl font-bold mb-8">Certifications & Documents</h2>
            {certifications.map((_, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl mb-6 border border-gray-100 dark:border-gray-600">
                <h3 className="font-medium text-lg mb-5">Certification #{i + 1}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <input className="input-field" placeholder="Certification Name" />
                  <input className="input-field" type="file" accept=".pdf,.jpg,.png" />
                </div>
              </div>
            ))}
            <div className="flex justify-center mb-8">
              <button type="button" onClick={handleAddCertification} className="px-5 py-3 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center">
                <FaPlusCircle className="mr-2" /> Add Another Certification
              </button>
            </div>
            <div className=" p-6 rounded-xl mb-8 border border-primary dark:border-gray-600">
              <label className="flex items-start">
                <input type="checkbox" className="mt-1 mr-3 h-5 w-5 text-accent rounded" required />
                <span>
                  I agree to the <a href="#" className="text-primary font-medium hover:underline">Terms of Service</a> and <a href="#" className="text-primary font-medium hover:underline">Privacy Policy</a>.
                </span>
              </label>
            </div>
            <div className="flex justify-between mt-8">
              <button type="button" onClick={handleBack} className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 flex items-center">
                <FaArrowLeft className="mr-2" /> Back
              </button>
              <button type="submit" className="px-8 py-4 bg-primary hover:bg-primary text-white rounded-lg font-semibold shadow-md flex items-center">
                <FaCheckCircle className="mr-2" /> Submit Application
              </button>
            </div>
          </div>
        )}
      </form>
      </div>
    </div>
  );
};

export default SignUp;
