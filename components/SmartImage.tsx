"use client";

import React, { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';
import { cn } from "@/lib/utils"; // Optional: Tailwind merge utility
import { ImageOff } from 'lucide-react';

interface SmartImageProps extends ImageProps {
  fallbackSrc?: string;
  containerClassName?: string;
}

export default function SmartImage({
  src,
  alt
}: SmartImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [error, setError] = useState(false);

  // Sync state if the src prop changes dynamically
  useEffect(() => {
    setImgSrc(src);
    setError(false);
  }, [src]);

  return (
    <>
      {imgSrc && !error ? (
        <Image
          src={imgSrc}
          alt={alt}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          onLoad={() => setError(false)}
          onError={() => {
            setError(true);
            // setLoading(false);
          }}
          className={`object-contain transition-opacity duration-300 ${!imgSrc ? "opacity-0" : "opacity-100"
            } ${imgSrc ? "group-hover:scale-105" : "opacity-50"
            }`}
        />
      ) : (
        <div className="flex flex-col items-center justify-center text-gray-400">
          <ImageOff size={40} />
          <span className="text-xs mt-1">No Image</span>
        </div>
      )}
    </>
  );
}