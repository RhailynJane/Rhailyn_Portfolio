import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seed...')

  // Clear existing data (in reverse order of dependencies)
  await prisma.skill.deleteMany()
  await prisma.skillCategory.deleteMany()
  await prisma.tool.deleteMany()
  await prisma.project.deleteMany()
  await prisma.experience.deleteMany()
  await prisma.education.deleteMany()
  await prisma.certification.deleteMany()

  // Seed Skill Categories
  const categories = await Promise.all([
    prisma.skillCategory.create({
      data: {
        title: 'Frontend Development',
        icon: 'Code',
        color: 'text-blue-500',
        displayOrder: 1,
      },
    }),
    prisma.skillCategory.create({
      data: {
        title: 'Backend & Database',
        icon: 'Database',
        color: 'text-green-500',
        displayOrder: 2,
      },
    }),
    prisma.skillCategory.create({
      data: {
        title: 'Mobile Development',
        icon: 'Code',
        color: 'text-purple-500',
        displayOrder: 3,
      },
    }),
    prisma.skillCategory.create({
      data: {
        title: 'Testing & Quality Assurance',
        icon: 'Code',
        color: 'text-red-500',
        displayOrder: 4,
      },
    }),
    prisma.skillCategory.create({
      data: {
        title: 'UI/UX Design',
        icon: 'Palette',
        color: 'text-pink-500',
        displayOrder: 5,
      },
    }),
    prisma.skillCategory.create({
      data: {
        title: 'DevOps & Tools',
        icon: 'Wrench',
        color: 'text-orange-500',
        displayOrder: 6,
      },
    }),
  ])

  console.log('✅ Skill categories created')

  // Seed Skills
  await prisma.skill.createMany({
    data: [
      // Frontend Development
      { categoryId: categories[0].id, name: 'HTML5 & CSS3', level: 95, displayOrder: 1 },
      { categoryId: categories[0].id, name: 'JavaScript (ES6+)', level: 95, displayOrder: 2 },
      { categoryId: categories[0].id, name: 'TypeScript', level: 90, displayOrder: 3 },
      { categoryId: categories[0].id, name: 'React.js', level: 92, displayOrder: 4 },
      { categoryId: categories[0].id, name: 'Next.js', level: 88, displayOrder: 5 },
      { categoryId: categories[0].id, name: 'Tailwind CSS', level: 90, displayOrder: 6 },
      { categoryId: categories[0].id, name: 'Responsive Design', level: 93, displayOrder: 7 },
      
      // Backend & Database
      { categoryId: categories[1].id, name: 'Node.js', level: 88, displayOrder: 1 },
      { categoryId: categories[1].id, name: 'Python', level: 85, displayOrder: 2 },
      { categoryId: categories[1].id, name: 'C# & .NET', level: 82, displayOrder: 3 },
      { categoryId: categories[1].id, name: 'SQL (MySQL/PostgreSQL)', level: 85, displayOrder: 4 },
      { categoryId: categories[1].id, name: 'Prisma ORM', level: 80, displayOrder: 5 },
      { categoryId: categories[1].id, name: 'RESTful APIs', level: 88, displayOrder: 6 },
      
      // Mobile Development
      { categoryId: categories[2].id, name: 'React Native', level: 85, displayOrder: 1 },
      { categoryId: categories[2].id, name: '.NET MAUI', level: 80, displayOrder: 2 },
      { categoryId: categories[2].id, name: 'Cross-Platform Dev', level: 83, displayOrder: 3 },
      { categoryId: categories[2].id, name: 'Mobile UI/UX', level: 85, displayOrder: 4 },
      
      // Testing & QA
      { categoryId: categories[3].id, name: 'Cypress', level: 90, displayOrder: 1 },
      { categoryId: categories[3].id, name: 'Selenium', level: 85, displayOrder: 2 },
      { categoryId: categories[3].id, name: 'Postman/API Testing', level: 92, displayOrder: 3 },
      { categoryId: categories[3].id, name: 'Manual Testing', level: 95, displayOrder: 4 },
      { categoryId: categories[3].id, name: 'Test Planning', level: 90, displayOrder: 5 },
      { categoryId: categories[3].id, name: 'Regression Testing', level: 93, displayOrder: 6 },
      
      // UI/UX Design
      { categoryId: categories[4].id, name: 'Figma', level: 88, displayOrder: 1 },
      { categoryId: categories[4].id, name: 'Prototyping', level: 85, displayOrder: 2 },
      { categoryId: categories[4].id, name: 'Wireframing', level: 83, displayOrder: 3 },
      { categoryId: categories[4].id, name: 'User Research', level: 80, displayOrder: 4 },
      
      // DevOps & Tools
      { categoryId: categories[5].id, name: 'Git & GitHub', level: 92, displayOrder: 1 },
      { categoryId: categories[5].id, name: 'Agile/Scrum', level: 90, displayOrder: 2 },
      { categoryId: categories[5].id, name: 'CI/CD (Jenkins)', level: 80, displayOrder: 3 },
      { categoryId: categories[5].id, name: 'Jira & Confluence', level: 93, displayOrder: 4 },
    ],
  })

  console.log('✅ Skills created')

  // Seed Tools
  await prisma.tool.createMany({
    data: [
      // Development Tools
      { name: 'VS Code', category: 'Development Tools', order: 1 },
      { name: 'Git & GitHub', category: 'Development Tools', order: 2 },
      { name: 'NPM & Yarn', category: 'Development Tools', order: 3 },
      { name: 'Vite', category: 'Development Tools', order: 4 },
      { name: 'Webpack', category: 'Development Tools', order: 5 },
      
      // Frontend
      { name: 'React.js', category: 'Frontend', order: 6 },
      { name: 'Next.js', category: 'Frontend', order: 7 },
      { name: 'Tailwind CSS', category: 'Frontend', order: 8 },
      { name: 'shadcn/ui', category: 'Frontend', order: 9 },
      { name: 'Bootstrap', category: 'Frontend', order: 10 },
      
      // Backend & Database
      { name: 'Node.js', category: 'Backend', order: 11 },
      { name: 'Express.js', category: 'Backend', order: 12 },
      { name: 'Prisma', category: 'Backend', order: 13 },
      { name: 'PostgreSQL', category: 'Backend', order: 14 },
      { name: 'MySQL', category: 'Backend', order: 15 },
      { name: 'SQL Server', category: 'Backend', order: 16 },
      { name: 'Firebase', category: 'Backend', order: 17 },
      { name: 'Supabase', category: 'Backend', order: 18 },
      { name: 'WatermelonDB', category: 'Backend', order: 19 },
      
      // Mobile
      { name: 'React Native', category: 'Mobile', order: 20 },
      { name: 'Expo', category: 'Mobile', order: 21 },
      { name: '.NET MAUI', category: 'Mobile', order: 22 },
      { name: 'Xamarin', category: 'Mobile', order: 23 },
      
      // Testing
      { name: 'Cypress', category: 'Testing', order: 24 },
      { name: 'Selenium', category: 'Testing', order: 25 },
      { name: 'Postman', category: 'Testing', order: 26 },
      { name: 'TestRail', category: 'Testing', order: 27 },
      { name: 'Jest', category: 'Testing', order: 28 },
      
      // Design
      { name: 'Figma', category: 'Design', order: 29 },
      { name: 'Adobe XD', category: 'Design', order: 30 },
      { name: 'Canva', category: 'Design', order: 31 },
      
      // Project Management
      { name: 'Jira', category: 'Project Management', order: 32 },
      { name: 'Confluence', category: 'Project Management', order: 33 },
      { name: 'Trello', category: 'Project Management', order: 34 },
      { name: 'Slack', category: 'Project Management', order: 35 },
      { name: 'Microsoft Teams', category: 'Project Management', order: 36 },
      
      // DevOps
      { name: 'Jenkins', category: 'DevOps', order: 37 },
      { name: 'Docker', category: 'DevOps', order: 38 },
      { name: 'Vercel', category: 'DevOps', order: 39 },
      { name: 'Netlify', category: 'DevOps', order: 40 },
      
      // Other
      { name: 'ESLint', category: 'Other', order: 41 },
      { name: 'Prettier', category: 'Other', order: 42 },
      { name: 'Zendesk', category: 'Other', order: 43 },
      { name: 'Zoho Desk', category: 'Other', order: 44 },
      { name: 'Wireshark', category: 'Other', order: 45 },
    ],
  })

  console.log('✅ Tools created')

  // Seed Projects
  await prisma.project.createMany({
    data: [
      {
        title: 'SafeSpace Mobile App',
        description: 'Mobile application prototype for safe space community platform',
        longDescription: 'Mobile application prototype designed for safe space community platform with community safety features and user-friendly interface.',
        technologies: ['React Native', 'JavaScript', 'Mobile Development'],
        category: 'Mobile Application',
        imageUrl: '/safespace-mobile.png',
        figmaUrl: 'https://www.figma.com/design/4fuzNHukJNygOXylaNqjct/Mobile?node-id=0-1&t=GuSJCPJG8kJr0xwn-1',
        featured: true,
        status: 'completed',
      },
      {
        title: 'SafeSpace Web Platform',
        description: 'Web version of the SafeSpace community safety platform',
        longDescription: 'Web version of the SafeSpace community safety platform with cross-browser compatibility and accessible design.',
        technologies: ['JavaScript', 'Web Development', 'Responsive Design'],
        category: 'Web Application',
        imageUrl: '/safespace-web.png',
        figmaUrl: 'https://www.figma.com/design/1uxJlnu19gOZCK47oarQXh/SafeSpace-Figma-Template?node-id=0-1&t=kNckyJSiOUD5zrDv-1',
        featured: true,
        status: 'completed',
      },
      {
        title: 'Rural Alberta Health Connect Website',
        description: 'Healthcare platform connecting rural Alberta communities with medical services',
        longDescription: 'Healthcare platform designed to connect rural Alberta communities with medical services, featuring healthcare service integration and community connectivity.',
        technologies: ['Web Development', 'JavaScript'],
        category: 'Web Application',
        imageUrl: '/rural-health-web.png',
        figmaUrl: 'https://www.figma.com/design/2CyCUUXxpupNyevQsLoByj/AlbertaHealthConnect?node-id=0-1&t=DmOYSaEEOWPvALYu-1',
        featured: true,
        status: 'completed',
      },
      {
        title: 'Rural Alberta Health Connect Mobile',
        description: 'Mobile application for healthcare access in rural Alberta',
        longDescription: 'Mobile application designed for healthcare access in rural Alberta with healthcare service integration and mobile optimization.',
        technologies: ['React Native', 'Mobile Development'],
        category: 'Mobile Application',
        imageUrl: '/rural-health-mobile.png',
        figmaUrl: 'https://www.figma.com/design/2CyCUUXxpupNyevQsLoByj/AlbertaHealthConnect?node-id=0-1&t=DmOYSaEEOWPvALYu-1',
        featured: true,
        status: 'completed',
      },
      {
        title: 'Professional Portfolio',
        description: 'Personal portfolio showcasing projects and skills',
        longDescription: 'Personal portfolio website showcasing projects and skills with responsive design and project showcase features.',
        technologies: ['JavaScript', 'Web Development'],
        category: 'Web Application',
        githubUrl: 'https://github.com/RhailynJane/Portfolio',
        imageUrl: '/portfolio.png',
        featured: true,
        status: 'completed',
      },
      {
        title: 'FitmindAI App',
        description: 'AI-powered fitness and mental wellness application',
        longDescription: 'AI-powered fitness and mental wellness application with AI recommendations and wellness tracking features.',
        technologies: ['AI Integration', 'Mobile/Web Development'],
        category: 'Mobile Application',
        imageUrl: '/fitmindai.png',
        figmaUrl: 'https://www.figma.com/design/PBGbOCOsVMEX1ul9a2Y2Ax/FitMindAI?node-id=0-1&t=UYXIqGsbavai9er8-1',
        featured: true,
        status: 'completed',
      },
      {
        title: 'Cinetracker Project',
        description: 'Movie and media tracking application',
        technologies: ['Web Development', 'JavaScript'],
        category: 'Web Application',
        imageUrl: '/cinetracker.png',
        featured: true,
        status: 'completed',
      },
      {
        title: 'Library Management Application',
        description: 'Python-based application with book search, borrowing, and inventory management',
        technologies: ['Python', 'CSV', 'Git', 'VS Code'],
        category: 'Desktop Application',
        githubUrl: 'https://github.com/ConaRhai/library_management_app.git',
        imageUrl: '/library-management-system.png',
        featured: true,
        status: 'completed',
      },
      {
        title: 'Dog Care Project',
        description: 'Responsive web application for dog care services',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        category: 'Web Application',
        githubUrl: 'https://github.com/RhailynJane/Project_DogCare.git',
        imageUrl: '/dog-care-website.png',
        featured: true,
        status: 'completed',
      },
      {
        title: 'Travel Management Application',
        description: 'Cross-platform travel reservation system',
        technologies: ['C#', '.NET MAUI'],
        category: 'Mobile Application',
        githubUrl: 'https://github.com/RhailynJane/TravelessApp.git',
        imageUrl: '/travel-management-app.png',
        featured: true,
        status: 'completed',
      },
      {
        title: 'House Utility Management System',
        description: 'Real-time utility tracking web application',
        technologies: ['HTML', 'CSS', 'C#', '.NET MAUI', 'SQL Server'],
        category: 'Web Application',
        githubUrl: 'https://github.com/RhailynJane/HouseUtilityManagementSystem.git',
        imageUrl: '/placeholder-2b24u.png',
        featured: true,
        status: 'completed',
      },
      {
        title: 'Rental Management System',
        description: 'Web-based rental property management',
        technologies: ['Blazor', 'C#', 'MySQL', 'Figma'],
        category: 'Web Application',
        githubUrl: 'https://github.com/RhailynJane/RentalManagementSystem.git',
        imageUrl: '/rental-management-interface.png',
        featured: true,
        status: 'completed',
      },
    ],
  })

  console.log('✅ Projects created')

  // Seed Experience
  await prisma.experience.createMany({
    data: [
      {
        title: 'Software QA Engineer',
        company: 'Convoso Inc.',
        location: 'Remote',
        startDate: new Date('2023-03-01'),
        isCurrent: true,
        description: 'Assist quality assurance initiatives by executing comprehensive testing methodologies including regression, smoke, sanity, and performance testing to identify critical defects and ensure high-quality software delivery. Collaborate closely with developers to understand requirements and design specifications while creating detailed test plans and cases that enhance testing process consistency. Work with the Product Team to review user stories and acceptance criteria, ensuring product alignment with business requirements and improving overall communication and project outcomes. Transitioned to the automation team, contributing to automated testing efforts using Cypress to improve testing efficiency and coverage.',
        skills: ['Manual Testing', 'Automated Testing', 'Regression Testing', 'Smoke Testing', 'Sanity Testing', 'Performance Testing', 'Test Planning', 'Cypress', 'TestRail', 'Jira', 'Confluence', 'Jenkins', 'Postman', 'API Testing', 'Cross-browser Testing', 'JavaScript', 'HTML/CSS'],
        displayOrder: 1,
      },
      {
        title: 'Product Support Engineer',
        company: 'Convoso Inc.',
        location: 'Remote',
        startDate: new Date('2022-05-01'),
        endDate: new Date('2023-03-01'),
        isCurrent: false,
        description: 'Resolved complex customer technical support cases escalated by Technical Support Analysts via phone and email, leading to increased customer satisfaction and reduced resolution time. Contributed to the creation of comprehensive articles on product usage and troubleshooting to build a robust knowledge base, resulting in decreased support requests. Provided real-time technical guidance to Technical Support Analysts, fostering team development and enhancing overall support efficiency while analyzing recurring issues to drive product improvements.',
        skills: ['Technical Support', 'Customer Service', 'Technical Documentation', 'Team Leadership', 'Knowledge Management', 'Troubleshooting', 'Zendesk', 'Jira', 'Product Knowledge', 'Communication'],
        displayOrder: 2,
      },
      {
        title: 'Technical Support Analyst',
        company: 'Convoso Inc.',
        location: 'Remote',
        startDate: new Date('2021-07-01'),
        endDate: new Date('2022-05-01'),
        isCurrent: false,
        description: 'Responded to customer inquiries via phone, chat, and email, ensuring quick and effective first-level technical support to address technical issues and concerns. Documented all customer interactions and solutions in the ticketing system, enabling seamless escalations and follow-ups while maintaining high customer satisfaction scores. Identified recurring issues and escalated them to higher-level support teams to drive product improvement and reduce repetitive tickets.',
        skills: ['Technical Support', 'Customer Service', 'Troubleshooting', 'Ticketing Systems', 'Zendesk', 'Communication', 'Problem Solving', 'Documentation', 'Time Management'],
        displayOrder: 3,
      },
      {
        title: 'Level 2 Technical Support Engineer',
        company: 'Ascent Solutions Pte Ltd',
        location: 'Remote',
        startDate: new Date('2020-09-01'),
        endDate: new Date('2021-07-01'),
        isCurrent: false,
        description: 'Provided second-level technical support for GPS tracking solutions (Wialon, Flespi), addressing queries via phone and email, which improved customer resolution times and satisfaction. Documented issue details and troubleshooting steps in Zoho Desk to maintain accurate support records, resulting in better tracking and faster issue resolution. Conducted root cause analysis for recurring issues, providing recommendations to enhance system stability and reduce support tickets. Assisted in deploying new software updates, ensuring seamless integration and minimal disruption for end-users, while troubleshooting IP Phone/Softphone configurations and PBX systems.',
        skills: ['GPS Tracking Solutions', 'Wialon', 'Flespi', 'Zoho Desk', 'Root Cause Analysis', 'IP Phone Configuration', 'PBX Troubleshooting', 'Software Deployment', 'Technical Documentation', 'System Integration', 'Networking', 'Wireshark'],
        displayOrder: 4,
      },
      {
        title: 'Technical Support Engineer 2',
        company: 'Emerson Electric Asia, LTD ROHQ',
        location: 'Manila, Philippines',
        startDate: new Date('2017-11-01'),
        endDate: new Date('2020-02-01'),
        isCurrent: false,
        description: 'Provided second-level technical support for GPS tracking and telecommunications systems via phone and email, resulting in improved customer resolution times and satisfaction. Documented comprehensive issue details and troubleshooting procedures in Zoho Desk to maintain accurate support records, leading to better tracking and faster issue resolution. Conducted training sessions for new hires, equipping them with the skills and knowledge needed for effective technical support. Collaborated with cross-functional teams to identify and resolve hardware and software compatibility issues, improving overall system performance, while performing network diagnostics using tools like Wireshark and Putty for advanced troubleshooting.',
        skills: ['GPS Tracking Systems', 'Telecommunications', 'Hardware Support', 'Technical Training', 'Zoho Desk', 'Cross-functional Collaboration', 'System Integration', 'Network Diagnostics', 'Wireshark', 'Putty', 'PBX Systems', 'VoIP Configuration'],
        displayOrder: 5,
      },
    ],
  })

  console.log('✅ Experience created')

  // Seed Education
  await prisma.education.createMany({
    data: [
      {
        degree: 'Software Development Diploma',
        fieldOfStudy: 'Software Development',
        school: 'Southern Alberta Institute of Technology',
        location: 'Calgary, AB',
        startDate: new Date('2024-01-01'),
        endDate: new Date('2025-12-01'),
        isCurrent: true,
        description: 'Comprehensive diploma program focused on modern software development practices, covering full-stack web development, mobile application development, database management, and software engineering principles. Gained hands-on experience with industry-standard tools and technologies including React, React Native, .NET MAUI, Python, C#, MySQL, PostgreSQL, and modern development workflows using Git, Jira, and Agile methodologies.',
        achievements: ['Expected Graduation: December 2025', 'Focus on Full-Stack Development', 'Hands-on Project Experience'],
        displayOrder: 1,
      },
      {
        degree: 'Bachelor of Science in Electronics Engineering',
        fieldOfStudy: 'Electronics Engineering',
        school: 'Rizal Technological University',
        location: 'Manila, Philippines',
        startDate: new Date('2012-06-01'),
        endDate: new Date('2017-05-01'),
        isCurrent: false,
        description: 'Comprehensive engineering degree program specializing in electronics systems design, circuit analysis, microcontroller programming, and telecommunications. Developed strong analytical and problem-solving skills through rigorous coursework in mathematics, physics, and engineering principles. Recognized for academic excellence as a consistent Dean Lister and recipient of prestigious scholarship programs. Served as Business Manager for the College of Engineering and Industrial Technology, demonstrating leadership and organizational capabilities.',
        achievements: ['Dean Lister (2014-2016)', 'Emerson Scholarship Program', 'Bobby Eusebio Scholarship Program', 'College of Engineering and Industrial Technology Business Manager', 'Broadkast ng Talino 2017 (Top 20 Finalist)'],
        displayOrder: 2,
      },
    ],
  })

  console.log('✅ Education created')

  // Seed Certifications
  await prisma.certification.createMany({
    data: [
      {
        name: 'Cypress End-to-End Testing',
        issuingOrganization: 'Udemy',
        issueDate: new Date('2024-12-01'),
        description: 'Comprehensive course on automated testing using Cypress framework for web applications.',
        displayOrder: 1,
      },
      {
        name: 'Figma Essential Training',
        issuingOrganization: 'LinkedIn Learning',
        issueDate: new Date('2024-11-01'),
        description: 'Professional training on UI/UX design using Figma, covering design systems and prototyping.',
        displayOrder: 2,
      },
      {
        name: 'Google IT Support Professional Certificate',
        issuingOrganization: 'Google',
        issueDate: new Date('2022-10-01'),
        description: 'Comprehensive IT support certification covering troubleshooting, customer service, networking, operating systems, system administration, and security.',
        displayOrder: 3,
      },
      {
        name: 'Electronics Engineer License',
        issuingOrganization: 'Professional Regulation Commission (Philippines)',
        issueDate: new Date('2017-11-01'),
        description: 'Professional engineering license for electronics engineering practice in the Philippines.',
        displayOrder: 4,
      },
    ],
  })

  console.log('✅ Certifications created')

  console.log('🎉 Database seeding completed successfully!')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error('❌ Error seeding database:', e)
    await prisma.$disconnect()
    process.exit(1)
  })
