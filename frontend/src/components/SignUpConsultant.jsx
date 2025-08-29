// import React, { useState } from 'react';
// import axios from 'axios';
// import {
//   FaUserTie, FaBriefcase, FaCertificate, FaArrowRight, FaArrowLeft,
//   FaPlusCircle, FaCheckCircle
// } from 'react-icons/fa';
// import Navbar from './Navbar';
// const BASE_URL = import.meta.env.VITE_BACKEND_URL;

// const StepTabs = ({ step }) => {
//   const tabs = ["Personal Info", "Professional", "Certifications"];
//   return (
//     <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-1 font-medium">
//       {tabs.map((tab, i) => (
//         <span
//           key={tab}
//           className={` tab-indicator w-1/3 text-center py-5 relative ${step === i
//             ? 'text-primary dark:text-primary font-semibold'
//             : 'text-gray-500 dark:text-gray-400'
//             }`}
//         >
//           {i === 0 && <FaUserTie className="inline mr-2" />}
//           {i === 1 && <FaBriefcase className="inline mr-2" />}
//           {i === 2 && <FaCertificate className="inline mr-2" />}
//           {tab}
//         </span>
//       ))}
//     </div>
//   );
// };

// const ProgressBar = ({ step }) => {
//   const widths = ["w-1/3", "w-2/3", "w-full"];
//   return (
//     <div className=" sm:w-full w-10/12 bg-gray-200 dark:bg-gray-700 h-2.5 rounded-full overflow-hidden  m-auto  ">
//       <div
//         className={`bg-gradient-to-r from-primary to-primary ${widths[step]} h-full transition-all duration-500 `}
//       ></div>
//     </div>
//   );
// };

// const SignUpConsultant = () => {
//   const [step, setStep] = useState(0);
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [errorMsg, setErrorMsg] = useState('');

//   // ✅ Form 
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     contactNumber: '',
//     location: '',
//     linkedin: '',
//     role: 'consultant',
//     designation: '', 
//     company: '',
//     industry: '',
//     skills: '',
//     yearsOfExperience: '',
//     about: '',
//     languages: '',
//     expectedFee: '',
//   });

//   const [profilePhoto, setProfilePhoto] = useState(null);
//   const [resume, setResume] = useState(null);
//   const [certifications, setCertifications] = useState([{ name: '', file: null }]);

//   const handleNext = () => setStep((prev) => Math.min(prev + 1, 2));
//   const handleBack = () => setStep((prev) => Math.max(prev - 1, 0));
//   const handleAddCertification = () => setCertifications([...certifications, { name: '', file: null }]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
    
//   e.preventDefault();
//   setLoading(true);
//   setErrorMsg('');

//   try {
//     const formDataObj = new FormData();

//     // Append text fields
//     Object.keys(formData).forEach((key) => {
//       formDataObj.append(key, formData[key]);
//     });

//     // Append profile photo & resume
//     if (profilePhoto) formDataObj.append('profilePhoto', profilePhoto);
//     if (resume) formDataObj.append('resume', resume);

//     // Append certification files and names
//     certifications.forEach((cert) => {
//       if (cert.file) formDataObj.append('certifications', cert.file); // All files under "certifications"
//     });

//     // Append names as JSON string
//     formDataObj.append('certificationNames', JSON.stringify(certifications.map(cert => cert.name)));

//     const response = await axios.post(
//        `${BASE_URL}/api/auth/register/consultant`,
//       formDataObj,
//       {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       }
//     );

//     console.log('✅ Registered User:', response.data);
//     setSubmitted(true);
//   } catch (error) {
//     console.error('error:', error.response?.data || error.message);
//     setErrorMsg(error.response?.data?.message || 'error');
//   } finally {
//     setLoading(false);
//   }
// };


//   const resetForm = () => {
//     setStep(0);
//     setSubmitted(false);
//     setFormData({
//       name: '',
//       email: '',
//       password: '',
//       contactNumber: '',
//       location: '',
//       linkedin: '',
//       role: 'consultant',
//       designation: '',
//       company: '',
//       industry: '',
//       skills: '',
//       yearsOfExperience: '',
//       about: '',
//       languages: '',
//       expectedFee: '',
//     });
//     setProfilePhoto(null);
//     setResume(null);
//     setCertifications([{ name: '', file: null }]);
//   };

