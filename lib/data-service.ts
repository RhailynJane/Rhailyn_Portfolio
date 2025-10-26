export type Project = {
  id: string
  title: string
  description: string
  long_description?: string
  technologies: string[]
  category: string
  github_url?: string | null
  demo_url?: string | null
  video_url?: string | null
  image_url?: string | null
  figma_url?: string | null
  featured: boolean
  status: string
  created_at: string
  updated_at: string
  // Extended fields for detailed project pages
  role?: string
  team?: string
  duration?: string
  timeline?: string
  features?: string[]
  challenges?: string
  outcome?: string
}

const mockProjects: Project[] = [
  {
    id: "1",
    title: "SafeSpace Mental Health App",
    description: "Comprehensive mental health and wellness application with mood tracking, AI journaling, and professional consultations",
    long_description:
      "SafeSpace is a comprehensive mental health and wellness application designed to provide users with tools for mental health management, professional support, and community connection. The app combines evidence-based therapeutic techniques with modern technology to create a supportive ecosystem for mental wellbeing. Core mission: To make mental health support accessible, personalized, and stigma-free through technology-enabled care solutions.",
    technologies: ["React Native", "TypeScript", "Expo Router", "PostgreSQL", "Node.js", "Express", "WebRTC", "WebSocket", "JWT", "AWS S3"],
    category: "Mobile Application",
    github_url: "https://github.com/annieala/SafeSpace-prototype",
    demo_url: null,
  video_url: null,
  // No image for this project (hide media section on details page)
  image_url: null,
    figma_url:
      "https://www.figma.com/design/4fuzNHukJNygOXylaNqjct/Mobile?node-id=0-1&t=GuSJCPJG8kJr0xwn-1",
    featured: true,
    status: "completed",
    created_at: "2025-05-01T00:00:00Z",
    updated_at: "2025-12-01T00:00:00Z",
    role: "Project Manager, Lead Mobile Developer, Frontend Developer, Backend Developer, UI/UX Designer, QA",
    team: "Clarity Collective Team",
    duration: "May 2025 - December 2025",
    timeline: "May-September: Research and Design | September-December: Development, Testing, Deployment",
    features: [
      "Mood Tracking & Analytics - Daily mood monitoring with insights and pattern recognition",
      "AI-Powered Journaling - Intelligent reflection with emotion tagging and search capabilities",
      "Professional Consultations - Secure HIPAA-compliant video therapy sessions with WebRTC",
      "Community Support - Safe moderated forum for shared experiences and discussions",
      "Crisis Resources - Immediate support with emergency contacts and grounding exercises",
      "Personalized Resources - Curated mental health content library with recommendations",
      "Self-Assessment Tools - Clinical screening instruments (PHQ-9, GAD-7) with progress tracking",
      "Real-time Messaging - Secure chat with file sharing and group conversations",
      "Appointment Management - Support worker directory with availability scheduling",
      "Push Notifications - Multi-type notifications for appointments, messages, and system updates",
      "Security & Privacy - Row-level security, data encryption, and audit logging"
    ],
    challenges:
      "Building a HIPAA-compliant mental health platform required implementing robust security measures including end-to-end encryption, secure video consultations, and comprehensive audit logging. Integrating clinical assessment tools (PHQ-9, GAD-7) with crisis detection algorithms demanded careful validation. Creating an accessible, stigma-free user experience while maintaining professional therapeutic standards was a key design challenge. Real-time features (messaging, video calls) required optimizing WebSocket and WebRTC implementations for reliability.",
    outcome:
      "Successfully delivered a comprehensive mental health platform serving the Clarity Collective community. The app features 12 core modules including mood tracking, journaling, video consultations, and crisis support. Implemented secure authentication with JWT, real-time communication with WebSocket, and HIPAA-compliant video calls. Built a scalable PostgreSQL database architecture with proper security policies. Created an intuitive React Native interface with TypeScript, providing users with accessible mental health support and professional care coordination."
  },
  {
    id: "2",
    title: "SafeSpace Web Platform",
    description: "Web version of the SafeSpace community safety platform",
    long_description:
      "Web version of the SafeSpace community safety platform with cross-browser compatibility and accessible design.",
    technologies: ["JavaScript", "Web Development", "Responsive Design"],
    category: "Web Application",
    github_url: null,
    demo_url: null,
    video_url: null,
    image_url: "/safespace-web.png",
    figma_url:
      "https://www.figma.com/design/1uxJlnu19gOZCK47oarQXh/SafeSpace-Figma-Template?node-id=0-1&t=kNckyJSiOUD5zrDv-1",
    featured: true,
    status: "completed",
    created_at: "2024-01-15T00:00:00Z",
    updated_at: "2024-01-15T00:00:00Z",
  },
  {
    id: "3",
    title: "Rural Alberta Health Connect Website",
    description: "Healthcare platform connecting rural Alberta communities with medical services",
    long_description:
      "Healthcare platform designed to connect rural Alberta communities with medical services, featuring healthcare service integration and community connectivity.",
    technologies: ["Web Development", "JavaScript"],
    category: "Web Application",
    github_url: null,
    demo_url: null,
    video_url: null,
    image_url: "/rural-health-web.png",
    figma_url:
      "https://www.figma.com/design/2CyCUUXxpupNyevQsLoByj/AlbertaHealthConnect?node-id=0-1&t=DmOYSaEEOWPvALYu-1",
    featured: true,
    status: "completed",
    created_at: "2024-02-01T00:00:00Z",
    updated_at: "2024-02-01T00:00:00Z",
  },
  {
    id: "4",
    title: "Rural Alberta Health Connect Mobile",
    description: "Mobile application for healthcare access in rural Alberta",
    long_description:
      "Mobile application designed for healthcare access in rural Alberta with healthcare service integration and mobile optimization.",
    technologies: ["React Native", "Mobile Development"],
    category: "Mobile Application",
    github_url: null,
    demo_url: null,
    video_url: null,
    image_url: "/rural-health-mobile.png",
    figma_url:
      "https://www.figma.com/design/2CyCUUXxpupNyevQsLoByj/AlbertaHealthConnect?node-id=0-1&t=DmOYSaEEOWPvALYu-1",
    featured: true,
    status: "completed",
    created_at: "2024-02-15T00:00:00Z",
    updated_at: "2024-02-15T00:00:00Z",
  },
  {
    id: "5",
    title: "Professional Portfolio",
    description: "Personal portfolio showcasing projects and skills",
    long_description:
      "Personal portfolio website showcasing projects and skills with responsive design and project showcase features.",
    technologies: ["JavaScript", "Web Development"],
    category: "Web Application",
    github_url: "https://github.com/RhailynJane/Portfolio",
    demo_url: null,
    video_url: null,
    image_url: "/portfolio.png",
    figma_url: null,
    featured: true,
    status: "completed",
    created_at: "2024-03-01T00:00:00Z",
    updated_at: "2024-03-01T00:00:00Z",
  },
  {
    id: "6",
    title: "FitmindAI App",
    description: "AI-powered fitness and mental wellness application",
    long_description:
      "AI-powered fitness and mental wellness application with AI recommendations and wellness tracking features.",
    technologies: ["AI Integration", "Mobile/Web Development"],
    category: "Mobile Application",
    github_url: null,
    demo_url: null,
    video_url: null,
    image_url: "/fitmindai.png",
    figma_url:
      "https://www.figma.com/design/PBGbOCOsVMEX1ul9a2Y2Ax/FitMindAI?node-id=0-1&t=UYXIqGsbavai9er8-1",
    featured: true,
    status: "completed",
    created_at: "2024-04-01T00:00:00Z",
    updated_at: "2024-04-01T00:00:00Z",
  },
  {
    id: "7",
    title: "Cinetracker Project",
    description: "Movie and media tracking application",
    technologies: ["Web Development", "JavaScript"],
    category: "Web Application",
    github_url: null,
    demo_url: null,
    video_url: null,
    image_url: "/cinetracker.png",
    figma_url: null,
    featured: true,
    status: "completed",
    created_at: "2024-05-01T00:00:00Z",
    updated_at: "2024-05-01T00:00:00Z",
  },
  {
    id: "8",
    title: "Library Management Application",
    description: "Python-based application with book search, borrowing, and inventory management",
    technologies: ["Python", "CSV", "Git", "VS Code"],
    category: "Desktop Application",
    github_url: "https://github.com/ConaRhai/library_management_app.git",
    demo_url: null,
    video_url: null,
    image_url: "/library-management-system.png",
    figma_url: null,
    featured: true,
    status: "completed",
    created_at: "2024-08-01T00:00:00Z",
    updated_at: "2024-08-01T00:00:00Z",
  },
  {
    id: "9",
    title: "Dog Care Project",
    description: "Responsive web application for dog care services",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "Web Application",
    github_url: "https://github.com/RhailynJane/Project_DogCare.git",
    demo_url: null,
    video_url: null,
    image_url: "/dog-care-website.png",
    figma_url: null,
    featured: true,
    status: "completed",
    created_at: "2024-08-01T00:00:00Z",
    updated_at: "2024-08-01T00:00:00Z",
  },
  {
    id: "10",
    title: "Travel Management Application",
    description: "Cross-platform travel reservation system",
    technologies: ["C#", ".NET MAUI"],
    category: "Mobile Application",
    github_url: "https://github.com/RhailynJane/TravelessApp.git",
    demo_url: null,
    video_url: null,
    image_url: "/travel-management-app.png",
    figma_url: null,
    featured: true,
    status: "completed",
    created_at: "2024-10-01T00:00:00Z",
    updated_at: "2024-10-01T00:00:00Z",
  },
  {
    id: "11",
    title: "House Utility Management System",
    description: "Real-time utility tracking web application",
    technologies: ["HTML", "CSS", "C#", ".NET MAUI", "SQL Server"],
    category: "Web Application",
    github_url: "https://github.com/RhailynJane/HouseUtilityManagementSystem.git",
    demo_url: null,
    video_url: null,
    image_url: "/placeholder-2b24u.png",
    figma_url: null,
    featured: true,
    status: "completed",
    created_at: "2024-11-01T00:00:00Z",
    updated_at: "2024-11-01T00:00:00Z",
  },
  {
    id: "12",
    title: "Rental Management System",
    description: "Web-based rental property management",
    technologies: ["Blazor", "C#", "MySQL", "Figma"],
    category: "Web Application",
    github_url: "https://github.com/RhailynJane/RentalManagementSystem.git",
    demo_url: null,
    video_url: null,
    image_url: "/rental-management-interface.png",
    figma_url: null,
    featured: true,
    status: "completed",
    created_at: "2024-11-01T00:00:00Z",
    updated_at: "2024-11-01T00:00:00Z",
  },
]

