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
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 80, damping: 12 }}
        className="fixed top-6 left-[35%] -translate-x-1/2 z-50 w-auto px-7 py-2.5 flex flex-row items-center justify-center rounded-full bg-white/15 backdrop-blur-lg border border-white/15 shadow-lg gap-x-6 group overflow-visible min-h-[48px]"
        style={{ boxShadow: '0 4px 16px 0 #64FFDA22, 0 1.5px 12px 0 #0A192F33', border: '1px solid #64FFDA15' }}
      >
        {/* Remove the animated glowing border m.div */}
        {/* Logo and nav links centered */}
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-[#0A192F] tracking-widest select-none relative group/logo">
          <span className="bg-gradient-to-tr from-[#64FFDA] via-[#5EEAD4] to-[#A5B4FC] animate-gradient-move rounded-full w-9 h-9 flex items-center justify-center text-lg font-bold shadow group-hover/logo:scale-105 group-hover/logo:shadow-[0_0_12px_#64FFDA44] transition-all duration-300">M</span>
          <span className="ml-1 bg-gradient-to-r from-[#64FFDA] via-[#5EEAD4] to-[#A5B4FC] bg-clip-text text-transparent animate-gradient-move">Manjeet</span>
        </Link>
        <div className="flex flex-row items-center gap-x-6 ml-6">
          {navItems.map((item, index) => (
            <m.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
            >
              <Link 
                href={item.href}
                className={`relative text-base font-medium px-3 py-1 rounded-md transition-all duration-150 group/navlink
                  ${pathname === item.href ? 'bg-gradient-to-r from-[#64FFDA]/30 to-[#A5B4FC]/30 text-[#0A192F] shadow-[0_0_4px_#64FFDA33] scale-100' : 'text-[#0A192F] hover:text-[#64FFDA]'}
                `}
              >
                <span className="relative z-10 group-hover/navlink:scale-105 transition-transform duration-100">{item.name}</span>
                {/* Animated Gradient Underline */}
                <span className={`absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-[#64FFDA] to-[#5EEAD4] rounded-full transition-transform duration-150
                  ${pathname === item.href ? 'scale-x-100 opacity-60' : 'scale-x-0 group-hover/navlink:scale-x-100 opacity-40'}
                `} />
              </Link>
            </m.div>
          ))}
        </div>
        <div className="ml-6">
          <ThemeToggle />
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
      </m.nav>
    </LazyMotion>
  );
};

export default Navbar; 