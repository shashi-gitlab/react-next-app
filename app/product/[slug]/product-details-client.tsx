"use client";

import { useProductDetails } from '@/app/hooks/useProducts';
import Image from "next/image";
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Package, Truck, ShieldCheck } from "lucide-react";
import RatingStars from '@/components/RatingStars';
import { useParams } from "next/navigation";
import { Container } from '@/components/Container';
import MVLoader from '@/components/MVLoader';
import { useEffect, useState } from 'react';
import DateFormatter from '@/components/DateFormatter';
import { AddToCartButton } from '@/components/AddToCartButton';
import { PriceView } from '@/components/PriceView';

export default function ProductDetailsClient() {
    const params = useParams();
    const id = params.slug as string;

    const {
        data: product,
        isLoading,
        error,
    } = useProductDetails(id);

    const [selectedImage, setSelectedImage] = useState('');
    useEffect(() => {
        setSelectedImage(product?.thumbnail);
    }, [product?.thumbnail]);

    if (isLoading) {
        return <Container><MVLoader /> </Container>;
    }

    if (error) {
        return <Container >Something went wrong</Container>;
    }


    return (
        <Container className="container mx-auto max-w-7xl px-4 py-10">
            <div className="grid gap-10 lg:grid-cols-2">
                {/* Product Image */}
                <div>
                    <div className="overflow-hidden rounded-xl border bg-muted relative">
                        {(selectedImage || product.thumbnail) && (
                            <Image
                                src={selectedImage || product.thumbnail}
                                alt={product.title}
                                width={600}
                                height={600}
                                className="h-full w-full object-cover"
                            />
                        )}
                        {(!selectedImage || !product.thumbnail) && (
                            <h5 className='text-4xl font-bold absolute top-1/2 left-1/2 -rotate-45 text-center -translate-x-1/2 -translate-y-1/2 text-black/50 p-2 whitespace-nowrap '>
                                {product.title}
                            </h5>
                        )}

                    </div>

                    <div className="mt-4 flex gap-3">
                        {product?.images?.map((image: any) => (
                            <div
                                key={image}
                                className="overflow-hidden rounded-lg border cursor-pointer"
                                onClick={() => setSelectedImage(image)}
                            >
                                <Image
                                    src={image}
                                    alt={product.title}
                                    width={80}
                                    height={80}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Product Info */}
                <div className="space-y-3">
                    <div>
                        <Badge>{product.category}</Badge>

                        <h1 className="mt-3 text-4xl font-bold">
                            {product.title}
                        </h1>

                        <p className="mt-3 text-muted-foreground">
                            {product.description}
                        </p>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1">
                        <span className={`text-yellow-400 text-lg gradientText`}>
                            ★
                        </span>
                        <span className="text-sm font-medium">{product.rating}</span>
                        <span className="text-sm text-muted-foreground">
                            ({product?.reviews?.length} reviews)
                        </span>
                    </div>

                    {/* Pricing */}
                    <div className="space-y-1">
                        <div className="flex items-center gap-3">
                            <PriceView product={product} 
                                priceTextClassName='text-3xl font-bold' 
                                priceCutTextClassName='text-lg' 
                            />
                        </div>
                    </div>

                    {/* Stock */}
                    <div className="flex items-center gap-2">
                        <Package className="size-4" />
                        <span>
                            {product.stock} available •{" "}
                            {product.availabilityStatus}
                        </span>
                    </div>

                    {/* Product Meta */}
                    <Card>
                        <CardContent className="grid gap-3 px-4 text-sm">
                            <div className="flex justify-between">
                                <span>Brand</span>
                                <span>{product.brand}</span>
                            </div>

                            <div className="flex justify-between">
                                <span>SKU</span>
                                <span>{product.sku}</span>
                            </div>

                            <div className="flex justify-between">
                                <span>Weight</span>
                                <span>{product.weight}g</span>
                            </div>

                            <div className="flex justify-between">
                                <span>Dimensions</span>
                                <span>
                                    {product?.dimensions?.width} ×{" "}
                                    {product?.dimensions?.height} ×{" "}
                                    {product?.dimensions?.depth} cm
                                </span>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {product?.tags?.map((tag: any) => (
                            <Badge
                                key={tag}
                                variant="outline"
                            >
                                {tag}
                            </Badge>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="flex gap-3 py-4 justify-end">
                        <AddToCartButton product={product} className='w-32 h-10 bg-white text-primary-color'/>

                        <Button
                            size="lg"
                            variant="outline"
                            className={'w-32 h-auto bg-primary-color text-white hover:bg-primary-color/80 hover:text-white hover:border-primary-color hoverEffect'}
                        >
                            Buy Now
                        </Button>
                    </div>

                    <p className="text-sm text-muted-foreground">
                        MOQ:{" "}
                        {product.minimumOrderQuantity}
                    </p>

                    <p className="text-sm text-muted-foreground">
                        Return Policy: {product.returnPolicy}
                    </p>

                    {/* Shipping / Warranty */}
                    <div className="grid gap-4 sm:grid-cols-2">
                        <Card>
                            <CardContent className="flex gap-3 p-4">
                                <Truck className="size-5" />
                                <div>
                                    <p className="font-medium">Shipping</p>
                                    <p className="text-sm text-muted-foreground">
                                        {product?.shippingInformation}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="flex gap-3 p-4">
                                <ShieldCheck className="size-5" />
                                <div>
                                    <p className="font-medium">Warranty</p>
                                    <p className="text-sm text-muted-foreground">
                                        {product.warrantyInformation}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Reviews */}
            <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                    <h2 className="text-lg font-bold">
                        Hot Deal Section
                    </h2>

                    <div className='space-y-2'>
                        {/* <Title className='border-b pb-3'>Popular Categories</Title> */}
                        {/* <div className='grid grid-cols-1 gap-3'> */}
                            {[...Array(6)]?.map((cate, index) => (

                                <div key={`cat` + cate + index} className='bg-white p-4 flex  group items-center'>
                                    <Image src={"https://dummyjson.com/image/150"} alt=''
                                        width={80}
                                        height={80} className='mr-3 bg-light-text group-hover:scale-105' />
                                    <div>
                                        <h3 className='font-medium'>Category-{cate}</h3>
                                        <p className='text-sm text-muted-foreground'>(2) items Available</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    {/* </div> */}
                </div>

                <div className="space-y-3">
                    <h2 className="text-lg font-bold">
                        Customer Reviews
                    </h2>

                    <div className="space-y-2">
                        {product?.reviews?.map((review: any, index: any) => (
                            <Card key={index}>
                                <CardContent className="px-3">
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-medium">
                                            {review.reviewerName}
                                        </h3>

                                        <DateFormatter date={review.date} className='text-sm text-muted-foreground' />
                                    </div>

                                    <div className="mt-1 flex items-center gap-1">
                                        <RatingStars rating={review.rating} />
                                    </div>

                                    <p className="mt-1 text-muted-foreground">
                                        {review.comment}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </Container>
    );
}