"use client";

import React, { useState, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import { FaTimes } from 'react-icons/fa';
import { uploadVideos } from '../../api/uploadFootageAPI';
import { BackButton, CreateVideoTitle, StepIndicator, ProgressBar } from '../../components/CreateVideoHeader';

const UploadFootage: React.FC = () => {
  const router = useRouter();
  const [uploadedVideos, setUploadedVideos] = useState<string[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleContinue = async () => {

    router.push('/create-video');
    // console.log("uploading!:", uploadedFiles);
    // if (uploadedFiles.length === 0) return;

    // try {
    //   const result = await uploadVideos(uploadedFiles); // Call the function
    //   console.log('Upload success:', result);
    //   router.push('/create-video'); // Navigate to the next page after successful upload
    // } catch (error) {
    //   console.error('Upload error:', error);
    // }
  };

  const handleRemoveVideo = (index: number) => {
    setUploadedVideos(prevVideos => prevVideos.filter((_, i) => i !== index));
  };

  const handleDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  }, []);

  const handleDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files) {
      const files = Array.from(event.dataTransfer.files);
      setUploadedFiles(prevFiles => {
        const newFiles = [...prevFiles, ...files];
        console.log("Updated uploadedFiles:", newFiles); // Log the updated state
        return newFiles;
      });
      const fileNames = files.map(file => file.name);
      setUploadedVideos(prevVideos => [...prevVideos, ...fileNames]);
    }
  }, []);

  const handleFileChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      // Handle file upload logic here
      console.log(event.target.files);
      // Add uploaded files to the state
      const fileNames = Array.from(event.target.files).map(file => file.name);
      setUploadedVideos(prevVideos => [...prevVideos, ...fileNames]);
    }
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
                <StepIndicator stepNumber={1} stepTitle="Upload Footage" />
                <ProgressBar progress={25} />
                <input
                  type="file"
                  accept="video/*"
                  multiple
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                  ref={fileInputRef}
                />
                <div
                  className="border-dashed border-2 border-[#393328] rounded-lg p-4 mt-4 text-center text-white cursor-pointer"
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                >
                  Drag & drop your videos here
                </div>
              </div>
              <div className="flex flex-col gap-3 p-4">
                <div className="text-white text-base font-medium leading-normal">
                  {uploadedVideos.length} video(s) uploaded
                </div>
                <ul className="text-white">
                  {uploadedVideos.map((video, index) => (
                    <li key={index} className="flex justify-between items-center py-2">
                      <span>{video}</span>
                      <button onClick={() => handleRemoveVideo(index)} className="bg-[#393328] hover:bg-[#5c5145] text-white font-bold py-1 px-2 rounded-full">
                        <FaTimes />
                      </button>
                    </li>
                    
                  ))}
                </ul>
                
              </div>
              <div className="flex justify-center mt-10">
                <button
                  onClick={() => router.push('/confirm-video')}
                  disabled={uploadedFiles.length === 0}
                  className={`flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 text-sm font-bold leading-normal tracking-[0.015em] w-full ${uploadedFiles.length > 0 ? 'bg-[#edaf34] text-[#181611]' : 'bg-[#393328] text-[#b9b09d] cursor-not-allowed'}`}
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

export default UploadFootage;
