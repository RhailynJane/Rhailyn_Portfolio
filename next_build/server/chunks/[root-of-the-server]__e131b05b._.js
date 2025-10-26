module.exports = {

"[project]/.next-internal/server/app/api/feedback/route/actions.js [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {

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
"[project]/app/api/feedback/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "GET": ()=>GET,
    "POST": ()=>POST
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/validation.ts [app-route] (ecmascript)");
;
;
;
async function GET() {
    try {
        const feedback = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].feedback.findMany({
            where: {
                approved: true
            },
            orderBy: {
                createdAt: "desc"
            }
        });
        // Exclude soft-deleted on the server side
        const filtered = feedback.filter((f)=>!f.deleted);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(filtered);
    } catch (e) {
        console.error("Database error:", e);
        // Return empty array when database is unavailable
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json([]);
    }
}
async function POST(req) {
    try {
        const body = await req.json();
        const name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeString"])(body?.name, 100);
        const email = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeString"])(body?.email, 254);
        const company = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeString"])(body?.company, 120) || null;
        const position = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeString"])(body?.position, 120) || null;
        const message = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeString"])(body?.message, 5000);
        const rating = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["clampNumber"])(body?.rating, 1, 5, 5);
        if (!name || !message) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Name and message are required"
            }, {
                status: 400
            });
        }
        if (email && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isEmail"])(email)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Invalid email"
            }, {
                status: 400
            });
        }
        const created = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].feedback.create({
            data: {
                name,
                email,
                company,
                position,
                message,
                rating,
                approved: false
            }
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            id: created.id
        });
    } catch (e) {
        console.error("Database error:", e);
        // Return success even if database is unavailable (for development)
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            id: Date.now(),
            message: "Feedback received (mock mode)"
        });
    }
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__e131b05b._.js.map