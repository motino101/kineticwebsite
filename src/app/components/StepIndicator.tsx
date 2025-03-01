import React from 'react';

interface StepIndicatorProps {
  stepNumber: number;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ stepNumber }) => {
  return (
    <div>Step {stepNumber}</div>
  );
};

export default StepIndicator;