const mockSkillCategories = [
  { id: 1, title: "Frontend Development", icon: "Code", color: "text-blue-500", display_order: 1 },
  { id: 2, title: "Backend & Database", icon: "Database", color: "text-green-500", display_order: 2 },
  { id: 3, title: "Mobile Development", icon: "Code", color: "text-purple-500", display_order: 3 },
  { id: 4, title: "Testing & Quality Assurance", icon: "Code", color: "text-red-500", display_order: 4 },
  { id: 5, title: "UI/UX Design", icon: "Palette", color: "text-pink-500", display_order: 5 },
  { id: 6, title: "DevOps & Tools", icon: "Wrench", color: "text-orange-500", display_order: 6 },
]

const mockSkills = [
  // Frontend Development
  { id: 1, category_id: 1, name: "HTML5 & CSS3", level: 95, display_order: 1 },
  { id: 2, category_id: 1, name: "JavaScript (ES6+)", level: 95, display_order: 2 },
  { id: 3, category_id: 1, name: "TypeScript", level: 90, display_order: 3 },
  { id: 4, category_id: 1, name: "React.js", level: 92, display_order: 4 },
  { id: 5, category_id: 1, name: "Next.js", level: 88, display_order: 5 },
  { id: 6, category_id: 1, name: "Tailwind CSS", level: 90, display_order: 6 },
  { id: 7, category_id: 1, name: "Responsive Design", level: 93, display_order: 7 },
  
  // Backend & Database
  { id: 8, category_id: 2, name: "Node.js", level: 88, display_order: 1 },
  { id: 9, category_id: 2, name: "Python", level: 85, display_order: 2 },
  { id: 10, category_id: 2, name: "C# & .NET", level: 82, display_order: 3 },
  { id: 11, category_id: 2, name: "SQL (MySQL/PostgreSQL)", level: 85, display_order: 4 },
  { id: 12, category_id: 2, name: "Prisma ORM", level: 80, display_order: 5 },
  { id: 13, category_id: 2, name: "RESTful APIs", level: 88, display_order: 6 },
  
  // Mobile Development
  { id: 14, category_id: 3, name: "React Native", level: 85, display_order: 1 },
  { id: 15, category_id: 3, name: ".NET MAUI", level: 80, display_order: 2 },
  { id: 16, category_id: 3, name: "Cross-Platform Dev", level: 83, display_order: 3 },
  { id: 17, category_id: 3, name: "Mobile UI/UX", level: 85, display_order: 4 },
  
  // Testing & QA
  { id: 18, category_id: 4, name: "Cypress", level: 90, display_order: 1 },
  { id: 19, category_id: 4, name: "Selenium", level: 85, display_order: 2 },
  { id: 20, category_id: 4, name: "Postman/API Testing", level: 92, display_order: 3 },
  { id: 21, category_id: 4, name: "Manual Testing", level: 95, display_order: 4 },
  { id: 22, category_id: 4, name: "Test Planning", level: 90, display_order: 5 },
  { id: 23, category_id: 4, name: "Regression Testing", level: 93, display_order: 6 },
  
  // UI/UX Design
  { id: 24, category_id: 5, name: "Figma", level: 88, display_order: 1 },
  { id: 25, category_id: 5, name: "Prototyping", level: 85, display_order: 2 },
  { id: 26, category_id: 5, name: "Wireframing", level: 83, display_order: 3 },
  { id: 27, category_id: 5, name: "User Research", level: 80, display_order: 4 },
  
  // DevOps & Tools
  { id: 28, category_id: 6, name: "Git & GitHub", level: 92, display_order: 1 },
  { id: 29, category_id: 6, name: "Agile/Scrum", level: 90, display_order: 2 },
  { id: 30, category_id: 6, name: "CI/CD (Jenkins)", level: 80, display_order: 3 },
  { id: 31, category_id: 6, name: "Jira & Confluence", level: 93, display_order: 4 },
]

