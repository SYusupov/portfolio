"use client";

import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

interface ZoomableImageProps {
  src: string;
  alt: string;
  className?: string;
  caption?: string;
}

export default function ZoomableImage({ src, alt, className = "", caption }: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <div 
        className={`cursor-zoom-in transition-all hover:opacity-95 ${className}`}
        onClick={() => setIsOpen(true)}
      >
        <img src={src} alt={alt} className="w-full h-auto object-cover rounded-lg" />
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl transition z-50"
            onClick={() => setIsOpen(false)}
            aria-label="Close full view"
          >
            <FaTimes />
          </button>
          
          <div className="relative max-w-7xl w-full max-h-screen flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
             <img 
               src={src} 
               alt={alt} 
               className="max-w-full max-h-[85vh] object-contain rounded-md shadow-2xl" 
             />
             {caption && (
               <p className="text-center text-slate-300 mt-4 text-lg font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-md">
                 {caption}
               </p>
             )}
          </div>
        </div>
      )}
    </>
  );
}
