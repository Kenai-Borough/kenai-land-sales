# Kenai Land Sales 🏔️

**Alaska's Premier Land Marketplace**

Professional land listing platform built with React 19, TypeScript, Tailwind CSS v4, and Supabase. Simple $10 flat-fee model for 60-day listings.

## 🌟 Features

### Standard Features
- **$10 Flat Fee** - 60-day listing duration
- **Stripe Checkout Integration** - Secure payment processing
- **Rich Media Support** - 10+ photos per listing, video support
- **Advanced Search & Filtering** - By price, acreage, location, utilities
- **Map Integration** - View properties on interactive maps
- **Contact Messaging** - Direct seller communication
- **User Accounts** - Seller dashboards with analytics
- **Featured Listings** - Optional $20 upgrade for homepage placement
- **Mobile Responsive** - Perfect on all devices
- **SEO Optimized** - Meta tags, sitemaps, structured data

### Land-Specific Features
- **Acreage Calculator** - Automatic calculations
- **Zoning Information** - Display zoning details
- **Topography Fields** - Terrain description
- **Utilities Checklist** - Water, electric, sewer, gas
- **Road Access Details** - Paved, gravel, trail, or none
- **Parcel Number Integration** - Track official records
- **Survey Document Upload** - Attach legal documents
- **Land Use Suggestions** - Hunting, cabin, recreation ideas
- **Property Tax Estimator** - Annual tax information

### Trust & Safety
- **"How to Avoid Scams"** - Comprehensive guide
- **Safety Guidelines** - Meet in public, payment tips
- **Verified Sellers** - Email and payment verification
- **Report Listing** - Flag suspicious content

## 🚀 Quick Start

```bash
cd kenai-land-sales
npm install
cp .env.example .env
# Edit .env with your credentials
npm run dev
```

Visit http://localhost:5173

## 📦 Environment Variables

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
VITE_APP_URL=http://localhost:5173
VITE_APP_NAME=Kenai Land Sales
```

## 🗄️ Database Setup

1. Create Supabase project at https://supabase.com
2. Run `/KENAI_PLATFORMS_DATABASE_SCHEMA.sql` in SQL editor
3. Copy connection details to `.env`

## 💳 Payment Setup

1. Create Stripe account at https://stripe.com
2. Get publishable key from dashboard
3. Add to `.env` file

## 🏗️ Build & Deploy

```bash
npm run build  # Production build
npm run preview  # Preview build locally
```

Deploy `dist/` folder to:
- GitHub Pages
- Netlify
- Vercel
- Any static host

## 📁 Project Structure

```
src/
├── components/  # UI components
├── pages/       # Route pages
├── lib/         # Utilities (Supabase, Stripe)
├── types/       # TypeScript definitions
├── App.tsx      # Main app
└── main.tsx     # Entry point
```

## 🔒 Security

- Row Level Security (RLS) enabled
- Email verification required
- Secure Stripe payments
- Input sanitization

## 📱 Mobile Responsive

- Breakpoints: 768px (tablet), 1024px (desktop)
- Touch-friendly interface
- Optimized images

## 🎨 Tech Stack

- React 19
- TypeScript
- Vite 6
- Tailwind CSS v4
- Supabase (PostgreSQL + Auth)
- Stripe Checkout
- React Router 7
- Lucide Icons

## 🆘 Support

Email: support@kenailandsales.com

---

**Built in Alaska** 🏔️
