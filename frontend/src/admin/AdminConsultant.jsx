import React, { useState } from "react";
import { FaFilePdf } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import { FiCheck, FiX } from "react-icons/fi";

const AdminConsultant = () => {
  const [filter, setFilter] = useState("All");
  const data = [
    { name: "Rajesh Kumar", email: "rajesh@example.com", specialization: "Network Security", Experience: 3, rating: "2 days ago",fee:"1000", status: "Pending" },
    { name: "Priya Sharma", email: "priya@example.com", specialization: "AI & Machine Learning", Experience: 2, rating: "1 day ago",fee:"1000", status: "Pending" },
    { name: "Amit Patel", email: "amit@example.com", specialization: "Cloud Security", Experience: 4, rating: "5 days ago",fee:"1000", status: "Rejected" },
    { name: "Neha Gupta", email: "neha@example.com", specialization: "Data Science", Experience: 3, rating: "3 days ago",fee:"1000", status: "Verified" },
    { name: "Sanjay Kumar", email: "sanjay@example.com", specialization: "Web Development", Experience: 2, rating: "1 day ago",fee:"1000", status: "Pending" },
  ];

  const filteredData = filter === "All" ? data : data.filter((item) => item.status === filter);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Consultant Management</h1>

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
              <th>Experience</th>
              <th>rating</th>
              <th>Fee</th>
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
                <td className="flex items-center gap-1">{item.Experience}</td>
                <td>{item.rating}</td>
                <td>{item.fee}</td>
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
                  <AiOutlineEye className="text-blue-500 cursor-pointer" />
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

export default AdminConsultant;
