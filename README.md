# 🎉 EventConnect — Complete Project Documentation

EventConnect is a modern social platform that connects people who want to attend events but don't want to go alone. It bridges the gap between online discovery and real-world participation by enabling users, hosts, and admins to interact within a secure, scalable ecosystem.

## (Deployment Url) [Live Link] : [https://event-connect-web-nu.vercel.app/]

# Demo Credential

## User 
email : new@ash.com
pass : new@ash.com

## Admin
email : ash@admin.com
pass : ash@admin.com

## Host
email : ash@host.com
pass : ash@host.com
---

## 📌 Table of Contents

1. [Project Overview](#-project-overview)
2. [Tech Stack](#-tech-stack)
3. [Project Structure](#-project-structure)
4. [Core Features](#-core-features)
5. [Design System](#-design-system)
6. [Data Models](#-data-models)
7. [Routes & Navigation](#-routes--navigation)
8. [Role-Based Access Control](#-role-based-access-control)
9. [Site Map & URLs](#-site-map--urls)
10. [Setup Instructions](#-setup-instructions)
11. [Development Guidelines](#-development-guidelines)
12. [Future Enhancements](#-future-enhancements)

---

## 🔍 Project Overview

**EventConnect** is a social event discovery and participation platform designed to help users find companions for events such as concerts, hiking trips, workshops, meetups, and more.

### 🎯 Core Objectives
- Connect like-minded people through shared events
- Enable hosts to create and manage events easily
- Provide admins with tools for moderation and analytics

### 👥 Target Users
- **Users** – Join and attend events
- **Hosts** – Create and manage events
- **Admins** – Moderate content and manage the platform

---

## 🧰 Tech Stack

### Frontend
| Technology | Purpose |
|----------|--------|
| React 18 | UI rendering |
| TypeScript | Type safety |
| Vite | Fast build & dev server |

### UI & Styling
| Technology | Purpose |
|-----------|--------|
| Tailwind CSS | Utility-first styling |
| shadcn/ui | Accessible UI components |
| Framer Motion | Animations |
| Lucide React | Icon system |

### State & Data
| Technology | Purpose |
|-----------|--------|
| React Router DOM | Client-side routing |
| TanStack Query | Server state management |
| React Hook Form | Form handling |
| Zod | Schema validation |

### Backend & API
| Technology | Purpose |
|-----------|--------|
| Next.js Server Actions | Serverless backend operations |
| NextAuth.js | Authentication & session management |
| Stripe API | Payment processing |
| Serverless Functions | API endpoints |


---

## 📁 Project Structure

```
src/
├── assets/                 # Static images
├── components/             # Reusable UI components
│   ├── ui/                # shadcn/ui components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── EventFilters.tsx
│
├── data/                   # Mock data
├── hooks/                  # Custom hooks
├── lib/                    # Utilities
├── pages/                  # Route pages
│   ├── Index.tsx
│   ├── Events.tsx
│   ├── EventDetails.tsx
│   ├── Dashboard.tsx
│   ├── AdminDashboard.tsx
│   └── Auth pages
│
├── App.tsx                 # Route configuration
├── main.tsx               # Entry point
└── index.css              # Tailwind & tokens
```

---

## ✨ Core Features

### 🔐 Authentication
- Login & Registration
- Role-based access (User / Host / Admin)
- Session handling (mock-based currently)

### 📅 Event Management
| Feature | Status |
|-------|-------|
| Browse events | ✅ |
| Event details page | ✅ |
| Create events (Host) | ✅ |
| Filters (category, date, price) | ✅ |
| Search | ✅ |

### 👤 User Profiles
- View profile details
- Hosted & attended events
- Ratings & reviews
- Edit profile

### 🛠 Admin Dashboard
- User management
- Event moderation
- Platform analytics

<!-- ### ⭐ Reviews & Ratings
- Star-based rating system
- Written feedback
- Host rating aggregation -->

---

## 🎨 Design System

### Color Tokens (HSL)
```css
--primary: 32 95% 44%;
--background: 20 14% 4%;
--foreground: 36 33% 95%;
--secondary: 30 20% 15%;
--accent: 32 95% 44%;
--muted: 30 10% 20%;
--destructive: 0 84% 60%;
```

### Typography
- System font stack
- Bold headings
- Readable body text

### Spacing Scale
```
4px → 8px → 12px → 16px → 24px → 32px → 48px → 64px
```

### Animations
- Framer Motion for sections
- Subtle transitions only
- Motion used purposefully

---

## 🧱 Data Models

### User
```typescript
interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'user' | 'host' | 'admin';
  bio: string;
  interests: string[];
  eventsAttended: number;
  eventsHosted: number;
  rating: number;
  totalReviews: number;
  joinedDate: string;
}
```

### Event
```typescript
interface Event {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  time: string;
  location: string;
  image: string;
  hostId: string;
  price: number;
  maxAttendees: number;
  attendees: string[];
  status: 'open' | 'full' | 'completed' | 'cancelled';
  rating: number;
  reviews: Review[];
}
```

---

## 🧭 Routes & Navigation

### Main Routes
| Route | Access | Description |
|-------|--------|-------------|
| `/` | Public | Homepage |
| `/events` | Public | Browse events |
| `/events/:id` | Public | Event details |
| `/login` | Public | Login |
| `/register` | Public | Register |
| `/register?tab=HOST` | Public | Register as Host |
| `/dashboard` | Auth | User dashboard |
| `/create` | Host | Create event |
| `/admin` | Admin | Admin panel |

### API Routes (Serverless)

#### Authentication
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/auth/[...nextauth]` | ALL | NextAuth.js authentication handlers |
| `/api/auth/session` | GET | Get current session |


#### Payment Processing
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/payment` | POST | Create payment intent for event |
| `/api/webhooks/stripe` | POST | Handle Stripe webhook events |

#### Server Actions (Next.js)
EventConnect uses Next.js Server Actions for serverless backend operations


---

## 🔑 Role-Based Access Control

| Feature | User | Host | Admin |
|---------|------|------|-------|
| View events | ✅ | ✅ | ✅ |
| Join events | ✅ | ❌ | ❌ |
| Create events | ❌ | ✅ | ✅ |
| Manage own events | ❌ | ✅ | ✅ |
| Moderate platform | ❌ | ❌ | ✅ |
| Analytics | ❌ | ❌ | ✅ |

---

## 🗺️ Site Map & URLs

### Platform Pages
- `/events` — Explore Events
- `/register?tab=HOST` — Become a Host
- `/about` — About Us
- `/how-it-works` — How It Works

### Support Pages
- `/safety` — Safety Guidelines
- `/contact` — Contact Us
- `/faq` — FAQ

### Legal Pages
- `/privacy` — Privacy Policy
- `/terms` — Terms of Service


---

## ⚙️ Setup Instructions

### Prerequisites
- Node.js v18+
- npm or bun

### Installation
```bash
git clone <repo-url>
cd eventconnect
npm install
npm run dev
```

Open: **http://localhost:8080**

### Environment Variables (Future)
```env
# Database
DATABASE_URL=

# Authentication (NextAuth.js)
NEXTAUTH_SECRET=
NEXTAUTH_URL=http://localhost:3000
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Stripe Payment
STRIPE_SECRET_KEY=
STRIPE_PUBLISHABLE_KEY=
STRIPE_WEBHOOK_SECRET=

# File Storage
CLOUDINARY_API_KEY=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_SECRET=

```

---

## 🧑‍💻 Development Guidelines

### Code Style
- TypeScript everywhere
- Functional components
- Small, reusable components
- Custom hooks for logic reuse

### Styling Rules
- Use semantic tokens only
- No hardcoded colors
- Tailwind-first approach

```tsx
// ✅ Correct
<div className="bg-background text-foreground">

// ❌ Wrong
<div className="bg-black text-white">
```

---

## 🚀 Future Enhancements

### Planned Features
- ✅ Backend integration with Next.js Server Actions
- ✅ NextAuth.js authentication (Google, GitHub, Email)
- ✅ Stripe payment processing
- Cron job for automatic update event status


### Technical Improvements
- Zod validation everywhere
- Skeleton loaders
- Image optimization (Next.js Image)
- SEO optimization

---

## 🏗️ Serverless Architecture

EventConnect uses a serverless architecture for scalability and cost-efficiency:

### Server Actions
Next.js Server Actions provide type-safe, serverless backend operations directly in components:

```typescript
// Example: Join Event Server Action
'use server'

export async function joinEvent(eventId: string, userId: string) {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    throw new Error('Unauthorized');
  }
  
  // Payment processing via Stripe
  const paymentIntent = await stripe.paymentIntents.create({
    amount: event.price * 100,
    currency: 'usd',
    metadata: { eventId, userId }
  });
  
  // Update database
  await db.event.update({
    where: { id: eventId },
    data: { attendees: { connect: { id: userId } } }
  });
  
  return { success: true, clientSecret: paymentIntent.client_secret };
}
```

### API Routes
Traditional REST endpoints for webhooks and third-party integrations:

- **Stripe Webhooks** (`/api/webhooks/stripe`) — Handle payment events
- **NextAuth** (`/api/auth/[...nextauth]`) — Authentication flow

### Benefits
- 🚀 Auto-scaling based on demand
- 💰 Pay only for actual usage
- 🔒 Built-in security with session management
- ⚡ Fast cold starts with edge runtime
- 🛠️ Type-safe end-to-end with TypeScript

---

## 🔐 Authentication Flow (NextAuth.js)

### Providers
- Email/Password (Credentials)
- Google OAuth
- GitHub OAuth
- Magic Link (Email)

### Session Management
```typescript
// auth.config.ts
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Verify credentials
        const user = await verifyUser(credentials);
        return user || null;
      }
    })
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub;
      session.user.role = token.role;
      return session;
    }
  },
  pages: {
    signIn: '/login',
    error: '/auth/error',
  }
};
```

---

## 💳 Payment Integration (Stripe)

### Payment Flow
1. User selects paid event
2. Client creates payment intent via `/api/payment`
3. Stripe Elements collects payment details
4. Payment confirmed on client
5. Webhook confirms payment server-side
6. User added to event attendees


### Webhook Handler
```typescript
// app/api/webhooks/stripe/route.ts
export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get('stripe-signature');
  
  const event = stripe.webhooks.constructEvent(
    body,
    signature,
    process.env.STRIPE_WEBHOOK_SECRET
  );
  
  switch (event.type) {
    case 'payment_intent.succeeded':
      const { eventId, userId } = event.data.object.metadata;
      await confirmEventRegistration(eventId, userId);
      break;
    case 'payment_intent.payment_failed':
      await handlePaymentFailure(event.data.object.metadata);
      break;
  }
  
  return Response.json({ received: true });
}
```

---

## 📞 Contact & Support

For questions, feedback, or support:
- Visit `/contact` for the contact form
- Check `/faq` for common questions
- Review `/safety` for safety guidelines

---

**© 2025 EventConnect. All rights reserved.**