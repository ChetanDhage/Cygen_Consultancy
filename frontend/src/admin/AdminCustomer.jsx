import React, { useState } from "react";
import { FaFilePdf } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import { FiCheck, FiX } from "react-icons/fi";

const AdminCustomer = () => {
  const [filter, setFilter] = useState("All");
  const data = [
    { name: "Rajesh Kumar", email: "rajesh@example.com", company: "Network Security",session:55, spent: 318481, lastSession: "21/7/2025", status: "Pending" },
    { name: "Priya Sharma", email: "priya@example.com", company: "AI & Machine Learning",session:55, spent: 218481, lastSession: "10/7/2025", status: "Pending" },
    { name: "Amit Patel", email: "amit@example.com", company: "Cloud Security",session:55, spent: 418481, lastSession: "1/7/2025", status: "Rejected" },
    { name: "Neha Gupta", email: "neha@example.com", company: "Data Science",session:55, spent: 318481, lastSession: "31/7/2025", status: "Verified" },
    { name: "Sanjay Kumar", email: "sanjay@example.com", company: "Web Development",session:55, spent: 218481, lastSession: "11/7/2025", status: "Pending" },
  ];

  const filteredData = filter === "All" ? data : data.filter((item) => item.status === filter);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Customer Management</h1>

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
          <input type="text" placeholder="Search AdminCustomers..." className="border rounded-lg px-3 py-1" />
          <button className="bg-primary text-white px-4 py-1 rounded-lg">Filter</button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white p-4 shadow-md">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th>Customer</th>
              <th>Company</th>
              <th>Session</th>
              <th>Spent</th>
              <th>Last Session</th>
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
                <td>{item.company}</td>
                <td className="flex items-center gap-1">{item.session}</td>
                <td>{item.spent}</td>
                <td>{item.lastSession}</td>
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

export default AdminCustomer;
