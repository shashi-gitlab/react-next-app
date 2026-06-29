import { Container } from '@/components/Container';
import { ShopFilterBar } from '@/components/shop/ShopFilterBar';
import { ShopGrid } from '@/components/shop/ShopGrid';

// async function getProducts() {
//   const res = await fetch("https://fakestoreapi.com/products", {
//     cache: "no-store",
//   });
//   return res.json();
// }
export async function generateMetadata() {
  
  return {
    title: `All Products | Shop`,
    description: "Buy the best products online",
  };
}

export default async function ShopPage() {

  return (
    <Container className="flex flex-col md:flex-row gap-0">
      {/* Sidebar */}
      <ShopFilterBar  />

      {/* Product Grid */}
      <main className='w-full md:flex-1'>
        <ShopGrid />
      </main>
    </Container>
  );
}