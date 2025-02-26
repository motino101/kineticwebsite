"use client";

import React from 'react';
import Header from '../components/Header';
import { useRouter } from 'next/navigation';

const VideoShowcase: React.FC = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center">
        <h1 className="text-white text-3xl">Your Video is Ready!</h1>
      </div>
      <div className="flex justify-center py-5">
        <button 
          onClick={() => router.push('/captions')} 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          View Video
        </button>
      </div>
    </div>
  );
};

export default VideoShowcase;
