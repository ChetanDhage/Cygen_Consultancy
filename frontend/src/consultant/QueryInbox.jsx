import React, { useState, useEffect } from 'react';
import { FaFileExcel, FaFilePdf } from 'react-icons/fa';
import io from 'socket.io-client';
import { getConsultantQuries, updateQueryStatus } from '../api/consultant';
import { useSelector } from 'react-redux';
import { selectCurrentToken, selectCurrentUser } from '../redux/authSlice';

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

  const [accepted, setAccepted] = useState('Accept Query');
  const [rejected, setRejected] = useState('Reject Query');

  const token = useSelector(selectCurrentToken);
  const consultant = useSelector(selectCurrentUser);
  const consultantId = consultant?._id;

  // Fetch queries from API
  const fetchQueries = async (page = 1, status = 'all') => {
    try {
      const response = await getConsultantQuries({
        consultantId,
        token,
        status: status === 'all' ? undefined : status.toLowerCase(),
        page,
        limit: pagination.limit
      });

      const data = response.data;
      console.log(data)

      setQueries(data.queries);
      setPagination({
        page: data.currentPage,
        totalPages: data.totalPages,
        totalQueries: data.totalQueries,
        limit: pagination.limit
      });

      if (data.queries.length > 0 && !selectedQuery) {
        setSelectedQuery(data.queries[0]);
      }
    } catch (error) {
      console.error('Error fetching queries:', error);
    }
  };

  // Initial load
  useEffect(() => {
    if (consultantId && token) {
      fetchQueries();
    }
  }, [consultantId, token]);

  // WebSocket connection
  useEffect(() => {
    const newSocket = io('localhost:5000', { transports: ['websocket'] });
    setSocket(newSocket);
    return () => newSocket.close();
  }, []);

  // WebSocket listeners
  useEffect(() => {
    if (!socket) return;

    if (consultantId) {
      socket.emit('join-consultant', consultantId);
    }

    socket.on('new-query', (newQuery) => {
      setQueries(prev => [newQuery, ...prev]);
      setPagination(prev => ({
        ...prev,
        totalQueries: prev.totalQueries + 1,
        totalPages: Math.ceil((prev.totalQueries + 1) / prev.limit)
      }));
    });

    socket.on('update-query', (updatedQuery) => {
      setQueries(prev =>
        prev.map(query => query._id === updatedQuery._id ? updatedQuery : query)
      );
      if (selectedQuery && selectedQuery._id === updatedQuery._id) {
        setSelectedQuery(updatedQuery);
      }
    });

    return () => {
      socket.off('new-query');
      socket.off('update-query');
    };
  }, [socket, consultantId, selectedQuery]);

  // Handlers
  const handleQuerySelect = (query) => setSelectedQuery(query);
  const handleStatusFilter = (status) => {
    setStatusFilter(status);
    fetchQueries(1, status);
  };
  const handlePageChange = (newPage) => fetchQueries(newPage, statusFilter);

  const handleAccept = async () => {
  if (!selectedQuery) return;
  try {
    setAccepted('processing the request...');
    const res = await updateQueryStatus({
      queryId: selectedQuery._id,
      token,
      status: "accepted",
      date: new Date().toISOString(),
      duration: 60,   // ✅ number, not "1 hour"
      type: "video",
    });
    setAccepted('Query accepted');

    alert(`You ${res.data.status} this query`);

    setSelectedQuery(res.data);
    setQueries(prev =>
      prev.map(q => (q._id === res.data._id ? res.data : q))
    );
  } catch (err) {
    console.error("Error accepting query:", err.response?.data || err);
  }
};


  // Handle Reject
  const handleReject = async () => {
    if (!selectedQuery) return;
    try {
      setRejected('processing the request...');
      const res = await updateQueryStatus({
        queryId: selectedQuery._id,
        token,
        status: "rejected",
      });
      alert(`You ${res.data.status} this query`);
      setRejected('Query rejected');
      setSelectedQuery(res.data);
      setQueries(prev =>
        prev.map(q => (q._id === res.data._id ? res.data : q))
      );
    } catch (err) {
      console.error("Error rejecting query:", err);
    }
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
            <h2 className="text-lg font-bold">Upcoming Queries</h2>
            <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">
              {pagination.totalQueries}
            </span>
          </div>

          {/* Status Filter */}
          <div className="flex mb-4 space-x-2">
            {['all', 'New', 'Accepted', 'Pending', 'Rejected'].map(status => (
              <button
                key={status}
                className={`text-xs px-2 py-1 rounded-full ${statusFilter === status
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
              className={`flex flex-col p-3 rounded-sm cursor-pointer my-2 ${selectedQuery?._id === query._id
                ? 'text-primary  border border-primary'
                : 'hover:text-primary hover:border border-primary '
                }`}
              onClick={() => handleQuerySelect(query)}
            >
              <h4 className="font-semibold text-sm">{query.querySub}</h4>
              <p className="text-xs text-gray-500 truncate line-clamp-2">{query.queryText}</p>
              <span className="text-xs mt-1 text-gray-400">
                {new Date(query.createdAt).toLocaleString()}
              </span>
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
          <div className="border rounded-lg p-5 flex-1 bg-white shadow">
            <p className="text-sm text-gray-600 mb-4">
              Proposed Fee:{' '}
              <span className="font-semibold text-black">
                ${selectedQuery.fee}
              </span>
            </p>
            <div className="flex justify-between gap-2  w-full">
              <div className=' w-full'>
                <h3 className="text-lg font-semibold">
                  Subject: {selectedQuery.querySub}
                </h3>
              
                <div className="flex gap-2 border border-primary bg-primaryLight rounded-r-full px-6 py-4 my-4 w-full">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-primary bg-white border border-primary">
                    {selectedQuery.user?.name
                      ? selectedQuery.user.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')
                      : 'U'}
                  </div>
                  <div>
                    <p className="text-md text-gray-600">{selectedQuery.user?.name}</p>
                    <p className="text-xs text-gray-600">{selectedQuery.user?.email}</p>
                  </div>
                </div>
              </div>
              <span className="text-sm text-primary bg-blue-100 px-2 py-1 rounded-full w-fit h-fit">
                {selectedQuery.status}
              </span>
            </div>
           

            <div className="text-sm text-gray-500 mb-4">
              <p className=' text-lg font-semibold text-gray-800'>Description </p>

              {selectedQuery.queryText}
            </div>
            <hr className=' mb-6' />

            <h4 className="font-semibold text-sm mb-2">Attached Documents</h4>
            <div className="flex gap-2 mb-4">
              {selectedQuery.files?.length > 0 ? (
                selectedQuery.files.map((file) => (
                  <a
                    key={file._id}
                    href={file.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-1 bg-gray-100 rounded"
                  >
                    {file.name.endsWith('.pdf') ? (
                      <FaFilePdf className="text-red-500" />
                    ) : (
                      <FaFileExcel className="text-green-600" />
                    )}
                    <span className="text-sm">{file.name}</span>
                  </a>
                ))
              ) : (
                <p className="text-xs text-gray-400">No attachments</p>
              )}
            </div>
            <hr className=' mb-6' />

            <p className="text-sm text-gray-600 my-2">
              <span className="font-medium">Date & Time:</span>{' '}
              {selectedQuery.sessionDateTime
                ? new Date(selectedQuery.sessionDateTime).toLocaleString('en-US', {
                  weekday: 'long',
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                  hour: 'numeric',
                  minute: '2-digit',
                  hour12: true
                })
                : 'Not scheduled'}
            </p>
            <p className="text-sm text-gray-600 my-2">
              <span className="font-medium">Duration:</span> {selectedQuery.duration || 'N/A'}
            </p>
            <p className="text-sm text-gray-600 my-2">
              <span className="font-medium">Session Link:</span>{' '}
              {selectedQuery.sessionLink ? (
                <a
                  href={selectedQuery.sessionLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  Join Meet
                </a>
              ) : (
                'Not available'
              )}
            </p>


            <div className="flex gap-4 my-6">
              <button
                onClick={handleReject}
                className="border border-gray-300 px-4 py-2 rounded text-gray-600"
              >
                {rejected}
              </button>
              <button
                onClick={handleAccept}
                className="bg-primary text-white px-4 py-2 rounded"
              >
                {accepted}
              </button>
            </div>

          </div>
        )}
      </div>
    </main>
  );
};

export default QueryInbox;

