# 🚀 Nexus Digital Marketing Agency

A modern, full-featured website for a digital marketing agency — built with React, TypeScript, and Vite. Includes client-facing pages, an authenticated dashboard, and interactive lead-generation tools.

## ✨ Features

- **Multi-page site** — Home, About, Services, Pricing, Portfolio, Blog, and Contact
- **Client Dashboard** — authenticated area for logged-in users
- **Interactive Pricing Calculator** — lets visitors estimate project costs
- **Consultation Booking Modal** — quick lead-capture flow
- **Case Study Showcase** — modal-based portfolio deep dives
- **Live Chat Widget** — real-time visitor engagement
- **WhatsApp Integration** — direct-to-WhatsApp contact button
- **Dark/Light Theme Support** — via Theme Context
- **Toast Notifications** — for user feedback across the app
- **Responsive Design** — optimized for mobile, tablet, and desktop

## 🛠️ Tech Stack

- **Frontend:** React + TypeScript
- **Build Tool:** Vite
- **Backend:** Node.js (server.ts)
- **Styling:** [add: Tailwind CSS / CSS Modules / etc.]

## 📦 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Installation

\`\`\`bash
# Clone the repository
git clone https://github.com/agentslabz/nexus-digital-marketing-agency.git

# Navigate into the project
cd nexus-digital-marketing-agency

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Then fill in your actual keys in .env

# Start the development server
npm run dev
\`\`\`

The app should now be running at `http://localhost:5173` (or the port shown in your terminal).

## 📁 Project Structure

\`\`\`
nexus-digital-marketing-agency/
├── src/
│   ├── components/     # Reusable UI components (Navbar, Footer, Modals, etc.)
│   ├── context/        # React Context providers (Auth, Theme, Toast)
│   ├── data/           # Mock/static data
│   ├── pages/          # Route-level pages (Home, About, Services, etc.)
│   ├── types.ts        # Shared TypeScript types
│   ├── App.tsx
│   └── main.tsx
├── server.ts            # Backend server
├── vite.config.ts
└── package.json
\`\`\`

## 🔑 Environment Variables

Copy `.env.example` to `.env` and fill in the required values before running the project.

## 🌐 Live Demo

[Add your deployed URL here, if hosted]

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Pranay Surti**
- GitHub: [@agentslabz](https://github.com/agentslabz)
- LinkedIn: [in/pranay-surti](https://linkedin.com/in/pranay-surti)
- Website: [www.agentslabz.com](https://www.agentslabz.com)