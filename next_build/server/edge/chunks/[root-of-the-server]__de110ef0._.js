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
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__ = /*#__PURE__*/ __turbopack_context__.i("[externals]/node:buffer [external] (node:buffer, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware-edge] (ecmascript)");
;
// Routes to protect with HTTP Basic Auth
const protectedMatchers = [
    /^\/admin(\/.*)?$/,
    /^\/api\/feedback\/moderation(\/.*)?$/
];
function unauthorized() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"]("Unauthorized", {
        status: 401,
        headers: {
            "WWW-Authenticate": 'Basic realm="Restricted"'
        }
    });
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
function middleware(req) {
    const { pathname } = req.nextUrl;
    const needsAuth = protectedMatchers.some((rx)=>rx.test(pathname));
    if (!needsAuth) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    const header = req.headers.get("authorization") || "";
    if (!header.startsWith("Basic ")) return unauthorized();
    try {
        const decoded = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].from(header.replace("Basic ", ""), "base64").toString();
        const [user, pass] = decoded.split(":");
        // Normalize env values to avoid accidental trailing whitespace/newlines
        const expectedUser = (process.env.ADMIN_USER || "").trim();
        const expectedPass = (process.env.ADMIN_PASSWORD || "").trim();
        if (!safeEqual(user || "", expectedUser) || !safeEqual(pass || "", expectedPass)) {
            return unauthorized();
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    } catch  {
        return unauthorized();
    }
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