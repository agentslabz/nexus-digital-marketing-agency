import { Service, CaseStudy, TeamMember, BlogPost, Testimonial, ClientProject } from '../types';

export const MOCK_SERVICES: Service[] = [
  {
    id: 'srv-1',
    title: 'SEO Optimization & Organic Growth',
    slug: 'seo-optimization',
    category: 'SEO',
    shortDescription: 'Dominating search engine results pages with data-backed technical SEO, keyword positioning, and link building.',
    fullDescription: 'Our end-to-end Search Engine Optimization service boosts organic search visibility, drives highly targeted qualified leads, and maximizes long-term compound organic revenue.',
    iconName: 'Search',
    badge: 'High ROI',
    deliverables: [
      'Comprehensive Technical SEO Audit',
      'On-Page Optimization & Schema Markup',
      'High-Authority Backlink Acquisition',
      'Keyword Research & Competitor Mapping',
      'Monthly Ranking & Organic Traffic Reports'
    ],
    tiers: [
      {
        name: 'Starter SEO',
        price: 1200,
        period: '/month',
        description: 'Ideal for local businesses & early-stage startups seeking search visibility.',
        features: [
          'Up to 15 Target Keywords',
          'Technical SEO & On-Page Fixes',
          '2 High-Authority Backlinks/mo',
          'Google Business Profile Optimization',
          'Monthly Executive Report'
        ]
      },
      {
        name: 'Pro Growth',
        price: 2800,
        period: '/month',
        popular: true,
        description: 'Designed for scaling e-commerce & SMBs aiming to dominate their niche.',
        features: [
          'Up to 45 Target Keywords',
          'Technical & Content Schema Optimization',
          '6 High-Authority Backlinks/mo',
          'Monthly Content Clusters (4 articles)',
          'Bi-Weekly Strategy Calls & Live Dashboard'
        ]
      },
      {
        name: 'Enterprise Scale',
        price: 5500,
        period: '/month',
        description: 'Custom organic growth engine for multi-location & global enterprise brands.',
        features: [
          'Unlimited Target Keywords',
          'Dedicated SEO Director & Technical Lead',
          '15+ Premium High-DR Backlinks/mo',
          'Custom Technical Audit & Speed Tuning',
          '24/7 Priority Support & Slack Channel'
        ]
      }
    ]
  },
  {
    id: 'srv-2',
    title: 'Pay-Per-Click (PPC) Advertising',
    slug: 'ppc-advertising',
    category: 'PPC',
    shortDescription: 'High-converting Google Ads, Meta Ads, and LinkedIn campaign management engineered for instant ROAS.',
    fullDescription: 'Maximize return on ad spend (ROAS) through algorithmic bid management, conversion rate optimized landing pages, and hyper-targeted audience funneling.',
    iconName: 'TrendingUp',
    badge: 'Immediate Traffic',
    deliverables: [
      'Google Search, Display & Shopping Ads',
      'Meta (Facebook & Instagram) Retargeting',
      'LinkedIn B2B Lead Gen Campaigns',
      'Conversion Landing Page A/B Testing',
      'Real-Time Attribution Analytics'
    ],
    tiers: [
      {
        name: 'Launch Pad',
        price: 1500,
        period: '/month + 10% ad spend',
        description: 'For businesses introducing new product lines or localized campaigns.',
        features: [
          'Up to $10,000 Monthly Ad Spend',
          'Google Search or Meta Ads Account Setup',
          'Custom Ad Copywriting & Banner Design',
          'Conversion Tracking Setup',
          'Weekly Performance Reports'
        ]
      },
      {
        name: 'Scale Performance',
        price: 3200,
        period: '/month + 8% ad spend',
        popular: true,
        description: 'Aggressive multi-channel PPC management for maximum qualified pipeline.',
        features: [
          'Up to $40,000 Monthly Ad Spend',
          'Google, Meta & LinkedIn Multi-Channel Ads',
          'Custom High-Converting Landing Page Design',
          'Dynamic Retargeting & Lookalike Audiences',
          'Weekly CRO A/B Experiments'
        ]
      },
      {
        name: 'Enterprise ROAS',
        price: 6000,
        period: '/month + 6% ad spend',
        description: 'High volume performance marketing for venture-backed and enterprise brands.',
        features: [
          '$40,000+ Monthly Ad Spend',
          'Full-Funnel Ad Strategy & Video Ads Creation',
          'Dedicated Performance Marketer & Creative Team',
          'Omnichannel Cross-Device Attribution',
          'Custom ROI Guarantee Terms'
        ]
      }
    ]
  },
  {
    id: 'srv-3',
    title: 'Social Media Growth & Marketing',
    slug: 'social-media-marketing',
    category: 'Social',
    shortDescription: 'Building vibrant online communities and viral brand awareness across Instagram, TikTok, LinkedIn, and X.',
    fullDescription: 'From high-end short-form video content creation to community engagement, we establish your brand as an authority across modern social platforms.',
    iconName: 'Share2',
    badge: 'Brand Builder',
    deliverables: [
      'Content Calendar Creation & Scheduling',
      'Short-Form Video (Reels/TikToks) Production',
      'Influencer Collaboration Outreach',
      'Community Management & Moderation',
      'Social Listening & Trend Analytics'
    ],
    tiers: [
      {
        name: 'Core Presence',
        price: 1000,
        period: '/month',
        description: 'Maintain a consistent, professional brand presence across 2 platforms.',
        features: [
          '2 Social Platforms (e.g. LinkedIn + Instagram)',
          '12 Custom Static Posts / Graphics',
          'Monthly Content Calendar Approval',
          'Basic Community Interaction',
          'Monthly Analytics Overview'
        ]
      },
      {
        name: 'Viral Acceleration',
        price: 2400,
        period: '/month',
        popular: true,
        description: 'High-impact social strategy featuring short-form videos and active community management.',
        features: [
          '3 Social Platforms',
          '20 High-Quality Posts + 8 Short Reels/TikToks',
          'Active Daily Community Moderation',
          'Micro-Influencer Outreach (5 deals/mo)',
          'Dedicated Social Media Manager'
        ]
      },
      {
        name: 'Domination Package',
        price: 4500,
        period: '/month',
        description: 'Full-scale media production suite for category-defining brand dominance.',
        features: [
          'All Major Platforms (LinkedIn, X, Insta, TikTok, YouTube)',
          '30+ Custom Assets + 16 On-Brand Reels/Shorts',
          'On-Location Shoot / Video Editing Team',
          'Strategic Influencer Campaign Management',
          '24/7 Community Crisis & Trend Response'
        ]
      }
    ]
  },
  {
    id: 'srv-4',
    title: 'Content Marketing & Brand Copywriting',
    slug: 'content-marketing',
    category: 'Content',
    shortDescription: 'Authoritative, search-optimized articles, ebooks, and sales copy that position your brand as the industry leader.',
    fullDescription: 'Turn readers into customer advocates through strategic storytelling, thought leadership articles, case studies, and automated lead magnet funnels.',
    iconName: 'FileText',
    deliverables: [
      'SEO Editorial Strategy & Topic Clusters',
      'Long-Form Thought Leadership Articles',
      'Interactive Ebooks & Whitepapers',
      'Copywriting for Landing Pages & Ads',
      'Content Performance Tracking'
    ],
    tiers: [
      {
        name: 'Essential Editorial',
        price: 950,
        period: '/month',
        description: 'Consistent SEO-optimized blog publication for steady domain authority.',
        features: [
          '4 x 1,200 Word SEO Blog Articles',
          'Keyword Research & Topic Ideation',
          'Custom Feature Graphics for Each Post',
          'WordPress / CMS Direct Publishing'
        ]
      },
      {
        name: 'Authority Builder',
        price: 2100,
        period: '/month',
        popular: true,
        description: 'Comprehensive content engine designed for lead magnet downloads and industry prestige.',
        features: [
          '8 x 1,500 Word In-Depth Articles',
          '1 Monthly Gated Ebook or Lead Magnet',
          'Content Atomization (10 Social Snippets per Post)',
          'In-House Senior Industry Copywriter'
        ]
      },
      {
        name: 'Omnichannel Publishing',
        price: 4000,
        period: '/month',
        description: 'High-output editorial machinery for heavy domain traffic and conversion funnels.',
        features: [
          '16 x High-Intent SEO Articles',
          '2 Executive Whitepapers / Case Studies',
          'Infographic & Custom Data Visualization',
          'Distribution Strategy & Syndicate Pitching'
        ]
      }
    ]
  },
  {
    id: 'srv-5',
    title: 'Email Marketing & Funnel Automation',
    slug: 'email-marketing',
    category: 'Email',
    shortDescription: 'High-converting email nurture sequences, automated newsletters, and retention funnels using Klaviyo & Mailchimp.',
    fullDescription: 'Nurture cold leads into repeat brand advocates with hyper-personalized behavioral email sequences, segmentation, and dynamic customer lifecycle triggers.',
    iconName: 'Mail',
    deliverables: [
      'Klaviyo / HubSpot / Mailchimp Architecture',
      'Automated Welcome & Abandoned Cart Sequences',
      'Weekly Interactive Newsletter Design',
      'A/B Subject Line & CTA Optimization',
      'Deliverability & List Hygiene Audits'
    ],
    tiers: [
      {
        name: 'Nurture Basic',
        price: 800,
        period: '/month',
        description: 'Essential automated flows and weekly newsletters for small ecommerce shops.',
        features: [
          'Setup of 3 Core Flow Sequences (Welcome, Cart, Post-Purchase)',
          '2 Custom Designed Broadcast Emails / mo',
          'List Segmentation Setup',
          'Monthly Deliverability Report'
        ]
      },
      {
        name: 'Lifecycle Growth',
        price: 1800,
        period: '/month',
        popular: true,
        description: 'Advanced behavioral segmentation driving 25%+ of total brand revenue from email.',
        features: [
          'Setup of 8 Advanced Behavioral Sequences',
          '6 Custom Designed Broadcast Campaigns / mo',
          'A/B Testing on Copy, Designs & Send Times',
          'SMS Marketing Flow Integration'
        ]
      },
      {
        name: 'Enterprise Revenue Engine',
        price: 3500,
        period: '/month',
        description: 'Full lifecycle automation and custom VIP retention programs.',
        features: [
          'Unlimited Custom Automated Workflows',
          '12 Custom Broadcasts with Copy & Design',
          'Dedicated Klaviyo Master Strategist',
          'Predictive Analytics & VIP VIP Program Setup'
        ]
      }
    ]
  },
  {
    id: 'srv-6',
    title: 'High-Performance Web Design & Dev',
    slug: 'web-design-development',
    category: 'WebDev',
    shortDescription: 'Blazing-fast, responsive, conversion-focused websites engineered for seamless mobile user experiences.',
    fullDescription: 'We craft bespoke web experiences that load under 1 second, tell your brand story with stunning motion aesthetics, and turn visitors into sales opportunities.',
    iconName: 'Code',
    badge: 'Conversion Rate Optimized',
    deliverables: [
      'Custom UX/UI Design in Figma',
      'Mobile-First Responsive React/Tailwind Build',
      'SEO-Optimized Code Architecture',
      'CMS Integration (Headless/WordPress/Shopify)',
      'Sub-Second Page Load Speed Optimization'
    ],
    tiers: [
      {
        name: 'Landing Page Sprint',
        price: 2500,
        period: 'one-time',
        description: 'Ultra-high converting landing page built specifically for paid ad campaigns.',
        features: [
          'Custom 1-Page UX/UI & Web Build',
          'Copywriting & High-Res Graphics',
          'Mobile & Tablet Responsiveness',
          'Form & CRM Integration',
          'Launch in 7 Business Days'
        ]
      },
      {
        name: 'Business Website',
        price: 5800,
        period: 'one-time',
        popular: true,
        description: 'Full corporate website featuring custom page designs, blog CMS, and lead portals.',
        features: [
          'Up to 10 Custom Designed Pages',
          'Blog / Case Study CMS Management',
          'Core Web Vitals 95+ Speed Score',
          'Interactive Calculators or Contact Portals',
          '30 Days Post-Launch Maintenance'
        ]
      },
      {
        name: 'E-Commerce / Enterprise App',
        price: 12500,
        period: 'one-time',
        description: 'Custom headless storefront or SaaS portal engineered for heavy transaction volume.',
        features: [
          'Bespoke Web Application Architecture',
          'Custom Checkout & Payment Gateway Integration',
          'Client Dashboard & Portal Functionality',
          'API Integrations (ERP, CRM, Analytics)',
          'Dedicated Tech Lead & Security Audit'
        ]
      }
    ]
  }
];

