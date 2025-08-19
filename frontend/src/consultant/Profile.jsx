import React, { useEffect, useState } from "react";
import {
  FaCheckCircle,
  FaUser,
  FaPhone,
  FaBriefcase,
  FaEnvelope,
  FaClock,
  FaStar,
  FaFilePdf,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { fetchConsultantProfile } from "../api/consultant";
import { useSelector } from "react-redux";
import { selectCurrentToken, selectCurrentUser } from "../redux/authSlice";
import { BsBuildingsFill, BsStars } from "react-icons/bs";

const Profile = () => {
  const currentUser = useSelector(selectCurrentUser);
  const usertype = currentUser.role;
  const consultantId = currentUser._id;
  const token = useSelector(selectCurrentToken);

  const [consultantData, setConsultantData] = useState(null);

  useEffect(() => {
    const fetchConsultant = async () => {
      try {
        const response = await fetchConsultantProfile({ consultantId, token });
        if (response?.data) {
          setConsultantData(response.data);
          console.log(response.data)
        }
      } catch (error) {
        console.error("Error fetching consultant:", error);
      }
    };

    fetchConsultant();
  }, [consultantId, token]);

  if (!consultantData) {
    return (
      <div className="p-6 text-center text-gray-500">
        Loading consultant profile...
      </div>
    );
  }

  return (
    <main>
     
      <div className="p-6 bg-gray-100">
        <div className="mx-auto lg:p-10 p-6 bg-white rounded-lg shadow-md max-w-5xl">
          <div className="flex  gap-4 items-center  border border-primary bg-primaryLight px-4 py-2 rounded-r-full">
            <img
              src={
                consultantData?.user?.profilePhoto?.url ||
                "https://via.placeholder.com/150"
              }
              alt="Consultant"
              className="w-24 h-24 rounded-full border-4 border-primary object-cover shadow bg-white "
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-600">
              {consultantData?.user?.name}
            </h1>
            <p className="text-gray-500 flex gap-2 items-center text-sm"><BsStars/> {consultantData?.designation}</p>
            <p className="text-gray-400 flex gap-2 items-center text-sm"> <BsBuildingsFill/> {consultantData?.company}</p>
            </div>
          </div>

          {/* Verification Status */}
          <div className="border-t border-gray-200 pt-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-600 mb-4">
              Verification Status
            </h2>
            <div className="flex items-center text-green-600 mb-6">
              <FaCheckCircle className="mr-2" />
              <span className="font-medium">{consultantData?.status}</span>
            </div>
          </div>

          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <InfoItem icon={<FaUser />} label="Full Name" value={consultantData?.user?.name} />
            <InfoItem icon={<FaPhone />} label="Contact Number" value={consultantData?.contactNumber} />
            <InfoItem icon={<FaEnvelope />} label="Email" value={consultantData?.email} />
            <InfoItem icon={<FaMapMarkerAlt />} label="Location" value={consultantData?.location} />
            <InfoItem icon={<FaBriefcase />} label="Industry" value={consultantData?.industry} />
            <InfoItem icon={<FaClock />} label="Experience" value={`${consultantData?.yearsOfExperience} years`} />
            <InfoItem icon={<FaStar />} label="Rating" value={`${consultantData?.rating || 0} / 5`} />
            <InfoItem icon={<FaBriefcase />} label="Fee Expectation" value={`₹ ${consultantData?.expectedFee}`} />
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
              {consultantData?.about || "No information provided."}
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

          {/* Resume */}
          {consultantData?.resume?.url && (
            <Section title="Resume">
              <a
                href={consultantData.resume.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-500 underline"
              >
                <FaFilePdf className="mr-2" /> View Resume
              </a>
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

export default Profile;





