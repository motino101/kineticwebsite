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

const CreateVideo = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [clips, setClips] = useState(demoData.clips);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedAudioId, setSelectedAudioId] = useState<number | null>(null);

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

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    const selectedOptionData = demoData.options.find(opt => opt.title === option);
    if (selectedOptionData && selectedOptionData.cliporder) {
      const orderedClips = selectedOptionData.cliporder.map(index => demoData.clips[index - 1]);
      setClips(orderedClips);
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

  const SortableClip = ({ clip }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
      id: clip.title,
    });

    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
      touchAction: 'none',
      cursor: 'grab',
      width: '100%',
    };

    const description = selectedOption === "📚  Educational Travel Experience" ? clip.option1 : clip.option2;

    return (
      <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="relative flex flex-col gap-3">
        <div
          className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
          style={{ backgroundImage: `url(${clip.image})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex items-center justify-center text-white text-center p-2">
            <p className="text-xs mt-2">{description}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden" style={{ fontFamily: 'Space Grotesk, Noto Sans, sans-serif' }}>
      <Header />
      <div className="relative flex flex-col min-h-screen bg-black dark group/design-root overflow-hidden" style={{ fontFamily: 'Space Grotesk, Noto Sans, sans-serif', height: '100vh' }}>
      {loading ? (
        <div className="flex justify-center items-center h-full w-full absolute top-0 left-0 flex-col">
          <FaSpinner className="text-white animate-spin text-4xl" />
          <p className="text-white mt-4">Loading, please wait...</p>
        </div>
      ) : (
        <div className="layout-container flex h-full grow flex-col">
          <BackButton />
          <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
              <CreateVideoTitle title="Create Video" />
              <div className="flex flex-col gap-3 p-4">
                <StepIndicator stepNumber={3} stepTitle="Choose Storyline" />
                <ProgressBar progress={75} />
              </div>

              <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 text-left pt-4">Choose your storytelling option</h2>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                  {demoData.options.map((option, index) => (
                    <div
                      key={index}
                      className={`flex flex-1 gap-3 rounded-lg border ${selectedOption === option.title ? 'border-[#edaf34]' : 'border-[#544b3b]'} bg-[#27231c] p-4 items-center cursor-pointer`}
                      onClick={() => handleOptionSelect(option.title)}
                    >
                      <div className="flex flex-col gap-2">
                        <h2 className="text-white text-base font-bold leading-tight">
                          {option.title}
                          {option.recommended && (
                            <span className="relative group">
                              <span className="border border-[#edaf34] ml-2 text-[#edaf34] text-xs cursor-pointer px-1 py-0.5 rounded">Recommended</span>
                              <div className="absolute left-0 w-max opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#edaf34] text-[#181611] text-sm rounded p-2 mt-1 shadow-lg">
                                {option.recommended}
                              </div>
                            </span>
                          )}
                        </h2>
                        <p className="text-[#d3d3d3] text-sm leading-tight">{option.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {selectedOption && (
                  <>
                    <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pt-4">
                      Suggested order for {selectedOption}
                    </h3>
                    <div className="flex  w-full p-1 ">
                    </div>
                    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                      <SortableContext items={clips.map((clip) => clip.title)} strategy={verticalListSortingStrategy}>
                        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-2">
                          {clips.map((clip, index) => (
                            <SortableClip key={clip.title} clip={clip} index={index} />
                          ))}
                        </div>
                      </SortableContext>
                    </DndContext>
                  </>
                )}
                {selectedOption && (
                  <div className="flex justify-center mt-16">
                    <button
                      onClick={handleContinue}
                      className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#edaf34] text-[#181611] text-sm font-bold leading-normal tracking-[0.015em] w-full"
                    >
                      Continue
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default CreateVideo;

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
