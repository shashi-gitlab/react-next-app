import React from 'react';
import { BadgeCheck, Headphones, RotateCcw, TruckIcon } from 'lucide-react';

export const ProductService = () => {

    return (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-14 p-2 py-5 shadow-xs'>
            <div className='flex items-center gap-3 group'>
                <TruckIcon className="w-10 h-10 text-secondary-color group-hover:scale-105" />
                <div className='text-sm'>
                    <p className='text-purple/80 font-semibold'>Free Delivery</p>
                    <p className='text-light-text'>Free shipping over $100</p>
                </div>
            </div>
            <div className='flex items-center gap-3 group'>
                <RotateCcw className="w-10 h-10 text-secondary-color group-hover:scale-105" />
                <div className='text-sm'>
                    <p className='text-purple/80 font-semibold'>Free Returns</p>
                    <p className='text-light-text'>Free shipping over $100</p>
                </div>
            </div>
            <div className='flex items-center gap-3 group'>
                <Headphones className="w-10 h-10 text-secondary-color group-hover:scale-105" />
                <div className='text-sm'>
                    <p className='text-purple/80 font-semibold'>Customer Support</p>
                    <p className='text-light-text'>Friendly 27/7 customer support</p>
                </div>
            </div>
            <div className='flex items-center gap-3 group'>
                <BadgeCheck className="w-10 h-10 text-secondary-color group-hover:scale-105" />
                <div className='text-sm'>
                    <p className='text-purple/80 font-semibold'>Money Back guarantee</p>
                    <p className='text-light-text'>Quality checked by our team</p>
                </div>
            </div>
        </div>
    )
}
