import { productTypesData } from '@/constants/data';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { CircleChevronLeft, CircleChevronRight, Loader2 } from 'lucide-react';
import { ProductCategory } from '@/app/types/product';


interface HomeTabBarProps {
    loading: boolean;
    selectedTab?: string;
    onSelectTab?: (tab: string) => void;
    categories: ProductCategory[];
}

const HomeTabBar = ({ selectedTab, onSelectTab, categories, loading }: HomeTabBarProps) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: string) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === "left" ? -150 : 150,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="flex items-center gap-3 mt-2.5">

            {/* Left Arrow */}
            <button onClick={() => scroll("left")} className="w-9 h-9 shrink-0 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-shop-dark-green/90 group">
                <CircleChevronLeft className="w-6 h-6 text-darkColor/50 group-hover:text-white" />
            </button>
            {loading && (
                <Loader2 className="animate-spin text-shop-light-green" size={26} />
            )}
            {/* Scrollable Tabs */}
            <div
                ref={scrollRef}
                className="flex-1 flex gap-3 overflow-x-auto no-scrollbar scroll-smooth"
            >
                {categories.map((item) => (
                    <button
                        key={item?.slug}
                        className={`whitespace-nowrap shrink-0 border border-shop-light-green/30 px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-shop-light-green hover:border-shop-light-green hover:text-white hoverEffect text-sm ${selectedTab === item.slug
                            ? "bg-shop-light-green border-shop-light-green text-white"
                            : "bg-shop-light-green/20"
                            }`}
                        onClick={() => onSelectTab?.(item?.slug)}
                    >
                        {item?.name}
                    </button>
                ))}
            </div>

            {/* Right Arrow */}
            <button onClick={() => scroll("right")} className="w-9 h-9 shrink-0 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-shop-dark-green/90 group">
                <CircleChevronRight className="w-6 h-6 text-darkColor/50 group-hover:text-white" />
            </button>

            {/* See All */}
            <Link href="/shop" className="flex w-fit whitespace-nowrap shrink-0 border border-shop-light-green/30 px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-shop-light-green hover:border-shop-light-green hover:text-white hoverEffect text-sm">
                See All
            </Link>

        </div>
    )
}

export default HomeTabBar;