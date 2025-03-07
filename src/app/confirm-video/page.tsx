"use client"

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { BackButton, CreateVideoTitle, StepIndicator, ProgressBar } from '../../components/CreateVideoHeader';
import Header from '../components/Header';
import { FaSpinner } from 'react-icons/fa';
import demoData from '../demo/demoExample.json';

const ConfirmVideo = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="relative flex flex-col min-h-screen overflow-y-auto bg-black dark group/design-root" style={{ fontFamily: 'Space Grotesk, Noto Sans, sans-serif', height: '100vh' }}>
        {loading ? (
          <div className="flex justify-center items-center h-full w-full absolute top-0 left-0 flex-col">
            <FaSpinner className="text-white animate-spin text-4xl" />
            <p className="text-white mt-4">Loading, please wait...</p>
          </div>
        ) : (
          <div className="layout-container flex h-full grow flex-col">
            <BackButton />
            <div className="px-40 flex flex-1 justify-center py-5">
              <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1 overflow-y-auto">
                <CreateVideoTitle title="Confirm Video" />
                <div className="flex flex-col gap-3 p-4">
                  <StepIndicator stepNumber={2} stepTitle="Review Details" />
                  <ProgressBar progress={50} />
                </div>
                <section className="rounded-lg p-8 mt-6 mb-8 w-full bg-[length:200%_100%] animate-gradient-x" style={{ background: 'linear-gradient(135deg, rgba(255, 99, 71, 0.5), rgba(255, 165, 0, 0.5), rgba(60, 179, 113, 0.5), rgba(30, 144, 255, 0.5), rgba(148, 0, 211, 0.5))' }}>
                  <h3 className="text-white text-lg font-bold leading-tight mb-4">Summary</h3>
                  <p className="text-white text-base font-normal leading-relaxed mb-4">
                    {demoData.description.split('\n\n').map((paragraph, index) => (
                      <span key={index} className="block mb-4">{paragraph}</span>
                    ))}
                  </p>
                </section>
                {demoData.clips.map((clip, index) => (
                  <div key={index} className="p-4">
                    <div className="flex items-stretch justify-between gap-4 rounded-xl">
                      <div className="flex flex-col gap-1 flex-[2_2_0px]">
                        <p className="text-[#b9b09d] text-sm font-normal leading-normal">Clip {index + 1}</p>
                        <p className="text-white text-base font-bold leading-tight">{clip.title}</p>
                        <p className="text-[#b9b09d] text-sm font-normal leading-normal">{clip.description}</p>
                      </div>
                      <div
                        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                        style={{ backgroundImage: `url(${clip.image})` }}
                      ></div>
                    </div>
                  </div>
                ))}
                <div className="flex justify-center px-4 py-12">
                  <button
                    onClick={() => router.push('/create-video')}
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#edaf34] text-[#181611] text-sm font-bold leading-normal tracking-[0.015em] w-full"
                  >
                    <span className="truncate">Continue</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfirmVideo;

<style jsx>{`
  @keyframes gradient-x {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
  .animate-gradient-x {
    animation: gradient-x 5s ease infinite;
  }
`}</style>