const mockTools = [
  // Development Tools
  "VS Code",
  "Git & GitHub",
  "NPM & Yarn",
  "Vite",
  "Webpack",
  
  // Frontend Frameworks & Libraries
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "shadcn/ui",
  "Bootstrap",
  
  // Backend & Database
  "Node.js",
  "Express.js",
  "Prisma",
  "PostgreSQL",
  "MySQL",
  "SQL Server",
  "Firebase",
  "Supabase",
  "WatermelonDB",
  
  // Mobile Development
  "React Native",
  "Expo",
  ".NET MAUI",
  "Xamarin",
  
  // Testing Tools
  "Cypress",
  "Selenium",
  "Postman",
  "TestRail",
  "Jest",
  
  // Design Tools
  "Figma",
  "Adobe XD",
  "Canva",
  
  // Project Management & Collaboration
  "Jira",
  "Confluence",
  "Trello",
  "Slack",
  "Microsoft Teams",
  
  // DevOps & CI/CD
  "Jenkins",
  "Docker",
  "Vercel",
  "Netlify",
  
  // Other Tools
  "ESLint",
  "Prettier",
  "Zendesk",
  "Zoho Desk",
  "Wireshark",
]

const mockFeedback: any[] = []

const mockExperience = [
  {
    id: 1,
    title: "Software QA Engineer",
    company: "Convoso Inc.",
    start_date: "2023-03-01",
    end_date: null,
    is_current: true,
    location: "Remote",
    description:
      "Assist quality assurance initiatives by executing comprehensive testing methodologies including regression, smoke, sanity, and performance testing to identify critical defects and ensure high-quality software delivery. Collaborate closely with developers to understand requirements and design specifications while creating detailed test plans and cases that enhance testing process consistency. Work with the Product Team to review user stories and acceptance criteria, ensuring product alignment with business requirements and improving overall communication and project outcomes. Transitioned to the automation team, contributing to automated testing efforts using Cypress to improve testing efficiency and coverage.",
    skills: [
      "Manual Testing",
      "Automated Testing",
      "Regression Testing",
      "Smoke Testing",
      "Sanity Testing",
      "Performance Testing",
      "Test Planning",
      "Cypress",
      "TestRail",
      "Jira",
      "Confluence",
      "Jenkins",
      "Postman",
      "API Testing",
      "Cross-browser Testing",
      "JavaScript",
      "HTML/CSS",
    ],
  },
  {
    id: 2,
    title: "Product Support Engineer",
    company: "Convoso Inc.",
    start_date: "2022-05-01",
    end_date: "2023-03-01",
    is_current: false,
    location: "Remote",
    description:
      "Resolved complex customer technical support cases escalated by Technical Support Analysts via phone and email, leading to increased customer satisfaction and reduced resolution time. Contributed to the creation of comprehensive articles on product usage and troubleshooting to build a robust knowledge base, resulting in decreased support requests. Provided real-time technical guidance to Technical Support Analysts, fostering team development and enhancing overall support efficiency while analyzing recurring issues to drive product improvements.",
    skills: [
      "Technical Support",
      "Customer Service",
      "Technical Documentation",
      "Team Leadership",
      "Knowledge Management",
      "Troubleshooting",
      "Zendesk",
      "Jira",
      "Product Knowledge",
      "Communication",
    ],
  },
  {
    id: 3,
    title: "Technical Support Analyst",
    company: "Convoso Inc.",
    start_date: "2021-07-01",
    end_date: "2022-05-01",
    is_current: false,
    location: "Remote",
    description:
      "Responded to customer inquiries via phone, chat, and email, ensuring quick and effective first-level technical support to address technical issues and concerns. Documented all customer interactions and solutions in the ticketing system, enabling seamless escalations and follow-ups while maintaining high customer satisfaction scores. Identified recurring issues and escalated them to higher-level support teams to drive product improvement and reduce repetitive tickets.",
    skills: [
      "Technical Support",
      "Customer Service",
      "Troubleshooting",
      "Ticketing Systems",
      "Zendesk",
      "Communication",
      "Problem Solving",
      "Documentation",
      "Time Management",
    ],
  },
  {
    id: 4,
    title: "Level 2 Technical Support Engineer",
    company: "Ascent Solutions Pte Ltd",
    start_date: "2020-09-01",
    end_date: "2021-07-01",
    is_current: false,
    location: "Remote",
    description:
      "Provided second-level technical support for GPS tracking solutions (Wialon, Flespi), addressing queries via phone and email, which improved customer resolution times and satisfaction. Documented issue details and troubleshooting steps in Zoho Desk to maintain accurate support records, resulting in better tracking and faster issue resolution. Conducted root cause analysis for recurring issues, providing recommendations to enhance system stability and reduce support tickets. Assisted in deploying new software updates, ensuring seamless integration and minimal disruption for end-users, while troubleshooting IP Phone/Softphone configurations and PBX systems.",
    skills: [
      "GPS Tracking Solutions",
      "Wialon",
      "Flespi",
      "Zoho Desk",
      "Root Cause Analysis",
      "IP Phone Configuration",
      "PBX Troubleshooting",
      "Software Deployment",
      "Technical Documentation",
      "System Integration",
      "Networking",
      "Wireshark",
    ],
  },
  {
    id: 5,
    title: "Technical Support Engineer 2",
    company: "Emerson Electric Asia, LTD ROHQ",
    start_date: "2017-11-01",
    end_date: "2020-02-01",
    is_current: false,
    location: "Manila, Philippines",
    description:
      "Provided second-level technical support for GPS tracking and telecommunications systems via phone and email, resulting in improved customer resolution times and satisfaction. Documented comprehensive issue details and troubleshooting procedures in Zoho Desk to maintain accurate support records, leading to better tracking and faster issue resolution. Conducted training sessions for new hires, equipping them with the skills and knowledge needed for effective technical support. Collaborated with cross-functional teams to identify and resolve hardware and software compatibility issues, improving overall system performance, while performing network diagnostics using tools like Wireshark and Putty for advanced troubleshooting.",
    skills: [
      "GPS Tracking Systems",
      "Telecommunications",
      "Hardware Support",
      "Technical Training",
      "Zoho Desk",
      "Cross-functional Collaboration",
      "System Integration",
      "Network Diagnostics",
      "Wireshark",
      "Putty",
      "PBX Systems",
      "VoIP Configuration",
    ],
  },
]

