// Mock data for initial frontend-only implementation
// This will be replaced with Sanity CMS data later

export const mockData = {
  hero: {
    headline: "I Build Modern Websites for Local Businesses",
    subheadline: "Fast, Mobile-Friendly & Affordable Websites That Help Your Business Grow Online",
    name: "Saurav Dhapola",
    trustBadges: [
      { icon: "Smartphone", text: "Mobile Friendly" },
      { icon: "Zap", text: "Fast Delivery" },
      { icon: "DollarSign", text: "Affordable" }
    ]
  },

  about: {
    title: "About Me",
    description: "Hi! I'm Saurav Dhapola, an MCA student and freelance web designer passionate about helping local businesses establish their online presence. I create modern, mobile-friendly websites that are easy to manage and help you attract more customers. No complicated tech jargon – just beautiful, functional websites that work for your business."
  },

  services: [
    {
      id: 1,
      title: "Business Website",
      description: "Professional website for your business with contact forms, service pages, and SEO optimization.",
      icon: "Briefcase"
    },
    {
      id: 2,
      title: "Cafe / Restaurant Website",
      description: "Menu showcase, online reservations, location map, and photo gallery for your eatery.",
      icon: "Coffee"
    },
    {
      id: 3,
      title: "Shop / Mall Website",
      description: "Product catalog, shopping features, and payment integration for your retail business.",
      icon: "ShoppingBag"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Showcase your work beautifully with galleries, case studies, and contact options.",
      icon: "Layout"
    },
    {
      id: 5,
      title: "Landing Pages",
      description: "High-converting single page websites for campaigns, product launches, or lead generation.",
      icon: "FileText"
    },
    {
      id: 6,
      title: "Website Redesign",
      description: "Modernize your existing website with fresh design, better performance, and mobile optimization.",
      icon: "RefreshCw"
    }
  ],

  process: [
    {
      step: 1,
      title: "Requirement Discussion",
      description: "We discuss your business goals, target audience, and website requirements over WhatsApp or call."
    },
    {
      step: 2,
      title: "Layout Planning",
      description: "I create a structure and layout plan for your website, ensuring all features you need are included."
    },
    {
      step: 3,
      title: "Design & Development",
      description: "I design and build your website with modern technologies, making it fast and mobile-friendly."
    },
    {
      step: 4,
      title: "Review & Revisions",
      description: "You review the website and I make any changes needed to ensure it's exactly what you want."
    },
    {
      step: 5,
      title: "Launch & Support",
      description: "I launch your website and provide ongoing support. You can update content easily through CMS."
    }
  ],

  projects: [
    {
      id: 1,
      title: "Cafe Delight Website",
      description: "A modern cafe website with online menu, reservation system, and photo gallery.",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop",
      problem: "Small cafe needed online presence to attract customers and showcase their menu.",
      features: ["Online Menu", "Reservation System", "Photo Gallery", "Location Map"],
      tech: ["React", "Tailwind CSS", "Sanity CMS"],
      liveLink: "#",
      codeLink: "#"
    },
    {
      id: 2,
      title: "FitLife Gym Website",
      description: "Dynamic gym website with membership plans, trainer profiles, and class schedules.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
      problem: "Gym needed a website to showcase facilities and allow online membership sign-ups.",
      features: ["Membership Plans", "Trainer Profiles", "Class Schedule", "Contact Form"],
      tech: ["React", "Framer Motion", "Sanity CMS"],
      liveLink: "#",
      codeLink: "#"
    },
    {
      id: 3,
      title: "Local Boutique Store",
      description: "E-commerce website for a local clothing boutique with product catalog and cart.",
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&h=600&fit=crop",
      problem: "Boutique wanted to sell products online and reach more customers.",
      features: ["Product Catalog", "Shopping Cart", "Payment Integration", "Admin Dashboard"],
      tech: ["Next.js", "Stripe", "Sanity CMS"],
      liveLink: "#",
      codeLink: "#"
    }
  ],

  skills: [
    "HTML & CSS",
    "JavaScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",
    "Sanity CMS",
    "Responsive Design",
    "SEO Basics",
    "Git & GitHub",
    "Figma"
  ],

  whyChooseMe: [
    {
      title: "Sanity CMS Integration",
      description: "I configure Sanity CMS so you can update your website content without any coding knowledge. Change text, images, and more anytime!",
      icon: "Settings",
      highlight: true
    },
    {
      title: "Affordable Pricing",
      description: "Quality websites at prices that work for small businesses and startups.",
      icon: "DollarSign",
      highlight: false
    },
    {
      title: "Fast Delivery",
      description: "Most projects completed within 2-3 weeks depending on complexity.",
      icon: "Zap",
      highlight: false
    },
    {
      title: "Mobile Optimized",
      description: "All websites are fully responsive and work perfectly on phones and tablets.",
      icon: "Smartphone",
      highlight: false
    },
    {
      title: "Free Basic SEO",
      description: "I include basic SEO setup to help your website appear in Google search results.",
      icon: "Search",
      highlight: false
    },
    {
      title: "WhatsApp Support",
      description: "Easy communication and support via WhatsApp whenever you need help.",
      icon: "MessageCircle",
      highlight: false
    }
  ],

  pricing: [
    {
      id: 1,
      name: "Starter",
      price: "₹8,999",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 5 pages",
        "Mobile responsive design",
        "Contact form",
        "Basic SEO setup",
        "Social media links",
        "2 rounds of revisions",
        "1 month support"
      ],
      popular: false,
      buttonText: "Get Started"
    },
    {
      id: 2,
      name: "Business",
      price: "₹15,999",
      description: "Most popular for growing businesses",
      features: [
        "Up to 10 pages",
        "Mobile responsive design",
        "Sanity CMS integration",
        "Advanced SEO setup",
        "Contact & booking forms",
        "Google Maps integration",
        "3 rounds of revisions",
        "3 months support"
      ],
      popular: true,
      buttonText: "Get Started"
    },
    {
      id: 3,
      name: "Custom",
      price: "Custom",
      description: "Tailored solutions for unique needs",
      features: [
        "Unlimited pages",
        "Custom features",
        "E-commerce integration",
        "Payment gateway setup",
        "Admin dashboard",
        "API integrations",
        "Unlimited revisions",
        "6 months support"
      ],
      popular: false,
      buttonText: "Contact Me"
    }
  ],

  testimonials: [
    {
      id: 1,
      name: "Priya Sharma",
      business: "Cafe Aroma Owner",
      text: "Saurav created a beautiful website for my cafe. Now customers can see our menu online and make reservations easily. The CMS feature is amazing – I can update menu items myself!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
    },
    {
      id: 2,
      name: "Rahul Verma",
      business: "FitZone Gym Manager",
      text: "Professional work and great communication. The website helped us increase membership sign-ups by 40%. Highly recommend!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
    },
    {
      id: 3,
      name: "Anjali Patel",
      business: "Boutique Owner",
      text: "Saurav understood exactly what I needed for my boutique website. The design is modern and my customers love shopping online now. Great value for money!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
    }
  ],

  contact: {
    whatsapp: "+91 7668401610",
    email: "sauravdhapola17@gmail.com",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#"
    }
  }
};
