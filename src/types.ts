export interface User {
  id: string;
  username: string;
  email: string;
  phone?: string;
  role: 'admin' | 'client' | 'user';
  companyName?: string;
  avatar?: string;
  createdAt: string;
}

export interface ServiceTier {
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  category: 'SEO' | 'Social' | 'PPC' | 'Content' | 'Email' | 'WebDev';
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  badge?: string;
  deliverables: string[];
  tiers: ServiceTier[];
}

export interface CaseStudy {
  id: string;
  title: string;
  clientName: string;
  industry: string;
  category: string;
  image: string;
  summary: string;
  challenge: string;
  solution: string;
  results: {
    label: string;
    value: string;
    growth: string;
  }[];
  tags: string[];
  featured?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  specialization: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export interface BlogComment {
  id: string;
  author: string;
  date: string;
  content: string;
  avatar?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  category: 'SEO Tips' | 'Social Media' | 'PPC' | 'Content Strategy' | 'Growth';
  image: string;
  publishDate: string;
  readTime: string;
  views: number;
  comments: BlogComment[];
  tags: string[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  company: string;
  avatar: string;
  message: string;
  rating: number;
  resultsAchieved: string;
  videoUrl?: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  budget?: string;
  message: string;
  createdAt: string;
  status: 'new' | 'contacted' | 'resolved';
}

export interface ProjectMetric {
  date: string;
  impressions: number;
  clicks: number;
  conversions: number;
  roi: number;
}

export interface ClientProject {
  id: string;
  clientId: string;
  projectName: string;
  serviceType: string;
  status: 'active' | 'completed' | 'pending';
  startDate: string;
  endDate: string;
  progress: number;
  budgetAllocated: number;
  spent: number;
  description: string;
  deliverablesCompleted: number;
  totalDeliverables: number;
  metrics: ProjectMetric[];
}

export interface SupportTicket {
  id: string;
  clientId: string;
  subject: string;
  category: string;
  priority: 'low' | 'medium' | 'high';
  status: 'open' | 'in_progress' | 'closed';
  createdAt: string;
  messages: {
    sender: 'client' | 'support';
    text: string;
    timestamp: string;
  }[];
}

export interface ConsultationBooking {
  id: string;
  name: string;
  email: string;
  company: string;
  serviceInterest: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
  status: 'confirmed' | 'pending';
}

export interface CalculatorParameters {
  seoKeywords: number;
  adSpend: number;
  contentArticles: number;
  hasCustomWebDev: boolean;
  emailCampaigns: number;
}
