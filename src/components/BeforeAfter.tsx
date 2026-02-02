import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeftRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export const BeforeAfter: React.FC<BeforeAfterProps> = ({ 
  beforeImage, 
  afterImage, 
  beforeLabel = "Before", 
  afterLabel = "After" 
}) => {
  const [isResizing, setIsResizing] = useState(false);
  const [width, setWidth] = useState(50); // percentage
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    // We allow hover-based movement for desktop, touch for mobile, or click-drag
    // For a smoother "magical" feel, let's use mouse position relative to container
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    
    // Calculate percentage
    let newWidth = ((clientX - rect.left) / rect.width) * 100;
    
    // Clamp between 0 and 100
    newWidth = Math.max(0, Math.min(100, newWidth));
    
    setWidth(newWidth);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden cursor-col-resize group interactive"
      onMouseMove={handleMouseMove}
      onTouchMove={handleMouseMove}
    >
      {/* After Image (Background - Full Width) */}
      <img 
        src={afterImage} 
        alt="After" 
        className="absolute inset-0 w-full h-full object-cover" 
      />
      <div className="absolute top-8 right-8 bg-black/50 text-white px-4 py-2 text-xs font-bold tracking-widest uppercase rounded-full backdrop-blur-md">
        {afterLabel}
      </div>

      {/* Before Image (Clipped overlay) */}
      <div 
        className="absolute inset-0 h-full overflow-hidden border-r-2 border-white"
        style={{ width: `${width}%` }}
      >
        <img 
          src={beforeImage} 
          alt="Before" 
          className="absolute inset-0 w-full h-full object-cover max-w-none" 
          // We need to set width to the parent container's width to keep aspect ratio matched
          style={{ width: containerRef.current ? containerRef.current.clientWidth : '100vw' }}
        />
        <div className="absolute top-8 left-8 bg-black/50 text-white px-4 py-2 text-xs font-bold tracking-widest uppercase rounded-full backdrop-blur-md">
          {beforeLabel}
        </div>
      </div>

      {/* Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize shadow-[0_0_20px_rgba(0,0,0,0.5)] z-20 flex items-center justify-center"
        style={{ left: `${width}%` }}
      >
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-stone-900 shadow-xl">
          <ArrowLeftRight size={20} />
        </div>
      </div>
      
      {/* Instruction Overlay */}
      <div className="absolute bottom-8 left-0 right-0 text-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
         <span className="bg-black/70 text-white px-4 py-2 rounded-full text-[10px] uppercase tracking-widest">
           Drag to Compare
         </span>
      </div>
    </div>
  );
};