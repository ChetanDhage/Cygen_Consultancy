import React, { useState } from "react";
import { FaFilePdf } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import { FiCheck, FiX } from "react-icons/fi";


const AdminVerification = () => {
  const [filter, setFilter] = useState("All");
  const data = [
    { name: "Rajesh Kumar", email: "rajesh@example.com", specialization: "Network Security", docs: 3, submitted: "2 days ago", status: "Pending" },
    { name: "Priya Sharma", email: "priya@example.com", specialization: "AI & Machine Learning", docs: 2, submitted: "1 day ago", status: "Pending" },
    { name: "Amit Patel", email: "amit@example.com", specialization: "Cloud Security", docs: 4, submitted: "5 days ago", status: "Rejected" },
    { name: "Neha Gupta", email: "neha@example.com", specialization: "Data Science", docs: 3, submitted: "3 days ago", status: "Verified" },
    { name: "Sanjay Kumar", email: "sanjay@example.com", specialization: "Web Development", docs: 2, submitted: "1 day ago", status: "Pending" },
  ];

  const filteredData = filter === "All" ? data : data.filter((item) => item.status === filter);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Verification Management</h1>

      {/* Filter Tabs */}
      <div className="flex items-center mb-4 gap-3">
        {["All", "Pending", "Verified", "Rejected"].map((status) => (
          <button
            key={status}
            className={`px-4 py-1 rounded-lg ${
              filter === status ? "bg-primary text-white" : "bg-gray-200"
            }`}
            onClick={() => setFilter(status)}
          >
            {status}
          </button>
        ))}
        <div className="ml-auto flex gap-2">
          <input type="text" placeholder="Search AdminConsultants..." className="border rounded-lg px-3 py-1" />
          <button className="bg-primary text-white px-4 py-1 rounded-lg">Filter</button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white p-4 shadow-md">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th>Consultant</th>
              <th>Specialization</th>
              <th>Documents</th>
              <th>Submitted</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index} className="border-b">
                <td>
                  <div>
                    <p>{item.name}</p>
                    <p className="text-sm text-gray-500">{item.email}</p>
                  </div>
                </td>
                <td>{item.specialization}</td>
                <td className="flex items-center gap-1">{item.docs} <FaFilePdf className="text-red-500" /></td>
                <td>{item.submitted}</td>
                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      item.status === "Pending"
                        ? "bg-pink-100 text-pink-600"
                        : item.status === "Verified"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="flex gap-3">
                  <AiOutlineEye className="text-primary cursor-pointer" />
                  <FiCheck className="text-green-500 cursor-pointer" />
                  <FiX className="text-red-500 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-end mt-4 gap-2">
        <button className="px-3 py-1 border rounded">1</button>
        <button className="px-3 py-1 border rounded">2</button>
      </div>
    </div>
  );
};

export default AdminVerification;
