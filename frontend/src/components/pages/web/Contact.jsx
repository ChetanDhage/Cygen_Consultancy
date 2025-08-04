import React, { useState } from 'react'
import Footer from '../home/Footer'
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaPaperPlane, FaTwitter } from 'react-icons/fa'
import { MdSupportAgent } from 'react-icons/md';
import Navbar from '../../Navbar';
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
    <div className=' dark:bg-[#090d13] bg-white/90'>
      
      <Navbar/>
      <section className="py-16 bg-gradient-to-r from-primaryLight to-indigo-50 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-4xl font-bold mb-6 text-dark dark:text-white">Contact CyGen</h1>
          <p className="text-md text-gray-600 dark:text-gray-300 mb-8">
            We'd love to hear from you! Reach out with questions, feedback, or partnership inquiries.          </p>
        </div>
      </section>

      {/* Contact Content */}
      <div className="max-w-6xl mx-auto px-4 py-16 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white  dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-800 p-8 shadow-xl">
            <div className="flex items-center mb-8">
              <div className="p-3 rounded-lg bg-gradient-to-r from-primary to-cyan-500 mr-4">
                <FaPaperPlane className="text-white text-xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-600 dark:text-white">Send Us a Message</h2>
            </div>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-gray-500 dark:text-gray-300 font-medium">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-gray-500 dark:text-gray-300 font-medium">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="you@company.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block mb-2 text-gray-500 dark:text-gray-300 font-medium">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-gray-500 dark:text-gray-300"
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
                <label className="block mb-2 text-gray-500 dark:text-gray-300 font-medium">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-primary to-cyan-600 text-white font-medium rounded-xl hover:from-primary hover:to-cyan-500 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="dark:bg-gradient-to-br dark:from-gray-900 dark:to-[#0a1125] rounded-2xl p-8 text-white shadow-xl">
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6 dark:text-white text-gray-600">Get In Touch</h2>
              <p className="text-gray-500 mb-8">
                Our team is ready to assist with your technical challenges. Contact us directly or connect with us on our social channels.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-primary/20 mr-4 mt-1">
                    <FaEnvelope className="text-primary text-xl" />
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
                  { icon: <FaTwitter />, color: "hover:text-primary" },
                  { icon: <FaLinkedin />, color: "hover:text-primary" },
                  { icon: <FaFacebook />, color: "hover:text-primary" },
                  { icon: <FaGithub />, color: "hover:text-primary" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`w-12 h-12 rounded-full dark:bg-gray-800 flex items-center justify-center border text-gray-400 text-lg transition-colors ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="mt-12 p-6 dark:bg-gray-800/50 rounded-xl border dark:border-gray-700">
              <h3 className="font-bold flex items-center mb-3 dark:text-white text-black">
                <MdSupportAgent className="text-cyan-800 mr-2 " />
                24/7 Technical Support
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Our expert team is available around the clock to resolve your technical issues.
              </p>
              <button className="w-full py-3 bg-gradient-to-r from-cyan-600 to-primary rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
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