export const MOCK_CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs-1',
    title: 'Scaling FinTech SaaS ARR from $1.2M to $4.8M via SEO & PPC Synergy',
    clientName: 'PayFlow Global',
    industry: 'Financial Technology / SaaS',
    category: 'PPC & SEO',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80',
    summary: 'By deploying technical topic clusters and targeted Google Ads campaign funnels, PayFlow tripled qualified demo requests within 8 months.',
    challenge: 'PayFlow was struggling with high customer acquisition costs ($380 per trial) and low organic domain visibility against legacy banking software incumbents.',
    solution: 'We executed a technical SEO overhaul targeting high-intent long-tail keywords, built an automated lead magnet workflow, and redesigned Google Ads campaign structures around high-LTV account segments.',
    results: [
      { label: 'ARR Increase', value: '+$3.6M', growth: '300%' },
      { label: 'Customer Acquisition Cost (CAC)', value: '$112', growth: '-70.5%' },
      { label: 'Organic Inbound Leads', value: '2,450/mo', growth: '+410%' }
    ],
    tags: ['SaaS', 'Google Ads', 'Technical SEO', 'Lead Gen'],
    featured: true
  },
  {
    id: 'cs-2',
    title: 'Generating $2.8M E-Commerce Black Friday Revenue with Klaviyo & Meta Ads',
    clientName: 'LuxeLiving Home',
    industry: 'E-Commerce / Home Decor',
    category: 'Social & Email',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80',
    summary: 'A multi-channel email automation sequence paired with high-converting Instagram Reels dynamic retargeting generated 6.4x ROAS.',
    challenge: 'LuxeLiving suffered from low email open rates (12%) and relied heavily on non-profitable single purchase promotions.',
    solution: 'Constructed custom VIP customer tiers, dynamic cart recovery email flows with user-generated video content, and implemented Meta Advantage+ shopping campaigns.',
    results: [
      { label: 'Total Q4 Sales', value: '$2.8M', growth: '+185%' },
      { label: 'Meta Ad ROAS', value: '6.4x', growth: '+140%' },
      { label: 'Email Revenue Share', value: '34%', growth: '+220%' }
    ],
    tags: ['E-Commerce', 'Klaviyo', 'Meta Ads', 'Video Reels'],
    featured: true
  },
  {
    id: 'cs-3',
    title: 'B2B Healthcare Lead Engine: 420% Increase in Inbound Clinic Enquiries',
    clientName: 'OmniHealth Diagnostics',
    industry: 'Healthcare & B2B',
    category: 'SEO & Content',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80',
    summary: 'Dominating medical search terms and creating verified clinical whitepapers turned OmniHealth into the top diagnostic partner nationwide.',
    challenge: 'Strict healthcare regulatory advertising policies made paid ad campaigns costly and inefficient.',
    solution: 'Created schema-compliant medical content hubs written by industry specialists, implemented local clinic SEO schema, and launched an interactive diagnostic ROI calculator.',
    results: [
      { label: 'Monthly Clinic Inquiries', value: '1,840', growth: '+420%' },
      { label: 'Google Search #1 Ranks', value: '118 keywords', growth: '+350%' },
      { label: 'Inbound Deal Pipeline', value: '$8.2M', growth: '+290%' }
    ],
    tags: ['Healthcare', 'Local SEO', 'B2B Content', 'Schema'],
    featured: true
  },
  {
    id: 'cs-4',
    title: 'Rebranding & Web Application Launch for NextGen AI Analytics',
    clientName: 'NextGen Analytics',
    industry: 'Artificial Intelligence',
    category: 'WebDev & Branding',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
    summary: 'Complete web application redesign, sub-second load performance, and conversion-focused landing page architecture.',
    challenge: 'High bounce rate (72%) on old slow website hindered venture capital funding and enterprise sales conversions.',
    solution: 'Designed an interactive product demo experience in React and Tailwind CSS with sub-500ms response times and clear CTA conversion funnels.',
    results: [
      { label: 'Conversion Rate', value: '8.4%', growth: '+260%' },
      { label: 'Average Session Time', value: '4m 12s', growth: '+180%' },
      { label: 'Series A Funding Raised', value: '$12M', growth: 'Successful' }
    ],
    tags: ['React', 'UX Redesign', 'SaaS', 'Web Performance']
  }
];

