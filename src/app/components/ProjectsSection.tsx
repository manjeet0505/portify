'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import ProjectImage from './ProjectImage';
import Tilt from 'react-parallax-tilt';

interface ProjectsSectionProps {
  hideHeader?: boolean;
}

const projects = [
  {
    title: 'ExpenseX',
    description: 'Track expenses, set budgets, and achieve your financial goals with our powerful personal finance tracker. Take control of your financial future with easy-to-use tools and insightful analytics.',
    tech: ['Next.js', 'Node.js', 'Google OAuth', 'Tailwind CSS'],
    github: 'https://github.com/manjeet0505/Expense',
    live: 'https://expense-bay-mu.vercel.app/',
    image: '/expense.png' // Updated to ExpenseX image
  },
  {
    title: 'Senior Junior Connect',
    description: 'A platform designed to connect seniors and juniors for mentorship, collaboration, and knowledge sharing. Features user profiles, messaging, and project boards. Currently in testing phase and not yet deployed.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    github: '', // Add GitHub link if available
    live: 'Testing (Not Deployed)',
    image: '/senior-junior.png'
  },
  {
    title: 'Portfolio Builder',
    description: 'A web application to easily create and customize your own portfolio website. Features a user-friendly dashboard, live preview, and instant deployment.',
    tech: ['Next.js', 'React', 'Tailwind CSS'],
    github: 'https://github.com/Muskanchauhan29/portfoliobuilder',
    live: 'https://portfoliobuilder-mocha.vercel.app/',
    image: '/portfoliobuilder.png'
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ProjectsSection({ hideHeader = false }: ProjectsSectionProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" id="projects">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="space-y-20"
      >
        {/* Section Header - Only show if hideHeader is false */}
        {!hideHeader && (
          <motion.div 
            className="text-center space-y-4"
            variants={fadeInUp}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-[#CCD6F6]">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-[#8892B0] max-w-2xl mx-auto">
              Here are some of my recent works
            </p>
          </motion.div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-20">
          {projects.map((project, index) => (
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.12}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              scale={1.02}
              className="w-full"
              key={project.title}
            >
              <motion.div
                variants={fadeInUp}
                whileHover={{
                  scale: 1.035,
                  boxShadow: '0 8px 40px 0 #64FFDA55',
                  borderColor: '#64FFDA',
                  transition: { duration: 0.3 }
                }}
                transition={{ duration: 0.5, type: 'spring', stiffness: 80 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 items-center bg-white/70 dark:bg-[#112240]/70 rounded-2xl border-2 border-gray-200/20 dark:border-[#64FFDA]/20 shadow-2xl backdrop-blur-md p-6 group transition-all duration-300 relative overflow-hidden`}
                style={{ zIndex: 1 }}
              >
                {/* Animated Gradient Border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none z-0"
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
                {/* Project Image */}
                <motion.div 
                  className="relative w-full lg:w-3/5 aspect-video rounded-xl overflow-hidden shadow-xl shadow-[#112240]/50 group-hover:shadow-[0_4px_32px_#64FFDA44] group-hover:scale-105 group-hover:rotate-1 transition-all duration-300"
                  whileHover={{ scale: 1.04, rotate: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-[#64FFDA]/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
                  <ProjectImage src={project.image} alt={project.title} />
                </motion.div>

                {/* Project Info */}
                <div className="w-full lg:w-2/5 space-y-4">
                  <motion.h3 
                    className="text-2xl font-bold text-gray-800 dark:text-[#CCD6F6]"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <motion.div 
                    className="bg-white/70 dark:bg-[#112240] p-6 rounded-lg shadow-xl relative z-10"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-700 dark:text-[#8892B0]">{project.description}</p>
                  </motion.div>

                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        className="text-teal-500 dark:text-[#64FFDA] text-sm font-mono"
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-[#CCD6F6] hover:text-teal-500 dark:hover:text-[#64FFDA] transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiGithub className="text-2xl" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-[#CCD6F6] hover:text-teal-500 dark:hover:text-[#64FFDA] transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiExternalLink className="text-2xl" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </motion.div>
    </div>
  );
} 