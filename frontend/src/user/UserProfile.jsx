import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken, selectCurrentUser } from '../redux/authSlice';
import { getUserProfile } from '../api/user';

const UserProfile = () => {
  const token = useSelector(selectCurrentToken);
  const userId = useSelector(selectCurrentUser)?._id;
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getUserProfile({ userId, token });
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    if (userId && token) {
      fetchUser();
    }
  }, [userId, token]);

  if (!userData) {
    return <div className="p-6 text-center text-gray-500">Loading user profile...</div>;
  }

  return (
    <div className="p-4 md:p-6  min-h-screen">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-primary">User Profile</h1>
        <hr className="my-4 border-primary" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Profile Image */}
          <div className="flex justify-center">
            <img
              src={userData?.profilePhoto?.url || 'https://via.placeholder.com/150'}
              alt="User"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary object-cover shadow"
            />
          </div>

          {/* User Info */}
          <div className="md:col-span-2">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold">{userData?.name}</h2>
              <p className="text-gray-600 capitalize">{userData?.role}</p>
              {userData?.isVerified && (
                <span className="mt-2 px-3 py-1 inline-block text-sm bg-green-100 text-green-700 rounded-full">
                  Verified
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              <ProfileInfo label="Email" value={userData?.email} />
              <ProfileInfo label="Contact" value={userData?.contactNumber} />
              <ProfileInfo label="Location" value={userData?.location} />
              <ProfileInfo label="LinkedIn" value={
                userData?.linkedInProfile ? (
                  <a
                    href={userData.linkedInProfile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {userData.linkedInProfile}
                  </a>
                ) : 'N/A'
              } />
              <ProfileInfo label="Created At" value={new Date(userData?.createdAt).toLocaleDateString()} />
              <ProfileInfo label="Updated At" value={new Date(userData?.updatedAt).toLocaleDateString()} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileInfo = ({ label, value }) => (
  <div>
    <p className="text-xs text-gray-500">{label}</p>
    <p className="text-sm font-medium text-gray-800">{value || 'N/A'}</p>
  </div>
);

export default UserProfile;
