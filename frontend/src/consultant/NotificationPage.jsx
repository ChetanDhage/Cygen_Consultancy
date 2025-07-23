import React, { useState, useEffect } from 'react';
import { FiBell, FiCheck, FiX, FiClock, FiAlertCircle, FiInfo } from 'react-icons/fi';

const NotificationPage = () => {
  const [NotificationPages, setNotificationPages] = useState(() => {
    const saved = localStorage.getItem('NotificationPages');
    return saved ? JSON.parse(saved) : [
      {
        id: 1,
        title: 'New consultation request',
        message: 'John Doe has requested a consultation for tomorrow at 2:00 PM.',
        time: '10 minutes ago',
        read: false,
        type: 'request'
      },
      {
        id: 2,
        title: 'Upcoming appointment',
        message: 'Your consultation with Jane Smith starts in 30 minutes.',
        time: '1 hour ago',
        read: false,
        type: 'reminder'
      },
      {
        id: 3,
        title: 'Payment received',
        message: 'You have received a payment of $150 for your recent consultation.',
        time: '3 hours ago',
        read: true,
        type: 'payment'
      },
      {
        id: 4,
        title: 'System maintenance',
        message: 'The platform will undergo maintenance tonight from 1:00 AM to 3:00 AM.',
        time: '1 day ago',
        read: true,
        type: 'system'
      },
      {
        id: 5,
        title: 'Consultation cancelled',
        message: 'Your consultation with Michael Brown has been cancelled.',
        time: '2 days ago',
        read: true,
        type: 'alert'
      }
    ];
  });

  const [activeTab, setActiveTab] = useState('all');

  // Persist NotificationPages in localStorage
  useEffect(() => {
    localStorage.setItem('NotificationPages', JSON.stringify(NotificationPages));
  }, [NotificationPages]);

  const markAsRead = (id) => {
    setNotificationPages(NotificationPages.map(NotificationPage =>
      NotificationPage.id === id ? { ...NotificationPage, read: true } : NotificationPage
    ));
  };

  const markAllAsRead = () => {
    setNotificationPages(NotificationPages.map(NotificationPage => ({ ...NotificationPage, read: true })));
  };

  const deleteNotificationPage = (id) => {
    setNotificationPages(NotificationPages.filter(NotificationPage => NotificationPage.id !== id));
  };

  const deleteAllNotificationPages = () => {
    setNotificationPages([]);
  };

  // Generate tabs dynamically
  const tabs = ['all', 'unread', ...new Set(NotificationPages.map(n => n.type))];

  const filteredNotificationPages = NotificationPages.filter(NotificationPage => {
    if (activeTab === 'all') return true;
    if (activeTab === 'unread') return !NotificationPage.read;
    return NotificationPage.type === activeTab;
  });

  const getIconByType = (type) => {
    switch (type) {
      case 'request': return <FiBell className="text-blue-500 text-xl" />;
      case 'reminder': return <FiClock className="text-yellow-500 text-xl" />;
      case 'payment': return <FiCheck className="text-green-500 text-xl" />;
      case 'alert': return <FiAlertCircle className="text-red-500 text-xl" />;
      case 'system': return <FiInfo className="text-purple-500 text-xl" />;
      default: return <FiBell className="text-gray-500 text-xl" />;
    }
  };

  const unreadCount = NotificationPages.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 md:p-8">
      <div className=" mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition">
        
        {/* Header */}
        <div className="bg-primary p-6 text-white flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className=' relative'>
              <FiBell className="text-2xl" />
            {unreadCount > 0 && (
                <span className=" absolute -top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full ml-2">{unreadCount}</span>
              )}
            </div>
            <h1 className="text-2xl font-bold">
              NotificationPages 
            </h1>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={markAllAsRead}
              className="px-3 py-1 border border-primary bg-white text-primary rounded-md text-sm hover:bg-white/90 transition"
            >
              Mark all as read
            </button>
            <button
              onClick={deleteAllNotificationPages}
              className="px-3 py-1 bg-red-600 rounded-md text-sm hover:bg-red-700 transition"
            >
              Delete all
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex -mb-px overflow-x-auto">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-3 text-sm font-medium transition whitespace-nowrap ${
                  activeTab === tab
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-500 hover:text-gray-500 dark:hover:text-gray-300'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        {/* NotificationPages List */}
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {filteredNotificationPages.length === 0 ? (
            <div className="p-8 text-center text-gray-500 dark:text-gray-400">
              No NotificationPages found
            </div>
          ) : (
            filteredNotificationPages.map(NotificationPage => (
              <div
                key={NotificationPage.id}
                className={`p-4 transition duration-300 ${
                  !NotificationPage.read ? 'bg-indigo-50 dark:bg-indigo-900' : 'bg-white dark:bg-gray-800'
                }`}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 pt-1">
                    {getIconByType(NotificationPage.type)}
                  </div>
                  <div className="ml-3 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className={`text-sm font-medium ${!NotificationPage.read ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-300'}`}>
                        {NotificationPage.title}
                      </h3>
                      <span className="text-xs text-gray-500">{NotificationPage.time}</span>
                    </div>
                    <p className={`text-sm ${!NotificationPage.read ? 'text-gray-600 dark:text-gray-200' : 'text-gray-500 dark:text-gray-400'}`}>
                      {NotificationPage.message}
                    </p>
                    <div className="mt-2 flex space-x-3">
                      {!NotificationPage.read && (
                        <button
                          onClick={() => markAsRead(NotificationPage.id)}
                          className="text-xs text-primary hover:text-indigo-800 dark:text-indigo-400"
                        >
                          Mark as read
                        </button>
                      )}
                      <button
                        onClick={() => deleteNotificationPage(NotificationPage.id)}
                        className="text-xs text-gray-500 hover:text-gray-500 dark:hover:text-gray-300"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 dark:bg-gray-700 px-6 py-3 text-right">
          <button className="text-sm text-gray-500 hover:text-gray-500 dark:text-gray-300">
            View older NotificationPages
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;