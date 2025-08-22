"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen } from "lucide-react"
import { useRouter, useParams } from "next/navigation"
import { useTranslation } from "../../../hooks/use-translation"

const blogPosts = [
  {
    id: "qa-best-practices",
    title: "Essential QA Testing Best Practices for Modern Web Applications",
    excerpt:
      "Discover the key strategies and methodologies that ensure robust quality assurance in today's fast-paced development environment.",
    content: `
      <h2>Introduction</h2>
      <p>Quality Assurance (QA) testing has evolved significantly in recent years, especially with the rise of agile development methodologies and continuous integration/continuous deployment (CI/CD) practices. As a QA Engineer with extensive experience in both manual and automated testing, I've learned that successful QA is not just about finding bugs—it's about ensuring the entire user experience meets the highest standards.</p>

      <h2>1. Shift-Left Testing Approach</h2>
      <p>One of the most impactful changes in modern QA is the shift-left approach, where testing activities begin much earlier in the development lifecycle. This means:</p>
      <ul>
        <li>Collaborating with developers during the design phase</li>
        <li>Writing test cases before code implementation</li>
        <li>Implementing automated tests alongside feature development</li>
        <li>Conducting regular code reviews with a testing mindset</li>
      </ul>

      <h2>2. Comprehensive Test Strategy</h2>
      <p>A robust test strategy should encompass multiple layers of testing:</p>
      <ul>
        <li><strong>Unit Testing:</strong> Testing individual components in isolation</li>
        <li><strong>Integration Testing:</strong> Verifying component interactions</li>
        <li><strong>System Testing:</strong> End-to-end functionality validation</li>
        <li><strong>User Acceptance Testing:</strong> Real-world scenario validation</li>
      </ul>

      <h2>3. Automation vs Manual Testing</h2>
      <p>The key is finding the right balance between automated and manual testing. Automation excels at:</p>
      <ul>
        <li>Regression testing</li>
        <li>Performance testing</li>
        <li>Data validation</li>
        <li>Repetitive test scenarios</li>
      </ul>
      <p>While manual testing is crucial for:</p>
      <ul>
        <li>Usability testing</li>
        <li>Exploratory testing</li>
        <li>Ad-hoc testing</li>
        <li>User experience validation</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Effective QA testing requires a combination of technical skills, strategic thinking, and continuous learning. By implementing these best practices, teams can deliver higher quality software while maintaining development velocity.</p>
    `,
    author: "Rhailyn Jane Cona",
    date: "2024-12-15",
    readTime: "8 min read",
    category: "Quality Assurance",
    tags: ["QA", "Testing", "Best Practices", "Automation", "Manual Testing"],
    image: "/software-testing-qa-workflow.png",
  },
  {
    id: "react-performance",
    title: "Optimizing React Applications: Performance Tips and Tricks",
    excerpt:
      "Learn advanced techniques to boost your React application's performance and provide users with lightning-fast experiences.",
    content: `
      <h2>Introduction</h2>
      <p>React applications can become slow and unresponsive if not optimized properly. Through my experience developing various React projects, I've discovered several key strategies that can dramatically improve application performance.</p>

      <h2>1. Component Optimization</h2>
      <p>The foundation of React performance lies in how we structure and optimize our components:</p>
      <ul>
        <li>Use React.memo for functional components</li>
        <li>Implement useMemo and useCallback hooks strategically</li>
        <li>Avoid inline object and function creation in render methods</li>
        <li>Split large components into smaller, focused ones</li>
      </ul>

      <h2>2. State Management Best Practices</h2>
      <p>Efficient state management is crucial for performance:</p>
      <ul>
        <li>Keep state as local as possible</li>
        <li>Use state normalization for complex data structures</li>
        <li>Implement proper state updates to avoid unnecessary re-renders</li>
        <li>Consider using state management libraries for complex applications</li>
      </ul>

      <h2>3. Bundle Optimization</h2>
      <p>Reducing bundle size directly impacts loading performance:</p>
      <ul>
        <li>Implement code splitting with React.lazy and Suspense</li>
        <li>Use dynamic imports for route-based code splitting</li>
        <li>Analyze bundle size with tools like webpack-bundle-analyzer</li>
        <li>Remove unused dependencies and code</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Performance optimization is an ongoing process that requires careful monitoring and continuous improvement. By implementing these strategies, you can create React applications that provide exceptional user experiences.</p>
    `,
    author: "Rhailyn Jane Cona",
    date: "2024-12-10",
    readTime: "6 min read",
    category: "Frontend Development",
    tags: ["React", "Performance", "Optimization", "JavaScript", "Web Development"],
    image: "/react-performance-dashboard.png",
  },
]

export default function BlogDetailPage() {
  const router = useRouter()
  const params = useParams()
  const { t } = useTranslation()

  const post = blogPosts.find((p) => p.id === params.id)

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
          <Button onClick={() => router.back()}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Go Back
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button variant="outline" onClick={() => router.back()} className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Button>
        </div>

        {/* Article */}
        <article className="space-y-8">
          {/* Hero Image */}
          <div className="aspect-video rounded-lg overflow-hidden">
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
          </div>

          {/* Article Header */}
          <div className="space-y-4">
            <Badge variant="secondary">{post.category}</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground font-sans leading-tight">{post.title}</h1>
            <p className="text-xl text-muted-foreground font-serif">{post.excerpt}</p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Article Content */}
          <Card>
            <CardContent className="prose prose-lg max-w-none p-8">
              <div
                dangerouslySetInnerHTML={{ __html: post.content }}
                className="space-y-6 text-muted-foreground font-serif leading-relaxed"
              />
            </CardContent>
          </Card>

          {/* Share Section */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <span className="font-semibold">Enjoyed this article?</span>
                </div>
                <Button variant="outline">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </CardContent>
          </Card>
        </article>
      </div>
    </div>
  )
}
