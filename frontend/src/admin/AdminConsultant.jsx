import React, { useState, useEffect } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { FiCheck, FiX } from "react-icons/fi";
import { updateConsultantStatus } from "../api/admin";
import axios from "axios";
import { fetchConsultantProfile } from "../api/consultant";
import { selectCurrentToken } from "../redux/authSlice";
import { useSelector } from "react-redux";

const AdminConsultant = () => {


  const STATUS = {
  PENDING: "pending",
  APPROVED: "approved",
  REJECTED: "rejected",
  SUSPENDED: "suspended",
};

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

 
  const filteredData =
    filter === "All"
      ? consultants
      : consultants.filter((c) => c.status === filter.toLowerCase());

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Consultant Management</h1>

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
              <tr key={item._id} className="border-b hover:bg-primaryLight">
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
                  <AiOutlineEye
                    // onClick={() => handleOpenProfile(item._id)}
                    className="text-primary cursor-pointer text-xl"
                  />
                  <FiCheck
                    className="text-green-500 cursor-pointer text-xl"
                    // onClick={() =>
                    //   handleStatusUpdate(item._id, STATUS.APPROVED)
                    // }
                  />
                  <FiX
                    className="text-red-500 cursor-pointer text-xl"
                    // onClick={() =>
                    //   handleStatusUpdate(item._id, STATUS.REJECTED)
                    // }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    
    </div>
  );
};

export default AdminConsultant;