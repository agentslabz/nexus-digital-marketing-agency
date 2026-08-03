import express, { Request, Response } from 'express';
import path from 'path';
import crypto from 'crypto';
import { createServer as createViteServer } from 'vite';
import {
  MOCK_SERVICES,
  MOCK_CASE_STUDIES,
  MOCK_TEAM,
  MOCK_BLOG_POSTS,
  MOCK_TESTIMONIALS,
  MOCK_CLIENT_PROJECTS
} from './src/data/mockData';
import { User, ContactSubmission, SupportTicket, ConsultationBooking } from './src/types';

const app = express();
const PORT = 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'nexus_digital_secret_key_2026';

app.use(express.json());

// In-Memory Database collections
const db = {
  users: [
    {
      id: 'cli-01',
      username: 'democlient',
      email: 'client@nexusdigital.com',
      passwordHash: hashPassword('password123'),
      phone: '+1 (555) 234-5678',
      role: 'client' as const,
      companyName: 'PayFlow Global',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      createdAt: '2026-01-15T08:00:00.000Z'
    },
    {
      id: 'adm-01',
      username: 'demoadmin',
      email: 'admin@nexusdigital.com',
      passwordHash: hashPassword('admin123'),
      phone: '+1 (555) 987-6543',
      role: 'admin' as const,
      companyName: 'Nexus Digital Agency',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      createdAt: '2026-01-01T08:00:00.000Z'
    }
  ],
  services: [...MOCK_SERVICES],
  caseStudies: [...MOCK_CASE_STUDIES],
  team: [...MOCK_TEAM],
  blogPosts: [...MOCK_BLOG_POSTS],
  testimonials: [...MOCK_TESTIMONIALS],
  contactSubmissions: [] as ContactSubmission[],
  projects: [...MOCK_CLIENT_PROJECTS],
  tickets: [
    {
      id: 'tkt-201',
      clientId: 'cli-01',
      subject: 'Update on Q3 SEO Backlink Report',
      category: 'SEO Strategy',
      priority: 'medium' as const,
      status: 'in_progress' as const,
      createdAt: '2026-07-25T14:30:00.000Z',
      messages: [
        {
          sender: 'client' as const,
          text: 'Hi team, could you provide a breakdown of the new DR70+ backlinks acquired this month?',
          timestamp: '2026-07-25T14:30:00.000Z'
        },
        {
          sender: 'support' as const,
          text: 'Hello PayFlow team! We have secured 6 premium contextual links in TechCrunch and Forbes. The full PDF report has been uploaded to your downloads tab.',
          timestamp: '2026-07-25T16:15:00.000Z'
        }
      ]
    }
  ] as SupportTicket[],
  consultations: [] as ConsultationBooking[]
};

// Helper: Password Hash & JWT Sign
function hashPassword(password: string): string {
  return crypto.pbkdf2Sync(password, 'nexus_salt', 10000, 64, 'sha512').toString('hex');
}

function generateJWT(user: { id: string; email: string; role: string; username: string }) {
  const header = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64url');
  const payload = Buffer.from(
    JSON.stringify({
      id: user.id,
      email: user.email,
      role: user.role,
      username: user.username,
      exp: Math.floor(Date.now() / 1000) + 86400 * 7 // 7 days
    })
  ).toString('base64url');

  const signature = crypto
    .createHmac('sha256', JWT_SECRET)
    .update(`${header}.${payload}`)
    .digest('base64url');

  return `${header}.${payload}.${signature}`;
}

function verifyJWT(token: string) {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return null;
    const [header, payload, signature] = parts;

    const expectedSignature = crypto
      .createHmac('sha256', JWT_SECRET)
      .update(`${header}.${payload}`)
      .digest('base64url');

    if (signature !== expectedSignature) return null;

    const decodedPayload = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
    if (decodedPayload.exp && decodedPayload.exp < Math.floor(Date.now() / 1000)) {
      return null;
    }
    return decodedPayload;
  } catch (err) {
    return null;
  }
}

// Middleware: Authenticate Request
function authenticateToken(req: any, res: Response, next: Function) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Authentication token required' });
  }

  const decoded = verifyJWT(token);
  if (!decoded) {
    return res.status(403).json({ error: 'Invalid or expired token' });
  }

  req.user = decoded;
  next();
}

// ------------------------------------------------------------------
// API ROUTES
// ------------------------------------------------------------------

// Health Check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', agency: 'Nexus Digital Marketing', timestamp: new Date().toISOString() });
});