const mockEducation = [
  {
    id: 1,
    degree: "Software Development Diploma",
    field_of_study: "Software Development",
    school: "Southern Alberta Institute of Technology",
    start_date: "2024-01-01",
    end_date: "2025-12-01",
    is_current: true,
    location: "Calgary, AB",
    achievements: ["Expected Graduation: December 2025", "Focus on Full-Stack Development", "Hands-on Project Experience"],
    description:
      "Comprehensive diploma program focused on modern software development practices, covering full-stack web development, mobile application development, database management, and software engineering principles. Gained hands-on experience with industry-standard tools and technologies including React, React Native, .NET MAUI, Python, C#, MySQL, PostgreSQL, and modern development workflows using Git, Jira, and Agile methodologies.",
  },
  {
    id: 2,
    degree: "Bachelor of Science in Electronics Engineering",
    field_of_study: "Electronics Engineering",
    school: "Rizal Technological University",
    start_date: "2012-06-01",
    end_date: "2017-05-01",
    is_current: false,
    location: "Manila, Philippines",
    achievements: [
      "Dean Lister (2014-2016)",
      "Emerson Scholarship Program",
      "Bobby Eusebio Scholarship Program",
      "College of Engineering and Industrial Technology Business Manager",
      "Broadkast ng Talino 2017 (Top 20 Finalist)",
    ],
    description:
      "Comprehensive engineering degree program specializing in electronics systems design, circuit analysis, microcontroller programming, and telecommunications. Developed strong analytical and problem-solving skills through rigorous coursework in mathematics, physics, and engineering principles. Recognized for academic excellence as a consistent Dean Lister and recipient of prestigious scholarship programs. Served as Business Manager for the College of Engineering and Industrial Technology, demonstrating leadership and organizational capabilities.",
  },
]

