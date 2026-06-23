"use client";

import React, { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';
import { cn } from "@/lib/utils";

interface SafeImageProps extends ImageProps {
  fallbackSrc?: string;
  containerClassName?: string;
}

export default function SafeImage({
  src,
  alt,
  fallbackSrc,
  containerClassName,
  className,
  ...rest // Captures width, height, priority, and other image props
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setImgSrc(src);
    setIsError(false);
  }, [src]);

  const handleError = () => {
    if (fallbackSrc && imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
    } else {
      setIsError(true);
    }
  };

  if (isError || !imgSrc) {
    
    const hasExplicitDimensions = !!(rest.width || rest.height);

    return (
      <div 
        className={cn(
          "flex flex-col items-center justify-center bg-gray-100 text-gray-400 overflow-hidden", 
          !hasExplicitDimensions && "w-full h-full min-h-37.5", // Default fallback if no width/height given
          containerClassName
        )}
        style={{
          width: rest.width ? Number(rest.width) : undefined,
          height: rest.height ? Number(rest.height) : undefined,
        }}
      >
        {/* Changed to inline-block so -rotate-45 works properly */}
        <span className="text-xs font-medium inline-block -rotate-45 transform origin-center whitespace-nowrap">
          No Image
        </span>
      </div>
    );
  }

  return (
    <div 
      className={cn("relative overflow-hidden", containerClassName)}
      style={{
        width: rest.width ? Number(rest.width) : undefined,
        height: rest.height ? Number(rest.height) : undefined,
      }}
    >
      <Image
        src={imgSrc}
        alt={alt}
        sizes="(max-width: 768px) 50vw, 25vw"
        onError={handleError}
        className={cn(
          "transition-all duration-300 group-hover:scale-105 object-cover", 
          className
        )}
        fill={rest.width || rest.height ? false : true} 
        {...rest}
      />
    </div>
  );
}