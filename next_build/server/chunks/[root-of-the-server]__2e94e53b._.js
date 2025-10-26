module.exports = {

"[project]/.next-internal/server/app/api/projects/route/actions.js [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

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
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/@prisma/client [external] (@prisma/client, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}}),
"[project]/lib/prisma.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "prisma": ()=>prisma
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma ?? new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]({
    log: [
        "error",
        "warn"
    ]
});
if ("TURBOPACK compile-time truthy", 1) globalForPrisma.prisma = prisma;
}),
"[project]/lib/validation.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// Lightweight input validation helpers to reduce risk of injection and invalid data
__turbopack_context__.s({
    "UUID_REGEX": ()=>UUID_REGEX,
    "clampNumber": ()=>clampNumber,
    "isEmail": ()=>isEmail,
    "isSafeCategory": ()=>isSafeCategory,
    "isUUID": ()=>isUUID,
    "sanitizeString": ()=>sanitizeString
});
const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
function isUUID(v) {
    return typeof v === "string" && UUID_REGEX.test(v);
}
function sanitizeString(v, maxLen = 256) {
    if (typeof v !== "string") return "";
    const s = v.trim();
    return s.length > maxLen ? s.slice(0, maxLen) : s;
}
function isEmail(v) {
    if (typeof v !== "string") return false;
    const s = v.trim();
    if (s.length === 0 || s.length > 254) return false;
    // RFC 5322 simplified
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}
function isSafeCategory(v, maxLen = 64) {
    if (typeof v !== "string") return false;
    const s = v.trim();
    if (s.length === 0 || s.length > maxLen) return false;
    // allow letters, numbers, spaces, dashes, underscores, slashes
    return /^[A-Za-z0-9 _\-/]+$/.test(s);
}
function clampNumber(n, min, max, fallback) {
    const num = typeof n === "number" ? n : Number(n);
    if (Number.isNaN(num)) return fallback;
    return Math.min(max, Math.max(min, num));
}
}),
"[project]/app/api/projects/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "GET": ()=>GET
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/validation.ts [app-route] (ecmascript)");
;
;
;
async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id");
        const category = searchParams.get("category");
        const featured = searchParams.get("featured");
        let projects;
        if (id) {
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isUUID"])(id)) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: "Invalid id"
                }, {
                    status: 400
                });
            }
            const project = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].project.findUnique({
                where: {
                    id
                }
            });
            if (!project) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: "Project not found"
                }, {
                    status: 404
                });
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                id: project.id,
                title: project.title,
                description: project.description,
                long_description: project.longDescription || undefined,
                technologies: project.technologies,
                category: project.category,
                github_url: project.githubUrl,
                demo_url: project.demoUrl,
                video_url: project.videoUrl,
                image_url: project.imageUrl,
                figma_url: project.figmaUrl,
                featured: project.featured,
                created_at: project.createdAt.toISOString(),
                updated_at: project.updatedAt.toISOString(),
                role: project.role || undefined,
                team: project.team || undefined,
                duration: project.duration || undefined,
                timeline: project.timeline || undefined,
                features: project.features || undefined
            });
        }
        if (category) {
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isSafeCategory"])(category)) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: "Invalid category"
                }, {
                    status: 400
                });
            }
            projects = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].project.findMany({
                where: {
                    category
                },
                orderBy: {
                    createdAt: "desc"
                }
            });
        } else if (featured === "true") {
            projects = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].project.findMany({
                where: {
                    featured: true
                },
                orderBy: {
                    createdAt: "desc"
                }
            });
        } else {
            projects = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].project.findMany({
                orderBy: {
                    createdAt: "desc"
                }
            });
        }
        const formattedProjects = projects.map((p)=>({
                id: p.id,
                title: p.title,
                description: p.description,
                long_description: p.longDescription || undefined,
                technologies: p.technologies,
                category: p.category,
                github_url: p.githubUrl,
                demo_url: p.demoUrl,
                video_url: p.videoUrl,
                image_url: p.imageUrl,
                figma_url: p.figmaUrl,
                featured: p.featured,
                created_at: p.createdAt.toISOString(),
                updated_at: p.updatedAt.toISOString(),
                role: p.role || undefined,
                team: p.team || undefined,
                duration: p.duration || undefined,
                timeline: p.timeline || undefined,
                features: p.features || undefined
            }));
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(formattedProjects);
    } catch (error) {
        console.error("Error fetching projects:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to fetch projects"
        }, {
            status: 500
        });
    }
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__2e94e53b._.js.map