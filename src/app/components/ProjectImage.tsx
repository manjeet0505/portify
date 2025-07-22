'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

interface ProjectImageProps {
  src: string;
  alt: string;
}

export default function ProjectImage({ src, alt }: ProjectImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.18}
      tiltMaxAngleX={14}
      tiltMaxAngleY={14}
      scale={1.03}
      className="w-full h-full"
      transitionSpeed={1800}
    >
      <div className="w-full h-full relative group">
        <motion.div
          className="absolute inset-0 bg-[#112240] z-0 flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: isLoading ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="w-12 h-12 border-4 border-[#64FFDA] border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>
        {/* Glowing border on hover and floating animation */}
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none z-10"
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
        <motion.div
          className="w-full h-full"
          animate={{ y: [0, -6, 0, 6, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onLoad={() => setIsLoading(false)}
          />
        </motion.div>
      </div>
    </Tilt>
  );
} 