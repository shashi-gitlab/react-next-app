import { Facebook, Github, Linkedin, Youtube } from 'lucide-react'
import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface Props{
    className?: string,
    iconClassName?: string,
    tooltipClassName?: string,
}

const socialLink = [
    {
        title: "Youtube",
        href:"www.youtube.com",
        icon:<Youtube className='w-5 h-5'/>
    },
    {
        title: "Github",
        href:"www.github.com",
        icon:<Github className='w-5 h-5'/>
    },
    {
        title: "Linkedin",
        href:"www.Linkedin.com",
        icon:<Linkedin className='w-5 h-5'/>
    },
    {
        title: "Facebook",
        href:"www.Facebook.com",
        icon:<Facebook className='w-5 h-5'/>
    },
]

export default function SocialMedia({className, iconClassName, tooltipClassName}:Props) {
  return (
    <TooltipProvider>
        <div className={cn("flex gap-3", className)}>
            {socialLink?.map((item)=>(
                <Tooltip key={item.title}>
                    <TooltipTrigger className={"flex rounded-full group"}>
                        <Link  target='_blank' rel='noopener noreferrer' href={item?.href} className={cn("p-2 border rounded-full hover:bg-purple hover:text-white hoverEffect", iconClassName)}>
                            {item?.icon}
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent className={cn("",tooltipClassName)}>
                        <p>{item.title}</p>
                    </TooltipContent>
                </Tooltip>
            ))}
        </div>
    </TooltipProvider>
  )
}
