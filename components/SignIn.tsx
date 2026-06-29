'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { logout } from '@/app/store/authSlice';

export default function SignIn() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  if (isAuthenticated && user) {
    return (
      <div className='flex items-center gap-3'>
        <Link href="/profile" className='text-sm font-semibold text-light-color hover:text-dark-color hoverEffect hover:cursor-pointer'>
          {user.fullName.split(' ')[0] || 'Profile'}
        </Link>
        <button
          type='button'
          onClick={() => {
            dispatch(logout());
            router.push('/');
          }}
          className='text-sm font-semibold text-light-color hover:text-dark-color hoverEffect hover:cursor-pointer'
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <Link href="/login" className='text-sm font-semibold text-light-color hover:text-dark-color hoverEffect hover:cursor-pointer'>
      Login
    </Link>
  );
}
