import React from 'react';

interface ProgressBarProps {
  progress: number; // 0 to 100
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div style={{ width: '100%', backgroundColor: '#e0e0e0' }}>
      <div style={{ width: `${progress}%`, backgroundColor: '#76c7c0', height: '10px' }} />
    </div>
  );
};

export default ProgressBar;