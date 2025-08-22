// Data service layer for projects, blogs, feedback, experience, education, and certifications
// This can easily be switched to use Supabase when integrated

// Mock data that matches the database schema
const mockProjects = [
  {
    id: "1",
    title: "Library Management Application",
    description: "A comprehensive library management system built with Python",
    long_description:
      "Designed and implemented core functionalities, including book search by title, author, ISBN, or genre. Developed borrowing and returning features with availability tracking to manage book inventory. Built with Object-Oriented Programming principles and file handling for persistent storage.",
    technologies: ["Python", "OOP", "File Handling", "CSV"],
    category: "Desktop Application",
    github_url: "https://github.com/ConaRhai/library_management_app.git",
    demo_url: null,
    video_url: null,
    image_url: "/library-management-system.png",
    featured: true,
    status: "completed",
    created_at: "2024-08-01T00:00:00Z",
    updated_at: "2024-08-01T00:00:00Z",
  },
  {
    id: "2",
    title: "Dog Care Project",
    description: "Responsive web application for dog care services",
    long_description:
      "Designed and implemented responsive web pages using HTML, CSS, and JavaScript, ensuring cross-device compatibility. Created an engaging user interface with dynamic elements for an interactive user experience.",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    category: "Web Application",
    github_url: "https://github.com/RhailynJane/Project_DogCare.git",
    demo_url: null,
    video_url: null,
    image_url: "/dog-care-website.png",
    featured: true,
    status: "completed",
    created_at: "2024-08-01T00:00:00Z",
    updated_at: "2024-08-01T00:00:00Z",
  },
  {
    id: "3",
    title: "Travel Management Application",
    description: "Cross-platform travel management solution",
    long_description:
      "Designed and implemented core modules for managing travel reservations and itineraries. Developed a responsive UI using .NET MAUI for cross-platform functionality.",
    technologies: ["C#", ".NET MAUI", "Cross-platform"],
    category: "Mobile Application",
    github_url: "https://github.com/RhailynJane/TravelessApp.git",
    demo_url: null,
    video_url: null,
    image_url: "/travel-management-app.png",
    featured: false,
    status: "completed",
    created_at: "2024-10-01T00:00:00Z",
    updated_at: "2024-10-01T00:00:00Z",
  },
  {
    id: "4",
    title: "House Utility Management System",
    description: "Real-time utility tracking application",
    long_description:
      "Developed a dynamic web interface using HTML, CSS, and C# for real-time utility tracking. Integrated SQL Server Management Studio for data storage and management. Built back-end functionality with .NET MAUI to ensure efficient data processing.",
    technologies: ["HTML", "CSS", "C#", ".NET MAUI", "SQL Server"],
    category: "Web Application",
    github_url: "https://github.com/RhailynJane/HouseUtilityManagementSystem.git",
    demo_url: null,
    video_url: null,
    image_url: "/placeholder-2b24u.png",
    featured: false,
    status: "completed",
    created_at: "2024-11-01T00:00:00Z",
    updated_at: "2024-11-01T00:00:00Z",
  },
  {
    id: "5",
    title: "Rental Management System",
    description: "Web-based rental property management",
    long_description:
      "Designed and implemented a web-based interface using Blazor and C# and MySQL database schemas for storing rental and tenant information. Modeled system architecture using Software Ideas Modeler for efficient project planning.",
    technologies: ["Blazor", "C#", "MySQL", "Software Ideas Modeler"],
    category: "Web Application",
    github_url: "https://github.com/RhailynJane/RentalManagementSystem.git",
    demo_url: null,
    video_url: null,
    image_url: "/rental-management-interface.png",
    featured: false,
    status: "completed",
    created_at: "2024-11-01T00:00:00Z",
    updated_at: "2024-11-01T00:00:00Z",
  },
  {
    id: "6",
    title: "E-Learning Platform for Coders",
    description: "Interactive learning platform design",
    long_description:
      "Designed and developed an engaging platform for coders to access tutorials and challenges. Created interactive prototypes and UI layouts using Figma with focus on user experience and accessibility.",
    technologies: ["Figma", "UX/UI Design", "Prototyping"],
    category: "Design Project",
    github_url: "#",
    demo_url: null,
    video_url: null,
    image_url: "/e-learning-platform.png",
    featured: false,
    status: "completed",
    created_at: "2024-11-01T00:00:00Z",
    updated_at: "2024-11-01T00:00:00Z",
  },
]

