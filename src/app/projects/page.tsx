'use client';

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

export default function ProjectsPage() {
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
              My Projects
            </h1>
            <p className="text-gray-400 text-lg">
              Here are some of my recent projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project cards will go here */}
          </div>
        </div>
      </div>
    </main>
  );
} 