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
      <div className="flex-1 flex items-center justify-center">
        <h1 className="text-white text-3xl">Upload Footage</h1>
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
  );
};

export default UploadFootage;