//   // ✅ Success UI
//   if (submitted) {
//     return (
//       <div className="text-center p-8 max-w-2xl mx-auto mt-10 rounded-xl shadow-md dark:bg-slate-800">
//         <div className="flex justify-center mb-6">
//           <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center ">
//             <FaCheckCircle className="text-white text-5xl" />
//           </div>
//         </div>
//         <h2 className="text-3xl font-bold mb-4 dark:text-white">Application Submitted!</h2>
//         <p className="text-lg mb-6 dark:text-white">
//           Thank you for applying to become a consultant. We'll contact you soon.
//         </p>
//         <button
//           onClick={resetForm}
//           className="px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary transition"
//         >
//           <FaPlusCircle className="inline mr-2" /> Create New Application
//         </button>
//       </div>
//     );
//   }
  
//   return (
//     <>
//     <Navbar/>
//     <div className="w-full mx-auto sm:mt-4  dark:bg-[#090d13]">
//       <div className="lg:max-w-5xl w-full sm:pt-10 m-auto bg-white dark:bg-[#0b1225] dark:text-gray-100 shadow-xl rounded-2xl">
//         <div className="text-center sm:mb-12">
//           <div className="flex justify-center sm:mb-6">
//             <div className=" p-4 rounded-2xl bg-gradient-to-r from-primarylight to-primary flex items-center justify-center shadow-lg  mb-4">
//               <FaUserTie className="text-primary text-2xl" />
//             </div>
//           </div>
//           <h1 className="text-black dark:text-white text-2xl md:text-4xl font-bold mb-3">
//             Consultant SignUp Portal
//           </h1>
//           <div className="max-w-xl mx-auto">
//             <StepTabs step={step} />
//             <ProgressBar step={step} />
//           </div>
//         </div>

//         {errorMsg && (
//           <div className="text-red-500 text-center mb-4 font-semibold">{errorMsg}</div>
//         )}

//         <form onSubmit={handleSubmit} className="p-6 md:p-10 ">
//           {/* Step 1 */}
//           {step === 0 && (
//             <div>
//               <h2 className="text-2xl font-bold mb-8">Personal Information</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <input name="name" value={formData.name} onChange={handleChange} className="input-field" placeholder="Full Name" required />
//                 <input type="email" name="email" value={formData.email} onChange={handleChange} className="input-field" placeholder="Email" required />
//                 <input name="contactNumber" value={formData.contactNumber} onChange={handleChange} className="input-field" placeholder="Contact Number" />
//                 <input name="location" value={formData.location} onChange={handleChange} className="input-field" placeholder="Location / City" />
//                 <input name="linkedin" value={formData.linkedin} onChange={handleChange} className="input-field" placeholder="LinkedIn Profile" />
//                 <input type="password" name="password" value={formData.password} onChange={handleChange} className="input-field" placeholder="Create Password" required />
//               </div>
//               <div className="mt-6">
//                 <label className="block mb-2">Profile Photo:</label>
//                 <input type="file" accept="image/*" onChange={(e) => setProfilePhoto(e.target.files[0])} />
//               </div>
//               <div className="mt-6">
//                 <label className="block mb-2">Upload Resume:</label>
//                 <input type="file" accept=".pdf" onChange={(e) => setResume(e.target.files[0])} />
//               </div>
//               <div className="flex justify-end mt-12">
//                 <button type="button" onClick={handleNext} className="btn-primary text-white bg-primary px-4 py-2 rounded-lg flex items-center">
//                   Next: Professional <FaArrowRight className="ml-2" />
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* Step 2 */}
//           {step === 1 && (
//             <div>
//               <h2 className="text-2xl font-bold mb-8">Professional Details</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <input name="designation" value={formData.designation} onChange={handleChange} className="input-field" placeholder="Designation / Job Title" />
//                 <input name="company" value={formData.company} onChange={handleChange} className="input-field" placeholder="Current Company" />
//                 <input name="industry" value={formData.industry} onChange={handleChange} className="input-field" placeholder="Industry / Domain" />
//                 <input name="skills" value={formData.skills} onChange={handleChange} className="input-field" placeholder="Skills" />
//                 <input name="languages" value={formData.languages} onChange={handleChange} className="input-field" placeholder="Languages Known" />
//                 <input name="expectedFee" type="number" value={formData.expectedFee} onChange={handleChange} className="input-field" placeholder="Expected Fee ($/hr)" />
//                 <input name="yearsOfExperience" type="number" value={formData.yearsOfExperience} onChange={handleChange} className="input-field" placeholder="Experience" />
//                 <textarea name="about" type="text" value={formData.about} onChange={handleChange} className="input-field" placeholder="about" />

