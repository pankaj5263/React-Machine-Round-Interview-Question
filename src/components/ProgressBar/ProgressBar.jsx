import React, { useState, useEffect } from 'react';

function ProgressBar({ index, handleProgressBar }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          handleProgressBar(index);
          return prev;
        }
        return prev + Math.floor(Math.random() * 11);
      });
    }, 500);

    return () => clearInterval(interval);
  }, [handleProgressBar]);

  return (
    <div className="w-full h-5 border rounded-lg overflow-hidden">
      <div
        className="bg-amber-400 h-4 rounded-lg"
        style={{ width: `${Math.min(progress, 100)}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;
