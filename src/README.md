# Frontend Application

This directory contains the React frontend application.

## Structure

```
src/
├── components/           # Reusable React components
│   ├── calculators/      # Calculator-specific components
│   │   ├── AgeCalculator.tsx
│   │   ├── BMICalculator.tsx
│   │   ├── BasicCalculator.tsx
│   │   ├── CalorieCalculator.tsx
│   │   ├── CompoundInterestCalculator.tsx
│   │   ├── DiscountCalculator.tsx
│   │   ├── GSTCalculator.tsx
│   │   ├── LoanEMICalculator.tsx
│   │   ├── PercentageCalculator.tsx
│   │   ├── SIPCalculator.tsx
│   │   ├── TipCalculator.tsx
│   │   ├── UnitConverter.tsx
│   │   ├── CalculatorContent.tsx    # Shared content section
│   │   └── CalculatorLayout.tsx     # Shared layout wrapper
│   │
│   ├── layout/           # Application layout components
│   │   ├── Header.tsx    # Navigation header with auth
│   │   ├── Footer.tsx    # Site footer
│   │   └── Layout.tsx    # Main layout wrapper
│   │
│   ├── home/             # Homepage-specific components
│   │   ├── HeroSection.tsx
│   │   ├── CategorySection.tsx
│   │   └── PopularCalculators.tsx
│   │
│   └── ui/               # Base UI components (shadcn/ui)
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── ... (other primitives)
│
├── pages/                # Route page components
│   ├── calculators/      # Calculator page wrappers
│   │   ├── AgeCalculatorPage.tsx
│   │   └── ... (other calculator pages)
│   ├── Index.tsx         # Homepage
│   ├── AuthPage.tsx      # Login/Signup
│   ├── AboutPage.tsx
│   ├── ContactPage.tsx
│   ├── PrivacyPolicyPage.tsx
│   ├── TermsPage.tsx
│   └── NotFound.tsx
│
├── hooks/                # Custom React hooks
│   ├── use-mobile.tsx    # Mobile detection hook
│   └── use-toast.ts      # Toast notification hook
│
├── lib/                  # Utility functions
│   └── utils.ts          # Helper functions (cn, etc.)
│
├── data/                 # Static data and content
│   └── calculatorContent.ts  # Calculator descriptions, FAQs
│
├── integrations/         # External service integrations
│   └── supabase/         # Supabase client (auto-generated)
│       ├── client.ts     # Supabase client instance
│       └── types.ts      # Database types
│
├── App.tsx               # Main app component with routing
├── main.tsx              # Application entry point
└── index.css             # Global styles and Tailwind config
```

## AWS Migration Notes

### Deploying to S3 + CloudFront

1. Build the application:
   ```bash
   npm run build
   ```

2. The `dist/` folder contains:
   - `index.html` - Entry point
   - `assets/` - JS, CSS, and static files

3. Upload to S3 bucket with static website hosting

4. Configure CloudFront:
   - Origin: S3 bucket
   - Default root object: `index.html`
   - Error pages: Redirect 404 to `/index.html` (for SPA routing)

### Environment Variables

For production, update `src/integrations/supabase/client.ts` or use environment variables:

```typescript
// Current (Supabase)
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;

// Future (AWS)
const API_URL = import.meta.env.VITE_API_URL;
```
