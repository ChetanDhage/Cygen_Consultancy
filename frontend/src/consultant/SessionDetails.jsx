import React from "react";
import { FaCalendarAlt, FaClock, FaVideo, FaMoneyBillWave, FaFileWord, FaFilePdf, FaCheck, FaPlus } from "react-icons/fa";

const SessionDetails = () => {
  return (
    <main>
      <header className=" bg-white px-6 pb-2 w-full flex justify-between items-center">
          <h2 className="text-xl font-bold">Session Data</h2>
      </header>
      <div className=" w-full flex gap-4 mx-auto p-6 bg-gray-100 rounded-lg shadow-md ">


        <div className=" bg-white p-6 rounded-lg ">
          <div className=" my-4">
            <h3 className="text-lg font-semibold text-gray-600">Subject: Financial planning for startup</h3>
            <br />
            <div className=' flex gap-2 border border-primary bg-primaryLight  rounded-r-full px-6 py-4'>
              <div className='w-10 h-10 rounded-full flex items-center justify-center font-bold text-white bg-primary'>
                AR
              </div>
              <div>
                <p className="text-md text-gray-600">Alex Reynolds</p>
                <p className="text-xs text-gray-600">CEO, TechStart Inc.</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-600 mb-2">Session Details</h3>
           
            <div className="flex items-center space-x-4 mb-1">
              <FaCalendarAlt className="text-gray-500" />
              <div className="w-full flex justify-between items-center gap-4">
                <span className="text-gray-600">Date & Time</span>
                <p className="font-medium">Tomorrow, Oct 16, 2023 at 2:00 PM - 3:30 PM</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaClock className="text-gray-500" />
              <div className="w-full flex justify-between items-center gap-4">
                <span className="text-gray-600">Duration</span>
                <p className="font-medium">90 minutes</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-600 mb-2">Session Link</h3>
            <div className="w-full space-x-4 mb-1 flex justify-between">
              
              <div className=" flex gap-2 items-center">
                <FaVideo className="text-gray-500" />
                <span className="text-gray-600">Video Call</span>
              </div>
              <div>
                <p className="font-medium">Join Meet</p>
              </div>
            </div>
            <div className="w-full flex justify-between items-center gap-4 space-x-4">
              <div className=" flex gap-2 items-center">
                <FaMoneyBillWave className="text-gray-500" />
              <span className="text-gray-600">Fee</span>
              </div>
                
                <p className="font-medium">$300</p>
              
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-600 mb-2">Query Description</h3>
            <p className="text-gray-500">
              We're launching a new productivity app in Q4 and need help refining our go-to-market strategy.
              Specifically looking for guidance on: - Target audience segmentation - Pricing strategy -
              Digital marketing channels prioritization - Pre-launch buzz creation We have a $50k marketing
              budget for the launch quarter. Would appreciate your expertise in creating a focused, effective strategy.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-600 mb-2">Attached Documents</h3>
            <div className="flex items-center space-x-2 mb-2">
              <input type="checkbox" className="rounded text-primary" />
              <FaFileWord className="text-primary" />
              <span className="text-gray-500">Marketing_Plan.docx</span>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" className="rounded text-primary" />
              <FaFilePdf className="text-red-500" />
              <span className="text-gray-500">Product_Overview.pdf</span>
            </div>
          </div>

          <div className="border-t border-b border-gray-200 py-4 mb-6">
            <p className="text-gray-600">Session ID: #5ES-2023-0876</p>
            <p className="text-gray-600">Booked on: Oct 12, 2023</p>
          </div>
          <button className="flex items-center justify-center space-x-2 text-white bg-primary hover:bg-primary/90 w-full text-center font-semibold p-4">
            <FaPlus />
            <span>Add New Follow-up</span>
          </button>
        </div>

        <div className=" w-full bg-white p-6 rounded-lg ">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-600 mb-2">Session Preparation</h3>
            <div className="flex items-center justify-between space-x-2 mb-2 text-sm">
              <div className="flex gap-2 items-center">
                <FaCheck className="text-green-500" />
                <span className="text-gray-500">Payment Confirmed</span>
              </div>
              <span className=" text-primary ml-2">$300 received</span>
            </div>

            <div className="flex items-center space-x-2 mb-2 text-sm">
              <div className="flex gap-2 items-center">
                <FaCheck className="text-green-500" />
                <span className="text-gray-500">Calendar Invite Sent</span>
              </div>
              <span className="  text-primary ml-2">Added to your calendar</span>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-600 mb-2">Review Materials</h3>
            <div className="flex items-center space-x-2 mb-2 text-sm">
              <input type="checkbox" className="rounded text-primary" />
              <span className="text-gray-500">2 documents attached</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <input type="checkbox" className="rounded text-primary" />
              <span className="text-gray-500">Prepare Questions</span>
              <span className="text-gray-500 ml-2">Outline key discussion points</span>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-600 mb-2">Follow-up Sessions</h3>
            <div className="border border-primary p-2 rounded-full text-center ">
              <div className="flex items-center justify-center space-x-2  text-sm animate-pulse">
                <span className="text-gray-900">Session #2</span>
                <span className="text-gray-900">Scheduled</span>
              </div>
              <span className="text-gray-500 text-xs">Oct 23, 2023 | 3:00 PM</span>
            </div>
          </div>
        </div>


      </div>
    </main>
  );
};

export default SessionDetails;