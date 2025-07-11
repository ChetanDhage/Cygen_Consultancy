import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaPaperPlane, FaRobot } from 'react-icons/fa';

const Footer = () => {
  return (
    <div id='contact' className="bg-gradient-to-r from-green-500 to-cyan-500 text-white">
      {/* Call to Action */}
      <div className="text-center py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Ready to Solve Your Technical Challenges?</h2>
        <p className="text-lg mb-6">Join thousands of professionals who use CyGen to connect with domain experts in real-time</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-white text-green-600 font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition">Find an Expert Now</button>
          <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-green-600 transition">Become a Consultant</button>
        </div>
      </div>

      {/* Footer */}
      <footer className="dark:bg-[#090d13] text-gray-300 pt-12 pb-8 px-6 md:px-20 relative">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Logo & Social */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-green-600 p-2 rounded-full">
                <FaPaperPlane className="text-white" />
              </div>
              <span className="text-xl font-semibold text-white">CyGen</span>
            </div>
            <p className="mb-4">Connecting technical experts with those who need their knowledge, instantly and securely.</p>
            <div className="flex gap-4 text-white text-lg">
              <FaFacebookF />
              <FaTwitter />
              <FaLinkedinIn />
              <FaGithub />
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-white mb-3">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>IT Infrastructure</li>
              <li>Network Security</li>
              <li>AI & Machine Learning</li>
              <li>Web Development</li>
              <li>IoT Solutions</li>
              <li>Quantum Tech</li>
            </ul>
          </div>
          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>How It Works</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="font-semibold text-white mb-3">Subscribe</h4>
            <p className="text-sm mb-3">Get the latest updates and news</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-l-lg bg-white text-gray-800 w-full outline-none"
              />
              <button className="bg-green-600 px-4 rounded-r-lg">
                <FaPaperPlane className="text-white" />
              </button>
            </div>
            <p className="text-xs mt-2">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 text-center text-xs text-gray-400">
          © 2025 CyGen. All rights reserved.
        </div>

        {/* Chat Bot Icon */}
        <div className=" fixed bottom-8 right-8">
          <div className="bg-green-600 p-3 rounded-full shadow-lg cursor-pointer hover:scale-105 transition">
            <FaRobot className="text-white text-2xl" />
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;