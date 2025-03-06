"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head"; // If using Next.js
import Header from "../components/Header";
import { FaPencilAlt, FaCheck, FaDownload, FaRedo } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const CaptionsPage: React.FC = () => {
  const router = useRouter();
  const [captionsData, setCaptionsData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  useEffect(() => {
    // Fetch the captions data from demoExample.json
    fetch('/demo/demoExample.json')
      .then(response => response.json())
      .then(data => setCaptionsData(data.clips));
  }, []);

  const handleEditClick = (index: number) => {
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    setEditIndex(null);
  };

  const handleCreateAnotherVideo = () => {
    router.push('/loading');
  };

  const handleDownloadVideo = () => {
    const link = document.createElement('a');
    link.href = '/demo/video/0225%20(1).mov';
    link.download = 'VietTrips_Final_Edit.mov';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
          <div className="flex w-full max-w-5xl px-6 mt-4 items-center">
            {/* Video Preview Section */}
            <div className="flex-1 p-4 flex justify-end">
              <video controls className="rounded-xl shadow-lg" style={{ height: '550px' }}>
                <source src="/demo/video/0225%20(1).mov" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Caption & B-Roll Section */}
            <div className="flex-1 px-4">
              <h3 className="text-lg font-bold tracking-tight px-4 pb-2 pt-2" style={{ fontFamily: 'Space Grotesk' }}>
                Captions and B-roll
              </h3>

              <div className="px-4 min-h-[72px] py-2 flex items-center justify-between gap-4" style={{ marginRight: '100px' }}>
                <div className="flex items-center">
                  <div className="flex flex-col">
                    {captionsData.map((clip, index) => (
                      <div key={index} className="flex flex-row items-start mb-4">
                        <img src={clip.image} alt={clip.title} className="w-1/6 rounded-lg shadow-lg mr-4" />
                        <div className="flex flex-col">
                          <div className="flex items-center">
                            {isEditing && editIndex === index ? (
                              <textarea
                                value={clip.caption}
                                onChange={(e) => setCaptionsData(prev => prev.map((c, i) => i === index ? { ...c, caption: e.target.value } : c))}
                                className="w-full h-20 p-2 border border-gray-300 rounded-lg bg-transparent text-white text-base font-medium leading-normal b-roll-text"
                              />
                            ) : (
                              <p className="text-lg b-roll-text mr-2">{clip.caption}</p>
                            )}
                            {isEditing && editIndex === index ? (
                              <FaCheck onClick={handleSaveClick} className="text-gray-400 cursor-pointer" />
                            ) : (
                              <FaPencilAlt onClick={() => handleEditClick(index)} className="text-gray-400 cursor-pointer" />
                            )}
                          </div>
                          <p className="text-sm text-gray-400">{clip.duration}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Download Button */}
          <div className="flex justify-center mt-10 w-full">
            <button
              onClick={handleDownloadVideo}
              className="flex items-center px-6 py-3 bg-[#edaf34] text-[#181611] rounded-lg mr-4 shadow-lg">
              <FaDownload className="mr-2" />
              Download Video
            </button>
            <button onClick={handleCreateAnotherVideo} className="flex items-center px-6 py-3 bg-[#393328] bg-opacity-70 text-white rounded-lg shadow-lg">
              <FaRedo className="mr-2" />
              Regenerate
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaptionsPage;
