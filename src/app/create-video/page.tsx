"use client"

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { BackButton, CreateVideoTitle, StepIndicator, ProgressBar } from '../../components/CreateVideoHeader';
import Header from '../components/Header';
import { FaSpinner } from 'react-icons/fa';
import demoData from '../demo/demoExample.json';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { arrayMove, SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface ClipProps {
  image: string;
  title: string;
  duration: string;
  description: string;
}

const Clip: React.FC<ClipProps> = ({ image, title, duration, description }) => {
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
  const [loading, setLoading] = useState(true);
  const [clips, setClips] = useState(demoData.clips);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setClips((items) => {
        const oldIndex = items.findIndex((item) => item.title === active.id);
        const newIndex = items.findIndex((item) => item.title === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const handleContinue = () => {
    router.push('/step-three');
  };

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
                      {/* <h4 className="b-roll-text">B roll</h4> */}
                      <p className="b-roll-description">
                        {demoData.insight}
                      </p>
                    </div>
                  </div>
                </div>
                <h3 className="section-title px-4 pb-2 pt-4">Suggested Clip Order</h3>
                <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                  <SortableContext items={clips.map((clip) => clip.title)} strategy={verticalListSortingStrategy}>
                    {clips.map((clip, index) => (
                      <SortableClip key={clip.title} clip={clip} index={index} />
                    ))}
                  </SortableContext>
                </DndContext>
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
        )}
      </div>
    </div>
  );
};

const SortableClip = ({ clip, index }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: clip.title,
  });

  const style = {
    transform: transform ? CSS.Transform.toString({
      ...transform,
      x: 0, // Restrict horizontal movement
    }) : undefined, // Reset transform when not dragging
    transition,
    touchAction: 'none',
    cursor: 'grab',
    width: '100%',
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Clip
        image={clip.image}
        title={clip.title}
        duration={clip.duration}
        description={clip.description}
      />
    </div>
  );
};

<style jsx>{`
  .spinner {
    border: 8px solid rgba(255, 255, 255, 0.3);
    border-top: 8px solid #ffffff;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
    background-color: rgba(0, 0, 0, 0.5); /* Temporary background for visibility */
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`}</style>

export default CreateVideo;
