'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import Navbar from '../components/Navbar';
import AnimatedBackground from '../components/effects/AnimatedBackground';

const AboutPage = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      href: 'https://github.com/manjeet0505'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/manjeet-mishra-175705260/'
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#0A192F] relative overflow-hidden">
      <AnimatedBackground />
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        {/* Animated gradient background */}
        <div 
          className="absolute inset-0 bg-[#0A192F] bg-opacity-90"
          style={{
            backgroundImage: `
              radial-gradient(circle at 15% 50%, rgba(100, 255, 218, 0.08) 0%, transparent 25%),
              radial-gradient(circle at 85% 30%, rgba(100, 255, 218, 0.08) 0%, transparent 25%),
              linear-gradient(0deg, rgba(10,25,47,0.9) 0%, rgba(10,25,47,0.95) 100%),
              repeating-linear-gradient(
                -45deg,
                rgba(100, 255, 218, 0.05) 0px,
                rgba(100, 255, 218, 0.05) 1px,
                transparent 1px,
                transparent 12px
              )
            `,
            backgroundSize: '100% 100%, 100% 100%, 100% 100%, 24px 24px'
          }}
        />
      </div>

      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-[#CCD6F6] mb-4">
            About Me
          </h1>
          <div className="w-24 h-1 bg-teal-400 dark:bg-[#64FFDA] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left Column: Image and Socials */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="relative group w-full max-w-sm mx-auto">
              {/* Decorative Elements */}
              <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 dark:opacity-20 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 dark:opacity-20 animate-blob animation-delay-2000"></div>
              
              <motion.div
                className="relative rounded-2xl overflow-hidden border-4 border-teal-400/40 dark:border-[#64FFDA]/40 shadow-xl bg-white dark:bg-[#0A192F]"
                animate={{ y: [0, -8, 0, 8, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Image
                  src="/manjeet.jpg"
                  alt="Manjeet Mishra"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                  priority
                />
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex flex-col items-center gap-4"
            >
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-teal-500 dark:border-[#64FFDA] text-teal-500 dark:text-[#64FFDA] rounded-lg hover:bg-teal-500/10 dark:hover:bg-[#64FFDA]/10 transition-colors duration-300 group"
              >
                <HiDownload className="text-xl group-hover:translate-y-1 transition-transform" />
                <span>Download Resume</span>
              </a>
              
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 text-gray-600 dark:text-[#8892B0] hover:text-teal-500 dark:hover:text-[#64FFDA] transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="text-2xl" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3 space-y-8"
          >
            <div className="bg-white/80 dark:bg-[#112240]/80 backdrop-blur-sm p-8 rounded-xl border border-gray-200/40 dark:border-[#233554]/40 shadow-lg">
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-[#8892B0] text-lg leading-relaxed">
                  I&apos;m a passionate full-stack developer with a keen interest in building impactful web applications.
                </p>
                <p className="text-gray-700 dark:text-[#8892B0] text-lg leading-relaxed mt-4">
                  My journey in web development started back in college when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML &amp; CSS!
                </p>
                <p className="text-gray-700 dark:text-[#8892B0] text-lg leading-relaxed mt-4">
                  Fast-forward to today, and I've had the privilege of working at various companies, startups, and organizations. My main focus these days is building accessible, inclusive products and digital experiences.
                </p>
              </div>
            </div>

            <div className="bg-white/80 dark:bg-[#112240]/80 backdrop-blur-sm p-8 rounded-xl border border-gray-200/40 dark:border-[#233554]/40 shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-[#CCD6F6] mb-4">Skills & Technologies</h2>
              <div className="grid grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="text-gray-600 dark:text-[#8892B0] flex items-center">
                    <span className="text-teal-500 dark:text-[#64FFDA] mr-2">▹</span> JavaScript (ES6+)
                  </li>
                  <li className="text-gray-600 dark:text-[#8892B0] flex items-center">
                    <span className="text-teal-500 dark:text-[#64FFDA] mr-2">▹</span> React
                  </li>
                  <li className="text-gray-600 dark:text-[#8892B0] flex items-center">
                    <span className="text-teal-500 dark:text-[#64FFDA] mr-2">▹</span> Node.js
                  </li>
                  <li className="text-gray-600 dark:text-[#8892B0] flex items-center">
                    <span className="text-teal-500 dark:text-[#64FFDA] mr-2">▹</span> TypeScript
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="text-gray-600 dark:text-[#8892B0] flex items-center">
                    <span className="text-teal-500 dark:text-[#64FFDA] mr-2">▹</span> Next.js
                  </li>
                  <li className="text-gray-600 dark:text-[#8892B0] flex items-center">
                    <span className="text-teal-500 dark:text-[#64FFDA] mr-2">▹</span> Tailwind CSS
                  </li>
                  <li className="text-gray-600 dark:text-[#8892B0] flex items-center">
                    <span className="text-teal-500 dark:text-[#64FFDA] mr-2">▹</span> MongoDB
                  </li>
                  <li className="text-gray-600 dark:text-[#8892B0] flex items-center">
                    <span className="text-teal-500 dark:text-[#64FFDA] mr-2">▹</span> PostgreSQL
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <style jsx>{`
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
      `}</style>
    </main>
  );
};

export default AboutPage; 