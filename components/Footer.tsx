import React from 'react'
import { Container } from '@/components/Container';
import FooterTop from './FooterTop';
import Logo from './Logo';
import SocialMedia from './SocialMedia';
import { SubText, SubTitle } from './ui/text';
import { categoriesData, quickLinksData } from '@/constants/data';
import Link from 'next/link';
import { Input } from './ui/input';
import { Button } from './ui/button';

const Footer = () => {
  return (
    <footer className='bg-white border-t'>
      <Container>
        <FooterTop />
        <div className='py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='space-y-4'>
            <Logo />
            <SubText>
              Discover curated furniture collections at Shopcart, blending style and comfort to elevate your living spaces.
            </SubText>
            <SocialMedia className='text-dark-color/50' iconClassName='border-dark-color/50 hover:border-light-green hover:text-white'
              tooltipClassName='bg-dark-color text-white' />
          </div>
          <div className='space-y-4'>
            <SubTitle className='text-purple'>Quick Links</SubTitle>
            <ul className='space-y-1 mt-4' >
              {
                quickLinksData.map((item, index) => (
                  <li key={index}>
                  <Link
                    href={item.href}
                    className='text-sm font-medium text-gray-600 hover:text-light-green transition-colors hoverEffect'
                  >
                    {item.title}
                  </Link>
                  </li>
                ))}
            </ul>
          </div>
          <div className='space-y-4'>
            <SubTitle className='text-purple'>Categories</SubTitle>
            <ul className='space-y-1 mt-4' >
              {
                categoriesData.map((item, index) => (
                  <li key={index}>
                  <Link
                    href={item.href}
                    className='text-sm font-medium text-gray-600 hover:text-light-green transition-colors hoverEffect'
                  >
                    {item.title}
                  </Link>
                  </li>
                ))}
            </ul>
          </div>
          <div className='space-y-4'>
            <SubTitle className='text-purple'>Newsletter</SubTitle>
            <SubText>
              Subscribe to our newsletter to receive updates and exclusive offers.
            </SubText>
            <form className="space-y-3">
              <Input type='email' placeholder='Enter your email' className='w-full px-4 py-5 rounded-none text-sm' />
              <Button className={'w-full bg-primary-color/70 text-white hover:bg-primary-color rounded-none'} size={'lg'}>Subscribe</Button>
            </form>
          </div>
        </div>
        <div className='border-t py-4 text-center text-sm text-gray-500'>
          &copy; {new Date().getFullYear()} <Logo className='text-sm'/>. All rights reserved.
        </div>
      </Container>
    </footer>
  )
}

export default Footer;
