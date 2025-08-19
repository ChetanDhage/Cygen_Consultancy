// import React, { useState } from 'react';
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaLinkedinIn,
//   FaGithub,
//   FaPaperPlane,
//   FaRobot,
//   FaArrowRight,
// } from 'react-icons/fa';
// import { MdOutlineEmail } from 'react-icons/md';
// import logo from '../../../assets/logo.png'; // Update as needed

// const Footer = () => {
//   const [email, setEmail] = useState('');
//   const [isHovered, setIsHovered] = useState(false);
//   const [activeCategory, setActiveCategory] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     toast.success(`Thank you for subscribing with: ${email}`);
//     setEmail('');
//   };

//   const categories = [
//     { icon: <div className="w-3 h-3 bg-primary rounded-full mr-2" />, name: 'IT Infrastructure' },
//     { icon: <div className="w-3 h-3 bg-purple-500 rounded-full mr-2" />, name: 'Network Security' },
//     { icon: <div className="w-3 h-3 bg-green-500 rounded-full mr-2" />, name: 'AI & Machine Learning' },
//     { icon: <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2" />, name: 'Web Development' },
//     { icon: <div className="w-3 h-3 bg-red-500 rounded-full mr-2" />, name: 'IoT Solutions' },
//     { icon: <div className="w-3 h-3 bg-cyan-500 rounded-full mr-2" />, name: 'Quantum Tech' },
//   ];

//   return (
//     <div id="contact" className="dark:bg-gradient-to-br  bg-white/90 dark:from-gray-900 dark:to-black text-white relative overflow-hidden">
//       {/* Background Blobs */}
//       <div className="absolute top-0 left-0 w-full h-full opacity-5">
//         <div className="absolute top-10 left-[10%] w-64 h-64 bg-primary rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 right-[15%] w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
//         <div className="absolute top-1/3 right-[25%] w-40 h-40 bg-cyan-500 rounded-full blur-3xl"></div>
//       </div>

//       {/* CTA */}
//       <div className="text-center py-16 px-6 max-w-6xl mx-auto relative z-10">
//         <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-primary/20 to-cyan-500/20 rounded-full mb-6 border border-primary/30 animate-bounce">
//           <span className="text-sm font-medium uppercase bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
//             Join Our Community
//           </span>
//         </div>
//         <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
//           Ready to Solve Your Technical Challenges?
//         </h2>
//         <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
//           Join thousands of professionals who use Worklify to connect with domain experts in real-time
//         </p>

//         <div className="flex justify-center gap-6 flex-wrap">
//           <button
//             className="relative bg-gradient-to-r from-primary to-cyan-600 font-medium px-8 py-4 rounded-xl hover:from-primary hover:to-cyan-500 transition-all duration-300 group overflow-hidden"
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//           >
//             <span className="relative z-10 flex items-center">
//               Find an Expert Now
//               <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//             </span>
//             <div className={`absolute inset-0 bg-gradient-to-r from-primary to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isHovered ? 'animate-pulse' : ''}`} />
//           </button>

//           <button className="bg-transparent border-2 border-primary text-primary px-8 py-4 rounded-xl hover:bg-primary/20 transition-all duration-300 group flex items-center">
//             <span className=" transition-colors">Become a Consultant</span>
//             <div className="ml-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center  transition-colors">
//               <FaPaperPlane className="text-white text-sm transform animate-bounce" />
//             </div>
//           </button>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="pt-16 pb-12 px-6 md:px-10 relative z-10">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
//             {/* Logo & Info */}
//             <div className="lg:col-span-2">
//               <div className="flex items-center gap-3 mb-6">
//                 <img src={logo} alt="Worklify Logo" className="h-10 w-auto object-contain" />
//               </div>
//               <p className="text-gray-700 dark:text-gray-200 mb-6 max-w-md">
//                 Connecting technical experts with those who need their knowledge, instantly and securely.
//                 Our platform ensures top-tier solutions for complex technical challenges.
//               </p>
//               <div className="flex gap-5 mb-6">
//                 {[FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub].map((Icon, index) => (
//                   <div
//                     key={index}
//                     className="w-10 h-10 rounded-full dark:bg-gray-800 flex items-center justify-center cursor-pointer hover:bg-primary transition-all duration-300 group border"
//                   >
//                     <Icon className="text-gray-700 dark:text-gray-200 group-hover:text-white transition-colors" />
//                   </div>
//                 ))}
//               </div>
//               <div className="flex items-center text-gray-700 dark:text-gray-200 hover:text-white transition-colors">
//                 <MdOutlineEmail className="mr-3 text-primary" />
//                 <span>query@Worklify.co.in</span>
//               </div>
//             </div>

//             {/* Categories */}
//             <div>
//               <h4 className="font-bold text-xl text-gray-700 dark:text-gray-200 mb-6 pb-2 border-b border-gray-800">Categories</h4>
//               <ul className="space-y-4">
//                 {categories.map((category, index) => (
//                   <li
//                     key={index}
//                     className="flex items-center text-gray-700 dark:text-gray-200 hover:text-white cursor-pointer transition-colors group"
//                     onMouseEnter={() => setActiveCategory(index)}
//                     onMouseLeave={() => setActiveCategory(null)}
//                   >
//                     {category.icon}
//                     <span className="group-hover:translate-x-1 transition-transform">{category.name}</span>
//                     {activeCategory === index && (
//                       <div className="ml-2 w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Subscribe */}
//             <div className="lg:col-span-2">
//               <h4 className="font-bold text-xl text-gray-700 dark:text-gray-200 mb-6 pb-2 border-b border-gray-800">Stay Updated</h4>
//               <p className="text-gray-700 dark:text-gray-200 mb-6">
//                 Get the latest updates, news and technical insights delivered to your inbox
//               </p>
//               <form onSubmit={handleSubmit} className="mb-4">
//                 <div className="relative">
//                   <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="Your email address"
//                     required
//                     className="w-full px-5 py-4 rounded-xl dark:bg-gray-800 border dark:border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
//                   />
//                   <button
//                     type="submit"
//                     className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-primary to-cyan-600 p-3 rounded-xl hover:from-primary hover:to-cyan-500 transition-all"
//                   >
//                     <FaPaperPlane className="text-white" />
//                   </button>
//                 </div>
//               </form>
//               <p className="text-xs text-gray-500">We respect your privacy.</p>
//             </div>
//           </div>

