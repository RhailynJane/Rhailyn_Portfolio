# Professional Portfolio Website

A modern, responsive portfolio website built with Next.js, featuring dynamic content management, multi-language support, and a sleek dark theme with animated elements.

## ✨ Features

- **Responsive Design**: Optimized for all devices with mobile-first approach
- **Dark Theme (Default)**: Elegant dark design with purple accents and smooth animations; persists between visits
- **Multi-language Support**: English (default), Filipino, and French with client-side persistence (hydration-safe)
- **Dynamic Content**: Database-driven projects, blogs, skills, and experience
- **Interactive Elements**: Animated hero section with orbital rings and particles
- **Contact System**: Functional contact form and feedback submission
- **SEO Optimized**: Built with Next.js best practices
- **Deep-link Navigation**: Jump directly to sections via `/?section=about|projects|blog|skills|contact`
- **Project Details Sidebar**: In-page sidebar with language switcher and theme toggle

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, Radix UI Components
- **Database**: PostgreSQL via Prisma ORM
- **Authentication**: HTTP Basic Auth for admin
- **Deployment**: Vercel-ready
- **Icons**: Lucide React
- **Fonts**: Geist, Manrope

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- PostgreSQL database

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   DATABASE_URL="postgresql://user:password@host:port/database"
   ADMIN_USER=admin
   ADMIN_PASSWORD=your_secure_password
   ```

4. **Set up database**
   ```bash
   npm run db:generate
   npm run db:push
   npm run db:seed
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

   The dev server starts on port 3000 (or the next available port, e.g., 3001). Open the printed URL to view the portfolio.

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── admin/             # Admin moderation panel
│   ├── api/               # API routes (feedback)
│   ├── projects/[id]/     # Dynamic project detail pages
│   ├── globals.css        # Global styles and animations
│   ├── layout.tsx         # Root layout with theme provider
│   └── page.tsx           # Main portfolio page
├── components/            # React components
│   ├── ui/               # Reusable UI components (shadcn/ui)
│   ├── about-section.tsx # About section with experience
│   ├── contact-section.tsx # Contact form and info
│   ├── feedback-section.tsx # Testimonials and feedback
│   ├── hero-section.tsx  # Animated hero section
│   ├── projects-section.tsx # Projects showcase
│   ├── sidebar-navigation.tsx # Mobile drawer navigation
│   └── skills-section.tsx # Skills and technologies
├── lib/                  # Utility functions
│   ├── prisma.ts        # Prisma client singleton
│   ├── data-service.ts  # Data access layer
│   └── translations.ts  # Multi-language content
├── prisma/              # Database schema and migrations
│   ├── schema.prisma    # Prisma schema definition
│   └── seed.ts          # Database seed script
├── hooks/               # Custom React hooks
├── middleware.ts        # Next.js middleware (auth)
└── public/              # Static assets
```

## 🌐 Multi-language Support

The portfolio supports three languages:
- **English** (default)
- **Filipino** 
- **French**

Language switching is available in the navigation menu and on project detail pages (via the sidebar). The selected language is stored locally and restored on future visits. Server-side rendering always starts in English to avoid hydration mismatches, then applies your saved preference on the client.

## 🧭 Routing and navigation

- Section deep links: `/?section=about`, `/?section=projects`, `/?section=skills`, `/?section=contact`
- The "Back to Projects" action on project detail pages returns to `/?section=projects`
- Project detail pages include a sidebar with language and theme controls

## 🎨 Customization

### Theme Colors
The color scheme is defined in `app/globals.css`:
- Primary: Purple (#8B5CF6)
- Background: Dark gradient
- Accent: Various purple shades

### Adding Content

Content is managed through `lib/data-service.ts`. You can:
1. **Projects**: Update the projects array with your work
2. **Skills**: Modify skill categories and items
3. **Experience**: Add your work history
4. **Education**: Update your educational background
5. **Certifications**: Add professional certifications

For dynamic content via database, Prisma is used to manage data models (e.g., Feedback, Projects). See `prisma/schema.prisma` and `prisma/seed.ts`.

## 🔐 Admin and API

### Admin moderation

- Path: `/admin` (protected by HTTP Basic Auth via `middleware.ts`)
- Credentials are provided via environment variables: `ADMIN_USER` and `ADMIN_PASSWORD`

### API endpoints

- `GET /api/feedback` — returns approved feedback (public)
- `POST /api/feedback` — submit feedback (public)
   - Body: `{ name, email, company?, position?, message, rating }`
- `GET /api/feedback/modERATION` — list all feedback (requires Basic Auth)
- `PATCH /api/feedback/modERATION` — approve feedback by `{ id }` (requires Basic Auth)
- `DELETE /api/feedback/modERATION?id=...` — delete feedback by id (requires Basic Auth)

Note: Admin endpoints require the same credentials as `/admin` (send via the `Authorization: Basic ...` header).

## 🚀 Deployment

### Deploy to Vercel

1. **Connect your repository** to Vercel
2. **Add environment variables** in Vercel dashboard:
   - `DATABASE_URL` (PostgreSQL connection string)
   - `ADMIN_USER` (for moderation panel)
   - `ADMIN_PASSWORD` (for moderation panel)
3. **Deploy** - Vercel will automatically build and deploy your portfolio

### Database Setup
Ensure your PostgreSQL database has the Feedback table created via `npx prisma db push` before deployment.

## 📱 Features Overview

- **Hero Section**: Animated introduction with contact information
- **About**: Professional background, education, and certifications
- **Skills**: Interactive skill categories with proficiency levels
- **Projects**: Detailed project showcase with GitHub and Figma links; project detail pages include a localized sidebar and a smart "Back to Projects" link
- **Contact**: Contact information with social media links
- **Feedback**: Testimonial system with admin moderation
- **Admin Panel**: Secure moderation dashboard at `/admin` (HTTP Basic Auth)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Rhailyn Jane Cona**
- Email: crhailynjane@gmail.com
- LinkedIn: [linkedin.com/in/rhailyn-cona](https://linkedin.com/in/rhailyn-cona)
- Location: Calgary, AB

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [Radix UI](https://radix-ui.com/) and [shadcn/ui](https://ui.shadcn.com/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Database powered by [Prisma](https://prisma.io/) + PostgreSQL
- Deployed on [Vercel](https://vercel.com/)
