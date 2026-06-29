'use client';
import { useCategories } from '@/app/hooks/useCategories';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import EcommerceFilter from './EcommerceFilter';

export const ShopFilterBar = () => {
    const { data: categories = [] } = useCategories();
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isOpen, setIsOpen] = useState(false);

    const activeCategory = searchParams.get('category') || 'all';
    const selected = searchParams.get('category')?.split(',') || [];

    const handleClick = (slug: string) => {
        const params = new URLSearchParams(searchParams.toString());

        if (slug === 'all') {
            params.delete('category');
        } else {
            params.set('category', slug);
        }

        router.push(`/shop?${params.toString()}`);
        setIsOpen(false); // Close filter on mobile after selection
    };

    return (
        <>
            {/* Mobile Filter Toggle Button */}
            <div className="md:hidden fixed top-20 left-0 right-0 px-4 py-2 bg-white border-b z-35">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full px-4 py-2 bg-purple text-white rounded-lg font-semibold hover:bg-purple/90 transition text-sm"
                >
                    {isOpen ? '✕ Close Filters' : '☰ Show Filters'}
                </button>
            </div>

            {/* Sidebar */}
            <aside
                className={`
                    fixed md:static inset-0 md:inset-auto
                    w-full md:w-1/5
                    h-screen md:h-auto
                    p-4 md:p-4
                    pt-24 md:pt-4
                    border-r border-b md:border-b-0
                    bg-white
                    md:sticky md:top-16 md:self-start
                    transform transition-transform duration-300
                    ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
                    z-40 md:z-auto
                    md:flex-shrink-0
                `}
            >
                <div className="flex items-center justify-between mb-4 md:mb-4">
                    <h2 className="font-semibold text-lg md:text-base">Filters</h2>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="md:hidden text-2xl font-bold"
                    >
                        ✕
                    </button>
                </div>

                <ul className="space-y-2 md:space-y-1 max-h-[calc(100vh-180px)] md:max-h-screen overflow-y-auto pb-20 md:pb-0">
                    {/* All Categories */}
                    <li
                        className={`flex items-center gap-2 px-3 py-2 md:py-1.5 rounded-lg hover:bg-purple/90 hover:text-white cursor-pointer transition text-sm md:text-xs ${
                            !activeCategory || activeCategory === 'all' ? 'bg-purple text-white' : ''
                        }`}
                        onClick={() => {
                            handleClick('all');
                        }}
                    >
                        <span className="cursor-pointer select-none">All Categories</span>
                    </li>

                    {/* Individual Categories */}
                    {categories &&
                        categories.map((cat: any) => {
                            const isActive = selected.includes(cat.slug);
                            return (
                                <li
                                    key={cat?.slug}
                                    className={`flex items-center gap-2 px-3 py-2 md:py-1.5 rounded-lg hover:bg-purple/90 hover:text-white cursor-pointer transition text-sm md:text-xs ${
                                        isActive ? 'bg-purple text-white' : ''
                                    }`}
                                    onClick={() => handleClick(cat.slug)}
                                >
                                    <span className="cursor-pointer select-none">{cat?.name}</span>
                                </li>
                            );
                        })}
                </ul>
            </aside>

            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
}
