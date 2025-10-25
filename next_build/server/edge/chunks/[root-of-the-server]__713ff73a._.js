(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/[root-of-the-server]__713ff73a._.js", {

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
"[project]/ [middleware-edge] (unsupported edge import crypto, ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
__turbopack_context__.n(__import_unsupported(`crypto`));
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
var __TURBOPACK__imported__module__$5b$project$5d2f$__$5b$middleware$2d$edge$5d$__$28$unsupported__edge__import__crypto$2c$__ecmascript$29$__ = __turbopack_context__.i("[project]/ [middleware-edge] (unsupported edge import crypto, ecmascript)");
;
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
function safeEqual(a, b) {
    const aBuf = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].from(a);
    const bBuf = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].from(b);
    if (aBuf.length !== bBuf.length) {
        // Prevent length leak by comparing buffers of equal length
        const padA = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].concat([
            aBuf,
            __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].alloc(Math.max(0, bBuf.length - aBuf.length))
        ]);
        const padB = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].concat([
            bBuf,
            __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].alloc(Math.max(0, aBuf.length - bBuf.length))
        ]);
        return __TURBOPACK__imported__module__$5b$project$5d2f$__$5b$middleware$2d$edge$5d$__$28$unsupported__edge__import__crypto$2c$__ecmascript$29$__["default"].timingSafeEqual(padA, padB) && a === b;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$__$5b$middleware$2d$edge$5d$__$28$unsupported__edge__import__crypto$2c$__ecmascript$29$__["default"].timingSafeEqual(aBuf, bBuf);
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
        const expectedUser = process.env.ADMIN_USER || "";
        const expectedPass = process.env.ADMIN_PASSWORD || "";
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

//# sourceMappingURL=%5Broot-of-the-server%5D__713ff73a._.js.map