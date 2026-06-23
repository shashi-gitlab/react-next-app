import React from "react";
import Image from "next/image";
import { empty_cart } from "@/app/images";
import { Loader2 } from "lucide-react";

const NoProductAvailable = () => {
    return (
        <div className="flex flex-col items-center justify-center py-10 px-6 text-center bg-gray-100 mt-10 rounded-lg gap-6">

            {/* Illustration */}
            <div className="w-20 h-20 relative">
                <Image
                    src={empty_cart}
                    alt="No products"
                    fill
                    className="object-contain"
                />
            </div>
            <div>
                {/* Title */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    No Products Found
                </h2>

                {/* Subtitle */}
                <p className="text-gray-500 max-w-md">
                    We couldn’t find any products in this category. Try exploring other categories or check back later.
                </p>

            </div>
            {/* Action Button */}
            <div className='space-x-2 flex items-center text-blue-500'>
                <span>We&apos;re restoring shortly.....</span>
                <Loader2 className="w-5 h-5 animate-spin" />
            </div>
        </div>
    );
};

export default NoProductAvailable;