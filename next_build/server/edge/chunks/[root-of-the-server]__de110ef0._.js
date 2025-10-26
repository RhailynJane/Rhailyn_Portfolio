(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/[root-of-the-server]__de110ef0._.js", {

"[externals]/node:buffer [external] (node:buffer, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}}),
"[project]/middleware.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "config": ()=>config,
    "middleware": ()=>middleware
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware-edge] (ecmascript)");
;
// Routes to protect with app-level session auth
const protectedMatchers = [
    /^\/admin(\/.*)?$/,
    /^\/api\/feedback\/moderation(\/.*)?$/
];
function redirectToSignin(req) {
    const url = new URL("/admin/signin", req.url);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(url);
}
// Timing-safe string compare that works in the middleware (Edge) runtime
function safeEqual(a, b) {
    const enc = new TextEncoder();
    const aBytes = enc.encode(a);
    const bBytes = enc.encode(b);
    const len = Math.max(aBytes.length, bBytes.length);
    let result = 0;
    for(let i = 0; i < len; i++){
        const x = aBytes[i] ?? 0;
        const y = bBytes[i] ?? 0;
        result |= x ^ y;
    }
    return result === 0 && aBytes.length === bBytes.length;
}
async function middleware(req) {
    const { pathname } = req.nextUrl;
    // Allow the signin page and login/logout APIs without auth
    const publicPaths = [
        "/admin/signin",
        "/api/admin/login",
        "/api/logout"
    ];
    if (publicPaths.includes(pathname)) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    const needsAuth = protectedMatchers.some((rx)=>rx.test(pathname));
    if (!needsAuth) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    // Verify session cookie matches expected token derived from env
    const session = req.cookies.get("admin_session")?.value || "";
    const expectedUser = (process.env.ADMIN_USER || "").trim();
    const expectedPass = (process.env.ADMIN_PASSWORD || "").trim();
    const secret = (process.env.ADMIN_SECRET || "default-secret").trim();
    const data = new TextEncoder().encode(`${expectedUser}:${expectedPass}:${secret}`);
    const digest = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(digest));
    const expectedToken = hashArray.map((b)=>b.toString(16).padStart(2, "0")).join("");
    if (!safeEqual(session, expectedToken)) {
        return redirectToSignin(req);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
}
const config = {
    matcher: [
        "/admin/:path*",
        "/api/feedback/moderation/:path*"
    ]
};
}),
}]);

//# sourceMappingURL=%5Broot-of-the-server%5D__de110ef0._.js.map