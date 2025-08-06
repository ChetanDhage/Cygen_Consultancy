import { useState, useRef } from 'react';
import TextInput from './common/TextInput';
import Select from './common/Select';
import { FaUserTie } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const SignUpUser = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: '',
    countryCode: '',
    email: '',
    password:'',
    phone: '',
    linkedInProfile:'',
    companyName: '',
    companyDetails: '',
    serviceArea: '',
    requirements: '',
    urgentRequest: false,
    consentAgreement: false
  });
  const [errors, setErrors] = useState({});
  const [files, setFiles] = useState([]);
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

  const submitForm = async () => {
    setLoading(true);
    setErrorMsg('');
    try {
      const data = new FormData();
      Object.keys(formData).forEach(key => {
        data.append(key, formData[key]);
      });
      files.forEach(file => {
        data.append("supportDocs", file);
      });

      const response = await axios.post(
        `${BASE_URL}/api/customer/signup`,
        data,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );

      console.log('✅ Registered User:', response.data);
      alert('Sign Up Successfull')
      navigate('/login')

      setSubmitted(true);
    } catch (error) {
      console.error('error:', error.response?.data || error.message);
      setErrorMsg(error.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const renderStepIndicator = (index) => {
    let stepClass = "step-number mx-auto w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center font-medium text-gray-400 mb-2 relative z-10";
    let labelClass = "step-label text-sm text-gray-500";

    if (index === currentStep) {
      stepClass += " active border-primary text-primary";
      labelClass += " text-gray-900 font-medium";
    } else if (index < currentStep) {
      stepClass += " completed bg-green-500 border-green-500 text-white";
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TextInput
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          error={errors.firstName}
        />
        <TextInput
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          error={errors.lastName}
        />

        {/* Country */}
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country <span className="text-red-500">*</span>
          </label>
          <Select
            options={["India", "United States", "Canada", "Germany"]}
            placeholder="Select Country"
            inp={formData.country}
            setInp={(value) => setFormData({ ...formData, country: value })}
            error={errors.country}
          />
          {errors.country && <div className="text-xs text-red-500 mt-1">{errors.country}</div>}
        </div>

        {/* Country Code */}
        <div>
          <label htmlFor="countryCode" className="block text-sm font-medium text-gray-700 mb-1">Country Code <span className="text-red-500">*</span>
          </label>
          <Select
            options={["+91", "+99", "+98", "+94"]}
            placeholder="Select Country Code"
            inp={formData.countryCode}
            setInp={(value) => setFormData({ ...formData, countryCode: value })}
            error={errors.countryCode}
          />
          {errors.countryCode && <div className="text-xs text-red-500 mt-1">{errors.countryCode}</div>}
        </div>

        <TextInput
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          error={errors.email}
        />

        <TextInput
          label="Enter Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          required
          error={errors.password}
        />
        
        <TextInput
          label="Contact Number"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          required
          error={errors.phone}
        />

        <TextInput
          label="LinkedIn Profile"
          name="linkedInProfile"
          type="url"
          value={formData.linkedInProfile}
          onChange={handleChange}
          required
          error={errors.linkedInProfile}
        />
        <TextInput
          label="Company Name"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
        />
      </div>
    </div>
  );

  const renderStepTwo = () => (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-semibold text-primary-700 mb-6 pb-2 border-b border-primary-100">Service Request Details</h2>
      <div className="grid grid-cols-1 gap-6">
        <div>
          <label htmlFor="serviceArea" className="block text-sm font-medium text-gray-700 mb-1">Area of Consultation <span className="text-red-500">*</span></label>
          <Select
            options={["Infrastructure Management", "Autonomous Vehicles"]}
            placeholder="Select Area"
            inp={formData.serviceArea}
            setInp={(value) => setFormData({ ...formData, serviceArea: value })}
            error={errors.serviceArea}
          />
          {errors.serviceArea && <div className="text-xs text-red-500 mt-1">{errors.serviceArea}</div>}
        </div>

        <div>
          <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-1">Describe Your Requirement <span className="text-red-500">*</span></label>
          <textarea
            id="requirements"
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            className={`w-full px-4 py-2 border ${errors.requirements ? 'border-red-500' : 'border-gray-300'} rounded-md`}
          />
          {errors.requirements && <div className="text-xs text-red-500 mt-1">{errors.requirements}</div>}
        </div>

        {/* File Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Supporting Documents</label>
          <div
            className="border-2 border-dashed p-6 text-center rounded-lg cursor-pointer"
            onClick={() => fileInputRef.current?.click()}
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            <input
              type="file"
              ref={fileInputRef}
              multiple
              className="hidden"
              onChange={handleFileChange}
            />
            <p className="text-gray-500">Click or Drag & Drop files</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStepThree = () => (
    <div>
      <h2 className="text-2xl font-semibold text-primary-700 mb-6">Consent & Agreement</h2>
      <div className=' text-sm'>
        <div className=' bg-gray-100 rounded-xl border p-4 mb-4 '>
          <p className=' font-semibold pb-2 text-black'>Terms of Service</p>
          By submitting this form, you agree to our Terms of Service, including the User Agreement and Privacy Policy. We will process your personal data in accordance with our privacy policy to provide you with the requested services.

          You may receive communications regarding your request and related services. You can opt out of marketing communications at any time.

          All information provided will be kept confidential and used solely for the purpose of providing the requested consultation services. By proceeding, you acknowledge that you have read and understood these terms.
        </div>
        <input
          type="checkbox"
          id="consentAgreement"
          name="consentAgreement"
          className=' mr-2'
          checked={formData.consentAgreement}
          onChange={handleChange}
        />  I understand and agree to the Terms of Service, including the User Agreement and Privacy Policy
        {errors.consentAgreement && <div className="text-xs text-red-500 mt-1">{errors.consentAgreement}</div>}
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto my-8">
      {submitted && (
        <div className="p-6 bg-green-100 text-green-700">Form Submitted Successfully!</div>
      )}
      {errorMsg && (
        <div className="p-6 bg-red-100 text-red-700">{errorMsg}</div>
      )}
      <div className="bg-white rounded shadow-lg ">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-primarylight to-primary flex items-center justify-center shadow-lg">
            <FaUserTie className="text-primary text-3xl" />
          </div>
        </div>
        <h1 className="text-black dark:text-white text-center text-3xl md:text-4xl font-bold mb-3">
          Customer SignUp Portal
        </h1>
        <div className="flex justify-between items-center p-6 bg-gray-50">
          {formSteps.map((_, index) => renderStepIndicator(index))}
        </div>

        <div className="p-8">
          {currentStep === 0 && renderStepOne()}
          {currentStep === 1 && renderStepTwo()}
          {currentStep === 2 && renderStepThree()}
        </div>
        <div className="flex justify-between p-6 border-t">
          <button className=' bg-primary px-4 py-2 rounded-md text-white font-semibold' onClick={prevStep} disabled={currentStep === 0}>Previous</button>
          <button className=' bg-primary px-4 py-2 rounded-md text-white font-semibold' onClick={nextStep} disabled={loading}>
            {loading ? 'Submitting...' : (currentStep === formSteps.length - 1 ? 'Submit' : 'Next')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpUser;
