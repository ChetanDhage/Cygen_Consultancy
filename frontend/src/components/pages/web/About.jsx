import React from "react";
import { BsEnvelopeAtFill, BsLinkedin, BsGithub, BsCheck2Circle } from "react-icons/bs";
import { FaBookOpen, FaUsers, FaSyncAlt, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "../../Navbar";
import Footer from '../home/Footer';
import CommunityImage from "../../../assets/logo.png";

const OurValues = [
  {
    icon: <FaBookOpen className="text-xl" />,
    title: "Empowerment through Knowledge",
    desc: "We believe that knowledge is the most powerful tool to combat cyber threats.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: <FaUsers className="text-xl" />,
    title: "Community and Inclusivity",
    desc: "We strive to make cybersecurity education accessible to all, regardless of background or experience level.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: <FaSyncAlt className="text-xl" />,
    title: "Continuous Learning",
    desc: "In the fast-paced world of cybersecurity, staying updated is key. We promote lifelong learning and skill development.",
    color: "bg-purple-100 text-purple-600",
  },
];

const About = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 dark:bg-[#090d13] text-gray-600 dark:text-white">

        {/* Hero Section */}
        <section className="py-16 bg-primaryLight dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-4xl font-bold mb-6 text-dark dark:text-white">
              Community-Powered Security Solutions
            </h1>
            <p className="text-md text-gray-600 dark:text-gray-300 mb-8">
              Our community bridges the gap between security challenges and
              collaborative solutions, making cybersecurity knowledge accessible
              to everyone.
            </p>
            <a
              href="/how-it-works"
              className="inline-block px-6 py-3 bg-primary rounded-lg text-white font-medium hover:bg-primarylight transition"
            >
              Join Our Community
            </a>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src={CommunityImage}
                alt="Community members collaborating"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-dark dark:text-white mb-6">
                About Our Community
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We are a global collective of security enthusiasts,
                professionals, and learners who believe in the power of
                collaboration to solve complex security challenges.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                What started as a small group of security practitioners has
                grown into an open community where knowledge is shared freely,
                skills are developed together, and solutions are built
                collectively.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-gray-50 dark:bg-[#090d13]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-dark dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-16">
              Principles that guide our community
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {OurValues.map((val, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl shadow-sm bg-white dark:bg-[#0b1225] hover:shadow-md transition-shadow"
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center m-auto mb-4 ${val.color}`}
                  >
                    {val.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{val.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Commitment to Security */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-dark dark:text-white mb-8">
              Our Commitment to Security
            </h2>

            {/* Flex container for cards */}
            <div className="flex flex-col md:flex-row gap-6 max-w-4xl mx-auto">

              {/* Enterprise-Grade Security */}
              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 bg-gray-50 dark:bg-gray-800 border border-purple-500/20 lg:rounded-xl flex-1 flex items-start gap-4"
              >
                <div className="flex-shrink-0 p-3 bg-purple-500/10 rounded-lg text-purple-500">
                  <FaShieldAlt className="text-2xl" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-lg text-dark dark:text-white">
                    Enterprise-Grade Security
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                    All engagements include NDAs, secure communication channels,
                    and compliance with your security protocols.
                  </p>
                </div>
              </motion.div>

              {/* Vetted Expertise */}
              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 bg-gray-50 dark:bg-gray-800 border border-primary/20 lg:rounded-xl flex-1 flex items-start gap-4"
              >
                <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg text-primary">
                  <BsCheck2Circle className="text-xl" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-lg">Vetted Expertise</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    Every specialist undergoes rigorous technical evaluation and industry experience verification.
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Get Involved */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-dark dark:text-white mb-4">
              Join Our Community
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              We're always looking for passionate individuals to contribute
            </p>
            <div className="max-w-2xl mx-auto bg-white dark:bg-[#0f172a] p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4">Ways to Get Involved</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-6">
                <div>
                  <h4 className="font-semibold mb-2">Contribute Knowledge</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Share your expertise through guides, tutorials, or answering
                    community questions
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Participate in Projects</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Collaborate on open-source security tools and resources
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Mentor Others</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Help newcomers learn security fundamentals
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Spread Awareness</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Help promote security best practices in your networks
                  </p>
                </div>
              </div>
              <div className="flex justify-center gap-4 mt-6">
                <a
                  href="#"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  <BsLinkedin /> Connect
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
                >
                  <BsGithub /> Contribute
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                >
                  <BsEnvelopeAtFill /> Contact
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default About;