const mockBlogs = [
  {
    id: "1",
    title: "Getting Started with React Testing",
    excerpt: "Learn the fundamentals of testing React components with modern tools and best practices.",
    content: `Testing is a crucial part of React development. In this comprehensive guide, we'll explore different testing strategies, from unit tests to integration tests. We'll cover Jest, React Testing Library, and best practices for writing maintainable tests that give you confidence in your code.

## Why Testing Matters

Testing helps ensure your components work as expected and prevents regressions when you make changes. It also serves as documentation for how your components should behave.

## Setting Up Your Testing Environment

First, let's set up Jest and React Testing Library...`,
    author: "Rhailyn Jane Cona",
    category: "React",
    tags: ["React", "Testing", "Jest", "Best Practices"],
    image_url: "/react-testing-code.png",
    featured: true,
    published: true,
    reading_time: 8,
    created_at: "2024-01-15T00:00:00Z",
    updated_at: "2024-01-15T00:00:00Z",
  },
  {
    id: "2",
    title: "Mastering TypeScript in 2024",
    excerpt: "Advanced TypeScript patterns and techniques for building robust applications.",
    content: `TypeScript has evolved significantly, and 2024 brings new features and patterns that can make your code more robust and maintainable. Let's explore advanced TypeScript techniques that every developer should know.

## Advanced Type Patterns

We'll cover conditional types, mapped types, and template literal types that can help you build more type-safe applications.

## Real-World Examples

Through practical examples, you'll learn how to apply these patterns in your daily development work...`,
    author: "Rhailyn Jane Cona",
    category: "TypeScript",
    tags: ["TypeScript", "JavaScript", "Development"],
    image_url: "/typescript-code-editor.png",
    featured: true,
    published: true,
    reading_time: 12,
    created_at: "2024-02-01T00:00:00Z",
    updated_at: "2024-02-01T00:00:00Z",
  },
  {
    id: "3",
    title: "Building Scalable APIs with Node.js",
    excerpt: "Best practices for creating maintainable and performant backend services.",
    content: `Creating scalable APIs requires careful planning and implementation. In this post, we'll explore architectural patterns, performance optimization, and security best practices for Node.js APIs.

## API Design Principles

Good API design starts with understanding your users and their needs. We'll cover RESTful principles and when to consider GraphQL.

## Performance Optimization

Learn about caching strategies, database optimization, and monitoring techniques...`,
    author: "Rhailyn Jane Cona",
    category: "Backend",
    tags: ["Node.js", "API", "Performance", "Architecture"],
    image_url: "/nodejs-api-architecture.png",
    featured: false,
    published: true,
    reading_time: 10,
    created_at: "2024-02-15T00:00:00Z",
    updated_at: "2024-02-15T00:00:00Z",
  },
  {
    id: "4",
    title: "The Future of Web Development",
    excerpt: "Exploring emerging trends and technologies shaping the web development landscape.",
    content: `Web development is constantly evolving. Let's look at the trends and technologies that are shaping the future of how we build web applications.

## Emerging Technologies

From WebAssembly to edge computing, new technologies are changing how we think about web development.

## Developer Experience

Tools and frameworks are focusing more on developer experience, making it easier to build complex applications...`,
    author: "Rhailyn Jane Cona",
    category: "Web Development",
    tags: ["Trends", "Future", "Technology"],
    image_url: "/future-web-development.png",
    featured: false,
    published: true,
    reading_time: 6,
    created_at: "2024-03-01T00:00:00Z",
    updated_at: "2024-03-01T00:00:00Z",
  },
]

const mockFeedback = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah.j@techcorp.com",
    company: "TechCorp Solutions",
    position: "Senior Developer",
    message:
      "Rhailyn is an exceptional QA engineer with a keen eye for detail. Her testing strategies have significantly improved our product quality.",
    rating: 5,
    approved: true,
    created_at: "2024-01-10T00:00:00Z",
    updated_at: "2024-01-10T00:00:00Z",
  },
  {
    id: "2",
    name: "Michael Chen",
    email: "mchen@innovate.io",
    company: "Innovate Labs",
    position: "Product Manager",
    message:
      "Working with Rhailyn has been a pleasure. Her technical expertise and collaborative approach make her a valuable team member.",
    rating: 5,
    approved: true,
    created_at: "2024-01-20T00:00:00Z",
    updated_at: "2024-01-20T00:00:00Z",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    email: "emily.r@startup.com",
    company: "StartupXYZ",
    position: "CTO",
    message:
      "Rhailyn's ability to identify critical issues early in the development cycle has saved us countless hours and resources.",
    rating: 4,
    approved: true,
    created_at: "2024-02-01T00:00:00Z",
    updated_at: "2024-02-01T00:00:00Z",
  },
]