const mockCertifications = [
  {
    id: 1,
    name: "Cypress End-to-End Testing",
    issuing_organization: "Udemy",
    issue_date: "2024-12-01",
    expiry_date: null,
    description: "Comprehensive course on automated testing using Cypress framework for web applications.",
  },
  {
    id: 2,
    name: "Figma Essential Training",
    issuing_organization: "LinkedIn Learning",
    issue_date: "2024-11-01",
    expiry_date: null,
    description: "Professional training on UI/UX design using Figma, covering design systems and prototyping.",
  },
  {
    id: 3,
    name: "Google IT Support Professional Certificate",
    issuing_organization: "Google",
    issue_date: "2022-10-01",
    expiry_date: null,
    description:
      "Comprehensive IT support certification covering troubleshooting, customer service, networking, operating systems, system administration, and security.",
  },
  {
    id: 4,
    name: "Electronics Engineer License",
    issuing_organization: "Professional Regulation Commission (Philippines)",
    issue_date: "2017-11-01",
    expiry_date: null,
    description: "Professional engineering license for electronics engineering practice in the Philippines.",
  },
]

export const dataService = {
  // Projects - Fetch from API (database) with fallback to mock data
  async getProjects() {
    try {
      const res = await fetch("/api/projects", { cache: "no-store" })
      if (!res.ok) throw new Error("Failed to fetch projects")
      return await res.json()
    } catch (e) {
      console.error("Error fetching projects, using mock data:", e)
      return mockProjects
    }
  },
  async getFeaturedProjects() {
    try {
      const res = await fetch("/api/projects?featured=true", { cache: "no-store" })
      if (!res.ok) throw new Error("Failed to fetch featured projects")
      return await res.json()
    } catch (e) {
      console.error("Error fetching featured projects, using mock data:", e)
      return mockProjects.filter((p) => p.featured)
    }
  },
  async getProjectById(id: string) {
    try {
      const res = await fetch(`/api/projects?id=${id}`, { cache: "no-store" })
      if (!res.ok) throw new Error("Failed to fetch project")
      return await res.json()
    } catch (e) {
      console.error("Error fetching project, using mock data:", e)
      return mockProjects.find((p) => p.id === id)
    }
  },
  async getProjectsByCategory(category: string) {
    try {
      const res = await fetch(`/api/projects?category=${encodeURIComponent(category)}`, { cache: "no-store" })
      if (!res.ok) throw new Error("Failed to fetch projects by category")
      return await res.json()
    } catch (e) {
      console.error("Error fetching projects by category, using mock data:", e)
      return mockProjects.filter((p) => p.category === category)
    }
  },

  // Feedback via API endpoints
  async getApprovedFeedback() {
    try {
      const res = await fetch("/api/feedback", { cache: "no-store" })
      if (!res.ok) throw new Error("Failed to fetch feedback")
      return (await res.json()) as any[]
    } catch (e) {
      console.error("Error fetching approved feedback:", e)
      return mockFeedback.filter((f) => f.approved)
    }
  },
  async submitFeedback(feedback: {
    name: string
    email: string
    company?: string
    position?: string
    message: string
    rating: number
  }) {
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(feedback),
      })
      if (!res.ok) throw new Error("Failed to submit feedback")
      const data = await res.json()
      return { success: true, message: "Feedback submitted successfully!", id: data.id }
    } catch (e) {
      console.error("Error submitting feedback:", e)
      return { success: false, message: "Failed to submit feedback. Please try again." }
    }
  },

  // Skills - Fetch from API (database) with fallback to mock data
  async getSkillCategories() {
    try {
      const res = await fetch("/api/skills", { cache: "no-store" })
      if (!res.ok) throw new Error("Failed to fetch skills")
      return await res.json()
    } catch (e) {
      console.error("Error fetching skills, using mock data:", e)
      return mockSkillCategories
    }
  },
  async getSkillsByCategory(categoryId: number) {
    try {
      const categories = await this.getAllSkillsWithCategories()
      const category = categories.find((c: any) => c.id === categoryId)
      return category?.skills || []
    } catch (e) {
      console.error("Error fetching skills by category:", e)
      return mockSkills.filter((s) => s.category_id === categoryId)
    }
  },
  async getAllSkillsWithCategories() {
    try {
      const res = await fetch("/api/skills", { cache: "no-store" })
      if (!res.ok) throw new Error("Failed to fetch skills")
      return await res.json()
    } catch (e) {
      console.error("Error fetching skills, using mock data:", e)
      return mockSkillCategories.map((c) => ({ ...c, skills: mockSkills.filter((s) => s.category_id === c.id) }))
    }
  },
  async getTools() {
    try {
      const res = await fetch("/api/tools", { cache: "no-store" })
      if (!res.ok) throw new Error("Failed to fetch tools")
      return await res.json()
    } catch (e) {
      console.error("Error fetching tools, using mock data:", e)
      return mockTools
    }
  },

  // Experience - Fetch from API (database) with fallback to mock data
  async getExperience() {
    try {
      const res = await fetch("/api/experience", { cache: "no-store" })
      if (!res.ok) throw new Error("Failed to fetch experience")
      return await res.json()
    } catch (e) {
      console.error("Error fetching experience, using mock data:", e)
      return mockExperience
    }
  },
  async getCurrentExperience() {
    try {
      const res = await fetch("/api/experience?current=true", { cache: "no-store" })
      if (!res.ok) throw new Error("Failed to fetch current experience")
      return await res.json()
    } catch (e) {
      console.error("Error fetching current experience, using mock data:", e)
      return mockExperience.filter((e) => e.is_current)
    }
  },

  // Education - Fetch from API (database) with fallback to mock data
  async getEducation() {
    try {
      const res = await fetch("/api/education", { cache: "no-store" })
      if (!res.ok) throw new Error("Failed to fetch education")
      return await res.json()
    } catch (e) {
      console.error("Error fetching education, using mock data:", e)
      return mockEducation
    }
  },

  // Certifications - Fetch from API (database) with fallback to mock data
  async getCertifications() {
    try {
      const res = await fetch("/api/certifications", { cache: "no-store" })
      if (!res.ok) throw new Error("Failed to fetch certifications")
      return await res.json()
    } catch (e) {
      console.error("Error fetching certifications, using mock data:", e)
      return mockCertifications
    }
  },
  async getActiveCertifications() {
    try {
      const res = await fetch("/api/certifications?active=true", { cache: "no-store" })
      if (!res.ok) throw new Error("Failed to fetch active certifications")
      return await res.json()
    } catch (e) {
      console.error("Error fetching active certifications, using mock data:", e)
      return mockCertifications.filter((c) => !c.expiry_date || new Date(c.expiry_date) > new Date())
    }
  },
}
