# Professional Portfolio Website

A modern, responsive portfolio website built with Next.js, featuring dynamic content management, multi-language support, and a sleek dark theme with animated elements.

## ✨ Features

- **Responsive Design**: Optimized for all devices with mobile-first approach
- **Dark Theme**: Elegant dark design with purple accents and smooth animations
- **Multi-language Support**: Available in English, Filipino, and French
- **Dynamic Content**: Database-driven projects, blogs, skills, and experience
- **Interactive Elements**: Animated hero section with orbital rings and particles
- **Contact System**: Functional contact form and feedback submission
- **SEO Optimized**: Built with Next.js best practices

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS, Radix UI Components
- **Database**: Supabase (PostgreSQL)
- **Deployment**: Vercel
- **Icons**: Lucide React
- **Fonts**: Geist, Manrope

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   \`\`\`env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   \`\`\`

4. **Set up Supabase database**
   Run the SQL scripts in your Supabase dashboard in this order:
   \`\`\`sql
   scripts/01-create-projects-table.sql
   scripts/02-create-blogs-table.sql
   scripts/03-create-feedback-table.sql
   scripts/04-create-skills-tables.sql
   scripts/05-create-experience-table.sql
   scripts/06-create-education-table.sql
   scripts/07-create-certifications-table.sql
   \`\`\`

5. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

   Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📁 Project Structure

\`\`\`
├── app/                    # Next.js app directory
│   ├── blog/[id]/         # Dynamic blog post pages
│   ├── projects/[id]/     # Dynamic project detail pages
│   ├── globals.css        # Global styles and animations
│   ├── layout.tsx         # Root layout with theme provider
│   └── page.tsx           # Main portfolio page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── about-section.tsx # About section with experience
│   ├── blog-section.tsx  # Blog listing and management
│   ├── contact-section.tsx # Contact form and info
│   ├── feedback-section.tsx # Testimonials and feedback
│   ├── hero-section.tsx  # Animated hero section
│   ├── projects-section.tsx # Projects showcase
│   ├── sidebar-navigation.tsx # Mobile drawer navigation
│   └── skills-section.tsx # Skills and technologies
├── lib/                  # Utility functions
│   ├── supabase/        # Supabase client configuration
│   ├── data-service.ts  # Database operations
│   └── translations.ts  # Multi-language content
├── hooks/               # Custom React hooks
├── scripts/            # Database setup scripts
└── public/            # Static assets
\`\`\`

## 🌐 Multi-language Support

The portfolio supports three languages:
- **English** (default)
- **Filipino** 
- **French**

Language switching is available in the navigation menu. All content including UI text, project descriptions, and blog posts can be translated.

## 🎨 Customization

### Theme Colors
The color scheme is defined in `app/globals.css`:
- Primary: Purple (#8B5CF6)
- Background: Dark gradient
- Accent: Various purple shades

### Adding Content

1. **Projects**: Add entries to the `projects` table in Supabase
2. **Blog Posts**: Add entries to the `blogs` table
3. **Skills**: Update the `skill_categories` and `skills` tables
4. **Experience**: Add work history to the `experience` table

## 🚀 Deployment

### Deploy to Vercel

1. **Connect your repository** to Vercel
2. **Add environment variables** in Vercel dashboard:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. **Deploy** - Vercel will automatically build and deploy your portfolio

### Database Setup
Ensure all SQL scripts are executed in your Supabase project before deployment.

## 📱 Features Overview

- **Hero Section**: Animated introduction with contact information
- **About**: Professional background, education, and certifications
- **Skills**: Interactive skill categories with proficiency levels
- **Projects**: Detailed project showcase with GitHub links
- **Blog**: Article management system with search and categories
- **Contact**: Functional contact form with social media links
- **Feedback**: Testimonial system for client reviews

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
- UI components from [Radix UI](https://radix-ui.com/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Database powered by [Supabase](https://supabase.com/)
- Deployed on [Vercel](https://vercel.com/)
