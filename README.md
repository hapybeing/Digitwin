Sentient Digital Twin
A dynamic, AI-powered portfolio that adapts to visitors using spatial navigation, liquid interactions, and ecosystem-aware design.
🚀 Quick Start
Prerequisites
GitHub account (for version control)
Supabase account (free tier works great)
Vercel account (for deployment)
Setup Steps
1. Supabase Setup
Create a Supabase project at supabase.com
Create a table called projects with these columns:
id (UUID, primary key)
title (text)
description (text)
category (text) — values: "web", "design", "photography", "code"
image_url (text, nullable)
project_url (text, nullable)
featured (boolean, default: false)
created_at (timestamp, default: now())
Copy your Project URL and Anon Key from Settings → API
2. Add Sample Projects to Supabase
Insert these rows into your projects table:
Title: ARIES
Description: A high-performance, procedurally generated web game featuring physics-based movement and combat.
Category: web
Project URL: https://github.com/hapybeing/Aries
Featured: true

Title: Digital Alchemy
Description: A personal portfolio featuring advanced CSS animations and a "sentient" digital aesthetic.
Category: web
Project URL: https://github.com/hapybeing/Digitwin
Featured: true

Title: Asther
Description: A specialized productivity application designed to streamline workflows and task management.
Category: code
Project URL: https://github.com/hapybeing/Asther
Featured: false

Title: Photography
Description: A curated collection of cinematic photography focused on moody atmospheres and architecture.
Category: photography
Project URL: https://www.instagram.com/yaytwenty26/
Featured: true
3. GitHub Setup
Go to github.com/new
Name it sentient-digital-twin
Make it Public
Initialize with README
4. Copy All Files to GitHub
In your GitHub repo's web editor (the + button → Create new file):
Copy all these files in order:
📁 sentient-digital-twin/
├── 📄 .env.local
├── 📄 .gitignore
├── 📄 next.config.js
├── 📄 package.json
├── 📄 tailwind.config.js
├── 📄 tsconfig.json
├── 📁 lib/
│   └── 📄 supabase.js
├── 📁 pages/
│   ├── 📄 _app.js
│   ├── 📄 _document.js
│   └── 📄 index.js
├── 📁 components/
│   ├── 📄 Navbar.js
│   ├── 📄 HeroSection.js
│   ├── 📄 ProjectGallery.js
│   ├── 📄 MagneticButton.js
│   └── 📄 EcoToggle.js
└── 📁 styles/
    └── 📄 globals.css
IMPORTANT: In .env.local, add your Supabase credentials:
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
5. Deploy to Vercel
Go to vercel.com
Click "New Project"
Import your GitHub repo
Add environment variables from your .env.local
Click Deploy
That's it! Your site is live. 🎉
📁 File Structure Explained
pages/ - Next.js pages (routes)
_app.js - App wrapper, handles eco mode state
_document.js - HTML structure, fonts, favicon
index.js - Homepage combining all sections
components/ - Reusable React components
Navbar.js - Fixed navigation with eco toggle
HeroSection.js - Hero with kinetic typography, spatial scroll
ProjectGallery.js - Fetches projects from Supabase, filter by category
MagneticButton.js - Liquid/magnetic button effect
EcoToggle.js - Low-carbon mode switch
lib/ - Utility functions
supabase.js - Supabase client & query functions
styles/ - Global CSS
globals.css - Glassmorphism, animations, mesh gradients
Config Files
package.json - Dependencies
next.config.js - Next.js settings
tailwind.config.js - Custom color palette & animations
tsconfig.json - TypeScript config
.env.local - Secret credentials (gitignored)
.gitignore - What not to push to GitHub
🎨 Design System
Colors (Ethereal Neo-Brutalism)
Deep Space: #0a0d14 (background)
Bioluminescent Green: #39ff14
Bioluminescent Purple: #bf40bf
Bioluminescent Cyan: #00ffff
Bioluminescent Pink: #ff006e
Features
✨ Glassmorphism - Frosted glass overlays
🌊 Liquid Blobs - Morphing animations
🎯 Magnetic Buttons - Cursor-tracking interactive elements
🌍 Eco Mode - Low-carbon rendering
📐 Spatial Scroll - Z-axis parallax effects
🔤 Kinetic Typography - Animated headlines
🎨 Mesh Gradients - Dynamic background effects
🔧 Customization
Add Your Own Projects
Insert into Supabase projects table:
INSERT INTO projects (title, description, category, image_url, project_url, featured)
VALUES (
  'Your Project',
  'Description',
  'web',
  'https://...',
  'https://github.com/...',
  true
);
Change Colors
Edit tailwind.config.js → colors.bio section
Modify Animations
Edit styles/globals.css → @keyframes section
Update Contact Info
Edit pages/index.js → Social links & email
🚀 Phase 2 (Future)
Planned features:
Voice/AI Intent Detection (Claude API integration)
Generative UI (Layout morphs based on visitor type)
Talk to the Site button with natural language
Advanced analytics & visitor classification
📦 Dependencies
next@14
react@18
tailwindcss@3.3
@supabase/supabase-js@2.38
framer-motion@10.16
lucide-react@0.263.1
🌐 Deployment
Already live on Vercel? Great!
To redeploy after changes:
Push to GitHub
Vercel auto-deploys
Custom Domain:
Go to Vercel Project Settings
Add your domain
Update DNS records
📝 License
Open source. Use freely, credit appreciated.
🤝 Support
Questions? Issues? Open a GitHub issue or reach out on Twitter.
Built with intention. Designed for the future. Ready to evolve.
Last Updated: February 2026
