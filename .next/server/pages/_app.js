"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6055:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/layout/NavBar.js




function NavBar() {
    const router = (0,router_.useRouter)();
    const { 0: categories  } = (0,external_react_.useState)([
        {
            name: `PLAYER STATS`,
            link: ""
        },
        {
            name: `COSMETICS`,
            link: "cosmetics",
            link2: "cosmetics/new"
        },
        {
            name: `ITEM SHOP`,
            link: "shops"
        }, 
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-full max-w-md px-2 py-16 sm:px-0",
        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
            className: "flex space-x-1 rounded-xl bg-blue-900/20 p-1",
            children: categories.map((category)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: `/${category.link}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: `w-full rounded-lg active:text-slate-700 text-sm font-medium leading-5 text-center cursor-pointer text-white ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none ${router.pathname == `/${category.link}` ? "bg-white shadow text-slate-700" : router.pathname == `/${category.link2}` ? "bg-white shadow text-slate-700" : "text-blue-100 hover:bg-white/[0.12] hover:text-white"}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "py-2.5",
                            children: category.name
                        })
                    }, category.name)
                }, category.name)
            )
        })
    });
};

;// CONCATENATED MODULE: ./pages/_app.js



function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "container text-base md:text-2xl mx-auto flex flex-col items-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(NavBar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664], () => (__webpack_exec__(6055)));
module.exports = __webpack_exports__;

})();