export const MOCK_TEAM: TeamMember[] = [
  {
    id: 'tm-1',
    name: 'Alexandra Vance',
    role: 'Founder & CEO',
    bio: 'Former VP of Growth at leading Silicon Valley tech agencies with 14+ years scaling digital growth engines.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    specialization: 'Omnichannel Strategy & Venture Growth',
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'alexandra@nexusdigital.com'
    }
  },
  {
    id: 'tm-2',
    name: 'Marcus Sterling',
    role: 'Head of PPC & Paid Media',
    bio: 'Managed over $45M in lifetime Google & Meta ad spend with an average client ROAS of 4.8x.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
    specialization: 'Algorithmic Bidding & Funnel Optimization',
    socials: {
      linkedin: 'https://linkedin.com',
      email: 'marcus@nexusdigital.com'
    }
  },
  {
    id: 'tm-3',
    name: 'Elena Rostova',
    role: 'Director of SEO & Organic Content',
    bio: 'Pioneered schema-first semantic search architectures that generated over 500M organic pageviews.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    specialization: 'Technical SEO & Generative Search Optimization',
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    id: 'tm-4',
    name: 'David Chen',
    role: 'Lead UX Engineer & Web Architect',
    bio: 'Full-stack craftsman specializing in ultra-fast React applications and high-conversion landing page UX.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    specialization: 'Conversion Rate Engineering & Modern Web',
    socials: {
      linkedin: 'https://linkedin.com',
      email: 'david@nexusdigital.com'
    }
  }
];

