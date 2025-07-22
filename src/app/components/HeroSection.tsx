'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Link from 'next/link';
import { HiArrowDown, HiDownload } from 'react-icons/hi';
import Tilt from 'react-parallax-tilt';
import AnimatedBackground from './effects/AnimatedBackground';
import ParticleBackground from './effects/ParticleBackground';

interface HeroSectionProps {
  onScrollClick: () => void;
}

// Animation variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const letterAnimation = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export default function HeroSection({ onScrollClick }: HeroSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const nameArray = "Manjeet Mishra".split("");

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
    layoutEffect: false
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const springY = useSpring(y, { stiffness: 100, damping: 30 });
  const springOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });
  const springScale = useSpring(scale, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (heroRef.current) {
        heroRef.current.style.opacity = "1";
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      className="min-h-screen pt-20 relative opacity-0 overflow-hidden" 
      ref={heroRef}
      style={{ transition: 'opacity 0.5s ease-in-out' }}
    >
      {/* Interactive Particle Background */}
      <ParticleBackground />
      {/* Animated Aurora/Nebula Background */}
      <AnimatedBackground />
      {/* Glassmorphism Overlay - removed for vibrancy */}
      {/* <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-none z-0 pointer-events-none" /> */}
      {/* Background effects */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#64FFDA]/10 via-transparent to-transparent"></div>
      </motion.div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-8rem)] relative gap-12 py-8 bg-gray-100/60 dark:bg-[#0A192F]/60 rounded-3xl shadow-2xl border border-gray-200 dark:border-[#233554]/60 backdrop-blur-md z-10"
          style={{ y: springY, opacity: springOpacity, scale: springScale }}
        >
          {/* Profile image */}
          <motion.div 
            className="lg:flex-1 flex justify-center lg:justify-end relative z-10"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.6, -0.05, 0.01, 0.99],
              delay: 0.2
            }}
          >
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.2}
              scale={1.04}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-2xl"
              style={{ zIndex: 10 }}
            >
              <motion.div
                className="absolute inset-0 border-2 border-[#64FFDA]/20 rounded-2xl"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-[#64FFDA]/30 to-[#5EEAD4]/30 rounded-2xl blur-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
              <Image
                src="/manjeet.jpg"
                alt="Profile"
                fill
                className="object-cover rounded-2xl"
                priority
                sizes="(max-width: 640px) 14rem, (max-width: 1024px) 16rem, 20rem"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/profile-placeholder.svg';
                }}
                loading="eager"
              />
            </Tilt>
          </motion.div>

          {/* Text content */}
          <motion.div
            className="lg:flex-1 text-center lg:text-left space-y-6 relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-teal-500 dark:text-[#64FFDA] font-mono text-lg"
              >
                Hi, my name is
              </motion.p>
              <motion.div className="overflow-hidden">
                <motion.h1 
                  className="text-4xl sm:text-5xl md:text-6xl font-bold flex flex-wrap justify-center lg:justify-start bg-gradient-to-r from-[#64FFDA] via-[#5EEAD4] to-[#A5B4FC] bg-clip-text text-transparent animate-gradient-move"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  {nameArray.map((letter, index) => (
                    <motion.span
                      key={index}
                      variants={letterAnimation}
                      className="inline-block"
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  ))}
                </motion.h1>
              </motion.div>
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700 dark:text-[#8892B0] mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                I build things for the web.
              </motion.h2>
            </div>
            
            <motion.p 
              className="text-lg sm:text-xl text-gray-600 dark:text-[#8892B0] max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              A passionate Full Stack Developer crafting beautiful and functional web experiences. I specialize in building exceptional digital experiences.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.6 }}
            >
              <Link
                href="/projects"
                className="group relative px-8 py-3 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 text-white dark:from-[#64FFDA] dark:via-[#5EEAD4] dark:to-[#A5B4FC] dark:text-[#0A192F] font-bold rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:from-blue-500 hover:to-teal-400 dark:hover:from-[#A5B4FC] dark:hover:to-[#64FFDA] hover:shadow-[0_0_24px_#64FFDA99] focus:outline-none focus:ring-2 focus:ring-teal-400 dark:focus:ring-[#64FFDA]"
                style={{ perspective: 600 }}
              >
                <motion.span
                  className="relative z-10"
                  whileTap={{ scale: 0.93, rotateX: 8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >View My Work</motion.span>
                <span className="absolute inset-0 bg-white/20 dark:bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg pointer-events-none" />
              </Link>
              <a
                href="/resume.pdf"
                download
                className="group relative px-8 py-3 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 text-white dark:from-[#64FFDA] dark:via-[#5EEAD4] dark:to-[#A5B4FC] dark:text-[#0A192F] font-bold rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:from-blue-500 hover:to-teal-400 dark:hover:from-[#A5B4FC] dark:hover:to-[#64FFDA] hover:shadow-[0_0_24px_#64FFDA99] focus:outline-none focus:ring-2 focus:ring-teal-400 dark:focus:ring-[#64FFDA] flex items-center gap-2"
              >
                Download Resume <HiDownload />
                <span className="absolute inset-0 bg-white/20 dark:bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg pointer-events-none" />
              </a>
              <Link
                href="/contact"
                className="group relative px-8 py-3 bg-transparent text-teal-500 dark:text-[#64FFDA] border-2 border-teal-500 dark:border-[#64FFDA] font-bold rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:bg-teal-500/10 dark:hover:bg-[#64FFDA]/10 hover:shadow-[0_0_24px_#64FFDA99] focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-[#64FFDA]"
                style={{ perspective: 600 }}
              >
                <motion.span
                  className="relative z-10"
                  whileTap={{ scale: 0.93, rotateX: 8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >Contact Me</motion.span>
                <span className="absolute inset-0 bg-teal-500/10 dark:bg-[#64FFDA]/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg pointer-events-none" />
              </Link>
            </motion.div>
            {/* Scroll indicator - moved outside button group, with extra margin */}
            <motion.div 
              className="w-full flex justify-center mt-12"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2 }}
              onClick={onScrollClick}
            >
              <motion.div
                className="flex flex-col items-center cursor-pointer"
                animate={{ 
                  y: [0, 10, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="text-sm text-teal-500 dark:text-[#64FFDA] font-mono mb-2">Scroll Down</span>
                <motion.div
                  className="w-6 h-10 border-2 border-teal-500 dark:border-[#64FFDA] rounded-full p-1"
                >
                  <motion.div
                    className="w-1.5 h-1.5 bg-teal-500 dark:bg-[#64FFDA] rounded-full"
                    animate={{
                      y: [0, 20, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
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
      `}</style>
    </section>
  );
} 