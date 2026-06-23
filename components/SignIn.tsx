'use client';

import Link from 'next/link';

export default function SignIn() {
  return (
    <Link href="/login" className='text-sm font-semibold text-light-color hover:text-dark-color hoverEffect hover:cursor-pointer'>
      Login
    </Link>
  )
}
