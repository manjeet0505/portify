'use client';

import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import Navbar from '../components/Navbar';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0A192F] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-[#0A192F] bg-opacity-90"
          style={{
            backgroundImage: `
              radial-gradient(circle at 85% 15%, rgba(100, 255, 218, 0.08) 0%, transparent 25%),
              radial-gradient(circle at 15% 85%, rgba(100, 255, 218, 0.08) 0%, transparent 25%),
              linear-gradient(0deg, rgba(10,25,47,0.9) 0%, rgba(10,25,47,0.95) 100%),
              repeating-linear-gradient(
                45deg,
                rgba(100, 255, 218, 0.05) 0px,
                rgba(100, 255, 218, 0.05) 1px,
                transparent 1px,
                transparent 15px
              )
            `,
            backgroundSize: '100% 100%, 100% 100%, 100% 100%, 30px 30px'
          }}
        />
      </div>

      <Navbar />
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Get in Touch
            </h1>
            <p className="text-gray-400 text-lg">
              Feel free to reach out to me through any of these channels
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#112240] p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center justify-center mb-4">
                <FiMail className="text-[#64FFDA] text-2xl" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-2 text-center">Email</h3>
              <p className="text-gray-400 text-center">
                <a href="mailto:mishramanjeet26@gmail.com" className="hover:text-[#64FFDA] transition-colors">
                  mishramanjeet26@gmail.com
                </a>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-[#112240] p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center justify-center mb-4">
                <FiPhone className="text-[#64FFDA] text-2xl" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-2 text-center">Phone</h3>
              <p className="text-gray-400 text-center">
                <a href="tel:+919540932794" className="hover:text-[#64FFDA] transition-colors">
                  +91 9540932794
                </a>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-[#112240] p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center justify-center mb-4">
                <FiMapPin className="text-[#64FFDA] text-2xl" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-2 text-center">Location</h3>
              <p className="text-gray-400 text-center">
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Gurugram,Haryana" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#64FFDA] transition-colors"
                >
                  Gurugram, Haryana
                </a>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
} 