declare global {
  interface Window {
    chatbase?: ChatbaseFunction;
  }
}

type ChatbaseFunction = {
  (command: "getState"): string;
  (...args: any[]): void;
  q?: any[];
};


'use client';


import React, { useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import AnimatedBackground from './components/effects/AnimatedBackground';

export default function Home() {
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sliderRef);

  useEffect(() => {
    if (!window.chatbase || (window.chatbase as any)("getState") !== "initialized") {
      (window as any).chatbase = (...args: any[]) => {
        if (!(window as any).chatbase.q) {
          (window as any).chatbase.q = [];
        }
        (window as any).chatbase.q.push(args);
      };

      (window as any).chatbase = new Proxy((window as any).chatbase, {
        get(target, prop) {
          if (prop === 'q') return target.q;
          return (...args: any[]) => target(prop, ...args);
        }
      });
    }

    const script = document.createElement('script');
    script.src = 'https://www.chatbase.co/embed.min.js';
    script.id = 'MnV1fKpKxmXqLMsL34prr'; // Replace with your actual bot ID
    script.setAttribute('domain', 'www.chatbase.co');
    document.body.appendChild(script);
  }, []);
  
  

  const scrollToSkills = () => {
    skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const languageInsights = [
    {
      language: "JavaScript/TypeScript",
      description: "Modern ES6+ features, async programming, and type safety with TypeScript. Experienced in building scalable applications with clean architecture.",
      stats: {
        experience: "1+ years",
        projects: "3+",
        expertise: "Intermediate"
      },
      libraries: ["React", "Node.js", "Express", "Next.js"]
    },
    {
      language: "Python",
      description: "Data analysis, automation, and backend development. Strong focus on Django and FastAPI for building robust APIs and web applications.",
      stats: {
        experience: "1+ years",
        projects: "3+",
        expertise: "Intermediate"
      },
      libraries: ["Django", "FastAPI", "Pandas", "NumPy"]
    },
    {
      language: "Database Technologies",
      description: "Expertise in both SQL and NoSQL databases. Proficient in designing efficient schemas and optimizing queries for performance.",
      stats: {
        experience: "1+ years",
        projects: "3+",
        expertise: "Intermediate"
      },
      libraries: ["MongoDB", "PostgreSQL", "Redis", "MySQL"]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % languageInsights.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + languageInsights.length) % languageInsights.length);
  };

  return (
    <main className="min-h-screen bg-[#0A192F] text-white overflow-x-hidden relative">
      {/* Global Animated Background */}
      <AnimatedBackground />
      <Navbar />
      <div className="flex flex-col gap-16 md:gap-24 pt-32 pb-12">
        <section className="max-w-6xl mx-auto w-full bg-[#101a2b]/70 backdrop-blur-2xl rounded-3xl shadow-2xl border border-[#233554]/60 p-8 md:p-16 mb-4 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none rounded-3xl border border-white/10" style={{boxShadow: 'inset 0 1.5px 24px 0 #0A192Fcc'}} />
          <HeroSection onScrollClick={scrollToSkills} />
        </section>
        <section className="max-w-6xl mx-auto w-full bg-[#101a2b]/70 backdrop-blur-2xl rounded-3xl shadow-2xl border border-[#233554]/60 p-8 md:p-16 mb-4 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none rounded-3xl border border-white/10" style={{boxShadow: 'inset 0 1.5px 24px 0 #0A192Fcc'}} />
          <div ref={skillsRef}>
            <SkillsSection />
          </div>
        </section>
        <section className="max-w-6xl mx-auto w-full bg-[#101a2b]/70 backdrop-blur-2xl rounded-3xl shadow-2xl border border-[#233554]/60 p-8 md:p-16 mb-4 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none rounded-3xl border border-white/10" style={{boxShadow: 'inset 0 1.5px 24px 0 #0A192Fcc'}} />
          <ProjectsSection />
        </section>
        <section className="max-w-6xl mx-auto w-full bg-[#101a2b]/70 backdrop-blur-2xl rounded-3xl shadow-2xl border border-[#233554]/60 p-8 md:p-16 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none rounded-3xl border border-white/10" style={{boxShadow: 'inset 0 1.5px 24px 0 #0A192Fcc'}} />
          <Footer />
        </section>
      </div>
    </main>
  );
}
