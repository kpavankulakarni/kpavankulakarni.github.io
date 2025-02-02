import React, { useState } from 'react';

interface FlipCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string;
}

export const FlipCard: React.FC<FlipCardProps> = ({ icon, title, description, details }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="h-[400px] perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden bg-white p-8 rounded-xl shadow-sm">
          <div className="mb-4">{icon}</div>
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p className="text-slate-600">{description}</p>
        </div>
        
        {/* Back */}
        <div className="absolute w-full h-full backface-hidden bg-purple-600 text-white p-8 rounded-xl shadow-sm rotate-y-180">
          <h3 className="text-xl font-semibold mb-4">{title}</h3>
          <p className="text-white/90">{details}</p>
        </div>
      </div>
    </div>
  );
};