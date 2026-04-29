export const headerData = [
    { title: "Home", href: "/" },
    { title: "Shop", href: "/shop" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
    { title: "Hot Deal", href: "/deal" }
];

export const quickLinksData = [
    { title: "About Us", href: "/about" },
    { title: "Contact Us", href: "/contact" },
    { title: "FAQ", href: "/faq" },
    { title: "Privacy Policy", href: "/privacy" }
];

export const categoriesData = [
    { title: "Living Room", href: "/living-room" },
    { title: "Bedroom", href: "/bedroom" },
    { title: "Dining Room", href: "/dining-room" },
    { title: "Office", href: "/office" },
    { title: "Outdoor", href: "/outdoor" }
];

export const productTypesData = [
  { title: "Gadgets", value: "gadgets" },
  { title: "Appliances", value: "appliances" },
  { title: "Refrigerators", value: "refrigerators" },
  { title: "Fashion", value: "fashion" },
  { title: "Furniture", value: "furniture" },
  { title: "Books", value: "books" },
  { title: "Fitness", value: "fitness" },
  { title: "Baby", value: "baby" },
  { title: "Automotive", value: "automotive" },
  { title: "Travel", value: "travel" },
  { title: "Others", value: "others" }
];

export const productData = [
  {
    "id": 1,
    "name": "Wireless Bluetooth Earbuds",
    "category": "gadgets",
    "price": 1999,
    "stock": 50,
    "image": "/products/earbud.png",
    "description": "High-quality wireless earbuds with noise cancellation.",
    "status": "hot"
  },
  {
    "id": 2,
    "name": "Smart Watch Series 7",
    "category": "gadgets",
    "price": 4999,
    "stock": 30,
    "image": "/products/smartwatch.png",
    "description": "Track your fitness, calls, and notifications on the go.",
    "status": "hot"
  },
  {
    "id": 3,
    "name": "Nikon Camera",
    "category": "gadgets",
    "price": 4999,
    "stock": 30,
    "image": "/products/camera.png",
    "description": "Capture stunning photos with this high-resolution Nikon camera.",
    "status": "new"
  },
  {
    "id": 4,
    "name": "wireless headphones Series 7",
    "category": "gadgets",
    "price": 4999,
    "stock": 30,
    "image": "/products/headphone2.png",
    "description": "High-quality wireless headphones with noise cancellation.",
    "status": "hot"
  },
  {
    "id": 5,
    "name": "Bluetooth soundbox Series 7",
    "category": "gadgets",
    "price": 4999,
    "stock": 30,
    "image": "/products/bluetooth.jpg",
    "description": "High-quality wireless soundbox with noise cancellation.",
    "status": "new"
  },
  {
    "id": 6,
    "name": "Wireless Bluetooth Series 7",
    "category": "gadgets",
    "price": 4999,
    "stock": 30,
    "image": "/products/bluetooth-2.png",
    "description": "High-quality wireless soundbox with noise cancellation.",
    "status": "hot"
  },
  {
    "id": 7,
    "name": "Washing Machine 7.5 Kg",
    "category": "appliances",
    "price": 8999,
    "stock": 20,
    "image": "/products/washing.png",
    "description": "7.5 Kg washing machine with multiple wash cycles.",
    "status": "sale"
  },
  {
    "id": 8,
    "name": "Tv 32 inch Full HD",
    "category": "appliances",
    "price": 32999,
    "stock": 10,
    "image": "/products/tv.png",
    "description": "32 inch Full HD Smart TV with vibrant colors.",
    "status": "hot"
  },
  {
    "id": 9,
    "name": "Fruit juce mixer",
    "category": "appliances",
    "price": 32999,
    "stock": 10,
    "image": "/products/juce-mixer.png",
    "description": "High-speed juicer mixer for fresh and healthy juices.",
    "status": "hot"
  },
  {
    "id": 10,
    "name": "Double Door Refrigerator 260L",
    "category": "refrigerators",
    "price": 25999,
    "stock": 15,
    "image": "/products/fridge1.png",
    "description": "Frost-free double door refrigerator with large storage.",
    "status": "hot"
  },
  {
    "id": 11,
    "name": "Single Door Refrigerator 190L",
    "category": "refrigerators",
    "price": 14999,
    "stock": 25,
    "image": "/products/fridge2.png",
    "description": "Compact and energy-saving refrigerator for small families.",
    "status": "sale"
  },
  {
    "id": 12,
    "name": "Mixer Grinder 3 in 1",
    "category": "others",
    "price": 4999,
    "stock": 40,
    "image": "/products/mixer.png",
    "description": "3 in 1 mixer grinder with powerful motor and multiple jars.",
    "status": "sale"
  },
  {
    "id": 13,
    "name": "Office fan Ergonomic",
    "category": "others",
    "price": 6999,
    "stock": 35,
    "image": "/products/fan.png",
    "description": "Ergonomic office fan with lumbar support.",
    "status": "hot"
  },
  {
    "id": 14,
    "name": "Wireless Headphones",
    "category": "others",
    "price": 6999,
    "stock": 35,
    "image": "/products/headphone.png",
    "description": "High-quality wireless headphones with noise cancellation."
  }
]

export const posts = [
 {
      "id": 1,
      "title": "How to Build a Blog with Next.js",
      "excerpt": "Learn how to create a modern, fast blog using Next.js, routing, and static generation.",
      "image": "/images/blog1.jpg",
      "slug": "build-blog-nextjs",
      "date": "2026-04-10",
      "readTime": 5,
      "category": "Development",
      "author": "Amit Sharma"
    },
    {
      "id": 2,
      "title": "Understanding React Server Components",
      "excerpt": "A deep dive into React Server Components and how they improve performance in modern apps.",
      "image": "/images/blog2.jpg",
      "slug": "react-server-components",
      "date": "2026-04-15",
      "readTime": 7,
      "category": "React",
      "author": "Priya Verma"
    },
    {
      "id": 3,
      "title": "Tailwind CSS Tips for Faster UI Development",
      "excerpt": "Boost your productivity with these practical Tailwind CSS tips and best practices.",
      "image": "/images/blog3.jpg",
      "slug": "tailwind-css-tips",
      "date": "2026-04-18",
      "readTime": 4,
      "category": "CSS",
      "author": "Rahul Mehta"
    },
    {
      "id": 4,
      "title": "SEO Optimization in Next.js Apps",
      "excerpt": "Improve your site's visibility with SEO strategies tailored for Next.js applications.",
      "image": "/images/blog4.jpg",
      "slug": "nextjs-seo-optimization",
      "date": "2026-04-22",
      "readTime": 6,
      "category": "SEO",
      "author": "Neha Gupta"
    }
];