//               </div>
//               <div className="flex justify-between mt-12">
//                 <button type="button" onClick={handleBack} className="px-4 py-2 bg-gray-200 rounded-lg flex items-center">
//                   <FaArrowLeft className="mr-2" /> Back
//                 </button>
//                 <button type="button" onClick={handleNext} className="btn-primary text-white px-4 py-2 rounded-lg bg-primary flex items-center">
//                   Next: Certifications <FaArrowRight className="ml-2" />
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* Step 3 */}
//           {step === 2 && (
//             <div>
//               <h2 className="text-2xl font-bold mb-8">Certifications & Documents</h2>
//               {certifications.map((cert, i) => (
//                 <div key={i} className="bg-gray-50 p-6 rounded-xl mb-6 border border-gray-100">
//                   <h3 className="font-medium text-lg mb-5">Certification #{i + 1}</h3>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <input
//                       className="input-field"
//                       placeholder="Certification Name"
//                       value={cert.name}
//                       onChange={(e) => {
//                         const newCerts = [...certifications];
//                         newCerts[i].name = e.target.value;
//                         setCertifications(newCerts);
//                       }}
//                     />
//                     <input
//                       className="input-field"
//                       type="file"
//                       accept=".pdf,.jpg,.png"
//                       onChange={(e) => {
//                         const newCerts = [...certifications];
//                         newCerts[i].file = e.target.files[0];
//                         setCertifications(newCerts);
//                       }}
//                     />
//                   </div>
//                 </div>
//               ))}
//               <div className="flex justify-center mb-8">
//                 <button type="button" onClick={handleAddCertification} className="px-5 py-3 bg-gray-100 rounded-lg flex items-center">
//                   <FaPlusCircle className="mr-2" /> Add Another Certification
//                 </button>
//               </div>
//               <div className="p-4  sm:text-base text-sm rounded-xl mb-8 border border-primary">
//                 <label className="flex items-start">
//                   <input type="checkbox" className="mt-1 mr-3 h-4 w-4" required />
//                   <span>I agree to the Terms of Service and Privacy Policy.</span>
//                 </label>
//               </div>
//               <div className="flex justify-between mt-8">
//                 <button type="button" onClick={handleBack} className="px-4 py-2 bg-gray-200 rounded-lg flex items-center">
//                   <FaArrowLeft className="mr-2" /> Back
//                 </button>
//                 <button type="submit" disabled={loading} className="px-4 py-2 bg-primary text-white rounded-lg font-semibold shadow-md flex items-center">
//                   {loading ? 'Submitting...' : (<><FaCheckCircle className="mr-2" /> Submit Application</>)}
//                 </button>
//               </div>
//             </div>
//           )}
//         </form>
//       </div>
//     </div>
//     </>
//   );
// };

