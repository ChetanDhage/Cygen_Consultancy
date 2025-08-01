import React from 'react';
import Footer from '../home/Footer';
import Navbar from '../../Navbar';

const categories = [
  {
    title: 'IT Infrastructure',
    desc: 'Network, servers, cloud setup and management',
    tags: ['IaC', 'CI/CD', 'Monitoring', 'Cloud'],
    icon: '🖥️',
  },
  {
    title: 'Security',
    desc: 'Cybersecurity, threat analysis, and vulnerability management',
    tags: ['Pentesting', 'Compliance', 'Firewall', 'Encryption'],
    icon: '🛡️',
  },
  {
    title: 'AI & Machine Learning',
    desc: 'Deep learning, neural networks, and predictive analytics',
    tags: ['TensorFlow', 'PyTorch', 'NLP', 'CV'],
    icon: '🧠',
  },
  {
    title: 'IT Infrastructure',
    desc: 'Network, servers, cloud setup and management',
    tags: ['IaC', 'CI/CD', 'Monitoring', 'Cloud'],
    icon: '🖥️',
  },
  {
    title: 'Security',
    desc: 'Cybersecurity, threat analysis, and vulnerability management',
    tags: ['Pentesting', 'Compliance', 'Firewall', 'Encryption'],
    icon: '🛡️',
  },
  {
    title: 'AI & Machine Learning',
    desc: 'Deep learning, neural networks, and predictive analytics',
    tags: ['TensorFlow', 'PyTorch', 'NLP', 'CV'],
    icon: '🧠',
  },
];

const Category = () => {
  return (
    <>
      <Navbar />
      <div className=" w-full bg-primaryLight dark:bg-[#090d13] text-gray-600 dark:text-white py-16 lg:px-4 px-2">
        {/* Section Top */}
        <div className=" w-10/12 m-auto flex flex-col lg:flex-row items-center justify-between gap-10 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold mb-4">Explore <span className="text-primary">Expert Categories</span></h2>
            <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
              Find specialized consultants across technical domains. Connect with professionals who understand your challenges.
            </p>
            <div className="flex gap-4">
              <button className="bg-primary text-white px-6 py-2 rounded">Find an Expert</button>
              <button className="border border-primary text-primary px-6 py-2 rounded hover:bg-primary dark:hover:bg-primary">
                Browse Categories
              </button>
            </div>
          </div>
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Categories" className="rounded-xl shadow-md w-full lg:w-1/2" />
        </div>

        {/* Technical Domains */}
        <div className="text-center my-10">
          <h2 className="text-3xl font-semibold mb-2">Technical Domains</h2>
          <p className="text-gray-600 dark:text-gray-300">Browse through our specialized categories to find the perfect expert.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#0b1225] rounded-xl p-6 shadow-md"
            >
              <div className="text-4xl mb-4">{cat.icon}</div>
              <h3 className="font-bold text-xl mb-2">{cat.title}</h3>
              <p className="mb-4 text-gray-500 dark:text-gray-200">{cat.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {cat.tags.map((tag, tagIdx) => (
                  <span key={tagIdx} className="bg-primary dark:bg-primary text-white  px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <button className="text-primary dark:text-primary hover:underline">View Experts →</button>
            </div>
          ))}
        </div>

      </div>
      <Footer />
    </>

  );
};

export default Category;