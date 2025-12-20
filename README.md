# Calculatorss.online

A free online calculator application with 12+ calculators for finance, health, math, and utility calculations.

## 🏗️ Project Structure (AWS-Ready)

This project is organized for easy migration to AWS infrastructure:

```
├── src/                          # FRONTEND - React Application
│   ├── components/               # Reusable UI components
│   │   ├── calculators/          # Calculator-specific components
│   │   ├── layout/               # Layout components (Header, Footer)
│   │   ├── home/                 # Homepage sections
│   │   └── ui/                   # shadcn/ui base components
│   ├── pages/                    # Route page components
│   │   └── calculators/          # Individual calculator pages
│   ├── hooks/                    # Custom React hooks
│   ├── lib/                      # Utility functions
│   ├── data/                     # Static data and content
│   ├── integrations/             # External service integrations
│   │   └── supabase/             # Database client (auto-generated)
│   ├── App.tsx                   # Main application with routing
│   ├── main.tsx                  # Application entry point
│   └── index.css                 # Global styles and design tokens
│
├── supabase/                     # BACKEND - Serverless Functions
│   ├── functions/                # Edge Functions (serverless API)
│   │   └── [function-name]/      # Each function in its own folder
│   └── config.toml               # Supabase configuration
│
├── database/                     # DATABASE - Schema & Migrations
│   └── README.md                 # Database documentation
│
├── public/                       # Static assets
├── index.html                    # HTML entry point
├── vite.config.ts                # Vite bundler configuration
├── tailwind.config.ts            # Tailwind CSS configuration
└── package.json                  # Dependencies and scripts
```

## 🚀 AWS Migration Guide

When migrating to AWS, consider the following architecture:

### Frontend (S3 + CloudFront)
- Build with `npm run build`
- Deploy `dist/` folder to S3
- Use CloudFront for CDN and HTTPS

### Backend (Lambda + API Gateway)
- Convert `supabase/functions/` to AWS Lambda functions
- Use API Gateway for HTTP endpoints
- Consider Lambda@Edge for edge computing

### Database (RDS/Aurora PostgreSQL)
- Export schema from current PostgreSQL database
- Apply migrations to RDS/Aurora instance
- Update connection strings in Lambda functions

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS
- **UI Components**: shadcn/ui, Radix UI primitives
- **State Management**: TanStack Query (React Query)
- **Routing**: React Router v6
- **Backend**: Supabase Edge Functions (Deno)
- **Database**: PostgreSQL (via Lovable Cloud)
- **Authentication**: Supabase Auth

## 📦 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Key Directories

| Directory | Purpose | AWS Equivalent |
|-----------|---------|----------------|
| `src/` | React frontend application | S3 + CloudFront |
| `supabase/functions/` | Serverless API functions | Lambda + API Gateway |
| `database/` | Database schema & migrations | RDS/Aurora PostgreSQL |

## 🔐 Environment Variables

Required environment variables for production:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_anon_key
```

For AWS migration, additional variables may be needed:
```env
DATABASE_URL=postgresql://...
AWS_REGION=us-east-1
```

---

## How can I edit this code?

**Use Lovable**: Visit [Lovable](https://lovable.dev) and start prompting. Changes made via Lovable will be committed automatically.

**Use your preferred IDE**: Clone this repo and push changes. Pushed changes will also be reflected in Lovable.

```bash
npm install
npm run dev
```

## How can I deploy this project?

Open Lovable and click on Share → Publish. For custom domains, navigate to Project → Settings → Domains.
