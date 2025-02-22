'use client';
import React, { useState, ChangeEvent } from 'react';
import Header from '../components/Header';
interface StepThreeProps {}

const StepThree: React.FC<StepThreeProps> = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="relative flex size-full min-h-screen flex-col bg-[#181611] dark group/design-root overflow-x-hidden" style={{ fontFamily: 'Space Grotesk, Noto Sans, sans-serif' }}>
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
              
              <div className="flex flex-wrap justify-between gap-3 p-4">
            <p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">Create Video</p>
          </div>
          <div className="flex flex-col gap-3 p-4">
            <div className="flex gap-6 justify-between">
              <p className="section-title text-white text-base font-medium leading-normal">Step 3: Select music</p>
            </div>
            <div className="rounded bg-[#544b3b]">
              <div className="h-2 rounded bg-white" style={{ width: '40%' }}></div>
            </div>
          </div>
              <div className="px-4 py-3">
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
              </div>
              <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Trending</h3>
              <div className="px-4 py-3">
                <div className="flex flex-col gap-3 rounded-xl bg-[#393328] px-4 py-3">
                  <div className="flex items-center gap-4 overflow-hidden">
                    <div
                      className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14 shrink-0"
                      style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/87cedd25-318a-47d2-8f3b-f3e767100687.png")' }}
                    ></div>
                    <div className="flex-1">
                      <p className="text-white text-base font-bold leading-tight truncate">Peppa's Dry World</p>
                      <p className="text-[#b9b09d] text-sm font-normal leading-normal truncate">Lucas Harris</p>
                    </div>
                    <button className="flex shrink-0 items-center justify-center rounded-full size-10 bg-[#edaf34] text-[#181611]">
                      <div className="text-inherit" data-icon="Play" data-size="20px" data-weight="fill">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                          <path
                            d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"
                          ></path>
                        </svg>
                      </div>
                    </button>
                  </div>
                  <div className="pt-1.5">
                    <div className="flex h-4 items-center justify-center">
                      <div className="h-1 flex-1 rounded-full bg-white"></div>
                      <div className="relative"><div className="absolute -left-2 -top-2 size-4 rounded-full bg-white"></div></div>
                      <div className="h-1 flex-1 rounded-full bg-white opacity-40"></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-[#b9b09d] text-xs font-medium leading-normal tracking-[0.015em]">1:17</p>
                      <p className="text-[#b9b09d] text-xs font-medium leading-normal tracking-[0.015em]">2:23</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-[#181611] px-4 min-h-[72px] py-2 justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14"
                    style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/8b14793d-125d-42e6-8489-1f3befe37ad9.png")' }}
                  ></div>
                  <div className="flex flex-col justify-center">
                    <p className="text-white text-base font-medium leading-normal line-clamp-1">Big city waking up tune</p>
                    <p className="text-[#b9b09d] text-sm font-normal leading-normal line-clamp-2">Katy Sven · Melancholic / Inspiring </p>
                  </div>
                </div>
                <div className="shrink-0">
                  <div className="text-white flex size-7 items-center justify-center" data-icon="CheckCircle" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
          </div>

          <div className="flex px-4 py-12 justify-center mt-16">
            <a href="/step-three" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-[#edaf34] text-[#181611] text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Continue</span>
            </a>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default StepThree;
