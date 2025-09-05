  import React from 'react';
import Footer from '../home/Footer';
import Navbar from '../../Navbar';

const steps = [
  {
    number: 1,
    title: 'Describe Your Challenge',
    description: 'Briefly explain your technical issue or question. Provide as much detail as possible.',
    link: '#',
    icon: (
      <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
        <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm0 2h12v10H4V5zm2 2a1 1 0 000 2h8a1 1 0 100-2H6z" />
      </svg>
    )
  },
  {
    number: 2,
    title: 'Find Your Expert',
    description: 'Browse our verified consultants or let our AI match you with the perfect expert.',
    link: '#',
    icon: (
      <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
        <path d="M8 4a4 4 0 100 8 4 4 0 000-8zm0 2a2 2 0 110 4 2 2 0 010-4zm6 8a6 6 0 00-12 0h12z" />
      </svg>
    )
  },
  {
    number: 3,
    title: 'Connect & Collaborate',
    description: 'Start a session via chat, audio, or video. Share your screen if needed.',
    link: '#',
    icon: (
      <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm2 0v10h12V5H4zm2 2h8v2H6V7zm0 4h8v2H6v-2z" />
      </svg>
    )
  },
  {
    number: 4,
    title: 'Resolve & Review',
    description: 'Get your solution and provide feedback. Download session notes for reference.',
    link: '#',
    icon: (
      <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
        <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h8l4-4V5a2 2 0 00-2-2H4z" />
      </svg>
    )
  }
];

const faqs = [
  {
    question: 'How quickly can I connect with an expert?',
    answer: 'Most connections happen within minutes. Our platform shows you experts who are currently available for immediate consultation. For specialized domains, it might take up to 2 hours to find the perfect match.'
  },
  {
    question: 'What qualifications do your experts have?',
    answer: 'All experts undergo a rigorous vetting process that includes credential verification, technical assessments, and background checks. Most have 5+ years of professional experience in their domain.'
  },
  {
    question: 'Can I schedule a session for later?',
    answer: 'Yes, you can schedule sessions up to 30 days in advance. Our calendar system shows you available time slots for each expert and sends reminders before your session.'
  }
];

const HowWork = () => {
  return (
    <>
      <Navbar/>

      {/* Section Top */}
      <div className='bg-white dark:bg-[#090d13] w-full h-full'>
        <div className=" w-10/12 m-auto flex flex-col lg:flex-row items-center justify-between gap-10 py-20">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold mb-4 dark:text-white text-black">
              How Worklify <span className="text-primary">Work</span>
            </h2>
            <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
              Connect with domain experts in just a few simple steps. Get technical solutions quickly and efficiently.
            </p>
            <div className="flex gap-4">
              <button className="border bg-primary border-primary text-white font-semibold px-6 py-2 rounded hover:text-primary">
                Get Started
              </button>
            </div>
          </div>
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Categories" className="rounded-xl shadow-md w-full lg:w-1/2" />
        </div>
      </div>

      {/* Steps Section */}
      <div className="dark:bg-[#090d13] bg-white/90 py-10 px-6">
        <h2 className="text-3xl font-bold text-center dark:text-white text-black">Simple Steps to Connect</h2>
        <p className="text-center dark:text-white text-black mt-2 mb-10">
          Follow these easy steps to get expert help for your technical challenges
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="dark:bg-[#0b1225] text-white p-8 rounded-xl shadow-lg flex flex-col gap-3"
            >
              <div className="flex items-center gap-2">
                <div className="text-2xl font-bold dark:text-white text-black">{step.number}</div>
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold dark:text-white text-black">{step.title}</h3>
              <p className="text-sm dark:text-white text-black">{step.description}</p>
              <a href={step.link} className="text-primary hover:underline text-sm mt-auto">Learn more →</a>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="dark:bg-[#090d13] bg-white/90 p-6">
        <h1 className="text-3xl font-bold text-center text-black dark:text-white mb-2">
          Frequently Asked Questions
        </h1>
        <p className="text-center text-black dark:text-white mb-6">
          Find answers to common questions about our platform
        </p>
        <div className="space-y-8 md:w-6/12 w-full m-auto">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="p-4 rounded-lg shadow-md bg-white dark:bg-[#0b1225] hover:shadow-lg hover:scale-105 transition-transform"
            >
              <h2 className="text-md font-semibold text-gray-600 dark:text-white mb-1">
                {faq.question}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-200">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HowWork;
