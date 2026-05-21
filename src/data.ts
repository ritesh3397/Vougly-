import { Testimonial, PainPoint, Step, Feature, PricingPlan, FAQItem } from './types.ts';

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Aniket Sharma',
    role: 'SaaS Founder',
    company: 'DevFlow Systems',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&fit=crop&q=80',
    rating: 5,
    text: 'Vouchly ne hamare conversions 32% improve kar diye! Mere product launch par humne 15 minutes mein video testimonials collect kar liye. One link magic is real!',
    platform: 'vouchly',
    timeAgo: '2 hours ago',
    isFeatured: true,
  },
  {
    id: 't2',
    name: 'Pooja Mehta',
    role: 'Product Marketer',
    company: 'GrowRapid Agency',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&fit=crop&q=80',
    rating: 5,
    text: 'Ab reviews collect karne ke liye clients ko baar-baar spam nahi karna padta. Vouchly sends gentle reminders automatically. Website embed visual representation extremely premium lagta hai!',
    platform: 'twitter',
    timeAgo: '1 day ago',
    isFeatured: true,
  },
  {
    id: 't3',
    name: 'Vikram Grover',
    role: 'High-Ticket Coach',
    company: 'Solopreneur Elite',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&fit=crop&q=80',
    rating: 5,
    text: 'My business runs on trust. Video testimonials are the ultimate weapon. Vouchly ka built-in screen & camera recorder is flawless — direct browser se custom videos high quality mein save ho jaati hain.',
    platform: 'vouchly',
    timeAgo: '3 days ago',
    isFeatured: true,
  },
  {
    id: 't4',
    name: 'Sahil Kapoor',
    role: 'E-commerce Operator',
    company: 'D2C Threads',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&fit=crop&q=80',
    rating: 5,
    text: 'Manual screenshots are dead! Beautiful wall-of-love widget directly matches our brand branding guidelines. Seamless, responsive layout on iOS and Android.',
    platform: 'google',
    timeAgo: '5 days ago',
    isFeatured: false,
  },
  {
    id: 't5',
    name: 'Neha Singhal',
    role: 'Co-founder',
    company: 'HyperScale AI',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&fit=crop&q=80',
    rating: 5,
    text: 'AI Question Suggestion feature is genius. Customers often don\'t know what to write. The dynamic guidance helps them pen down spectacular metric-focused reviews instantly.',
    platform: 'linkedin',
    timeAgo: '1 week ago',
    isFeatured: true,
  },
  {
    id: 't6',
    name: 'Kabir Dev',
    role: 'Freelance UI/UX Developer',
    company: 'Studio Arc',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&fit=crop&q=80',
    rating: 5,
    text: 'Vouchly code integration takes 20 seconds. Literally copied the iframe embed tag, pasted it in custom Webflow dashboard, and clean interactive feedback popped up! Best investment this year.',
    platform: 'vouchly',
    timeAgo: '1 week ago',
    isFeatured: false,
  }
];

export const PAIN_POINTS: PainPoint[] = [
  {
    id: 'p1',
    problem: 'Customers Ignore Review Requests',
    description: 'Manual feedback forms are long and boring. Clients open them and immediately close them.',
    iconName: 'AlertTriangle',
    stat: '84% drop-off rate'
  },
  {
    id: 'p2',
    problem: 'Screenshots Look Unprofessional',
    description: 'Cropping and uploading WhatsApp/Telegram chats looks messy, static, and is easy to fake.',
    iconName: 'Sparkles',
    stat: 'Zero dynamic depth'
  },
  {
    id: 'p3',
    problem: 'Video Testimonials Banna Is Hard',
    description: 'Clients struggle downloading video files, recording with high-res, and sending heavy files back.',
    iconName: 'VideoOff',
    stat: 'Requires complex tools'
  },
  {
    id: 'p4',
    problem: 'Reviews Scattered Everywhere',
    description: 'Feedback are split between Gmail, Slack, Twitter comments, and Play store, impossible to track/embed.',
    iconName: 'FolderMinus',
    stat: 'No centralized system'
  },
  {
    id: 'p5',
    problem: 'Website Par Hardcoding Ki Headaches',
    description: 'Every time you get a new glowing review, you have to contact a developer or rewrite custom components code to display it.',
    iconName: 'Code',
    stat: 'Slow and costly'
  }
];

export const HOW_IT_WORKS_STEPS: Step[] = [
  {
    id: 1,
    title: 'Unique Review Link Banao',
    subtitle: 'Vouchly.co/your-brand',
    description: 'Customize a gorgeous custom review-collection landing page with your logo, brand guidelines, and target questions. No technical expertise required.',
    badge: 'Step 1: One-Click'
  },
  {
    id: 2,
    title: 'Customers Easily Review Bhejein',
    subtitle: 'Browser-driven submission',
    description: 'With a simplified flow, clients submit high-quality video or polished text reviews directly on smartphones or web in single taps, backed by smart AI guidance prompts.',
    badge: 'Step 2: Smooth Flow'
  },
  {
    id: 3,
    title: 'Website Pe Auto Show Karo',
    subtitle: 'One Script Embed',
    description: 'Copy a simple line of script code, paste on your custom dashboard, and reviews will show up on our modern, responsive Masonry, Wall of Love or Carousel view instantly.',
    badge: 'Step 3: Instant Profit'
  }
];