// export default SignUpConsultant;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  FaUserTie, FaBriefcase, FaCertificate, FaArrowRight, FaArrowLeft,
  FaPlusCircle, FaCheckCircle, FaExclamationCircle
} from 'react-icons/fa';
import Navbar from './Navbar';
const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const StepTabs = ({ step }) => {
  const tabs = ["Personal Info", "Professional", "Certifications"];
  return (
    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-1 font-medium">
      {tabs.map((tab, i) => (
        <span
          key={tab}
          className={`tab-indicator w-1/3 text-center py-5 relative ${step === i
            ? 'text-primary dark:text-primary-400 font-semibold'
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
    <div className="sm:w-full w-10/12 bg-gray-200 dark:bg-gray-700 h-2.5 rounded-full overflow-hidden m-auto">
      <div
        className={`bg-gradient-to-r from-primary to-primary-600 ${widths[step]} h-full transition-all duration-500`}
      ></div>
    </div>
  );
};

const SignUpConsultant = () => {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [errors, setErrors] = useState({});
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check for dark mode preference on component mount
  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark' || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches && !localStorage.getItem('theme'));
    setIsDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

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

  // Validation functions
  const validateStep = (step) => {
    const newErrors = {};
    
    if (step === 0) {
      if (!formData.name.trim()) newErrors.name = 'Full name is required';
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
      if (!formData.password) {
        newErrors.password = 'Password is required';
      } else if (formData.password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters';
      }
      if (!formData.contactNumber.trim()) newErrors.contactNumber = 'Contact number is required';
      if (!formData.location.trim()) newErrors.location = 'Location is required';
      if (!profilePhoto) newErrors.profilePhoto = 'Profile photo is required';
      if (!resume) newErrors.resume = 'Resume is required';
    } else if (step === 1) {
      if (!formData.designation.trim()) newErrors.designation = 'Designation is required';
      if (!formData.company.trim()) newErrors.company = 'Company is required';
      if (!formData.industry.trim()) newErrors.industry = 'Industry is required';
      if (!formData.skills.trim()) newErrors.skills = 'Skills are required';
      if (!formData.yearsOfExperience) newErrors.yearsOfExperience = 'Years of experience is required';
      if (!formData.about.trim()) newErrors.about = 'About section is required';
      if (!formData.expectedFee) newErrors.expectedFee = 'Expected fee is required';
    } else if (step === 2) {
      // Validate certifications
      certifications.forEach((cert, index) => {
        if (!cert.name.trim() && cert.file) {
          newErrors[`certName_${index}`] = 'Certification name is required';
        }
        if (cert.name.trim() && !cert.file) {
          newErrors[`certFile_${index}`] = 'Certification file is required';
        }
      });
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => Math.min(prev + 1, 2));
    }
  };

  const handleBack = () => setStep((prev) => Math.max(prev - 1, 0));

  const handleAddCertification = () => setCertifications([...certifications, { name: '', file: null }]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    // Validate all steps before submission
    if (!validateStep(0) || !validateStep(1) || !validateStep(2)) {
      setErrorMsg('Please fix all validation errors before submitting');
      setLoading(false);
      return;
    }

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
        if (cert.file) formDataObj.append('certifications', cert.file);
      });

      // Append names as JSON string
      formDataObj.append('certificationNames', JSON.stringify(certifications.map(cert => cert.name)));

      const response = await axios.post(
        `${BASE_URL}/api/auth/register/consultant`,
        formDataObj,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );

      console.log('✅ Registered User:', response.data);
      setSubmitted(true);
    } catch (error) {
      console.error('error:', error.response?.data || error.message);
      setErrorMsg(error.response?.data?.message || 'Registration failed. Please try again.');
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
    setErrors({});
  };

  // ✅ Success UI
  if (submitted) {
    return (
      <div className="text-center p-8 max-w-2xl mx-auto mt-10 rounded-xl shadow-md dark:bg-gray-800 bg-white">
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center">
            <FaCheckCircle className="text-white text-5xl" />
          </div>
        </div>
        <h2 className="text-3xl font-bold mb-4 dark:text-white">Application Submitted!</h2>
        <p className="text-lg mb-6 dark:text-gray-300 text-gray-600">
          Thank you for applying to become a consultant. We'll contact you soon.
        </p>
        <button
          onClick={resetForm}
          className="px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary-600 transition"
        >
          <FaPlusCircle className="inline mr-2" /> Create New Application
        </button>
      </div>
    );
  }
  
  return (
    <>
      <Navbar/>
      <div className="w-full mx-auto sm:mt-4 dark:bg-[#090d13] min-h-screen">
        <div className="lg:max-w-5xl w-full sm:pt-10 m-auto bg-white dark:bg-[#0b1225] dark:text-gray-100 shadow-xl rounded-2xl">
          <div className="text-center sm:mb-12">
            <div className="flex justify-center sm:mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-primary-400 to-primary flex items-center justify-center shadow-lg mb-4">
                <FaUserTie className="text-white text-2xl" />
              </div>
            </div>
            <h1 className="text-black dark:text-white text-2xl md:text-4xl font-bold mb-3">
              Consultant SignUp Portal
            </h1>
            <div className="max-w-xl mx-auto">
              <StepTabs step={step} />
              <ProgressBar step={step} />
            </div>
          </div>

          {errorMsg && (
            <div className="text-red-500 text-center mb-4 font-semibold dark:text-red-400">{errorMsg}</div>
          )}

          <form onSubmit={handleSubmit} className="p-6 md:p-10">
            {/* Step 1 */}
            {step === 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-8 dark:text-white">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input name="name" value={formData.name} onChange={handleChange} className={`input-field dark:bg-gray-700 dark:text-white dark:border-gray-600 ${errors.name ? 'border-red-500' : ''}`} placeholder="Full Name" required />
                    {errors.name && <div className="text-red-500 text-sm mt-1 flex items-center"><FaExclamationCircle className="mr-1" /> {errors.name}</div>}
                  </div>
                  <div>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className={`input-field dark:bg-gray-700 dark:text-white dark:border-gray-600 ${errors.email ? 'border-red-500' : ''}`} placeholder="Email" required />
                    {errors.email && <div className="text-red-500 text-sm mt-1 flex items-center"><FaExclamationCircle className="mr-1" /> {errors.email}</div>}
                  </div>
                  <div>
                    <input name="contactNumber" value={formData.contactNumber} onChange={handleChange} className={`input-field dark:bg-gray-700 dark:text-white dark:border-gray-600 ${errors.contactNumber ? 'border-red-500' : ''}`} placeholder="Contact Number" />
                    {errors.contactNumber && <div className="text-red-500 text-sm mt-1 flex items-center"><FaExclamationCircle className="mr-1" /> {errors.contactNumber}</div>}
                  </div>
                  <div>
                    <input name="location" value={formData.location} onChange={handleChange} className={`input-field dark:bg-gray-700 dark:text-white dark:border-gray-600 ${errors.location ? 'border-red-500' : ''}`} placeholder="Location / City" />
                    {errors.location && <div className="text-red-500 text-sm mt-1 flex items-center"><FaExclamationCircle className="mr-1" /> {errors.location}</div>}
                  </div>
                  <div>
                    <input name="linkedin" value={formData.linkedin} onChange={handleChange} className="input-field dark:bg-gray-700 dark:text-white dark:border-gray-600" placeholder="LinkedIn Profile" />
                  </div>
                  <div>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} className={`input-field dark:bg-gray-700 dark:text-white dark:border-gray-600 ${errors.password ? 'border-red-500' : ''}`} placeholder="Create Password" required />
                    {errors.password && <div className="text-red-500 text-sm mt-1 flex items-center"><FaExclamationCircle className="mr-1" /> {errors.password}</div>}
                  </div>
                </div>
                <div className="mt-6">
                  <label className="block mb-2 dark:text-white">Profile Photo:</label>
                  <input type="file" accept="image/*" onChange={(e) => {
                    setProfilePhoto(e.target.files[0]);
                    if (errors.profilePhoto) setErrors(prev => ({ ...prev, profilePhoto: '' }));
                  }} className="dark:text-white" />
                  {errors.profilePhoto && <div className="text-red-500 text-sm mt-1 flex items-center"><FaExclamationCircle className="mr-1" /> {errors.profilePhoto}</div>}
                </div>
                <div className="mt-6">
                  <label className="block mb-2 dark:text-white">Upload Resume:</label>
                  <input type="file" accept=".pdf" onChange={(e) => {
                    setResume(e.target.files[0]);
                    if (errors.resume) setErrors(prev => ({ ...prev, resume: '' }));
                  }} className="dark:text-white" />
                  {errors.resume && <div className="text-red-500 text-sm mt-1 flex items-center"><FaExclamationCircle className="mr-1" /> {errors.resume}</div>}
                </div>
                <div className="flex justify-end mt-12">
                  <button type="button" onClick={handleNext} className="btn-primary text-white bg-primary px-4 py-2 rounded-lg flex items-center hover:bg-primary-600 transition">
                    Next: Professional <FaArrowRight className="ml-2" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2 */}
            {step === 1 && (
              <div>
                <h2 className="text-2xl font-bold mb-8 dark:text-white">Professional Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input name="designation" value={formData.designation} onChange={handleChange} className={`input-field dark:bg-gray-700 dark:text-white dark:border-gray-600 ${errors.designation ? 'border-red-500' : ''}`} placeholder="Designation / Job Title" />
                    {errors.designation && <div className="text-red-500 text-sm mt-1 flex items-center"><FaExclamationCircle className="mr-1" /> {errors.designation}</div>}
                  </div>
                  <div>
                    <input name="company" value={formData.company} onChange={handleChange} className={`input-field dark:bg-gray-700 dark:text-white dark:border-gray-600 ${errors.company ? 'border-red-500' : ''}`} placeholder="Current Company" />
                    {errors.company && <div className="text-red-500 text-sm mt-1 flex items-center"><FaExclamationCircle className="mr-1" /> {errors.company}</div>}
                  </div>
                  <div>
                    <input name="industry" value={formData.industry} onChange={handleChange} className={`input-field dark:bg-gray-700 dark:text-white dark:border-gray-600 ${errors.industry ? 'border-red-500' : ''}`} placeholder="Industry / Domain" />
                    {errors.industry && <div className="text-red-500 text-sm mt-1 flex items-center"><FaExclamationCircle className="mr-1" /> {errors.industry}</div>}
                  </div>
                  <div>
                    <input name="skills" value={formData.skills} onChange={handleChange} className={`input-field dark:bg-gray-700 dark:text-white dark:border-gray-600 ${errors.skills ? 'border-red-500' : ''}`} placeholder="Skills" />
                    {errors.skills && <div className="text-red-500 text-sm mt-1 flex items-center"><FaExclamationCircle className="mr-1" /> {errors.skills}</div>}
                  </div>
                  <div>
                    <input name="languages" value={formData.languages} onChange={handleChange} className="input-field dark:bg-gray-700 dark:text-white dark:border-gray-600" placeholder="Languages Known" />
                  </div>
                  <div>
                    <input name="expectedFee" type="number" value={formData.expectedFee} onChange={handleChange} className={`input-field dark:bg-gray-700 dark:text-white dark:border-gray-600 ${errors.expectedFee ? 'border-red-500' : ''}`} placeholder="Expected Fee ($/hr)" />
                    {errors.expectedFee && <div className="text-red-500 text-sm mt-1 flex items-center"><FaExclamationCircle className="mr-1" /> {errors.expectedFee}</div>}
                  </div>
                  <div>
                    <input name="yearsOfExperience" type="number" value={formData.yearsOfExperience} onChange={handleChange} className={`input-field dark:bg-gray-700 dark:text-white dark:border-gray-600 ${errors.yearsOfExperience ? 'border-red-500' : ''}`} placeholder="Years of Experience" />
                    {errors.yearsOfExperience && <div className="text-red-500 text-sm mt-1 flex items-center"><FaExclamationCircle className="mr-1" /> {errors.yearsOfExperience}</div>}
                  </div>
                  <div className="md:col-span-2">
                    <textarea name="about" value={formData.about} onChange={handleChange} className={`input-field dark:bg-gray-700 dark:text-white dark:border-gray-600 ${errors.about ? 'border-red-500' : ''} min-h-[100px]`} placeholder="About yourself and professional background" />
                    {errors.about && <div className="text-red-500 text-sm mt-1 flex items-center"><FaExclamationCircle className="mr-1" /> {errors.about}</div>}
                  </div>
                </div>
                <div className="flex justify-between mt-12">
                  <button type="button" onClick={handleBack} className="px-4 py-2 bg-gray-200 dark:bg-gray-600 dark:text-white rounded-lg flex items-center hover:bg-gray-300 dark:hover:bg-gray-500 transition">
                    <FaArrowLeft className="mr-2" /> Back
                  </button>
                  <button type="button" onClick={handleNext} className="btn-primary text-white px-4 py-2 rounded-lg bg-primary flex items-center hover:bg-primary-600 transition">
                    Next: Certifications <FaArrowRight className="ml-2" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3 */}
            {step === 2 && (
              <div>
                <h2 className="text-2xl font-bold mb-8 dark:text-white">Certifications & Documents</h2>
                {certifications.map((cert, i) => (
                  <div key={i} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl mb-6 border border-gray-100 dark:border-gray-600">
                    <h3 className="font-medium text-lg mb-5 dark:text-white">Certification #{i + 1}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <input
                          className={`input-field dark:bg-gray-600 dark:text-white dark:border-gray-500 ${errors[`certName_${i}`] ? 'border-red-500' : ''}`}
                          placeholder="Certification Name"
                          value={cert.name}
                          onChange={(e) => {
                            const newCerts = [...certifications];
                            newCerts[i].name = e.target.value;
                            setCertifications(newCerts);
                            if (errors[`certName_${i}`]) setErrors(prev => ({ ...prev, [`certName_${i}`]: '' }));
                          }}
                        />
                        {errors[`certName_${i}`] && <div className="text-red-500 text-sm mt-1 flex items-center"><FaExclamationCircle className="mr-1" /> {errors[`certName_${i}`]}</div>}
                      </div>
                      <div>
                        <input
                          className={`input-field dark:bg-gray-600 dark:text-white dark:border-gray-500 ${errors[`certFile_${i}`] ? 'border-red-500' : ''}`}
                          type="file"
                          accept=".pdf,.jpg,.png"
                          onChange={(e) => {
                            const newCerts = [...certifications];
                            newCerts[i].file = e.target.files[0];
                            setCertifications(newCerts);
                            if (errors[`certFile_${i}`]) setErrors(prev => ({ ...prev, [`certFile_${i}`]: '' }));
                          }}
                        />
                        {errors[`certFile_${i}`] && <div className="text-red-500 text-sm mt-1 flex items-center"><FaExclamationCircle className="mr-1" /> {errors[`certFile_${i}`]}</div>}
                      </div>
                    </div>
                  </div>
                ))}
                <div className="flex justify-center mb-8">
                  <button type="button" onClick={handleAddCertification} className="px-5 py-3 bg-gray-100 dark:bg-gray-600 dark:text-white rounded-lg flex items-center hover:bg-gray-200 dark:hover:bg-gray-500 transition">
                    <FaPlusCircle className="mr-2" /> Add Another Certification
                  </button>
                </div>
                <div className="p-4 sm:text-base text-sm rounded-xl mb-8 border border-primary dark:border-primary-400 bg-primary-50 dark:bg-primary-900/20">
                  <label className="flex items-start dark:text-white">
                    <input type="checkbox" className="mt-1 mr-3 h-4 w-4" required />
                    <span>I agree to the Terms of Service and Privacy Policy.</span>
                  </label>
                </div>
                <div className="flex justify-between mt-8">
                  <button type="button" onClick={handleBack} className="px-4 py-2 bg-gray-200 dark:bg-gray-600 dark:text-white rounded-lg flex items-center hover:bg-gray-300 dark:hover:bg-gray-500 transition">
                    <FaArrowLeft className="mr-2" /> Back
                  </button>
                  <button type="submit" disabled={loading} className="px-4 py-2 bg-primary text-white rounded-lg font-semibold shadow-md flex items-center hover:bg-primary-600 transition disabled:opacity-50">
                    {loading ? 'Submitting...' : (<><FaCheckCircle className="mr-2" /> Submit Application</>)}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpConsultant;