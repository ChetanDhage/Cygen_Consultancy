import React from "react";
import { FaDownload, FaHistory, FaWallet, FaClock, FaMoneyBillWave, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const EarningsTransactions = () => {
  const transactions = [
    {
      date: "Oct 12, 2023",
      client: "Michael Chen",
      session: "Marketing Strategy",
      duration: "90 min",
      amount: "$300",
      status: "Paid",
    },
    {
      date: "Oct 8, 2023",
      client: "Sarah Johnson",
      session: "Business Strategy",
      duration: "60 min",
      amount: "$250",
      status: "Paid",
    },
    {
      date: "Oct 5, 2023",
      client: "David Wilson",
      session: "Financial Planning",
      duration: "120 min",
      amount: "$400",
      status: "Processing",
    },
    {
      date: "Oct 1, 2023",
      client: "Emma Rodriguez",
      session: "Leadership Training",
      duration: "90 min",
      amount: "$300",
      status: "Paid",
    },
    {
      date: "Sep 28, 2023",
      client: "James Anderson",
      session: "Product Development",
      duration: "60 min",
      amount: "$250",
      status: "Processing",
    },
  ];

  return (
    <main>
      <header className=" bg-white px-6 pb-2 w-full flex justify-between items-center mb-2 ">
          <h2 className="text-xl font-bold">Earnings Transactions</h2>
      </header>
      <div className=" p-6  bg-gray-100">
        <div className=" p-6 bg-white rounded-lg">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-600">Earnings & Transactions</h1>
            <p className="text-gray-600">View your earnings history and manage payouts</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Earnings</p>
                <h3 className="text-2xl font-bold text-gray-600">$8,450</h3>
              </div>
              <FaMoneyBillWave className="text-primary text-2xl" />
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Available Balance</p>
                <h3 className="text-2xl font-bold text-gray-600">$2,500</h3>
              </div>
              <FaWallet className="text-green-500 text-2xl" />
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Remaining Clearance</p>
                <h3 className="text-2xl font-bold text-gray-600">$350</h3>
              </div>
              <FaClock className="text-yellow-500 text-2xl" />
            </div>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Avg. Session Fee</p>
                <h3 className="text-2xl font-bold text-gray-600">$215</h3>
              </div>
              <FaHistory className="text-purple-500 text-2xl" />
            </div>
          </div>
        </div>

        {/* Transaction History */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-600 mb-4">Transaction History</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left text-gray-600 font-medium">Date</th>
                  <th className="py-3 px-4 text-left text-gray-600 font-medium">Client</th>
                  <th className="py-3 px-4 text-left text-gray-600 font-medium">Session</th>
                  <th className="py-3 px-4 text-left text-gray-600 font-medium">Duration</th>
                  <th className="py-3 px-4 text-left text-gray-600 font-medium">Amount</th>
                  <th className="py-3 px-4 text-left text-gray-600 font-medium">Status</th>
                  <th className="py-3 px-4 text-left text-gray-600 font-medium">Invoice</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm">
                {transactions.map((transaction, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-4 px-4 text-gray-500">{transaction.date}</td>
                    <td className="py-4 px-4 text-gray-500 font-medium">{transaction.client}</td>
                    <td className="py-4 px-4 text-gray-500">{transaction.session}</td>
                    <td className="py-4 px-4 text-gray-500">{transaction.duration}</td>
                    <td className="py-4 px-4 text-gray-500 font-medium">{transaction.amount}</td>
                    <td className="py-4 px-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${transaction.status === "Paid"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                        }`}>
                        {transaction.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <button className="text-blue-600 hover:text-blue-800 flex items-center">
                        <FaDownload className="mr-1" />
                        Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between">
          <p className="text-gray-600">Showing 1 to 5 of 28 transactions</p>
          <div className="flex space-x-2">
            <button className="p-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100">
              <FaChevronLeft />
            </button>
            <button className="p-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100">
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
      </div>
    </main>

  );
};

export default EarningsTransactions;