const mockSkillCategories = [
  {
    id: 1,
    title: "Frontend Development",
    icon: "Code",
    color: "text-blue-500",
    display_order: 1,
  },
  {
    id: 2,
    title: "Backend Development",
    icon: "Database",
    color: "text-green-500",
    display_order: 2,
  },
  {
    id: 3,
    title: "Design & UX",
    icon: "Palette",
    color: "text-purple-500",
    display_order: 3,
  },
  {
    id: 4,
    title: "Leadership & Management",
    icon: "Users",
    color: "text-orange-500",
    display_order: 4,
  },
]

const mockSkills = [
  { id: 1, category_id: 1, name: "React", level: 95, display_order: 1 },
  { id: 2, category_id: 1, name: "TypeScript", level: 90, display_order: 2 },
  { id: 3, category_id: 1, name: "Tailwind CSS", level: 92, display_order: 3 },
  { id: 4, category_id: 1, name: "JavaScript", level: 94, display_order: 4 },
  { id: 5, category_id: 2, name: "Python/Django", level: 78, display_order: 1 },
  { id: 6, category_id: 2, name: "SQL", level: 75, display_order: 2 },
  { id: 7, category_id: 2, name: "MySQL", level: 82, display_order: 3 },
  { id: 8, category_id: 2, name: "REST APIs", level: 90, display_order: 4 },
  { id: 9, category_id: 2, name: "ADK", level: 50, display_order: 5 },
  { id: 10, category_id: 3, name: "Figma", level: 92, display_order: 1 },
  { id: 11, category_id: 3, name: "UI Design", level: 88, display_order: 2 },
  { id: 12, category_id: 3, name: "UX Research", level: 85, display_order: 3 },
  { id: 13, category_id: 3, name: "Prototyping", level: 87, display_order: 4 },
  { id: 14, category_id: 4, name: "Team Leadership", level: 93, display_order: 1 },
  { id: 15, category_id: 4, name: "Project Management", level: 90, display_order: 2 },
  { id: 16, category_id: 4, name: "Agile/Scrum", level: 88, display_order: 3 },
  { id: 17, category_id: 4, name: "Strategic Planning", level: 85, display_order: 4 },
]

const mockTools = [
  "Git",
  "Docker",
  "Google Cloud",
  "Jira",
  "VS Code",
  "Python",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "ADK",
  "Vercel",
  "ClickUp",
  "Figma",
  "C#",
  "Java",
  "Laravel",
]

