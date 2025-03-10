'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import FadeInOut from './components/animations/FadeInOut';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [text, setText] = useState('');
  const fullText = 'made for brands.';
  const { setTheme } = useTheme();

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
  }, [setTheme]);

  if (!mounted) return null;

  return (
    <main className="min-h-screen">
      {/* Logo */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute top-8 left-1/2 transform -translate-x-1/2 z-50"
      >
        <header className="w-full z-50 text-white flex justify-between items-center px-4">
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
            className="absolute top-[20%] left-[8%] w-[200px] xl:w-[250px]"
          >
            <motion.div
              className="rounded-lg mb-10 hover:shadow-lg transition-shadow duration-300 flex justify-center"
              style={{ width: 'auto', height: 'auto' }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/home/1.jpg"
                alt="Interactive Image 1"
                width={250}
                height={200}
                className="rounded-lg shadow-xl cursor-pointer pointer-events-auto hover:scale-105 transition-transform w-full h-auto"
              />
            </motion.div>
          </motion.div>

          {/* Top Right */}
          <motion.div
            initial={{ opacity: 0, x: 100, y: -50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 2 }}
            className="absolute top-[15%] right-[8%] w-[180px] xl:w-[230px]"
          >
            <motion.div
              className="rounded-lg mb-10 hover:shadow-lg transition-shadow duration-300 flex justify-center"
              style={{ width: 'auto', height: 'auto' }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/home/2.jpg"
                alt="Interactive Image 2"
                width={230}
                height={180}
                className="rounded-lg shadow-xl cursor-pointer pointer-events-auto hover:scale-105 transition-transform w-full h-auto"
              />
            </motion.div>
          </motion.div>

          {/* Bottom Left */}
          <motion.div
            initial={{ opacity: 0, x: -100, y: 50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 2 }}
            className="absolute bottom-[25%] left-[12%] w-[150px] xl:w-[200px]"
          >
            <motion.div
              className="rounded-lg mb-10 hover:shadow-lg transition-shadow duration-300 flex justify-center"
              style={{ width: 'auto', height: 'auto' }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/home/3.jpg"
                alt="Interactive Image 3"
                width={200}
                height={150}
                className="rounded-lg shadow-xl cursor-pointer pointer-events-auto hover:scale-105 transition-transform w-full h-auto"
              />
            </motion.div>
          </motion.div>

          {/* Bottom Right */}
          <motion.div
            initial={{ opacity: 0, x: 120, y: 50 }}
            animate={{ opacity: 1, x: 20, y: 0 }}
            transition={{ duration: 2 }}
            className="absolute bottom-[20%] right-[10%] w-[220px] xl:w-[270px]"
          >
            <motion.div
              className="rounded-lg mb-10 hover:shadow-lg transition-shadow duration-300 flex justify-center"
              style={{ width: 'auto', height: 'auto' }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/home/4.jpg"
                alt="Interactive Image 4"
                width={270}
                height={210}
                className="rounded-lg shadow-xl cursor-pointer pointer-events-auto hover:scale-105 transition-transform w-full h-100"
              />
            </motion.div>
          </motion.div>

          {/* Center Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
            className="absolute top-1/2 right-[5%] -translate-y-1/2 w-[150px] xl:w-[200px]"
          >
            <motion.div
              className="rounded-lg mb-10 hover:shadow-lg transition-shadow duration-300 flex justify-center"
              style={{ width: 'auto', height: 'auto' }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/home/5.jpg"
                alt="Interactive Image 5"
                width={200}
                height={150}
                className="rounded-lg shadow-xl cursor-pointer pointer-events-auto hover:scale-105 transition-transform w-full h-auto"
              />
            </motion.div>
          </motion.div>

          {/* Center Left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
            className="absolute top-1/2 left-[5%] -translate-y-1/2 w-[170px] xl:w-[220px]"
          >
            <motion.div
              className="rounded-lg mb-10 hover:shadow-lg transition-shadow duration-300 flex justify-center"
              style={{ width: 'auto', height: 'auto' }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/home/6.jpg"
                alt="Interactive Image 6"
                width={220}
                height={170}
                className="rounded-lg shadow-xl cursor-pointer pointer-events-auto hover:scale-105 transition-transform w-full h-auto"
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
            className="text-[80px] mt-16 font-syne text-center leading-tight" style={{ fontWeight: 600 }}
          >
            Short form videos <br /> <span className="italic">{text}</span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mt-4 mb-10 text-xl"
            style={{ fontFamily: 'DM Sans', fontWeight: 500 }}
          >
            Transforming b-roll into audience-ready content in seconds, powered by AI.
          </motion.h2>
          <div className="flex justify-center mt-6">
            <button
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSewBbVmB-Ym8EPWEaO60DZlLAy7Da_MB_dkO-jLbATyTYSxFA/viewform?usp=sharing', '_blank')}
              className="bg-yellow-500 text-black font-syne text-xl py-3 px-8 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
              style={{ fontWeight: 600 }}
            >
              Join the waitlist
              <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </button>
            {/* <a href="/upload-footage" className="ml-4 bg-white bg-opacity-20 text-white font-syne text-xl py-3 px-8 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300">
              Try Demo
            </a> */}
          </div>
        </motion.div>
      </div>

      {/* Steps Section */}
      <section className="py-16 bg-black text-white w-full mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="border-t border-gray-300 mt-8 mb-32 opacity-50 w-full"></div> */}
          {/* <div className="border-t border-gray-300 mt-4 mb-32 opacity-50 w-full"></div> */}
          <h1 className="text-[60px] font-syne text-center leading-tight mb-12 mt-12" style={{ fontWeight: 600 }}>
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
                  width={600}
                  height={600}
                  alt="Upload b-roll"
                  className="rounded-lg"
                />
              </motion.div>
              <FadeInOut>
                <h5 className="font-syne font-semibold text-3xl mt-4" style={{ fontWeight: 600, fontSize: '20px' }}>01. Upload b-roll.</h5>
                <p className="text-lg mt-2 text-gray-400" style={{ fontFamily: 'DM Sans', fontWeight: 500, fontSize: '20px', lineHeight: '160%', marginTop: '20px' }}>Upload video snippets from b-roll footage or past content.</p>
              </FadeInOut>
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
                  width={600}
                  height={600}
                  alt="Find your story"
                  className="rounded-lg"
                />
              </motion.div>
              <FadeInOut>
                <h5 className="font-syne font-semibold text-3xl mt-4" style={{ fontWeight: 600, fontSize: '20px' }}>02. Find your brand story.</h5>
                <p className="text-lg mt-2 text-gray-400" style={{ fontFamily: 'DM Sans', fontWeight: 500, fontSize: '20px', lineHeight: '160%', marginTop: '20px' }}>Get suggested video narratives and captioning based on your brand&apos;s content and engagement trends.</p>
              </FadeInOut>
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
                  width={600}
                  height={600}
                  alt="Cut, order, caption"
                  className="rounded-lg"
                />
              </motion.div>
              <FadeInOut>
                <h5 className="font-syne font-semibold text-3xl mt-4" style={{ fontWeight: 600, fontSize: '20px' }}>03. Cut, order, caption.</h5>
                <p className="text-lg mt-2 text-gray-400" style={{ fontFamily: 'DM Sans', fontWeight: 500, fontSize: '20px', lineHeight: '160%', marginTop: '20px' }}>We help you create a video sequence and caption, automatically structured for flow.</p>
              </FadeInOut>
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
                  width={600}
                  height={600}
                  alt="Make it shine"
                  className="rounded-lg"
                />
              </motion.div>
              <FadeInOut>
                <h5 className="font-syne font-semibold text-3xl mt-4" style={{ fontWeight: 600, fontSize: '20px' }}>04. Make it shine.</h5>
                <p className="text-lg mt-2 text-gray-400" style={{ fontFamily: 'DM Sans', fontWeight: 500, fontSize: '20px', lineHeight: '160%', marginTop: '20px' }}>Our AI helps you add styles to match reference videos, or your own brand style.</p>
              </FadeInOut>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-black text-white text-center">
        <div className="border-t border-gray-300 my-32 opacity-50 w-full"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <h1 className="text-[80px] font-syne mb-8" style={{ fontWeight: 600 }}>
            Get Early Access
          </h1>
          <button
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSewBbVmB-Ym8EPWEaO60DZlLAy7Da_MB_dkO-jLbATyTYSxFA/viewform?usp=sharing', '_blank')}
            className="bg-yellow-500 text-black font-syne text-2xl py-4 px-10 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 inline-flex items-center"
            style={{ fontWeight: 600 }}
          >
            Join the waitlist
            <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-transparent py-8 py-16">
        <div className="container mx-auto text-center text-gray-400 font-syne space-y-4">
          {/* <motion.hr className="border-gray-400 mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} /> */}
          <motion.p className="text-lg cursor-pointer text-white hover:text-gray-300" whileHover={{ scale: 1.05 }}>
            &copy; 2025 KINETIC. All rights reserved.
          </motion.p>
        </div>
      </footer>
    </main>
  );
}