export const PRODUCT_FEATURES: Feature[] = [
  {
    id: 'f1',
    title: 'Text & Video Testimonials',
    description: 'Let users write detailed text review or record real video feedback directly from their browsers with a single simple click.',
    iconName: 'Video',
    badge: 'Core'
  },
  {
    id: 'f2',
    title: 'AI Question Builder',
    description: 'AI-generated custom instructions guide clients to write metric-focused, impactful testimonials instead of generic "highly recommend".',
    iconName: 'Brain',
    badge: 'AI Smart'
  },
  {
    id: 'f3',
    title: 'Wall of Love Widgets',
    description: 'Embed fully styled, ultra-responsive grid layouts or self-scrolling brick walls that complement your website visual accent style perfectly.',
    iconName: 'Heart',
    badge: 'Popular'
  },
  {
    id: 'f4',
    title: 'WhatsApp Automation',
    description: 'Automatically trigger personalized WhatsApp review-collection requests soon after your customers make a purchase or finish client support workflows.',
    iconName: 'MessageSquare',
    badge: 'Engagement'
  },
  {
    id: 'f5',
    title: 'Automated Email Follow-up',
    description: 'No more micro-managing. Send elegant, polite reminders at automated schedules so clients never forget to give feedback.',
    iconName: 'Mail'
  },
  {
    id: 'f6',
    title: 'One-Click Social Share',
    description: 'Instantly download, export, and share testimonials on Instagram, LinkedIn, and Twitter with custom luxury glass background cards.',
    iconName: 'Share2',
    badge: 'Viral'
  },
  {
    id: 'f7',
    title: 'Live Review Moderation',
    description: 'Approve or reject reviews from a centralized portal before they go live onto your landing pages, maintaining direct quality control.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'f8',
    title: 'CSV & API Export',
    description: 'Export all aggregated reviews into JSON or CSV spreadsheets. Integrate workflows using direct, scalable developer-friendly REST endpoints.',
    iconName: 'Database'
  },
  {
    id: 'f9',
    title: 'Custom Branded Domains',
    description: 'Host your rating forms, link pipelines, and video requests on your own site subdomains (e.g. review.yourcompany.com) for high-end conversion look.',
    iconName: 'Globe'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Free',
    price: 0,
    priceAnnually: 0,
    currency: '₹',
    period: 'mo',
    description: 'For hobbyists, freelancers, and early-stage pre-revenue testing creators.',
    features: [
      'Up to 10 Text Testimonials',
      '1 Video Testimonial collection',
      'Basic Wall of Love widget',
      'Vouchly branding link in widgets',
      'Standard email support'
    ],
    ctaText: 'Free Mein Start Karo',
    popular: false
  },
  {
    name: 'Starter',
    price: 399,
    priceAnnually: 319,
    currency: '₹',
    period: 'mo',
    description: 'Perfect for local brands, boutiques, agency founders, and digital creators looking to gather trust.',
    features: [
      'Unlimited Text Testimonials',
      'Up to 5 Video Testimonial collection',
      '3 beautiful glass custom widgets',
      'Remove Vouchly platform branding',
      'AI-powered feedback prompt generator',
      'Priority live email support'
    ],
    ctaText: 'Starter Plan Ready',
    popular: false
  },
  {
    name: 'Pro',
    price: 899,
    priceAnnually: 719,
    currency: '₹',
    period: 'mo',
    description: 'Full-fledged dashboard featuring WhatsApp automation and AI sentiment analytics. Crucial for fast growth.',
    features: [
      'Unlimited Text & Video Testimonials',
      'Unlimited Wall of Love, Widget embeds & Carousels',
      'WhatsApp Review reminders',
      'Full AI assistance, prompts, sentiments & templates',
      'Custom branding colors, domains & tags',
      'Dedicated Customer Success manager'
    ],
    ctaText: 'Get Pro Access Now',
    popular: true,
    badge: 'MOST POPULAR'
  },
  {
    name: 'Agency',
    price: 1999,
    priceAnnually: 1599,
    currency: '₹',
    period: 'mo',
    description: 'Built for agencies, marketing networks, high-ticket studios, and multi-business builders.',
    features: [
      'Manage up to 10 Client Dashboards',
      'Multi-team access workspace roles',
      'White-label review collection widgets',
      'Custom API webhooks, JSON schemas & CSV streams',
      'Priority 1-on-1 Zoom integration onboarding'
    ],
    ctaText: 'Scale Up Your Agency',
    popular: false
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: 'Kya Vouchly use karne ke liye coding knowledge ki zarurat hai?',
    answer: 'Nahi, bilkul nahi! Aapko sirf 1 static line of code copy-paste karna padega apni site par. Ye Webflow, Framer, Wix, WordPress, Custom React, Shopify ya kisi bhi platform par instant kam karta hai.'
  },
  {
    question: 'Kya video testimonials support karta hai?',
    answer: 'Haan! Vouchly specializes in high-quality web-based video review recordings. Aapka customer directly phone ya desktop screen se video record kar ke submit kar sakta hai — no software download required.'
  },
  {
    question: 'Free plan mein kya-kya milta hai?',
    answer: 'Free plan mein aap unlimited collect link bana sakte hain, up to 10 text reviews select kar sakte hain, plus 1 video review and 1 standard widget design launch kar sakte hain.'
  },
  {
    question: 'WhatsApp integration kaam kaise karta hai?',
    answer: 'Once you connect your WhatsApp, hum direct automated, professional notifications bhej sakte hain when a buyer has a positive support interaction or makes a purchase sequence, pushing them to record a real-time review with high conversion triggers.'
  },
  {
    question: 'Hum reviews other social sources se import kar sakte hain?',
    answer: 'Haan! Vouchly Pro provides a single panel to import real-time feedback from Twitter posts, LinkedIn, Play Store, Trustpilot, and G2 into your centralized glass cabinet dashboard in 1 click.'
  }
];
