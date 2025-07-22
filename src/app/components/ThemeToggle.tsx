'use client';

import { useTheme } from 'next-themes';
import { FiSun, FiMoon } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-6 rounded-full p-1 flex items-center justify-center bg-gray-200 dark:bg-gray-700 transition-colors duration-300"
      aria-label="Toggle theme"
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={theme}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute"
        >
          {theme === 'dark' ? (
            <FiMoon className="text-yellow-400" />
          ) : (
            <FiSun className="text-orange-500" />
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
} 