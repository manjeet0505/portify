'use client';

import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb, SiNextdotjs, SiExpress, SiPrisma } from 'react-icons/si';
import { TbBrandThreejs } from 'react-icons/tb';
import Tilt from 'react-parallax-tilt';

interface SkillCardProps {
  icon: React.ReactNode;
  name: string;
  description: string;
  proficiency?: number; // 0-100
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, name, description, proficiency }) => {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.15}
      tiltMaxAngleX={12}
      tiltMaxAngleY={12}
      scale={1.03}
      className="w-full"
    >
      <motion.div
        className="relative bg-white/70 dark:bg-[#112240]/70 rounded-xl p-6 border border-gray-200/20 dark:border-[#64FFDA]/20 shadow-xl backdrop-blur-md transition-all duration-300 transform hover:-translate-y-3 hover:shadow-[0_4px_32px_#64FFDA88] hover:border-teal-500 dark:hover:border-[#64FFDA] group"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex items-start space-x-4">
          <motion.div
            className="text-4xl text-teal-500 dark:text-[#64FFDA] transition-transform duration-300 group-hover:scale-110 group-hover:text-cyan-500 dark:group-hover:text-[#5EEAD4]"
            animate={{ scale: [1, 1.08, 1], color: ["#64FFDA", "#5EEAD4", "#64FFDA"] }}
            transition={{ duration: 2, repeat: Infinity }}
          >{icon}</motion.div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-[#CCD6F6] mb-2">{name}</h3>
            {/* Animated Progress Bar */}
            {typeof proficiency === 'number' && (
              <motion.div
                className="w-full h-2 bg-gray-200 dark:bg-[#233554] rounded-full mb-2 overflow-hidden"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <motion.div
                  className="h-2 rounded-full bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 dark:from-[#64FFDA] dark:via-[#5EEAD4] dark:to-[#A5B4FC] shadow-[0_0_12px_#64FFDA88]"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${proficiency}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4 }}
                />
              </motion.div>
            )}
            <p className="text-gray-600 dark:text-[#8892B0] text-sm">{description}</p>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

const skills: SkillCardProps[] = [
  {
    icon: <FaReact />,
    name: "React.js",
    description: "Building modern and responsive user interfaces with React ecosystem",
    proficiency: 92
  },
  {
    icon: <SiNextdotjs />,
    name: "Next.js",
    description: "Server-side rendering and static site generation with Next.js",
    proficiency: 88
  },
  {
    icon: <SiTypescript />,
    name: "TypeScript",
    description: "Type-safe development with TypeScript for scalable applications",
    proficiency: 85
  },
  {
    icon: <FaNodeJs />,
    name: "Node.js",
    description: "Backend development with Node.js and Express.js",
    proficiency: 84
  },
  {
    icon: <SiMongodb />,
    name: "MongoDB",
    description: "Database design and management with MongoDB",
    proficiency: 80
  },
  {
    icon: <SiPrisma />,
    name: "Prisma",
    description: "Next-generation ORM for Node.js and TypeScript",
    proficiency: 75
  },
  {
    icon: <SiTailwindcss />,
    name: "Tailwind CSS",
    description: "Utility-first CSS framework for rapid UI development",
    proficiency: 90
  },
  {
    icon: <FaGitAlt />,
    name: "Git",
    description: "Version control and collaboration with Git",
    proficiency: 87
  },
  {
    icon: <FaDocker />,
    name: "Docker",
    description: "Containerization and deployment with Docker",
    proficiency: 70
  }
];

const SkillsSection = () => {
  return (
    <section className="py-10 md:py-20 bg-gray-50 dark:bg-[#0A192F]" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-[#CCD6F6] mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-teal-400 dark:bg-[#64FFDA] mx-auto rounded-full" />
          <p className="mt-6 text-gray-600 dark:text-[#8892B0] max-w-2xl mx-auto">
            Here&apos;s what I&apos;ve been working with recently. I&apos;m always eager to learn and adapt to new technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.13, duration: 0.7, type: 'spring', stiffness: 60 }}
            >
              <SkillCard {...skill} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 dark:text-[#8892B0] text-sm">
            &quot;The only way to do great work is to love what you do.&quot;
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection; 