import { useEffect, useState } from 'react';
import ConsultantCard from '../consultant/ConsultantCard';
import { fetchAllConsultant } from '../api/consultant';

const UserHome = () => {
  const [consultants, setConsultants] = useState([]);
  const [filteredConsultants, setFilteredConsultants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const getConsultants = async () => {
      try {
        const res = await fetchAllConsultant();
        console.log("API Response:", res.data);
        if (res.data ) {
          setConsultants(res.data.data); 
          setFilteredConsultants(res.data.data);
        }
      } catch (error) {
        console.error('Error fetching consultants:', error);
      }
    };

    getConsultants();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredConsultants(consultants);
    } else {
      const lowerTerm = searchTerm.toLowerCase();
      setFilteredConsultants(
        consultants.filter(c =>
          c.name?.toLowerCase().includes(lowerTerm) ||
          c.speciality?.toLowerCase().includes(lowerTerm)
        )
      );
    }
  }, [searchTerm, consultants]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Featured Consultants</h2>

      <input
        type="text"
        placeholder="Search consultants..."
        className="border border-gray-300 rounded-md p-2 w-full mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {filteredConsultants.length === 0 ? (
        <p>No consultants match your criteria</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredConsultants.map((consultant) => (
            <ConsultantCard key={consultant._id} consultant={consultant} />
          ))}
        </div>
      )}
    </div>
  );
};

export default UserHome;
