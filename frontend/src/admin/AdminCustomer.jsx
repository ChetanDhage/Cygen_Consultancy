import React, { useState, useEffect } from "react";
import { FiCheck, FiTrash2, FiX } from "react-icons/fi";
import { fetchCustomers, updateCustomerStatus, deleteCustomer } from "../api/admin";

const CustomersPage = () => {
  const [customers, setCustomers] = useState([]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  // ✅ Fetch customers
  const loadCustomers = async () => {
    try {
      const response = await fetchCustomers();
      // console.log("Fetched customers:", response.data);
      setCustomers(response.data || []);
    } catch (error) {
      console.error("Error fetching customers:", error);
      setCustomers([]);
    }
  };

  useEffect(() => {
    loadCustomers();
  }, []);

  // ✅ Filter + Search logic
  const filteredData = (customers || []).filter((item) => {
    const matchesFilter = filter === "All" || item.status === filter;
    const matchesSearch =
      search === "" ||
      item.firstName?.toLowerCase().includes(search.toLowerCase()) ||
      item.lastName?.toLowerCase().includes(search.toLowerCase()) ||
      item.email?.toLowerCase().includes(search.toLowerCase()) ||
      item.companyName?.toLowerCase().includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  // ✅ Update status
  const handleStatusChange = async (id, status) => {
    const confirmAction = window.confirm(
      `Are you sure you want to mark this customer as ${status}?`
    );
    if (!confirmAction) return;

    try {
      await updateCustomerStatus(id, status);
      loadCustomers();
    } catch (err) {
      console.error("Error updating customer status:", err);
    }
  };

  // ✅ Delete customer
  const handleDeleteCustomer = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this customer?");
    if (!confirmDelete) return;
    try {
      const res =  await deleteCustomer(id);
      console.log(res.data)
      loadCustomers();
    } catch (err) {
      console.error("Error deleting customer:", err);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Customer Management</h2>

      {/* Search + Filter */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-3 py-2 rounded"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border px-3 py-2 rounded"
        >
          <option value="All">All</option>
          <option value="Verified">Verified</option>
          <option value="Rejected">Rejected</option>
          <option value="pending">Pending</option>
        </select>
      </div>

      {/* ✅ Styled Table */}
      <div className="bg-white p-4 shadow-md rounded-lg">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th>Customer</th>
              <th>Company</th>
              <th>Country</th>
              <th>Domain</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <tr key={item._id} className="border-b">
                  <td>
                    <div>
                      <p>{item.firstName + " " + item.lastName}</p>
                      <p className="text-sm text-gray-500">{item.email}</p>
                    </div>
                  </td>
                  <td className="text-sm">{item.companyName}</td>
                  <td>{item.country}</td>
                  <td className="text-sm">{item.serviceArea}</td>
                  <td>
                    <span
                    className={`px-3 py-1 rounded-full text-sm ${item.status === 'pending'
                        ? "bg-pink-100 text-pink-600"
                        : item.status === 'Verified'
                          ? "bg-blue-100 text-blue-600"
                          : "bg-red-100 text-red-600"
                      }`}
                  >
                    {item.status}
                  </span>
                  </td>
                  <td className="flex gap-3">
                    <FiCheck
                      className="text-green-500 cursor-pointer"
                      onClick={() => handleStatusChange(item._id, "Verified")}
                    />
                    <FiX
                      className="text-red-500 cursor-pointer"
                      onClick={() => handleStatusChange(item._id, "Rejected")}
                    />
                     <FiTrash2
                      className="text-red-600 cursor-pointer"
                      onClick={() => handleDeleteCustomer(item._id)}
                      table="Delete Customer"
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-4">
                  No customers found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomersPage;
