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
    <Container className="flex">
      {/* Sidebar */}
      <ShopFilterBar  />

      {/* Product Grid */}
      <main className='flex-1 px-5'>
        <ShopGrid />
      </main>
    </Container>
  );
}