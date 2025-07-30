import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaCalendarAlt, FaUserShield } from 'react-icons/fa';

const SubAdminProfile = () => {
  const [formData, setFormData] = useState({
    firstName: 'Sub-admin',
    lastName: 'User',
    email: 'subadmin@cygen.co.in',
    phone: '+1 (555) 123-4567',
    bio: 'Network security specialist with 5+ years of experience...',
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">My Profile</h1>

      <div className="bg-white shadow rounded-lg p-6 grid md:grid-cols-2 gap-8">
        {/* Profile Details */}
        <div>
          <div className="text-center mb-6">
            <div className="text-3xl font-bold text-gray-700">SA</div>
            <h2 className="text-xl font-semibold text-gray-800 mt-2">Sub-admin User</h2>
            <p className="text-sm text-gray-500">Network Security Domain</p>
            <button className="mt-4 px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 text-sm">
              Change Photo
            </button>
          </div>

          <div className="space-y-3 text-gray-700">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-gray-500" />
              <span>{formData.email}</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="text-gray-500" />
              <span>{formData.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <FaCalendarAlt className="text-gray-500" />
              <span>Joined October 2022</span>
            </div>
            <div className="flex items-center gap-3">
              <FaUserShield className="text-gray-500" />
              <span>Sub-admin Access</span>
            </div>
          </div>
        </div>

        {/* Editable Fields */}
        <div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm text-gray-600">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded focus:outline-primary"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded focus:outline-primary"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded focus:outline-primary"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-600">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded focus:outline-primary"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm text-gray-600">Bio</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows={4}
              className="w-full mt-1 p-2 border rounded focus:outline-primary"
            />
          </div>

          <div className="flex justify-end gap-4 mb-8">
            <button className="px-4 py-2 border border-gray-400 text-gray-600 rounded hover:bg-gray-100">
              Cancel
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Save Changes
            </button>
          </div>

          {/* Password Change Section */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Change Password</h3>

            <div className="mb-4">
              <label className="block text-sm text-gray-600">Current Password</label>
              <input
                type="password"
                name="currentPassword"
                value={passwordData.currentPassword}
                onChange={handlePasswordChange}
                className="w-full mt-1 p-2 border rounded focus:outline-primary"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm text-gray-600">New Password</label>
                <input
                  type="password"
                  name="newPassword"
                  value={passwordData.newPassword}
                  onChange={handlePasswordChange}
                  className="w-full mt-1 p-2 border rounded focus:outline-primary"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={passwordData.confirmPassword}
                  onChange={handlePasswordChange}
                  className="w-full mt-1 p-2 border rounded focus:outline-primary"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Update Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubAdminProfile;
