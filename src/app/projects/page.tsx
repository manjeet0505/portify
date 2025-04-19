'use client';

import { motion, LazyMotion, domAnimation, m } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://github.com/manjeet0505/portfolio',
    image: '/projects/portfolio.png'
  },
  // Add more projects here
];

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <LazyMotion features={domAnimation}>
        <div className="min-h-screen bg-[#0A192F] text-white pt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-[#CCD6F6] mb-4">
                My Projects
              </h1>
              <div className="w-24 h-1 bg-[#64FFDA] mx-auto rounded-full" />
            </m.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <m.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#112240] rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="relative h-48">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#CCD6F6] mb-2">
                      {project.title}
                    </h3>
                    <p className="text-[#8892B0] mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-[#64FFDA] text-sm px-2 py-1 rounded-full border border-[#64FFDA]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-[#64FFDA] hover:text-[#8892B0] transition-colors duration-300"
                    >
                      View Project &rarr;
                    </Link>
                  </div>
                </m.div>
              ))}
            </div>
          </div>
        </div>
      </LazyMotion>
    </>
  );
} 