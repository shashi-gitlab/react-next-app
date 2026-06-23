"use client";

import { Product } from '@/app/types/product';
import { cn } from '@/lib/utils';
import { Heart } from 'lucide-react';
import React from 'react';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { addToWishlist, removeFromWishlist } from '@/app/store/wishlistSlice';

export const WishlistButton = ({ product, className }: { product: Product; className?: string }) => {
    const dispatch = useAppDispatch();
    const wishlistItems = useAppSelector((state) => state.wishlist.items);
    const isSaved = wishlistItems.some((item) => item.id === product.id);

    const toggleWishlist = () => {
        if (isSaved) {
            dispatch(removeFromWishlist(product.id));
        } else {
            dispatch(addToWishlist(product));
        }
    };

    return (
        <div className={cn('absolute top-2 right-2 z-10', className)}>
            <button
                type="button"
                onClick={toggleWishlist}
                className={cn(
                    'p-2.5 rounded-full transition-colors border border-white shadow-sm',
                    isSaved ? 'bg-pink text-white hover:bg-pink/90' : 'bg-white text-slate-500 hover:bg-slate-100'
                )}
                aria-label={isSaved ? 'Remove from wishlist' : 'Add to wishlist'}
            >
                <Heart size={15} fill={isSaved ? 'currentColor' : 'none'} />
            </button>
        </div>
    )
}
