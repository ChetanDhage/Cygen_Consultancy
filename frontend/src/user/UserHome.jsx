import { useEffect, useState } from 'react';
import ConsultantCard from '../consultant/ConsultantCard';
import SubmitQueryForm from './SubmitQueryForm';
import { fetchAllConsultant } from '../api/consultant';

const UserHome = () => {
  const [consultants, setConsultants] = useState([]);

  useEffect(() => {
    const getConsultants = async () => {
      try {
        const response = await fetchAllConsultant();
        setConsultants(response.data); // ✅ Store actual data
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching consultants:", error);
      }
    };

    getConsultants();
  }, []);

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-semibold mb-2">Hello, Alex Morgan!</h1>
      <p className="text-gray-600 mb-4">Find the perfect consultant for your needs</p>

      <input
        type="text"
        placeholder="Search consultants or domains..."
        className="w-full p-2 border rounded mb-4"
      />

      {/* Filters */}
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4 mb-6">
        <select className="border p-2 rounded">
          <option value="all-domain">All Domain</option>
          <option value="Marketing">Marketing</option>
          <option value="business-strategy">Business Strategy</option>
          <option value="financial-planning">Financial Planning</option>
          <option value="it-technology">IT Technology</option>
          <option value="human-resources">Human Resources</option>
        </select>
        <select className="border p-2 rounded">
          <option value="experience">Experience</option>
          <option value="1-3">1-3 Years</option>
          <option value="3-5">3-5 Years</option>
          <option value="5-10">5-10 Years</option>
          <option value="10+">10+ Years</option>
        </select>
        <select className="border p-2 rounded">
          <option value="fee">Any Fee</option>
          <option value="50-100">$50-100</option>
          <option value="100-200">$100-200</option>
          <option value="200-300">$200-300</option>
          <option value="500+">$500+</option>
        </select>
        <select className="border p-2 rounded">
          <option value="rating">Rating</option>
          <option value="3.5">3.5 Star</option>
          <option value="4.5">4.5 Star</option>
          <option value="5">5 Star</option>
        </select>
      </div>

      <h2 className="text-xl font-semibold mb-2">Featured Consultants</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {consultants.length > 0 ? (
          consultants.map((consultant) => (
            <ConsultantCard key={consultant._id} consultantdata={consultant} ActiveQueryButton={true} />
          ))
        ) : (
          <p>No consultants available</p>
        )}
      </div>

      <SubmitQueryForm />
    </div>
  );
};

export default UserHome;
