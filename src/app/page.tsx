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
  const [text, setText] = useState('');
  const fullText = 'made by creators.';
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setMounted(true);
    setTheme('dark');
  }, []);

  const filteredProjects = projects.filter(project => 
    selectedCategory === 'All' || project.category === selectedCategory
  );

  if (!mounted) return null;

  return (
    <main className="min-h-screen">
      {/* Logo */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute top-8 left-1/2 transform -translate-x-1/2 z-50"
      >
        <header className="w-full z-50 shadow-md bg-black text-white">
          <span className="font-syne text-3xl" style={{ fontWeight: 900, color: 'white' }}>
            kinetic
          </span>
        </header>
      </motion.div>

      {/* Hero Section */}
      <div className="relative h-screen flex items-center overflow-hidden">
        {/* Scattered Images - Hidden on mobile */}
        <motion.div className="absolute inset-0 max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 pointer-events-none hidden lg:block">
          {/* Top Left */}
          <motion.div
            initial={{ opacity: 0, x: -100, y: -50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 2 }}
            className="absolute top-[20%] left-[8%] w-[160px] xl:w-[200px]"
          >
            <motion.div
              className="rounded-lg mb-10 hover:shadow-lg transition-shadow duration-300 flex justify-center"
              style={{ width: 'auto', height: 'auto' }}
              whileHover={{ scale: 1.05 }}
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
          </motion.div>

          {/* Top Right */}
          <motion.div
            initial={{ opacity: 0, x: 100, y: -50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 2 }}
            className="absolute top-[15%] right-[8%] w-[140px] xl:w-[180px]"
          >
            <motion.div
              className="rounded-lg mb-10 hover:shadow-lg transition-shadow duration-300 flex justify-center"
              style={{ width: 'auto', height: 'auto' }}
              whileHover={{ scale: 1.05 }}
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
          </motion.div>

          {/* Bottom Left */}
          <motion.div
            initial={{ opacity: 0, x: -100, y: 50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 2 }}
            className="absolute bottom-[25%] left-[12%] w-[120px] xl:w-[160px]"
          >
            <motion.div
              className="rounded-lg mb-10 hover:shadow-lg transition-shadow duration-300 flex justify-center"
              style={{ width: 'auto', height: 'auto' }}
              whileHover={{ scale: 1.05 }}
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
          </motion.div>

          {/* Bottom Right */}
          <motion.div
            initial={{ opacity: 0, x: 100, y: 50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 2 }}
            className="absolute bottom-[20%] right-[12%] w-[180px] xl:w-[220px]"
          >
            <motion.div
              className="rounded-lg mb-10 hover:shadow-lg transition-shadow duration-300 flex justify-center"
              style={{ width: 'auto', height: 'auto' }}
              whileHover={{ scale: 1.05 }}
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
          </motion.div>

          {/* Center Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
            className="absolute top-1/2 right-[5%] -translate-y-1/2 w-[120px] xl:w-[150px]"
          >
            <motion.div
              className="rounded-lg mb-10 hover:shadow-lg transition-shadow duration-300 flex justify-center"
              style={{ width: 'auto', height: 'auto' }}
              whileHover={{ scale: 1.05 }}
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
          </motion.div>

          {/* Center Left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
            className="absolute top-1/2 left-[5%] -translate-y-1/2 w-[140px] xl:w-[170px]"
          >
            <motion.div
              className="rounded-lg mb-10 hover:shadow-lg transition-shadow duration-300 flex justify-center"
              style={{ width: 'auto', height: 'auto' }}
              whileHover={{ scale: 1.05 }}
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
            className="text-[60px] mt-16 font-syne text-center leading-tight" style={{ fontWeight: 600 }}
          >
            The next-gen editing tool, <br /> <span className="italic">{text}</span>
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
            <button
              className="bg-white text-black font-syne text-button py-2 px-6 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
              style={{ fontWeight: 600 }}
            >
              Join the waitlist
              {/* <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg> */}
            </button>
            <button
              className="bg-transparent border-2 border-white text-white font-syne text-button py-2 px-6 rounded-full hover:bg-white hover:text-black hover:scale-105 transition-transform duration-300"
              style={{ fontWeight: 600 }}
            >
              View demo
            </button>
            
          </div>
        </motion.div>
      </div>

      {/* Steps Section */}
      <section className="py-16 bg-black text-white w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="border-t border-gray-300 mt-8 mb-32 opacity-50 w-full"></div> */}
          {/* <div className="border-t border-gray-300 mt-4 mb-32 opacity-50 w-full"></div> */}
          <h1 className="text-[60px] font-syne text-center leading-tight mb-12" style={{ fontWeight: 600 }}>
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
        <div className="border-t border-gray-300 my-32 opacity-50 w-full"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <h1 className="text-[60px] font-syne mb-8" style={{ fontWeight: 600 }}>
            Get Early Access
          </h1>
          <button
            className="bg-white text-black font-syne text-button py-2 px-6 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 inline-flex items-center"
            style={{ fontWeight: 600 }}
          >
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
