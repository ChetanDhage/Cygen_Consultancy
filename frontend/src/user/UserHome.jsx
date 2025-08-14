import { useEffect, useState } from 'react';
import ConsultantCard from '../consultant/ConsultantCard';
import { fetchAllConsultant } from '../api/consultant';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../redux/authSlice';

const UserHome = () => {
  const [consultants, setConsultants] = useState([]);
  const [filteredConsultants, setFilteredConsultants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    domain: '',
    experience: '',
    fee: '',
    rating: '',
  });

  useEffect(() => {
    const getConsultants = async () => {
      try {
        const response = await fetchAllConsultant();
        setConsultants(response.data);
        setFilteredConsultants(response.data);
      } catch (error) {
        console.error("Error fetching consultants:", error);
      }
    };

    getConsultants();
  }, []);

  useEffect(() => {
    let filtered = consultants;

    // Search filter
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(c =>
        c?.user?.name?.toLowerCase().includes(term) ||
        c?.industry?.toLowerCase().includes(term) ||
        c?.designation?.toLowerCase().includes(term)
      );
    }

    // Domain filter
    if (filters.domain && filters.domain !== 'all-domain') {
      filtered = filtered.filter(c => c.industry === filters.domain);
    }

    // Experience filter
    if (filters.experience) {
      const exp = parseInt(calculateYears(c.experience));
      switch (filters.experience) {
        case '1-3':
          filtered = filtered.filter(c => exp >= 1 && exp <= 3);
          break;
        case '3-5':
          filtered = filtered.filter(c => exp > 3 && exp <= 5);
          break;
        case '5-10':
          filtered = filtered.filter(c => exp > 5 && exp <= 10);
          break;
        case '10+':
          filtered = filtered.filter(c => exp > 10);
          break;
        default:
          break;
      }
    }

    // Fee filter
    if (filters.fee) {
      const fee = parseFloat(c.expectedFee);
      switch (filters.fee) {
        case '50-100':
          filtered = filtered.filter(c => fee >= 50 && fee <= 100);
          break;
        case '100-200':
          filtered = filtered.filter(c => fee > 100 && fee <= 200);
          break;
        case '200-300':
          filtered = filtered.filter(c => fee > 200 && fee <= 300);
          break;
        case '500+':
          filtered = filtered.filter(c => fee > 500);
          break;
        default:
          break;
      }
    }

    // Rating filter
    if (filters.rating) {
      const rating = parseFloat(filters.rating);
      filtered = filtered.filter(c => c.rating >= rating);
    }

    setFilteredConsultants(filtered);
  }, [consultants, searchTerm, filters]);

  const calculateYears = (startDate) => {
    if (!startDate) return 0;
    const start = new Date(startDate);
    const now = new Date();
    return Math.floor((now - start) / (1000 * 60 * 60 * 24 * 365));
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const userName = useSelector(selectCurrentUser);
  const userGreeting = userName ? userName.name : 'Guest';

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-semibold mb-2">Hello, {userGreeting}!</h1>
      <p className="text-gray-600 mb-4">Find the perfect consultant for your needs</p>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search consultants or domains..."
        className="w-full p-2 border rounded mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Filters */}
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4 mb-6">
        <select name="domain" onChange={handleFilterChange} className="border p-2 rounded">
          <option value="">All Domain</option>
          <option value="Marketing">Marketing</option>
          <option value="Business Strategy">Business Strategy</option>
          <option value="Financial Planning">Financial Planning</option>
          <option value="IT Technology">IT Technology</option>
          <option value="Human Resources">Human Resources</option>
        </select>

        <select name="experience" onChange={handleFilterChange} className="border p-2 rounded">
          <option value="">Experience</option>
          <option value="1-3">1-3 Years</option>
          <option value="3-5">3-5 Years</option>
          <option value="5-10">5-10 Years</option>
          <option value="10+">10+ Years</option>
        </select>

        <select name="fee" onChange={handleFilterChange} className="border p-2 rounded">
          <option value="">Any Fee</option>
          <option value="50-100">$50-100</option>
          <option value="100-200">$100-200</option>
          <option value="200-300">$200-300</option>
          <option value="500+">$500+</option>
        </select>

        <select name="rating" onChange={handleFilterChange} className="border p-2 rounded">
          <option value="">Any Rating</option>
          <option value="3.5">3.5 Star</option>
          <option value="4.5">4.5 Star</option>
          <option value="5">5 Star</option>
        </select>
      </div>

      {/* Consultant Cards */}
      <h2 className="text-xl font-semibold mb-2">Featured Consultants</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {filteredConsultants.length > 0 ? (
          filteredConsultants.map((consultant) => (
            <ConsultantCard
              key={consultant._id}
              consultantdata={consultant}
              ActiveQueryButton={true}
            />
          ))
        ) : (
          <p>No consultants match your criteria</p>
        )}
      </div>
    </div>
  );
};

export default UserHome;
