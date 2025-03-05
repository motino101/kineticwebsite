"use client"

import React, { useRef, useEffect, useState } from 'react';
import Header from '../components/Header';
import { useRouter } from 'next/navigation';
import { BackButton, CreateVideoTitle, StepIndicator, ProgressBar } from '../../components/CreateVideoHeader';
import trendingAudios from '../demo/trendingAudios.json';
import { FaPause } from 'react-icons/fa';

const StepThree = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState<string>('');
  const [playingAudioId, setPlayingAudioId] = useState<number | null>(null);
  const [selectedAudioId, setSelectedAudioId] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const updateProgress = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('timeupdate', updateProgress);
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('timeupdate', updateProgress);
      }
    };
  }, [audioRef.current]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const togglePlayAudio = (audioId: number, audioUrl: string) => {
    if (playingAudioId === audioId) {
      audioRef.current?.pause();
      setPlayingAudioId(null);
    } else {
      if (audioRef.current) {
        audioRef.current.src = audioUrl;
        audioRef.current.play();
      }
      setPlayingAudioId(audioId);
    }
  };

  const toggleSelectAudio = (audioId: number) => {
    setSelectedAudioId(audioId === selectedAudioId ? null : audioId);
  };

  const handleContinue = () => {
    router.push('/loading');
  };

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
                <StepIndicator stepNumber={3} stepTitle="Select music" />
                <ProgressBar progress={75} />
              </div>
              <div className="flex  w-full p-4 ">
            
          </div>
          {/* <div className="px-4 py-3">
                <label className="flex flex-col min-w-40 h-12 w-full">
                  <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                    <div
                      className="text-[#b9b09d] flex border-none bg-[#393328] items-center justify-center pl-4 rounded-l-xl border-r-0"
                      data-icon="MagnifyingGlass"
                      data-size="24px"
                      data-weight="regular"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                        ></path>
                      </svg>
                    </div>
                    <input
                      placeholder="Search for music"
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#393328] focus:border-none h-full placeholder:text-[#b9b09d] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                      value={searchValue}
                      onChange={handleSearchChange}
                    />
                  </div>
                </label>
              </div> */}
              <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-4 pt-4">Trending & Suggested </h3>
              <div className="flex gap-2 px-4 pb-4">
                <span className="border border-white text-white text-xs px-2 py-1 rounded-full">Adventure</span>
                <span className="border border-white text-white text-xs px-2 py-1 rounded-full">Vlog</span>
                <span className="border border-white text-white text-xs px-2 py-1 rounded-full">Upbeat</span>
                <span className="border border-white text-white text-xs px-2 py-1 rounded-full">Travel</span>
              </div>
              <div className="px-4 py-4 rounded-lg overflow-y-auto max-h-80">
                <ul>
                  {trendingAudios.audios.map((audio) => (
                    <li key={audio.id} className={`flex flex-col gap-3 rounded-xl bg-[#393328] px-4 py-3 mb-4 ${selectedAudioId === audio.id ? 'border-2 border-white' : ''}`} onClick={() => toggleSelectAudio(audio.id)}>
                      <div className="flex items-center gap-4 overflow-hidden">
                        <div
                          className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14 shrink-0"
                          style={{ backgroundImage: `url(${audio.img_url})` }}
                        ></div>
                        <div className="flex-1">
                          <p className="text-white text-base font-bold leading-tight truncate">{audio.title}</p>
                          <p className="text-[#b9b09d] text-sm font-normal leading-normal truncate">{audio.reels}</p>
                        </div>
                        <div className="flex gap-2">
                        {playingAudioId === audio.id && (
                        <p className="text-[#b9b09d] text-xs font-medium leading-normal p-4 tracking-[0.015em]">{formatTime(currentTime)}</p>
                      )}
                          <button onClick={() => togglePlayAudio(audio.id, audio.url)} className="text-white">
                            {playingAudioId === audio.id ? (
                              <FaPause size={16} />
                            ) : (
                              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                <path
                                  d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"
                                ></path>
                              </svg>
                            )}
                          </button>
                          
                          <button onClick={() => toggleSelectAudio(audio.id)} className="text-white" data-icon="CheckCircle" data-size="20px" data-weight="fill">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                              <path
                                d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                      
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
      <audio ref={audioRef} />
    </div>
  );
};

export default StepThree;