//           {/* Bottom Footer */}
//           <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
//             <div className="text-gray-500 text-sm mb-4 md:mb-0">
//               © 2025 Worklify. All rights reserved.
//             </div>
//             <div className="flex space-x-6 flex-wrap justify-center text-sm">
//               {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Sitemap'].map((item, index) => (
//                 <a
//                   key={index}
//                   href="#"
//                   className="text-gray-500 hover:text-gray-300 transition-colors"
//                 >
//                   {item}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* ChatBot Icon */}
//         <div className="fixed bottom-8 right-8 z-50">
//           <div className="relative">
//             <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-xs font-bold animate-ping" />
//             <div className="bg-gradient-to-br from-primary to-cyan-600 p-4 rounded-full shadow-xl cursor-pointer hover:scale-105 transition-all duration-300 group">
//               <FaRobot className="text-white text-2xl group-hover:animate-bounce" />
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Footer;


import React, { useState } from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaRobot,
  FaArrowRight,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
} from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import logo from '../../../assets/logo.png';

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const solutions = [
    'Cloud Architecture',
    'Cybersecurity',
    'Data Analytics',
    'DevOps',
    'Blockchain',
    'AI Integration'
  ];

  const company = [
    'About Us',
    'Careers',
    'Case Studies',
    'Press',
    'Partners',
    'Contact'
  ];

  const resources = [
    'Blog',
    'Whitepapers',
    'Webinars',
    'Documentation',
    'Community',
    'Support'
  ];

  return (
    <div id="contact" className="bg-gray-900 text-white relative overflow-hidden">
      {/* Geometric background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-repeat bg-[length:40px_40px]" style={{ backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)' }}></div>
      </div>

      {/* Main footer content */}
      <footer className="pt-20 pb-12 px-6 md:px-10 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company info */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img src={logo} alt="Worklify Logo" className="h-10 w-auto object-contain" />
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">Worklify</span>
              </div>
              <p className="text-gray-400 mb-6">
                Empowering businesses with cutting-edge technical solutions through our global network of experts.
              </p>
              <div className="flex gap-5 mb-6">
                {[FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center cursor-pointer hover:bg-primary transition-all duration-300 group"
                  >
                    <Icon className="text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="font-bold text-lg text-white mb-6 pb-2 border-b border-gray-700">Solutions</h4>
              <ul className="space-y-3">
                {solutions.map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className={`flex items-center text-gray-400 hover:text-primary transition-colors ${activeLink === `sol-${index}` ? 'text-primary' : ''}`}
                      onMouseEnter={() => setActiveLink(`sol-${index}`)}
                      onMouseLeave={() => setActiveLink(null)}
                    >
                      <FaArrowRight className="mr-2 text-xs opacity-0 transition-opacity duration-200" style={{ opacity: activeLink === `sol-${index}` ? 1 : 0 }} />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company links */}
            <div>
              <h4 className="font-bold text-lg text-white mb-6 pb-2 border-b border-gray-700">Company</h4>
              <ul className="space-y-3">
                {company.map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className={`flex items-center text-gray-400 hover:text-primary transition-colors ${activeLink === `comp-${index}` ? 'text-primary' : ''}`}
                      onMouseEnter={() => setActiveLink(`comp-${index}`)}
                      onMouseLeave={() => setActiveLink(null)}
                    >
                      <FaArrowRight className="mr-2 text-xs opacity-0 transition-opacity duration-200" style={{ opacity: activeLink === `comp-${index}` ? 1 : 0 }} />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div>
              <h4 className="font-bold text-lg text-white mb-6 pb-2 border-b border-gray-700">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-400">123 Tech Park, Silicon Valley, CA 94025</span>
                </div>
                <div className="flex items-center">
                  <FaPhoneAlt className="text-primary mr-3" />
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MdOutlineEmail className="text-primary text-xl mr-3" />
                  <span className="text-gray-400">contact@worklify.com</span>
                </div>
                <div className="flex items-center">
                  <FaClock className="text-primary mr-3" />
                  <span className="text-gray-400">Mon-Fri: 9AM - 6PM PST</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom footer */}
          <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Worklify Technologies. All rights reserved.
            </div>
            <div className="flex space-x-6 flex-wrap justify-center text-sm">
              {['Privacy Policy', 'Terms of Service', 'Security', 'GDPR'].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-500 hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* CTA floating button */}
        {/* <div className="fixed bottom-8 right-8 z-50">
          <button
            className="relative bg-gradient-to-r from-primary to-cyan-600 p-4 rounded-full shadow-2xl cursor-pointer hover:scale-105 transition-all duration-300 group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <FaRobot className="text-white text-2xl" />
            {isHovered && (
              <div className="absolute -top-12 -left-32 bg-gray-800 px-4 py-2 rounded-lg shadow-lg whitespace-nowrap text-sm">
                Need help? Chat with us!
                <div className="absolute -bottom-1 right-4 w-3 h-3 bg-gray-800 transform rotate-45"></div>
              </div>
            )}
          </button>
        </div> */}
      </footer>
    </div>
  );
};

export default Footer;