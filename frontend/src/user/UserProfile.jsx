import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  selectCurrentToken,
  selectCurrentUser,
} from "../redux/authSlice";
import { getUserProfile } from "../api/user";
import {
  FaCheckCircle,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaCalendarAlt,
  FaFilePdf,
  FaFileImage,
} from "react-icons/fa";

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
    return (
      <div className="p-6 text-center text-gray-500">
        Loading user profile...
      </div>
    );
  }

  return (
    <main>
      <div className="sm:p-6 bg-gray-100">
        <div className="mx-auto lg:p-10 p-6 bg-white rounded-lg shadow-md max-w-5xl">
          {/* Header with Photo */}
          <div className="flex gap-4 items-center border border-primary bg-primaryLight px-4 py-2 rounded-r-full">
            <img
              src={
                userData?.profilePhoto?.url ||
                "https://via.placeholder.com/150"
              }
              alt="User"
              className="sm:w-24 sm:h-24 w-14 h-14 rounded-full border-4 border-primary object-cover shadow bg-white"
            />
            <div>
              <h1 className="sm:text-2xl font-bold text-gray-600">
                {userData?.name}
              </h1>
              <p className="text-gray-500 capitalize text-sm">
                {userData?.role}
              </p>
              {userData?.isVerified && (
                <span className="mt-2 px-3 py-1 inline-block text-sm bg-green-100 text-green-700 rounded-full flex items-center gap-1">
                  <FaCheckCircle /> Verified
                </span>
              )}
            </div>
          </div>

          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <InfoItem
              icon={<FaEnvelope />}
              label="Email"
              value={userData?.email}
            />
            <InfoItem
              icon={<FaPhone />}
              label="Contact"
              value={userData?.contactNumber}
            />
            <InfoItem
              icon={<FaMapMarkerAlt />}
              label="Location"
              value={userData?.location}
            />
            <InfoItem
              icon={<FaLinkedin />}
              label="LinkedIn"
              value={
                userData?.linkedInProfile ? (
                  <a
                    href={userData.linkedInProfile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {userData.linkedInProfile}
                  </a>
                ) : (
                  "N/A"
                )
              }
            />
            <InfoItem
              icon={<FaCalendarAlt />}
              label="Created At"
              value={new Date(userData?.createdAt).toLocaleDateString()}
            />
            <InfoItem
              icon={<FaCalendarAlt />}
              label="Updated At"
              value={new Date(userData?.updatedAt).toLocaleDateString()}
            />
          </div>

          {/* About */}
          <Section title="About Me">
            <p className="text-sm text-gray-700">
              {userData?.about || "No bio available."}
            </p>
          </Section>

          {/* Skills */}
          {userData?.skills?.length > 0 && (
            <Section title="Skills">
              <div className="flex flex-wrap gap-2">
                {userData.skills.map((skill, idx) => (
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

          {/* Languages */}
          {userData?.languages?.length > 0 && (
            <Section title="Languages">
              <div className="flex flex-wrap gap-2">
                {userData.languages.map((lang, idx) => (
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

          {/* Certifications */}
          {userData?.certifications?.length > 0 && (
            <Section title="Certifications">
              <div className="space-y-2">
                {userData.certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between bg-gray-50 p-3 rounded"
                  >
                    <div className="flex items-center">
                      {cert.type === "pdf" ? (
                        <FaFilePdf className="text-red-500 mr-2" />
                      ) : (
                        <FaFileImage className="text-primary mr-2" />
                      )}
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:underline"
                      >
                        {cert.name}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </Section>
          )}

          {/* Resume */}
          {userData?.resume?.url && (
            <Section title="Resume">
              <a
                href={userData.resume.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-500 underline"
              >
                <FaFilePdf className="mr-2" /> View Resume
              </a>
            </Section>
          )}
        </div>
      </div>
    </main>
  );
};

const InfoItem = ({ icon, label, value }) => (
  <div>
    <div className="flex items-center text-gray-500 mb-1">
      <span className="mr-2 text-gray-500">{icon}</span>
      <span className="font-medium">{label}</span>
    </div>
    <p className="text-gray-600 ml-6">{value || "N/A"}</p>
  </div>
);

const Section = ({ title, children }) => (
  <div className="mt-8">
    <h3 className="text-lg font-semibold mb-2 text-primary">{title}</h3>
    <hr className="mb-3 border-primary" />
    {children}
  </div>
);

export default UserProfile;
