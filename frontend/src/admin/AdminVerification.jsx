import React, { useState, useEffect } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { FiCheck, FiX } from "react-icons/fi";
import { updateConsultantStatus } from "../api/admin";
import axios from "axios";
import { fetchConsultantProfile } from "../api/consultant";
import { selectCurrentToken } from "../redux/authSlice";
import { useSelector } from "react-redux";
import { toast } from 'sonner';

const STATUS = {
  PENDING: "pending",
  APPROVED: "approved",
  REJECTED: "rejected",
  SUSPENDED: "suspended",
};

const AdminVerification = () => {
  const [filter, setFilter] = useState("All");
  const [consultants, setConsultants] = useState([]);
  const token = useSelector(selectCurrentToken);

  // ✅ Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedConsultantId, setSelectedConsultantId] = useState(null);

  // ✅ Fetch consultants list
  useEffect(() => {
    const fetchConsultants = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/admin/consultants`
        );
        setConsultants(res.data.data);
      } catch (err) {
        console.error("Error fetching consultants", err);
      }
    };
    fetchConsultants();
  }, []);

  // ✅ Handle status update
  const handleStatusUpdate = async (id, newStatus) => {
    try {
      const consultant = consultants.find((c) => c._id === id);
      if (!consultant) return;

      if (consultant.status === newStatus) {
        toast.success("You cannot update status to the same value");
        return;
      }

      const res = await updateConsultantStatus(
        id,
        newStatus,
        newStatus === STATUS.REJECTED ? "Not qualified" : ""
      );

      toast.success(`You updated Status to ${res.data.status}`);

      setConsultants((prev) =>
        prev.map((c) => (c._id === id ? { ...c, status: res.data.status } : c))
      );
    } catch (err) {
      console.error("Error updating status", err);
    }
  };

  // ✅ Handle profile modal
  const handleOpenProfile = (consultantId) => {
    setSelectedConsultantId(consultantId);
    setModalOpen(true);
  };

  const filteredData =
    filter === "All"
      ? consultants
      : consultants.filter((c) => c.status === filter.toLowerCase());

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Consultant <span className="   text-primary">Verification</span></h1>

      {/* Filter Tabs */}
      <div className="flex items-center mb-4 gap-3">
        {["All", STATUS.PENDING, STATUS.APPROVED, STATUS.REJECTED].map(
          (status) => (
            <button
              key={status}
              className={`px-4 py-1 rounded-lg ${filter === status
                ? "bg-primary text-white"
                : "bg-gray-200"
                }`}
              onClick={() => setFilter(status)}
            >
              {status}
            </button>
          )
        )}
      </div>

      {/* Table */}
      <div className="bg-white p-4 shadow-md">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th>Consultant</th>
              <th>Specialization</th>
              <th>Experience</th>
              <th>Applied</th>
              <th>Fee</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item._id} onClick={() => handleOpenProfile(item._id)} className="border-b hover:bg-primaryLight cursor-pointer">
                <td>
                  <div>
                    <p>{item.user?.name}</p>
                    <p className="text-sm text-gray-500">{item.user?.email}</p>
                  </div>
                </td>
                <td>{item.designation}</td>
                <td>{item.yearsOfExperience} yrs</td>
                <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                <td>{item.expectedFee}/hr</td>
                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${item.status === STATUS.PENDING
                      ? "bg-pink-100 text-pink-600"
                      : item.status === STATUS.APPROVED
                        ? "bg-blue-100 text-blue-600"
                        : "bg-red-100 text-red-600"
                      }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="flex gap-3 items-center">
                  {/* <AiOutlineEye
                    title="View Profile"
                    onClick={() => handleOpenProfile(item._id)}
                    className="text-primary cursor-pointer text-xl"
                  /> */}
                  <FiCheck
                    title="Approve"
                    className="text-green-500 cursor-pointer text-xl"
                    onClick={() =>
                      handleStatusUpdate(item._id, STATUS.APPROVED)
                    }
                  />
                  <FiX
                    title="Reject"
                    className="text-red-500 cursor-pointer text-xl"
                    onClick={() =>
                      handleStatusUpdate(item._id, STATUS.REJECTED)
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ✅ Modal */}
      {modalOpen && selectedConsultantId && (
        <ProfileInfo
          consultantId={selectedConsultantId}
          token={token}
          onClose={() => setModalOpen(false)}
          handleStatusUpdate={handleStatusUpdate}
        />
      )}
    </div>
  );
};

// ✅ ProfileInfo Component
const ProfileInfo = ({ consultantId, token, onClose, handleStatusUpdate }) => {
  const [consultantData, setConsultantData] = useState(null);

  useEffect(() => {
    const fetchConsultant = async () => {
      try {
        const response = await fetchConsultantProfile({ consultantId, token });
        if (response?.data) {
          setConsultantData(response.data);
        }
      } catch (error) {
        console.error("Error fetching consultant:", error);
      }
    };
    fetchConsultant();
  }, [consultantId, token, handleStatusUpdate]);

  if (!consultantData) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 ">

      <div className=" w-1/2  mx-auto bg-white p-6  shadow-md">
        <h1 className="text-2xl font-bold text-primary w-full flex justify-between items-center">Consultant Profile
          <span
            className={`px-3 py-1 rounded-full text-sm ${consultantData.status === 'pending'
              ? "bg-pink-100 text-pink-600"
              : consultantData.status === 'approved'
                ? "bg-blue-100 text-blue-600"
                : "bg-red-100 text-red-600"
              }`}
          >
            {consultantData.status}
          </span>
        </h1>
        <hr className="my-4 border-primary" />

        <div className=" relative grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          {/* Basic Info */}
          <div className="md:col-span-2 ">
            <div className="flex justify-center">
              <img
                src={
                  consultantData?.user?.profilePhoto?.url ||
                  'https://via.placeholder.com/150'
                }
                alt="Consultant"
                className="absolute right-2 w-20 h-20 md:w-40 md:h-40 rounded-full border-4 border-primary object-cover shadow"
              />
            </div>
            <div className="space-y-1">
              <h2 className="text-xl font-semibold">
                {consultantData?.user?.name}
              </h2>
              <p className="text-gray-600">{consultantData?.designation}</p>
              <p className="text-gray-500">{consultantData?.company}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              <ProfileInform label="Email" value={consultantData?.email} />
              <ProfileInform label="Contact" value={consultantData?.contactNumber} />
              <ProfileInform label="Location" value={consultantData?.location} />
              <ProfileInform label="Industry" value={consultantData?.industry} />
              <ProfileInfo
                label="Fee Expectation"
                value={`₹ ${consultantData?.expectedFee}`}
              />
              <ProfileInform label="Rating" value={consultantData?.rating || 0} />
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
        <Section >
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
        <div className=" w-full justify-between flex gap-4 mt-4">

          <div
            onClick={() =>handleStatusUpdate(consultantData._id, STATUS.APPROVED)}
            className="flex items-center justify-center cursor-pointer gap-2 bg-green-200 px-4 py-2 w-full">
            <FiCheck
              className="text-green-500 cursor-pointer text-xl"

            /> Approve
          </div>
          <div
            onClick={() =>handleStatusUpdate(consultantData._id, STATUS.REJECTED)}
            className="flex items-center justify-center cursor-pointer gap-2 bg-red-200 px-4 py-2 w-full">
            <FiX
              className="text-red-500 cursor-pointer text-xl"

            /> Reject
          </div>
        </div>
        <button
          className="bg-red-500 text-white px-4 py-2 my-4 w-full  hover:bg-red-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};
const ProfileInform = ({ label, value }) => (
  <div>
    <p className="text-xs text-gray-500">{label}</p>
    <p className="text-sm font-medium text-gray-800">{value || 'N/A'}</p>
  </div>
);
const Section = ({ title, children }) => (
  <div className=" flex gap-2 items-center mt-8">
    <span className="text-lg font-semibold text-primary">{title}</span>
    {children}
  </div>
);

export default AdminVerification;
