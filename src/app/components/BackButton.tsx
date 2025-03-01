import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

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

export default BackButton;
