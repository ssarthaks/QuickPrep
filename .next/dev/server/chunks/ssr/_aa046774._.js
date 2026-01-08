module.exports = [
"[project]/components/ui/select.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>Select,
    "SelectContent",
    ()=>SelectContent,
    "SelectGroup",
    ()=>SelectGroup,
    "SelectItem",
    ()=>SelectItem,
    "SelectLabel",
    ()=>SelectLabel,
    "SelectScrollDownButton",
    ()=>SelectScrollDownButton,
    "SelectScrollUpButton",
    ()=>SelectScrollUpButton,
    "SelectSeparator",
    ()=>SelectSeparator,
    "SelectTrigger",
    ()=>SelectTrigger,
    "SelectValue",
    ()=>SelectValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-select/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const Select = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"];
const SelectGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"];
const SelectValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Value"];
const SelectTrigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                    className: "h-4 w-4 opacity-50"
                }, void 0, false, {
                    fileName: "[project]/components/ui/select.tsx",
                    lineNumber: 29,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/ui/select.tsx",
                lineNumber: 28,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 19,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SelectTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"].displayName;
const SelectScrollUpButton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollUpButton"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/components/ui/select.tsx",
            lineNumber: 47,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 39,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SelectScrollUpButton.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollUpButton"].displayName;
const SelectScrollDownButton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollDownButton"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/components/ui/select.tsx",
            lineNumber: 64,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 56,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SelectScrollDownButton.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollDownButton"].displayName;
const SelectContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, children, position = "popper", ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-select-content-transform-origin]", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
                    fileName: "[project]/components/ui/select.tsx",
                    lineNumber: 86,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Viewport"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/components/ui/select.tsx",
                    lineNumber: 87,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
                    fileName: "[project]/components/ui/select.tsx",
                    lineNumber: 96,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/select.tsx",
            lineNumber: 75,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 74,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SelectContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"].displayName;
const SelectLabel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 106,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SelectLabel.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"].displayName;
const SelectItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/select.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/ui/select.tsx",
                    lineNumber: 127,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/ui/select.tsx",
                lineNumber: 126,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemText"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/components/ui/select.tsx",
                lineNumber: 132,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 118,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SelectItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"].displayName;
