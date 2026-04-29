import React from 'react'
import { PriceFormatter } from './PriceFormatter'

interface PriceViewProps {
  price: number | undefined,
  discount: number | undefined,
  className: string
}

export const PriceView = ({ price, discount, className }: PriceViewProps) => {
  
  return (
    <div className='flex items-center gap-2.5'>
      <PriceFormatter amount={price} className='text-shop-dark-green' />
      {price && discount && <PriceFormatter amount={price + (1 - discount / 100)} className='line-through text-xs font-normal text-shop-light-text' />}
    </div>
  )
}
