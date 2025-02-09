'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import Image from 'next/image';

const categories = ['All', 'Product', 'AR/VR', 'Design', 'Video', 'Entrepreneurship'];

const projects = [
  { 
    title: 'Rune Wars', 
    category: 'Product', 
    link: '/work/runewars',
    image: '/projects/runewars.avif'
  },
  { 
    title: 'Spotify', 
    category: 'Product', 
    link: '/work/spotify',
    image: '/projects/spotify.avif'
  },
  { 
    title: 'Between Worlds', 
    category: 'AR/VR', 
    link: '/work/between-worlds',
    image: '/projects/between-worlds.gif'
  },
  { 
    title: 'POP', 
    category: 'Entrepreneurship', 
    link: '/work/pop',
    image: '/projects/pop.avif'
  },
  { 
    title: 'Echo', 
    category: 'Product', 
    link: '/work/echo',
    image: '/projects/echo.avif'
  },
  { 
    title: 'Content Creator', 
    category: 'Video', 
    link: '/work/content-creator',
    image: '/projects/content-creator.avif'
  },
  { 
    title: 'A series of spatial experiments.', 
    category: 'AR/VR', 
    link: '/work/spatial',
    image: '/projects/spatial.avif'
  },
  { 
    title: 'Wing', 
    category: 'Product', 
    link: '/work/wing',
    image: '/projects/wing.avif'
  },
  { 
    title: 'Whisper', 
    category: 'Design', 
    link: '/work/monogram',
    image: '/projects/whisper.avif'
  },
  { 
    title: 'vi-describe', 
    category: 'Product', 
    link: '/work/vi-describe',
    image: '/projects/vi-describe.avif'
  },
  { 
    title: 'A series of musical experiments.', 
    category: 'Design', 
    link: '/work/music',
    image: '/projects/music.avif'
  },
  { 
    title: 'Character Design', 
    category: 'Design', 
    link: '/work/character-design',
    image: '/projects/character-design.avif'
  }
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredProjects = projects.filter(project => 
    selectedCategory === 'All' || project.category === selectedCategory
  );

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <main className="min-h-screen">
      {/* Logo */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute top-8 left-1/2 transform -translate-x-1/2 z-50"
      >
        <span className="font-syne text-3xl" style={{ fontWeight: 900 }}>
          kinetic
        </span>
      </motion.div>

      {/* Theme Toggle */}
      <div className="absolute top-4 right-4 z-50">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-800"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <motion.svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ scale: 0.8, rotate: -30 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="stroke-white"
              strokeWidth="1.5"
            >
              <path d="M12 3v1m0 16v1m-9-9H2m3.314-5.686L6.9 7.9m10.686-.686L16 8.8m5 3.2h-1m-3.314 5.686l-1.586-1.586M6.9 16.1l-1.586 1.586M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" strokeLinecap="round" strokeLinejoin="round"/>
            </motion.svg>
          ) : (
            <motion.svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ scale: 0.8, rotate: 30 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="stroke-black"
              strokeWidth="1.5"
            >
              <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" strokeLinecap="round" strokeLinejoin="round"/>
            </motion.svg>
          )}
        </button>
      </div>
      
      {/* Hero Section */}
      <div className="relative h-screen flex items-center overflow-hidden">
        {/* Scattered Images - Hidden on mobile */}
        <motion.div className="absolute inset-0 max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 pointer-events-none hidden lg:block">
          {/* Top Left */}
          <motion.div
            initial={{ opacity: 0, x: -100, y: -50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-[20%] left-[8%] w-[160px] xl:w-[200px]"
          >
            <Image
              src="/home/Screenshot 2025-02-01 at 10.20.27.avif"
              alt="Interactive 1"
              width={200}
              height={150}
              className="rounded-lg shadow-xl cursor-pointer pointer-events-auto hover:scale-105 transition-transform w-full h-auto"
              onClick={() => window.open('/work/spatial', '_self')}
            />
          </motion.div>

          {/* Top Right */}
          <motion.div
            initial={{ opacity: 0, x: 100, y: -50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute top-[15%] right-[8%] w-[140px] xl:w-[180px]"
          >
            <Image
              src="/home/Screenshot 2025-02-01 at 10.20.32.avif"
              alt="Interactive 2"
              width={180}
              height={130}
              className="rounded-lg shadow-xl cursor-pointer pointer-events-auto hover:scale-105 transition-transform w-full h-auto"
              onClick={() => window.open('/work/between-worlds', '_self')}
            />
          </motion.div>

          {/* Bottom Left */}
          <motion.div
            initial={{ opacity: 0, x: -100, y: 50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute bottom-[25%] left-[12%] w-[120px] xl:w-[160px]"
          >
            <Image
              src="/home/Screenshot 2025-02-01 at 10.20.35.avif"
              alt="Interactive 3"
              width={160}
              height={120}
              className="rounded-lg shadow-xl cursor-pointer pointer-events-auto hover:scale-105 transition-transform w-full h-auto"
              onClick={() => window.open('/work/runewars', '_self')}
            />
          </motion.div>

          {/* Bottom Right */}
          <motion.div
            initial={{ opacity: 0, x: 100, y: 50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute bottom-[20%] right-[12%] w-[180px] xl:w-[220px]"
          >
            <Image
              src="/home/Screenshot 2025-02-01 at 10.20.48.avif"
              alt="Interactive 4"
              width={220}
              height={165}
              className="rounded-lg shadow-xl cursor-pointer pointer-events-auto hover:scale-105 transition-transform w-full h-auto"
              onClick={() => window.open('/work/spotify', '_self')}
            />
          </motion.div>

          {/* Center Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute top-1/2 right-[5%] -translate-y-1/2 w-[120px] xl:w-[150px]"
          >
            <Image
              src="/home/Screenshot 2025-02-01 at 10.21.19.avif"
              alt="Interactive 5"
              width={150}
              height={110}
              className="rounded-lg shadow-xl cursor-pointer pointer-events-auto hover:scale-105 transition-transform w-full h-auto"
              onClick={() => window.open('/work/echo', '_self')}
            />
          </motion.div>

          {/* Center Left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute top-1/2 left-[5%] -translate-y-1/2 w-[140px] xl:w-[170px]"
          >
            <Image
              src="/home/XVKquNxKCuPBBJfQPkDl1fPpc.avif"
              alt="Interactive 6"
              width={170}
              height={125}
              className="rounded-lg shadow-xl cursor-pointer pointer-events-auto hover:scale-105 transition-transform w-full h-auto"
              onClick={() => window.open('/work/content-creator', '_self')}
            />
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[60px] mt-64 font-syne text-center leading-tight" style={{ fontWeight: 600 }}
          >
            The next-gen editing tool, <br /> <span className="italic">made by creators.</span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mt-4 mb-10 text-subtitle"
            style={{ fontFamily: 'DM Sans', fontWeight: 500 }}
          >
            Transform your scattered videos into compelling, platform-ready content in seconds. 
          </motion.h2>
          <div className="flex justify-center mt-6 space-x-4">
            <button className="bg-white text-black dark:bg-black dark:text-white font-syne text-button py-2 px-6 rounded-full shadow-md hover:shadow-lg transition duration-300" style={{ fontWeight: 600 }}>
              Join the waitlist
              {/* <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg> */}
            </button>
            <button className="bg-transparent border-2 border-white text-white dark:border-black dark:text-black font-syne text-button py-2 px-6 rounded-full hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition duration-300" style={{ fontWeight: 600 }}>
              View demo
            </button>
            
          </div>
          <div className="bg-white rounded-lg mt-20 h-80 mb-6 hover:shadow-lg transition-shadow duration-300"></div>
          
        </motion.div>
      </div>

      {/* Steps Section */}
      <section className="py-16 bg-black text-white w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-300 mt-8 mb-32 opacity-50 w-full"></div>
          <h1 className="text-[60px] font-syne text-center leading-tight mb-20" style={{ fontWeight: 600 }}>
            Introducing, Kinetic.
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center hover:scale-105 transition-transform duration-300"
            >
              <motion.div
                className="rounded-lg mb-10 hover:shadow-lg transition-shadow duration-300 flex justify-center"
                style={{ width: 'auto', height: 'auto' }}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src="/images/step1.jpg"
                  width={500}
                  height={500}
                  alt="Upload your b-roll"
                  className="rounded-lg"
                />
              </motion.div>
              <h5 className="font-syne font-semibold text-2xl mt-4" style={{ fontWeight: 600, fontSize: '24px' }}>01. Upload your b-roll.</h5>
              <p className="text-sm mt-2 text-gray-400" style={{ fontFamily: 'DM Sans', fontWeight: 500, fontSize: '16px', lineHeight: '160%' }}>Upload your video snippets from b-roll footage or past content.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center hover:scale-105 transition-transform duration-300"
            >
              <motion.div
                className="rounded-lg mb-10 hover:shadow-lg transition-shadow duration-300 flex justify-center"
                style={{ width: 'auto', height: 'auto' }}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src="/images/step2.jpg"
                  width={500}
                  height={500}
                  alt="Find your story"
                  className="rounded-lg"
                />
              </motion.div>
              <h5 className="font-syne font-semibold text-2xl mt-4" style={{ fontWeight: 600, fontSize: '24px' }}>02. Find your story.</h5>
              <p className="text-sm mt-2 text-gray-400" style={{ fontFamily: 'DM Sans', fontWeight: 500, fontSize: '16px', lineHeight: '160%' }}>Storycraft suggests video narratives and captioning based on your brand's content and engagement trends.</p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-center hover:scale-105 transition-transform duration-300"
            >
              <motion.div
                className="rounded-lg mb-10 hover:shadow-lg transition-shadow duration-300 flex justify-center"
                style={{ width: 'auto', height: 'auto' }}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src="/images/step3.jpg"
                  width={500}
                  height={500}
                  alt="Cut, order, caption"
                  className="rounded-lg"
                />
              </motion.div>
              <h5 className="font-syne font-semibold text-2xl mt-4" style={{ fontWeight: 600, fontSize: '24px' }}>03. Cut, order, caption.</h5>
              <p className="text-sm mt-2 text-gray-400" style={{ fontFamily: 'DM Sans', fontWeight: 500, fontSize: '16px', lineHeight: '160%' }}>We help you create a video sequence and caption, automatically structured for flow.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-center hover:scale-105 transition-transform duration-300"
            >
              <motion.div
                className="rounded-lg mb-10 hover:shadow-lg transition-shadow duration-300 flex justify-center"
                style={{ width: 'auto', height: 'auto' }}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src="/images/step4.jpg"
                  width={500}
                  height={500}
                  alt="Make it shine"
                  className="rounded-lg"
                />
              </motion.div>
              <h5 className="font-syne font-semibold text-2xl mt-4" style={{ fontWeight: 600, fontSize: '24px' }}>04. Make it shine.</h5>
              <p className="text-sm mt-2 text-gray-400" style={{ fontFamily: 'DM Sans', fontWeight: 500, fontSize: '16px', lineHeight: '160%' }}>Our AI helps you add styles to match reference videos, or your own brand style.</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-black text-white text-center">
      <div className="border-t border-gray-300 my-16 opacity-50 w-full"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-[60px] font-syne mb-8" style={{ fontWeight: 600 }}>
            Get Early Access
          </h1>
          <button className="bg-white text-black dark:bg-black dark:text-white font-syne text-button py-2 px-6 rounded-full shadow-md hover:shadow-lg transition duration-300 inline-flex items-center" style={{ fontWeight: 600 }}>
            Join the waitlist
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-transparent py-8 py-16">
        <div className="container mx-auto text-center text-gray-400 font-syne space-y-4">
          {/* <motion.hr className="border-gray-400 mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} /> */}
          <motion.p className="text-sm cursor-pointer hover:text-gray-300" whileHover={{ scale: 1.05 }}>
            &copy; 2025 KNTC. All rights reserved.
          </motion.p>
        </div>
      </footer>
    </main>
  );
}