const SelectSeparator = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("-mx-1 my-1 h-px bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 141,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SelectSeparator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"].displayName;
;
}),
"[project]/components/ui/progress.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Progress",
    ()=>Progress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-progress/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const Progress = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, value, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative h-4 w-full overflow-hidden rounded-full bg-secondary", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Indicator"], {
            className: "h-full w-full flex-1 bg-primary transition-all",
            style: {
                transform: `translateX(-${100 - (value || 0)}%)`
            }
        }, void 0, false, {
            fileName: "[project]/components/ui/progress.tsx",
            lineNumber: 20,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui/progress.tsx",
        lineNumber: 12,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
Progress.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"].displayName;
;
}),
"[project]/data/quizQuestions.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "difficulties",
    ()=>difficulties,
    "fields",
    ()=>fields,
    "getQuestions",
    ()=>getQuestions,
    "quizData",
    ()=>quizData,
    "technologies",
    ()=>technologies
]);
const fields = [
    {
        value: 'frontend',
        label: 'Frontend Development'
    },
    {
        value: 'backend',
        label: 'Backend Development'
    },
    {
        value: 'fullstack',
        label: 'Full Stack Development'
    }
];
const technologies = {
    frontend: [
        {
            value: 'react',
            label: 'React'
        },
        {
            value: 'javascript',
            label: 'JavaScript'
        },
        {
            value: 'htmlcss',
            label: 'HTML & CSS'
        },
        {
            value: 'typescript',
            label: 'TypeScript'
        }
    ],
    backend: [
        {
            value: 'nodejs',
            label: 'Node.js'
        },
        {
            value: 'php',
            label: 'PHP'
        },
        {
            value: 'sql',
            label: 'SQL'
        },
        {
            value: 'python',
            label: 'Python'
        }
    ],
    fullstack: [
        {
            value: 'react',
            label: 'React'
        },
        {
            value: 'nodejs',
            label: 'Node.js'
        },
        {
            value: 'sql',
            label: 'SQL'
        },
        {
            value: 'typescript',
            label: 'TypeScript'
        }
    ]
};
const difficulties = [
    {
        value: 'beginner',
        label: 'Beginner'
    },
    {
        value: 'intermediate',
        label: 'Intermediate'
    },
    {
        value: 'advanced',
        label: 'Advanced'
    }
];
const quizData = {
    frontend: {
        react: {
            beginner: [
                {
                    id: 'react-b-1',
                    question: 'What is JSX in React?',
                    options: [
                        'A database query language',
                        'A syntax extension for JavaScript that allows HTML-like code',
                        'A styling framework',
                        'A testing library'
                    ],
                    correctAnswer: 1,
                    explanation: 'JSX is a syntax extension for JavaScript that allows you to write HTML-like markup inside a JavaScript file.'
                },
                {
                    id: 'react-b-2',
                    question: 'Which hook is used to manage state in a functional component?',
                    options: [
                        'useEffect',
                        'useState',
                        'useContext',
                        'useReducer'
                    ],
                    correctAnswer: 1,
                    explanation: 'useState is the primary hook for adding state to functional components. It returns a state value and a function to update it.'
                },
                {
                    id: 'react-b-3',
                    question: 'What is the virtual DOM in React?',
                    options: [
                        'A direct manipulation of the browser DOM',
                        'A lightweight copy of the actual DOM kept in memory',
                        'A CSS framework',
                        'A database system'
                    ],
                    correctAnswer: 1,
                    explanation: 'The virtual DOM is a lightweight JavaScript representation of the actual DOM. React uses it to optimize updates by comparing changes before applying them to the real DOM.'
                },
                {
                    id: 'react-b-4',
                    question: 'How do you pass data from parent to child component?',
                    options: [
                        'Using state',
                        'Using props',
                        'Using context',
                        'Using refs'
                    ],
                    correctAnswer: 1,
                    explanation: 'Props (short for properties) are used to pass data from a parent component to a child component in React.'
                },
                {
                    id: 'react-b-5',
                    question: 'What method is used to render a React component to the DOM?',
                    options: [
                        'ReactDOM.render()',
                        'React.render()',
                        'Component.render()',
                        'DOM.render()'
                    ],
                    correctAnswer: 0,
                    explanation: 'ReactDOM.render() (or createRoot in React 18+) is used to render a React element into a DOM container.'
                },
                {
                    id: 'react-b-6',
                    question: 'What is a React component?',
                    options: [
                        'A CSS class',
                        'A reusable piece of UI',
                        'A database table',
                        'A server endpoint'
                    ],
                    correctAnswer: 1,
                    explanation: 'A React component is a reusable piece of UI that can have its own logic, styling, and state.'
                },
                {
                    id: 'react-b-7',
                    question: 'Which symbol is used to embed JavaScript expressions in JSX?',
                    options: [
                        '{{ }}',
                        '[ ]',
                        '{ }',
                        '< >'
                    ],
                    correctAnswer: 2,
                    explanation: 'Curly braces { } are used to embed JavaScript expressions within JSX.'
                },
                {
                    id: 'react-b-8',
                    question: 'What is the purpose of the key prop in lists?',
                    options: [
                        'To style list items',
                        'To help React identify which items have changed',
                        'To create animations',
                        'To sort the list'
                    ],
                    correctAnswer: 1,
                    explanation: 'Keys help React identify which items have changed, been added, or removed, enabling efficient re-renders.'
                },
                {
                    id: 'react-b-9',
                    question: 'How do you create a functional component in React?',
                    options: [
                        'class MyComponent extends React.Component',
                        'function MyComponent() { return <div /> }',
                        'const MyComponent = new Component()',
                        'React.createComponent()'
                    ],
                    correctAnswer: 1,
                    explanation: 'Functional components are JavaScript functions that return JSX. They are the modern way to create React components.'
                },
                {
                    id: 'react-b-10',
                    question: 'What package is required to use React in a web application?',
                    options: [
                        'react-native',
                        'react-dom',
                        'react-router',
                        'react-redux'
                    ],
                    correctAnswer: 1,
                    explanation: 'react-dom provides DOM-specific methods for web applications, including rendering React components to the DOM.'
                }
            ],
            intermediate: [
                {
                    id: 'react-i-1',
                    question: 'What is the purpose of useEffect hook?',
                    options: [
                        'To manage component state',
                        'To perform side effects in function components',
                        'To create new components',
                        'To handle routing'
                    ],
                    correctAnswer: 1,
                    explanation: 'useEffect is used to perform side effects like data fetching, subscriptions, or DOM mutations in functional components.'
                },
                {
                    id: 'react-i-2',
                    question: 'What is the Context API used for?',
                    options: [
                        'Database management',
                        'Passing data through component tree without prop drilling',
                        'Routing between pages',
                        'Animation handling'
                    ],
                    correctAnswer: 1,
                    explanation: 'Context provides a way to share values between components without explicitly passing props through every level.'
                },
                {
                    id: 'react-i-3',
                    question: 'What is the difference between controlled and uncontrolled components?',
                    options: [
                        'Controlled components are faster',
                        'Controlled components have their state managed by React',
                        'Uncontrolled components cannot have default values',
                        'There is no difference'
                    ],
                    correctAnswer: 1,
                    explanation: 'In controlled components, form data is handled by React state. In uncontrolled components, data is handled by the DOM itself.'
                },
                {
                    id: 'react-i-4',
                    question: 'What does React.memo() do?',
                    options: [
                        'Creates a new component',
                        'Memoizes a component to prevent unnecessary re-renders',
                        'Stores data in memory',
                        'Handles form submissions'
                    ],
                    correctAnswer: 1,
                    explanation: 'React.memo() is a higher-order component that memoizes the result, skipping re-renders if props haven\'t changed.'
                },
                {
                    id: 'react-i-5',
                    question: 'What is the purpose of useCallback hook?',
                    options: [
                        'To call APIs',
                        'To memoize callback functions',
                        'To create new components',
                        'To handle errors'
                    ],
                    correctAnswer: 1,
                    explanation: 'useCallback returns a memoized version of a callback function, preventing unnecessary re-renders of child components.'
                },
                {
                    id: 'react-i-6',
                    question: 'How do you handle errors in React components?',
                    options: [
                        'Using try-catch only',
                        'Using Error Boundaries',
                        'Using console.log',
                        'Errors cannot be handled in React'
                    ],
                    correctAnswer: 1,
                    explanation: 'Error Boundaries are React components that catch JavaScript errors in their child component tree and display fallback UI.'
                },
                {
                    id: 'react-i-7',
                    question: 'What is the correct way to update state based on previous state?',
                    options: [
                        'setState(state + 1)',
                        'setState(prevState => prevState + 1)',
                        'state = state + 1',
                        'this.state++'
                    ],
                    correctAnswer: 1,
                    explanation: 'Using a function with the previous state ensures you\'re working with the most current state value, avoiding race conditions.'
                },
                {
                    id: 'react-i-8',
                    question: 'What is a custom hook in React?',
                    options: [
                        'A built-in React hook',
                        'A function that uses other hooks and can be reused',
                        'A CSS hook',
                        'A database connection'
                    ],
                    correctAnswer: 1,
                    explanation: 'Custom hooks are functions starting with "use" that let you extract and share stateful logic between components.'
                },
                {
                    id: 'react-i-9',
                    question: 'What triggers a component re-render in React?',
                    options: [
                        'Only state changes',
                        'State changes, prop changes, or parent re-renders',
                        'Only prop changes',
                        'Manual trigger only'
                    ],
                    correctAnswer: 1,
                    explanation: 'Components re-render when their state changes, when their props change, or when their parent component re-renders.'
                },
                {
                    id: 'react-i-10',
                    question: 'What is the purpose of useRef hook?',
                    options: [
                        'To manage component state',
                        'To access DOM elements or persist values across renders',
                        'To handle routing',
                        'To create animations'
                    ],
                    correctAnswer: 1,
                    explanation: 'useRef returns a mutable ref object that persists across re-renders. It\'s commonly used for DOM access or storing mutable values.'
                }
            ],
            advanced: [
                {
                    id: 'react-a-1',
                    question: 'What is React Fiber?',
                    options: [
                        'A CSS framework for React',
                        'The reimplementation of React\'s core algorithm',
                        'A testing library',
                        'A state management library'
                    ],
                    correctAnswer: 1,
                    explanation: 'React Fiber is the reimplementation of React\'s core algorithm, enabling incremental rendering and improved performance.'
                },
                {
                    id: 'react-a-2',
                    question: 'What is the purpose of useMemo hook?',
                    options: [
                        'To create new components',
                        'To memoize expensive computations',
                        'To handle form data',
                        'To manage routing'
                    ],
                    correctAnswer: 1,
                    explanation: 'useMemo memoizes the result of an expensive computation, only recalculating when dependencies change.'
                },
                {
                    id: 'react-a-3',
                    question: 'What is Concurrent Mode in React?',
                    options: [
                        'A way to run multiple React apps',
                        'A set of features for better handling of async operations',
                        'A testing mode',
                        'A debugging tool'
                    ],
                    correctAnswer: 1,
                    explanation: 'Concurrent Mode enables React to interrupt rendering work to handle higher-priority updates, improving responsiveness.'
                },
                {
                    id: 'react-a-4',
                    question: 'What is the Reconciliation process in React?',
                    options: [
                        'The process of styling components',
                        'The algorithm React uses to diff one tree with another',
                        'Database synchronization',
                        'API integration'
                    ],
                    correctAnswer: 1,
                    explanation: 'Reconciliation is the algorithm React uses to determine what changes need to be made to the DOM by comparing virtual DOM trees.'
                },
                {
                    id: 'react-a-5',
                    question: 'What are React Portals used for?',
                    options: [
                        'To create links between pages',
                        'To render children into a DOM node outside parent hierarchy',
                        'To manage state',
                        'To handle forms'
                    ],
                    correctAnswer: 1,
                    explanation: 'Portals provide a way to render children into a DOM node that exists outside the parent component\'s DOM hierarchy.'
                },
                {
                    id: 'react-a-6',
                    question: 'What is the purpose of React.lazy()?',
                    options: [
                        'To create slow animations',
                        'To enable code-splitting and lazy loading of components',
                        'To delay state updates',
                        'To handle async API calls'
                    ],
                    correctAnswer: 1,
                    explanation: 'React.lazy() lets you define a component that is loaded dynamically, enabling code-splitting to reduce initial bundle size.'
                },
                {
                    id: 'react-a-7',
                    question: 'What is the useImperativeHandle hook used for?',
                    options: [
                        'To create imperative animations',
                        'To customize the instance value exposed when using ref',
                        'To handle form submissions',
                        'To manage global state'
                    ],
                    correctAnswer: 1,
                    explanation: 'useImperativeHandle customizes the instance value that is exposed to parent components when using forwardRef.'
                },
                {
                    id: 'react-a-8',
                    question: 'What is Server-Side Rendering (SSR) in React?',
                    options: [
                        'Running JavaScript on the client',
                        'Rendering React components on the server and sending HTML to client',
                        'A database technique',
                        'A styling approach'
                    ],
                    correctAnswer: 1,
                    explanation: 'SSR renders React components on the server, sending fully rendered HTML to the client for faster initial load and better SEO.'
                },
                {
                    id: 'react-a-9',
                    question: 'What is the purpose of useLayoutEffect?',
                    options: [
                        'To handle CSS layouts',
                        'To run effects synchronously after DOM mutations',
                        'To create grid layouts',
                        'To manage responsive design'
                    ],
                    correctAnswer: 1,
                    explanation: 'useLayoutEffect fires synchronously after DOM mutations, before the browser paints, useful for DOM measurements.'
                },
                {
                    id: 'react-a-10',
                    question: 'What are Compound Components in React?',
                    options: [
                        'Components made of multiple files',
                        'A pattern where components work together sharing implicit state',
                        'Components with multiple states',
                        'Components with compound CSS'
                    ],
                    correctAnswer: 1,
                    explanation: 'Compound Components is a pattern where multiple components work together to form a complete UI with shared implicit state.'
                }
            ]
        },
        javascript: {
            beginner: [
                {
                    id: 'js-b-1',
                    question: 'Which keyword is used to declare a variable that can be reassigned?',
                    options: [
                        'const',
                        'let',
                        'var',
                        'Both let and var'
                    ],
                    correctAnswer: 3,
                    explanation: 'Both let and var allow reassignment, though let has block scope while var has function scope.'
                },
                {
                    id: 'js-b-2',
                    question: 'What is the output of typeof null?',
                    options: [
                        'null',
                        'undefined',
                        'object',
                        'string'
                    ],
                    correctAnswer: 2,
                    explanation: 'This is a historical bug in JavaScript. typeof null returns "object" even though null is a primitive.'
                },
                {
                    id: 'js-b-3',
                    question: 'How do you create an array in JavaScript?',
                    options: [
                        'array()',
                        'new Array[]',
                        '[]',
                        'Array{}'
                    ],
                    correctAnswer: 2,
                    explanation: 'Square brackets [] are the literal syntax for creating arrays in JavaScript.'
                },
                {
                    id: 'js-b-4',
                    question: 'What does the === operator do?',
                    options: [
                        'Assigns a value',
                        'Compares values only',
                        'Compares both value and type',
                        'Performs mathematical operation'
                    ],
                    correctAnswer: 2,
                    explanation: 'The strict equality operator (===) compares both value and type without type coercion.'
                },
                {
                    id: 'js-b-5',
                    question: 'Which method adds an element to the end of an array?',
                    options: [
                        'push()',
                        'pop()',
                        'shift()',
                        'unshift()'
                    ],
                    correctAnswer: 0,
                    explanation: 'push() adds one or more elements to the end of an array and returns the new length.'
                },
                {
                    id: 'js-b-6',
                    question: 'What is a function in JavaScript?',
                    options: [
                        'A type of variable',
                        'A reusable block of code',
                        'A data type',
                        'An HTML element'
                    ],
                    correctAnswer: 1,
                    explanation: 'A function is a reusable block of code designed to perform a particular task.'
                },
                {
                    id: 'js-b-7',
                    question: 'How do you write a single-line comment in JavaScript?',
                    options: [
                        '<!-- comment -->',
                        '// comment',
                        '/* comment */',
                        '# comment'
                    ],
                    correctAnswer: 1,
                    explanation: 'Single-line comments in JavaScript start with two forward slashes //.'
                },
                {
                    id: 'js-b-8',
                    question: 'What is the correct syntax for an if statement?',
                    options: [
                        'if x > 5 then',
                        'if (x > 5) {}',
                        'if x > 5 {}',
                        'if [x > 5]'
                    ],
                    correctAnswer: 1,
                    explanation: 'The condition in an if statement must be enclosed in parentheses, followed by curly braces for the code block.'
                },
                {
                    id: 'js-b-9',
                    question: 'Which method is used to find the length of a string?',
                    options: [
                        'size()',
                        'length',
                        'count()',
                        'len()'
                    ],
                    correctAnswer: 1,
                    explanation: 'The length property returns the number of characters in a string.'
                },
                {
                    id: 'js-b-10',
                    question: 'What is NaN in JavaScript?',
                    options: [
                        'A string',
                        'Not a Number',
                        'Null value',
                        'An array'
                    ],
                    correctAnswer: 1,
                    explanation: 'NaN stands for "Not a Number" and represents a value that is not a legal number.'
                }
            ],
            intermediate: [
                {
                    id: 'js-i-1',
                    question: 'What is a closure in JavaScript?',
                    options: [
                        'A way to close a browser window',
                        'A function with access to its outer scope',
                        'A method to end loops',
                        'A type of array'
                    ],
                    correctAnswer: 1,
                    explanation: 'A closure is a function that has access to variables from its outer (enclosing) scope, even after the outer function has returned.'
                },
                {
                    id: 'js-i-2',
                    question: 'What is the difference between null and undefined?',
                    options: [
                        'They are the same',
                        'null is assigned, undefined is default for unassigned variables',
                        'undefined is assigned, null is default',
                        'Both are errors'
                    ],
                    correctAnswer: 1,
                    explanation: 'undefined means a variable has been declared but not assigned. null is an intentional assignment indicating no value.'
                },
                {
                    id: 'js-i-3',
                    question: 'What is event bubbling?',
                    options: [
                        'A animation effect',
                        'Events propagating from child to parent elements',
                        'Creating multiple events',
                        'A way to delete events'
                    ],
                    correctAnswer: 1,
                    explanation: 'Event bubbling is when an event on a child element propagates up through its ancestors in the DOM.'
                },
                {
                    id: 'js-i-4',
                    question: 'What does the spread operator (...) do?',
                    options: [
                        'Divides numbers',
                        'Expands iterable elements',
                        'Creates loops',
                        'Defines variables'
                    ],
                    correctAnswer: 1,
                    explanation: 'The spread operator expands iterable elements like arrays or objects into individual elements.'
                },
                {
                    id: 'js-i-5',
                    question: 'What is a Promise in JavaScript?',
                    options: [
                        'A guarantee of code execution',
                        'An object representing eventual completion of async operation',
                        'A type of loop',
                        'A variable declaration'
                    ],
                    correctAnswer: 1,
                    explanation: 'A Promise represents the eventual result of an asynchronous operation, either fulfilled or rejected.'
                },
                {
                    id: 'js-i-6',
                    question: 'What is the purpose of the map() method?',
                    options: [
                        'To create navigation maps',
                        'To create a new array by transforming each element',
                        'To find elements in an array',
                        'To sort an array'
                    ],
                    correctAnswer: 1,
                    explanation: 'map() creates a new array by calling a function on every element of the original array.'
                },
                {
                    id: 'js-i-7',
                    question: 'What is hoisting in JavaScript?',
                    options: [
                        'Moving elements up in the DOM',
                        'Moving declarations to the top of their scope',
                        'A sorting algorithm',
                        'A styling technique'
                    ],
                    correctAnswer: 1,
                    explanation: 'Hoisting is JavaScript\'s behavior of moving declarations to the top of their scope before code execution.'
                },
                {
                    id: 'js-i-8',
                    question: 'What is the purpose of async/await?',
                    options: [
                        'To create loops',
                        'To handle asynchronous code in a synchronous manner',
                        'To define classes',
                        'To style elements'
                    ],
                    correctAnswer: 1,
                    explanation: 'async/await provides a cleaner syntax for working with Promises, making async code look synchronous.'
                },
                {
                    id: 'js-i-9',
                    question: 'What is destructuring in JavaScript?',
                    options: [
                        'Deleting objects',
                        'Extracting values from arrays or objects into variables',
                        'Breaking code',
                        'Creating errors'
                    ],
                    correctAnswer: 1,
                    explanation: 'Destructuring allows you to unpack values from arrays or properties from objects into distinct variables.'
                },
                {
                    id: 'js-i-10',
                    question: 'What is the purpose of the filter() method?',
                    options: [
                        'To remove duplicates',
                        'To create a new array with elements that pass a test',
                        'To sort an array',
                        'To join arrays'
                    ],
                    correctAnswer: 1,
                    explanation: 'filter() creates a new array with all elements that pass the test implemented by the provided function.'
                }
            ],
            advanced: [
                {
                    id: 'js-a-1',
                    question: 'What is the event loop in JavaScript?',
                    options: [
                        'A for loop for events',
                        'The mechanism that handles async callbacks',
                        'A type of event listener',
                        'A debugging tool'
                    ],
                    correctAnswer: 1,
                    explanation: 'The event loop is the mechanism that allows JavaScript to perform non-blocking operations by offloading operations to the system kernel.'
                },
                {
                    id: 'js-a-2',
                    question: 'What is the difference between call() and apply()?',
                    options: [
                        'No difference',
                        'call() takes arguments individually, apply() takes an array',
                        'They work with different data types',
                        'apply() is deprecated'
                    ],
                    correctAnswer: 1,
                    explanation: 'Both invoke functions with a specified this value, but call() takes arguments individually while apply() takes an array.'
                },
                {
                    id: 'js-a-3',
                    question: 'What is a WeakMap in JavaScript?',
                    options: [
                        'A map with weak performance',
                        'A collection where keys are weakly referenced',
                        'A deprecated feature',
                        'A map without values'
                    ],
                    correctAnswer: 1,
                    explanation: 'WeakMap holds weak references to keys, allowing garbage collection of entries when no other references exist.'
                },
                {
                    id: 'js-a-4',
                    question: 'What is the purpose of Symbol in JavaScript?',
                    options: [
                        'To create unique identifiers',
                        'To define mathematical symbols',
                        'To create icons',
                        'To handle errors'
                    ],
                    correctAnswer: 0,
                    explanation: 'Symbol creates unique, immutable primitive values often used as object property keys to avoid name collisions.'
                },
                {
                    id: 'js-a-5',
                    question: 'What is the Temporal Dead Zone (TDZ)?',
                    options: [
                        'A time-related bug',
                        'The period between entering scope and variable initialization',
                        'A deprecated feature',
                        'A memory leak issue'
                    ],
                    correctAnswer: 1,
                    explanation: 'TDZ is the period where a variable exists but cannot be accessed, between entering the scope and the declaration.'
                },
                {
                    id: 'js-a-6',
                    question: 'What is a Proxy in JavaScript?',
                    options: [
                        'A network configuration',
                        'An object that intercepts operations on another object',
                        'A design pattern',
                        'A security feature'
                    ],
                    correctAnswer: 1,
                    explanation: 'Proxy allows you to create a wrapper for an object to intercept and customize fundamental operations like property lookup.'
                },
                {
                    id: 'js-a-7',
                    question: 'What is the purpose of generators in JavaScript?',
                    options: [
                        'To generate random numbers',
                        'To create functions that can be paused and resumed',
                        'To generate HTML',
                        'To create components'
                    ],
                    correctAnswer: 1,
                    explanation: 'Generators are functions that can be paused and resumed, allowing for iterative algorithms with maintained state.'
                },
                {
                    id: 'js-a-8',
                    question: 'What is tree shaking?',
                    options: [
                        'A DOM manipulation technique',
                        'Eliminating dead code during bundling',
                        'A CSS animation',
                        'A testing approach'
                    ],
                    correctAnswer: 1,
                    explanation: 'Tree shaking is a dead code elimination technique that removes unused exports from the final bundle.'
                },
                {
                    id: 'js-a-9',
                    question: 'What is the purpose of Object.freeze()?',
                    options: [
                        'To stop animations',
                        'To make an object immutable',
                        'To pause execution',
                        'To cache objects'
                    ],
                    correctAnswer: 1,
                    explanation: 'Object.freeze() prevents new properties from being added and existing properties from being changed or removed.'
                },
                {
                    id: 'js-a-10',
                    question: 'What is memoization?',
                    options: [
                        'A memory leak',
                        'Caching function results for repeated calls',
                        'A debugging technique',
                        'A way to store variables'
                    ],
                    correctAnswer: 1,
                    explanation: 'Memoization is an optimization technique that caches the results of expensive function calls to speed up repeated calls.'
                }
            ]
        },
        htmlcss: {
            beginner: [
                {
                    id: 'html-b-1',
                    question: 'What does HTML stand for?',
                    options: [
                        'Hyper Text Markup Language',
                        'High Tech Modern Language',
                        'Home Tool Markup Language',
                        'Hyperlinks Text Mark Language'
                    ],
                    correctAnswer: 0,
                    explanation: 'HTML stands for Hyper Text Markup Language, the standard markup language for web pages.'
                },
                {
                    id: 'html-b-2',
                    question: 'Which CSS property is used to change the text color?',
                    options: [
                        'font-color',
                        'text-color',
                        'color',
                        'foreground'
                    ],
                    correctAnswer: 2,
                    explanation: 'The color property is used to set the color of text content.'
                },
                {
                    id: 'html-b-3',
                    question: 'What is the correct HTML element for the largest heading?',
                    options: [
                        '<heading>',
                        '<h6>',
                        '<h1>',
                        '<head>'
                    ],
                    correctAnswer: 2,
                    explanation: '<h1> defines the largest heading, with <h6> being the smallest.'
                },
                {
                    id: 'html-b-4',
                    question: 'Which CSS property controls the space between elements?',
                    options: [
                        'spacing',
                        'margin',
                        'gap',
                        'All of these'
                    ],
                    correctAnswer: 3,
                    explanation: 'margin, gap, and spacing-related properties all control space between elements in different contexts.'
                },
                {
                    id: 'html-b-5',
                    question: 'What is the correct HTML for creating a hyperlink?',
                    options: [
                        '<a href="url">link</a>',
                        '<link href="url">',
                        '<hyperlink>url</hyperlink>',
                        '<url>link</url>'
                    ],
                    correctAnswer: 0,
                    explanation: 'The <a> (anchor) element with href attribute creates hyperlinks.'
                },
                {
                    id: 'html-b-6',
                    question: 'Which CSS property is used to change the background color?',
                    options: [
                        'bgcolor',
                        'background-color',
                        'color-background',
                        'back-color'
                    ],
                    correctAnswer: 1,
                    explanation: 'background-color is the CSS property used to set the background color of an element.'
                },
                {
                    id: 'html-b-7',
                    question: 'What is the correct HTML element for inserting a line break?',
                    options: [
                        '<break>',
                        '<lb>',
                        '<br>',
                        '<newline>'
                    ],
                    correctAnswer: 2,
                    explanation: '<br> is the HTML element for inserting a single line break.'
                },
                {
                    id: 'html-b-8',
                    question: 'Which HTML attribute specifies an alternate text for an image?',
                    options: [
                        'title',
                        'alt',
                        'src',
                        'description'
                    ],
                    correctAnswer: 1,
                    explanation: 'The alt attribute provides alternative text for an image if it cannot be displayed.'
                },
                {
                    id: 'html-b-9',
                    question: 'What is the default display property of a <div>?',
                    options: [
                        'inline',
                        'block',
                        'flex',
                        'inline-block'
                    ],
                    correctAnswer: 1,
                    explanation: '<div> elements are block-level elements by default, taking up full width.'
                },
                {
                    id: 'html-b-10',
                    question: 'Which CSS property makes text bold?',
                    options: [
                        'font-style',
                        'font-weight',
                        'text-decoration',
                        'font-bold'
                    ],
                    correctAnswer: 1,
                    explanation: 'font-weight is used to set how bold text should appear.'
                }
            ],
            intermediate: [
                {
                    id: 'html-i-1',
                    question: 'What is the CSS box model?',
                    options: [
                        'A 3D modeling technique',
                        'Content, padding, border, and margin layout model',
                        'A JavaScript framework',
                        'A design pattern'
                    ],
                    correctAnswer: 1,
                    explanation: 'The CSS box model describes how elements are rendered with content, padding, border, and margin.'
                },
                {
                    id: 'html-i-2',
                    question: 'What is the difference between display: flex and display: grid?',
                    options: [
                        'No difference',
                        'Flex is 1D, Grid is 2D layout system',
                        'Grid is older than Flex',
                        'Flex is only for mobile'
                    ],
                    correctAnswer: 1,
                    explanation: 'Flexbox is primarily for one-dimensional layouts, while Grid is for two-dimensional layouts.'
                },
                {
                    id: 'html-i-3',
                    question: 'What is CSS specificity?',
                    options: [
                        'How specific CSS code is',
                        'The algorithm that determines which styles apply',
                        'A CSS framework',
                        'A performance metric'
                    ],
                    correctAnswer: 1,
                    explanation: 'Specificity is the algorithm browsers use to determine which CSS property values are most relevant to an element.'
                },
                {
                    id: 'html-i-4',
                    question: 'What are CSS pseudo-elements?',
                    options: [
                        'Fake elements',
                        'Keywords to style specific parts of an element',
                        'JavaScript-created elements',
                        'Hidden elements'
                    ],
                    correctAnswer: 1,
                    explanation: 'Pseudo-elements like ::before and ::after allow styling of specific parts of an element.'
                },
                {
                    id: 'html-i-5',
                    question: 'What is the purpose of semantic HTML?',
                    options: [
                        'To make code prettier',
                        'To give meaning and structure for accessibility and SEO',
                        'To reduce file size',
                        'To improve performance'
                    ],
                    correctAnswer: 1,
                    explanation: 'Semantic HTML uses elements that describe their meaning, improving accessibility and SEO.'
                },
                {
                    id: 'html-i-6',
                    question: 'What is a CSS media query used for?',
                    options: [
                        'To play media files',
                        'To apply styles based on device characteristics',
                        'To query databases',
                        'To handle user input'
                    ],
                    correctAnswer: 1,
                    explanation: 'Media queries allow applying CSS rules based on device characteristics like screen width.'
                },
                {
                    id: 'html-i-7',
                    question: 'What is the purpose of position: relative?',
                    options: [
                        'To remove element from flow',
                        'To position relative to its normal position',
                        'To center elements',
                        'To create overlays'
                    ],
                    correctAnswer: 1,
                    explanation: 'position: relative positions an element relative to its normal position without removing it from the document flow.'
                },
                {
                    id: 'html-i-8',
                    question: 'What is the difference between em and rem units?',
                    options: [
                        'No difference',
                        'em is relative to parent, rem is relative to root',
                        'rem is older',
                        'em is only for fonts'
                    ],
                    correctAnswer: 1,
                    explanation: 'em units are relative to the parent element\'s font size, while rem is relative to the root element.'
                },
                {
                    id: 'html-i-9',
                    question: 'What is the z-index property used for?',
                    options: [
                        'Zoom level',
                        'Stack order of positioned elements',
                        'Z-axis rotation',
                        'Element compression'
                    ],
                    correctAnswer: 1,
                    explanation: 'z-index specifies the stack order of positioned elements, determining which elements appear on top.'
                },
                {
                    id: 'html-i-10',
                    question: 'What is the purpose of the <meta viewport> tag?',
                    options: [
                        'To add metadata',
                        'To control the viewport on mobile devices',
                        'To set page title',
                        'To link stylesheets'
                    ],
                    correctAnswer: 1,
                    explanation: 'The viewport meta tag controls how the page is displayed on mobile devices, enabling responsive design.'
                }
            ],
            advanced: [
                {
                    id: 'html-a-1',
                    question: 'What is CSS containment?',
                    options: [
                        'A way to contain floats',
                        'A performance optimization isolating parts of the DOM',
                        'A flexbox property',
                        'A security feature'
                    ],
                    correctAnswer: 1,
                    explanation: 'CSS containment allows isolating parts of the page, improving rendering performance.'
                },
                {
                    id: 'html-a-2',
                    question: 'What are CSS custom properties (variables)?',
                    options: [
                        'Pre-defined CSS values',
                        'User-defined values that can be reused throughout CSS',
                        'JavaScript variables in CSS',
                        'Deprecated features'
                    ],
                    correctAnswer: 1,
                    explanation: 'CSS custom properties (--var-name) allow defining reusable values that can be updated dynamically.'
                },
                {
                    id: 'html-a-3',
                    question: 'What is the purpose of will-change CSS property?',
                    options: [
                        'To detect changes',
                        'To hint browsers about upcoming element changes',
                        'To prevent changes',
                        'To log changes'
                    ],
                    correctAnswer: 1,
                    explanation: 'will-change hints to browsers about expected changes, allowing optimization before they occur.'
                },
                {
                    id: 'html-a-4',
                    question: 'What is ARIA and why is it important?',
                    options: [
                        'A CSS framework',
                        'Accessible Rich Internet Applications for assistive technologies',
                        'A JavaScript library',
                        'A testing framework'
                    ],
                    correctAnswer: 1,
                    explanation: 'ARIA provides attributes to make web content more accessible to people using assistive technologies.'
                },
                {
                    id: 'html-a-5',
                    question: 'What is the CSS cascade?',
                    options: [
                        'A waterfall effect',
                        'The algorithm determining which styles apply when multiple rules match',
                        'A layout method',
                        'A animation type'
                    ],
                    correctAnswer: 1,
                    explanation: 'The cascade is the algorithm that defines how CSS rules are combined when they conflict.'
                },
                {
                    id: 'html-a-6',
                    question: 'What is Critical CSS?',
                    options: [
                        'Important CSS rules',
                        'Above-the-fold CSS inlined for faster rendering',
                        'Error handling in CSS',
                        'CSS for critical applications'
                    ],
                    correctAnswer: 1,
                    explanation: 'Critical CSS is the minimum CSS needed to render above-the-fold content, inlined for faster initial paint.'
                },
                {
                    id: 'html-a-7',
                    question: 'What is the purpose of the :is() pseudo-class?',
                    options: [
                        'To check element types',
                        'To simplify complex selectors by matching any of the provided selectors',
                        'To validate CSS',
                        'To check values'
                    ],
                    correctAnswer: 1,
                    explanation: ':is() takes a selector list and matches any element that can be selected by one of the selectors.'
                },
                {
                    id: 'html-a-8',
                    question: 'What is the difference between @import and <link> for CSS?',
                    options: [
                        'No difference',
                        '<link> is parallel, @import is blocking',
                        '@import is faster',
                        '@import is deprecated'
                    ],
                    correctAnswer: 1,
                    explanation: '<link> loads CSS in parallel, while @import can block rendering and is loaded sequentially.'
                },
                {
                    id: 'html-a-9',
                    question: 'What is a stacking context in CSS?',
                    options: [
                        'A flexbox feature',
                        'A three-dimensional conceptualization of HTML elements',
                        'A way to stack images',
                        'A CSS methodology'
                    ],
                    correctAnswer: 1,
                    explanation: 'A stacking context is a group of elements that are painted together and determines how z-index works.'
                },
                {
                    id: 'html-a-10',
                    question: 'What is the CSS Grid subgrid feature?',
                    options: [
                        'A smaller grid',
                        'Allows nested grids to inherit parent grid tracks',
                        'A grid inside another grid',
                        'A mobile-only grid'
                    ],
                    correctAnswer: 1,
                    explanation: 'Subgrid allows a nested grid to use the track definition of its parent grid for consistent alignment.'
                }
            ]
        },
        typescript: {
            beginner: [
                {
                    id: 'ts-b-1',
                    question: 'What is TypeScript?',
                    options: [
                        'A new programming language',
                        'A typed superset of JavaScript',
                        'A JavaScript framework',
                        'A database query language'
                    ],
                    correctAnswer: 1,
                    explanation: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.'
                },
                {
                    id: 'ts-b-2',
                    question: 'How do you define a variable with a specific type?',
                    options: [
                        'let x: number = 5',
                        'let x = number(5)',
                        'number let x = 5',
                        'let x as number = 5'
                    ],
                    correctAnswer: 0,
                    explanation: 'Type annotations in TypeScript use a colon followed by the type after the variable name.'
                },
                {
                    id: 'ts-b-3',
                    question: 'What is an interface in TypeScript?',
                    options: [
                        'A UI component',
                        'A contract defining the structure of an object',
                        'A function type',
                        'A class method'
                    ],
                    correctAnswer: 1,
                    explanation: 'An interface defines the shape of an object, specifying what properties and methods it must have.'
                },
                {
                    id: 'ts-b-4',
                    question: 'What is the any type in TypeScript?',
                    options: [
                        'A type for arrays',
                        'A type that disables type checking',
                        'A type for objects',
                        'A type for functions'
                    ],
                    correctAnswer: 1,
                    explanation: 'The any type allows any value and effectively disables type checking for that variable.'
                },
                {
                    id: 'ts-b-5',
                    question: 'How do you make a property optional in an interface?',
                    options: [
                        'Using optional keyword',
                        'Using ? after the property name',
                        'Using [] brackets',
                        'Using undefined type'
                    ],
                    correctAnswer: 1,
                    explanation: 'Adding ? after the property name makes it optional: { name?: string }'
                },
                {
                    id: 'ts-b-6',
                    question: 'What file extension is used for TypeScript files?',
                    options: [
                        '.js',
                        '.ts',
                        '.typescript',
                        '.tp'
                    ],
                    correctAnswer: 1,
                    explanation: 'TypeScript files use the .ts extension, or .tsx for files containing JSX.'
                },
                {
                    id: 'ts-b-7',
                    question: 'What is type inference in TypeScript?',
                    options: [
                        'Manually defining types',
                        'Automatic detection of types by the compiler',
                        'Converting types',
                        'Type validation'
                    ],
                    correctAnswer: 1,
                    explanation: 'Type inference allows TypeScript to automatically determine types based on assigned values.'
                },
                {
                    id: 'ts-b-8',
                    question: 'What is a union type?',
                    options: [
                        'A type that combines two objects',
                        'A type that can be one of several types',
                        'A type for arrays',
                        'A type for unions'
                    ],
                    correctAnswer: 1,
                    explanation: 'Union types allow a variable to be one of several types, using the | operator: string | number.'
                },
                {
                    id: 'ts-b-9',
                    question: 'How do you define an array of numbers in TypeScript?',
                    options: [
                        'Array<number> or number[]',
                        'numbers[]',
                        '[number]',
                        'array(number)'
                    ],
                    correctAnswer: 0,
                    explanation: 'Arrays can be typed using Array<number> generic syntax or number[] shorthand syntax.'
                },
                {
                    id: 'ts-b-10',
                    question: 'What command compiles TypeScript to JavaScript?',
                    options: [
                        'ts-compile',
                        'typescript',
                        'tsc',
                        'npm build'
                    ],
                    correctAnswer: 2,
                    explanation: 'The TypeScript compiler command is tsc, which compiles .ts files to .js files.'
                }
            ],
            intermediate: [
                {
                    id: 'ts-i-1',
                    question: 'What is the difference between type and interface?',
                    options: [
                        'No difference',
                        'Interfaces are extendable, types use unions and intersections',
                        'Types are for objects only',
                        'Interfaces are deprecated'
                    ],
                    correctAnswer: 1,
                    explanation: 'While both can describe object shapes, interfaces support declaration merging and are extendable, while types support unions and intersections.'
                },
                {
                    id: 'ts-i-2',
                    question: 'What are generics in TypeScript?',
                    options: [
                        'General purpose functions',
                        'Reusable components that work with multiple types',
                        'Default types',
                        'Type shortcuts'
                    ],
                    correctAnswer: 1,
                    explanation: 'Generics allow creating reusable components that can work with a variety of types rather than a single one.'
                },
                {
                    id: 'ts-i-3',
                    question: 'What is a type guard?',
                    options: [
                        'A security feature',
                        'A runtime check that narrows types in a scope',
                        'A type validation tool',
                        'A debugging feature'
                    ],
                    correctAnswer: 1,
                    explanation: 'Type guards are expressions that perform runtime checks to narrow down types within conditional blocks.'
                },
                {
                    id: 'ts-i-4',
                    question: 'What is the unknown type?',
                    options: [
                        'Same as any',
                        'A type-safe alternative to any requiring type checking',
                        'An error type',
                        'A deprecated type'
                    ],
                    correctAnswer: 1,
                    explanation: 'unknown is like any but safer - you must perform type checking before using the value.'
                },
                {
                    id: 'ts-i-5',
                    question: 'What is the purpose of the readonly modifier?',
                    options: [
                        'To hide properties',
                        'To prevent property reassignment after initialization',
                        'To optimize performance',
                        'To create constants'
                    ],
                    correctAnswer: 1,
                    explanation: 'readonly marks properties that cannot be changed after the object is created.'
                },
                {
                    id: 'ts-i-6',
                    question: 'What is an intersection type?',
                    options: [
                        'A type that is part of two types',
                        'A type combining multiple types into one',
                        'A type for coordinates',
                        'A type for comparisons'
                    ],
                    correctAnswer: 1,
                    explanation: 'Intersection types combine multiple types using &, requiring all properties from each type.'
                },
                {
                    id: 'ts-i-7',
                    question: 'What is the never type used for?',
                    options: [
                        'Empty values',
                        'Functions that never return or never possible states',
                        'Null values',
                        'Optional values'
                    ],
                    correctAnswer: 1,
                    explanation: 'never represents values that never occur, like functions that throw or have infinite loops.'
                },
                {
                    id: 'ts-i-8',
                    question: 'What is a tuple in TypeScript?',
                    options: [
                        'A special array',
                        'A fixed-length array with known types at each position',
                        'A key-value pair',
                        'A type of object'
                    ],
                    correctAnswer: 1,
                    explanation: 'Tuples are arrays with a fixed number of elements whose types are known at each position.'
                },
                {
                    id: 'ts-i-9',
                    question: 'What is the keyof operator?',
                    options: [
                        'Gets all keys of an object',
                        'Creates a union type of all property names of a type',
                        'Validates keys',
                        'Creates new keys'
                    ],
                    correctAnswer: 1,
                    explanation: 'keyof creates a union type of all property names (keys) of the given type.'
                },
                {
                    id: 'ts-i-10',
                    question: 'What are mapped types?',
                    options: [
                        'Types for maps',
                        'Types created by transforming properties of existing types',
                        'Location types',
                        'Array transformation types'
                    ],
                    correctAnswer: 1,
                    explanation: 'Mapped types create new types by transforming each property of an existing type.'
                }
            ],
            advanced: [
                {
                    id: 'ts-a-1',
                    question: 'What are conditional types in TypeScript?',
                    options: [
                        'Types with if statements',
                        'Types that select one of two types based on a condition',
                        'Runtime type checks',
                        'Boolean types'
                    ],
                    correctAnswer: 1,
                    explanation: 'Conditional types select one of two possible types based on a condition using extends keyword.'
                },
                {
                    id: 'ts-a-2',
                    question: 'What is the infer keyword used for?',
                    options: [
                        'Type inference',
                        'Extracting types within conditional types',
                        'Inferring function parameters',
                        'Creating new types'
                    ],
                    correctAnswer: 1,
                    explanation: 'infer is used in conditional types to extract and create new type variables from other types.'
                },
                {
                    id: 'ts-a-3',
                    question: 'What is declaration merging?',
                    options: [
                        'Combining JavaScript files',
                        'Compiler combining multiple declarations with same name',
                        'Merging type definitions',
                        'Combining modules'
                    ],
                    correctAnswer: 1,
                    explanation: 'Declaration merging is when the compiler merges two or more declarations with the same name into one.'
                },
                {
                    id: 'ts-a-4',
                    question: 'What is a discriminated union?',
                    options: [
                        'A union with special syntax',
                        'A union type with a common property for type narrowing',
                        'A type of error handling',
                        'A deprecated feature'
                    ],
                    correctAnswer: 1,
                    explanation: 'Discriminated unions use a common property (discriminant) to narrow the type in conditionals.'
                },
                {
                    id: 'ts-a-5',
                    question: 'What is the purpose of the satisfies operator?',
                    options: [
                        'To check satisfaction of conditions',
                        'To validate a value matches a type while preserving its inferred type',
                        'To create constraints',
                        'To satisfy interfaces'
                    ],
                    correctAnswer: 1,
                    explanation: 'satisfies validates that a value conforms to a type while keeping the narrowest inferred type.'
                },
                {
                    id: 'ts-a-6',
                    question: 'What are template literal types?',
                    options: [
                        'Types for template strings',
                        'Types created from string literal combinations',
                        'HTML template types',
                        'Generic string types'
                    ],
                    correctAnswer: 1,
                    explanation: 'Template literal types create new string literal types by combining string literals.'
                },
                {
                    id: 'ts-a-7',
                    question: 'What is variance in TypeScript generics?',
                    options: [
                        'Type variation',
                        'How subtype relationships work with generics',
                        'Generic constraints',
                        'Type differences'
                    ],
                    correctAnswer: 1,
                    explanation: 'Variance describes how subtype relationships of complex types relate to subtypes of their components.'
                },
                {
                    id: 'ts-a-8',
                    question: 'What is a type predicate?',
                    options: [
                        'A type condition',
                        'A return type assertion that narrows types',
                        'A type validation',
                        'A predicate function'
                    ],
                    correctAnswer: 1,
                    explanation: 'Type predicates (param is Type) are special return types that narrow types in the calling scope.'
                },
                {
                    id: 'ts-a-9',
                    question: 'What is the purpose of the const assertion?',
                    options: [
                        'Creating constants',
                        'Making literal types as narrow as possible',
                        'Preventing mutations',
                        'Constant folding'
                    ],
                    correctAnswer: 1,
                    explanation: 'as const makes types as narrow as possible, treating arrays as tuples and objects as readonly.'
                },
                {
                    id: 'ts-a-10',
                    question: 'What are utility types in TypeScript?',
                    options: [
                        'Helper functions',
                        'Built-in types for common type transformations',
                        'Debugging tools',
                        'Performance types'
                    ],
                    correctAnswer: 1,
                    explanation: 'Utility types like Partial, Required, Pick, and Omit are built-in types for common transformations.'
                }
            ]
        }
    },
    backend: {
        nodejs: {
            beginner: [
                {
                    id: 'node-b-1',
                    question: 'What is Node.js?',
                    options: [
                        'A web browser',
                        'A JavaScript runtime built on Chrome\'s V8 engine',
                        'A database system',
                        'A frontend framework'
                    ],
                    correctAnswer: 1,
                    explanation: 'Node.js is a JavaScript runtime that allows running JavaScript on the server side.'
                },
                {
                    id: 'node-b-2',
                    question: 'What is npm?',
                    options: [
                        'Node Package Manager',
                        'New Programming Module',
                        'Node Process Manager',
                        'Network Protocol Manager'
                    ],
                    correctAnswer: 0,
                    explanation: 'npm is the Node Package Manager, used to install, share, and manage JavaScript packages.'
                },
                {
                    id: 'node-b-3',
                    question: 'How do you import a module in Node.js?',
                    options: [
                        'import module',
                        'require("module") or import',
                        'include module',
                        'load module'
                    ],
                    correctAnswer: 1,
                    explanation: 'Node.js supports both CommonJS require() and ES modules import syntax for importing modules.'
                },
                {
                    id: 'node-b-4',
                    question: 'What is the purpose of package.json?',
                    options: [
                        'To store JSON data',
                        'To define project metadata and dependencies',
                        'To configure the database',
                        'To store user data'
                    ],
                    correctAnswer: 1,
                    explanation: 'package.json contains project metadata, dependencies, scripts, and configuration.'
                },
                {
                    id: 'node-b-5',
                    question: 'What is Express.js?',
                    options: [
                        'A database',
                        'A minimal web framework for Node.js',
                        'A testing library',
                        'A deployment tool'
                    ],
                    correctAnswer: 1,
                    explanation: 'Express.js is a minimal and flexible Node.js web application framework for building APIs and web apps.'
                },
                {
                    id: 'node-b-6',
                    question: 'What is middleware in Express?',
                    options: [
                        'Database software',
                        'Functions that have access to request and response objects',
                        'Security software',
                        'A type of database'
                    ],
                    correctAnswer: 1,
                    explanation: 'Middleware functions have access to the request, response, and next middleware function in the cycle.'
                },
                {
                    id: 'node-b-7',
                    question: 'How do you start a Node.js application?',
                    options: [
                        'node start',
                        'node app.js',
                        'start node',
                        'run node'
                    ],
                    correctAnswer: 1,
                    explanation: 'Use the node command followed by the entry file name to run a Node.js application.'
                },
                {
                    id: 'node-b-8',
                    question: 'What is the purpose of the fs module?',
                    options: [
                        'To handle forms',
                        'To work with the file system',
                        'To manage frameworks',
                        'To handle functions'
                    ],
                    correctAnswer: 1,
                    explanation: 'The fs (file system) module provides an API for interacting with the file system.'
                },
                {
                    id: 'node-b-9',
                    question: 'What is a callback function in Node.js?',
                    options: [
                        'A function that calls itself',
                        'A function passed as an argument to be executed later',
                        'A function that returns data',
                        'A recursive function'
                    ],
                    correctAnswer: 1,
                    explanation: 'Callbacks are functions passed to other functions to be called when an operation completes.'
                },
                {
                    id: 'node-b-10',
                    question: 'What is the default port for a Node.js HTTP server?',
                    options: [
                        '80',
                        '8080',
                        '3000',
                        'There is no default'
                    ],
                    correctAnswer: 3,
                    explanation: 'Node.js doesn\'t have a default port - developers choose the port when creating the server.'
                }
            ],
            intermediate: [
                {
                    id: 'node-i-1',
                    question: 'What is the Event Loop in Node.js?',
                    options: [
                        'A for loop for events',
                        'The mechanism that handles asynchronous operations',
                        'An event listener',
                        'A debugging tool'
                    ],
                    correctAnswer: 1,
                    explanation: 'The Event Loop allows Node.js to perform non-blocking I/O operations despite being single-threaded.'
                },
                {
                    id: 'node-i-2',
                    question: 'What is the difference between process.nextTick() and setImmediate()?',
                    options: [
                        'No difference',
                        'nextTick runs before I/O callbacks, setImmediate after',
                        'setImmediate is deprecated',
                        'nextTick is for errors only'
                    ],
                    correctAnswer: 1,
                    explanation: 'process.nextTick() runs before any I/O events, while setImmediate() runs after I/O events in the event loop.'
                },
                {
                    id: 'node-i-3',
                    question: 'What are streams in Node.js?',
                    options: [
                        'Video streaming API',
                        'Objects for reading/writing data in chunks',
                        'Database connections',
                        'Network protocols'
                    ],
                    correctAnswer: 1,
                    explanation: 'Streams are objects that let you read data from a source or write data to a destination in chunks.'
                },
                {
                    id: 'node-i-4',
                    question: 'What is the purpose of the cluster module?',
                    options: [
                        'To group files',
                        'To create child processes that share server ports',
                        'To manage databases',
                        'To organize code'
                    ],
                    correctAnswer: 1,
                    explanation: 'The cluster module allows creating child processes that share server ports for better performance.'
                },
                {
                    id: 'node-i-5',
                    question: 'What is a Buffer in Node.js?',
                    options: [
                        'A caching mechanism',
                        'A class for handling binary data',
                        'A memory manager',
                        'A string type'
                    ],
                    correctAnswer: 1,
                    explanation: 'Buffer is a class that provides a way to work with binary data directly in Node.js.'
                },
                {
                    id: 'node-i-6',
                    question: 'What is the purpose of environment variables in Node.js?',
                    options: [
                        'To set programming language',
                        'To store configuration outside the codebase',
                        'To manage dependencies',
                        'To set file paths'
                    ],
                    correctAnswer: 1,
                    explanation: 'Environment variables store configuration data separate from code, useful for different environments.'
                },
                {
                    id: 'node-i-7',
                    question: 'What is the difference between spawn and exec in child_process?',
                    options: [
                        'No difference',
                        'spawn streams output, exec buffers the entire output',
                        'exec is for Windows only',
                        'spawn is deprecated'
                    ],
                    correctAnswer: 1,
                    explanation: 'spawn streams output in real-time, while exec buffers the output and returns it all at once.'
                },
                {
                    id: 'node-i-8',
                    question: 'What is the purpose of the path module?',
                    options: [
                        'To create URLs',
                        'To work with file and directory paths',
                        'To navigate websites',
                        'To manage routes'
                    ],
                    correctAnswer: 1,
                    explanation: 'The path module provides utilities for working with file and directory paths across platforms.'
                },
                {
                    id: 'node-i-9',
                    question: 'What are Worker Threads used for?',
                    options: [
                        'Creating new processes',
                        'Running JavaScript in parallel threads',
                        'Managing web workers',
                        'Handling HTTP requests'
                    ],
                    correctAnswer: 1,
                    explanation: 'Worker Threads enable running JavaScript in parallel threads for CPU-intensive operations.'
                },
                {
                    id: 'node-i-10',
                    question: 'What is the purpose of the crypto module?',
                    options: [
                        'Managing cryptocurrency',
                        'Providing cryptographic functionality',
                        'Encoding URLs',
                        'Compressing data'
                    ],
                    correctAnswer: 1,
                    explanation: 'The crypto module provides cryptographic functionality including hashing, encryption, and signing.'
                }
            ],
            advanced: [
                {
                    id: 'node-a-1',
                    question: 'What is the V8 engine?',
                    options: [
                        'A car engine',
                        'Google\'s JavaScript engine that powers Node.js',
                        'A database engine',
                        'A web server'
                    ],
                    correctAnswer: 1,
                    explanation: 'V8 is Google\'s open-source JavaScript engine written in C++ that compiles JavaScript to machine code.'
                },
                {
                    id: 'node-a-2',
                    question: 'What is libuv in Node.js?',
                    options: [
                        'A lighting library',
                        'A library for async I/O and event loop',
                        'A UV protection module',
                        'A graphics library'
                    ],
                    correctAnswer: 1,
                    explanation: 'libuv is a C library that provides the event loop and asynchronous I/O in Node.js.'
                },
                {
                    id: 'node-a-3',
                    question: 'What is the purpose of N-API?',
                    options: [
                        'Network API',
                        'ABI-stable API for building native addons',
                        'Node API for browsers',
                        'New API features'
                    ],
                    correctAnswer: 1,
                    explanation: 'N-API provides an ABI-stable layer for building native addons that work across Node.js versions.'
                },
                {
                    id: 'node-a-4',
                    question: 'What is the difference between fork and spawn?',
                    options: [
                        'No difference',
                        'fork creates a new Node process with IPC, spawn runs any command',
                        'fork is for Linux only',
                        'spawn is deprecated'
                    ],
                    correctAnswer: 1,
                    explanation: 'fork() creates a new Node.js process with an IPC channel, while spawn() can run any command.'
                },
                {
                    id: 'node-a-5',
                    question: 'What is memory leak detection in Node.js?',
                    options: [
                        'Finding water leaks',
                        'Identifying unreleased memory using heapdump and profilers',
                        'Fixing syntax errors',
                        'Debugging network issues'
                    ],
                    correctAnswer: 1,
                    explanation: 'Memory leak detection involves using tools like heapdump and V8 profiler to find unreleased memory.'
                },
                {
                    id: 'node-a-6',
                    question: 'What is the Event Emitter pattern?',
                    options: [
                        'A design for buttons',
                        'A pattern for handling async events with listeners',
                        'A logging system',
                        'An error handler'
                    ],
                    correctAnswer: 1,
                    explanation: 'EventEmitter is a pattern for handling asynchronous events by registering listeners for named events.'
                },
                {
                    id: 'node-a-7',
                    question: 'What is the purpose of domain module (deprecated)?',
                    options: [
                        'Domain name handling',
                        'Handling multiple async errors in a group',
                        'URL parsing',
                        'Network configuration'
                    ],
                    correctAnswer: 1,
                    explanation: 'The domain module grouped multiple async operations to handle errors together (now deprecated).'
                },
                {
                    id: 'node-a-8',
                    question: 'What is backpressure in streams?',
                    options: [
                        'Compression',
                        'When write stream cannot handle data as fast as read stream',
                        'Memory pressure',
                        'Network congestion'
                    ],
                    correctAnswer: 1,
                    explanation: 'Backpressure occurs when data is written faster than it can be consumed, requiring flow control.'
                },
                {
                    id: 'node-a-9',
                    question: 'What is the purpose of async_hooks?',
                    options: [
                        'React hooks in Node',
                        'Tracking async resources throughout their lifecycle',
                        'Async function helpers',
                        'Promise utilities'
                    ],
                    correctAnswer: 1,
                    explanation: 'async_hooks provides an API to track asynchronous resources and their lifecycle in Node.js.'
                },
                {
                    id: 'node-a-10',
                    question: 'What is the --inspect flag used for?',
                    options: [
                        'Code inspection',
                        'Enabling the V8 inspector for debugging',
                        'Security scanning',
                        'Performance monitoring'
                    ],
                    correctAnswer: 1,
                    explanation: '--inspect enables the V8 inspector, allowing debugging with Chrome DevTools or other debuggers.'
                }
            ]
        },
        sql: {
            beginner: [
                {
                    id: 'sql-b-1',
                    question: 'What does SQL stand for?',
                    options: [
                        'Structured Query Language',
                        'Simple Query Language',
                        'Standard Query Logic',
                        'System Query Language'
                    ],
                    correctAnswer: 0,
                    explanation: 'SQL stands for Structured Query Language, used to manage and manipulate relational databases.'
                },
                {
                    id: 'sql-b-2',
                    question: 'Which SQL statement is used to extract data from a database?',
                    options: [
                        'GET',
                        'EXTRACT',
                        'SELECT',
                        'PULL'
                    ],
                    correctAnswer: 2,
                    explanation: 'SELECT is used to retrieve data from one or more tables in a database.'
                },
                {
                    id: 'sql-b-3',
                    question: 'Which SQL statement is used to update data in a database?',
                    options: [
                        'MODIFY',
                        'UPDATE',
                        'CHANGE',
                        'SAVE'
                    ],
                    correctAnswer: 1,
                    explanation: 'UPDATE is used to modify existing records in a table.'
                },
                {
                    id: 'sql-b-4',
                    question: 'Which SQL statement is used to delete data from a database?',
                    options: [
                        'REMOVE',
                        'DELETE',
                        'DROP',
                        'CLEAR'
                    ],
                    correctAnswer: 1,
                    explanation: 'DELETE is used to remove rows from a table based on a condition.'
                },
                {
                    id: 'sql-b-5',
                    question: 'Which SQL statement is used to insert new data?',
                    options: [
                        'ADD',
                        'INSERT INTO',
                        'CREATE',
                        'PUT'
                    ],
                    correctAnswer: 1,
                    explanation: 'INSERT INTO is used to add new rows of data into a table.'
                },
                {
                    id: 'sql-b-6',
                    question: 'What is a primary key?',
                    options: [
                        'The first column in a table',
                        'A unique identifier for each row',
                        'The most important data',
                        'A password for the database'
                    ],
                    correctAnswer: 1,
                    explanation: 'A primary key uniquely identifies each record in a table and cannot contain NULL values.'
                },
                {
                    id: 'sql-b-7',
                    question: 'Which clause is used to filter rows in a SELECT statement?',
                    options: [
                        'FILTER',
                        'WHERE',
                        'HAVING',
                        'IF'
                    ],
                    correctAnswer: 1,
                    explanation: 'The WHERE clause is used to filter records based on specified conditions.'
                },
                {
                    id: 'sql-b-8',
                    question: 'Which SQL keyword is used to sort the result set?',
                    options: [
                        'SORT BY',
                        'ORDER BY',
                        'ARRANGE BY',
                        'SEQUENCE BY'
                    ],
                    correctAnswer: 1,
                    explanation: 'ORDER BY is used to sort the result set in ascending or descending order.'
                },
                {
                    id: 'sql-b-9',
                    question: 'What does the asterisk (*) mean in a SELECT statement?',
                    options: [
                        'Multiplication',
                        'All columns',
                        'Required field',
                        'Primary key'
                    ],
                    correctAnswer: 1,
                    explanation: 'The asterisk (*) is a wildcard that selects all columns from the specified table.'
                },
                {
                    id: 'sql-b-10',
                    question: 'Which SQL statement is used to create a new table?',
                    options: [
                        'NEW TABLE',
                        'MAKE TABLE',
                        'CREATE TABLE',
                        'ADD TABLE'
                    ],
                    correctAnswer: 2,
                    explanation: 'CREATE TABLE is used to create a new table in the database with specified columns.'
                }
            ],
            intermediate: [
                {
                    id: 'sql-i-1',
                    question: 'What is a JOIN in SQL?',
                    options: [
                        'Connecting to a database',
                        'Combining rows from two or more tables based on related columns',
                        'Merging databases',
                        'Concatenating strings'
                    ],
                    correctAnswer: 1,
                    explanation: 'JOIN is used to combine rows from two or more tables based on a related column between them.'
                },
                {
                    id: 'sql-i-2',
                    question: 'What is the difference between INNER JOIN and LEFT JOIN?',
                    options: [
                        'No difference',
                        'INNER JOIN returns matching rows, LEFT JOIN includes all left table rows',
                        'LEFT JOIN is faster',
                        'INNER JOIN is deprecated'
                    ],
                    correctAnswer: 1,
                    explanation: 'INNER JOIN returns only matching rows, while LEFT JOIN includes all rows from the left table.'
                },
                {
                    id: 'sql-i-3',
                    question: 'What is a foreign key?',
                    options: [
                        'A key from another country',
                        'A column that references a primary key in another table',
                        'An encrypted key',
                        'A backup key'
                    ],
                    correctAnswer: 1,
                    explanation: 'A foreign key is a column that creates a link between two tables by referencing a primary key.'
                },
                {
                    id: 'sql-i-4',
                    question: 'What does GROUP BY do?',
                    options: [
                        'Groups columns together',
                        'Groups rows sharing a property for aggregate functions',
                        'Organizes tables',
                        'Creates groups of databases'
                    ],
                    correctAnswer: 1,
                    explanation: 'GROUP BY groups rows with the same values, often used with aggregate functions like COUNT, SUM.'
                },
                {
                    id: 'sql-i-5',
                    question: 'What is the difference between WHERE and HAVING?',
                    options: [
                        'No difference',
                        'WHERE filters rows before grouping, HAVING filters after',
                        'HAVING is for JOINs',
                        'WHERE is deprecated'
                    ],
                    correctAnswer: 1,
                    explanation: 'WHERE filters individual rows before grouping, HAVING filters groups after GROUP BY.'
                },
                {
                    id: 'sql-i-6',
                    question: 'What is a subquery?',
                    options: [
                        'A small query',
                        'A query nested inside another query',
                        'A query subtitle',
                        'A backup query'
                    ],
                    correctAnswer: 1,
                    explanation: 'A subquery is a query nested within another query, used to return data for the main query.'
                },
                {
                    id: 'sql-i-7',
                    question: 'What does DISTINCT do?',
                    options: [
                        'Highlights data',
                        'Returns only unique values',
                        'Separates tables',
                        'Marks important rows'
                    ],
                    correctAnswer: 1,
                    explanation: 'DISTINCT removes duplicate rows from the result set, returning only unique values.'
                },
                {
                    id: 'sql-i-8',
                    question: 'What is an index in SQL?',
                    options: [
                        'A table of contents',
                        'A data structure that improves query performance',
                        'Row numbers',
                        'A backup system'
                    ],
                    correctAnswer: 1,
                    explanation: 'An index is a data structure that speeds up data retrieval at the cost of additional storage.'
                },
                {
                    id: 'sql-i-9',
                    question: 'What is normalization?',
                    options: [
                        'Making data normal',
                        'Organizing database to reduce redundancy',
                        'Standardizing queries',
                        'Formatting output'
                    ],
                    correctAnswer: 1,
                    explanation: 'Normalization is organizing a database to reduce data redundancy and improve data integrity.'
                },
                {
                    id: 'sql-i-10',
                    question: 'What is a transaction in SQL?',
                    options: [
                        'A financial operation',
                        'A sequence of operations performed as a single unit',
                        'A data transfer',
                        'A query log'
                    ],
                    correctAnswer: 1,
                    explanation: 'A transaction is a sequence of operations treated as a single unit, ensuring data integrity.'
                }
            ],
            advanced: [
                {
                    id: 'sql-a-1',
                    question: 'What are ACID properties?',
                    options: [
                        'Chemical properties of databases',
                        'Atomicity, Consistency, Isolation, Durability',
                        'Access, Control, Identity, Data',
                        'Advanced SQL features'
                    ],
                    correctAnswer: 1,
                    explanation: 'ACID stands for Atomicity, Consistency, Isolation, and Durability - properties ensuring reliable transactions.'
                },
                {
                    id: 'sql-a-2',
                    question: 'What is a stored procedure?',
                    options: [
                        'Saved query history',
                        'Precompiled SQL statements stored in the database',
                        'A backup method',
                        'Database documentation'
                    ],
                    correctAnswer: 1,
                    explanation: 'Stored procedures are precompiled SQL statements that can be executed repeatedly with different parameters.'
                },
                {
                    id: 'sql-a-3',
                    question: 'What is a trigger in SQL?',
                    options: [
                        'A button in the interface',
                        'Automatic SQL code executed on specified events',
                        'A type of constraint',
                        'A debugging tool'
                    ],
                    correctAnswer: 1,
                    explanation: 'Triggers are automatic SQL statements executed when specified events occur (INSERT, UPDATE, DELETE).'
                },
                {
                    id: 'sql-a-4',
                    question: 'What is query optimization?',
                    options: [
                        'Making queries shorter',
                        'Improving query execution efficiency',
                        'Reducing query count',
                        'Formatting queries'
                    ],
                    correctAnswer: 1,
                    explanation: 'Query optimization involves analyzing and improving query execution plans for better performance.'
                },
                {
                    id: 'sql-a-5',
                    question: 'What is a materialized view?',
                    options: [
                        'A physical view',
                        'A precomputed query result stored as a table',
                        'A 3D visualization',
                        'A visible table'
                    ],
                    correctAnswer: 1,
                    explanation: 'Materialized views store query results physically, improving performance for complex queries.'
                },
                {
                    id: 'sql-a-6',
                    question: 'What is database sharding?',
                    options: [
                        'Breaking a database into pieces',
                        'Distributing data across multiple databases',
                        'Encrypting data',
                        'Compressing data'
                    ],
                    correctAnswer: 1,
                    explanation: 'Sharding distributes data across multiple databases to improve performance and scalability.'
                },
                {
                    id: 'sql-a-7',
                    question: 'What is a window function?',
                    options: [
                        'A function for GUI windows',
                        'A function performing calculations across related rows',
                        'A visualization feature',
                        'A sorting function'
                    ],
                    correctAnswer: 1,
                    explanation: 'Window functions perform calculations across a set of rows related to the current row.'
                },
                {
                    id: 'sql-a-8',
                    question: 'What is database deadlock?',
                    options: [
                        'A security feature',
                        'When two transactions wait for each other indefinitely',
                        'A backup state',
                        'A connection limit'
                    ],
                    correctAnswer: 1,
                    explanation: 'Deadlock occurs when two or more transactions are waiting for each other to release locks.'
                },
                {
                    id: 'sql-a-9',
                    question: 'What is the difference between clustered and non-clustered index?',
                    options: [
                        'No difference',
                        'Clustered determines physical data order, non-clustered creates separate structure',
                        'Non-clustered is faster',
                        'Clustered is deprecated'
                    ],
                    correctAnswer: 1,
                    explanation: 'Clustered index determines physical data order (one per table), non-clustered creates a separate pointer structure.'
                },
                {
                    id: 'sql-a-10',
                    question: 'What is a CTE (Common Table Expression)?',
                    options: [
                        'A common query error',
                        'A temporary named result set within a query',
                        'A table type',
                        'A constraint type'
                    ],
                    correctAnswer: 1,
                    explanation: 'CTEs are temporary named result sets that exist within the scope of a single statement.'
                }
            ]
        },
        php: {
            beginner: [
                {
                    id: 'php-b-1',
                    question: 'What does PHP stand for?',
                    options: [
                        'Personal Home Page',
                        'PHP: Hypertext Preprocessor',
                        'Pre-Hypertext Processor',
                        'Private Home Page'
                    ],
                    correctAnswer: 1,
                    explanation: 'PHP is a recursive acronym for "PHP: Hypertext Preprocessor".'
                },
                {
                    id: 'php-b-2',
                    question: 'What is the correct way to end a PHP statement?',
                    options: [
                        ':',
                        '.',
                        ';',
                        '&'
                    ],
                    correctAnswer: 2,
                    explanation: 'PHP statements end with a semicolon (;), similar to C and JavaScript.'
                },
                {
                    id: 'php-b-3',
                    question: 'How do you start a PHP code block?',
                    options: [
                        '<php>',
                        '<?php',
                        '<script php>',
                        '<%php'
                    ],
                    correctAnswer: 1,
                    explanation: '<?php is the standard opening tag for PHP code blocks.'
                },
                {
                    id: 'php-b-4',
                    question: 'How do you create a variable in PHP?',
                    options: [
                        'var myVar',
                        '$myVar',
                        'let myVar',
                        'myVar'
                    ],
                    correctAnswer: 1,
                    explanation: 'PHP variables start with a $ sign followed by the variable name.'
                },
                {
                    id: 'php-b-5',
                    question: 'Which function is used to output text in PHP?',
                    options: [
                        'print()',
                        'echo',
                        'write()',
                        'Both echo and print'
                    ],
                    correctAnswer: 3,
                    explanation: 'Both echo and print can output text, though echo is slightly faster and can take multiple arguments.'
                },
                {
                    id: 'php-b-6',
                    question: 'How do you concatenate strings in PHP?',
                    options: [
                        '+',
                        '&',
                        '.',
                        '||'
                    ],
                    correctAnswer: 2,
                    explanation: 'The dot (.) operator is used to concatenate strings in PHP.'
                },
                {
                    id: 'php-b-7',
                    question: 'Which superglobal is used to collect form data sent with GET?',
                    options: [
                        '$_POST',
                        '$_GET',
                        '$_REQUEST',
                        '$_FORM'
                    ],
                    correctAnswer: 1,
                    explanation: '$_GET is a superglobal array containing data sent via URL query strings.'
                },
                {
                    id: 'php-b-8',
                    question: 'What is the correct way to create a comment in PHP?',
                    options: [
                        '<!-- comment -->',
                        '// comment',
                        '# comment',
                        'Both // and #'
                    ],
                    correctAnswer: 3,
                    explanation: 'PHP supports both // and # for single-line comments, and /* */ for multi-line comments.'
                },
                {
                    id: 'php-b-9',
                    question: 'Which function returns the length of a string?',
                    options: [
                        'len()',
                        'length()',
                        'strlen()',
                        'size()'
                    ],
                    correctAnswer: 2,
                    explanation: 'strlen() returns the number of characters in a string.'
                },
                {
                    id: 'php-b-10',
                    question: 'How do you create an array in PHP?',
                    options: [
                        'array()',
                        '[]',
                        'new Array()',
                        'Both array() and []'
                    ],
                    correctAnswer: 3,
                    explanation: 'Arrays can be created using array() function or short syntax [] in PHP 5.4+.'
                }
            ],
            intermediate: [
                {
                    id: 'php-i-1',
                    question: 'What is the difference between include and require?',
                    options: [
                        'No difference',
                        'require throws fatal error on failure, include only warning',
                        'include is faster',
                        'require is deprecated'
                    ],
                    correctAnswer: 1,
                    explanation: 'require throws a fatal error and stops script execution if the file is not found, while include only produces a warning.'
                },
                {
                    id: 'php-i-2',
                    question: 'What is a namespace in PHP?',
                    options: [
                        'A naming convention',
                        'A way to encapsulate items to avoid name collisions',
                        'A function type',
                        'A class attribute'
                    ],
                    correctAnswer: 1,
                    explanation: 'Namespaces provide a way to group related classes, interfaces, and functions to avoid naming conflicts.'
                },
                {
                    id: 'php-i-3',
                    question: 'What is PDO in PHP?',
                    options: [
                        'PHP Data Object',
                        'PHP Database Object - a database access layer',
                        'Page Document Object',
                        'PHP Development Option'
                    ],
                    correctAnswer: 1,
                    explanation: 'PDO (PHP Data Objects) is a database access layer providing a uniform method for accessing different databases.'
                },
                {
                    id: 'php-i-4',
                    question: 'What is the purpose of __construct() method?',
                    options: [
                        'To destroy objects',
                        'To initialize object properties when created',
                        'To build classes',
                        'To construct arrays'
                    ],
                    correctAnswer: 1,
                    explanation: '__construct() is the constructor method called automatically when a new object is instantiated.'
                },
                {
                    id: 'php-i-5',
                    question: 'What is the difference between == and === in PHP?',
                    options: [
                        'No difference',
                        '== compares values, === compares value and type',
                        '=== is for arrays only',
                        '== is deprecated'
                    ],
                    correctAnswer: 1,
                    explanation: '== compares values with type juggling, === compares both value and type strictly.'
                },
                {
                    id: 'php-i-6',
                    question: 'What is a trait in PHP?',
                    options: [
                        'A character attribute',
                        'A mechanism for code reuse in single inheritance languages',
                        'An interface type',
                        'A function modifier'
                    ],
                    correctAnswer: 1,
                    explanation: 'Traits enable code reuse by allowing methods to be included in multiple classes.'
                },
                {
                    id: 'php-i-7',
                    question: 'What is the purpose of sessions in PHP?',
                    options: [
                        'To store permanent data',
                        'To store temporary user data across multiple pages',
                        'To manage database connections',
                        'To handle file uploads'
                    ],
                    correctAnswer: 1,
                    explanation: 'Sessions store temporary data about users across multiple page requests.'
                },
                {
                    id: 'php-i-8',
                    question: 'What is autoloading in PHP?',
                    options: [
                        'Automatic file loading',
                        'Automatically loading class files when needed',
                        'Preloading all files',
                        'Loading configuration'
                    ],
                    correctAnswer: 1,
                    explanation: 'Autoloading automatically loads class files when a class is first used, without require statements.'
                },
                {
                    id: 'php-i-9',
                    question: 'What is the null coalescing operator (??) in PHP?',
                    options: [
                        'A comparison operator',
                        'Returns first operand if exists and not null, otherwise second',
                        'A null check',
                        'An assignment operator'
                    ],
                    correctAnswer: 1,
                    explanation: 'The ?? operator returns the first operand if it exists and is not null, otherwise returns the second.'
                },
                {
                    id: 'php-i-10',
                    question: 'What is Composer in PHP?',
                    options: [
                        'A music library',
                        'A dependency manager for PHP',
                        'A code formatter',
                        'A testing tool'
                    ],
                    correctAnswer: 1,
                    explanation: 'Composer is a dependency manager that handles library installation and autoloading in PHP projects.'
                }
            ],
            advanced: [
                {
                    id: 'php-a-1',
                    question: 'What is the difference between abstract class and interface?',
                    options: [
                        'No difference',
                        'Abstract classes can have implementations, interfaces only define contracts',
                        'Interfaces are faster',
                        'Abstract classes are deprecated'
                    ],
                    correctAnswer: 1,
                    explanation: 'Abstract classes can have method implementations and properties, while interfaces only define method signatures.'
                },
                {
                    id: 'php-a-2',
                    question: 'What are generators in PHP?',
                    options: [
                        'Code generators',
                        'Functions that use yield to return values lazily',
                        'Random number creators',
                        'Class builders'
                    ],
                    correctAnswer: 1,
                    explanation: 'Generators use yield to return values one at a time, saving memory for large datasets.'
                },
                {
                    id: 'php-a-3',
                    question: 'What is the purpose of type declarations in PHP 7+?',
                    options: [
                        'Documentation only',
                        'Enforcing types for parameters and return values',
                        'Performance optimization',
                        'IDE support only'
                    ],
                    correctAnswer: 1,
                    explanation: 'Type declarations enforce types for function parameters and return values at runtime.'
                },
                {
                    id: 'php-a-4',
                    question: 'What is reflection in PHP?',
                    options: [
                        'Mirroring databases',
                        'Ability to examine classes, methods, properties at runtime',
                        'Code review',
                        'Error handling'
                    ],
                    correctAnswer: 1,
                    explanation: 'Reflection allows examining and manipulating classes, methods, and properties at runtime.'
                },
                {
                    id: 'php-a-5',
                    question: 'What is the purpose of Opcache?',
                    options: [
                        'Caching database queries',
                        'Caching compiled PHP bytecode',
                        'Caching HTML output',
                        'Caching session data'
                    ],
                    correctAnswer: 1,
                    explanation: 'Opcache stores precompiled PHP bytecode in memory, improving performance by avoiding recompilation.'
                },
                {
                    id: 'php-a-6',
                    question: 'What are attributes in PHP 8?',
                    options: [
                        'Class properties',
                        'Native metadata added to declarations',
                        'Function parameters',
                        'Variable types'
                    ],
                    correctAnswer: 1,
                    explanation: 'Attributes are native PHP 8 features for adding structured metadata to code declarations.'
                },
                {
                    id: 'php-a-7',
                    question: 'What is the match expression in PHP 8?',
                    options: [
                        'Regex matching',
                        'A more concise switch with strict comparison and expression return',
                        'Pattern matching',
                        'String matching'
                    ],
                    correctAnswer: 1,
                    explanation: 'match is a more concise alternative to switch with strict comparison and expression-based return values.'
                },
                {
                    id: 'php-a-8',
                    question: 'What are fibers in PHP 8.1?',
                    options: [
                        'String types',
                        'Lightweight concurrency primitives',
                        'Data structures',
                        'Network connections'
                    ],
                    correctAnswer: 1,
                    explanation: 'Fibers are lightweight concurrency primitives that can be suspended and resumed, enabling async programming.'
                },
                {
                    id: 'php-a-9',
                    question: 'What is the purpose of the final keyword?',
                    options: [
                        'Ending execution',
                        'Preventing class inheritance or method overriding',
                        'Final variable value',
                        'Last element access'
                    ],
                    correctAnswer: 1,
                    explanation: 'final prevents classes from being extended or methods from being overridden in child classes.'
                },
                {
                    id: 'php-a-10',
                    question: 'What are union types in PHP 8?',
                    options: [
                        'Merged types',
                        'Allowing multiple types for a parameter or return value',
                        'Type combinations',
                        'Grouped types'
                    ],
                    correctAnswer: 1,
                    explanation: 'Union types allow declaring multiple possible types for parameters or return values using | syntax.'
                }
            ]
        },
        python: {
            beginner: [
                {
                    id: 'py-b-1',
                    question: 'What is Python?',
                    options: [
                        'A type of snake',
                        'A high-level, interpreted programming language',
                        'A database system',
                        'A web browser'
                    ],
                    correctAnswer: 1,
                    explanation: 'Python is a high-level, interpreted programming language known for its clear syntax and readability.'
                },
                {
                    id: 'py-b-2',
                    question: 'How do you define a variable in Python?',
                    options: [
                        'var x = 5',
                        'let x = 5',
                        'x = 5',
                        'int x = 5'
                    ],
                    correctAnswer: 2,
                    explanation: 'Python uses dynamic typing - simply assign a value to a variable name without declaring its type.'
                },
                {
                    id: 'py-b-3',
                    question: 'Which keyword is used to define a function in Python?',
                    options: [
                        'function',
                        'def',
                        'func',
                        'define'
                    ],
                    correctAnswer: 1,
                    explanation: 'The def keyword is used to define functions in Python.'
                },
                {
                    id: 'py-b-4',
                    question: 'What is a list in Python?',
                    options: [
                        'A text document',
                        'An ordered, mutable collection of items',
                        'A function type',
                        'A class definition'
                    ],
                    correctAnswer: 1,
                    explanation: 'A list is an ordered, mutable collection that can contain items of different types.'
                },
                {
                    id: 'py-b-5',
                    question: 'How do you write a comment in Python?',
                    options: [
                        '// comment',
                        '/* comment */',
                        '# comment',
                        '<!-- comment -->'
                    ],
                    correctAnswer: 2,
                    explanation: 'Single-line comments in Python start with the # symbol.'
                },
                {
                    id: 'py-b-6',
                    question: 'What is the output of print(2 ** 3)?',
                    options: [
                        '5',
                        '6',
                        '8',
                        '9'
                    ],
                    correctAnswer: 2,
                    explanation: 'The ** operator performs exponentiation. 2 ** 3 = 2³ = 8.'
                },
                {
                    id: 'py-b-7',
                    question: 'Which of these is a correct way to create a dictionary?',
                    options: [
                        '[key: value]',
                        '{key: value}',
                        '(key: value)',
                        '<key: value>'
                    ],
                    correctAnswer: 1,
                    explanation: 'Dictionaries use curly braces with key: value pairs.'
                },
                {
                    id: 'py-b-8',
                    question: 'What does len() function do?',
                    options: [
                        'Converts to length',
                        'Returns the number of items in an object',
                        'Creates a new list',
                        'Lengthens a string'
                    ],
                    correctAnswer: 1,
                    explanation: 'len() returns the number of items in a sequence or collection.'
                },
                {
                    id: 'py-b-9',
                    question: 'How do you import a module in Python?',
                    options: [
                        'include module',
                        'require module',
                        'import module',
                        'using module'
                    ],
                    correctAnswer: 2,
                    explanation: 'The import statement is used to import modules in Python.'
                },
                {
                    id: 'py-b-10',
                    question: 'What is the difference between a tuple and a list?',
                    options: [
                        'No difference',
                        'Tuples are immutable, lists are mutable',
                        'Tuples are faster',
                        'Lists can only contain strings'
                    ],
                    correctAnswer: 1,
                    explanation: 'Tuples are immutable (cannot be modified after creation), while lists are mutable.'
                }
            ],
            intermediate: [
                {
                    id: 'py-i-1',
                    question: 'What is a list comprehension?',
                    options: [
                        'Understanding lists',
                        'A concise way to create lists using expressions',
                        'A list method',
                        'A type of loop'
                    ],
                    correctAnswer: 1,
                    explanation: 'List comprehensions provide a concise way to create lists using a single line of code.'
                },
                {
                    id: 'py-i-2',
                    question: 'What is the difference between args and kwargs?',
                    options: [
                        'No difference',
                        '*args for positional arguments, **kwargs for keyword arguments',
                        '*args is for arrays',
                        '**kwargs is deprecated'
                    ],
                    correctAnswer: 1,
                    explanation: '*args allows passing variable positional arguments, **kwargs allows variable keyword arguments.'
                },
                {
                    id: 'py-i-3',
                    question: 'What is a decorator in Python?',
                    options: [
                        'A design pattern',
                        'A function that modifies another function\'s behavior',
                        'A type of comment',
                        'A class attribute'
                    ],
                    correctAnswer: 1,
                    explanation: 'Decorators are functions that wrap other functions to extend or modify their behavior.'
                },
                {
                    id: 'py-i-4',
                    question: 'What is a generator in Python?',
                    options: [
                        'A class constructor',
                        'A function that yields values lazily',
                        'A random number creator',
                        'A file creator'
                    ],
                    correctAnswer: 1,
                    explanation: 'Generators use yield to produce values one at a time, saving memory for large sequences.'
                },
                {
                    id: 'py-i-5',
                    question: 'What is the purpose of __init__ method?',
                    options: [
                        'To destroy objects',
                        'To initialize object attributes when created',
                        'To define the class',
                        'To import modules'
                    ],
                    correctAnswer: 1,
                    explanation: '__init__ is the constructor method called when a new instance is created.'
                },
                {
                    id: 'py-i-6',
                    question: 'What is a lambda function?',
                    options: [
                        'A named function',
                        'An anonymous single-expression function',
                        'A class method',
                        'A module function'
                    ],
                    correctAnswer: 1,
                    explanation: 'Lambda functions are small anonymous functions defined with the lambda keyword.'
                },
                {
                    id: 'py-i-7',
                    question: 'What is the purpose of the with statement?',
                    options: [
                        'Conditional logic',
                        'Context management for resource handling',
                        'Loop control',
                        'Exception handling'
                    ],
                    correctAnswer: 1,
                    explanation: 'The with statement manages resources by ensuring proper acquisition and release (like file handles).'
                },
                {
                    id: 'py-i-8',
                    question: 'What is the difference between is and ==?',
                    options: [
                        'No difference',
                        'is checks identity, == checks equality',
                        '== is for strings only',
                        'is is deprecated'
                    ],
                    correctAnswer: 1,
                    explanation: 'is checks if two references point to the same object, == checks if values are equal.'
                },
                {
                    id: 'py-i-9',
                    question: 'What is a virtual environment in Python?',
                    options: [
                        'A virtual machine',
                        'An isolated Python environment with its own packages',
                        'A testing environment',
                        'A cloud service'
                    ],
                    correctAnswer: 1,
                    explanation: 'Virtual environments isolate project dependencies, preventing conflicts between projects.'
                },
                {
                    id: 'py-i-10',
                    question: 'What is exception handling in Python?',
                    options: [
                        'Logging errors',
                        'Using try/except to handle runtime errors gracefully',
                        'Preventing errors',
                        'Debugging code'
                    ],
                    correctAnswer: 1,
                    explanation: 'Exception handling uses try/except blocks to catch and handle errors without crashing.'
                }
            ],
            advanced: [
                {
                    id: 'py-a-1',
                    question: 'What is the Global Interpreter Lock (GIL)?',
                    options: [
                        'A security feature',
                        'A mutex preventing parallel thread execution in CPython',
                        'A global variable',
                        'An import lock'
                    ],
                    correctAnswer: 1,
                    explanation: 'The GIL is a mutex that prevents multiple threads from executing Python bytecode simultaneously.'
                },
                {
                    id: 'py-a-2',
                    question: 'What are metaclasses in Python?',
                    options: [
                        'Abstract classes',
                        'Classes that define how classes behave',
                        'Parent classes',
                        'Built-in classes'
                    ],
                    correctAnswer: 1,
                    explanation: 'Metaclasses are classes whose instances are classes themselves, controlling class creation.'
                },
                {
                    id: 'py-a-3',
                    question: 'What is the purpose of __slots__?',
                    options: [
                        'Memory optimization',
                        'Restricting attributes and reducing memory usage',
                        'Creating time slots',
                        'Slot machines'
                    ],
                    correctAnswer: 1,
                    explanation: '__slots__ restricts instance attributes and reduces memory by not using __dict__.'
                },
                {
                    id: 'py-a-4',
                    question: 'What is a descriptor in Python?',
                    options: [
                        'Documentation string',
                        'An object defining how attribute access is handled',
                        'A type hint',
                        'A class decorator'
                    ],
                    correctAnswer: 1,
                    explanation: 'Descriptors are objects that define __get__, __set__, or __delete__ to customize attribute access.'
                },
                {
                    id: 'py-a-5',
                    question: 'What is asyncio used for?',
                    options: [
                        'Async file operations',
                        'Asynchronous I/O and concurrent programming',
                        'Async testing',
                        'Async logging'
                    ],
                    correctAnswer: 1,
                    explanation: 'asyncio provides infrastructure for writing single-threaded concurrent code using coroutines.'
                },
                {
                    id: 'py-a-6',
                    question: 'What is the purpose of __new__ method?',
                    options: [
                        'Creating new files',
                        'Creating and returning new instances before __init__',
                        'Defining new classes',
                        'New variable creation'
                    ],
                    correctAnswer: 1,
                    explanation: '__new__ is called before __init__ to create and return a new instance of the class.'
                },
                {
                    id: 'py-a-7',
                    question: 'What is monkey patching?',
                    options: [
                        'Bug fixing',
                        'Dynamically modifying classes or modules at runtime',
                        'Testing technique',
                        'Error handling'
                    ],
                    correctAnswer: 1,
                    explanation: 'Monkey patching is dynamically modifying a class or module at runtime.'
                },
                {
                    id: 'py-a-8',
                    question: 'What is the Method Resolution Order (MRO)?',
                    options: [
                        'Method sorting',
                        'The order in which base classes are searched for methods',
                        'Method ranking',
                        'Resolution algorithm'
                    ],
                    correctAnswer: 1,
                    explanation: 'MRO determines the order in which base classes are searched when looking for a method.'
                },
                {
                    id: 'py-a-9',
                    question: 'What are context managers?',
                    options: [
                        'Memory managers',
                        'Objects implementing __enter__ and __exit__ for resource management',
                        'Project managers',
                        'Exception managers'
                    ],
                    correctAnswer: 1,
                    explanation: 'Context managers implement __enter__ and __exit__ methods for the with statement.'
                },
                {
                    id: 'py-a-10',
                    question: 'What is Cython?',
                    options: [
                        'A Python version',
                        'A language for writing C extensions for Python',
                        'A Python compiler',
                        'A Python IDE'
                    ],
                    correctAnswer: 1,
                    explanation: 'Cython is a programming language for writing C extensions to Python for performance.'
                }
            ]
        }
    },
    fullstack: {
        react: {
            beginner: [],
            intermediate: [],
            advanced: []
        },
        nodejs: {
            beginner: [],
            intermediate: [],
            advanced: []
        },
        sql: {
            beginner: [],
            intermediate: [],
            advanced: []
        },
        typescript: {
            beginner: [],
            intermediate: [],
            advanced: []
        }
    }
};
// Copy frontend and backend questions to fullstack
quizData.fullstack.react = quizData.frontend.react;
quizData.fullstack.nodejs = quizData.backend.nodejs;
quizData.fullstack.sql = quizData.backend.sql;
quizData.fullstack.typescript = quizData.frontend.typescript;
const getQuestions = (field, technology, difficulty, count = 10)=>{
    const questions = quizData[field]?.[technology]?.[difficulty] || [];
    const shuffled = [
        ...questions
    ].sort(()=>Math.random() - 0.5);
    return shuffled.slice(0, count);
};
}),
"[project]/app/quiz/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-ssr] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-ssr] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-ssr] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trophy.js [app-ssr] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/select.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/progress.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$quizQuestions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/quizQuestions.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const Quiz = ()=>{
    const [field, setField] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [tech, setTech] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [difficulty, setDifficulty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [questions, setQuestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentQ, setCurrentQ] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showResult, setShowResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [quizStarted, setQuizStarted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const startQuiz = ()=>{
        const qs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$quizQuestions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getQuestions"])(field, tech, difficulty, 10);
        if (qs.length > 0) {
            setQuestions(qs);
            setQuizStarted(true);
            setCurrentQ(0);
            setAnswers([]);
            setShowResult(false);
        }
    };
    const handleAnswer = (idx)=>{
        if (selected !== null) return;
        setSelected(idx);
        const isCorrect = idx === questions[currentQ].correctAnswer;
        setAnswers([
            ...answers,
            {
                q: currentQ,
                answer: idx,
                correct: isCorrect
            }
        ]);
    };
    const nextQuestion = ()=>{
        if (currentQ < questions.length - 1) {
            setCurrentQ(currentQ + 1);
            setSelected(null);
        } else {
            setShowResult(true);
        }
    };
    const reset = ()=>{
        setQuizStarted(false);
        setField('');
        setTech('');
        setDifficulty('');
        setQuestions([]);
        setAnswers([]);
        setShowResult(false);
        setSelected(null);
        setCurrentQ(0);
    };
    const score = answers.filter((a)=>a.correct).length;
    const percentage = questions.length > 0 ? Math.round(score / questions.length * 100) : 0;
    if (showResult) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen py-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section-container max-w-2xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.95
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    className: "card-elevated p-8 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                            className: `h-16 w-16 mx-auto mb-4 ${percentage >= 70 ? 'text-accent' : percentage >= 50 ? 'text-warning' : 'text-destructive'}`
                        }, void 0, false, {
                            fileName: "[project]/app/quiz/page.tsx",
                            lineNumber: 69,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold mb-2",
                            children: "Quiz Complete!"
                        }, void 0, false, {
                            fileName: "[project]/app/quiz/page.tsx",
                            lineNumber: 70,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-4xl font-bold mb-2",
                            children: [
                                score,
                                "/",
                                questions.length
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/quiz/page.tsx",
                            lineNumber: 71,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground mb-6",
                            children: percentage >= 70 ? 'Great job! You\'re well prepared.' : percentage >= 50 ? 'Good effort! Keep practicing.' : 'Needs more practice. Review the material.'
                        }, void 0, false, {
                            fileName: "[project]/app/quiz/page.tsx",
                            lineNumber: 72,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 text-left mb-6 max-h-64 overflow-y-auto",
                            children: questions.map((q, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `p-4 rounded-lg ${answers[i]?.correct ? 'bg-accent/10' : 'bg-destructive/10'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-medium text-sm mb-1",
                                            children: q.question
                                        }, void 0, false, {
                                            fileName: "[project]/app/quiz/page.tsx",
                                            lineNumber: 79,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground",
                                            children: q.explanation
                                        }, void 0, false, {
                                            fileName: "[project]/app/quiz/page.tsx",
                                            lineNumber: 80,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, q.id, true, {
                                    fileName: "[project]/app/quiz/page.tsx",
                                    lineNumber: 78,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/app/quiz/page.tsx",
                            lineNumber: 76,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: reset,
                            className: "gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/app/quiz/page.tsx",
                                    lineNumber: 85,
                                    columnNumber: 55
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Try Again"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/quiz/page.tsx",
                            lineNumber: 85,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/quiz/page.tsx",
                    lineNumber: 68,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/quiz/page.tsx",
                lineNumber: 67,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/quiz/page.tsx",
            lineNumber: 66,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (quizStarted && questions.length > 0) {
        const q = questions[currentQ];
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen py-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section-container max-w-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between text-sm text-muted-foreground mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "Question ",
                                            currentQ + 1,
                                            " of ",
                                            questions.length
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/quiz/page.tsx",
                                        lineNumber: 99,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            score,
                                            " correct"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/quiz/page.tsx",
                                        lineNumber: 100,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/quiz/page.tsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Progress"], {
                                value: (currentQ + 1) / questions.length * 100
                            }, void 0, false, {
                                fileName: "[project]/app/quiz/page.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/quiz/page.tsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            x: 20
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        className: "card-elevated p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold mb-6",
                                children: q.question
                            }, void 0, false, {
                                fileName: "[project]/app/quiz/page.tsx",
                                lineNumber: 106,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3 mb-6",
                                children: q.options.map((opt, i)=>{
                                    const isSelected = selected === i;
                                    const isCorrect = i === q.correctAnswer;
                                    const showFeedback = selected !== null;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleAnswer(i),
                                        disabled: selected !== null,
                                        className: `w-full p-4 rounded-lg text-left transition-all border ${showFeedback ? isCorrect ? 'border-accent bg-accent/10' : isSelected ? 'border-destructive bg-destructive/10' : 'border-border' : 'border-border hover:border-primary hover:bg-muted'}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                showFeedback && isCorrect && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                    className: "h-5 w-5 text-accent"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/quiz/page.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 53
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                showFeedback && isSelected && !isCorrect && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                                    className: "h-5 w-5 text-destructive"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/quiz/page.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 68
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: opt
                                                }, void 0, false, {
                                                    fileName: "[project]/app/quiz/page.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/quiz/page.tsx",
                                            lineNumber: 125,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, i, false, {
                                        fileName: "[project]/app/quiz/page.tsx",
                                        lineNumber: 115,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0));
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/quiz/page.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            selected !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground mb-4 p-3 bg-muted rounded-lg",
                                        children: q.explanation
                                    }, void 0, false, {
                                        fileName: "[project]/app/quiz/page.tsx",
                                        lineNumber: 137,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: nextQuestion,
                                        className: "w-full",
                                        children: currentQ < questions.length - 1 ? 'Next Question' : 'See Results'
                                    }, void 0, false, {
                                        fileName: "[project]/app/quiz/page.tsx",
                                        lineNumber: 138,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/quiz/page.tsx",
                                lineNumber: 136,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, q.id, true, {
                        fileName: "[project]/app/quiz/page.tsx",
                        lineNumber: 105,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/quiz/page.tsx",
                lineNumber: 96,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/quiz/page.tsx",
            lineNumber: 95,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen py-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "section-container max-w-xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    className: "text-center mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold mb-2",
                            children: "MCQ Quiz"
                        }, void 0, false, {
                            fileName: "[project]/app/quiz/page.tsx",
                            lineNumber: 151,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground",
                            children: "Select your preferences to start"
                        }, void 0, false, {
                            fileName: "[project]/app/quiz/page.tsx",
                            lineNumber: 152,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/quiz/page.tsx",
                    lineNumber: 150,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-elevated p-6 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-sm font-medium mb-2 block",
                                    children: "Field"
                                }, void 0, false, {
                                    fileName: "[project]/app/quiz/page.tsx",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                    value: field,
                                    onValueChange: (v)=>{
                                        setField(v);
                                        setTech('');
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                placeholder: "Select field"
                                            }, void 0, false, {
                                                fileName: "[project]/app/quiz/page.tsx",
                                                lineNumber: 159,
                                                columnNumber: 30
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/app/quiz/page.tsx",
                                            lineNumber: 159,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$quizQuestions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fields"].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                    value: f.value,
                                                    children: f.label
                                                }, f.value, false, {
                                                    fileName: "[project]/app/quiz/page.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 34
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/app/quiz/page.tsx",
                                            lineNumber: 160,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/quiz/page.tsx",
                                    lineNumber: 158,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/quiz/page.tsx",
                            lineNumber: 156,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-sm font-medium mb-2 block",
                                    children: "Technology"
                                }, void 0, false, {
                                    fileName: "[project]/app/quiz/page.tsx",
                                    lineNumber: 167,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                    value: tech,
                                    onValueChange: setTech,
                                    disabled: !field,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                placeholder: "Select technology"
                                            }, void 0, false, {
                                                fileName: "[project]/app/quiz/page.tsx",
                                                lineNumber: 169,
                                                columnNumber: 30
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/app/quiz/page.tsx",
                                            lineNumber: 169,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                            children: (__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$quizQuestions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["technologies"][field] || []).map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                    value: t.value,
                                                    children: t.label
                                                }, t.value, false, {
                                                    fileName: "[project]/app/quiz/page.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 55
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/app/quiz/page.tsx",
                                            lineNumber: 170,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/quiz/page.tsx",
                                    lineNumber: 168,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/quiz/page.tsx",
                            lineNumber: 166,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-sm font-medium mb-2 block",
                                    children: "Difficulty"
                                }, void 0, false, {
                                    fileName: "[project]/app/quiz/page.tsx",
                                    lineNumber: 177,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                    value: difficulty,
                                    onValueChange: setDifficulty,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                placeholder: "Select difficulty"
                                            }, void 0, false, {
                                                fileName: "[project]/app/quiz/page.tsx",
                                                lineNumber: 179,
                                                columnNumber: 30
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/app/quiz/page.tsx",
                                            lineNumber: 179,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$quizQuestions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["difficulties"].map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                    value: d.value,
                                                    children: d.label
                                                }, d.value, false, {
                                                    fileName: "[project]/app/quiz/page.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 40
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/app/quiz/page.tsx",
                                            lineNumber: 180,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/quiz/page.tsx",
                                    lineNumber: 178,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/quiz/page.tsx",
                            lineNumber: 176,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: startQuiz,
                            disabled: !field || !tech || !difficulty,
                            className: "w-full gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/app/quiz/page.tsx",
                                    lineNumber: 187,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Start Quiz"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/quiz/page.tsx",
                            lineNumber: 186,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/quiz/page.tsx",
                    lineNumber: 155,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/quiz/page.tsx",
            lineNumber: 149,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/quiz/page.tsx",
        lineNumber: 148,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Quiz;
}),
];

//# sourceMappingURL=_aa046774._.js.map