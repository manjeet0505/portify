'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiPhone } from 'react-icons/fi';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0A192F] text-white relative">
      <Navbar />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#CCD6F6] mb-4">
            Get in Touch
          </h1>
          <div className="w-24 h-1 bg-[#64FFDA] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-20">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#112240]/80 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-[#233554]/50"
          >
            <h2 className="text-2xl font-bold text-[#CCD6F6] mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <FiMail className="w-6 h-6 text-[#64FFDA]" />
                <a 
                  href="mailto:mishramanjeet26@gmail.com" 
                  className="text-[#8892B0] hover:text-[#64FFDA] transition-colors duration-300"
                >
                  mishramanjeet26@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <FiPhone className="w-6 h-6 text-[#64FFDA]" />
                <a 
                  href="tel:+919540932794" 
                  className="text-[#8892B0] hover:text-[#64FFDA] transition-colors duration-300"
                >
                  +91 9540932794
                </a>
              </div>
              <div className="pt-6">
                <h3 className="text-lg font-semibold text-[#CCD6F6] mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/manjeet0505"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8892B0] hover:text-[#64FFDA] transition-colors duration-300"
                  >
                    <FiGithub className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/manjeet-mishra-175705260/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8892B0] hover:text-[#64FFDA] transition-colors duration-300"
                  >
                    <FiLinkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://twitter.com/mishramanjeet26"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8892B0] hover:text-[#64FFDA] transition-colors duration-300"
                  >
                    <FiTwitter className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#112240]/80 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-[#233554]/50"
          >
            <h2 className="text-2xl font-bold text-[#CCD6F6] mb-6">Let's Connect</h2>
            <p className="text-[#8892B0] mb-6">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="space-y-4">
              <a
                href="mailto:mishramanjeet26@gmail.com"
                className="inline-block px-6 py-3 bg-[#64FFDA] text-[#0A192F] font-medium rounded-md hover:bg-[#64FFDA]/90 transition-colors duration-300"
              >
                Send me an email
              </a>
              <a
                href="tel:+918318045098"
                className="inline-block ml-4 px-6 py-3 border border-[#64FFDA] text-[#64FFDA] font-medium rounded-md hover:bg-[#64FFDA]/10 transition-colors duration-300"
              >
                Call me
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 