"use client";
import { useEffect, useState } from "react";

export function ReadingProgress() {
    const [completion, setCompletion] = useState(0);
    useEffect(() => {
        const updateScroll = () => {
            const currentProgress = window.scrollY;
            const scrollHeight = document.body.scrollHeight - window.innerHeight;
            if (scrollHeight) {
                setCompletion(Number((currentProgress / scrollHeight).toFixed(2)) * 100);
            }
        };
        window.addEventListener("scroll", updateScroll);
        return () => window.removeEventListener("scroll", updateScroll);
    }, []);

    return (
        <div
            style={{ transform: `translateX(${completion - 100}%)` }}
            className="fixed top-0 left-0 h-1 w-full bg-blue-600 transition-transform duration-150 z-50"
        />
    );
}