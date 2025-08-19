import React, { useEffect, useState } from "react";
import { BsBookmark } from "react-icons/bs";
import { fetchAllConsultant } from "../../../api/consultant"; // adjust path

const TopConsultants = () => {
  const [consultants, setConsultants] = useState([]);

  useEffect(() => {
    const getConsultants = async () => {
      try {
        const res = await fetchAllConsultant();
        // If backend returns { data: [...] }
        const list = res.data?.data || res.data || [];
        setConsultants(list.slice(0, 4)); // ✅ Only first 4
        // console.log("Top Consultants:", list);
      } catch (err) {
        console.error("Error fetching consultants:", err);
      }
    };
    getConsultants();
  }, []);

  // Render star icons for rating
  const renderStars = (rating = 0) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>
        ★
      </span>
    ));
  };

  return (
    <section className="px-4 py-12 dark:bg-[#090d13] bg-white/80">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
          Top Rated Consultants
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Experts available for immediate consultation
        </p>
      </div>

      <div className="flex gap-6 overflow-x-auto lg:grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 px-4 py-4">
        {consultants.map((consultant, index) => (
          <div
            key={consultant._id || index }
            className="min-w-[280px] sm:min-w-[250px] lg:min-w-0 relative group rounded-3xl bg-white dark:bg-gray-900/80 border border-b-primary border-t-primary/90 border-l-0 border-r-0 shadow-md hover:shadow-2xl transition duration-300 hover:scale-105 py-6"
          >
            {/* Avatar */}
            <img
              src={consultant?.user.profilePhoto.url || 'https://img.freepik.com/premium-vector/man-character_665280-46970.jpg'}
              alt={consultant?.name || "Consultant"}
              className="w-16 h-16 rounded-full mx-auto mb-4 object-cover border border-gray-300"
            />

            {/* Name */}
            <h3 className="font-semibold text-lg text-center text-gray-800 dark:text-white">
              {consultant.name || "Unknown"}
            </h3>

            {/* Rating */}
            <div className="flex items-center justify-center gap-1 text-sm mt-1">
              {renderStars(consultant.rating || 4)}
              <span className="text-gray-500 dark:text-gray-300 ml-1">
                {consultant.rating || 4}
              </span>
              <span className="text-gray-400 dark:text-gray-400">
                ({consultant.reviews || 12})
              </span>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {(consultant.skills || []).slice(0, 3).map((skill, i) => (
                <span
                  key={i}
                  className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-600"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Info */}
            <div className="mt-4 text-sm text-gray-500 dark:text-gray-300 space-y-1 text-center">
              <p>
                <strong>Experience:</strong> {consultant.yearsOfExperience || 0} yrs
              </p>
              <p>
                <strong>Fee:</strong> {consultant.expectedFee || 0} ₹/hr
              </p>
              <p>
                <strong>Sessions:</strong> {consultant.sessions || 0}
              </p>
            </div>

            {/* Action */}
            <div className="mt-4 flex items-center justify-center">
              <button className="bg-primary text-white w-1/2 py-2 rounded-full text-sm font-semibold hover:bg-primary-dark transition">
                Connect Now
              </button>
              <BsBookmark className="ml-3 text-gray-500 cursor-pointer hover:text-primary" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopConsultants;