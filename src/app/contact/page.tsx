'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiPhone } from 'react-icons/fi';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import AnimatedBackground from '../components/effects/AnimatedBackground';
import ParticleBackground from '../components/effects/ParticleBackground';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all fields.');
      return;
    }
    setLoading(true);
    try {
      const emailjs = (await import('emailjs-com')).default;
      await emailjs.send(
        'service_cg3zx6g',
        'template_f8vzqy5',
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        'tUn6wjMO9RrHMRLJF'
      );
      setLoading(false);
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setLoading(false);
      setError('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0A192F] text-gray-800 dark:text-white relative overflow-hidden">
      {/* Interactive Particle Background */}
      <ParticleBackground />
      <AnimatedBackground />
      <Navbar />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-[#CCD6F6] mb-4">
            Get in Touch
          </h1>
          <div className="w-24 h-1 bg-teal-400 dark:bg-[#64FFDA] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-20">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-white/80 dark:bg-[#112240]/80 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-gray-200/50 dark:border-[#233554]/50 relative overflow-hidden"
          >
            {/* Animated Border */}
            <motion.div
              className="absolute inset-0 rounded-lg pointer-events-none z-0"
              animate={{
                opacity: [0.7, 1, 0.7],
                boxShadow: [
                  '0 0 0px #64FFDA',
                  '0 0 32px 8px #64FFDA',
                  '0 0 0px #64FFDA'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-[#CCD6F6] mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <FiMail className="w-6 h-6 text-teal-500 dark:text-[#64FFDA]" />
                <a 
                  href="mailto:mishramanjeet26@gmail.com" 
                  className="text-gray-600 dark:text-[#8892B0] hover:text-teal-500 dark:hover:text-[#64FFDA] transition-colors duration-300"
                >
                  mishramanjeet26@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <FiPhone className="w-6 h-6 text-teal-500 dark:text-[#64FFDA]" />
                <a 
                  href="tel:+919540932794" 
                  className="text-gray-600 dark:text-[#8892B0] hover:text-teal-500 dark:hover:text-[#64FFDA] transition-colors duration-300"
                >
                  +91 9540932794
                </a>
              </div>
              <div className="pt-6">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-[#CCD6F6] mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/manjeet0505"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-[#8892B0] hover:text-teal-500 dark:hover:text-[#64FFDA] transition-colors duration-300"
                  >
                    <FiGithub className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/manjeet-mishra-175705260/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-[#8892B0] hover:text-teal-500 dark:hover:text-[#64FFDA] transition-colors duration-300"
                  >
                    <FiLinkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://twitter.com/mishramanjeet26"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-[#8892B0] hover:text-teal-500 dark:hover:text-[#64FFDA] transition-colors duration-300"
                  >
                    <FiTwitter className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white/80 dark:bg-[#112240]/80 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-gray-200/50 dark:border-[#233554]/50 relative overflow-hidden"
          >
            {/* Animated Border */}
            <motion.div
              className="absolute inset-0 rounded-lg pointer-events-none z-0"
              animate={{
                opacity: [0.7, 1, 0.7],
                boxShadow: [
                  '0 0 0px #64FFDA',
                  '0 0 32px 8px #64FFDA',
                  '0 0 0px #64FFDA'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-[#CCD6F6] mb-6">Let's Connect</h2>
            <p className="text-gray-600 dark:text-[#8892B0] mb-6">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="space-y-4">
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-center py-8"
                >
                  <span className="text-3xl text-[#64FFDA] mb-2">✔</span>
                  <span className="text-[#64FFDA] text-lg font-semibold">Thank you! Your message has been sent.</span>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={form.name}
                      onChange={handleChange}
                      className="peer w-full bg-transparent border-b-2 border-gray-300 dark:border-[#233554] focus:border-teal-500 dark:focus:border-[#64FFDA] text-gray-800 dark:text-[#CCD6F6] placeholder-transparent outline-none py-3 transition-all duration-300"
                      placeholder="Your Name"
                      autoComplete="off"
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-0 top-3 text-gray-500 dark:text-[#8892B0] text-base transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-sm peer-focus:text-teal-500 dark:peer-focus:text-[#64FFDA] pointer-events-none"
                    >Name</label>
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={form.email}
                      onChange={handleChange}
                      className="peer w-full bg-transparent border-b-2 border-gray-300 dark:border-[#233554] focus:border-teal-500 dark:focus:border-[#64FFDA] text-gray-800 dark:text-[#CCD6F6] placeholder-transparent outline-none py-3 transition-all duration-300"
                      placeholder="Your Email"
                      autoComplete="off"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 top-3 text-gray-500 dark:text-[#8892B0] text-base transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-sm peer-focus:text-teal-500 dark:peer-focus:text-[#64FFDA] pointer-events-none"
                    >Email</label>
                  </div>
                  <div className="relative">
                    <textarea
                      name="message"
                      id="message"
                      value={form.message}
                      onChange={handleChange}
                      className="peer w-full bg-transparent border-b-2 border-gray-300 dark:border-[#233554] focus:border-teal-500 dark:focus:border-[#64FFDA] text-gray-800 dark:text-[#CCD6F6] placeholder-transparent outline-none py-3 transition-all duration-300 min-h-[90px] resize-none"
                      placeholder="Your Message"
                    />
                    <label
                      htmlFor="message"
                      className="absolute left-0 top-3 text-gray-500 dark:text-[#8892B0] text-base transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-sm peer-focus:text-teal-500 dark:peer-focus:text-[#64FFDA] pointer-events-none"
                    >Message</label>
                  </div>
                  {error && <div className="text-red-500 dark:text-[#FF6B6B] text-sm">{error}</div>}
                  <button
                    type="submit"
                    className="w-full py-3 mt-2 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 text-white dark:from-[#64FFDA] dark:via-[#5EEAD4] dark:to-[#A5B4FC] dark:text-[#0A192F] font-bold rounded-lg shadow-lg hover:from-blue-500 hover:to-teal-400 dark:hover:from-[#A5B4FC] dark:hover:to-[#64FFDA] hover:shadow-[0_0_24px_#64FFDA99] focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-[#64FFDA] transition-all duration-300 relative overflow-hidden"
                    disabled={loading}
                  >
                    {loading ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center justify-center gap-2"
                      >
                        <svg className="animate-spin h-5 w-5 text-white dark:text-[#0A192F]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
                        Sending...
                      </motion.div>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 