"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';

const LoadingPage: React.FC = () => {
  const router = useRouter();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : prev));
    }, 30);

    if (progress === 100) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [progress]);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        router.push('/video-showcase');
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [progress, router]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 flex-col items-center justify-center bg-black text-white">
        <div className="flex flex-col items-center justify-center">
          {/* <h2 className="text-white tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">Your video is being created</h2> */}
          <div className="flex flex-col gap-3 p-4">
            <div className="flex gap-6 justify-between">
              <p className="text-white text-base font-medium b-roll-text leading-normal">Video creation in progress</p>
              <p className="text-white text-sm font-normal b-roll-text leading-normal">{progress}%</p>
            </div>
            <div className="rounded bg-[#544b3b] w-full">
              <div className="h-2 rounded bg-white" style={{ width: `${progress}%`, transition: 'width 0.3s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
