import { Product } from '@/app/types/product';
import { Button } from './ui/button'
import { ShoppingBag } from 'lucide-react'
import { cn } from '@/lib/utils'
import { PriceFormatter } from './PriceFormatter'
import { RootState } from '@/app/store/store';
import { addToCart, decreaseQuantity } from '@/app/store/cartSlice';
import { CartCounter } from './shop/CartCounter';
import { useAppSelector, useAppDispatch } from '@/app/hooks';
interface Props {
    product: Product,
    className?: string
}

export const AddToCartButton = ({ product, className }: Props) => {
    const dispatch = useAppDispatch();

    const cartItem = useAppSelector((state) => 
        state.cart.items.find((item) => item.id === product.id)
    );
    
    const currentQuantity = cartItem ? cartItem.quantity : 0;

    const isOutOfStock = product?.stock === 0;
    
    const handleAddToCart = () => {
        dispatch(addToCart(product)); 
    }

    return (
        <div>
            {
                currentQuantity > 0 ? <>
                    <div className='flex justify-between items-center gap-2.5 border-b pb-0.5'>
                        <p className='text-xs text-light-text font-medium'>Quantity</p>
                        <CartCounter item={product} quantity={currentQuantity}  addToCart={() => dispatch(addToCart(product))} decreaseQuantity={()=> dispatch(decreaseQuantity(product.id))}/>
                    </div>
                    <div className='flex items-center justify-between gap-2.5 py-0.5'>
                        <p className='text-xs text-pink font-semibold'>Subtotal</p>
                        <p className='text-xs text-purple font-semibold'>
                            <PriceFormatter amount={(product?.price) * currentQuantity} className='text-purple' />
                        </p>
                    </div>
                </> : (
                    <Button
                        onClick={(handleAddToCart)}
                        disabled={isOutOfStock}
                        className={cn("w-full bg-purple/80 text-light-bg shadow-none border border-purple/80 font-semibold tracking-wide hover:text-white hover:bg-purple hover:border-purple hoverEffect", className)}>
                        <ShoppingBag />{isOutOfStock ? "Out of Stock" : "Add to Cart"}
                    </Button>
                )
            }

        </div>
    )
}
