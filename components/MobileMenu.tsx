"use client";
import { AlignLeft } from 'lucide-react'
import React, { useRef, useState } from 'react'
import SideMenu from './SideMenu'

export default function MobileMenu() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    return (
        <>
            <button onClick={() => setIsSidebarOpen(prev => !prev)} ref={buttonRef}>
                <AlignLeft  className='md:hidden text-dark-color hover:cursor-pointer hover:text-light-green' />
            </button>
            <div className='md:hidden'>
                <SideMenu
                    isOpen={isSidebarOpen}
                    onClose={() => setIsSidebarOpen(false)}
                    buttonRef={buttonRef}
                />
            </div>
        </>
    )
}
