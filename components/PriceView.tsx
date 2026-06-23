import React from 'react'
import { PriceFormatter } from './PriceFormatter'
import { Product } from '@/app/types/product';
import { Badge } from './ui/badge';

interface PriceViewProps {
  product: Product,
  className?: string,
  priceTextClassName?: string,
  priceCutTextClassName?: string,
  discountTextClassName?: string,
}

export const PriceView = ({ product, className, priceTextClassName, priceCutTextClassName, discountTextClassName }: PriceViewProps) => {
  const discountedPrice = product.price - (product.price * (product.discountPercentage ?? 0)) / 100;
  
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <PriceFormatter amount={discountedPrice} className={'text-secondary-color ' + (priceTextClassName || '')} />
      <PriceFormatter amount={product.price} className={'line-through text-xs font-normal text-muted-foreground ' + (priceCutTextClassName || '')} />
      <Badge variant="secondary" className={'text-xs font-normal text-secondary-color ' + (discountTextClassName || '')}>
        -{product.discountPercentage}%
      </Badge>
    </div>
  )
}
