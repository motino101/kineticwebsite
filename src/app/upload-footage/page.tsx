"use client";

import React, { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import { FaTimes, FaArrowLeft } from 'react-icons/fa';

const UploadFootage: React.FC = () => {
  const router = useRouter();
  const [uploadedVideos, setUploadedVideos] = useState<string[]>(['Video 1', 'Video 2', 'Video 3']);

  const handleContinue = () => {
    router.push('/create-video');
  };

  const handleBack = () => {
    router.back();
  };

  const handleRemoveVideo = (index: number) => {
    setUploadedVideos(prevVideos => prevVideos.filter((_, i) => i !== index));
  };

  const handleDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  }, []);

  const handleDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    // Handle file upload logic here
    console.log(files);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="relative flex flex-col min-h-screen bg-black dark group/design-root overflow-hidden" style={{ fontFamily: 'Space Grotesk, Noto Sans, sans-serif', height: '100vh' }}>
        <button
          onClick={() => router.back()}
          className="absolute top-4 left-4 bg-transparent text-white text-xl font-bold"
        >
          <FaArrowLeft />
        </button>
        <div className="layout-container flex h-full grow flex-col">
          
          <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
            <p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">Create Video</p>
          </div>
          <div className="flex flex-col gap-3 p-4">
            <div className="flex gap-6 justify-between">
              <p className="section-title text-white text-base font-medium leading-normal">Step 1: Upload Footage</p>
            </div>
            <div className="rounded bg-[#544b3b]">
              <div className="h-2 rounded bg-white" style={{ width: '33%' }}></div>
            </div>
            <div
              className="border-dashed border-2 border-[#393328] rounded-lg p-4 mt-4 text-center text-white cursor-pointer"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              Drag & drop your videos here
            </div>
          </div>
              <div className="flex flex-col gap-3 p-4">
                {/* <div className="flex gap-6 justify-between"><p className="text-white text-base font-medium leading-normal">Upload</p></div> */}
                {/* <div className="rounded bg-[#544b3b]"><div className="h-2 rounded bg-white" style={{ width: '50%' }}></div></div> */}
                {/* <p className="text-[#b9b09d] text-sm font-normal leading-normal">3 of 6 clips uploaded</p> */}
                <div className="text-white text-base font-medium leading-normal">
                  {uploadedVideos.length} video(s) uploaded
                </div>
                <ul className="text-white">
                  {uploadedVideos.map((video, index) => (
                    <li key={index} className="flex justify-between items-center py-2">
                      <span>{video}</span>
                      <button onClick={() => handleRemoveVideo(index)} className="bg-[#393328] hover:bg-[#5c5145] text-white font-bold py-1 px-2 rounded-full">
                        <FaTimes />
                      </button>
                    </li>
                    
                  ))}
                </ul>
                
              </div>
              <div className="flex justify-center mt-10">
                <button
                  onClick={handleContinue} 
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#edaf34] text-[#181611] text-sm font-bold leading-normal tracking-[0.015em] w-full"
                >
                  Continue
                </button>
              </div>
            </div>
            
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default UploadFootage;