// AUTH: Register
app.post('/api/auth/register', (req: Request, res: Response) => {
  const { username, email, password, phone, companyName } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: 'Username, email, and password are required' });
  }

  const existingUser = db.users.find((u) => u.email.toLowerCase() === email.toLowerCase());
  if (existingUser) {
    return res.status(400).json({ error: 'An account with this email already exists' });
  }

  const newUser = {
    id: `usr-${Date.now()}`,
    username,
    email,
    passwordHash: hashPassword(password),
    phone: phone || '',
    role: 'client' as const,
    companyName: companyName || 'My Company',
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`,
    createdAt: new Date().toISOString()
  };

  db.users.push(newUser);

  const token = generateJWT(newUser);

  const { passwordHash, ...userPayload } = newUser;
  res.status(201).json({
    message: 'Account registered successfully',
    token,
    user: userPayload
  });
});

// AUTH: Login
app.post('/api/auth/login', (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  const user = db.users.find((u) => u.email.toLowerCase() === email.toLowerCase());
  if (!user) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  if (user.passwordHash !== hashPassword(password)) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  const token = generateJWT(user);
  const { passwordHash, ...userPayload } = user;

  res.json({
    message: 'Login successful',
    token,
    user: userPayload
  });
});

// AUTH: Get Profile
app.get('/api/auth/profile', authenticateToken, (req: any, res: Response) => {
  const user = db.users.find((u) => u.id === req.user.id);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  const { passwordHash, ...userPayload } = user;
  res.json({ user: userPayload });
});

// SERVICES
app.get('/api/services', (req: Request, res: Response) => {
  res.json({ services: db.services });
});

app.get('/api/services/:id', (req: Request, res: Response) => {
  const service = db.services.find((s) => s.id === req.params.id || s.slug === req.params.id);
  if (!service) return res.status(404).json({ error: 'Service not found' });
  res.json({ service });
});

// CASE STUDIES
app.get('/api/casestudies', (req: Request, res: Response) => {
  const { category, search } = req.query;
  let results = db.caseStudies;

  if (category && category !== 'All') {
    results = results.filter((cs) => cs.category.toLowerCase().includes(String(category).toLowerCase()) || cs.tags.some(t => t.toLowerCase() === String(category).toLowerCase()));
  }

  if (search) {
    const q = String(search).toLowerCase();
    results = results.filter((cs) => cs.title.toLowerCase().includes(q) || cs.summary.toLowerCase().includes(q) || cs.industry.toLowerCase().includes(q));
  }

  res.json({ caseStudies: results });
});

app.get('/api/casestudies/:id', (req: Request, res: Response) => {
  const caseStudy = db.caseStudies.find((c) => c.id === req.params.id);
  if (!caseStudy) return res.status(404).json({ error: 'Case study not found' });
  res.json({ caseStudy });
});

// TEAM
app.get('/api/team', (req: Request, res: Response) => {
  res.json({ team: db.team });
});

// BLOG
app.get('/api/blog', (req: Request, res: Response) => {
  const { category, search } = req.query;
  let posts = db.blogPosts;

  if (category && category !== 'All') {
    posts = posts.filter((p) => p.category.toLowerCase() === String(category).toLowerCase());
  }

  if (search) {
    const q = String(search).toLowerCase();
    posts = posts.filter((p) => p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q));
  }

  res.json({ blogPosts: posts });
});

app.get('/api/blog/:slug', (req: Request, res: Response) => {
  const post = db.blogPosts.find((p) => p.slug === req.params.slug || p.id === req.params.slug);
  if (!post) return res.status(404).json({ error: 'Blog post not found' });
  post.views += 1;
  res.json({ blogPost: post });
});

app.post('/api/blog/:id/comments', (req: Request, res: Response) => {
  const post = db.blogPosts.find((p) => p.id === req.params.id);
  if (!post) return res.status(404).json({ error: 'Blog post not found' });

  const { author, content } = req.body;
  if (!author || !content) {
    return res.status(400).json({ error: 'Author and content are required' });
  }

  const newComment = {
    id: `cm-${Date.now()}`,
    author,
    date: new Date().toISOString().split('T')[0],
    content,
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${author}`
  };

  post.comments.push(newComment);
  res.status(201).json({ message: 'Comment added', comment: newComment });
});

// TESTIMONIALS
app.get('/api/testimonials', (req: Request, res: Response) => {
  res.json({ testimonials: db.testimonials });
});