const mockExperience = [
  {
    id: 1,
    title: "Software QA Engineer",
    company: "Convoso Inc.",
    start_date: "2017-01-01",
    end_date: null,
    is_current: true,
    location: "Remote",
    description:
      "Collaborated with developers to understand requirements and design specifications, improving communication and project outcomes.",
    responsibilities: [
      "Executed testing methodologies including regression, smoke testing, sanity, and performance testing",
      "Created test plans and cases that enhance testing process consistency",
      "Worked closely with Product Team to review user stories and acceptance criteria",
    ],
    skills: ["Manual Testing", "Regression Testing", "Smoke Testing", "Performance Testing", "Test Planning"],
    achievements: [
      "Improved software quality through comprehensive testing strategies",
      "Enhanced team communication and project outcomes",
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
      "Resolved customer technical support cases escalated by Technical Support Analysts, leading to increased customer satisfaction.",
    responsibilities: [
      "Resolved customer technical support cases via phone and email",
      "Created articles on product usage and troubleshooting",
      "Provided real-time technical guidance to Technical Support Analysts",
    ],
    skills: ["Customer Support", "Technical Documentation", "Team Leadership", "Knowledge Management"],
    achievements: [
      "Increased customer satisfaction through effective case resolution",
      "Reduced support requests through comprehensive documentation",
    ],
  },
  {
    id: 3,
    title: "Technical Support Engineer 2",
    company: "Emerson Electric Asia, LTD ROHQ",
    start_date: "2017-11-01",
    end_date: "2020-02-01",
    is_current: false,
    location: "Philippines",
    description: "Provided comprehensive technical support and training for hardware and software systems.",
    responsibilities: [
      "Provided second-level technical support via phone and email",
      "Conducted training sessions for new hires",
      "Collaborated with cross-functional teams on compatibility issues",
    ],
    skills: ["Technical Training", "System Integration", "Cross-functional Collaboration", "Hardware Support"],
    achievements: [
      "Successfully trained multiple cohorts of new technical support staff",
      "Improved overall system performance through cross-team collaboration",
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

import { createClient } from "./supabase/client"

// Data service functions for Supabase database
export const dataService = {
  // Projects
  async getProjects() {
    try {
      const supabase = createClient()
      const { data: projects, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false })

      if (error) {
        if (error.message.includes("Could not find the table")) {
          console.log("[ ] Projects table not found, using mock data")
          return mockProjects
        }
        throw error
      }
      return projects || []
    } catch (error) {
      console.error("[ ] Error fetching projects:", error)
      return mockProjects
    }
  },

  async getFeaturedProjects() {
    try {
      const supabase = createClient()
      const { data: projects, error } = await supabase
        .from("projects")
        .select("*")
        .eq("featured", true)
        .order("created_at", { ascending: false })

      if (error) {
        if (error.message.includes("Could not find the table")) {
          console.log("[ ] Projects table not found, using mock data")
          return mockProjects.filter((project) => project.featured)
        }
        throw error
      }
      return projects || []
    } catch (error) {
      console.error("[ ] Error fetching featured projects:", error)
      return mockProjects.filter((project) => project.featured)
    }
  },

  async getProjectById(id: string) {
    try {
      const supabase = createClient()
      const { data: project, error } = await supabase.from("projects").select("*").eq("id", id).single()

      if (error) {
        if (error.message.includes("Could not find the table")) {
          console.log("[ ] Projects table not found, using mock data")
          return mockProjects.find((project) => project.id === id)
        }
        throw error
      }
      return project
    } catch (error) {
      console.error("[ ] Error fetching project by ID:", error)
      return mockProjects.find((project) => project.id === id)
    }
  },

  async getProjectsByCategory(category: string) {
    try {
      const supabase = createClient()
      const { data: projects, error } = await supabase
        .from("projects")
        .select("*")
        .eq("category", category)
        .order("created_at", { ascending: false })

      if (error) {
        if (error.message.includes("Could not find the table")) {
          console.log("[ ] Projects table not found, using mock data")
          return mockProjects.filter((project) => project.category === category)
        }
        throw error
      }
      return projects || []
    } catch (error) {
      console.error("[ ] Error fetching projects by category:", error)
      return mockProjects.filter((project) => project.category === category)
    }
  },

  // Blogs
  async getBlogs() {
    try {
      const supabase = createClient()
      const { data: blogs, error } = await supabase
        .from("blogs")
        .select("*")
        .eq("published", true)
        .order("created_at", { ascending: false })

      if (error) {
        if (error.message.includes("Could not find the table")) {
          console.log("[ ] Blogs table not found, using mock data")
          return mockBlogs.filter((blog) => blog.published)
        }
        throw error
      }
      return blogs || []
    } catch (error) {
      console.error("[ ] Error fetching blogs:", error)
      return mockBlogs.filter((blog) => blog.published)
    }
  },

  async getFeaturedBlogs() {
    try {
      const supabase = createClient()
      const { data: blogs, error } = await supabase
        .from("blogs")
        .select("*")
        .eq("featured", true)
        .eq("published", true)
        .order("created_at", { ascending: false })

      if (error) {
        if (error.message.includes("Could not find the table")) {
          console.log("[ ] Blogs table not found, using mock data")
          return mockBlogs.filter((blog) => blog.featured && blog.published)
        }
        throw error
      }
      return blogs || []
    } catch (error) {
      console.error("[ ] Error fetching featured blogs:", error)
      return mockBlogs.filter((blog) => blog.featured && blog.published)
    }
  },

  async getBlogById(id: string) {
    try {
      const supabase = createClient()
      const { data: blog, error } = await supabase.from("blogs").select("*").eq("id", id).single()

      if (error) {
        if (error.message.includes("Could not find the table")) {
          console.log("[ ] Blogs table not found, using mock data")
          return mockBlogs.find((blog) => blog.id === id)
        }
        throw error
      }
      return blog
    } catch (error) {
      console.error("[ ] Error fetching blog by ID:", error)
      return mockBlogs.find((blog) => blog.id === id)
    }
  },

  async getBlogsByCategory(category: string) {
    try {
      const supabase = createClient()
      const { data: blogs, error } = await supabase
        .from("blogs")
        .select("*")
        .eq("category", category)
        .eq("published", true)
        .order("created_at", { ascending: false })

      if (error) {
        if (error.message.includes("Could not find the table")) {
          console.log("[ ] Blogs table not found, using mock data")
          return mockBlogs.filter((blog) => blog.category === category && blog.published)
        }
        throw error
      }
      return blogs || []
    } catch (error) {
      console.error("[ ] Error fetching blogs by category:", error)
      return mockBlogs.filter((blog) => blog.category === category && blog.published)
    }
  },

  async searchBlogs(query: string) {
    try {
      const supabase = createClient()
      const { data: blogs, error } = await supabase
        .from("blogs")
        .select("*")
        .eq("published", true)
        .or(`title.ilike.%${query}%,excerpt.ilike.%${query}%,content.ilike.%${query}%`)
        .order("created_at", { ascending: false })

      if (error) {
        if (error.message.includes("Could not find the table")) {
          console.log("[ ] Blogs table not found, using mock data")
          const lowercaseQuery = query.toLowerCase()
          return mockBlogs.filter(
            (blog) =>
              blog.published &&
              (blog.title.toLowerCase().includes(lowercaseQuery) ||
                blog.excerpt.toLowerCase().includes(lowercaseQuery) ||
                blog.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))),
          )
        }
        throw error
      }
      return blogs || []
    } catch (error) {
      console.error("[ ] Error searching blogs:", error)
      const lowercaseQuery = query.toLowerCase()
      return mockBlogs.filter(
        (blog) =>
          blog.published &&
          (blog.title.toLowerCase().includes(lowercaseQuery) ||
            blog.excerpt.toLowerCase().includes(lowercaseQuery) ||
            blog.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))),
      )
    }
  },

  // Feedback
  async getApprovedFeedback() {
    try {
      const supabase = createClient()
      const { data: feedback, error } = await supabase
        .from("feedback")
        .select("*")
        .eq("approved", true)
        .order("created_at", { ascending: false })

      if (error) throw error
      return feedback || []
    } catch (error) {
      console.error("[ ] Error fetching approved feedback:", error)
      return mockFeedback.filter((feedback) => feedback.approved)
    }
  },

  async getAllFeedback() {
    try {
      const supabase = createClient()
      const { data: feedback, error } = await supabase
        .from("feedback")
        .select("*")
        .order("created_at", { ascending: false })

      if (error) throw error
      return feedback || []
    } catch (error) {
      console.error("[ ] Error fetching all feedback:", error)
      return mockFeedback
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
      const supabase = createClient()
      const { data, error } = await supabase
        .from("feedback")
        .insert([
          {
            name: feedback.name,
            email: feedback.email,
            company: feedback.company || null,
            position: feedback.position || null,
            message: feedback.message,
            rating: feedback.rating,
            approved: false,
          },
        ])
        .select()
        .single()

      if (error) throw error
      return { success: true, message: "Feedback submitted successfully!", id: data.id }
    } catch (error) {
      console.error("[ ] Error submitting feedback:", error)
      return { success: false, message: "Failed to submit feedback. Please try again." }
    }
  },

  async approveFeedback(id: string) {
    try {
      const supabase = createClient()
      const { error } = await supabase.from("feedback").update({ approved: true }).eq("id", id)

      if (error) throw error
      return { success: true }
    } catch (error) {
      console.error("[ ] Error approving feedback:", error)
      return { success: false }
    }
  },

  async deleteFeedback(id: string) {
    try {
      const supabase = createClient()
      const { error } = await supabase.from("feedback").delete().eq("id", id)

      if (error) throw error
      return { success: true }
    } catch (error) {
      console.error("[ ] Error deleting feedback:", error)
      return { success: false }
    }
  },

  // Skills
  async getSkillCategories() {
    try {
      const supabase = createClient()
      const { data: categories, error } = await supabase
        .from("skill_categories")
        .select("*")
        .order("display_order", { ascending: true })

      if (error) {
        if (error.message.includes("Could not find the table")) {
          console.log("[ ] Skill categories table not found, using mock data")
          return mockSkillCategories
        }
        throw error
      }
      return categories || []
    } catch (error) {
      console.error("[ ] Error fetching skill categories:", error)
      return mockSkillCategories
    }
  },

  async getSkillsByCategory(categoryId: number) {
    try {
      const supabase = createClient()
      const { data: skills, error } = await supabase
        .from("skills")
        .select("*")
        .eq("category_id", categoryId)
        .order("display_order", { ascending: true })

      if (error) {
        if (error.message.includes("Could not find the table")) {
          console.log("[ ] Skills table not found, using mock data")
          return mockSkills.filter((skill) => skill.category_id === categoryId)
        }
        throw error
      }
      return skills || []
    } catch (error) {
      console.error("[ ] Error fetching skills by category:", error)
      return mockSkills.filter((skill) => skill.category_id === categoryId)
    }
  },

  async getAllSkillsWithCategories() {
    try {
      const categories = await this.getSkillCategories()
      const skillsWithCategories = await Promise.all(
        categories.map(async (category) => {
          const skills = await this.getSkillsByCategory(category.id)
          return {
            ...category,
            skills,
          }
        }),
      )
      return skillsWithCategories
    } catch (error) {
      console.error("[ ] Error fetching skills with categories:", error)
      return mockSkillCategories.map((category) => ({
        ...category,
        skills: mockSkills.filter((skill) => skill.category_id === category.id),
      }))
    }
  },

  async getTools() {
    try {
      const supabase = createClient()
      const { data: tools, error } = await supabase
        .from("tools")
        .select("name")
        .order("display_order", { ascending: true })

      if (error) {
        if (error.message.includes("Could not find the table")) {
          console.log("[ ] Tools table not found, using mock data")
          return mockTools
        }
        throw error
      }
      return tools?.map((tool) => tool.name) || []
    } catch (error) {
      console.error("[ ] Error fetching tools:", error)
      return mockTools
    }
  },

  // Experience
  async getExperience() {
    try {
      const supabase = createClient()
      const { data: experience, error } = await supabase
        .from("experience")
        .select("*")
        .order("start_date", { ascending: false })

      if (error) {
        if (error.message.includes("Could not find the table")) {
          console.log("[ ] Experience table not found, using mock data")
          return mockExperience
        }
        throw error
      }
      return experience || []
    } catch (error) {
      console.error("[ ] Error fetching experience:", error)
      return mockExperience
    }
  },

  async getCurrentExperience() {
    try {
      const supabase = createClient()
      const { data: experience, error } = await supabase
        .from("experience")
        .select("*")
        .eq("is_current", true)
        .order("start_date", { ascending: false })

      if (error) {
        if (error.message.includes("Could not find the table")) {
          console.log("[ ] Experience table not found, using mock data")
          return mockExperience.filter((exp) => exp.is_current)
        }
        throw error
      }
      return experience || []
    } catch (error) {
      console.error("[ ] Error fetching current experience:", error)
      return mockExperience.filter((exp) => exp.is_current)
    }
  },

  // Education
  async getEducation() {
    try {
      const supabase = createClient()
      const { data: education, error } = await supabase
        .from("education")
        .select("*")
        .order("start_date", { ascending: false })

      if (error) {
        if (error.message.includes("Could not find the table")) {
          console.log("[ ] Education table not found, using mock data")
          return mockEducation
        }
        throw error
      }
      return education || []
    } catch (error) {
      console.error("[ ] Error fetching education:", error)
      return mockEducation
    }
  },

  // Certifications
  async getCertifications() {
    try {
      const supabase = createClient()
      const { data: certifications, error } = await supabase
        .from("certifications")
        .select("*")
        .order("issue_date", { ascending: false })

      if (error) {
        if (error.message.includes("Could not find the table")) {
          console.log("[ ] Certifications table not found, using mock data")
          return mockCertifications
        }
        throw error
      }
      return certifications || []
    } catch (error) {
      console.error("[ ] Error fetching certifications:", error)
      return mockCertifications
    }
  },

  async getActiveCertifications() {
    try {
      const supabase = createClient()
      const { data: certifications, error } = await supabase
        .from("certifications")
        .select("*")
        .or("expiry_date.is.null,expiry_date.gt." + new Date().toISOString())
        .order("issue_date", { ascending: false })

      if (error) {
        if (error.message.includes("Could not find the table")) {
          console.log("[ ] Certifications table not found, using mock data")
          return mockCertifications.filter((cert) => !cert.expiry_date || new Date(cert.expiry_date) > new Date())
        }
        throw error
      }
      return certifications || []
    } catch (error) {
      console.error("[ ] Error fetching active certifications:", error)
      return mockCertifications.filter((cert) => !cert.expiry_date || new Date(cert.expiry_date) > new Date())
    }
  },
}
