"use client";

import { Container } from "@/components/Container";
import ProductCard from "@/components/ProductCard";
import { hotDeals } from "@/constants/data";
import { useEffect, useState } from "react";

export default function HotDealsPage() {
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour countdown

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}h ${m}m ${s}s`;
  };
  
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* 🔥 HERO SECTION */}
      <div className="bg-linear-to-r from-purple to-pink text-white py-10 px-6 text-center">
        <h1 className="text-4xl font-bold">🔥 Hot Deals</h1>
        <p className="mt-2 text-lg">Limited time offers – Don’t miss out!</p>

        <div className="mt-4 text-xl font-semibold bg-white text-purple-700 inline-block px-6 py-2 rounded-full">
          ⏳ Ends in: {formatTime(timeLeft)}
        </div>
      </div>

      {/* 🛍️ PRODUCTS GRID */}
      <Container className="py-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

        {hotDeals.map((item)=>(
            <ProductCard product={item} key={item?.id} />
        ))}

        {/* {products.map((product) => {
          const discount = Math.round(
            ((product.oldPrice - product.price) / product.oldPrice) * 100
          );

          return (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 relative"
            >
           
              <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
                {discount}% OFF
              </span>

             
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-lg"
              />

             
              <h3 className="mt-3 font-semibold text-gray-800">
                {product.name}
              </h3>

              <div className="mt-1 flex items-center gap-2">
                <span className="text-purple-600 font-bold">
                  ₹{product.price}
                </span>
                <span className="text-gray-400 line-through text-sm">
                  ₹{product.oldPrice}
                </span>
              </div>

             
              <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">
                Add to Cart
              </button>
            </div>
          );
        })} */}
      </Container>

      {/* 💥 BANNER */}
      <div className="bg-purple-700 text-white text-center py-8">
        <h2 className="text-2xl font-bold">Mega Sale is Live 🚀</h2>
        <p className="mt-2">Up to 70% OFF on selected items</p>
      </div>
    </div>
  );
}