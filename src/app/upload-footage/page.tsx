"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';

const UploadFootage: React.FC = () => {
  const router = useRouter();

  const handleContinue = () => {
    router.push('/create-video');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="relative flex size-full min-h-screen flex-col bg-[#181611] dark group/design-root overflow-x-hidden" style={{ fontFamily: 'Space Grotesk, Noto Sans, sans-serif' }}>
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
              <h2 className="text-white tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">Let's make a video</h2>
              <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">Start with your footage, and we'll help you create a video</p>
              <div className="flex justify-center">
                <div className="flex flex-1 gap-3 max-w-[480px] flex-col items-stretch px-4 py-3">
                  <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#edaf34] text-[#181611] text-sm font-bold leading-normal tracking-[0.015em] w-full"
                  >
                    <span className="truncate">Upload</span>
                  </button>
                  <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#393328] text-white text-sm font-bold leading-normal tracking-[0.015em] w-full"
                  >
                    <span className="truncate">Use stock footage</span>
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-3 p-4">
                <div className="flex gap-6 justify-between"><p className="text-white text-base font-medium leading-normal">Upload</p></div>
                <div className="rounded bg-[#544b3b]"><div className="h-2 rounded bg-white" style={{ width: '50%' }}></div></div>
                <p className="text-[#b9b09d] text-sm font-normal leading-normal">3 of 6 clips uploaded</p>
              </div>
              <div className="flex px-4 py-3">
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-transparent text-white text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  <span className="truncate">Skip for now</span>
                </button>
              </div>
            </div>
            
          </div>
          
      <div className="flex justify-center py-5">
        <button 
          onClick={handleContinue} 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Continue
        </button>
      </div>
        </div>
        
      </div>
    </div>
  );
};

export default UploadFootage;
