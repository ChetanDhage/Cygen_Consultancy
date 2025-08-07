import React from 'react';
import { BsPeopleFill } from 'react-icons/bs';

const steps = [
  {
    number: '1',
    title: 'Describe Your Challenge',
    desc: 'Briefly explain your technical challenge or question.',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    number: '2',
    title: 'Find Your Expert',
    desc: 'Browse and select from available domain experts.',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    number: '3',
    title: 'Connect & Collaborate',
    desc: 'Connect via chat, audio or video session.',
    color: 'bg-blue-100 text-blue-600'
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
    <section id='how-it-works' className=" relative py-16 px-4 md:px-20 bg-white dark:bg-[#090d13]">
       {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 left-[10%] w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-[60%] w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>
      <div className="text-center mb-10">
        <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-primary/20 to-cyan-500/20 rounded-full mb-2 border border-primary/30">
          <span className="text-sm font-medium bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent uppercase">
            Working Features
          </span>
        </div>
        <hr className=' my-4  border-1 border-primary animate-pulse' />
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800  dark:text-white">How <span className=''>Worklify</span> Works</h2>
        <hr className=' my-4  border-1 border-primary animate-pulse' />
        <p className=" text-sm text-gray-600 mt-2 ">Simple steps to connect with domain experts and solve your challenges</p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Steps */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:gap-6">
          {steps.map((step, i) => (
            <div key={i} className="bg-white dark:bg-gray-900  hover:border-b-primary hover:border-r-primary lg:rounded-xl shadow p-5 relative">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step.color} mb-4`}>
                {step.number}
              </div>
              <h3 className="font-semibold text-lg text-gray-800 dark:text-white">{step.title}</h3>
              <p className=" lg:block hidden text-gray-500 text-sm mt-1">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Image + Collaboration Badge */}
        <div className="relative  ">
          <img
            src={"https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"}
            alt="How it works"
            className="w-full rounded-2xl shadow-lg object-cover "
          />
          <div className="absolute bottom-4 right-4 bg-white shadow-lg px-4 py-2 rounded-xl flex items-center gap-2">
            <div className="p-2 bg-blue-100 text-blue-600 rounded-full">
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
