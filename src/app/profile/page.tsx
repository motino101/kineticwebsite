import React from 'react';
import Header from '../components/Header';

const ProfilePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black" style={{ fontFamily: 'Space Grotesk, Noto Sans, sans-serif' }}>
      <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries" async></script>
      <Header />
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex p-4">
              <div className="flex w-full flex-col gap-4 md:flex-row md:justify-between md:items-center">
                <div className="flex gap-4">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
                    style={{ backgroundImage: 'url(https://cdn.usegalileo.ai/sdxl10/98a0195f-0ceb-45e7-a862-defb310a2bdf.png)' }}
                  ></div>
                  <div className="flex flex-col justify-center">
                    <p className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">Waves Resort</p>
                    <p className="text-[#b9b09d] text-base font-normal leading-normal">Travel and Leisure</p>
                  </div>
                </div>
                <div className="flex w-full max-w-[480px] gap-3 md:w-auto">
                  <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#393328] text-white text-sm font-bold leading-normal tracking-[0.015em] flex-1 md:flex-auto"
                  >
                    <span className="truncate">Edit Profile</span>
                  </button>
                  <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#edaf34] text-[#181611] text-sm font-bold leading-normal tracking-[0.015em] flex-1 md:flex-auto"
                  >
                    <span className="truncate">Create New Video</span>
                  </button>
                </div>
              </div>
            </div>
            <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Products &amp; Services</h3>
            <div className="p-4 grid grid-cols-2">
              <div className="flex flex-col gap-1 border-t border-solid border-t-[#544b3b] py-4 pr-2">
                <p className="text-[#b9b09d] text-sm font-normal leading-normal">Travel &amp; Leisure</p>
                <p className="text-white text-sm font-normal leading-normal">General</p>
              </div>
              <div className="flex flex-col gap-1 border-t border-solid border-t-[#544b3b] py-4 pl-2">
                <p className="text-[#b9b09d] text-sm font-normal leading-normal">Resort &amp; Hotel</p>
                <p className="text-white text-sm font-normal leading-normal">General</p>
              </div>
              <div className="flex flex-col gap-1 border-t border-solid border-t-[#544b3b] py-4 pr-2">
                <p className="text-[#b9b09d] text-sm font-normal leading-normal">Vacation &amp; Staycation</p>
                <p className="text-white text-sm font-normal leading-normal">General</p>
              </div>
              <div className="flex flex-col gap-1 border-t border-solid border-t-[#544b3b] py-4 pl-2">
                <p className="text-[#b9b09d] text-sm font-normal leading-normal">Beach &amp; Ocean</p>
                <p className="text-white text-sm font-normal leading-normal">General</p>
              </div>
              <div className="flex flex-col gap-1 border-t border-solid border-t-[#544b3b] py-4 pr-2 col-span-2 pr-[50%]">
                <p className="text-[#b9b09d] text-sm font-normal leading-normal">Sunset &amp; Sunrise</p>
                <p className="text-white text-sm font-normal leading-normal">General</p>
              </div>
            </div>
            <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Target Audience</h3>
            <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#544b3b] py-5">
                <p className="text-[#b9b09d] text-sm font-normal leading-normal">Age Range</p>
                <p className="text-white text-sm font-normal leading-normal">18 - 65+</p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#544b3b] py-5">
                <p className="text-[#b9b09d] text-sm font-normal leading-normal">Gender</p>
                <p className="text-white text-sm font-normal leading-normal">All</p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#544b3b] py-5">
                <p className="text-[#b9b09d] text-sm font-normal leading-normal">Location</p>
                <p className="text-white text-sm font-normal leading-normal">Global</p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#544b3b] py-5">
                <p className="text-[#b9b09d] text-sm font-normal leading-normal">Interests</p>
                <p className="text-white text-sm font-normal leading-normal">Travel, Relaxation, Luxury, Adventure</p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#544b3b] py-5">
                <p className="text-[#b9b09d] text-sm font-normal leading-normal">Behaviors</p>
                <p className="text-white text-sm font-normal leading-normal">Frequent Travelers, High Spend</p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#544b3b] py-5">
                <p className="text-[#b9b09d] text-sm font-normal leading-normal">Income</p>
                <p className="text-white text-sm font-normal leading-normal">$50,000+</p>
              </div>
            </div>
            <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Voice &amp; Identity</h3>
            <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#544b3b] py-5">
                <p className="text-[#b9b09d] text-sm font-normal leading-normal">Tone Adjectives</p>
                <p className="text-white text-sm font-normal leading-normal">Luxurious, Adventurous, Relaxing</p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#544b3b] py-5">
                <p className="text-[#b9b09d] text-sm font-normal leading-normal">Content Guidelines</p>
                <p className="text-white text-sm font-normal leading-normal">Focus on high-quality visuals, lifestyle, and relaxation. Use vibrant colors and high-quality images.</p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#544b3b] py-5">
                <p className="text-[#b9b09d] text-sm font-normal leading-normal">Messaging Style</p>
                <p className="text-white text-sm font-normal leading-normal"></p>
              </div>
            </div>
            <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Visual Identity</h3>
            <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#544b3b] py-5">
                <p className="text-[#b9b09d] text-sm font-normal leading-normal">Descriptive Adjectives</p>
                <p className="text-white text-sm font-normal leading-normal">Vibrant, Luxurious, Relaxing</p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#544b3b] py-5">
                <p className="text-[#b9b09d] text-sm font-normal leading-normal">Imagery Style</p>
                <p className="text-white text-sm font-normal leading-normal">High-quality photography, color-focused, lifestyle, and travel imagery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
