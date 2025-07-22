'use client';

import { motion, LazyMotion, domAnimation, m } from 'framer-motion';
import type { FC } from 'react';
import Link from 'next/link';
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi';
import { HiOutlineArrowUp } from 'react-icons/hi';
import Tilt from 'react-parallax-tilt';

const footerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
      staggerChildren: 0.1
    }
  }
};

const linkVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const socialLinks = [
  { name: 'GitHub', icon: FiGithub, href: 'https://github.com/manjeet0505' },
  { name: 'LinkedIn', icon: FiLinkedin, href: 'https://www.linkedin.com/in/manjeet-mishra-175705260/' },
  { name: 'Twitter', icon: FiTwitter, href: 'https://x.com/mishramanjeet26' },
  { name: 'Email', icon: FiMail, href: 'mailto:mishramanjeet26@gmail.com' }
];

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/#projects' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' }
];

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <LazyMotion features={domAnimation}>
      {/* Floating Back to Top Button with Glow */}
      <m.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 bg-white/50 dark:bg-[#0A192F] border-2 border-teal-500 dark:border-[#64FFDA] text-teal-500 dark:text-[#64FFDA] p-4 rounded-full shadow-lg shadow-teal-500/50 dark:shadow-[#64FFDA66] hover:bg-teal-500 dark:hover:bg-[#64FFDA] hover:text-white dark:hover:text-[#0A192F] transition-colors duration-300 animate-pulse-glow"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Back to Top"
      >
        <HiOutlineArrowUp className="text-2xl drop-shadow-[0_0_12px_#64FFDA99]" />
      </m.button>

      <m.footer 
        className="relative bg-gradient-to-tr from-gray-100/90 via-white/90 to-gray-200/90 dark:from-[#112240]/90 dark:via-[#0A192F]/90 dark:to-[#233554]/90 animate-gradient-move border-t-4 border-teal-400 dark:border-[#64FFDA] bg-clip-padding pt-16 pb-8 shadow-2xl overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={footerVariants}
      >
        {/* Removed animated gradient border for a cleaner look */}
        {/* Back to top button */}
        {/* Removed animated gradient border for a cleaner look */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* About Section */}
            <m.div variants={linkVariants} className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-[#CCD6F6] relative inline-block">
                About
                <m.span 
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-400 dark:bg-[#64FFDA] origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
              </h3>
              <p className="text-gray-600 dark:text-[#8892B0] leading-relaxed">
                A passionate full-stack developer dedicated to creating impactful web experiences. Let's build something amazing together.
              </p>
            </m.div>

            {/* Quick Links */}
            <m.div variants={linkVariants} className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-[#CCD6F6] relative inline-block">
                Quick Links
                <m.span 
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-400 dark:bg-[#64FFDA] origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href}
                      className="text-gray-600 dark:text-[#8892B0] hover:text-teal-500 dark:hover:text-[#64FFDA] transition-colors duration-300 flex items-center group"
                    >
                      <m.span
                        className="inline-block w-2 h-[1px] bg-teal-500 dark:bg-[#64FFDA] mr-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                      />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </m.div>

            {/* Connect Section */}
            <m.div variants={linkVariants} className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-[#CCD6F6] relative inline-block">
                Connect
                <m.span 
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-400 dark:bg-[#64FFDA] origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
              </h3>
              <div className="flex space-x-6">
                {socialLinks.map((social) => (
                  <Tilt
                    glareEnable={true}
                    glareMaxOpacity={0.18}
                    tiltMaxAngleX={12}
                    tiltMaxAngleY={12}
                    scale={1.08}
                    className="inline-block"
                    key={social.name}
                  >
                    <m.a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-[#8892B0] hover:text-teal-500 dark:hover:text-[#64FFDA] transition-colors duration-300 group"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="relative">
                        <social.icon className="text-2xl group-hover:drop-shadow-[0_0_12px_#64FFDA99] transition-all duration-300" />
                        <m.span
                          className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          {social.name}
                        </m.span>
                      </div>
                    </m.a>
                  </Tilt>
                ))}
              </div>
            </m.div>
          </div>

          {/* Copyright */}
          <m.div 
            variants={linkVariants}
            className="mt-16 pt-8 border-t border-gray-200 dark:border-[#233554] text-center"
          >
            <p className="text-gray-600 dark:text-[#8892B0] flex items-center justify-center gap-2">
              &copy; {currentYear} Manjeet Mishra
              <m.span 
                className="text-teal-500 dark:text-[#64FFDA] inline-block"
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                &hearts;
              </m.span>
              <span className="text-gray-600 dark:text-[#8892B0]">Built with Next.js</span>
            </p>
          </m.div>
        </div>
      </m.footer>
      <style jsx global>{`
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradient-move 4s ease-in-out infinite;
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0 0 #64FFDA44, 0 0 12px 2px #64FFDA99; }
          50% { box-shadow: 0 0 24px 8px #64FFDA99, 0 0 24px 8px #64FFDA44; }
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s infinite;
        }
      `}</style>
    </LazyMotion>
  );
};

export default Footer; 