import { Testimonial, PainPoint, Step, Feature, PricingPlan, FAQItem } from './types.ts';

export const INITIAL_TESTIMONIALS: Testimonial[] = [];

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
    title: 'Link Banao 🔗',
    subtitle: 'Step 1: One-Click Generator',
    description: 'Business apna testimonial collection link create karta hai. Customize it with your brand assets and targeted feedback queries.',
    badge: 'Step 1: Link Banao'
  },
  {
    id: 2,
    title: 'Customer Ko Bhejo 📩',
    subtitle: 'Step 2: Dual Distribution Channels',
    description: 'WhatsApp, email, ya social media se link share karo. Customers record high quality video or pen text easily without downloading apps.',
    badge: 'Step 2: Customer Ko Bhejo'
  },
  {
    id: 3,
    title: 'Reviews Auto-Publish ✅',
    subtitle: 'Step 3: Instant Live Sync',
    description: 'Reviews automatically website widgets mein show ho jaate hain. Zero coding required to update and design the layout.',
    badge: 'Step 3: Reviews Auto-Publish'
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
    description: 'For hobbyists and early-stage testing creators.',
    features: [
      '15 reviews limit',
      '1 collection form',
      'Basic wall of love widget',
      'Standard customer support'
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
    description: 'Perfect for local brands, boutiques, and digital builders.',
    features: [
      '100 reviews limit',
      '3 collection forms',
      'Remove Vouchly branding brandings',
      'Priority email response'
    ],
    ctaText: 'Starter Plan Join Karo',
    popular: false
  },
  {
    name: 'Pro',
    price: 899,
    priceAnnually: 719,
    currency: '₹',
    period: 'mo',
    description: 'Advanced dashboard with smart auto-followup engines.',
    features: [
      'Unlimited reviews collection',
      'AI-generated targeted questions',
      'CSV sheets database export',
      'Priority 1-on-1 customer support'
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
    description: 'Built for marketing networks, high-ticket studios & agency models.',
    features: [
      '10 client workspaces access',
      'White-label customized widgets',
      'Team access controls dashboard roles',
      'Advanced conversion sentiment analytics'
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
