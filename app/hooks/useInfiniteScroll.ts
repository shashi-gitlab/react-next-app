"use client";
import { useEffect } from "react";

export const useInfiniteScroll = (ref: React.RefObject<HTMLElement>, callback: () => void, isLoading: boolean) => {
  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isLoading) {
        callback();
      }
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, callback, isLoading]);
};