"use client";

import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

// Back Button Component
const BackButton: React.FC = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button
      onClick={handleBack}
      className="absolute top-4 left-4 bg-transparent text-white text-2xl font-bold"
    >
      <FaArrowLeft />
    </button>
  );
};

// Create Video Title Component
const CreateVideoTitle: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="flex flex-wrap justify-between gap-3 p-4">
      <p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">{title}</p>
    </div>
  );
};

// Step Indicator Component
const StepIndicator: React.FC<{ stepNumber: number; stepTitle: string }> = ({ stepNumber, stepTitle }) => {
  return (
    <div className="flex gap-6 justify-between">
      <p className="section-title text-white text-base font-medium leading-normal">Step {stepNumber}: {stepTitle}</p>
    </div>
  );
};

// Progress Bar Component
const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => {
  return (
    <div className="rounded bg-[#544b3b]">
      <div className="h-2 rounded bg-white" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export { BackButton, CreateVideoTitle, StepIndicator, ProgressBar };
