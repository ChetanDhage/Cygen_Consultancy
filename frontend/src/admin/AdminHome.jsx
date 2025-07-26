import React from "react";
import { FaUsers, FaUserTie, FaVideo, FaRupeeSign } from "react-icons/fa";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const AdminHome = () => {
  const revenueData = [
    { name: "Jan", revenue: 85000 },
    { name: "Feb", revenue: 95000 },
    { name: "Mar", revenue: 105000 },
    { name: "Apr", revenue: 120000 },
    { name: "May", revenue: 145000 },
    { name: "Jun", revenue: 175000 },
  ];

  const pieData = [
    { name: "Consultants", value: 45 },
    { name: "Customers", value: 45 },
    { name: "Admins", value: 10 },
  ];

  const COLORS = ["#4f46e5", "#3b82f6", "#60a5fa"];

  const pendingData = [
    { name: "Rajesh Kumar", specialization: "Network Security", status: "Pending" },
    { name: "Priya Sharma", specialization: "AI & Machine Learning", status: "Pending" },
    { name: "Amit Patel", specialization: "Cloud Security", status: "Pending" },
  ];

  const transactions = [
    { customer: "Customer 1", consultant: "Rajesh Kumar", amount: "₹1,200", date: "12 Jun 2023" },
    { customer: "Customer 2", consultant: "Priya Sharma", amount: "₹1,800", date: "11 Jun 2023" },
    { customer: "Customer 3", consultant: "Amit Patel", amount: "₹2,500", date: "11 Jun 2023" },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">AdminHome</h1>

      {/* Top Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-4 rounded-xl shadow-md flex items-center justify-between">
          <div>
            <h4 className="text-gray-500 text-sm">Total Users</h4>
            <h2 className="text-2xl font-bold">2,842</h2>
            <p className="text-green-500 text-sm">↑12.5% from last month</p>
          </div>
          <FaUsers className="text-3xl text-primary" />
        </div>

        <div className="bg-white p-4 rounded-xl shadow-md flex items-center justify-between">
          <div>
            <h4 className="text-gray-500 text-sm">Consultants</h4>
            <h2 className="text-2xl font-bold">1,526</h2>
            <p className="text-green-500 text-sm">↑8.3% from last month</p>
          </div>
          <FaUserTie className="text-3xl text-purple-500" />
        </div>

        <div className="bg-white p-4 rounded-xl shadow-md flex items-center justify-between">
          <div>
            <h4 className="text-gray-500 text-sm">Active Sessions</h4>
            <h2 className="text-2xl font-bold">248</h2>
            <p className="text-red-500 text-sm">↓3.2% from yesterday</p>
          </div>
          <FaVideo className="text-3xl text-cyan-500" />
        </div>

        <div className="bg-white p-4 rounded-xl shadow-md flex items-center justify-between">
          <div>
            <h4 className="text-gray-500 text-sm">Revenue</h4>
            <h2 className="text-2xl font-bold">₹1,84,250</h2>
            <p className="text-green-500 text-sm">↑22.7% from last month</p>
          </div>
          <FaRupeeSign className="text-3xl text-primary" />
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-4 rounded-xl shadow-md lg:col-span-2">
          <h3 className="font-semibold mb-4">Monthly Revenue</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-md">
          <h3 className="font-semibold mb-4">User Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={pieData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                {pieData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h3 className="font-semibold mb-4">Pending Verifications</h3>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th>Consultant</th>
                <th>Specialization</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {pendingData.map((row, i) => (
                <tr key={i} className="border-b text-sm text-gray-500">
                  <td>{row.name}</td>
                  <td>{row.specialization}</td>
                  <td className="text-primary font-semibold">{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-md">
          <h3 className="font-semibold mb-4">Recent Transactions</h3>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th>Customer</th>
                <th>Consultant</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody className=" text-sm text-gray-500 ">
              {transactions.map((row, i) => (
                <tr key={i} className="border-b ">
                  <td>{row.customer}</td>
                  <td>{row.consultant}</td>
                  <td>{row.amount}</td>
                  <td>{row.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