export const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    title: 'The 2026 AI Search Era: How to Rank in Google Gemini & AI Overviews',
    slug: 'ai-search-rankings-2026',
    excerpt: 'Search engine optimization has shifted from simple keyword matching to entity-based generative search answers. Here is the exact blueprint.',
    content: `
      <h2>The Shift to Generative & Entity Search</h2>
      <p>Search engines no longer just match keywords—they synthesize answers using multi-modal AI models like Google Gemini. To stay visible, brands must optimize for Generative Engine Optimization (GEO).</p>

      <h3>1. Establish High Authority Schema Graphs</h3>
      <p>Ensure your organization data, authors, products, and services are clearly declared using JSON-LD structured schema. This helps LLMs connect factual nodes about your business.</p>

      <h3>2. Publish Original Direct Answer Content</h3>
      <p>Format key answers concisely in bullet points, clear table comparison layouts, and direct summaries at the top of your articles. Generative models directly extract structured answers from concise paragraphs.</p>

      <h3>3. Build Semantic Brand Mentions</h3>
      <p>Citations on authoritative industry blogs, Wikipedia entries, and press releases teach AI models that your brand is a trusted entity in your domain.</p>
    `,
    author: {
      name: 'Elena Rostova',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
      role: 'Director of SEO'
    },
    category: 'SEO Tips',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
    publishDate: '2026-07-28',
    readTime: '6 min read',
    views: 1420,
    tags: ['SEO', 'AI Search', 'Gemini', 'Growth'],
    comments: [
      {
        id: 'cm-1',
        author: 'Jordan Peterson',
        date: '2026-07-29',
        content: 'Fascinating breakdown! We started adding Schema JSON-LD graphs last month and saw immediate inclusions in generative summaries.'
      }
    ]
  },
  {
    id: 'post-2',
    title: '5 Creative Meta Ad Frameworks That Drive 5x ROAS in 2026',
    slug: 'meta-ad-frameworks-5x-roas',
    excerpt: 'Stop relying on static boring product shots. Learn how problem-solution short hooks and customer reaction videos scale ad performance.',
    content: `
      <h2>Why Creative Is the New Targeting</h2>
      <p>With algorithmic automated bidding like Meta Advantage+, the algorithm relies on your video creative to identify your ideal buyers. Better creative = cheaper CPMs and higher conversions.</p>

      <h3>Framework 1: The "Us vs Them" Side-by-Side</h3>
      <p>Visually demonstrate why legacy solutions fail compared to your product within the first 3 seconds of video playback.</p>

      <h3>Framework 2: Raw Native UGC Reactions</h3>
      <p>Real customer unboxing videos filmed on smartphones outperform polished studio commercials by 300% on TikTok and Instagram Reels.</p>
    `,
    author: {
      name: 'Marcus Sterling',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80',
      role: 'Head of PPC'
    },
    category: 'PPC',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80',
    publishDate: '2026-07-20',
    readTime: '5 min read',
    views: 980,
    tags: ['Meta Ads', 'PPC', 'Creative', 'ROAS'],
    comments: []
  },
  {
    id: 'post-3',
    title: 'How to Build an E-Commerce Email Retention Funnel That Generates 30%+ Total Revenue',
    slug: 'ecommerce-email-retention-blueprint',
    excerpt: 'Acquiring new customers is 5x more expensive than retaining existing ones. Discover the exact 8 Klaviyo email flows every brand needs.',
    content: `
      <h2>The 8 Essential Email Automation Flows</h2>
      <p>Email marketing should represent at least 25% to 35% of your total online revenue. Without automated behavioral triggers, you leave money on the table every day.</p>
    `,
    author: {
      name: 'Alexandra Vance',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      role: 'Founder & CEO'
    },
    category: 'Content Strategy',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80',
    publishDate: '2026-07-12',
    readTime: '8 min read',
    views: 2150,
    tags: ['Email', 'Klaviyo', 'Ecommerce', 'Retention'],
    comments: []
  }
];

