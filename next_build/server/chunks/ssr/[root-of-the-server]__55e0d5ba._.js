module.exports = {

"[project]/components/ui/button.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Button": ()=>Button,
    "buttonVariants": ()=>buttonVariants
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/card.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Card": ()=>Card,
    "CardAction": ()=>CardAction,
    "CardContent": ()=>CardContent,
    "CardDescription": ()=>CardDescription,
    "CardFooter": ()=>CardFooter,
    "CardHeader": ()=>CardHeader,
    "CardTitle": ()=>CardTitle
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/badge.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Badge": ()=>Badge,
    "badgeVariants": ()=>badgeVariants
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
            secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
            destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "span";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/lib/translations.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "getTranslation": ()=>getTranslation,
    "translations": ()=>translations
});
const translations = {
    en: {
        navigation: {
            home: "Home",
            about: "About",
            skills: "Skills",
            projects: "Projects",
            blogs: "Blogs",
            contact: "Contact",
            feedbacks: "Feedbacks",
            lightMode: "Light Mode",
            darkMode: "Dark Mode"
        },
        hero: {
            title: "Rhailyn Jane Cona",
            subtitle: "Software Development Student & QA Engineer",
            description: "Dedicated Software Development student with QA engineering and technical support background. Experienced in defect discovery, cross-team collaboration, and delivering high‑quality software. Bilingual (Filipino/English) and committed to continuous learning and innovation.",
            learnMore: "Learn More About Me",
            techStack: "Technologies I work with:"
        },
        about: {
            title: "About Me",
            subtitle: "Results-driven Software Development student with a strong foundation in QA engineering, technical support, and electronics—focused on building reliable, user-centered solutions.",
            profileSummary: "Profile Summary",
            profileDescription: "Experienced in identifying and resolving software defects, collaborating across teams, and improving product quality. Adaptable in dynamic environments with a passion for continuous learning and innovation.",
            experience: "Professional Experience",
            education: "Education",
            certifications: "Certifications & Achievements",
            bilingual: "Bilingual (Filipino & English)",
            qualityAssurance: "Quality Assurance",
            technicalSupport: "Technical Support",
            softwareTesting: "Software Testing"
        },
        skills: {
            title: "Skills & Expertise",
            subtitle: "A comprehensive overview of my technical skills and professional competencies",
            frontendDevelopment: "Frontend Development",
            backendDevelopment: "Backend Development",
            designUx: "Design & UX",
            leadershipManagement: "Leadership & Management",
            toolsTechnologies: "Tools & Technologies"
        },
        projects: {
            title: "Featured Projects",
            subtitle: "A showcase of my recent work and technical projects demonstrating various skills and technologies",
            viewDetails: "View Details",
            viewCode: "View Code",
            liveDemo: "Live Demo",
            projectOverview: "Project Overview",
            keyHighlights: "Key Highlights",
            technologiesUsed: "Technologies Used",
            projectDemo: "Project Demo",
            playDemo: "Play Demo Video",
            category: {
                desktopApplication: "Desktop Application",
                webApplication: "Web Application",
                mobileDesktopApplication: "Mobile/Desktop Application",
                designProject: "Design Project"
            }
        },
        blog: {
            title: "Blog & Insights",
            subtitle: "Sharing my experiences, learnings, and insights from my journey in software development",
            searchPosts: "Search posts...",
            all: "all",
            readMore: "Read More",
            readFullArticle: "Read Full Article",
            minRead: "min read",
            noPosts: "No posts found matching your criteria."
        },
        contact: {
            title: "Get In Touch",
            subtitle: "I'm always open to discussing new opportunities, collaborations, or just having a chat about technology",
            sendMessage: "Send Me a Message",
            name: "Name",
            email: "Email",
            subject: "Subject",
            message: "Message",
            sendButton: "Send Message",
            sending: "Sending...",
            contactInformation: "Contact Information",
            connectWithMe: "Connect With Me",
            currentlyAvailable: "Currently Available",
            availabilityDescription: "I'm actively seeking new opportunities in software development and QA engineering. Expected graduation: March 2026",
            viewResume: "View Resume",
            scheduleCall: "Schedule Call",
            messageSent: "Message Sent!",
            messageSentDescription: "Thank you for your message. I'll get back to you soon!"
        },
        feedback: {
            title: "Testimonials & Feedback",
            subtitle: "What colleagues and clients say about working with me",
            testimonials: "Testimonials",
            submitFeedback: "Submit Feedback",
            adminPanel: "Admin Panel",
            shareExperience: "Share Your Experience",
            company: "Company",
            role: "Role",
            rating: "Rating",
            yourFeedback: "Your Feedback",
            submitButton: "Submit Feedback",
            adminAccess: "Admin Access",
            adminPassword: "Admin Password",
            accessAdmin: "Access Admin Panel",
            feedbackManagement: "Feedback Management",
            logout: "Logout",
            pendingReview: "Pending Review",
            approved: "Approved",
            totalFeedback: "Total Feedback",
            approve: "Approve",
            reject: "Reject",
            noTestimonials: "No testimonials available yet.",
            noPendingFeedback: "No pending feedback to review.",
            feedbackSubmitted: "Feedback Submitted!",
            feedbackSubmittedDescription: "Thank you for your feedback. It will be reviewed and published soon.",
            adminAccessGranted: "Admin Access Granted",
            adminAccessDescription: "You can now manage feedback submissions.",
            accessDenied: "Access Denied",
            invalidPassword: "Invalid admin password.",
            feedbackApproved: "Feedback Approved",
            feedbackRejected: "Feedback Rejected",
            feedbackApprovedDescription: "The feedback has been approved and published.",
            feedbackRejectedDescription: "The feedback has been rejected."
        },
        common: {
            loading: "Loading...",
            error: "Error",
            success: "Success",
            cancel: "Cancel",
            save: "Save",
            edit: "Edit",
            delete: "Delete",
            confirm: "Confirm"
        }
    },
    fil: {
        navigation: {
            home: "Tahanan",
            about: "Tungkol",
            skills: "Kakayahan",
            projects: "Mga Proyekto",
            blogs: "Mga Blog",
            contact: "Makipag-ugnayan",
            feedbacks: "Mga Puna",
            lightMode: "Maliwanag na Mode",
            darkMode: "Madilim na Mode"
        },
        hero: {
            title: "Rhailyn Jane Cona",
            subtitle: "Estudyante ng Software Development at QA Engineer",
            description: "Masigasig sa paglikha ng mga makabagong solusyon at pagsisiguro ng mataas na kalidad ng software",
            learnMore: "Alamin Pa Ako",
            techStack: "Mga teknolohiyang ginagamit ko:"
        },
        about: {
            title: "Tungkol Sa Akin",
            subtitle: "Dedikado at resulta-driven na estudyante ng Software Development na may matatag na pundasyon sa technical support, Software QA Engineering, at electronics engineering.",
            profileSummary: "Buod ng Profile",
            profileDescription: "May karanasan sa pagtukoy at paglutas ng mga software defects sa pamamagitan ng epektibong teamwork at pakikipagtulungan, na nagsisiguro ng paghahatid ng mataas na kalidad na mga solusyon. Mahusay sa pag-adapt sa mga dynamic na work environments, na may hilig sa patuloy na pag-aaral at innovation.",
            experience: "Propesyonal na Karanasan",
            education: "Edukasyon",
            certifications: "Mga Sertipiko at Tagumpay",
            bilingual: "Dalawang Wika (Filipino at English)",
            qualityAssurance: "Quality Assurance",
            technicalSupport: "Technical Support",
            softwareTesting: "Software Testing"
        },
        skills: {
            title: "Mga Kakayahan at Dalubhasa",
            subtitle: "Komprehensibong pangkalahatang-ideya ng aking mga technical skills at propesyonal na kakayahan",
            frontendDevelopment: "Frontend Development",
            backendDevelopment: "Backend Development",
            designUx: "Design at UX",
            leadershipManagement: "Leadership at Management",
            toolsTechnologies: "Mga Tools at Teknolohiya"
        },
        projects: {
            title: "Mga Pangunahing Proyekto",
            subtitle: "Pagpapakita ng aking mga kamakailang gawa at technical projects na nagpapakita ng iba't ibang skills at teknolohiya",
            viewDetails: "Tingnan ang Detalye",
            viewCode: "Tingnan ang Code",
            liveDemo: "Live Demo",
            projectOverview: "Pangkalahatang-ideya ng Proyekto",
            keyHighlights: "Mga Pangunahing Highlight",
            technologiesUsed: "Mga Teknolohiyang Ginamit",
            projectDemo: "Demo ng Proyekto",
            playDemo: "I-play ang Demo Video",
            category: {
                desktopApplication: "Desktop Application",
                webApplication: "Web Application",
                mobileDesktopApplication: "Mobile/Desktop Application",
                designProject: "Design Project"
            }
        },
        blog: {
            title: "Blog at Mga Insight",
            subtitle: "Pagbabahagi ng aking mga karanasan, natutuhan, at mga insight mula sa aking paglalakbay sa software development",
            searchPosts: "Maghanap ng mga post...",
            all: "lahat",
            readMore: "Basahin Pa",
            readFullArticle: "Basahin ang Buong Artikulo",
            minRead: "minutong pagbasa",
            noPosts: "Walang nahanap na mga post na tumugma sa inyong criteria."
        },
        contact: {
            title: "Makipag-ugnayan",
            subtitle: "Laging bukas ako sa pag-usapan ng mga bagong oportunidad, pakikipagtulungan, o simpleng pag-uusap tungkol sa teknolohiya",
            sendMessage: "Magpadala ng Mensahe",
            name: "Pangalan",
            email: "Email",
            subject: "Paksa",
            message: "Mensahe",
            sendButton: "Ipadala ang Mensahe",
            sending: "Nagpapadala...",
            contactInformation: "Impormasyon sa Pakikipag-ugnayan",
            connectWithMe: "Makipag-ugnayan Sa Akin",
            currentlyAvailable: "Kasalukuyang Available",
            availabilityDescription: "Aktibong naghahanap ako ng mga bagong oportunidad sa software development at QA engineering. Inaasahang graduation: Marso 2026",
            viewResume: "Tingnan ang Resume",
            scheduleCall: "Mag-schedule ng Tawag",
            messageSent: "Naipadala ang Mensahe!",
            messageSentDescription: "Salamat sa inyong mensahe. Magsasagot ako sa lalong madaling panahon!"
        },
        feedback: {
            title: "Mga Testimonial at Puna",
            subtitle: "Ano ang sinasabi ng mga kasamahan at kliyente tungkol sa pakikipagtrabaho sa akin",
            testimonials: "Mga Testimonial",
            submitFeedback: "Magpadala ng Puna",
            adminPanel: "Admin Panel",
            shareExperience: "Ibahagi ang Inyong Karanasan",
            company: "Kumpanya",
            role: "Tungkulin",
            rating: "Rating",
            yourFeedback: "Inyong Puna",
            submitButton: "Ipadala ang Puna",
            adminAccess: "Admin Access",
            adminPassword: "Admin Password",
            accessAdmin: "I-access ang Admin Panel",
            feedbackManagement: "Pamamahala ng Puna",
            logout: "Mag-logout",
            pendingReview: "Naghihintay ng Review",
            approved: "Na-approve",
            totalFeedback: "Kabuuang Puna",
            approve: "Aprubahan",
            reject: "Tanggihan",
            noTestimonials: "Wala pang available na mga testimonial.",
            noPendingFeedback: "Walang pending na puna na dapat i-review.",
            feedbackSubmitted: "Naipadala ang Puna!",
            feedbackSubmittedDescription: "Salamat sa inyong puna. Ire-review at ipa-publish ito sa lalong madaling panahon.",
            adminAccessGranted: "Nabigyan ng Admin Access",
            adminAccessDescription: "Maaari na ninyong pamahalaan ang mga feedback submissions.",
            accessDenied: "Tinanggihan ang Access",
            invalidPassword: "Mali ang admin password.",
            feedbackApproved: "Na-approve ang Puna",
            feedbackRejected: "Tinanggihan ang Puna",
            feedbackApprovedDescription: "Na-approve at na-publish na ang puna.",
            feedbackRejectedDescription: "Tinanggihan ang puna."
        },
        common: {
            loading: "Naglo-load...",
            error: "Error",
            success: "Tagumpay",
            cancel: "Kanselahin",
            save: "I-save",
            edit: "I-edit",
            delete: "Tanggalin",
            confirm: "Kumpirmahin"
        }
    },
    fr: {
        navigation: {
            home: "Accueil",
            about: "À propos",
            skills: "Compétences",
            projects: "Projets",
            blogs: "Blogs",
            contact: "Contact",
            feedbacks: "Commentaires",
            lightMode: "Mode Clair",
            darkMode: "Mode Sombre"
        },
        hero: {
            title: "Rhailyn Jane Cona",
            subtitle: "Étudiante en Développement Logiciel et Ingénieure QA",
            description: "Passionnée par la création de solutions innovantes et l'assurance de livraison de logiciels de haute qualité",
            learnMore: "En Savoir Plus Sur Moi",
            techStack: "Technologies avec lesquelles je travaille:"
        },
        about: {
            title: "À Propos de Moi",
            subtitle: "Étudiante dévouée et axée sur les résultats en développement logiciel avec une base solide en support technique, ingénierie QA logicielle et ingénierie électronique.",
            profileSummary: "Résumé du Profil",
            profileDescription: "Expérimentée dans l'identification et la résolution des défauts logiciels grâce à un travail d'équipe et une collaboration efficaces, assurant la livraison de solutions de haute qualité. Habile à s'adapter aux environnements de travail dynamiques, avec une passion pour l'apprentissage continu et l'innovation.",
            experience: "Expérience Professionnelle",
            education: "Éducation",
            certifications: "Certifications et Réalisations",
            bilingual: "Bilingue (Filipino et Anglais)",
            qualityAssurance: "Assurance Qualité",
            technicalSupport: "Support Technique",
            softwareTesting: "Tests Logiciels"
        },
        skills: {
            title: "Compétences et Expertise",
            subtitle: "Un aperçu complet de mes compétences techniques et compétences professionnelles",
            frontendDevelopment: "Développement Frontend",
            backendDevelopment: "Développement Backend",
            designUx: "Design et UX",
            leadershipManagement: "Leadership et Gestion",
            toolsTechnologies: "Outils et Technologies"
        },
        projects: {
            title: "Projets Vedettes",
            subtitle: "Une vitrine de mes travaux récents et projets techniques démontrant diverses compétences et technologies",
            viewDetails: "Voir les Détails",
            viewCode: "Voir le Code",
            liveDemo: "Démo en Direct",
            projectOverview: "Aperçu du Projet",
            keyHighlights: "Points Clés",
            technologiesUsed: "Technologies Utilisées",
            projectDemo: "Démo du Projet",
            playDemo: "Lire la Vidéo Démo",
            category: {
                desktopApplication: "Application de Bureau",
                webApplication: "Application Web",
                mobileDesktopApplication: "Application Mobile/Bureau",
                designProject: "Projet de Design"
            }
        },
        blog: {
            title: "Blog et Insights",
            subtitle: "Partager mes expériences, apprentissages et insights de mon parcours en développement logiciel",
            searchPosts: "Rechercher des articles...",
            all: "tous",
            readMore: "Lire Plus",
            readFullArticle: "Lire l'Article Complet",
            minRead: "min de lecture",
            noPosts: "Aucun article trouvé correspondant à vos critères."
        },
        contact: {
            title: "Entrer en Contact",
            subtitle: "Je suis toujours ouverte à discuter de nouvelles opportunités, collaborations, ou simplement avoir une conversation sur la technologie",
            sendMessage: "M'Envoyer un Message",
            name: "Nom",
            email: "Email",
            subject: "Sujet",
            message: "Message",
            sendButton: "Envoyer le Message",
            sending: "Envoi en cours...",
            contactInformation: "Informations de Contact",
            connectWithMe: "Se Connecter Avec Moi",
            currentlyAvailable: "Actuellement Disponible",
            availabilityDescription: "Je recherche activement de nouvelles opportunités en développement logiciel et ingénierie QA. Diplôme prévu: Mars 2026",
            viewResume: "Voir le CV",
            scheduleCall: "Planifier un Appel",
            messageSent: "Message Envoyé!",
            messageSentDescription: "Merci pour votre message. Je vous répondrai bientôt!"
        },
        feedback: {
            title: "Témoignages et Commentaires",
            subtitle: "Ce que disent les collègues et clients sur le travail avec moi",
            testimonials: "Témoignages",
            submitFeedback: "Soumettre un Commentaire",
            adminPanel: "Panneau Admin",
            shareExperience: "Partager Votre Expérience",
            company: "Entreprise",
            role: "Rôle",
            rating: "Évaluation",
            yourFeedback: "Votre Commentaire",
            submitButton: "Soumettre le Commentaire",
            adminAccess: "Accès Admin",
            adminPassword: "Mot de Passe Admin",
            accessAdmin: "Accéder au Panneau Admin",
            feedbackManagement: "Gestion des Commentaires",
            logout: "Se Déconnecter",
            pendingReview: "En Attente de Révision",
            approved: "Approuvé",
            totalFeedback: "Total des Commentaires",
            approve: "Approuver",
            reject: "Rejeter",
            noTestimonials: "Aucun témoignage disponible pour le moment.",
            noPendingFeedback: "Aucun commentaire en attente à réviser.",
            feedbackSubmitted: "Commentaire Soumis!",
            feedbackSubmittedDescription: "Merci pour votre commentaire. Il sera révisé et publié bientôt.",
            adminAccessGranted: "Accès Admin Accordé",
            adminAccessDescription: "Vous pouvez maintenant gérer les soumissions de commentaires.",
            accessDenied: "Accès Refusé",
            invalidPassword: "Mot de passe admin invalide.",
            feedbackApproved: "Commentaire Approuvé",
            feedbackRejected: "Commentaire Rejeté",
            feedbackApprovedDescription: "Le commentaire a été approuvé et publié.",
            feedbackRejectedDescription: "Le commentaire a été rejeté."
        },
        common: {
            loading: "Chargement...",
            error: "Erreur",
            success: "Succès",
            cancel: "Annuler",
            save: "Sauvegarder",
            edit: "Modifier",
            delete: "Supprimer",
            confirm: "Confirmer"
        }
    }
};
function getTranslation(language) {
    return translations[language] || translations.en;
}
}),
"[project]/hooks/use-translation.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "useTranslation": ()=>useTranslation
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/translations.ts [app-ssr] (ecmascript)");
"use client";
;
;
function useTranslation(initialLanguage = "en") {
    const [currentLanguage, setCurrentLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialLanguage);
    const [t, setT] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTranslation"])(initialLanguage));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setT((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTranslation"])(currentLanguage));
    }, [
        currentLanguage
    ]);
    const changeLanguage = (language)=>{
        setCurrentLanguage(language);
    };
    return {
        t,
        currentLanguage,
        changeLanguage
    };
}
}),
"[project]/lib/data-service.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "dataService": ()=>dataService
});
const mockProjects = [
    {
        id: "1",
        title: "SafeSpace Mental Health App",
        description: "Comprehensive mental health and wellness application with mood tracking, AI journaling, and professional consultations",
        long_description: "SafeSpace is a comprehensive mental health and wellness application designed to provide users with tools for mental health management, professional support, and community connection. The app combines evidence-based therapeutic techniques with modern technology to create a supportive ecosystem for mental wellbeing. Core mission: To make mental health support accessible, personalized, and stigma-free through technology-enabled care solutions.",
        technologies: [
            "React Native",
            "TypeScript",
            "Expo Router",
            "PostgreSQL",
            "Node.js",
            "Express",
            "WebRTC",
            "WebSocket",
            "JWT",
            "AWS S3"
        ],
        category: "Mobile Application",
        github_url: "https://github.com/annieala/SafeSpace-prototype",
        demo_url: null,
        video_url: null,
        // No image for this project (hide media section on details page)
        image_url: null,
        figma_url: "https://www.figma.com/design/4fuzNHukJNygOXylaNqjct/Mobile?node-id=0-1&t=GuSJCPJG8kJr0xwn-1",
        featured: true,
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
        ]
    },
    {
        id: "2",
        title: "SafeSpace Web Platform",
        description: "Web version for staff, team leaders, support workers, and admins with user/referral/appointments management",
        long_description: "SafeSpace Web is a staff-facing platform featuring user management, referral management, appointments, and administrative tools. Designed for team leaders, support workers, and admins with accessibility and robust management workflows.",
        technologies: [
            "JavaScript",
            "React",
            "Web Development",
            "Responsive Design"
        ],
        category: "Web Application",
        github_url: "https://github.com/komalpreetkaur05/SafeSpaceApp",
        demo_url: null,
        video_url: null,
        image_url: "/safespace-web.png",
        figma_url: "https://www.figma.com/design/1uxJlnu19gOZCK47oarQXh/SafeSpace-Figma-Template?node-id=0-1&t=kNckyJSiOUD5zrDv-1",
        featured: true,
        created_at: "2024-01-15T00:00:00Z",
        updated_at: "2024-01-15T00:00:00Z",
        team: "Clarity Collective Team",
        role: "Frontend, Backend",
        features: [
            "User Management for staff and administrators",
            "Referral Management workflows",
            "Appointments scheduling and management",
            "Role-based access for team leader/support worker/admin"
        ]
    },
    {
        id: "3",
        title: "Rural Alberta Health Connect Website",
        description: "AI-Enhanced Telemedicine Platform for Rural Communities (web version of the mobile app)",
        long_description: "Rural Alberta Health Connect is an innovative AI-powered healthcare platform designed specifically to address the unique challenges faced by rural communities in Alberta. The platform bridges the healthcare gap with cutting-edge technology that works even in areas with limited internet connectivity, including multi-modal AI symptom analysis, offline-first design, and location-aware emergency triage.",
        technologies: [
            "React",
            "Next.js",
            "Tailwind CSS",
            "Node.js",
            "Computer Vision (YOLO)",
            "NLP"
        ],
        category: "Web Application",
        github_url: "https://github.com/RhailynJane/rahc_website",
        demo_url: null,
        video_url: null,
        image_url: "/rural-health-web.png",
        figma_url: "https://www.figma.com/design/2CyCUUXxpupNyevQsLoByj/AlbertaHealthConnect?node-id=0-1&t=DmOYSaEEOWPvALYu-1",
        featured: true,
        created_at: "2024-02-01T00:00:00Z",
        updated_at: "2024-02-01T00:00:00Z",
        team: "Rhailyn Jane Cona, Yue Zhou",
        role: "Project Manager, Frontend Developer",
        features: [
            "Multi-Modal AI Symptom Analysis (text + image via YOLO)",
            "24/7 AI-Powered Assessment with offline capability",
            "GPS-based emergency triage and facility finder",
            "Weather-aware routing and rural-optimized experience",
            "Privacy-compliant data handling (HIA/PIPEDA-aligned)",
            "Low-bandwidth optimization and PWA offline-first design"
        ]
    },
    {
        id: "4",
        title: "Rural Alberta Health Connect Mobile",
        description: "Improving Healthcare Access in Rural Alberta",
        long_description: "Alberta Health Connect is a mobile application designed to improve access to healthcare information and guidance for residents of rural Alberta. It provides an AI-powered triage system, considers rural challenges, protects privacy with local data storage, and works offline. Future plans include YOLOv8-based image recognition for symptom analysis.",
        technologies: [
            "React Native",
            "Expo",
            "Convex",
            "AI/ML (YOLOv8)"
        ],
        category: "Mobile Application",
        github_url: "https://github.com/RhailynJane/rural_alberta_health_connect_mobile",
        demo_url: null,
        video_url: null,
        image_url: "/rural-health-mobile.png",
        figma_url: "https://www.figma.com/design/2CyCUUXxpupNyevQsLoByj/AlbertaHealthConnect?node-id=0-1&t=DmOYSaEEOWPvALYu-1",
        featured: true,
        created_at: "2024-02-15T00:00:00Z",
        updated_at: "2024-02-15T00:00:00Z",
        team: "Rhailyn Cona, Yue Zhou",
        role: "UI/UX Designer, Frontend, Backend, Project Manager",
        features: [
            "AI-Powered Triage with conversational interface",
            "Rural-focused design (limited facilities, transport, weather)",
            "Secure & Private (encrypted, local device storage)",
            "Offline Access to core triage and disclaimers",
            "Future: YOLOv8 image recognition for symptom analysis"
        ]
    },
    {
        id: "5",
        title: "Professional Portfolio",
        description: "Personal portfolio showcasing projects and skills",
        long_description: "Personal portfolio website showcasing projects and skills with responsive design and project showcase features.",
        technologies: [
            "JavaScript",
            "Web Development"
        ],
        category: "Web Application",
        github_url: "https://github.com/RhailynJane/Portfolio",
        demo_url: null,
        video_url: null,
        image_url: "/portfolio.png",
        figma_url: null,
        featured: true,
        created_at: "2024-03-01T00:00:00Z",
        updated_at: "2024-03-01T00:00:00Z"
    },
    {
        id: "6",
        title: "FitmindAI App",
        description: "AI-powered fitness and mental wellness application",
        long_description: "FitMindAI is a comprehensive fitness application built with Expo and React Native. It features workout tracking, challenges (including AI-generated personalized challenges), user profiles, an exercise library, progress visualization, and AI coach insights.",
        technologies: [
            "React Native",
            "Expo",
            "Expo Router",
            "OpenAI API",
            "Firebase Firestore"
        ],
        category: "Mobile Application",
        github_url: "https://github.com/RhailynJane/FitMindAI_App",
        demo_url: null,
        video_url: null,
        image_url: "/fitmindai.png",
        figma_url: "https://www.figma.com/design/PBGbOCOsVMEX1ul9a2Y2Ax/FitMindAI?node-id=0-1&t=UYXIqGsbavai9er8-1",
        featured: true,
        created_at: "2024-04-01T00:00:00Z",
        updated_at: "2024-04-01T00:00:00Z",
        features: [
            "Workout Tracking and custom plans",
            "Challenges System with progress tracking and XP",
            "AI-Powered personalized challenges and AI coach insights",
            "Exercise Library with body part filtering",
            "Progress Visualization with charts and stats"
        ]
    },
    {
        id: "7",
        title: "CineTracker",
        description: "The Movie Discovery Platform (CineTracker): comprehensive entertainment tracking with TMDB and Firebase",
        long_description: "CineTracker is a Next.js-based platform integrated with TMDB API and Firebase, offering real-time content discovery, authentication, list management (watchlist, favorites, watched history), responsive UI, theme support, and performance optimizations. Advanced features include multi-criteria search, user profiles with stats, and SEO-friendly SSR.",
        technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Firebase Auth",
            "Firestore",
            "TMDB API"
        ],
        category: "Web Application",
        github_url: "https://github.com/RhailynJane/CineTracker",
        demo_url: null,
        video_url: null,
        image_url: "/cinetracker.png",
        figma_url: null,
        featured: true,
        created_at: "2024-05-01T00:00:00Z",
        updated_at: "2024-05-01T00:00:00Z",
        role: "Solo Project",
        features: [
            "TMDB-powered content discovery and details",
            "Firebase Auth with Google OAuth",
            "Watchlist, favorites, watched history with real-time sync",
            "Advanced search with filters and pagination",
            "Responsive, accessible UI with dark/light mode"
        ]
    },
    {
        id: "8",
        title: "Library Management Application",
        description: "Python-based application with book search, borrowing, and inventory management",
        technologies: [
            "Python",
            "CSV",
            "Git",
            "VS Code"
        ],
        category: "Desktop Application",
        github_url: "https://github.com/ConaRhai/library_management_app.git",
        demo_url: null,
        video_url: null,
        image_url: "/library-management-system.png",
        figma_url: null,
        featured: true,
        created_at: "2024-08-01T00:00:00Z",
        updated_at: "2024-08-01T00:00:00Z"
    },
    {
        id: "9",
        title: "Dog Care Project",
        description: "Responsive web application for dog care services",
        technologies: [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        category: "Web Application",
        github_url: "https://github.com/RhailynJane/Project_DogCare.git",
        demo_url: null,
        video_url: null,
        image_url: "/dog-care-website.png",
        figma_url: null,
        featured: true,
        created_at: "2024-08-01T00:00:00Z",
        updated_at: "2024-08-01T00:00:00Z"
    },
    {
        id: "10",
        title: "Travel Management Application",
        description: "Cross-platform travel reservation system",
        technologies: [
            "C#",
            ".NET MAUI"
        ],
        category: "Mobile Application",
        github_url: "https://github.com/RhailynJane/TravelessApp.git",
        demo_url: null,
        video_url: null,
        image_url: "/travel-management-app.png",
        figma_url: null,
        featured: true,
        created_at: "2024-10-01T00:00:00Z",
        updated_at: "2024-10-01T00:00:00Z"
    },
    {
        id: "11",
        title: "House Utility Management System",
        description: "A .NET MAUI app to manage home utilities with tracking, cost management, and reporting",
        long_description: "The House Utility Management System is a .NET MAUI application that assists users in managing their home utilities. With features like utility tracking, cost management, and detailed reporting, it simplifies the process of monitoring and optimizing utility usage. Users can add, edit, and delete utilities and review monthly summaries.",
        technologies: [
            ".NET MAUI",
            "C#",
            "SQLite/SQL Server"
        ],
        category: "Mobile Application",
        github_url: "https://github.com/RhailynJane/HouseUtilityManagementSystem.git",
        demo_url: null,
        video_url: null,
        image_url: "/placeholder-2b24u.png",
        figma_url: null,
        featured: true,
        created_at: "2024-11-01T00:00:00Z",
        updated_at: "2024-11-01T00:00:00Z",
        team: "Rhailyn Jane Cona, Komalpreet Kaur, Harjot Kaur, Joshua Thomson",
        role: "Frontend, Backend",
        features: [
            "Homepage with navigation and overview of recorded utilities",
            "Utilities management: add, edit, delete electricity/water/gas",
            "Detailed utility attributes: name, type, usage, cost, date recorded",
            "Monthly reports: total usage and cost summaries",
            "Usage history and cost breakdowns over time"
        ]
    },
    {
        id: "12",
        title: "Rental Management System",
        description: "Web-based rental property management",
        technologies: [
            "Blazor",
            "C#",
            "MySQL",
            "Figma"
        ],
        category: "Web Application",
        github_url: "https://github.com/RhailynJane/RentalManagementSystem.git",
        demo_url: null,
        video_url: null,
        image_url: "/rental-management-interface.png",
        figma_url: null,
        featured: true,
        created_at: "2024-11-01T00:00:00Z",
        updated_at: "2024-11-01T00:00:00Z"
    }
];
const mockSkillCategories = [
    {
        id: 1,
        title: "Frontend Development",
        icon: "Code",
        color: "text-blue-500",
        display_order: 1
    },
    {
        id: 2,
        title: "Backend & Database",
        icon: "Database",
        color: "text-green-500",
        display_order: 2
    },
    {
        id: 3,
        title: "Mobile Development",
        icon: "Code",
        color: "text-purple-500",
        display_order: 3
    },
    {
        id: 4,
        title: "Testing & Quality Assurance",
        icon: "Code",
        color: "text-red-500",
        display_order: 4
    },
    {
        id: 5,
        title: "UI/UX Design",
        icon: "Palette",
        color: "text-pink-500",
        display_order: 5
    },
    {
        id: 6,
        title: "DevOps & Tools",
        icon: "Wrench",
        color: "text-orange-500",
        display_order: 6
    }
];
const mockSkills = [
    // Frontend Development
    {
        id: 1,
        category_id: 1,
        name: "HTML5 & CSS3",
        level: 95,
        display_order: 1
    },
    {
        id: 2,
        category_id: 1,
        name: "JavaScript (ES6+)",
        level: 95,
        display_order: 2
    },
    {
        id: 3,
        category_id: 1,
        name: "TypeScript",
        level: 90,
        display_order: 3
    },
    {
        id: 4,
        category_id: 1,
        name: "React.js",
        level: 92,
        display_order: 4
    },
    {
        id: 5,
        category_id: 1,
        name: "Next.js",
        level: 88,
        display_order: 5
    },
    {
        id: 6,
        category_id: 1,
        name: "Tailwind CSS",
        level: 90,
        display_order: 6
    },
    {
        id: 7,
        category_id: 1,
        name: "Responsive Design",
        level: 93,
        display_order: 7
    },
    // Backend & Database
    {
        id: 8,
        category_id: 2,
        name: "Node.js",
        level: 88,
        display_order: 1
    },
    {
        id: 9,
        category_id: 2,
        name: "Python",
        level: 85,
        display_order: 2
    },
    {
        id: 10,
        category_id: 2,
        name: "C# & .NET",
        level: 82,
        display_order: 3
    },
    {
        id: 11,
        category_id: 2,
        name: "SQL (MySQL/PostgreSQL)",
        level: 85,
        display_order: 4
    },
    {
        id: 12,
        category_id: 2,
        name: "Prisma ORM",
        level: 80,
        display_order: 5
    },
    {
        id: 13,
        category_id: 2,
        name: "RESTful APIs",
        level: 88,
        display_order: 6
    },
    // Mobile Development
    {
        id: 14,
        category_id: 3,
        name: "React Native",
        level: 85,
        display_order: 1
    },
    {
        id: 15,
        category_id: 3,
        name: ".NET MAUI",
        level: 80,
        display_order: 2
    },
    {
        id: 16,
        category_id: 3,
        name: "Cross-Platform Dev",
        level: 83,
        display_order: 3
    },
    {
        id: 17,
        category_id: 3,
        name: "Mobile UI/UX",
        level: 85,
        display_order: 4
    },
    // Testing & QA
    {
        id: 18,
        category_id: 4,
        name: "Cypress",
        level: 90,
        display_order: 1
    },
    {
        id: 19,
        category_id: 4,
        name: "Selenium",
        level: 85,
        display_order: 2
    },
    {
        id: 20,
        category_id: 4,
        name: "Postman/API Testing",
        level: 92,
        display_order: 3
    },
    {
        id: 21,
        category_id: 4,
        name: "Manual Testing",
        level: 95,
        display_order: 4
    },
    {
        id: 22,
        category_id: 4,
        name: "Test Planning",
        level: 90,
        display_order: 5
    },
    {
        id: 23,
        category_id: 4,
        name: "Regression Testing",
        level: 93,
        display_order: 6
    },
    // UI/UX Design
    {
        id: 24,
        category_id: 5,
        name: "Figma",
        level: 88,
        display_order: 1
    },
    {
        id: 25,
        category_id: 5,
        name: "Prototyping",
        level: 85,
        display_order: 2
    },
    {
        id: 26,
        category_id: 5,
        name: "Wireframing",
        level: 83,
        display_order: 3
    },
    {
        id: 27,
        category_id: 5,
        name: "User Research",
        level: 80,
        display_order: 4
    },
    // DevOps & Tools
    {
        id: 28,
        category_id: 6,
        name: "Git & GitHub",
        level: 92,
        display_order: 1
    },
    {
        id: 29,
        category_id: 6,
        name: "Agile/Scrum",
        level: 90,
        display_order: 2
    },
    {
        id: 30,
        category_id: 6,
        name: "CI/CD (Jenkins)",
        level: 80,
        display_order: 3
    },
    {
        id: 31,
        category_id: 6,
        name: "Jira & Confluence",
        level: 93,
        display_order: 4
    }
];
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
    "Wireshark"
];
const mockFeedback = [];
const mockExperience = [
    {
        id: 1,
        title: "Software QA Engineer",
        company: "Convoso Inc.",
        start_date: "2023-03-01",
        end_date: null,
        is_current: true,
        location: "Remote",
        description: "Assist quality assurance initiatives by executing comprehensive testing methodologies including regression, smoke, sanity, and performance testing to identify critical defects and ensure high-quality software delivery. Collaborate closely with developers to understand requirements and design specifications while creating detailed test plans and cases that enhance testing process consistency. Work with the Product Team to review user stories and acceptance criteria, ensuring product alignment with business requirements and improving overall communication and project outcomes. Transitioned to the automation team, contributing to automated testing efforts using Cypress to improve testing efficiency and coverage.",
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
            "HTML/CSS"
        ]
    },
    {
        id: 2,
        title: "Product Support Engineer",
        company: "Convoso Inc.",
        start_date: "2022-05-01",
        end_date: "2023-03-01",
        is_current: false,
        location: "Remote",
        description: "Resolved complex customer technical support cases escalated by Technical Support Analysts via phone and email, leading to increased customer satisfaction and reduced resolution time. Contributed to the creation of comprehensive articles on product usage and troubleshooting to build a robust knowledge base, resulting in decreased support requests. Provided real-time technical guidance to Technical Support Analysts, fostering team development and enhancing overall support efficiency while analyzing recurring issues to drive product improvements.",
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
            "Communication"
        ]
    },
    {
        id: 3,
        title: "Technical Support Analyst",
        company: "Convoso Inc.",
        start_date: "2021-07-01",
        end_date: "2022-05-01",
        is_current: false,
        location: "Remote",
        description: "Responded to customer inquiries via phone, chat, and email, ensuring quick and effective first-level technical support to address technical issues and concerns. Documented all customer interactions and solutions in the ticketing system, enabling seamless escalations and follow-ups while maintaining high customer satisfaction scores. Identified recurring issues and escalated them to higher-level support teams to drive product improvement and reduce repetitive tickets.",
        skills: [
            "Technical Support",
            "Customer Service",
            "Troubleshooting",
            "Ticketing Systems",
            "Zendesk",
            "Communication",
            "Problem Solving",
            "Documentation",
            "Time Management"
        ]
    },
    {
        id: 4,
        title: "Level 2 Technical Support Engineer",
        company: "Ascent Solutions Pte Ltd",
        start_date: "2020-09-01",
        end_date: "2021-07-01",
        is_current: false,
        location: "Remote",
        description: "Provided second-level technical support for GPS tracking solutions (Wialon, Flespi), addressing queries via phone and email, which improved customer resolution times and satisfaction. Documented issue details and troubleshooting steps in Zoho Desk to maintain accurate support records, resulting in better tracking and faster issue resolution. Conducted root cause analysis for recurring issues, providing recommendations to enhance system stability and reduce support tickets. Assisted in deploying new software updates, ensuring seamless integration and minimal disruption for end-users, while troubleshooting IP Phone/Softphone configurations and PBX systems.",
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
            "Wireshark"
        ]
    },
    {
        id: 5,
        title: "Technical Support Engineer 2",
        company: "Emerson Electric Asia, LTD ROHQ",
        start_date: "2017-11-01",
        end_date: "2020-02-01",
        is_current: false,
        location: "Manila, Philippines",
        description: "Provided second-level technical support for GPS tracking and telecommunications systems via phone and email, resulting in improved customer resolution times and satisfaction. Documented comprehensive issue details and troubleshooting procedures in Zoho Desk to maintain accurate support records, leading to better tracking and faster issue resolution. Conducted training sessions for new hires, equipping them with the skills and knowledge needed for effective technical support. Collaborated with cross-functional teams to identify and resolve hardware and software compatibility issues, improving overall system performance, while performing network diagnostics using tools like Wireshark and Putty for advanced troubleshooting.",
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
            "VoIP Configuration"
        ]
    }
];
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
        achievements: [
            "Expected Graduation: December 2025",
            "Focus on Full-Stack Development",
            "Hands-on Project Experience"
        ],
        description: "Comprehensive diploma program focused on modern software development practices, covering full-stack web development, mobile application development, database management, and software engineering principles. Gained hands-on experience with industry-standard tools and technologies including React, React Native, .NET MAUI, Python, C#, MySQL, PostgreSQL, and modern development workflows using Git, Jira, and Agile methodologies."
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
            "Broadkast ng Talino 2017 (Top 20 Finalist)"
        ],
        description: "Comprehensive engineering degree program specializing in electronics systems design, circuit analysis, microcontroller programming, and telecommunications. Developed strong analytical and problem-solving skills through rigorous coursework in mathematics, physics, and engineering principles. Recognized for academic excellence as a consistent Dean Lister and recipient of prestigious scholarship programs. Served as Business Manager for the College of Engineering and Industrial Technology, demonstrating leadership and organizational capabilities."
    }
];
const mockCertifications = [
    {
        id: 1,
        name: "Cypress End-to-End Testing",
        issuing_organization: "Udemy",
        issue_date: "2024-12-01",
        expiry_date: null,
        description: "Comprehensive course on automated testing using Cypress framework for web applications."
    },
    {
        id: 2,
        name: "Figma Essential Training",
        issuing_organization: "LinkedIn Learning",
        issue_date: "2024-11-01",
        expiry_date: null,
        description: "Professional training on UI/UX design using Figma, covering design systems and prototyping."
    },
    {
        id: 3,
        name: "Google IT Support Professional Certificate",
        issuing_organization: "Google",
        issue_date: "2022-10-01",
        expiry_date: null,
        description: "Comprehensive IT support certification covering troubleshooting, customer service, networking, operating systems, system administration, and security."
    },
    {
        id: 4,
        name: "Electronics Engineer License",
        issuing_organization: "Professional Regulation Commission (Philippines)",
        issue_date: "2017-11-01",
        expiry_date: null,
        description: "Professional engineering license for electronics engineering practice in the Philippines."
    }
];
const dataService = {
    // Projects - Fetch from API (database) with fallback to mock data
    async getProjects () {
        try {
            const res = await fetch("/api/projects", {
                cache: "no-store"
            });
            if (!res.ok) throw new Error("Failed to fetch projects");
            return await res.json();
        } catch (e) {
            console.error("Error fetching projects, using mock data:", e);
            return mockProjects;
        }
    },
    async getFeaturedProjects () {
        try {
            const res = await fetch("/api/projects?featured=true", {
                cache: "no-store"
            });
            if (!res.ok) throw new Error("Failed to fetch featured projects");
            return await res.json();
        } catch (e) {
            console.error("Error fetching featured projects, using mock data:", e);
            return mockProjects.filter((p)=>p.featured);
        }
    },
    async getProjectById (id) {
        try {
            const res = await fetch(`/api/projects?id=${id}`, {
                cache: "no-store"
            });
            if (!res.ok) throw new Error("Failed to fetch project");
            return await res.json();
        } catch (e) {
            console.error("Error fetching project, using mock data:", e);
            return mockProjects.find((p)=>p.id === id);
        }
    },
    async getProjectsByCategory (category) {
        try {
            const res = await fetch(`/api/projects?category=${encodeURIComponent(category)}`, {
                cache: "no-store"
            });
            if (!res.ok) throw new Error("Failed to fetch projects by category");
            return await res.json();
        } catch (e) {
            console.error("Error fetching projects by category, using mock data:", e);
            return mockProjects.filter((p)=>p.category === category);
        }
    },
    // Feedback via API endpoints
    async getApprovedFeedback () {
        try {
            const res = await fetch("/api/feedback", {
                cache: "no-store"
            });
            if (!res.ok) throw new Error("Failed to fetch feedback");
            return await res.json();
        } catch (e) {
            console.error("Error fetching approved feedback:", e);
            return mockFeedback.filter((f)=>f.approved);
        }
    },
    async submitFeedback (feedback) {
        try {
            const res = await fetch("/api/feedback", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(feedback)
            });
            if (!res.ok) throw new Error("Failed to submit feedback");
            const data = await res.json();
            return {
                success: true,
                message: "Feedback submitted successfully!",
                id: data.id
            };
        } catch (e) {
            console.error("Error submitting feedback:", e);
            return {
                success: false,
                message: "Failed to submit feedback. Please try again."
            };
        }
    },
    // Skills - Fetch from API (database) with fallback to mock data
    async getSkillCategories () {
        try {
            const res = await fetch("/api/skills", {
                cache: "no-store"
            });
            if (!res.ok) throw new Error("Failed to fetch skills");
            return await res.json();
        } catch (e) {
            console.error("Error fetching skills, using mock data:", e);
            return mockSkillCategories;
        }
    },
    async getSkillsByCategory (categoryId) {
        try {
            const categories = await this.getAllSkillsWithCategories();
            const category = categories.find((c)=>c.id === categoryId);
            return category?.skills || [];
        } catch (e) {
            console.error("Error fetching skills by category:", e);
            return mockSkills.filter((s)=>s.category_id === categoryId);
        }
    },
    async getAllSkillsWithCategories () {
        try {
            const res = await fetch("/api/skills", {
                cache: "no-store"
            });
            if (!res.ok) throw new Error("Failed to fetch skills");
            return await res.json();
        } catch (e) {
            console.error("Error fetching skills, using mock data:", e);
            return mockSkillCategories.map((c)=>({
                    ...c,
                    skills: mockSkills.filter((s)=>s.category_id === c.id)
                }));
        }
    },
    async getTools () {
        try {
            const res = await fetch("/api/tools", {
                cache: "no-store"
            });
            if (!res.ok) throw new Error("Failed to fetch tools");
            return await res.json();
        } catch (e) {
            console.error("Error fetching tools, using mock data:", e);
            return mockTools;
        }
    },
    // Experience - Fetch from API (database) with fallback to mock data
    async getExperience () {
        try {
            const res = await fetch("/api/experience", {
                cache: "no-store"
            });
            if (!res.ok) throw new Error("Failed to fetch experience");
            return await res.json();
        } catch (e) {
            console.error("Error fetching experience, using mock data:", e);
            return mockExperience;
        }
    },
    async getCurrentExperience () {
        try {
            const res = await fetch("/api/experience?current=true", {
                cache: "no-store"
            });
            if (!res.ok) throw new Error("Failed to fetch current experience");
            return await res.json();
        } catch (e) {
            console.error("Error fetching current experience, using mock data:", e);
            return mockExperience.filter((e)=>e.is_current);
        }
    },
    // Education - Fetch from API (database) with fallback to mock data
    async getEducation () {
        try {
            const res = await fetch("/api/education", {
                cache: "no-store"
            });
            if (!res.ok) throw new Error("Failed to fetch education");
            return await res.json();
        } catch (e) {
            console.error("Error fetching education, using mock data:", e);
            return mockEducation;
        }
    },
    // Certifications - Fetch from API (database) with fallback to mock data
    async getCertifications () {
        try {
            const res = await fetch("/api/certifications", {
                cache: "no-store"
            });
            if (!res.ok) throw new Error("Failed to fetch certifications");
            return await res.json();
        } catch (e) {
            console.error("Error fetching certifications, using mock data:", e);
            return mockCertifications;
        }
    },
    async getActiveCertifications () {
        try {
            const res = await fetch("/api/certifications?active=true", {
                cache: "no-store"
            });
            if (!res.ok) throw new Error("Failed to fetch active certifications");
            return await res.json();
        } catch (e) {
            console.error("Error fetching active certifications, using mock data:", e);
            return mockCertifications.filter((c)=>!c.expiry_date || new Date(c.expiry_date) > new Date());
        }
    }
};
}),
"[project]/app/projects/[id]/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>ProjectDetailPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-ssr] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-ssr] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code.js [app-ssr] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$translation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-translation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data-service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
function ProjectDetailPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$translation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    const [project, setProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchProject = async ()=>{
            try {
                setLoading(true);
                const projectData = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataService"].getProjectById(params.id);
                if (projectData) {
                    // Transform the data to match the expected interface
                    const transformedProject = {
                        id: projectData.id,
                        title: projectData.title,
                        description: projectData.description,
                        longDescription: projectData.long_description || projectData.description,
                        image: projectData.image_url || "",
                        technologies: projectData.technologies || [],
                        category: projectData.category,
                        github: projectData.github_url || "",
                        demo: projectData.demo_url || "",
                        videoUrl: projectData.video_url || "",
                        figmaUrl: projectData.figma_url || "",
                        features: projectData.features || [],
                        duration: projectData.duration || "Not specified",
                        timeline: projectData.timeline || "",
                        team: projectData.team || "Solo Project",
                        role: projectData.role || "",
                        date: new Date(projectData.created_at).toLocaleDateString("en-US", {
                            month: "long",
                            year: "numeric"
                        }) || "Not specified"
                    };
                    setProject(transformedProject);
                }
            } catch (error) {
                console.error("Error fetching project:", error);
            } finally{
                setLoading(false);
            }
        };
        if (params.id) {
            fetchProject();
        }
    }, [
        params.id
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/app/projects/[id]/page.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground",
                        children: "Loading project details..."
                    }, void 0, false, {
                        fileName: "[project]/app/projects/[id]/page.tsx",
                        lineNumber: 87,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/projects/[id]/page.tsx",
                lineNumber: 85,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/projects/[id]/page.tsx",
            lineNumber: 84,
            columnNumber: 7
        }, this);
    }
    if (!project) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold mb-4",
                        children: "Project Not Found"
                    }, void 0, false, {
                        fileName: "[project]/app/projects/[id]/page.tsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: ()=>router.back(),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "h-4 w-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/app/projects/[id]/page.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this),
                            "Go Back"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/projects/[id]/page.tsx",
                        lineNumber: 98,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/projects/[id]/page.tsx",
                lineNumber: 96,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/projects/[id]/page.tsx",
            lineNumber: 95,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-background to-secondary/20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-4 py-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            onClick: ()=>router.push("/#projects"),
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    className: "h-4 w-4 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/app/projects/[id]/page.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this),
                                "Back to Projects"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/projects/[id]/page.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                    variant: "secondary",
                                    className: "mb-2",
                                    children: project.category
                                }, void 0, false, {
                                    fileName: "[project]/app/projects/[id]/page.tsx",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-4xl lg:text-5xl font-bold text-foreground font-sans",
                                    children: project.title
                                }, void 0, false, {
                                    fileName: "[project]/app/projects/[id]/page.tsx",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl text-muted-foreground font-serif max-w-3xl",
                                    children: project.description
                                }, void 0, false, {
                                    fileName: "[project]/app/projects/[id]/page.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/projects/[id]/page.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/projects/[id]/page.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this),
                (project.image || project.videoUrl) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                    className: "mb-8 overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "p-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative aspect-video bg-muted",
                            children: [
                                project.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: project.image,
                                    alt: project.title,
                                    className: "w-full h-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/app/projects/[id]/page.tsx",
                                    lineNumber: 132,
                                    columnNumber: 19
                                }, this),
                                project.videoUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 flex items-center justify-center bg-black/20",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "lg",
                                        className: "bg-primary/90 hover:bg-primary",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                className: "h-6 w-6 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/app/projects/[id]/page.tsx",
                                                lineNumber: 141,
                                                columnNumber: 23
                                            }, this),
                                            "Watch Demo"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/projects/[id]/page.tsx",
                                        lineNumber: 140,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/projects/[id]/page.tsx",
                                    lineNumber: 139,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/projects/[id]/page.tsx",
                            lineNumber: 130,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/projects/[id]/page.tsx",
                        lineNumber: 129,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/projects/[id]/page.tsx",
                    lineNumber: 128,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid lg:grid-cols-3 gap-8 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-2 space-y-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                                                        className: "h-5 w-5 text-primary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/projects/[id]/page.tsx",
                                                        lineNumber: 159,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Project Overview"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/projects/[id]/page.tsx",
                                                lineNumber: 158,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/projects/[id]/page.tsx",
                                            lineNumber: 157,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted-foreground font-serif leading-relaxed",
                                                    children: project.longDescription
                                                }, void 0, false, {
                                                    fileName: "[project]/app/projects/[id]/page.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 17
                                                }, this),
                                                project.features && project.features.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-semibold mb-2",
                                                            children: "Key Features:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/projects/[id]/page.tsx",
                                                            lineNumber: 168,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "space-y-2",
                                                            children: project.features.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/projects/[id]/page.tsx",
                                                                            lineNumber: 172,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-muted-foreground font-serif",
                                                                            children: feature
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/projects/[id]/page.tsx",
                                                                            lineNumber: 173,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, index, true, {
                                                                    fileName: "[project]/app/projects/[id]/page.tsx",
                                                                    lineNumber: 171,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/projects/[id]/page.tsx",
                                                            lineNumber: 169,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/projects/[id]/page.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/projects/[id]/page.tsx",
                                            lineNumber: 163,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/projects/[id]/page.tsx",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                children: "Technologies Used"
                                            }, void 0, false, {
                                                fileName: "[project]/app/projects/[id]/page.tsx",
                                                lineNumber: 187,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/projects/[id]/page.tsx",
                                            lineNumber: 186,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2",
                                                children: project.technologies.map((tech)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                        variant: "outline",
                                                        children: tech
                                                    }, tech, false, {
                                                        fileName: "[project]/app/projects/[id]/page.tsx",
                                                        lineNumber: 192,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/projects/[id]/page.tsx",
                                                lineNumber: 190,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/projects/[id]/page.tsx",
                                            lineNumber: 189,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/projects/[id]/page.tsx",
                                    lineNumber: 185,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/projects/[id]/page.tsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                children: "Project Info"
                                            }, void 0, false, {
                                                fileName: "[project]/app/projects/[id]/page.tsx",
                                                lineNumber: 206,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/projects/[id]/page.tsx",
                                            lineNumber: 205,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                            className: "space-y-4",
                                            children: [
                                                project.role && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-semibold text-muted-foreground",
                                                            children: "Role:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/projects/[id]/page.tsx",
                                                            lineNumber: 211,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm leading-relaxed",
                                                            children: project.role
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/projects/[id]/page.tsx",
                                                            lineNumber: 212,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/projects/[id]/page.tsx",
                                                    lineNumber: 210,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                            className: "h-4 w-4 text-muted-foreground"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/projects/[id]/page.tsx",
                                                            lineNumber: 216,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-muted-foreground",
                                                            children: "Team:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/projects/[id]/page.tsx",
                                                            lineNumber: 217,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: project.team
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/projects/[id]/page.tsx",
                                                            lineNumber: 218,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/projects/[id]/page.tsx",
                                                    lineNumber: 215,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                            className: "h-4 w-4 text-muted-foreground"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/projects/[id]/page.tsx",
                                                            lineNumber: 221,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-muted-foreground",
                                                            children: "Duration:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/projects/[id]/page.tsx",
                                                            lineNumber: 222,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: project.duration
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/projects/[id]/page.tsx",
                                                            lineNumber: 223,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/projects/[id]/page.tsx",
                                                    lineNumber: 220,
                                                    columnNumber: 17
                                                }, this),
                                                project.timeline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1 pt-2 border-t",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-semibold text-muted-foreground",
                                                            children: "Timeline:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/projects/[id]/page.tsx",
                                                            lineNumber: 227,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm leading-relaxed",
                                                            children: project.timeline
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/projects/[id]/page.tsx",
                                                            lineNumber: 228,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/projects/[id]/page.tsx",
                                                    lineNumber: 226,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                            className: "h-4 w-4 text-muted-foreground"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/projects/[id]/page.tsx",
                                                            lineNumber: 232,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-muted-foreground",
                                                            children: "Completed:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/projects/[id]/page.tsx",
                                                            lineNumber: 233,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: project.date
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/projects/[id]/page.tsx",
                                                            lineNumber: 234,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/projects/[id]/page.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/projects/[id]/page.tsx",
                                            lineNumber: 208,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/projects/[id]/page.tsx",
                                    lineNumber: 204,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                children: "Links"
                                            }, void 0, false, {
                                                fileName: "[project]/app/projects/[id]/page.tsx",
                                                lineNumber: 242,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/projects/[id]/page.tsx",
                                            lineNumber: 241,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                            className: "space-y-3",
                                            children: [
                                                project.github && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    asChild: true,
                                                    className: "w-full",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: project.github,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                                                className: "h-4 w-4 mr-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/projects/[id]/page.tsx",
                                                                lineNumber: 248,
                                                                columnNumber: 23
                                                            }, this),
                                                            "View on GitHub"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/projects/[id]/page.tsx",
                                                        lineNumber: 247,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/projects/[id]/page.tsx",
                                                    lineNumber: 246,
                                                    columnNumber: 19
                                                }, this),
                                                project.demo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    asChild: true,
                                                    variant: "outline",
                                                    className: "w-full bg-transparent",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: project.demo,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                className: "h-4 w-4 mr-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/projects/[id]/page.tsx",
                                                                lineNumber: 256,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Live Demo"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/projects/[id]/page.tsx",
                                                        lineNumber: 255,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/projects/[id]/page.tsx",
                                                    lineNumber: 254,
                                                    columnNumber: 19
                                                }, this),
                                                project.figmaUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    asChild: true,
                                                    variant: "outline",
                                                    className: "w-full bg-transparent",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: project.figmaUrl,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                className: "h-4 w-4 mr-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/projects/[id]/page.tsx",
                                                                lineNumber: 264,
                                                                columnNumber: 23
                                                            }, this),
                                                            "View in Figma"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/projects/[id]/page.tsx",
                                                        lineNumber: 263,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/projects/[id]/page.tsx",
                                                    lineNumber: 262,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/projects/[id]/page.tsx",
                                            lineNumber: 244,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/projects/[id]/page.tsx",
                                    lineNumber: 240,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/projects/[id]/page.tsx",
                            lineNumber: 202,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/projects/[id]/page.tsx",
                    lineNumber: 152,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/projects/[id]/page.tsx",
            lineNumber: 109,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/projects/[id]/page.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__55e0d5ba._.js.map