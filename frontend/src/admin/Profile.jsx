import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { fetchConsultantProfile } from '../api/consultant';
import { useSelector } from 'react-redux';
import { selectCurrentToken, selectCurrentUser } from '../redux/authSlice';

const Profile = () => {
  const currentUser = useSelector(selectCurrentUser);
  const usertype = currentUser.role;
  const adminId = currentUser._id;
  const token = useSelector(selectCurrentToken);

  const [consultantData, setConsultantData] = useState(null);

  useEffect(() => {
    const fetchConsultant = async () => {
      try {
        const response = await fetchConsultantProfile({ adminId, token });
        if (response?.data) {
          // store only the consultant object
          setConsultantData(response.data);
          console.log("API Response:", response.data);
        }
      } catch (error) {
        console.error("Error fetching consultant:", error);
      }
    };

    fetchConsultant();
  }, [adminId, token]);

  if (!consultantData) {
    return (
      <div className="p-6 text-center text-gray-500">
        Loading consultant profile...
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-primary">Consultant Profile</h1>
        <hr className="my-4 border-primary" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Profile Photo */}
          <div className="flex justify-center">
            <img
              src={
                consultantData?.user?.profilePhoto?.url ||
                'https://via.placeholder.com/150'
              }
              alt="Consultant"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary object-cover shadow"
            />
          </div>

          {/* Basic Info */}
          <div className="md:col-span-2">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold">
                {consultantData?.user?.name}
              </h2>
              <p className="text-gray-600">{consultantData?.designation}</p>
              <p className="text-gray-500">{consultantData?.company}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              <ProfileInfo label="Email" value={consultantData?.email} />
              <ProfileInfo label="Contact" value={consultantData?.contactNumber} />
              <ProfileInfo label="Location" value={consultantData?.location} />
              <ProfileInfo label="Industry" value={consultantData?.industry} />
              <ProfileInfo
                label="Fee Expectation"
                value={`₹ ${consultantData?.expectedFee}`}
              />
              <ProfileInfo label="Rating" value={consultantData?.rating || 0} />
              <ProfileInfo
                label="Experience"
                value={`${consultantData?.yearsOfExperience} years`}
              />
              {consultantData?.resume?.url && (
                <ProfileInfo
                  label="Resume"
                  value={
                    <a
                      href={consultantData.resume.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      View Resume
                    </a>
                  }
                />
              )}
            </div>
          </div>
        </div>

        {/* Skills */}
        {consultantData?.skills?.length > 0 && (
          <Section title="Skills">
            <div className="flex flex-wrap gap-2">
              {consultantData.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-gray-100 text-sm px-3 py-1 rounded-full text-gray-600"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Section>
        )}

        {/* About */}
        <Section title="About Me">
          <p className="text-sm text-gray-700">
            {consultantData?.about || 'No information provided.'}
          </p>
        </Section>

        {/* Languages */}
        {consultantData?.languages?.length > 0 && (
          <Section title="Languages">
            <div className="flex flex-wrap gap-2">
              {consultantData.languages.map((lang, idx) => (
                <span
                  key={idx}
                  className="bg-primaryLight text-primary px-4 py-1 rounded-full text-sm"
                >
                  {lang}
                </span>
              ))}
            </div>
          </Section>
        )}

        {/* Reviews */}
        {consultantData?.reviews?.length > 0 && (
          <Section title="Client Reviews">
            <div className="space-y-4">
              {consultantData.reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                >
                  <p className="italic text-sm text-gray-600 mb-2">
                    {review.text}
                  </p>
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">— {review.author}</p>
                </div>
              ))}
            </div>
          </Section>
        )}

        {usertype === 'user' && (
          <div className="mt-8">
            <Link to={`/user-dashboard/query/${adminId}`}>
              <button className="w-full md:w-auto px-6 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition">
                Book a Session
              </button>
            </Link>
          </div>
        )}
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

const Section = ({ title, children }) => (
  <div className="mt-8">
    <h3 className="text-lg font-semibold mb-2 text-primary">{title}</h3>
    <hr className="mb-3 border-primary" />
    {children}
  </div>
);

export default Profile;
