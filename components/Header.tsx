import React from 'react'
import { Container } from '@/components/Container';
import Logo from '@/components/Logo';
import HeaderMenu from '@/components/HeaderMenu';
import SearchBar from '@/components/SearchBar';
import CartIcon from '@/components/CartIcon';
import FavoriteButton from '@/components/FavoriteButton';
import SignIn from '@/components/SignIn';
import MobileMenu from '@/components/MobileMenu';

const Header = () => {
  return (
    <header className='sticky top-0 z-50 bg-white/70 backdrop-blur-md shadow py-5'>
      <Container className='flex items-center justify-between'>
        <div className='w-auto md:w-1/3 flex items-center gap-2.5 justify-start md:gap-0'>
          <MobileMenu />
          <Logo />
        </div>
        <HeaderMenu />
        <div className='w-auto md:w-1/3 items-center flex justify-end gap-5'>
          <SearchBar />
          <CartIcon />
          <FavoriteButton />
          <SignIn />
        </div>
      </Container>
    </header>
  )
}

export default Header;