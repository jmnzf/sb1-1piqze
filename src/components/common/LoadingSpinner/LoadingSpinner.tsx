import React from 'react';
import { Loader } from 'lucide-react';
import './LoadingSpinner.css';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="loading-spinner">
      <Loader className="animate-spin" />
    </div>
  );
};