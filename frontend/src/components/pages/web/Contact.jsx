// import React from 'react'
// import Footer from '../home/Footer'

// const Contact = () => {
//   return (
//     <div>
//       <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-900">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-4xl md:text-4xl font-bold mb-6 text-dark dark:text-white">Contact CyGen</h1>
//           <p className="text-md text-gray-600 dark:text-gray-300 mb-8">
//             We'd love to hear from you! Reach out with questions, feedback, or partnership inquiries.          </p>
//         </div>
//       </section>
//       <div className="p-6 dark:bg-[#090d13]">
//         <h1 className="text-3xl font-bold text-center mb-4 text-black dark:text-white">Contact Us</h1>
//         <div className="flex flex-col md:flex-row gap-6">
//           {/* Contact Form */}
//           <div className="w-full md:w-1/2 p-6 rounded-xl shadow-md bg-white dark:bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
//             <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">Send a Message</h2>
//             <form className="space-y-4">
//               <div>
//                 <label className="block mb-1 text-black dark:text-white">Your Name</label>
//                 <input type="text" className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white" placeholder="Name" />
//               </div>
//               <div>
//                 <label className="block mb-1 text-black dark:text-white">Email Address</label>
//                 <input type="email" className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white" placeholder="you@example.com" />
//               </div>
//               <div>
//                 <label className="block mb-1 text-black dark:text-white">Subject</label>
//                 <select className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white">
//                   <option>General Inquiry</option>
//                   <option>Technical Support</option>
//                   <option>Partnership</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block mb-1 text-black dark:text-white">Message</label>
//                 <textarea className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white" rows="4" placeholder="Your message..."></textarea>
//               </div>
//               <button type="submit" className="w-full p-2 bg-primary hover:bg-blue-700 text-white rounded-full">
//                 Send Message
//               </button>
//             </form>
//           </div>

//           {/* Contact Info */}
//           <div className="w-full md:w-1/2 p-6 rounded-xl shadow-md bg-white dark:bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
//             <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">Contact Information</h2>
//             <div className="space-y-4 text-black dark:text-white">
//               <div>
//                 <h3 className="font-semibold">Office</h3>
//                 <p>123 Innovation Street, Suite 500<br />Tech City, TC 45678</p>
//               </div>
//               <div>
//                 <h3 className="font-semibold">Phone</h3>
//                 <p>+91 98765 43210<br />Mon - Fri, 10am - 6pm</p>
//               </div>
//               <div>
//                 <h3 className="font-semibold">Email</h3>
//                 <p>support@example.com<br />info@example.com</p>
//               </div>
//               <div className="flex gap-4 mt-2">
//                 <a href="#" className="hover:text-blue-400">Twitter</a>
//                 <a href="#" className="hover:text-blue-400">LinkedIn</a>
//                 <a href="#" className="hover:text-blue-400">Facebook</a>
//                 <a href="#" className="hover:text-blue-400">GitHub</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   )
// }

// export default Contact

import React, { useState } from 'react';
import Footer from '../home/Footer';
import { FaEnvelope, FaPhone, FaTwitter, FaLinkedin, FaFacebook, FaGithub, FaPaperPlane } from 'react-icons/fa';
import { MdSupportAgent, MdLightbulbOutline } from 'react-icons/md';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    alert(`Thank you ${formData.name}! Your message has been sent.`);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="dark:bg-[#0a0f1d]">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 dark:from-gray-900 dark:to-[#0a1125]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 right-10 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-600/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
            Connect With Us
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            We're here to help. Reach out for technical support, partnership opportunities, or to learn how CyGen can transform your business.
          </p>
          <div className="flex justify-center gap-4">
            <div className="px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center">
              <MdSupportAgent className="text-blue-600 dark:text-blue-400 mr-2" />
              <span className="text-blue-700 dark:text-blue-300 text-sm">24/7 Support</span>
            </div>
            <div className="px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center">
              <MdLightbulbOutline className="text-purple-600 dark:text-purple-400 mr-2" />
              <span className="text-purple-700 dark:text-purple-300 text-sm">Expert Solutions</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-800 p-8 shadow-xl">
            <div className="flex items-center mb-8">
              <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 mr-4">
                <FaPaperPlane className="text-white text-xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Send Us a Message</h2>
            </div>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-gray-700 dark:text-gray-300 font-medium">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-gray-700 dark:text-gray-300 font-medium">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="you@company.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block mb-2 text-gray-700 dark:text-gray-300 font-medium">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 dark:text-gray-300"
                  required
                >
                  <option value="">Select a topic</option>
                  <option value="support">Technical Support</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="consulting">Expert Consultation</option>
                  <option value="feedback">Product Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block mb-2 text-gray-700 dark:text-gray-300 font-medium">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-xl hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-br from-gray-900 to-[#0a1125] rounded-2xl p-8 text-white shadow-xl">
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-300 mb-8">
                Our team is ready to assist with your technical challenges. Contact us directly or connect with us on our social channels.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-blue-600/20 mr-4 mt-1">
                    <FaEnvelope className="text-blue-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email Us</h3>
                    <p className="text-gray-400">query@cygen.co.in</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                 
                     </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                {[
                  { icon: <FaTwitter />, color: "hover:text-blue-400" },
                  { icon: <FaLinkedin />, color: "hover:text-blue-300" },
                  { icon: <FaFacebook />, color: "hover:text-blue-300" },
                  { icon: <FaGithub />, color: "hover:text-gray-300" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 text-lg transition-colors ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-gray-800/50 rounded-xl border border-gray-700">
              <h3 className="font-bold flex items-center mb-3">
                <MdSupportAgent className="text-cyan-400 mr-2" />
                24/7 Technical Support
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Our expert team is available around the clock to resolve your technical issues.
              </p>
              <button className="w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                Request Support Session
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default Contact;