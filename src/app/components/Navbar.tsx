'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, LazyMotion, domAnimation, m } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  const pathname = usePathname();

  return (
    <LazyMotion features={domAnimation}>
      <m.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 80, damping: 16 }}
        className="fixed top-4 left-0 right-0 z-50 w-full"
      >
        <div className="mx-auto max-w-4xl w-full flex items-center justify-between px-6 py-2 rounded-3xl bg-gradient-to-br from-[#23263a]/80 via-[#23263a]/60 to-[#23263a]/90 shadow-2xl border border-white/10 backdrop-blur-xl relative" style={{boxShadow:'0 8px 32px 0 #23263a44, 0 1.5px 12px 0 #64FFDA33'}}>
          {/* Animated border */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-[#64FFDA44] via-[#A5B4FC33] to-[#5EEAD444] opacity-60 blur-[2px] animate-border-glow" />

          {/* Logo/Brand */}
          <Link href="/" className="flex items-center gap-2 text-lg font-bold text-white select-none z-10 flex-shrink-0">
            <span className="bg-gradient-to-tr from-[#64FFDA] via-[#5EEAD4] to-[#A5B4FC] rounded-full w-9 h-9 flex items-center justify-center text-base font-bold shadow-md">M</span>
            <span className="hidden sm:block tracking-widest font-semibold drop-shadow">Manjeet</span>
          </Link>

          {/* Centered Nav Links */}
          <div className="hidden md:flex flex-1 flex items-center justify-center gap-x-8 z-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-1.5 rounded-xl font-medium transition-all duration-200 text-white/90 hover:text-[#64FFDA] hover:scale-105 focus:scale-105 focus:outline-none ${pathname === item.href ? 'bg-white/10 text-[#64FFDA] shadow-inner' : ''}`}
              >
                <span className="relative z-10">{item.name}</span>
                <span className={`absolute left-1/2 -translate-x-1/2 -bottom-1 h-0.5 w-2/3 bg-gradient-to-r from-[#64FFDA] to-[#A5B4FC] rounded-full transition-all duration-200 ${pathname === item.href ? 'opacity-80 scale-x-100' : 'opacity-0 group-hover:opacity-60 group-hover:scale-x-100'}`}></span>
              </Link>
            ))}
          </div>

          {/* Theme toggle and hamburger */}
          <div className="flex items-center z-10 flex-shrink-0">
            <ThemeToggle />
            {/* Hamburger for mobile */}
            <button
              className="md:hidden ml-2 text-2xl text-white z-10 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Open menu"
            >
              {isMenuOpen ? (
                <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <div className="fixed inset-0 z-40 flex items-start justify-center pt-24 bg-black/40 md:hidden" onClick={() => setIsMenuOpen(false)}>
              <div className="bg-[#23263a]/95 rounded-2xl shadow-2xl py-6 px-8 flex flex-col items-center gap-4 w-[90vw] max-w-xs border border-white/10" onClick={e => e.stopPropagation()}>
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`w-full text-center px-3 py-2 rounded-md font-medium text-lg transition-all duration-150 text-white/90 hover:text-[#64FFDA] ${pathname === item.href ? 'bg-white/10 text-[#64FFDA]' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
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
            @keyframes border-glow {
              0%, 100% { opacity: 0.6; }
              50% { opacity: 1; }
            }
            .animate-border-glow {
              animation: border-glow 3s ease-in-out infinite;
            }
          `}</style>
        </div>
      </m.nav>
    </LazyMotion>
  );
};

export default Navbar; 