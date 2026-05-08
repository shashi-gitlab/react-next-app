import { Product } from '@/app/types/product';
import { cn } from '@/lib/utils';
import { Heart } from 'lucide-react';
import React from 'react';


export const WishlistButton = ({ product, className }: { product: Product, className: string }) => {
    return (
        <div className={cn('absolute top-2 right-2 z-10', className)}>
            <button className={'p-2.5 rounded-full hover:bg-pink hover:text-white bg-white'}>
                <Heart size={15} />
            </button>
        </div>
    )
}
