import React, { FC, useRef } from 'react'
import Logo from './Logo';
import { X } from 'lucide-react';
import Link from 'next/link';
import { headerData } from '@/constants/data';
import { usePathname } from 'next/navigation';
import SocialMedia from './SocialMedia';
import { useOutsideClick } from '@/app/hooks';

interface SideBarProps {
    isOpen: boolean,
    onClose: () => void,
    buttonRef:React.RefObject<HTMLElement | null>; 
}

const SideMenu: FC<SideBarProps> = ({ isOpen, onClose, buttonRef  }) => {
    const pathName = usePathname();
    const sidebarRef = useOutsideClick<HTMLDivElement>(onClose,  [buttonRef]);
    
    return (
        <div className={`fixed inset-y-0 h-screen left-0 z-50 w-full bg-black/50 shadow-xl ${isOpen ? 'translate-x-0' : "-translate-x-full"} hoverEffect`}>
            <div ref={sidebarRef} className='min-w-72 max-w-96 bg-white h-screen border-r border-r-light-green flex flex-col gap-4 text-light-color'>
                <div className='flex items-center justify-between p-4 border-b'>
                    <Logo className='hoverEffect group' />
                    <button className='hover:text-light-green' onClick={onClose}>
                        <X />
                    </button>
                </div>
                <div className='flex-1 flex flex-col justify-between overflow-y-auto'>
                    <ul className='gap-1'>
                        {headerData?.map((item) => (
                            <li key={item?.title} className={`px-4 py-1 hover:text-light-green hover:font-semibold hover:cursor-pointer hover:border  ${pathName === item?.href && "bg-dark-green text-white"}`}>
                                <Link href={item?.href} className={`hoverEffect relative group`} onClick={onClose}> 
                                    {item?.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <SocialMedia className="p-4 self-center" />
                </div>
            </div>
        </div>
    )
}

export default SideMenu;