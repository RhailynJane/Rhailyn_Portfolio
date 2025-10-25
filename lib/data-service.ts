// Data service layer (Supabase removed). Returns mock data for most resources and
// uses API endpoints for feedback operations.

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
}

const mockProjects: Project[] = [
  {
    id: "1",
    title: "SafeSpace Mobile App",
    description: "Mobile application prototype for safe space community platform",
    long_description:
      "Mobile application prototype designed for safe space community platform with community safety features and user-friendly interface.",
    technologies: ["React Native", "JavaScript", "Mobile Development"],
    category: "Mobile Application",
    github_url: null,
    demo_url: null,
    video_url: null,
    image_url: "/safespace-mobile.png",
    figma_url:
      "https://www.figma.com/design/4fuzNHukJNygOXylaNqjct/Mobile?node-id=0-1&t=GuSJCPJG8kJr0xwn-1",
    featured: true,
    status: "completed",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
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
  { id: 1, title: "Programming & Development", icon: "Code", color: "text-blue-500", display_order: 1 },
  { id: 2, title: "Testing & QA", icon: "Code", color: "text-red-500", display_order: 2 },
]

const mockSkills = [
  { id: 1, category_id: 1, name: "JavaScript", level: 95, display_order: 1 },
  { id: 2, category_id: 1, name: "Python", level: 85, display_order: 2 },
  { id: 3, category_id: 1, name: "C#", level: 80, display_order: 3 },
  { id: 4, category_id: 1, name: "HTML5", level: 95, display_order: 4 },
  { id: 5, category_id: 1, name: "CSS3", level: 90, display_order: 5 },
  { id: 6, category_id: 1, name: "React", level: 92, display_order: 6 },
  { id: 7, category_id: 1, name: "Node.js", level: 88, display_order: 7 },
  { id: 8, category_id: 1, name: "TypeScript", level: 90, display_order: 8 },
  { id: 9, category_id: 1, name: "React Native", level: 85, display_order: 9 },
  { id: 10, category_id: 2, name: "Selenium", level: 85, display_order: 1 },
  { id: 11, category_id: 2, name: "Cypress", level: 88, display_order: 2 },
  { id: 12, category_id: 2, name: "Postman", level: 90, display_order: 3 },
]

const mockTools = [
  "Git",
  "Jira",
  "Figma",
  "PostgreSQL",
  "WatermelonDB",
  "Prisma",
  "React Native",
  "ESLint",
  "Firebase",
  ".NET MAUI",
  "MySQL",
  "Selenium",
  "Cypress",
  "Postman",
  "Jenkins",
  "Confluence",
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
      "Lead quality assurance initiatives by executing comprehensive testing methodologies including regression, smoke, sanity, and performance testing to identify critical defects and ensure high-quality software delivery. Collaborate closely with developers to understand requirements and design specifications while creating detailed test plans and cases that enhance testing process consistency. Work with the Product Team to review user stories and acceptance criteria, ensuring product alignment with business requirements and improving overall communication and project outcomes.",
    skills: [
      "Manual Testing",
      "Regression Testing",
      "Smoke Testing",
      "Sanity Testing",
      "Performance Testing",
      "Test Planning",
      "Selenium",
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
    end_date: "2026-03-01",
    is_current: true,
    location: "Calgary, AB",
    achievements: ["Expected Graduation: March 2026", "Focus on Full-Stack Development", "Hands-on Project Experience"],
    description:
      "Comprehensive program covering modern software development practices, full-stack web development, and industry-standard tools and technologies.",
  },
  {
    id: 2,
    degree: "Bachelor of Science in Electronics Engineering",
    field_of_study: "Electronics Engineering",
    school: "Rizal Technological University",
    start_date: "2012-06-01",
    end_date: "2017-05-01",
    is_current: false,
    location: "Philippines",
    achievements: [
      "Dean Lister (2014-2016)",
      "Emerson Scholarship Program",
      "Bobby Eusebio Scholarship Program",
      "College of Engineering and Industrial Technology Business Manager",
    ],
    description:
      "Comprehensive engineering program with focus on electronics systems, circuit design, and engineering principles.",
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
  // Projects
  async getProjects() {
    return mockProjects
  },
  async getFeaturedProjects() {
    return mockProjects.filter((p) => p.featured)
  },
  async getProjectById(id: string) {
    return mockProjects.find((p) => p.id === id)
  },
  async getProjectsByCategory(category: string) {
    return mockProjects.filter((p) => p.category === category)
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

  // Skills
  async getSkillCategories() {
    return mockSkillCategories
  },
  async getSkillsByCategory(categoryId: number) {
    return mockSkills.filter((s) => s.category_id === categoryId)
  },
  async getAllSkillsWithCategories() {
    return mockSkillCategories.map((c) => ({ ...c, skills: mockSkills.filter((s) => s.category_id === c.id) }))
  },
  async getTools() {
    return mockTools
  },

  // Experience
  async getExperience() {
    return mockExperience
  },
  async getCurrentExperience() {
    return mockExperience.filter((e) => e.is_current)
  },

  // Education
  async getEducation() {
    return mockEducation
  },

  // Certifications
  async getCertifications() {
    return mockCertifications
  },
  async getActiveCertifications() {
    return mockCertifications.filter((c) => !c.expiry_date || new Date(c.expiry_date) > new Date())
  },
}
