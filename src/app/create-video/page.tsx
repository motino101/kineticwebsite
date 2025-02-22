import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#393328] w-full px-8 py-4">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4 text-white">
          <span className="font-syne text-2xl" style={{ fontWeight: 700, color: 'white' }}>
            kinetic
          </span>
        </div>
        {/* <label className="flex flex-col min-w-40 !h-10 max-w-64">
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
              placeholder="Search"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#393328] focus:border-none h-full placeholder:text-[#b9b09d] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
              value=""
            />
          </div>
        </label> */}
      </div>
      <div className="flex gap-2">
        {/* <button
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#393328] text-white text-sm font-bold leading-normal tracking-[0.015em]"
        >
          <span className="truncate">Upgrade to Pro</span>
        </button> */}
        <div
          className="flex cursor-pointer items-center justify-center overflow-hidden h-10 text-white gap-2"
        >
          <div className="text-white" data-icon="Profile" data-size="20px" data-weight="regular">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

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
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">Create Video</p>
          </div>
          <div className="flex flex-col gap-3 p-4">
            <div className="flex gap-6 justify-between">
              <p className="section-title text-white text-base font-medium leading-normal">Step 2: Choose storyline</p>
            </div>
            <div className="rounded bg-[#544b3b]">
              <div className="h-2 rounded bg-white" style={{ width: '20%' }}></div>
            </div>
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
          <Clip
            image="https://cdn.usegalileo.ai/sdxl10/94b447f8-978a-42a4-ba4d-09216462f7ce.png"
            title="B-roll 4"
            duration="0:30 - 0:40"
            description="This clip captures the subject's interactions with their environment, showcasing their personality."
          />
          <Clip
            image="https://cdn.usegalileo.ai/sdxl10/0ad92965-ca11-4e76-8899-2183c99912c3.png"
            title="B-roll 5"
            duration="0:40 - 0:50"
            description="This clip adds a sense of closure to the scene, wrapping up the story and leaving a lasting impression."
          />
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

export default CreateVideo;
