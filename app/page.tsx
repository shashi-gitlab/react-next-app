import { Container } from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import { HomeBrands } from "@/components/HomeBrands";
import { HomeCategories } from "@/components/HomeCategories";
import { LatestBlog } from "@/components/blog/LatestBlog";
import ProductGrid from "@/components/ProductGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MVCart | Your One-Stop Shop",
  description: "Browse the latest products, top brands, and expert blog insights at [Store Name]. Shop our curated collections today.",
  keywords: ["e-commerce", "shopping", "latest fashion", "tech gadgets", "online store"],
}

export default function Home() {


  return (
    <Container>
      <HomeBanner />
      <div className="mt-4 md:mt-10 ">
        <ProductGrid />
      </div>
      <HomeCategories />
      <HomeBrands />
      <LatestBlog />
    </Container>
  );
}
