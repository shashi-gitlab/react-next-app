import { Metadata } from 'next';
import ProfileForm from './ProfileForm';

export const metadata: Metadata = {
  title: 'Profile | MVCart',
  description: 'Update your MVCart profile information, contact details, and delivery preferences.',
};

export default function ProfilePage() {
  return <ProfileForm />;
}
