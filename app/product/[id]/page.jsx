"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import RatingStars from "@/components/RatingStars";
import { CartCounter } from "@/components/shop/CartCounter";
import { useAppDispatch, useAppSelector  } from "@/app/hooks";
import { addToCart, decreaseQuantity } from "@/app/store/cartSlice";

const product = {
    id: 1,
    name: "Nike Air Max",
    price: 12999,
    description:
        "Premium quality running shoes with modern comfort and stylish design.",
    images: [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
    ],
    sizes: ["6", "7", "8", "9", "10"],
    rating: 4.3,
};

export default function ProductDetailsPage() {
    const [selectedImage, setSelectedImage] = useState(product.images[0]);
    const [selectedSize, setSelectedSize] = useState("8");
    const [activeTab, setActiveTab] = useState("description");
    const dispatch = useAppDispatch();

    const cartItem = useAppSelector((state) =>
        state.cart.items.find((item) => item.id === product.id)
    );

    const currentQuantity = cartItem ? cartItem.quantity : 0;

    return (
        <Container className="px-4 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* LEFT SIDE */}
                <div>
                    <div className="border rounded-2xl overflow-hidden">
                        <img
                            src={selectedImage}
                            alt={product.name}
                            className="w-full h-125 object-cover"
                        />
                    </div>

                    <div className="flex gap-4 mt-4">
                        {product.images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt=""
                                onClick={() => setSelectedImage(img)}
                                className={`w-24 h-24 object-cover rounded-xl cursor-pointer border-2 ${selectedImage === img
                                        ? "border-black"
                                        : "border-gray-200"
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div>
                    <h1 className="text-4xl font-bold">{product.name}</h1>

                    <RatingStars rating={product.rating} />

                    <p className="text-3xl font-semibold mt-6">
                        ₹{product.price}
                    </p>

                    <p className="text-gray-600 mt-6 leading-7">
                        {product.description}
                    </p>

                    {/* SIZE */}
                    <div className="mt-8">
                        <h3 className="font-semibold mb-3">Select Size</h3>

                        <div className="flex gap-3">
                            {product.sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`w-12 h-12 rounded-full border ${selectedSize === size
                                            ? "bg-black text-white"
                                            : "bg-white"
                                        }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* QUANTITY */}
                    {/* <div className="mt-8">
                        <h3 className="font-semibold mb-3">Quantity</h3>

                        <div className="flex items-center gap-4">
                            <button
                                onClick={() =>
                                    setQuantity((prev) => Math.max(1, prev - 1))
                                }
                                className="w-10 h-10 border rounded-lg"
                            >
                                -
                            </button>

                            <span className="text-xl">{quantity}</span>

                            <button
                                onClick={() => setQuantity((prev) => prev + 1)}
                                className="w-10 h-10 border rounded-lg"
                            >
                                +
                            </button>
                        </div>
                    </div> */}
                     <div className='mt-8'>
                        <CartCounter item={product} quantity={currentQuantity}  addToCart={() => dispatch(addToCart(product))} decreaseQuantity={()=> dispatch(decreaseQuantity(product.id))}/>
                     </div>

                    {/* BUTTONS */}
                    <div className="flex gap-4 mt-10">
                        <button className="bg-black text-white px-8 py-4 rounded-xl hover:opacity-90">
                            Add to Cart
                        </button>

                        <button className="border px-8 py-4 rounded-xl">
                            Buy Now
                        </button>
                    </div>
                </div>

            </div>
            {/* TABS */}
            <div className="mt-14">
                {/* TAB BUTTONS */}
                <div className="flex border-b">
                    {["description", "additional", "reviews"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-3 capitalize font-medium transition ${activeTab === tab
                                    ? "border-b-2 border-black text-black"
                                    : "text-gray-500"
                                }`}
                        >
                            {tab === "additional"
                                ? "Additional Information"
                                : tab}
                        </button>
                    ))}
                </div>

                {/* TAB CONTENT */}
                <div className="mt-6 text-gray-700 leading-7">
                    {activeTab === "description" && (
                        <div>
                            <p>
                                {product.description}
                            </p>

                            <p className="mt-4">
                                Designed for maximum comfort and performance,
                                these shoes are perfect for daily wear,
                                running, and casual styling.
                            </p>
                        </div>
                    )}

                    {activeTab === "additional" && (
                        <div className="space-y-3">
                            <p>
                                <span className="font-semibold">Brand:</span> Nike
                            </p>

                            <p>
                                <span className="font-semibold">Material:</span> Mesh & Rubber
                            </p>

                            <p>
                                <span className="font-semibold">Category:</span> Running Shoes
                            </p>

                            <p>
                                <span className="font-semibold">Delivery:</span> 3-5 Business Days
                            </p>
                        </div>
                    )}

                    {activeTab === "reviews" && (
                        <div className="space-y-6">
                            <div className="border rounded-xl p-4">
                                <h4 className="font-semibold">Rahul Sharma</h4>

                                <p className="text-yellow-500">★★★★★</p>

                                <p className="mt-2 text-gray-600">
                                    Very comfortable shoes. Quality is amazing!
                                </p>
                            </div>

                            <div className="border rounded-xl p-4">
                                <h4 className="font-semibold">Aman Verma</h4>

                                <p className="text-yellow-500">★★★★☆</p>

                                <p className="mt-2 text-gray-600">
                                    Stylish and lightweight. Worth the price.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Container>
    );
}