import { Container } from '@/components/Container';
import { SubText, SubTitle, Title } from '@/components/ui/text';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | MVCart',
  description: 'Read MVCart’s privacy policy, including how we collect, use, and protect your data.',
};

export default function PrivacyPage() {
  return (
    <Container className="py-12">
      <div className="space-y-10">
        <section className="rounded-[32px] bg-linear-to-r from-purple/10 via-white to-pink/10 border border-purple/10 p-10 shadow-sm">
          <div className="max-w-4xl">
            <Title className="text-3xl md:text-4xl text-dark-green">Privacy Policy</Title>
            <SubText className="mt-4 text-gray-600 text-base md:text-lg">
              At MVCart, your privacy matters. This policy explains what information we collect, why we collect it, and how we protect it.
            </SubText>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white/90 border border-purple/10 p-6 shadow-sm">
              <SubTitle className="mb-3">Data We Collect</SubTitle>
              <p className="text-sm text-gray-600">
                Personal details you provide during checkout, account creation, and support requests.
              </p>
            </div>
            <div className="rounded-3xl bg-white/90 border border-purple/10 p-6 shadow-sm">
              <SubTitle className="mb-3">How We Use It</SubTitle>
              <p className="text-sm text-gray-600">
                To process orders, improve site experience, and deliver relevant offers and support.
              </p>
            </div>
            <div className="rounded-3xl bg-white/90 border border-purple/10 p-6 shadow-sm">
              <SubTitle className="mb-3">Safeguards</SubTitle>
              <p className="text-sm text-gray-600">
                We use secure storage, encrypted connections, and internal access controls to keep your data safe.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[32px] bg-white border border-purple/10 p-10 shadow-sm">
          <div className="space-y-6">
            <Title className="text-3xl">What information we collect</Title>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl bg-purple/5 border border-purple/10 p-6">
                <SubTitle className="mb-3">Account & Order Details</SubTitle>
                <p className="text-sm text-gray-600">
                  Name, email, shipping address, billing information, and order history when you place a purchase.
                </p>
              </div>
              <div className="rounded-3xl bg-purple/5 border border-purple/10 p-6">
                <SubTitle className="mb-3">Usage & Device Data</SubTitle>
                <p className="text-sm text-gray-600">
                  Browsing activity, device type, location data, and other analytics to improve our service.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[32px] bg-white border border-purple/10 p-10 shadow-sm">
          <div className="space-y-6">
            <Title className="text-3xl">How we protect your information</Title>
            <div className="space-y-4 text-gray-600">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Secure Connections</h3>
                <SubText>
                  All communication with MVCart is encrypted using HTTPS to protect your details while browsing and checking out.
                </SubText>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Access Controls</h3>
                <SubText>
                  We limit access to personal information to authorized team members and vendors that support order fulfillment.
                </SubText>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Data Retention</h3>
                <SubText>
                  We retain information only as long as needed to fulfill orders, comply with legal obligations, and improve the experience.
                </SubText>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Third party services</h3>
                <SubText>
                  We may share data with trusted service providers for shipping, payments, analytics, and customer support.
                </SubText>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[32px] bg-linear-to-r from-purple/5 to-pink/5 border border-purple/10 p-10 shadow-sm">
          <div className="space-y-6">
            <Title className="text-3xl">Your privacy choices</Title>
            <div className="space-y-4 text-gray-600">
              <p>
                You can update your account details, opt out of marketing messages, and request access to information we hold about you.
              </p>
              <p>
                If you have questions about your data or wish to delete your account, contact us through the contact page and we will assist you.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
}
