"use client";

import React, { useEffect, useState } from 'react';
import { PriceFormatter } from '@/components/PriceFormatter';
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { CartCounter } from '@/components/shop/CartCounter';
import { addToCart, removeFromCart } from '../store/cartSlice';
import { useAppDispatch, useAppSelector } from '../hooks';

export default function CartPage() {
   const dispatch = useAppDispatch();
    const cart = useAppSelector((state) => state.cart.items);
    const [mounted, setMounted] = useState(false);  
    useEffect(() => setMounted(true), []);

    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = cart.length > 0 ? 10.00 : 0; 
    const total = subtotal + shipping;


    if (!mounted) return null;

    if (cart.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
                <div className="p-6 bg-slate-50 rounded-full">
                    <ShoppingBag size={64} className="text-slate-300" />
                </div>
                <h2 className="text-2xl font-bold">Your cart is empty</h2>
                <p className="text-slate-500">Looks like you haven't added anything to your cart yet.</p>
                <Link href="/shop" className=''>
                    <Button className="bg-purple/70 hoverEffect text-white px-8 py-6" variant={'link'}>
                        Start Shopping
                    </Button>
                </Link>
            </div>
        );
    }

    return (
        <Container className="py-10">
            <h1 className="text-3xl font-black uppercase tracking-tight mb-8">
                Your <span className="bg-linear-to-r from-purple to-pink bg-clip-text text-transparent">Shopping Cart</span>
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* 1. PRODUCT LIST */}
                <div className="lg:col-span-2 space-y-6">
                    {cart.map((item) => (
                        <div key={item.id} className="flex gap-4 p-4 border border-slate-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-18 h-18 bg-slate-100 rounded-xl overflow-hidden shrink-0">
                                <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" />
                            </div>

                            <div className="flex flex-col justify-between grow">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-bold text-md text-slate-800">{item.title}</h3>
                                        <p className="text-sm text-slate-400 capitalize">{item.category}</p>
                                    </div>
                                    <button 
                                        onClick={() => dispatch(removeFromCart(item.id))}
                                        className="text-slate-300 hover:text-pink-500 transition-colors"
                                    >
                                        <Trash2 size={20} />
                                    </button>
                                </div>

                                <div className="flex justify-between items-end mt-1">
                                    <CartCounter item={item} quantity={item.quantity} addToCart={() => dispatch(addToCart(item))} decreaseQuantity={() => dispatch(removeFromCart(item.id))}/>
                                    <p className="font-black text-purple">
                                        <PriceFormatter amount={item.price * item.quantity} />
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 2. SUMMARY SIDEBAR */}
                <div className="bg-slate-50 p-8 rounded-3xl h-fit sticky top-24">
                    <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                    
                    <div className="space-y-4 mb-6">
                        <div className="flex justify-between text-slate-600">
                            <span>Subtotal</span>
                            <span className="font-semibold text-slate-900"><PriceFormatter amount={subtotal} /></span>
                        </div>
                        <div className="flex justify-between text-slate-600">
                            <span>Shipping</span>
                            <span className="font-semibold text-slate-900"><PriceFormatter amount={shipping} /></span>
                        </div>
                        <div className="h-px bg-slate-200 my-2" />
                        <div className="flex justify-between text-xl font-black">
                            <span>Total</span>
                            <span className="bg-linear-to-r from-purple to-pink bg-clip-text text-transparent">
                                <PriceFormatter amount={total} />
                            </span>
                        </div>
                    </div>

                    <Button className="w-full bg-linear-to-r from-purple to-pink text-white py-6 rounded-xl font-bold text-lg hoverEffect group shadow-xl shadow-purple/20">
                        Checkout Now
                        <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>

                    <p className="text-center text-xs text-slate-400 mt-6 uppercase tracking-widest">
                        Secure checkout by MVCart
                    </p>
                </div>
            </div>
        </Container>
    );
}
