import React from 'react';
import { BsPeopleFill } from 'react-icons/bs';

const steps = [
  {
    number: '1',
    title: 'Describe Your Challenge',
    desc: 'Briefly explain your technical challenge or question.',
    color: 'bg-green-100 text-green-600'
  },
  {
    number: '2',
    title: 'Find Your Expert',
    desc: 'Browse and select from available domain experts.',
    color: 'bg-green-100 text-green-600'
  },
  {
    number: '3',
    title: 'Connect & Collaborate',
    desc: 'Connect via chat, audio or video session.',
    color: 'bg-green-100 text-green-600'
  },
  {
    number: '4',
    title: 'Resolve & Review',
    desc: 'Get solutions and provide feedback.',
    color: 'bg-orange-100 text-orange-500'
  }
];

const HowItWorks = () => {
  return (
    <section id='how-it-works' className="py-16 px-4 md:px-20 bg-white dark:bg-[#090d13]">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800  dark:text-white">How <span className=' text-green-500'>CyGen</span> Works</h2>
        <p className="text-gray-600 mt-2">Simple steps to connect with domain experts and solve your challenges</p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="bg-white dark:bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black rounded-xl shadow p-5 relative">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step.color} mb-4`}>
                {step.number}
              </div>
              <h3 className="font-semibold text-lg text-gray-800 dark:text-white">{step.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Image + Collaboration Badge */}
        <div className="relative ">
          <img
            src={"https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"}
            alt="How it works"
            className="w-full rounded-2xl shadow-lg object-cover "
          />
          <div className="absolute bottom-4 right-4 bg-white shadow-lg px-4 py-2 rounded-xl flex items-center gap-2">
            <div className="p-2 bg-green-100 text-green-600 rounded-full">
              <BsPeopleFill size={20} />
            </div>
            <div>
              <div className="font-semibold text-sm">Collaboration</div>
              <div className="text-xs text-gray-500">Experts & Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
