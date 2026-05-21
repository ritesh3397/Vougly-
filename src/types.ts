export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  text: string;
  videoUrl?: string;
  isFeatured?: boolean;
  platform?: 'vouchly' | 'twitter' | 'linkedin' | 'google';
  timeAgo?: string;
}

export interface PainPoint {
  id: string;
  problem: string;
  description: string;
  iconName: string;
  stat?: string;
}

export interface Step {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  badge?: string;
  iconName: string;
}

export interface PricingPlan {
  name: string;
  price: number;
  priceAnnually?: number;
  currency: string;
  period: string;
  description: string;
  features: string[];
  ctaText: string;
  popular?: boolean;
  badge?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
