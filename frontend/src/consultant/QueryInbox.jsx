import React, { useState, useEffect } from 'react';
import { FaSearch, FaFileExcel, FaFilePdf } from 'react-icons/fa';
import io from 'socket.io-client';
import { getConsultantQuries } from '../api/consultant';
import { useSelector } from 'react-redux';
import { selectCurrentToken, selectCurrentUser } from '../redux/authSlice';
const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const QueryInbox = () => {
  const [queries, setQueries] = useState([]);
  const [selectedQuery, setSelectedQuery] = useState(null);
  const [pagination, setPagination] = useState({
    page: 1,
    totalPages: 1,
    totalQueries: 0,
    limit: 10,
  });
  const [statusFilter, setStatusFilter] = useState('all');
  const [socket, setSocket] = useState(null);


  const token = useSelector(selectCurrentToken);
  const consultantId = useSelector(selectCurrentUser);

  console.log(consultantId)
  
 useEffect(() => {
  const fetchQueries = async () => {
    try {
      const response = await getConsultantQuries({
        consultantId,
        token,
        status: "pending", // or "all"
        page: 1,
        limit: 10
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching queries:", error);
    }
  };

  if (consultantId && token) {
    fetchQueries();
  }
}, [consultantId, token]);



  
  // Fetch queries from API
  const fetchQueries = async (page = 1, status = 'all') => {
    try {
      const response = await fetch(
        `/api/queries?status=${status}&page=${page}&limit=${pagination.limit}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        }
      );
      const data = await response.json();
      
      setQueries(data.queries);
      setPagination({
        page: data.currentPage,
        totalPages: data.totalPages,
        totalQueries: data.totalQueries,
        limit: pagination.limit
      });
      
      // Set first query as selected by default
      if (data.queries.length > 0 && !selectedQuery) {
        setSelectedQuery(data.queries[0]);
      }
    } catch (error) {
      console.error('Error fetching queries:', error);
    }
  };

  // Initialize WebSocket connection
  useEffect(() => {
    const newSocket = io(BASE_URL, {
      transports: ['websocket'],
    });
    
    setSocket(newSocket);

    // Clean up on unmount
    return () => newSocket.close();
  }, []);

  // Set up WebSocket listeners
  useEffect(() => {
    if (!socket) return;

    // Join consultant-specific room
    const consultantId = localStorage.getItem('consultantId');
    if (consultantId) {
      socket.emit('join-consultant', consultantId);
    }

    // Handle new query event
    socket.on('new-query', (newQuery) => {
      setQueries(prev => [newQuery, ...prev]);
      
      // Update pagination totals
      setPagination(prev => ({
        ...prev,
        totalQueries: prev.totalQueries + 1,
        totalPages: Math.ceil((prev.totalQueries + 1) / prev.limit)
      }));
    });

    // Handle query update event
    socket.on('update-query', (updatedQuery) => {
      setQueries(prev => prev.map(query => 
        query._id === updatedQuery._id ? updatedQuery : query
      ));
      
      // Update selected query if it's the one being viewed
      if (selectedQuery && selectedQuery._id === updatedQuery._id) {
        setSelectedQuery(updatedQuery);
      }
    });

    return () => {
      socket.off('new-query');
      socket.off('update-query');
    };
  }, [socket, selectedQuery]);

  // Initial fetch
  useEffect(() => {
    fetchQueries();
  }, []);

  // Handle query selection
  const handleQuerySelect = (query) => {
    setSelectedQuery(query);
  };

  // Handle status filter change
  const handleStatusFilter = (status) => {
    setStatusFilter(status);
    fetchQueries(1, status);
  };

  // Handle page change
  const handlePageChange = (newPage) => {
    fetchQueries(newPage, statusFilter);
  };

  return (
    <main>
      <header className="bg-white px-6 pb-2 w-full flex justify-between items-center">
          <h2 className="text-xl font-bold">Query Inbox</h2>
      </header>
      
      <div className="flex p-6 gap-6">
        {/* Left Panel */}
        <div className="w-1/3 bg-white rounded-xl shadow p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Upcoming Queries </h2>
            <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">
              {pagination.totalQueries}
            </span>
          </div>
          
          {/* Status Filter */}
          <div className="flex mb-4 space-x-2">
            {['all', 'New', 'Accepted', 'Pending', 'Rejected'].map(status => (
              <button
                key={status}
                className={`text-xs px-2 py-1 rounded-full ${
                  statusFilter === status 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-200 text-gray-700'
                }`}
                onClick={() => handleStatusFilter(status)}
              >
                {status}
              </button>
            ))}
          </div>
          
          {/* Queries List */}
          {queries.map((query) => (
            <div
              key={query._id}
              className={`flex items-center justify-between p-3 rounded-lg cursor-pointer ${
                selectedQuery?._id === query._id 
                  ? 'bg-blue-50 border border-primary' 
                  : 'hover:bg-gray-100'
              }`}
              onClick={() => handleQuerySelect(query)}
            >
              {/* ... existing query item UI ... */}
            </div>
          ))}
          
          {/* Pagination */}
          <div className="flex justify-between items-center mt-4">
            <button
              disabled={pagination.page === 1}
              onClick={() => handlePageChange(pagination.page - 1)}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Previous
            </button>
            
            <span>
              Page {pagination.page} of {pagination.totalPages}
            </span>
            
            <button
              disabled={pagination.page === pagination.totalPages}
              onClick={() => handlePageChange(pagination.page + 1)}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
        
        {/* Right Panel */}
        {selectedQuery && (
                    <div className="border rounded-lg p-5">
                        <div className="flex justify-between gap-2 mb-2">

                            <div>
                                <h3 className="text-lg font-semibold">Subject: Financial planning for startup</h3>
                                <br />
                                <div className=' flex gap-2'>
                                    <div className='w-10 h-10 rounded-full flex items-center justify-center font-bold text-primary  bg-primaryLight'>
                                        AR
                                    </div>
                                    <div>
                                        <p className="text-md text-gray-600">Alex Reynolds</p>
                                        <p className="text-xs text-gray-600">CEO, TechStart Inc.</p>
                                    </div>
                                </div>
                            </div>
                            <span className="text-sm  text-primary bg-blue-100 px-2 py-1 rounded-full w-fit h-fit">New</span>
                        </div>
                        <p className="text-sm text-gray-500 mb-4">
                            I'm launching a new SaaS startup and need help with financial planning. Specifically, I need
                            assistance with creating a 3-year financial projection, setting up a budget for the first year,
                            and advice on funding options. We're pre-revenue and have 6 months of runway. Would appreciate
                            your expertise in creating a solid financial foundation.
                        </p>

                        <h4 className="font-semibold text-sm mb-2">Attached Documents</h4>
                        <div className="flex gap-2 mb-4">
                            <div className="flex items-center gap-1 px-3 py-1 bg-gray-100 rounded">
                                <FaFileExcel className="text-green-600" />
                                <span className="text-sm">Financials.xlsx</span>
                            </div>
                            <div className="flex items-center gap-1 px-3 py-1 bg-gray-100 rounded">
                                <FaFilePdf className="text-red-500" />
                                <span className="text-sm">Business_Plan.pdf</span>
                            </div>
                        </div>

                        <p className="text-sm text-gray-600 mb-4">
                            Proposed Fee: <span className="font-semibold text-black">$250</span> for 90-minute session
                        </p>

                        <div className="flex gap-4">
                            <button className="border border-gray-300 px-4 py-2 rounded text-gray-600">Reject</button>
                            <button className="bg-primary text-white px-4 py-2 rounded">Accept Query</button>
                        </div>
                    </div>
        )}
      </div>
    </main>
  );
};

export default QueryInbox;