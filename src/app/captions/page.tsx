"use client";

import React, { useState } from "react";
import Head from "next/head"; // If using Next.js
import Header from "../components/Header";
import { FaPencilAlt, FaCheck, FaDownload, FaRedo } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const CaptionsPage: React.FC = () => {
  const router = useRouter();
  const [captions, setCaptions] = useState('Start with a beautiful shot of your location');
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleCreateAnotherVideo = () => {
    router.push('/upload-footage');
  };

  return (
    <>
      <Head>
        <title>Galileo Design</title>
      </Head>

      <div className="relative min-h-screen flex flex-col text-white font-sans overflow-x-hidden" style={{ fontFamily: 'Space Grotesk, Noto Sans, sans-serif' }}>
        {/* Header Component */}
        <Header />

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold" style={{ fontFamily: 'Space Grotesk' }}>VietTrips - Final Edit</h1>

          {/* Insights Section */}
          {/* Video and Captions/B-Roll Section */}
          <div className="flex w-full max-w-3xl px-6 mt-4">
            {/* Video Preview Section */}
            <div className="flex-1 p-4">
              <div
                className="relative flex items-center justify-center bg-white bg-cover bg-center aspect-video rounded-xl p-4"
                style={{
                  backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/8a108b61-08cd-4039-a0cf-a5ed7fb4a4a5.png")`,
                }}
              >
                <button className="flex shrink-0 items-center justify-center rounded-lg size-16  text-white">
                  {/* Play Button Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* Caption & B-Roll Section */}
            <div className="flex-1 px-4">
              <h3 className="text-lg font-bold tracking-tight px-4 pb-2 pt-4" style={{ fontFamily: 'Space Grotesk' }}>
                Captions and B-roll
              </h3>

              <div className="px-4 min-h-[72px] py-2 flex items-center justify-between gap-4 border-b border-[#b9b09d]">
                <div className="flex items-center gap-4">
                  <div className="text-white flex items-center justify-center rounded-lg bg-[#393328] shrink-0 size-12">
                    {/* Video File Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M148.23,153.21a8,8,0,0,0-7.75-.39l-21.22,10.39A16,16,0,0,0,104,152H48a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h56a16,16,0,0,0,15.44-11.87l20.84,11A8,8,0,0,0,152,216V160A8,8,0,0,0,148.23,153.21ZM104,208H48V168h56v31c0,.13,0,.25,0,.38V208Zm32-5.24-16-8.42V180.66l16-7.83ZM213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v88a8,8,0,0,0,16,0V40h88V88a8,8,0,0,0,8,8h48V216H176a8,8,0,0,0,0,16h24a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-2">
                      {isEditing ? (
                        <textarea
                          value={captions}
                          onChange={(e) => setCaptions(e.target.value)}
                          className="w-full h-40 p-2 border border-gray-300 rounded-lg bg-transparent text-white text-base font-medium leading-normal b-roll-text"
                        />
                      ) : (
                        <p className="text-white text-base font-medium leading-normal b-roll-text">
                          {captions}
                        </p>
                      )}
                      {isEditing ? (
                        <FaCheck onClick={handleSaveClick} className="text-gray-400 cursor-pointer" />
                      ) : (
                        <FaPencilAlt onClick={handleEditClick} className="text-gray-400 cursor-pointer" />
                      )}
                    </div>
                    <p className="text-[#b9b09d] text-sm font-normal leading-normal">
                      0:00 - 0:05
                    </p>
                  </div>
                </div>
                {/* <p className="text-white text-base font-normal">5s</p> */}
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-10 w-full">
            <button
              className="flex items-center px-6 py-3 bg-[#edaf34] text-[#181611] rounded-lg mr-4 shadow-lg">
              <FaDownload className="mr-2" />
              Download
            </button>
            <button onClick={handleCreateAnotherVideo} className="flex items-center px-6 py-3 bg-[#393328] bg-opacity-70 text-white rounded-lg shadow-lg">
              <FaRedo className="mr-2" />
              Create
            </button>
          </div>
        </div>

        {/* Save Button */}
        
      </div>
    </>
  );
};

export default CaptionsPage;
