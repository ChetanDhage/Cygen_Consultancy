import React from 'react'
import Footer from '../home/Footer'
import Navbar from '../../Navbar'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-4xl font-bold mb-6 text-dark dark:text-white">Contact CyGen</h1>
          <p className="text-md text-gray-600 dark:text-gray-300 mb-8">
            We'd love to hear from you! Reach out with questions, feedback, or partnership inquiries.          </p>
        </div>
      </section>
      <div className="p-6 dark:bg-[#090d13]">
        <h1 className="text-3xl font-bold text-center mb-4 text-black dark:text-white">Contact Us</h1>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Contact Form */}
          <div className="w-full md:w-1/2 p-6 rounded-xl shadow-md bg-white dark:bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
            <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">Send a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block mb-1 text-black dark:text-white">Your Name</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white" placeholder="Name" />
              </div>
              <div>
                <label className="block mb-1 text-black dark:text-white">Email Address</label>
                <input type="email" className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block mb-1 text-black dark:text-white">Subject</label>
                <select className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white">
                  <option>General Inquiry</option>
                  <option>Technical Support</option>
                  <option>Partnership</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 text-black dark:text-white">Message</label>
                <textarea className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white" rows="4" placeholder="Your message..."></textarea>
              </div>
              <button type="submit" className="w-full p-2 bg-primary hover:bg-blue-700 text-white rounded-full">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/2 p-6 rounded-xl shadow-md bg-white dark:bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
            <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">Contact Information</h2>
            <div className="space-y-4 text-black dark:text-white">
              <div>
                <h3 className="font-semibold">Office</h3>
                <p>123 Innovation Street, Suite 500<br />Tech City, TC 45678</p>
              </div>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p>+91 98765 43210<br />Mon - Fri, 10am - 6pm</p>
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p>support@example.com<br />info@example.com</p>
              </div>
              <div className="flex gap-4 mt-2">
                <a href="#" className="hover:text-blue-400">Twitter</a>
                <a href="#" className="hover:text-blue-400">LinkedIn</a>
                <a href="#" className="hover:text-blue-400">Facebook</a>
                <a href="#" className="hover:text-blue-400">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
