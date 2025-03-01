"use client"
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { useRouter } from 'next/navigation';
import { CreateVideoTitle } from '../../components/CreateVideoHeader';
import Confetti from 'react-confetti';
import { FaCheckCircle } from 'react-icons/fa';

const VideoShowcase = () => {
  const router = useRouter();
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/captions');
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center">
      <Header />
      <Confetti width={windowDimensions.width} height={windowDimensions.height} />
      <div className="min-h-screen flex items-center justify-center">
        <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1 items-center justify-center">
          <FaCheckCircle className="text-white text-5xl mb-4" />
          <CreateVideoTitle title="Your video is ready!" />
          <div className="flex justify-center mt-4 w-full">
            {/* <button
              onClick={handleContinue}
              className="flex w-full max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-black text-lg b-roll-text text-[#181611] leading-normal tracking-[0.015em]"
            >
              Check it out
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoShowcase;