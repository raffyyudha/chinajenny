import { LucideIcon } from 'lucide-react';

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role?: string;
}

export interface Feature {
  title: string;
  description: string;
  icon?: LucideIcon;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PainPoint {
  title: string;
  points: string[];
}