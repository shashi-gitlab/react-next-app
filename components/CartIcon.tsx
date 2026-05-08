"use client";
import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useAppSelector } from '@/app/hooks';

export default function CartIcon() {

  const cartItem = useAppSelector((state) => state.cart.items);
  const totalItems = cartItem.reduce((sum, item) => sum + item.quantity, 0);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Link href={'/cart'} className='group relative'>
      <ShoppingBag className='w-5 h-5 text-purple/80 group-hover:text-purple transition-colors duration-300' />
      
      {mounted && totalItems > 0 && (
        <span className='absolute -top-1.5 -right-1.5 min-w-4 h-4 rounded-full text-[10px] font-bold bg-pink-500 text-white flex items-center justify-center px-1 animate-in zoom-in'>
          {totalItems}
        </span>
      )}
    </Link>
  )
}
