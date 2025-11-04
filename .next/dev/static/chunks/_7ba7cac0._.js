(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/notes/filter/@sidebar/SidebarNotes.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "menuItem": "SidebarNotes-module__RSw1fa__menuItem",
  "menuLink": "SidebarNotes-module__RSw1fa__menuLink",
  "menuList": "SidebarNotes-module__RSw1fa__menuList",
});
}),
"[project]/app/notes/filter/@sidebar/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SidebarNotes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notes$2f$filter$2f40$sidebar$2f$SidebarNotes$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/notes/filter/@sidebar/SidebarNotes.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const tags = [
    'Work',
    'Personal',
    'Todo',
    'Meeting',
    'Shopping'
];
function SidebarNotes() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "afd896399c219c01def4a6bf87f3f374c4c0a630f8bfd80f09d695db74d32553") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "afd896399c219c01def4a6bf87f3f374c4c0a630f8bfd80f09d695db74d32553";
    }
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const t0 = `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notes$2f$filter$2f40$sidebar$2f$SidebarNotes$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menuLink} ${pathname === "/notes/filter/all" ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notes$2f$filter$2f40$sidebar$2f$SidebarNotes$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""}`;
    let t1;
    if ($[1] !== t0) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notes$2f$filter$2f40$sidebar$2f$SidebarNotes$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menuItem,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/notes/filter/all",
                className: t0,
                children: "All notes"
            }, void 0, false, {
                fileName: "[project]/app/notes/filter/@sidebar/page.tsx",
                lineNumber: 20,
                columnNumber: 39
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/notes/filter/@sidebar/page.tsx",
            lineNumber: 20,
            columnNumber: 10
        }, this);
        $[1] = t0;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== pathname) {
        t2 = tags.map({
            "SidebarNotes[tags.map()]": (tag)=>{
                const href = `/notes/filter/${tag}`;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notes$2f$filter$2f40$sidebar$2f$SidebarNotes$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menuItem,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: href,
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notes$2f$filter$2f40$sidebar$2f$SidebarNotes$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menuLink} ${pathname === href ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notes$2f$filter$2f40$sidebar$2f$SidebarNotes$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""}`,
                        children: tag
                    }, void 0, false, {
                        fileName: "[project]/app/notes/filter/@sidebar/page.tsx",
                        lineNumber: 31,
                        columnNumber: 55
                    }, this)
                }, tag, false, {
                    fileName: "[project]/app/notes/filter/@sidebar/page.tsx",
                    lineNumber: 31,
                    columnNumber: 16
                }, this);
            }
        }["SidebarNotes[tags.map()]"]);
        $[3] = pathname;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t1 || $[6] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notes$2f$filter$2f40$sidebar$2f$SidebarNotes$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menuList,
                children: [
                    t1,
                    t2
                ]
            }, void 0, true, {
                fileName: "[project]/app/notes/filter/@sidebar/page.tsx",
                lineNumber: 41,
                columnNumber: 15
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/notes/filter/@sidebar/page.tsx",
            lineNumber: 41,
            columnNumber: 10
        }, this);
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    return t3;
}
_s(SidebarNotes, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = SidebarNotes;
var _c;
__turbopack_context__.k.register(_c, "SidebarNotes");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_7ba7cac0._.js.map