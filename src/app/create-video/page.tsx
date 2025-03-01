"use client"

import React from 'react';
import { useState, useCallback } from 'react';
import Header from '../components/Header';
import { useRouter } from 'next/navigation';
import { BackButton, CreateVideoTitle, StepIndicator, ProgressBar } from '../../components/CreateVideoHeader';

import { FaArrowLeft, FaTimes } from 'react-icons/fa';

const Clip = ({ image, title, duration, description }) => {
  return (
    <div className="flex items-center gap-4 px-4 min-h-[72px] py-2 justify-between">
      <div className="flex items-center gap-4">
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="flex flex-col justify-center">
          <p className="b-roll-text truncate">{title}</p>
          <p className="b-roll-description truncate">{duration}</p>
          <p className="b-roll-description">{description}</p>
        </div>
      </div>
      <div className="shrink-0">
        <div className="text-white flex size-7 items-center justify-center" data-icon="Reorder" data-size="24px" data-weight="regular">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M40,80H216a8,8,0,0,1,0,16H40a8,8,0,0,1,0-16Zm0,48H216a8,8,0,0,1,0,16H40a8,8,0,0,1,0-16Zm0,48H216a8,8,0,0,1,0,16H40a8,8,0,0,1,0-16Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

const CreateVideo = () => {
  const router = useRouter();
  const [uploadedVideos, setUploadedVideos] = useState<string[]>(['Video 1', 'Video 2', 'Video 3']);

  const handleContinue = () => {
    router.push('/step-three');
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
        
        <div className="layout-container flex h-full grow flex-col">
          <BackButton />
          
          <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
            <CreateVideoTitle title="Create Video" />
              <div className="flex flex-col gap-3 p-4">
                <StepIndicator stepNumber={2} stepTitle="Choose Storyline" />
                <ProgressBar progress={33} />
                
              </div>
              <div className="flex  w-full p-4 ">
            <div className="flex items-start gap-2 p-4 bg-[#edaf3433] rounded-lg">
              <div className="text-white" data-icon="Sparkle" data-size="20px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l1.09 3.41L16 6l-2.91 2.09L12 12l-1.09-3.91L8 6l2.91-0.59L12 2z" fill="white"/>
                </svg>
              </div>
              <div>
                <h4 className="b-roll-text">B roll</h4>
                <p className="b-roll-description">
                  Your vlog highlights your Vietnam travel experience, showcasing culture, food, and adventure. Your audience enjoys immersive storytelling with stunning visuals and personal insights. A strong arc follows anticipation → experiences & challenges → reflections, using setup, conflict, and resolution. Here’s a suggested sequence:
                </p>
              </div>
            </div>
          </div>
          <h3 className="section-title px-4 pb-2 pt-4">Suggested clip order</h3>
          <Clip
            image="https://cdn.usegalileo.ai/sdxl10/fb16af93-255e-4f26-a44f-9a5f62f324bc.png"
            title="B-roll 1"
            duration="0:00 - 0:10"
            description="This clip captures the essence of the scene, providing context and enhancing the storytelling."
          />
          <Clip
            image="https://cdn.usegalileo.ai/sdxl10/1f1cc445-20cb-4033-8060-0678fe799611.png"
            title="B-roll 2"
            duration="0:10 - 0:20"
            description="This clip adds a sense of movement and energy to the scene, highlighting the subject's actions."
          />
          <Clip
            image="https://cdn.usegalileo.ai/sdxl10/0b085af4-cd7a-4442-8210-a43bbfcc931c.png"
            title="B-roll 3"
            duration="0:20 - 0:30"
            description="This clip provides a closer look at the subject, emphasizing their emotions and reactions."
          />
              
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

export default CreateVideo;
