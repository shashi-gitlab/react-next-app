import type { Metadata } from 'next';
import LoginForm from './LoginForm';

export const metadata: Metadata = {
  title: 'Login | MVCart',
  description: 'Secure login to access your MVCart account, orders, and wishlist.',
};

export default function LoginPage() {
  return <LoginForm />;
}