export const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    clientName: 'Sarah Jenkins',
    role: 'CMO',
    company: 'PayFlow Global',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    message: 'Nexus Digital transformed our growth strategy. In under 9 months, they reduced our CAC by 70% while quadrupling our qualified demo pipeline!',
    rating: 5,
    resultsAchieved: '300% ARR Growth'
  },
  {
    id: 't-2',
    clientName: 'Robert Sterling',
    role: 'Founder & CEO',
    company: 'LuxeLiving Home',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    message: 'Their PPC and Klaviyo team achieved a 6.4x ROAS during our busiest quarter. They operate like a true extension of our executive leadership.',
    rating: 5,
    resultsAchieved: '$2.8M Holiday Revenue'
  },
  {
    id: 't-3',
    clientName: 'Dr. Aris Thorne',
    role: 'Managing Director',
    company: 'OmniHealth Diagnostics',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    message: 'Finding an agency that truly understands specialized B2B healthcare compliance and technical SEO was rare until we found Nexus.',
    rating: 5,
    resultsAchieved: '+420% Inbound Clinic Leads'
  }
];

export const MOCK_CLIENT_PROJECTS: ClientProject[] = [
  {
    id: 'proj-101',
    clientId: 'cli-01',
    projectName: 'Q3 Global Organic SEO & PPC Scale',
    serviceType: 'SEO Optimization & PPC',
    status: 'active',
    startDate: '2026-06-01',
    endDate: '2026-11-30',
    progress: 68,
    budgetAllocated: 25000,
    spent: 17000,
    description: 'Targeting top 3 rankings for enterprise SaaS terms & managing Google Search retargeting funnels.',
    deliverablesCompleted: 14,
    totalDeliverables: 20,
    metrics: [
      { date: 'Jun', impressions: 120000, clicks: 4200, conversions: 180, roi: 3.2 },
      { date: 'Jul', impressions: 185000, clicks: 6800, conversions: 290, roi: 4.1 },
      { date: 'Aug', impressions: 240000, clicks: 9400, conversions: 410, roi: 4.8 }
    ]
  },
  {
    id: 'proj-102',
    clientId: 'cli-01',
    projectName: 'High-Converting Web App UI Refresh',
    serviceType: 'Web Design & Dev',
    status: 'completed',
    startDate: '2026-03-01',
    endDate: '2026-05-15',
    progress: 100,
    budgetAllocated: 12500,
    spent: 12500,
    description: 'Complete front-end redesign with sub-second page speed and interactive ROI calculator integration.',
    deliverablesCompleted: 10,
    totalDeliverables: 10,
    metrics: [
      { date: 'Apr', impressions: 45000, clicks: 2100, conversions: 95, roi: 2.8 },
      { date: 'May', impressions: 98000, clicks: 4900, conversions: 240, roi: 4.2 }
    ]
  }
];
