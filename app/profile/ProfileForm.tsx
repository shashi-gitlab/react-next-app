"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Container } from '@/components/Container';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SubText, Title } from '@/components/ui/text';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { updateProfile, type UserProfile } from '@/app/store/authSlice';

const initialProfile: UserProfile = {
  id: '',
  fullName: '',
  email: '',
  mobile: '',
  password: '',
  address: '',
  city: '',
  state: '',
  postalCode: '',
  country: 'India',
};

export default function ProfileForm() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const [profile, setProfile] = useState<UserProfile>(initialProfile);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!user) {
      router.replace('/login?redirect=/profile');
      return;
    }

    setProfile({ ...user });
  }, [router, user]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProfile((current) => ({ ...current, [name]: value }));
  };

  const saveProfile = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!user) {
      return;
    }

    const updatedProfile: UserProfile = {
      ...user,
      ...profile,
      fullName: profile.fullName.trim(),
      email: profile.email.trim().toLowerCase(),
      mobile: profile.mobile.trim(),
      address: profile.address.trim(),
      city: profile.city.trim(),
      state: profile.state.trim(),
      postalCode: profile.postalCode.trim(),
      country: profile.country.trim(),
    };

    dispatch(updateProfile(updatedProfile));
    setMessage('Your profile details have been updated successfully.');
  };

  if (!user) {
    return null;
  }

  return (
    <Container className="py-16">
      <div className="max-w-4xl space-y-10">
        <div className="rounded-[32px] bg-linear-to-r from-purple/10 via-white to-pink/10 border border-purple/10 p-10 shadow-sm">
          <Title className="text-4xl text-dark-green">Your Profile</Title>
          <SubText className="mt-4 text-gray-600">
            Update your contact details, delivery address, and account preferences anytime.
          </SubText>
        </div>

        <div className="rounded-[40px] border border-purple/10 bg-white p-10 shadow-xl shadow-purple/5">
          <form onSubmit={saveProfile} className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="fullName" className="text-sm font-medium text-slate-700">Full name</label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={profile.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={profile.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="mobile" className="text-sm font-medium text-slate-700">Mobile number</label>
                <Input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  value={profile.mobile}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="country" className="text-sm font-medium text-slate-700">Country</label>
                <Input
                  id="country"
                  name="country"
                  value={profile.country}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="address" className="text-sm font-medium text-slate-700">Address</label>
              <Input
                id="address"
                name="address"
                value={profile.address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-2">
                <label htmlFor="city" className="text-sm font-medium text-slate-700">City</label>
                <Input
                  id="city"
                  name="city"
                  value={profile.city}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="state" className="text-sm font-medium text-slate-700">State</label>
                <Input
                  id="state"
                  name="state"
                  value={profile.state}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="postalCode" className="text-sm font-medium text-slate-700">Postal code</label>
                <Input
                  id="postalCode"
                  name="postalCode"
                  value={profile.postalCode}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <Button type="submit" className="w-full bg-linear-to-r from-purple to-pink text-white py-4 text-base font-semibold">
              Save profile details
            </Button>
          </form>

          {message && (
            <div className="mt-6 rounded-3xl border border-green-100 bg-green-50 p-4 text-sm text-green-700">
              {message}
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
