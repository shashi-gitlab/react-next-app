import { Container } from '@/components/Container';
import Logo from '@/components/Logo';
import { SubText, SubTitle, Title } from '@/components/ui/text';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | MVCart',
  description: 'Learn about MVCart, our mission, values, and commitment to helping you shop smarter online.',
};

export default function AboutPage() {
  return (
    <Container className="py-12">
      <div className="space-y-10">
        <section className="rounded-[32px] bg-gradient-to-r from-purple/10 via-white to-pink/10 border border-purple/10 p-10 shadow-sm">
          <div className="max-w-4xl">
            <Title className="text-3xl md:text-4xl text-dark-green">About <Logo className="inline" /></Title>
            <SubText className="mt-4 text-gray-600 text-base md:text-lg">
              MVCart is built for shoppers who want a smarter way to browse quality products, discover trusted brands, and enjoy a seamless experience from search to checkout.
            </SubText>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white/90 border border-purple/10 p-6 shadow-sm">
              <SubTitle className="mb-3">Our Mission</SubTitle>
              <p className="text-sm text-gray-600">
                Deliver curated, affordable products with honest information and fast service so every purchase feels easy and confident.
              </p>
            </div>
            <div className="rounded-3xl bg-white/90 border border-purple/10 p-6 shadow-sm">
              <SubTitle className="mb-3">Our Values</SubTitle>
              <p className="text-sm text-gray-600">
                Quality, transparency, and delight. We focus on products people love, meaningful support, and a shopping flow that puts you first.
              </p>
            </div>
            <div className="rounded-3xl bg-white/90 border border-purple/10 p-6 shadow-sm">
              <SubTitle className="mb-3">Our Promise</SubTitle>
              <p className="text-sm text-gray-600">
                Simple navigation, reliable product discovery, and friendly customer care whenever you need it.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[minmax(380px,_1fr)_minmax(320px,_420px)] items-start">
          <div className="space-y-6">
            <div className="space-y-3">
              <Title className="text-3xl">We help you shop with confidence.</Title>
              <SubText className="text-gray-600">
                From fashion and home goods to electronics and daily essentials, MVCart gathers the best products in one place so you can discover what matters most.
              </SubText>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white border border-purple/10 p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-purple">500+</h3>
                <p className="text-sm text-gray-600 mt-2">Handpicked products from trusted categories.</p>
              </div>
              <div className="rounded-3xl bg-white border border-purple/10 p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-purple">24/7</h3>
                <p className="text-sm text-gray-600 mt-2">Support to answer questions and help with orders.</p>
              </div>
              <div className="rounded-3xl bg-white border border-purple/10 p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-purple">Fast Delivery</h3>
                <p className="text-sm text-gray-600 mt-2">Quick order processing and reliable shipping updates.</p>
              </div>
              <div className="rounded-3xl bg-white border border-purple/10 p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-purple">Trusted Community</h3>
                <p className="text-sm text-gray-600 mt-2">Customers choose MVCart for quality, transparency, and value.</p>
              </div>
            </div>
          </div>

          <div className="rounded-[40px] bg-purple/5 border border-purple/10 p-8 shadow-sm">
            <div className="space-y-6">
              <div>
                <p className="inline-flex rounded-full border border-purple/10 bg-purple/10 px-4 py-1 text-sm font-semibold text-purple">Why MVCart?</p>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Curated Collections</h3>
                  <SubText>We surface only thoughtful products so you can shop without overwhelm.</SubText>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Clear Product Details</h3>
                  <SubText>Every item includes key specs, pricing, and value highlights.</SubText>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Modern Experience</h3>
                  <SubText>Enjoy smooth browsing, filtering, and a responsive interface on every device.</SubText>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Customer First</h3>
                  <SubText>Our support team is ready to help with orders, returns, and product guidance.</SubText>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[32px] bg-white border border-purple/10 p-10 shadow-sm">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <Title className="text-3xl">Our story</Title>
              <SubText className="text-gray-600">
                MVCart started with a simple idea: make online shopping feel personal, fast, and trustworthy. We created a shop that helps customers find curated products without the noise.
              </SubText>
            </div>

            <div className="space-y-4 text-gray-600">
              <p>
                We believe great shopping experiences begin with thoughtful curation, clear product details, and a design that feels welcoming. Our team combines technology and customer-first values to deliver a modern storefront for every lifestyle.
              </p>
              <p>
                Whether you are browsing for essentials, gifting something special, or discovering new brands, MVCart is designed to help you shop better and feel confident with every purchase.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
}
