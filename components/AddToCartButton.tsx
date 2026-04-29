"use client";

import { Product } from '@/app/types/product'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { MinusIcon, PlusIcon, ShoppingBag } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Input } from './ui/input'
import { PriceFormatter } from './PriceFormatter'

interface Props {
    product: Product,
    className?: string
}

export const AddToCartButton = ({ product, className }: Props) => {
    const isOutOfStock = product?.stock === 0;
    const [quantity, setQuantity] = useState(0);

    const handleAddToCart = () => {
        setQuantity(1);
    }

    const handleOnMinusClick = (q: number) => {
        if (q === 0) return;
        setQuantity(q - 1);
    }
    const handleOnPlusClick = (q: number) => {
        setQuantity(q + 1);
    }

    return (
        <div>
            {
                quantity > 0 ? <>
                    <div className='flex justify-between items-center gap-2.5 border-b'>
                        <p className='text-xs text-shop-light-text font-medium'>Quantity</p>
                        <div className='flex items-center py-0.5'>
                            <Button size={'xs'} className={'h-6 w-6'} variant={'secondary'} onClick={() => handleOnMinusClick(quantity)}><MinusIcon className='font-semibold' /></Button>
                            <span className='px-1 font-semibold'>{quantity}</span>
                            <Button size={'xs'} variant={'secondary'} className={'h-6 w-6'} onClick={() => handleOnPlusClick(quantity)}><PlusIcon size={55} /></Button>
                        </div>
                    </div>
                    <div className='flex items-center justify-between gap-2.5 py-0.5'>
                        <p className='text-xs text-darkColor font-semibold'>Subtotal</p>
                        <p className='text-xs text-darkColor font-semibold'>
                            <PriceFormatter amount={product?.price} />
                        </p>
                    </div>
                </> : (
                    <Button
                        onClick={handleAddToCart}
                        disabled={isOutOfStock}
                        className={cn("w-full bg-shop-dark-green/80 text-shop-light-bg shadow-none border border-shop-dark-green/80 font-semibold tracking-wide hover:text-white hover:bg-shop-dark-green hover:border-shop-dark-green hoverEffect", className)}>
                        <ShoppingBag />{isOutOfStock ? "Out of Stock" : "Add to Cart"}
                    </Button>
                )
            }

        </div>
    )
}