app.post('/api/testimonials', (req: Request, res: Response) => {
  const { clientName, company, role, message, rating, resultsAchieved } = req.body;
  if (!clientName || !message) {
    return res.status(400).json({ error: 'Client name and message are required' });
  }

  const newTestimonial = {
    id: `t-${Date.now()}`,
    clientName,
    company: company || 'Valued Client',
    role: role || 'Marketing Director',
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${clientName}`,
    message,
    rating: Number(rating) || 5,
    resultsAchieved: resultsAchieved || 'High Growth Achieved'
  };

  db.testimonials.unshift(newTestimonial);
  res.status(201).json({ message: 'Testimonial submitted successfully', testimonial: newTestimonial });
});

// CONTACT FORM SUBMISSION
app.post('/api/contact', (req: Request, res: Response) => {
  const { name, email, phone, serviceType, budget, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }

  const submission: ContactSubmission = {
    id: `cnt-${Date.now()}`,
    name,
    email,
    phone: phone || '',
    serviceType: serviceType || 'General Inquiry',
    budget: budget || 'Not specified',
    message,
    createdAt: new Date().toISOString(),
    status: 'new'
  };

  db.contactSubmissions.unshift(submission);

  res.status(201).json({
    message: 'Thank you! Your inquiry has been received. A senior strategy manager will contact you within 2 hours.',
    submissionId: submission.id
  });
});

app.get('/api/contact', authenticateToken, (req: any, res: Response) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Admin permissions required' });
  }
  res.json({ submissions: db.contactSubmissions });
});

// CONSULTATION BOOKING
app.post('/api/consultations', (req: Request, res: Response) => {
  const { name, email, company, serviceInterest, preferredDate, preferredTime, notes } = req.body;

  if (!name || !email || !preferredDate || !preferredTime) {
    return res.status(400).json({ error: 'Name, email, date, and time are required' });
  }

  const booking: ConsultationBooking = {
    id: `cns-${Date.now()}`,
    name,
    email,
    company: company || 'N/A',
    serviceInterest: serviceInterest || 'General Growth Strategy',
    preferredDate,
    preferredTime,
    notes: notes || '',
    status: 'confirmed'
  };

  db.consultations.unshift(booking);

  res.status(201).json({
    message: `Consultation confirmed for ${preferredDate} at ${preferredTime}. Calendar invitation sent to ${email}.`,
    booking
  });
});

// CLIENT PROJECTS & DASHBOARD
app.get('/api/projects', authenticateToken, (req: any, res: Response) => {
  const userProjects = db.projects.filter((p) => p.clientId === req.user.id || req.user.role === 'admin');
  res.json({ projects: userProjects });
});

// SUPPORT TICKETS
app.get('/api/tickets', authenticateToken, (req: any, res: Response) => {
  const userTickets = db.tickets.filter((t) => t.clientId === req.user.id || req.user.role === 'admin');
  res.json({ tickets: userTickets });
});

app.post('/api/tickets', authenticateToken, (req: any, res: Response) => {
  const { subject, category, priority, message } = req.body;
  if (!subject || !message) {
    return res.status(400).json({ error: 'Subject and message are required' });
  }

  const newTicket: SupportTicket = {
    id: `tkt-${Date.now()}`,
    clientId: req.user.id,
    subject,
    category: category || 'General Support',
    priority: priority || 'medium',
    status: 'open',
    createdAt: new Date().toISOString(),
    messages: [
      {
        sender: 'client',
        text: message,
        timestamp: new Date().toISOString()
      }
    ]
  };

  db.tickets.unshift(newTicket);
  res.status(201).json({ message: 'Support ticket opened', ticket: newTicket });
});

app.post('/api/tickets/:id/reply', authenticateToken, (req: any, res: Response) => {
  const ticket = db.tickets.find((t) => t.id === req.params.id);
  if (!ticket) return res.status(404).json({ error: 'Ticket not found' });

  const { text } = req.body;
  if (!text) return res.status(400).json({ error: 'Reply text required' });

  ticket.messages.push({
    sender: req.user.role === 'admin' ? 'support' : 'client',
    text,
    timestamp: new Date().toISOString()
  });

  res.json({ message: 'Reply submitted', ticket });
});

// PRICING CALCULATOR ESTIMATOR API
app.post('/api/calculator/estimate', (req: Request, res: Response) => {
  const { seoKeywords = 15, adSpend = 10000, contentArticles = 4, hasCustomWebDev = false, emailCampaigns = 2 } = req.body;

  let basePrice = 800;
  basePrice += (Number(seoKeywords) || 0) * 45;
  basePrice += (Number(adSpend) || 0) * 0.08;
  basePrice += (Number(contentArticles) || 0) * 220;
  basePrice += (Number(emailCampaigns) || 0) * 300;
  if (hasCustomWebDev) basePrice += 2500;

  const estimatedMonthly = Math.round(basePrice);
  const estimatedROAS = adSpend > 0 ? (3.8 + (adSpend > 20000 ? 1.2 : 0.6)).toFixed(1) : '3.5';
  const estimatedLeads = Math.round((estimatedMonthly * 0.45) / 32);

  res.json({
    estimatedMonthlyInvestment: estimatedMonthly,
    estimatedROAS: `${estimatedROAS}x`,
    projectedMonthlyLeads: estimatedLeads,
    recommendedTier: estimatedMonthly < 2000 ? 'Starter Growth' : estimatedMonthly < 4500 ? 'Pro Scale' : 'Enterprise Engine'
  });
});

// VITE SERVER OR PRODUCTION STATIC SERVING
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Nexus Digital Marketing server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
