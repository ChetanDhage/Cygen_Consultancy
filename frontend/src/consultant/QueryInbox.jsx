import React from 'react';
import { FaSearch, FaFileExcel, FaFilePdf } from 'react-icons/fa';

const queries = [
    {
        id: 1,
        name: 'Alex Reynolds',
        time: '2h ago',
        title: 'Financial planning for startup',
        status: 'New',
        initials: 'AR',
        color: 'bg-blue-100 text-blue-500',
    },
    {
        id: 2,
        name: 'Priya Sharma',
        time: '5h ago',
        title: 'HR policy consultation',
        status: 'Accepted',
        initials: 'PS',
        color: 'bg-green-100 text-green-600',
    },
    {
        id: 3,
        name: 'Thomas Wright',
        time: 'Yesterday',
        title: 'IT infrastructure review',
        status: 'Pending',
        initials: 'TW',
        color: 'bg-yellow-100 text-yellow-600',
    },
    {
        id: 4,
        name: 'Maria Johnson',
        time: '2 days ago',
        title: 'Brand identity development',
        status: 'Rejected',
        initials: 'MJ',
        color: 'bg-red-100 text-red-600',
    }
];

const QueryInbox = () => {
    return (
        <main>
            <header className=" bg-white p-6 w-full flex justify-between items-center">
                <div>
                    <h2 className="text-xl font-bold">Query Inbox</h2>
                    <p className="text-sm text-gray-600">Welcome back, John</p>
                </div>
            </header>
            <div className="flex p-6 gap-6">

                {/* Left Panel */}
                <div className="w-1/3 bg-white rounded-xl shadow p-4">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-bold">Query Inbox</h2>
                        <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">50</span>
                    </div>

                    {queries.map((query) => (
                        <div
                            key={query.id}
                            className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 cursor-pointer"
                        >
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${query.color}`}>
                                    {query.initials}
                                </div>
                                <div>
                                    <p className="text-sm font-semibold line-clamp-1">{query.name}</p>
                                    <p className="text-xs text-gray-500 line-clamp-1">{query.title}</p>
                                </div>
                            </div>
                            <div className="text-right text-xs">
                                <p className="text-gray-400 my-1">{query.time}</p>
                                <span
                                    className={`text-xs font-medium px-2 py-0.5 my-1 rounded-full ${query.status === 'New'
                                        ? 'bg-blue-100 text-blue-500'
                                        : query.status === 'Accepted'
                                            ? 'bg-green-100 text-green-600'
                                            : query.status === 'Pending'
                                                ? 'bg-yellow-100 text-yellow-600'
                                                : 'bg-red-100 text-red-600'
                                        }`}
                                >
                                    {query.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Panel */}
                <div className="flex-1 bg-white rounded-xl shadow p-6">
                    {/* Search and Filter */}
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg w-1/2">
                            <FaSearch className="text-gray-400 mr-2" />
                            <input
                                type="text"
                                placeholder="Search queries..."
                                className="bg-transparent outline-none w-full"
                            />
                        </div>
                        <button className="bg-primary text-white px-4 py-2 rounded-lg font-semibold">Filter</button>
                    </div>

                    {/* Query Details */}
                    <div className="border rounded-lg p-5">
                        <div className="flex justify-between gap-2 mb-2">

                            <div>
                                <h3 className="text-lg font-semibold">Subject: Financial planning for startup</h3>
                                <br />
                                <div className=' flex gap-2'>
                                    <div className='w-10 h-10 rounded-full flex items-center justify-center font-bold text-primary  bg-primary-light'>
                                        AR
                                    </div>
                                    <div>
                                        <p className="text-md text-gray-800">Alex Reynolds</p>
                                        <p className="text-xs text-gray-600">CEO, TechStart Inc.</p>
                                    </div>
                                </div>
                            </div>
                            <span className="text-sm  text-primary bg-blue-100 px-2 py-1 rounded-full w-fit h-fit">New</span>
                        </div>
                        <p className="text-sm text-gray-700 mb-4">
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
                </div>
            </div>
        </main>

    );
};

export default QueryInbox;
