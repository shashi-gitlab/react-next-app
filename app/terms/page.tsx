import { Container } from '@/components/Container';
import { SubText, SubTitle, Title } from '@/components/ui/text';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | MVCart',
  description: 'Read MVCart’s terms and conditions, including order rules, payment, shipping, and user responsibilities.',
};

export default function TermsPage() {
  return (
    <Container className="py-12">
      <div className="space-y-10">
        <section className="rounded-[32px] bg-linear-to-r from-purple/10 via-white to-pink/10 border border-purple/10 p-10 shadow-sm">
          <div className="max-w-4xl">
            <Title className="text-3xl md:text-4xl text-dark-green">Terms & Conditions</Title>
            <SubText className="mt-4 text-gray-600 text-base md:text-lg">
              These terms describe how you may use MVCart and what we both agree to when you browse, order, or interact with our service.
            </SubText>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white/90 border border-purple/10 p-6 shadow-sm">
              <SubTitle className="mb-3">Order Agreements</SubTitle>
              <p className="text-sm text-gray-600">
                Every purchase is subject to availability, pricing, and these terms.
              </p>
            </div>
            <div className="rounded-3xl bg-white/90 border border-purple/10 p-6 shadow-sm">
              <SubTitle className="mb-3">Secure Checkout</SubTitle>
              <p className="text-sm text-gray-600">
                We use secure payment methods and protect your data during checkout.
              </p>
            </div>
            <div className="rounded-3xl bg-white/90 border border-purple/10 p-6 shadow-sm">
              <SubTitle className="mb-3">Site Use</SubTitle>
              <p className="text-sm text-gray-600">
                You agree to use MVCart responsibly and provide accurate account information.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[32px] bg-white border border-purple/10 p-10 shadow-sm">
          <div className="space-y-6">
            <Title className="text-3xl">Ordering and payment</Title>
            <div className="space-y-4 text-gray-600">
              <p>
                Orders are confirmed once payment is authorized. We reserve the right to cancel or modify an order if inventory is unavailable or if there is an issue processing payment.
              </p>
              <p>
                All prices are shown in the local currency and may change without notice. Taxes, shipping, and other charges may apply depending on your delivery address.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[32px] bg-white border border-purple/10 p-10 shadow-sm">
          <div className="space-y-6">
            <Title className="text-3xl">Shipping, returns, and refunds</Title>
            <div className="space-y-4 text-gray-600">
              <p>
                Shipping timelines are estimates and may vary by carrier or destination. We strive to deliver products quickly and keep you informed of order status.
              </p>
              <p>
                Returns and refund requests are handled according to our return policy. Damaged or incorrect items should be reported promptly so we can make it right.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[32px] bg-linear-to-r from-purple/5 to-pink/5 border border-purple/10 p-10 shadow-sm">
          <div className="space-y-6">
            <Title className="text-3xl">Your responsibilities and safeguards</Title>
            <div className="space-y-4 text-gray-600">
              <p>
                You are responsible for protecting your account credentials and for any activity conducted through your account.
              </p>
              <p>
                We safeguard your information with secure encryption, controlled access, and regular monitoring of our systems.
              </p>
              <p>
                If you suspect unauthorized use of your account or data, contact our support team immediately.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[32px] bg-white border border-purple/10 p-10 shadow-sm">
          <div className="space-y-6">
            <Title className="text-3xl">Changes and governing rules</Title>
            <div className="space-y-4 text-gray-600">
              <p>
                We may update these terms at any time. Continued use of MVCart after changes means you accept the revised terms.
              </p>
              <p>
                These terms are governed by applicable local law. If any part is found invalid, the remainder of the agreement still applies.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
}
