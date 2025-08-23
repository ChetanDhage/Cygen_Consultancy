// import { useState, useRef } from 'react';
// import './tailwind.css'; // Make sure to have Tailwind CSS set up in your project

// const SignUpUser = () => {
//   const [currentStep, setCurrentStep] = useState(0);
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     country: '',
//     countryCode: '',
//     email: '',
//     phone: '',
//     timezone: '',
//     companyName: '',
//     companyDetails: '',
//     serviceArea: '',
//     requirements: '',
//     urgentRequest: false,
//     consentAgreement: false
//   });
//   const [errors, setErrors] = useState({});
//   const [files, setFiles] = useState([]);
//   const [showSuccess, setShowSuccess] = useState(false);
//   const fileInputRef = useRef(null);

//   const formSteps = [
//     'Personal & Company Info',
//     'Service Details',
//     'Consent & Agreement'
//   ];

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const handleFileChange = (e) => {
//     const selectedFiles = Array.from(e.target.files);
//     setFiles(selectedFiles);
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//   };

//   const handleDragLeave = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     const droppedFiles = Array.from(e.dataTransfer.files);
//     setFiles(droppedFiles);
//     if (fileInputRef.current) {
//       fileInputRef.current.files = e.dataTransfer.files;
//     }
//   };

//   const validateStep = (step) => {
//     const newErrors = {};
    
//     if (step === 0) {
//       if (!formData.firstName.trim()) newErrors.firstName = 'This field is required';
//       if (!formData.lastName.trim()) newErrors.lastName = 'This field is required';
//       if (!formData.country) newErrors.country = 'Please select a country';
//       if (!formData.countryCode) newErrors.countryCode = 'Please select a country code';
//       if (!formData.email) {
//         newErrors.email = 'This field is required';
//       } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//         newErrors.email = 'Please enter a valid email';
//       }
//       if (!formData.phone) newErrors.phone = 'Please enter a valid phone number';
//       if (!formData.timezone) newErrors.timezone = 'Please select a time zone';
//     } else if (step === 1) {
//       if (!formData.serviceArea) newErrors.serviceArea = 'Please select an area of consultation';
//       if (!formData.requirements.trim()) newErrors.requirements = 'Please describe your requirements';
//     } else if (step === 2) {
//       if (!formData.consentAgreement) newErrors.consentAgreement = 'You must agree to the terms to proceed';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const nextStep = () => {
//     if (validateStep(currentStep)) {
//       if (currentStep < formSteps.length - 1) {
//         setCurrentStep(currentStep + 1);
//       } else {
//         submitForm();
//       }
//     }
//   };

//   const prevStep = () => {
//     if (currentStep > 0) {
//       setCurrentStep(currentStep - 1);
//     }
//   };

//   const submitForm = () => {
//     console.log('Form submitted:', { ...formData, files });
//     setShowSuccess(true);
//     // Reset form if needed
//     // setFormData({...initial form state});
//     // setFiles([]);
//     // setCurrentStep(0);
//   };

//   const renderStepIndicator = (index) => {
//     let stepClass = "step-number mx-auto w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center font-medium text-gray-400 mb-2 relative z-10";
//     let labelClass = "step-label text-sm text-gray-500";

//     if (index === currentStep) {
//       stepClass += " active border-primary-500 text-primary-600";
//       labelClass += " text-gray-900 font-medium";
//     } else if (index < currentStep) {
//       stepClass += " completed bg-primary-600 border-primary-600 text-white";
//       labelClass += " text-gray-900 font-medium";
//     }

//     return (
//       <div key={index} className={`progress-step relative flex-1 text-center ${index < formSteps.length - 1 ? 'after:content-[""] after:absolute after:top-5 after:left-[60%] after:right-[-40%] after:h-0.5 after:bg-gray-200 after:z-1' : ''}`}>
//         <div className={stepClass}>{index + 1}</div>
//         <div className={labelClass}>{formSteps[index]}</div>
//       </div>
//     );
//   };

//   const renderStepOne = () => (
//     <div className="animate-fade-in">
//       <h2 className="text-2xl font-semibold text-primary-700 mb-6 pb-2 border-b border-primary-100">Personal & Company Information</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div>
//           <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name <span className="text-red-500">*</span></label>
//           <input
//             type="text"
//             id="firstName"
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleChange}
//             required
//             className={`w-full px-4 py-2 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-primary-500 focus:border-primary-500`}
//           />
//           {errors.firstName && <div className="error-message text-xs text-red-500 mt-1">{errors.firstName}</div>}
//         </div>
//         <div>
//           <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name <span className="text-red-500">*</span></label>
//           <input
//             type="text"
//             id="lastName"
//             name="lastName"
//             value={formData.lastName}
//             onChange={handleChange}
//             required
//             className={`w-full px-4 py-2 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-primary-500 focus:border-primary-500`}
//           />
//           {errors.lastName && <div className="error-message text-xs text-red-500 mt-1">{errors.lastName}</div>}
//         </div>
//         <div>
//           <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country <span className="text-red-500">*</span></label>
//           <select
//             id="country"
//             name="country"
//             value={formData.country}
//             onChange={handleChange}
//             required
//             className={`w-full px-4 py-2 border ${errors.country ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-primary-500 focus:border-primary-500`}
//           >
//             <option value="">Select Country</option>
//             <option value="US">United States</option>
//             <option value="UK">United Kingdom</option>
//             <option value="CA">Canada</option>
//             <option value="AU">Australia</option>
//           </select>
//           {errors.country && <div className="error-message text-xs text-red-500 mt-1">{errors.country}</div>}
//         </div>
//         <div>
//           <label htmlFor="countryCode" className="block text-sm font-medium text-gray-700 mb-1">Country Code <span className="text-red-500">*</span></label>
//           <select
//             id="countryCode"
//             name="countryCode"
//             value={formData.countryCode}
//             onChange={handleChange}
//             required
//             className={`w-full px-4 py-2 border ${errors.countryCode ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-primary-500 focus:border-primary-500`}
//           >
//             <option value="">Select Code</option>
//             <option value="+1">+1 (USA/Canada)</option>
//             <option value="+44">+44 (UK)</option>
//             <option value="+61">+61 (Australia)</option>
//             <option value="+49">+49 (Germany)</option>
//           </select>
//           {errors.countryCode && <div className="error-message text-xs text-red-500 mt-1">{errors.countryCode}</div>}
//         </div>
//         <div>
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-primary-500 focus:border-primary-500`}
//           />
//           {errors.email && <div className="error-message text-xs text-red-500 mt-1">{errors.email}</div>}
//         </div>
//         <div>
//           <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Contact Number <span className="text-red-500">*</span></label>
//           <input
//             type="tel"
//             id="phone"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//             className={`w-full px-4 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-primary-500 focus:border-primary-500`}
//           />
//           {errors.phone && <div className="error-message text-xs text-red-500 mt-1">{errors.phone}</div>}
//         </div>
//         <div>
//           <label htmlFor="timezone" className="block text-sm font-medium text-gray-700 mb-1">Time Zone <span className="text-red-500">*</span></label>
//           <select
//             id="timezone"
//             name="timezone"
//             value={formData.timezone}
//             onChange={handleChange}
//             required
//             className={`w-full px-4 py-2 border ${errors.timezone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-primary-500 focus:border-primary-500`}
//           >
//             <option value="">Select Time Zone</option>
//             <option value="ET">Eastern Time (ET)</option>
//             <option value="CT">Central Time (CT)</option>
//             <option value="MT">Mountain Time (MT)</option>
//             <option value="PT">Pacific Time (PT)</option>
//           </select>
//           {errors.timezone && <div className="error-message text-xs text-red-500 mt-1">{errors.timezone}</div>}
//         </div>
//         <div className="md:col-span-2">
//           <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">Company/Organization Name</label>
//           <input
//             type="text"
//             id="companyName"
//             name="companyName"
//             value={formData.companyName}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
//           />
//         </div>
//         <div className="md:col-span-2">
//           <label htmlFor="companyDetails" className="block text-sm font-medium text-gray-700 mb-1">Company Details</label>
//           <textarea
//             id="companyDetails"
//             name="companyDetails"
//             value={formData.companyDetails}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 min-h-[120px]"
//             placeholder="Brief description of your company/organization (industry, size, etc.)"
//           />
//         </div>
//       </div>
//     </div>
//   );

//   const renderStepTwo = () => (
//     <div className="animate-fade-in">
//       <h2 className="text-2xl font-semibold text-primary-700 mb-6 pb-2 border-b border-primary-100">Service Request Details</h2>
//       <div className="grid grid-cols-1 gap-6">
//         <div>
//           <label htmlFor="serviceArea" className="block text-sm font-medium text-gray-700 mb-1">Area of Consultation <span className="text-red-500">*</span></label>
//           <select
//             id="serviceArea"
//             name="serviceArea"
//             value={formData.serviceArea}
//             onChange={handleChange}
//             required
//             className={`w-full px-4 py-2 border ${errors.serviceArea ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-primary-500 focus:border-primary-500`}
//           >
//             <option value="">Select Area</option>
//             <option value="infrastructure-management">Infrastructure Management</option>
//             <option value="network-security">Network Security</option>
//             <option value="system-administration">System Administration</option>
//             <option value="it-support">IT Support & Helpdesk</option>
//             <option value="web-development">Web Development</option>
//             <option value="mobile-app-development">Mobile App Development</option>
//             <option value="quantum-algorithms">Quantum Algorithms</option>
//             <option value="game-development">Game Development</option>
//             <option value="embedded-systems">Embedded System & IoT Development</option>
//             <option value="iam">Identity & Access Management (IAM)</option>
//             <option value="infrastructure-as-service">Infrastructure as a Service</option>
//             <option value="network-security-advanced">Advanced Network Security</option>
//             <option value="application-security">Application Security</option>
//             <option value="cloud-security">Cloud Security</option>
//             <option value="arvr-gaming">AR/VR for Gaming</option>
//             <option value="endpoint-security">Endpoint Security</option>
//             <option value="predictive-analytics">Predictive Analytics</option>
//             <option value="deep-learning">Deep Learning</option>
//             <option value="virtualization">Advanced Virtualization & CI/CD</option>
//             <option value="big-data">Big Data Technologies</option>
//             <option value="business-intelligence">Business Intelligence</option>
//             <option value="industrial-applications">Industrial Applications</option>
//             <option value="data-engineering">Data Engineering</option>
//             <option value="governance">Data Governance & Compliance</option>
//             <option value="industrial-iot">Industrial IoT (IIoT)</option>
//             <option value="iot-security">IoT Security</option>
//             <option value="blockchain">Blockchain Security</option>
//             <option value="rpa">Robotic Process Automation (RPA)</option>
//             <option value="cicd">Continuous Integration & Deployment (CI/CD)</option>
//             <option value="infrastructure-as-code">Infrastructure as Code (IaC)</option>
//             <option value="configuration-management">Configuration Management</option>
//             <option value="monitoring-logging">Monitoring & Logging</option>
//             <option value="quantum-crypto">Quantum Cryptography</option>
//             <option value="quantum-ml">Quantum Machine Learning</option>
//             <option value="autonomous-vehicles">Autonomous Vehicles & Drones</option>
//           </select>
//           {errors.serviceArea && <div className="error-message text-xs text-red-500 mt-1">{errors.serviceArea}</div>}
//         </div>
        
//         <div>
//           <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-1">Describe Your Requirement <span className="text-red-500">*</span></label>
//           <textarea
//             id="requirements"
//             name="requirements"
//             value={formData.requirements}
//             onChange={handleChange}
//             required
//             className={`w-full px-4 py-2 border ${errors.requirements ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-primary-500 focus:border-primary-500 min-h-[120px]`}
//             placeholder="Please describe your needs in detail, including specific challenges, goals, and any technical requirements"
//           />
//           {errors.requirements && <div className="error-message text-xs text-red-500 mt-1">{errors.requirements}</div>}
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">Supporting Documents</label>
//           <div
//             className={`file-upload border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer transition-colors ${files.length > 0 ? 'has-file border-green-500 bg-green-50' : ''} hover:border-primary-500 hover:bg-primary-50`}
//             onClick={() => fileInputRef.current?.click()}
//             onDragOver={handleDragOver}
//             onDragLeave={handleDragLeave}
//             onDrop={handleDrop}
//           >
//             <input
//               type="file"
//               id="supportDocs"
//               ref={fileInputRef}
//               multiple
//               className="hidden"
//               onChange={handleFileChange}
//             />
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
//             </svg>
//             <p className="mt-2 text-sm text-gray-600">Click to upload or drag and drop</p>
//             <p className="text-xs text-gray-500 mt-1">PDF, DOC, PPT up to 10MB</p>
//           </div>
//           {files.length > 0 && (
//             <div id="fileList" className="mt-2">
//               <div className="text-sm text-gray-500">{files.length} file(s) selected</div>
//               {files.slice(0, 3).map((file, index) => (
//                 <div key={index} className="text-sm font-medium text-gray-700 truncate">
//                   {file.name}
//                 </div>
//               ))}
//               {files.length > 3 && (
//                 <div className="text-xs text-gray-500">
//                   {files.length - 3} more file(s)...
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );

//   const renderStepThree = () => (
//     <div className="animate-fade-in">
//       <h2 className="text-2xl font-semibold text-primary-700 mb-6 pb-2 border-b border-primary-100">Consent & Agreement</h2>
//       <div className="space-y-6">
//         <div className="border border-gray-200 p-6 rounded-lg bg-gray-50 max-h-60 overflow-y-auto">
//           <h3 className="text-lg font-medium text-gray-900 mb-3">Terms of Service</h3>
//           <p className="text-sm text-gray-600 mb-3">
//             By submitting this form, you agree to our Terms of Service, including the User Agreement and Privacy Policy. We will
//             process your personal data in accordance with our privacy policy to provide you with the requested services.
//           </p>
//           <p className="text-sm text-gray-600 mb-3">
//             You may receive communications regarding your request and related services. You can opt out of marketing
//             communications at any time.
//           </p>
//           <p className="text-sm text-gray-600">
//             All information provided will be kept confidential and used solely for the purpose of providing the requested
//             consultation services. By proceeding, you acknowledge that you have read and understood these terms.
//           </p>
//         </div>

//         <div className="flex items-start">
//           <div className="flex items-center h-5">
//             <input
//               type="checkbox"
//               id="consentAgreement"
//               name="consentAgreement"
//               checked={formData.consentAgreement}
//               onChange={handleChange}
//               required
//               className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
//             />
//           </div>
//           <div className="ml-3">
//             <label htmlFor="consentAgreement" className="block text-sm font-medium text-gray-700">I understand and agree to the Terms of Service, including the User Agreement and Privacy Policy <span className="text-red-500">*</span></label>
//           </div>
//         </div>
//         {errors.consentAgreement && <div className="error-message text-xs text-red-500 mt-1">{errors.consentAgreement}</div>}
//       </div>
//     </div>
//   );

//   return (
//     <div className="max-w-4xl mx-auto my-8 px-4">
//       {showSuccess && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white p-8 rounded-lg max-w-md text-center">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//             </svg>
//             <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
//             <p className="text-gray-600 mb-6">Your consultation request has been submitted successfully. We'll contact you shortly.</p>
//             <button
//               onClick={() => setShowSuccess(false)}
//               className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}

//       <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-t-xl p-8 text-center">
//         <h1 className="text-3xl font-bold tracking-tight">Schedule Your Expert Consultation</h1>
//         <p className="mt-2 text-primary-100">Connect with our specialists to solve your technical challenges</p>
//       </div>

//       <div className="bg-white shadow-lg rounded-b-xl overflow-hidden">
//         <div className="flex justify-between items-center p-6 bg-gray-50 border-b border-gray-200">
//           {formSteps.map((_, index) => renderStepIndicator(index))}
//         </div>

//         <div className="p-8">
//           {currentStep === 0 && renderStepOne()}
//           {currentStep === 1 && renderStepTwo()}
//           {currentStep === 2 && renderStepThree()}
//         </div>

//         <div className="flex justify-between items-center p-6 border-t border-gray-200 bg-gray-50 rounded-b-lg">
//           <button
//             type="button"
//             onClick={prevStep}
//             disabled={currentStep === 0}
//             className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             Previous
//           </button>
//           <button
//             type="button"
//             onClick={nextStep}
//             className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
//           >
//             {currentStep === formSteps.length - 1 ? 'Submit Request' : 'Next'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUpUser;

import { useState, useRef } from 'react';
import './tailwind.css'; // Make sure to have Tailwind CSS set up in your project

const SignUpUser = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: '',
    countryCode: '',
    email: '',
    phone: '',
    timezone: '',
    companyName: '',
    companyDetails: '',
    serviceArea: '',
    requirements: '',
    urgentRequest: false,
    consentAgreement: false
  });
  const [errors, setErrors] = useState({});
  const [files, setFiles] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const fileInputRef = useRef(null);

  const formSteps = [
    'Personal & Company Info',
    'Service Details',
    'Consent & Agreement'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles(droppedFiles);
    if (fileInputRef.current) {
      fileInputRef.current.files = e.dataTransfer.files;
    }
  };

  const validateStep = (step) => {
    const newErrors = {};
    
    if (step === 0) {
      if (!formData.firstName.trim()) newErrors.firstName = 'This field is required';
      if (!formData.lastName.trim()) newErrors.lastName = 'This field is required';
      if (!formData.country) newErrors.country = 'Please select a country';
      if (!formData.countryCode) newErrors.countryCode = 'Please select a country code';
      if (!formData.email) {
        newErrors.email = 'This field is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email';
      }
      if (!formData.phone) newErrors.phone = 'Please enter a valid phone number';
      if (!formData.timezone) newErrors.timezone = 'Please select a time zone';
    } else if (step === 1) {
      if (!formData.serviceArea) newErrors.serviceArea = 'Please select an area of consultation';
      if (!formData.requirements.trim()) newErrors.requirements = 'Please describe your requirements';
    } else if (step === 2) {
      if (!formData.consentAgreement) newErrors.consentAgreement = 'You must agree to the terms to proceed';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      if (currentStep < formSteps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        submitForm();
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const submitForm = () => {
    console.log('Form submitted:', { ...formData, files });
    setShowSuccess(true);
    // Reset form if needed
    // setFormData({...initial form state});
    // setFiles([]);
    // setCurrentStep(0);
  };

  const renderStepIndicator = (index) => {
    let stepClass = "step-number mx-auto w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center font-medium text-gray-400 mb-2 relative z-10";
    let labelClass = "step-label text-sm text-gray-500";

    if (index === currentStep) {
      stepClass += " active border-primary-500 text-primary-600";
      labelClass += " text-gray-900 font-medium";
    } else if (index < currentStep) {
      stepClass += " completed bg-primary-600 border-primary-600 text-white";
      labelClass += " text-gray-900 font-medium";
    }

    return (
      <div key={index} className={`progress-step relative flex-1 text-center ${index < formSteps.length - 1 ? 'after:content-[""] after:absolute after:top-5 after:left-[60%] after:right-[-40%] after:h-0.5 after:bg-gray-200 after:z-1' : ''}`}>
        <div className={stepClass}>{index + 1}</div>
        <div className={labelClass}>{formSteps[index]}</div>
      </div>
    );
  };

  const renderStepOne = () => (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-semibold text-primary-700 mb-6 pb-2 border-b border-primary-100">Personal & Company Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name <span className="text-red-500">*</span></label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className={`w-full px-4 py-2 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-primary-500 focus:border-primary-500`}
          />
          {errors.firstName && <div className="error-message text-xs text-red-500 mt-1">{errors.firstName}</div>}
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name <span className="text-red-500">*</span></label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className={`w-full px-4 py-2 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-primary-500 focus:border-primary-500`}
          />
          {errors.lastName && <div className="error-message text-xs text-red-500 mt-1">{errors.lastName}</div>}
        </div>
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country <span className="text-red-500">*</span></label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            className={`w-full px-4 py-2 border ${errors.country ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-primary-500 focus:border-primary-500`}
          >
            <option value="">Select Country</option>
            <option value="US">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="AU">Australia</option>
          </select>
          {errors.country && <div className="error-message text-xs text-red-500 mt-1">{errors.country}</div>}
        </div>
        <div>
          <label htmlFor="countryCode" className="block text-sm font-medium text-gray-700 mb-1">Country Code <span className="text-red-500">*</span></label>
          <select
            id="countryCode"
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            required
            className={`w-full px-4 py-2 border ${errors.countryCode ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-primary-500 focus:border-primary-500`}
          >
            <option value="">Select Code</option>
            <option value="+1">+1 (USA/Canada)</option>
            <option value="+44">+44 (UK)</option>
            <option value="+61">+61 (Australia)</option>
            <option value="+49">+49 (Germany)</option>
          </select>
          {errors.countryCode && <div className="error-message text-xs text-red-500 mt-1">{errors.countryCode}</div>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-primary-500 focus:border-primary-500`}
          />
          {errors.email && <div className="error-message text-xs text-red-500 mt-1">{errors.email}</div>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Contact Number <span className="text-red-500">*</span></label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className={`w-full px-4 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-primary-500 focus:border-primary-500`}
          />
          {errors.phone && <div className="error-message text-xs text-red-500 mt-1">{errors.phone}</div>}
        </div>
        <div>
          <label htmlFor="timezone" className="block text-sm font-medium text-gray-700 mb-1">Time Zone <span className="text-red-500">*</span></label>
          <select
            id="timezone"
            name="timezone"
            value={formData.timezone}
            onChange={handleChange}
            required
            className={`w-full px-4 py-2 border ${errors.timezone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-primary-500 focus:border-primary-500`}
          >
            <option value="">Select Time Zone</option>
            <option value="ET">Eastern Time (ET)</option>
            <option value="CT">Central Time (CT)</option>
            <option value="MT">Mountain Time (MT)</option>
            <option value="PT">Pacific Time (PT)</option>
          </select>
          {errors.timezone && <div className="error-message text-xs text-red-500 mt-1">{errors.timezone}</div>}
        </div>
        <div className="md:col-span-2">
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">Company/Organization Name</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="companyDetails" className="block text-sm font-medium text-gray-700 mb-1">Company Details</label>
          <textarea
            id="companyDetails"
            name="companyDetails"
            value={formData.companyDetails}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 min-h-[120px]"
            placeholder="Brief description of your company/organization (industry, size, etc.)"
          />
        </div>
      </div>
    </div>
  );

  const renderStepTwo = () => (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-semibold text-primary-700 mb-6 pb-2 border-b border-primary-100">Service Request Details</h2>
      <div className="grid grid-cols-1 gap-6">
        <div>
          <label htmlFor="serviceArea" className="block text-sm font-medium text-gray-700 mb-1">Area of Consultation <span className="text-red-500">*</span></label>
          <select
            id="serviceArea"
            name="serviceArea"
            value={formData.serviceArea}
            onChange={handleChange}
            required
            className={`w-full px-4 py-2 border ${errors.serviceArea ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-primary-500 focus:border-primary-500`}
          >
            <option value="">Select Area</option>
            <option value="infrastructure-management">Infrastructure Management</option>
            <option value="network-security">Network Security</option>
            <option value="system-administration">System Administration</option>
            <option value="it-support">IT Support & Helpdesk</option>
            <option value="web-development">Web Development</option>
            <option value="mobile-app-development">Mobile App Development</option>
            <option value="quantum-algorithms">Quantum Algorithms</option>
            <option value="game-development">Game Development</option>
            <option value="embedded-systems">Embedded System & IoT Development</option>
            <option value="iam">Identity & Access Management (IAM)</option>
            <option value="infrastructure-as-service">Infrastructure as a Service</option>
            <option value="network-security-advanced">Advanced Network Security</option>
            <option value="application-security">Application Security</option>
            <option value="cloud-security">Cloud Security</option>
            <option value="arvr-gaming">AR/VR for Gaming</option>
            <option value="endpoint-security">Endpoint Security</option>
            <option value="predictive-analytics">Predictive Analytics</option>
            <option value="deep-learning">Deep Learning</option>
            <option value="virtualization">Advanced Virtualization & CI/CD</option>
            <option value="big-data">Big Data Technologies</option>
            <option value="business-intelligence">Business Intelligence</option>
            <option value="industrial-applications">Industrial Applications</option>
            <option value="data-engineering">Data Engineering</option>
            <option value="governance">Data Governance & Compliance</option>
            <option value="industrial-iot">Industrial IoT (IIoT)</option>
            <option value="iot-security">IoT Security</option>
            <option value="blockchain">Blockchain Security</option>
            <option value="rpa">Robotic Process Automation (RPA)</option>
            <option value="cicd">Continuous Integration & Deployment (CI/CD)</option>
            <option value="infrastructure-as-code">Infrastructure as Code (IaC)</option>
            <option value="configuration-management">Configuration Management</option>
            <option value="monitoring-logging">Monitoring & Logging</option>
            <option value="quantum-crypto">Quantum Cryptography</option>
            <option value="quantum-ml">Quantum Machine Learning</option>
            <option value="autonomous-vehicles">Autonomous Vehicles & Drones</option>
          </select>
          {errors.serviceArea && <div className="error-message text-xs text-red-500 mt-1">{errors.serviceArea}</div>}
        </div>
        
        <div>
          <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-1">Describe Your Requirement <span className="text-red-500">*</span></label>
          <textarea
            id="requirements"
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            required
            className={`w-full px-4 py-2 border ${errors.requirements ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-primary-500 focus:border-primary-500 min-h-[120px]`}
            placeholder="Please describe your needs in detail, including specific challenges, goals, and any technical requirements"
          />
          {errors.requirements && <div className="error-message text-xs text-red-500 mt-1">{errors.requirements}</div>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Supporting Documents</label>
          <div
            className={`file-upload border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer transition-colors ${files.length > 0 ? 'has-file border-green-500 bg-green-50' : ''} hover:border-primary-500 hover:bg-primary-50`}
            onClick={() => fileInputRef.current?.click()}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <input
              type="file"
              id="supportDocs"
              ref={fileInputRef}
              multiple
              className="hidden"
              onChange={handleFileChange}
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <p className="mt-2 text-sm text-gray-600">Click to upload or drag and drop</p>
            <p className="text-xs text-gray-500 mt-1">PDF, DOC, PPT up to 10MB</p>
          </div>
          {files.length > 0 && (
            <div id="fileList" className="mt-2">
              <div className="text-sm text-gray-500">{files.length} file(s) selected</div>
              {files.slice(0, 3).map((file, index) => (
                <div key={index} className="text-sm font-medium text-gray-700 truncate">
                  {file.name}
                </div>
              ))}
              {files.length > 3 && (
                <div className="text-xs text-gray-500">
                  {files.length - 3} more file(s)...
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderStepThree = () => (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-semibold text-primary-700 mb-6 pb-2 border-b border-primary-100">Consent & Agreement</h2>
      <div className="space-y-6">
        <div className="border border-gray-200 p-6 rounded-lg bg-gray-50 max-h-60 overflow-y-auto">
          <h3 className="text-lg font-medium text-gray-900 mb-3">Terms of Service</h3>
          <p className="text-sm text-gray-600 mb-3">
            By submitting this form, you agree to our Terms of Service, including the User Agreement and Privacy Policy. We will
            process your personal data in accordance with our privacy policy to provide you with the requested services.
          </p>
          <p className="text-sm text-gray-600 mb-3">
            You may receive communications regarding your request and related services. You can opt out of marketing
            communications at any time.
          </p>
          <p className="text-sm text-gray-600">
            All information provided will be kept confidential and used solely for the purpose of providing the requested
            consultation services. By proceeding, you acknowledge that you have read and understood these terms.
          </p>
        </div>

        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              type="checkbox"
              id="consentAgreement"
              name="consentAgreement"
              checked={formData.consentAgreement}
              onChange={handleChange}
              required
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
          </div>
          <div className="ml-3">
            <label htmlFor="consentAgreement" className="block text-sm font-medium text-gray-700">I understand and agree to the Terms of Service, including the User Agreement and Privacy Policy <span className="text-red-500">*</span></label>
          </div>
        </div>
        {errors.consentAgreement && <div className="error-message text-xs text-red-500 mt-1">{errors.consentAgreement}</div>}
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto my-8 px-4">
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg max-w-md text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
            <p className="text-gray-600 mb-6">Your consultation request has been submitted successfully. We'll contact you shortly.</p>
            <button
              onClick={() => setShowSuccess(false)}
              className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-t-xl p-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight">Schedule Your Expert Consultation</h1>
        <p className="mt-2 text-primary-100">Connect with our specialists to solve your technical challenges</p>
      </div>

      <div className="bg-white shadow-lg rounded-b-xl overflow-hidden">
        <div className="flex justify-between items-center p-6 bg-gray-50 border-b border-gray-200">
          {formSteps.map((_, index) => renderStepIndicator(index))}
        </div>

        <div className="p-8">
          {currentStep === 0 && renderStepOne()}
          {currentStep === 1 && renderStepTwo()}
          {currentStep === 2 && renderStepThree()}
        </div>

        <div className="flex justify-between items-center p-6 border-t border-gray-200 bg-gray-50 rounded-b-lg">
          <button
            type="button"
            onClick={prevStep}
            disabled={currentStep === 0}
            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={nextStep}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            {currentStep === formSteps.length - 1 ? 'Submit Request' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpUser;