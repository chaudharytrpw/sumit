'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Wrap Next.js Image with motion
const MotionImage = motion(Image);

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('[data-cursor-hover]')
      ) {
        setCursorVariant('hidden');
      }
    };

    const handleMouseLeave = () => {
      setCursorVariant('default');
    };

    window.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  const containerVariants = {
    default: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{ x: mousePosition.x, y: mousePosition.y }}
      variants={containerVariants}
      animate={cursorVariant}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 20,
        mass: 0.25,
      }}
    >
      <MotionImage
        animate={{
          rotate: [0, -15, 15, 0],
          scale: [1, 1.1, 1.05, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
        }}
        src="/img/icons8-monarch-butterfly-30.png"
        alt="Butterfly Cursor"
        width={42}
        height={42}
        className="transform -translate-x-1/2 -translate-y-1/2"
      />
    </motion.div>
  );
}