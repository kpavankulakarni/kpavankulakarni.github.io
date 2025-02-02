import React from 'react';
import { useInView } from 'react-intersection-observer';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}

export const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description, isLast }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="relative">
      <div className={`relative z-10 bg-white p-6 rounded-lg shadow-md ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 delay-${number * 200}`}>
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
          {number}
        </div>
        <h3 className="text-xl font-semibold mb-2 mt-4">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </div>
      {!isLast && (
        <div className="hidden md:block absolute top-1/2 -right-8 w-16 h-0.5 bg-purple-600 transform rotate-12">
          <div className="absolute right-0 -top-1.5 w-3 h-3 bg-purple-600 transform rotate-45" />
        </div>
      )}
    </div>
  );
};