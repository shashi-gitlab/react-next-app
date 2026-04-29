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
        <MapPin className='h-6 w-6 text-gray-600 group-hover:text-primary transition-colors' />
    )
  },
  {
    title: "Call Us",
    subTitle: "+ 01 234 567 88",
    icon:(
        <MapPin className='h-6 w-6 text-gray-600 group-hover:text-primary transition-colors' />
    )
  },
  {
    title: "Email Us",
    subTitle: "support@company.com",
    icon:(
        <MapPin className='h-6 w-6 text-gray-600 group-hover:text-primary transition-colors' />
    )
  },
  {
    title: "Visit Hours",
    subTitle: "10:00 am - 23:00 pm",
    icon:(
        <MapPin className='h-6 w-6 text-gray-600 group-hover:text-primary transition-colors' />
    )
  }
]

const FooterTop = () => {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 border-b'>
        {data.map((item,index) => (
            <div key={index} className='flex items-center gap-3 group hover:bg-gray-50 py-4 transition-colors hoverEffect'>
                {item.icon}
                <div>
                    <h3 className='font-semibold text-gray-900 group-hover:text-black transition-colors hoverEffect'>{item.title}</h3>
                    <p className='text-gray-600 text-sm mt-1 group-hover:text-gray-900 hoverEffect'>{item.subTitle}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default FooterTop; 