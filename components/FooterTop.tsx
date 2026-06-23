import { MapPin } from 'lucide-react';
import React from 'react'

interface ContactItemData {
    title: string;
    subTitle: string;
    icon: React.ReactNode;
}

const data:ContactItemData[] = [
  {
    title: "Visit Us",
    subTitle: "New York, NY 10012, US",
    icon:(
        <MapPin className='h-6 w-6 group-hover:text-pink transition-colors' />
    )
  },
  {
    title: "Call Us",
    subTitle: "+ 01 234 567 88",
    icon:(
        <MapPin className='h-6 w-6 group-hover:text-pink transition-colors' />
    )
  },
  {
    title: "Email Us",
    subTitle: "support@company.com",
    icon:(
        <MapPin className='h-6 w-6 group-hover:text-pink transition-colors' />
    )
  },
  {
    title: "Visit Hours",
    subTitle: "10:00 am - 23:00 pm",
    icon:(
        <MapPin className='h-6 w-6 group-hover:text-pink transition-colors' />
    )
  }
]

const FooterTop = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 border-b'>
        {data.map((item,index) => (
            <div key={index} className='flex items-center gap-3 group hover:bg-gray-50 py-4 transition-colors hoverEffect'>
                <span className='text-pink/70'>{item.icon}</span>
                <div>
                    <h3 className='font-semibold text-purple/70 group-hover:text-purple transition-colors hoverEffect'>{item.title}</h3>
                    <p className='text-gray-600 text-sm mt-1 hoverEffect'>{item.subTitle}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default FooterTop; 