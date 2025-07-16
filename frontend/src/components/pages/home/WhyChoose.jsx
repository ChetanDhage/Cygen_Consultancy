import React from 'react';
import { BsLightningCharge, BsShieldCheck, BsChatDots, BsArrowRight } from 'react-icons/bs';

const features = [
  {
    title: 'Instant Connections',
    desc: 'Get matched with available experts in seconds, not days. Solve urgent problems immediately.',
    icon: <BsLightningCharge size={24} className="text-primary" />,
    bgColor: 'bg-primary text-primary',
    linkColor: 'text-primary'
  },
  {
    title: 'Verified Experts',
    desc: 'All consultants undergo rigorous vetting to ensure top-quality expertise in their domains.',
    icon: <BsShieldCheck size={24} className="text-primary" />,
    bgColor: 'bg-primary text-primary',
    linkColor: 'text-primary'
  },
  {
    title: 'Multiple Channels',
    desc: 'Connect via chat, audio, or video – whatever works best for your consultation needs.',
    icon: <BsChatDots size={24} className="text-primary" />,
    bgColor: 'bg-primary text-primary',
    linkColor: 'text-primary'
  }
];

const WhyChoose = () => {
  return (
    <section id='about' className="bg-[#f1f6ff] dark:bg-[#090d13] py-16 px-4 md:px-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">Why Choose CyGen?</h2>
        <p className="text-gray-600  mt-2">
          Powerful features designed to connect you with the right expertise
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((item, index) => (
          <div key={index} className="bg-white dark:bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-full mb-4" style={{ backgroundColor: item.bgColor }}>
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
            <a href="#" className={`mt-4 inline-flex items-center text-sm font-medium ${item.linkColor}`}>
              Learn more <BsArrowRight className="ml-1" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
