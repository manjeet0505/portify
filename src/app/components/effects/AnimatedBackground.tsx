'use client';
import React, { useRef, useEffect } from 'react';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    // This check is crucial and now the logic that uses ctx is properly scoped.
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let t = 0;
    let animationId: number | null = null;

    const animate = () => {
      t += 0.008;
      // Animated dark gradient background
      const grad = ctx.createLinearGradient(0, 0, width, height);
      grad.addColorStop(0, '#0A192F');
      grad.addColorStop(0.3 + 0.1 * Math.sin(t), '#233554');
      grad.addColorStop(0.7 + 0.1 * Math.cos(t), '#112240');
      grad.addColorStop(1, '#1a2740');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Aurora/nebula overlay
      ctx.save();
      ctx.globalAlpha = 0.22;
      ctx.beginPath();
      for (let i = 0; i < width; i += 8) {
        ctx.lineTo(i, height / 2 + 80 * Math.sin((i / width) * 4 * Math.PI + t * 2) + 40 * Math.sin((i / width) * 8 * Math.PI - t));
      }
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      ctx.fillStyle = 'rgba(100,255,218,0.25)';
      ctx.shadowColor = '#64FFDA';
      ctx.shadowBlur = 80;
      ctx.fill();
      ctx.restore();

      ctx.save();
      ctx.globalAlpha = 0.14;
      ctx.beginPath();
      for (let i = 0; i < width; i += 8) {
        ctx.lineTo(i, height / 2 + 120 * Math.cos((i / width) * 3 * Math.PI - t * 1.5) + 30 * Math.sin((i / width) * 6 * Math.PI + t));
      }
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      ctx.fillStyle = 'rgba(165,180,252,0.18)';
      ctx.shadowColor = '#A5B4FC';
      ctx.shadowBlur = 60;
      ctx.fill();
      ctx.restore();

      animationId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    animate();
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
      {/* Canvas-based animated aurora/nebula background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      {/* Overlay a dark gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A192Fcc] via-[#11224099] to-[#0A192Fcc]" />
    </div>
  );
};

export default AnimatedBackground;