import React from 'react';
import { BsEnvelopeAtFill, BsLinkedin } from 'react-icons/bs';
import FounderImage from "../../../assets/founder.jpg";


const OurValues = [
  {
    icon: 'fas fa-book-open',
    title: 'Empowerment through Knowledge',
    desc: 'We believe that knowledge is the most powerful tool to combat cyber threats.',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: 'fas fa-users',
    title: 'Community and Inclusivity',
    desc: 'We strive to make cybersecurity education accessible to all, regardless of background or experience level.',
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: 'fas fa-sync-alt',
    title: 'Continuous Learning',
    desc: 'In the fast-paced world of cybersecurity, staying updated is key. We promote lifelong learning and skill development.',
    color: 'bg-purple-100 text-purple-600'
  }
];

const About = () => {
  return (
    <div className="bg-gray-50 dark:bg-[#090d13] text-gray-800 dark:text-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-4xl font-bold mb-6 text-dark dark:text-white">Innovating Security, Protecting Success</h1>
          <p className="text-md text-gray-600 dark:text-gray-300 mb-8">
            CyGen bridges the gap between technical challenges and expert solutions, making specialized knowledge accessible to everyone.
          </p>
          <a href="how-it-works.html" className="inline-block px-6 py-3 bg-primary rounded-lg text-white font-medium hover:bg-secondary transition">How It Works</a>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img src={FounderImage} alt="Surjit Singh Konwar" className="w-full h-full object-cover" /></div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-dark dark:text-white mb-6">About CyGen</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              At CyGen, we believe that technical challenges shouldn't slow down innovation. Our mission is to democratize access to specialized technical knowledge by connecting organizations and individuals with vetted experts across all domains of technology. </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              we've grown from a small team of engineers to a global network of thousands of experts, helping clients solve complex technical problems efficiently and effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50 dark:bg-[#090d13]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-dark dark:text-white mb-4">Our Core Values</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-16">Guiding principles that shape our mission</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {OurValues.map((val, idx) => (
              <div key={idx} className="  p-6 rounded-xl shadow-sm bg-white dark:bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center m-auto mb-4 ${val.color}`}>
                  <i className={`${val.icon} text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold mb-3">{val.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-dark dark:text-white mb-4">Meet Our Founder</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-16">Guiding CyGen with global experience and expertise</p>
          <div className="flex justify-center">
            <div className="team-card bg-white dark:bg-[#0f172a] p-6 rounded-xl w-full max-w-md">
              <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                <img src={FounderImage}  alt="Surjit Singh Konwar" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-center mb-1">Surjit Singh Konwar</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-4">Founder at CyGen.co.in</p>
              <p className="text-gray-600 dark:text-gray-300 text-xs text-center mb-2">18+ years experience as Cybersecurity Consultant, Architect, and Advisor globally.</p>
              <p className="text-gray-500 dark:text-gray-300 text-sm text-center">EMBA in IT & DA, Cloud and Cyber Security Leader Advisor, Cyber Security Principal Architect, CISM, CEH, AWS, Azure, GCP, Cisco, DevOps, PCNSE, CCSK, PSPO.</p>
              <div className="flex justify-center gap-3 mt-4">
                <a href="#" className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-200"><BsLinkedin /></a>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200"><BsEnvelopeAtFill /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
