'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface ProjectLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  nextProject?: {
    title: string;
    link: string;
  };
}

export default function ProjectLayout({ title, subtitle, children, nextProject }: ProjectLayoutProps) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen">
      {/* Logo */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed top-8 left-8 z-50"
      >
        <Link href="/">
          <Image
            src="/Logo.avif"
            alt="Logo"
            width={40}
            height={40}
            className={`rounded-none ${theme === 'dark' ? '' : 'invert'}`}
          />
        </Link>
      </motion.div>

      {/* Theme Toggle */}
      <motion.button
        className="fixed top-8 right-8 z-50 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'dark' ? '🌞' : '🌙'}
      </motion.button>

      {/* Header */}
      <header className="pt-32 pb-16 px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-light mb-4"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400"
          >
            {subtitle}
          </motion.p>
        </div>
      </header>

      {/* Content */}
      <main className="px-8 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-4xl mx-auto prose dark:prose-invert prose-lg"
        >
          {children}
        </motion.div>
      </main>

      {/* Next Project */}
      {nextProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="fixed bottom-8 right-8"
        >
          <Link 
            href={nextProject.link}
            className="group flex items-center text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            <span className="mr-2">Next Project:</span>
            <span className="font-medium group-hover:translate-x-1 transition-transform inline-block">
              {nextProject.title}
            </span>
          </Link>
        </motion.div>
      )}
    </div>
  );
}
