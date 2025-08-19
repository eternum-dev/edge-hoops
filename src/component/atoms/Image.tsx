import React, { useState } from "react";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const Image: React.FC<ImageProps> = ({ src, alt, className = "" }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      {!isLoaded && (
        <div className="animate-pulse bg-neutral-300 w-full h-64 flex items-center justify-center">
          <span className="text-neutral-900 text-sm">Cargando...</span>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-auto object-cover transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0 absolute top-0 left-0"
        }`}
      />
    </div>
  );
};
