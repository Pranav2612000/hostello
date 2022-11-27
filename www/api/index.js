var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = require("react-dom/server"), import_react2 = require("@emotion/react"), import_create_instance = __toESM(require("@emotion/server/create-instance")), import_react3 = require("@remix-run/react");

// app/context.ts
var import_react = require("react"), ServerStyleContext = (0, import_react.createContext)(null), ClientStyleContext = (0, import_react.createContext)(
  null
);

// app/createEmotionCache.ts
var import_cache = __toESM(require("@emotion/cache"));
function createEmotionCache() {
  return (0, import_cache.default)({ key: "css" });
}

// app/entry.server.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let cache = createEmotionCache(), { extractCriticalToChunks } = (0, import_create_instance.default)(cache), html = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ServerStyleContext.Provider, {
      value: null,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.CacheProvider, {
        value: cache,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.RemixServer, {
          context: remixContext,
          url: request.url
        }, void 0, !1, {
          fileName: "app/entry.server.tsx",
          lineNumber: 22,
          columnNumber: 17
        }, this)
      }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 21,
        columnNumber: 13
      }, this)
    }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 20,
      columnNumber: 9
    }, this)
  ), chunks = extractCriticalToChunks(html), markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ServerStyleContext.Provider, {
      value: chunks.styles,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.CacheProvider, {
        value: cache,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.RemixServer, {
          context: remixContext,
          url: request.url
        }, void 0, !1, {
          fileName: "app/entry.server.tsx",
          lineNumber: 32,
          columnNumber: 17
        }, this)
      }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 31,
        columnNumber: 13
      }, this)
    }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 30,
      columnNumber: 9
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  default: () => root_default,
  links: () => links,
  loader: () => loader
});
var import_react7 = __toESM(require("react")), import_react8 = require("@remix-run/react"), import_ssr = require("@clerk/remix/ssr.server"), import_remix = require("@clerk/remix"), import_react9 = require("@chakra-ui/react"), import_react10 = require("@emotion/react");

// app/theme/theme.ts
var import_react4 = require("@chakra-ui/react");

// app/theme/components/button.ts
var baseStyle = {
  rounded: "lg"
}, defaultProps = {
  colorScheme: "green"
}, sizes = {
  md: {
    px: 8
  }
}, variants = {}, Button = {
  baseStyle,
  defaultProps,
  sizes,
  variants
};

// app/theme/components/index.ts
var components = {
  Button
};

// app/theme/foundations/colors.ts
var colors = {
  gray: {
    50: "#B0B5C0",
    100: "#A5ABB6",
    200: "#8E96A4",
    300: "#788192",
    400: "#646D7D",
    500: "#525966",
    600: "#393E47",
    700: "#202328",
    800: "#070809",
    900: "#000000"
  },
  green: {
    50: "#50FF95",
    100: "#3BFF89",
    200: "#12FF70",
    300: "#00E95C",
    400: "#00C04C",
    500: "#00973C",
    600: "#005F26",
    700: "#00270F",
    800: "#000000",
    900: "#000000"
  }
};

// app/theme/theme.ts
var theme = (0, import_react4.extendTheme)({
  colors,
  components
});

// app/root.tsx
var import_focus_visible = require("focus-visible");

// app/components/Header/Header.tsx
var import_styled = __toESM(require("@emotion/styled")), import_react5 = require("react"), import_react_router_dom = require("react-router-dom"), import_react6 = require("@chakra-ui/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Header({}) {
  let navigate = (0, import_react_router_dom.useNavigate)(), navRef = (0, import_react5.useRef)(null), headerRef = (0, import_react5.useRef)(null), [scrolled, setScrolled] = (0, import_react5.useState)(!1), [inputFocus, setInputFocus] = (0, import_react5.useState)(!1), primaryLocationRef = (0, import_react5.useRef)(null), secondaryLocationRef = (0, import_react5.useRef)(null), [location, setLocation] = (0, import_react5.useState)(""), [checkInDate, setCheckInDate] = (0, import_react5.useState)(new Date()), [checkOutDate, setCheckOutDate] = (0, import_react5.useState)(new Date()), [numberOfAdults, setNumberOfAdults] = (0, import_react5.useState)(0), [numberOfChildren, setNumberOfChildren] = (0, import_react5.useState)(0), closeDatePicker = () => {
    setInputFocus(!1), setLocation(""), setNumberOfChildren(0), setNumberOfAdults(0), setCheckInDate(new Date()), setCheckOutDate(new Date()), document.body.style.overflow = "initial";
  };
  return (0, import_react5.useEffect)(() => {
    let handleClick = (event) => {
      !headerRef.current || headerRef.current.contains(event.target) || closeDatePicker();
    };
    return document.addEventListener("click", handleClick), () => document.removeEventListener("click", handleClick);
  }, []), (0, import_react5.useEffect)(() => {
    let onScroll = () => {
      window.scrollY > 10 ? setScrolled(!0) : setScrolled(!1);
    };
    return window.addEventListener("scroll", onScroll), () => window.removeEventListener("scroll", onScroll);
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeaderSection, {
    ref: headerRef,
    className: [
      scrolled && "scrolled",
      inputFocus ? "inputFocus" : null
    ].join(" "),
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "headerInner",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "logo",
          onClick: () => navigate("/"),
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
              viewBox: "0 0 256 276",
              xmlns: "http://www.w3.org/2000/svg",
              preserveAspectRatio: "xMidYMid",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                d: "M238 223.1a41 41 0 01-46 35c-7-.8-13.8-3-21-7.1-10-5.5-19.8-14-31.4-26.8 18.2-22.3 29.2-42.7 33.4-61 1.9-8.5 2.2-16.2 1.3-23.4a44.7 44.7 0 00-7.4-18.7 46.5 46.5 0 00-38.9-19.6c-16 0-30.3 7.4-38.9 19.6a44.8 44.8 0 00-7.4 18.7 57.3 57.3 0 001.3 23.5c4.2 18.2 15.5 38.9 33.4 61.2A123.8 123.8 0 0185 251.3c-7.2 4.1-14.1 6.3-21 7.1a41 41 0 01-46-35c-.9-6.9-.3-13.8 2.4-21.5.9-2.8 2.2-5.5 3.6-8.8l6.4-13.8.2-.6c19-41 39.5-83 60.7-123.8l.8-1.7 6.7-12.7c2.2-4.4 4.6-8.5 7.7-12a28.8 28.8 0 0144.1 0c3 3.5 5.5 7.6 7.7 12 2.2 4.2 4.4 8.6 6.7 12.7l.8 1.7c21 41 41.4 83 60.4 124.1v.3c2.2 4.4 4.1 9.4 6.3 13.8 1.4 3.3 2.8 6 3.6 8.8 2.2 7.2 3 14 2 21.2zm-110-13c-14.9-18.7-24.6-36.3-27.9-51.2a44.5 44.5 0 01-.8-16.9c.6-4.4 2.2-8.2 4.4-11.5 5.3-7.5 14-12.2 24.3-12.2 10.2 0 19.3 4.4 24.3 12.2 2.2 3.3 3.8 7.1 4.4 11.5.8 5 .5 10.8-.8 16.9-3.4 14.6-13 32.2-27.9 51.3zm124.4-14.3l-4.2-10-6.3-14-.3-.2c-19-41.4-39.4-83.3-61-124.7l-.8-1.7c-2.2-4.1-4.4-8.5-6.6-13-2.7-4.9-5.5-10.1-9.9-15.1a44.5 44.5 0 00-35-17.1C114.5 0 102 6 93 16.6a95 95 0 00-10 15.1l-6.6 13-.8 1.6c-21.2 41.4-42 83.3-61 124.7l-.2.6-6.4 14c-1.4 3-2.7 6.4-4.1 10a58.6 58.6 0 0062 79.4 72.8 72.8 0 0027.6-9.4c11.3-6.3 22-15.4 34.2-28.7a144.9 144.9 0 0034.2 28.7 72.9 72.9 0 0034.8 10 58.5 58.5 0 0058.2-50.2 52.1 52.1 0 00-2.5-29.6z",
                fill: "currentColor"
              }, void 0, !1, {
                fileName: "app/components/Header/Header.tsx",
                lineNumber: 114,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/Header/Header.tsx",
              lineNumber: 109,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
              children: "airbnb"
            }, void 0, !1, {
              fileName: "app/components/Header/Header.tsx",
              lineNumber: 119,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/Header/Header.tsx",
          lineNumber: 108,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
          ref: navRef
        }, void 0, !1, {
          fileName: "app/components/Header/Header.tsx",
          lineNumber: 121,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "profile",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
              href: "#",
              children: "Become a host"
            }, void 0, !1, {
              fileName: "app/components/Header/Header.tsx",
              lineNumber: 218,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "signin",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.Link, {
                backgroundColor: "white",
                color: "hostelloRed.500",
                href: "/sign-in",
                p: "2",
                borderRadius: "lg",
                children: "Sign In"
              }, void 0, !1, {
                fileName: "app/components/Header/Header.tsx",
                lineNumber: 225,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/Header/Header.tsx",
              lineNumber: 224,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/Header/Header.tsx",
          lineNumber: 217,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/Header/Header.tsx",
      lineNumber: 107,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/Header/Header.tsx",
    lineNumber: 100,
    columnNumber: 5
  }, this);
}
var HeaderSection = import_styled.default.header`
  position: fixed;
  top: 0;
  color: #fafafc;
  padding: 1.5rem 3.5rem;
  width: 100%;
  z-index: 10;
  transition: background 0.2s, border-bottom 0.2s;
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #fafafc;
    border-radius: 99px;
    display: flex;
    align-items: center;
    left: 0;
    top: 0;
    transition: all 0.2s;
    label,
    input,
    .guestNumber {
      background: none;
      font-size: 14px;
      border: none;
      line-height: 1.5;
      display: block;
      color: #2e2e48;
      outline: none;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    input {
      width: 100%;
      font-weight: 700;
      &::placeholder {
        color: #2e2e48;
        font-weight: 400;
        opacity: 0.5;
      }
    }
    .guestNumber {
      font-weight: 700;
      .empty {
        color: #2e2e48;
        font-weight: 400;
        opacity: 0.5;
      }
    }
    .field {
      width: 100%;
      padding: 0.5rem 1.5rem;
      border-radius: 99px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      transition: background 0.2s;
      position: relative;
      & + .field::before {
        position: absolute;
        content: "";
        width: 2px;
        height: 2rem;
        background: #efeff5;
        border-radius: 2px;
        left: 0;
        transition: transform 0.2s;
      }
      &:hover,
      &:focus-within {
        background: #efeff5;
      }
      &:last-of-type {
        padding-right: 10rem;
      }
    }
  }
  .overlay:hover .field::before,
  .overlay:focus-within .field::before {
    transform: scale(0);
  }
  .user,
  .profile,
  .logo,
  .globe,
  nav {
    display: flex;
    align-items: center;
  }
  .headerInner {
    max-width: var(--containerWidth);
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
  }
  & > div {
    flex: 0 0 20%;
  }
  nav {
    flex: 1;
    justify-content: center;
    transition: all 0.2s;
    a + a {
      margin-left: 1.5rem;
    }
    a {
      position: relative;
    }
    a::before {
      position: absolute;
      content: "";
      width: 1.5rem;
      height: 2px;
      border-radius: 2px;
      background: #fafafc;
      bottom: -0.5rem;
      left: calc(50% - 0.75rem);
      transform: scaleX(0);
      transform-origin: center;
      transition: transform 0.2s;
    }
    a:hover::before,
    a.active::before {
      transform: scaleX(1);
    }
  }
  .logo {
    cursor: pointer;
    svg {
      height: 2rem;
      color: #fafafc;
      transition: color 0.2s;
    }
    span {
      font-weight: 600;
      font-size: 1.15rem;
      margin-left: 0.5rem;
    }
  }
  .profile {
    justify-content: flex-end;
    white-space: nowrap;
    svg {
      height: 1.15rem;
    }
    a,
    .themeToggle {
      margin-right: 1.5rem;
    }
    .userIcon {
      background: #2e2e48;
      border-radius: 99px;
      height: 1.5rem;
      width: 1.5rem;
      color: #fafafc;
    }
    .user {
      background: #fafafc;
      border-radius: 99px;
      padding: 0.25rem 0.25rem 0.25rem 0.5rem;
    }
    .menu {
      color: #2e2e48;
      margin-right: 0.5rem;
    }
  }
  form {
    position: absolute;
    transform: translate(-50%, 150%);
    left: 50%;
    top: -1rem;
    background: #fafafc;
    padding: 0.5rem;
    border-radius: 99px;
    display: flex;
    align-items: center;
    max-width: 720px;
    margin: 1.5rem 0;
    width: 60vw;
    box-shadow: 0 1rem 3rem -1rem #1e1e38;
    transition: all 0.2s;
    transform-origin: center;
    & * {
      transition: all 0.2s;
    }
    & > input {
      background: none;
      border: none;
      font-size: 1.15rem;
      flex: 1;
      padding: 0 1.5rem;
      color: #2e2e48;
      outline: none;
      &::placeholder {
        color: #2e2e48;
        opacity: 0.6;
      }
    }
    & > button {
      background: var(--red);
      color: #fafafc;
      border: none;
      padding: 0.5rem calc(1.75rem / 2);
      height: 3rem;
      max-width: 300px;
      display: flex;
      align-items: center;
      border-radius: 99px;
      font-weight: 700;
      font-size: 1rem;
      overflow: hidden;
      z-index: 2;
      &:hover:not(:disabled) {
        box-shadow: 0 0 0 2px var(--white), 0 0 0 4px var(--red);
      }
      &:disabled {
        opacity: 0.5;
      }
    }
    & > button svg {
      height: 1.25rem;
      margin-right: 0.75rem;
      flex: 0 0 1.25rem;
    }
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
  @media (max-width: 36rem) {
    .profile,
    .logo,
    nav,
    form > button span {
      display: none;
    }
    .overlay {
      display: none;
    }
    .headerInner {
      grid-template-columns: 1fr;
    }
    form {
      position: relative;
      transform: none !important;
      width: 100% !important;
      left: unset;
      top: 0;
      margin: 0;
      & > input {
        padding: 0 1rem;
        font-size: 1rem;
      }
      & > button {
        width: 2.5rem;
        height: 2.5rem;
        padding: 0 0.6rem;
      }
      & > button svg {
        height: 1rem;
        width: 1rem;
      }
    }
  }
  @media (min-width: 36rem) and (max-width: 62.5rem) {
    nav {
      display: none;
    }
    .headerInner {
      grid-template-columns: 1fr 1fr;
    }
  }
  &.scrolled:not(.inputFocus) {
    background: #fafafc;
    color: #2e2e48;
    border-bottom: 2px solid #efeff5;
    .overlay {
      opacity: 0;
      pointer-events: none;
    }
    nav {
      opacity: 0;
      pointer-events: none;
    }
    .logo svg {
      color: var(--red);
    }
    .user {
      box-shadow: 0 0 0 2px #efeff5;
    }
    form {
      box-shadow: 0 0 0 2px #efeff5;
      transform: translate(-50%, 0.125rem) scale(0.83);
      width: 480px;
      & > button {
        max-width: 3rem;
      }
      & > button span {
        opacity: 0;
      }
    }
    @media (max-width: 36rem) {
      padding-top: 1rem;
      padding-bottom: 1rem;
      form {
        padding: 0;
        box-shadow: none;
        background: #efeff5;
      }
    }
    @media (min-width: 36rem) and (max-width: 62.5rem) {
      .profile {
        opacity: 0;
        pointer-events: none;
      }
      form {
        left: auto;
        right: 0;
        transform: translate(0, 0.125rem) scale(0.83);
        width: 50%;
      }
    }
  }
  &.inputFocus {
    color: #2e2e48;
    .logo svg {
      color: var(--red);
    }
    form {
      background: #fafafc;
      width: 100%;
      box-shadow: 0 1rem 1.5rem -0.5rem #0001;
    }
  }
`;

// app/styles/index.css
var styles_default = "/build/_assets/index-5FERVHJI.css";

// app/root.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader = (args) => (0, import_ssr.rootAuthLoader)(args), CatchBoundary = (0, import_remix.ClerkCatchBoundary)(), ourTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    hostelloRed: {
      300: "#ee7779",
      500: "#e32226",
      600: "#ac1518",
      700: "#841012"
    }
  }
};
function links() {
  return [
    { rel: "stylesheet", href: styles_default },
    {}
  ];
}
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react9.ChakraProvider, {
      theme: ourTheme,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 59,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react9.Box, {
          as: "main",
          minH: "100vh",
          pos: "relative",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react8.Outlet, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 61,
            columnNumber: 21
          }, this)
        }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 60,
          columnNumber: 17
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 58,
      columnNumber: 13
    }, this)
  }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 57,
    columnNumber: 9
  }, this);
}
var root_default = (0, import_remix.ClerkApp)(App), Document = (0, import_react10.withEmotionCache)(
  ({ children }, emotionCache) => {
    let serverSyleData = import_react7.default.useContext(ServerStyleContext), clientStyleData = import_react7.default.useContext(ClientStyleContext);
    return import_react7.default.useEffect(() => {
      emotionCache.sheet.container = document.head;
      let tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush(), tags.forEach((tag) => {
        emotionCache.sheet._insertTag(tag);
      }), clientStyleData == null || clientStyleData.reset();
    }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
      lang: "en",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("title", {
              children: "Bossa Nova Stack"
            }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 96,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
              charSet: "utf-8"
            }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 97,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
              name: "viewport",
              content: "width=device-width,initial-scale=1"
            }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 98,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react8.Meta, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 102,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react8.Links, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 103,
              columnNumber: 21
            }, this),
            serverSyleData == null ? void 0 : serverSyleData.map(({ key, ids, css }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("style", {
              "data-emotion": `${key} ${ids.join(" ")}`,
              dangerouslySetInnerHTML: { __html: css }
            }, key, !1, {
              fileName: "app/root.tsx",
              lineNumber: 105,
              columnNumber: 25
            }, this))
          ]
        }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 95,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
          children: [
            children,
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react8.ScrollRestoration, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 115,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react8.Scripts, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 116,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react8.LiveReload, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 118,
              columnNumber: 25
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 113,
          columnNumber: 17
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 94,
      columnNumber: 13
    }, this);
  }
);

// app/routes/hostel/$hostelId.tsx
var hostelId_exports = {};
__export(hostelId_exports, {
  default: () => HostelListing
});
var import_react11 = require("@chakra-ui/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function HostelListing() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
        className: "intro-single",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react11.Grid, {
          p: "8",
          templateColumns: "repeat(12, 1fr)",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react11.GridItem, {
              colSpan: [12, 8],
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "title-single-box",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                    className: "title-single",
                    children: "304 Blaster Up"
                  }, void 0, !1, {
                    fileName: "app/routes/hostel/$hostelId.tsx",
                    lineNumber: 10,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                    className: "color-text-a",
                    children: "Chicago, IL 606543"
                  }, void 0, !1, {
                    fileName: "app/routes/hostel/$hostelId.tsx",
                    lineNumber: 11,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/hostel/$hostelId.tsx",
                lineNumber: 9,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/hostel/$hostelId.tsx",
              lineNumber: 8,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react11.GridItem, {
              colSpan: [12, 4],
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
                "aria-label": "breadcrumb",
                className: "breadcrumb-box d-flex justify-content-lg-end",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", {
                  className: "breadcrumb",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                      className: "breadcrumb-item",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                        href: "index.html",
                        children: "Home"
                      }, void 0, !1, {
                        fileName: "app/routes/hostel/$hostelId.tsx",
                        lineNumber: 18,
                        columnNumber: 19
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/hostel/$hostelId.tsx",
                      lineNumber: 17,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                      className: "breadcrumb-item",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                        href: "property-grid.html",
                        children: "Properties"
                      }, void 0, !1, {
                        fileName: "app/routes/hostel/$hostelId.tsx",
                        lineNumber: 21,
                        columnNumber: 19
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/hostel/$hostelId.tsx",
                      lineNumber: 20,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                      className: "breadcrumb-item active",
                      "aria-current": "page",
                      children: "304 Blaster Up"
                    }, void 0, !1, {
                      fileName: "app/routes/hostel/$hostelId.tsx",
                      lineNumber: 23,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/hostel/$hostelId.tsx",
                  lineNumber: 16,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/hostel/$hostelId.tsx",
                lineNumber: 15,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/hostel/$hostelId.tsx",
              lineNumber: 14,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/hostel/$hostelId.tsx",
          lineNumber: 7,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/hostel/$hostelId.tsx",
        lineNumber: 6,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
        className: "property-single nav-arrow-b",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "container",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "row justify-content-center",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "col-lg-8",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    id: "property-single-carousel",
                    className: "swiper",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "swiper-wrapper",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "carousel-item-b swiper-slide",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                            src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
                            alt: ""
                          }, void 0, !1, {
                            fileName: "app/routes/hostel/$hostelId.tsx",
                            lineNumber: 40,
                            columnNumber: 21
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/hostel/$hostelId.tsx",
                          lineNumber: 39,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "carousel-item-b swiper-slide",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                            src: "assets/img/slide-2.jpg",
                            alt: ""
                          }, void 0, !1, {
                            fileName: "app/routes/hostel/$hostelId.tsx",
                            lineNumber: 43,
                            columnNumber: 21
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/hostel/$hostelId.tsx",
                          lineNumber: 42,
                          columnNumber: 19
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/hostel/$hostelId.tsx",
                      lineNumber: 38,
                      columnNumber: 17
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/hostel/$hostelId.tsx",
                    lineNumber: 37,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "property-single-carousel-pagination carousel-pagination"
                  }, void 0, !1, {
                    fileName: "app/routes/hostel/$hostelId.tsx",
                    lineNumber: 47,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/hostel/$hostelId.tsx",
                lineNumber: 36,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/hostel/$hostelId.tsx",
              lineNumber: 35,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "row",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "col-sm-12",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "row justify-content-between",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "col-md-5 col-lg-4",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "property-price d-flex justify-content-center foo",
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                              className: "card-header-c d-flex",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                  className: "card-box-ico",
                                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                    className: "bi bi-cash",
                                    children: "$"
                                  }, void 0, !1, {
                                    fileName: "app/routes/hostel/$hostelId.tsx",
                                    lineNumber: 59,
                                    columnNumber: 25
                                  }, this)
                                }, void 0, !1, {
                                  fileName: "app/routes/hostel/$hostelId.tsx",
                                  lineNumber: 58,
                                  columnNumber: 23
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                  className: "card-title-c align-self-center",
                                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", {
                                    className: "title-c",
                                    children: "15000"
                                  }, void 0, !1, {
                                    fileName: "app/routes/hostel/$hostelId.tsx",
                                    lineNumber: 62,
                                    columnNumber: 25
                                  }, this)
                                }, void 0, !1, {
                                  fileName: "app/routes/hostel/$hostelId.tsx",
                                  lineNumber: 61,
                                  columnNumber: 23
                                }, this)
                              ]
                            }, void 0, !0, {
                              fileName: "app/routes/hostel/$hostelId.tsx",
                              lineNumber: 57,
                              columnNumber: 21
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/routes/hostel/$hostelId.tsx",
                            lineNumber: 56,
                            columnNumber: 19
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "property-summary",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                className: "row",
                                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                  className: "col-sm-12",
                                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                    className: "title-box-d section-t4",
                                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
                                      className: "title-d",
                                      children: "Quick Summary"
                                    }, void 0, !1, {
                                      fileName: "app/routes/hostel/$hostelId.tsx",
                                      lineNumber: 70,
                                      columnNumber: 27
                                    }, this)
                                  }, void 0, !1, {
                                    fileName: "app/routes/hostel/$hostelId.tsx",
                                    lineNumber: 69,
                                    columnNumber: 25
                                  }, this)
                                }, void 0, !1, {
                                  fileName: "app/routes/hostel/$hostelId.tsx",
                                  lineNumber: 68,
                                  columnNumber: 23
                                }, this)
                              }, void 0, !1, {
                                fileName: "app/routes/hostel/$hostelId.tsx",
                                lineNumber: 67,
                                columnNumber: 21
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                className: "summary-list",
                                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
                                  className: "list",
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                                      className: "d-flex justify-content-between",
                                      children: [
                                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
                                          children: "Property ID:"
                                        }, void 0, !1, {
                                          fileName: "app/routes/hostel/$hostelId.tsx",
                                          lineNumber: 77,
                                          columnNumber: 27
                                        }, this),
                                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                          children: "1134"
                                        }, void 0, !1, {
                                          fileName: "app/routes/hostel/$hostelId.tsx",
                                          lineNumber: 78,
                                          columnNumber: 27
                                        }, this)
                                      ]
                                    }, void 0, !0, {
                                      fileName: "app/routes/hostel/$hostelId.tsx",
                                      lineNumber: 76,
                                      columnNumber: 25
                                    }, this),
                                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                                      className: "d-flex justify-content-between",
                                      children: [
                                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
                                          children: "Location:"
                                        }, void 0, !1, {
                                          fileName: "app/routes/hostel/$hostelId.tsx",
                                          lineNumber: 81,
                                          columnNumber: 27
                                        }, this),
                                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                          children: "Chicago, IL 606543"
                                        }, void 0, !1, {
                                          fileName: "app/routes/hostel/$hostelId.tsx",
                                          lineNumber: 82,
                                          columnNumber: 27
                                        }, this)
                                      ]
                                    }, void 0, !0, {
                                      fileName: "app/routes/hostel/$hostelId.tsx",
                                      lineNumber: 80,
                                      columnNumber: 25
                                    }, this),
                                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                                      className: "d-flex justify-content-between",
                                      children: [
                                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
                                          children: "Property Type:"
                                        }, void 0, !1, {
                                          fileName: "app/routes/hostel/$hostelId.tsx",
                                          lineNumber: 85,
                                          columnNumber: 27
                                        }, this),
                                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                          children: "House"
                                        }, void 0, !1, {
                                          fileName: "app/routes/hostel/$hostelId.tsx",
                                          lineNumber: 86,
                                          columnNumber: 27
                                        }, this)
                                      ]
                                    }, void 0, !0, {
                                      fileName: "app/routes/hostel/$hostelId.tsx",
                                      lineNumber: 84,
                                      columnNumber: 25
                                    }, this),
                                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                                      className: "d-flex justify-content-between",
                                      children: [
                                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
                                          children: "Status:"
                                        }, void 0, !1, {
                                          fileName: "app/routes/hostel/$hostelId.tsx",
                                          lineNumber: 89,
                                          columnNumber: 27
                                        }, this),
                                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                          children: "Sale"
                                        }, void 0, !1, {
                                          fileName: "app/routes/hostel/$hostelId.tsx",
                                          lineNumber: 90,
                                          columnNumber: 27
                                        }, this)
                                      ]
                                    }, void 0, !0, {
                                      fileName: "app/routes/hostel/$hostelId.tsx",
                                      lineNumber: 88,
                                      columnNumber: 25
                                    }, this),
                                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                                      className: "d-flex justify-content-between",
                                      children: [
                                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
                                          children: "Area:"
                                        }, void 0, !1, {
                                          fileName: "app/routes/hostel/$hostelId.tsx",
                                          lineNumber: 93,
                                          columnNumber: 27
                                        }, this),
                                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                          children: [
                                            "340m",
                                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("sup", {
                                              children: "2"
                                            }, void 0, !1, {
                                              fileName: "app/routes/hostel/$hostelId.tsx",
                                              lineNumber: 95,
                                              columnNumber: 29
                                            }, this)
                                          ]
                                        }, void 0, !0, {
                                          fileName: "app/routes/hostel/$hostelId.tsx",
                                          lineNumber: 94,
                                          columnNumber: 27
                                        }, this)
                                      ]
                                    }, void 0, !0, {
                                      fileName: "app/routes/hostel/$hostelId.tsx",
                                      lineNumber: 92,
                                      columnNumber: 25
                                    }, this),
                                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                                      className: "d-flex justify-content-between",
                                      children: [
                                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
                                          children: "Beds:"
                                        }, void 0, !1, {
                                          fileName: "app/routes/hostel/$hostelId.tsx",
                                          lineNumber: 99,
                                          columnNumber: 27
                                        }, this),
                                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                          children: "4"
                                        }, void 0, !1, {
                                          fileName: "app/routes/hostel/$hostelId.tsx",
                                          lineNumber: 100,
                                          columnNumber: 27
                                        }, this)
                                      ]
                                    }, void 0, !0, {
                                      fileName: "app/routes/hostel/$hostelId.tsx",
                                      lineNumber: 98,
                                      columnNumber: 25
                                    }, this),
                                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                                      className: "d-flex justify-content-between",
                                      children: [
                                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
                                          children: "Baths:"
                                        }, void 0, !1, {
                                          fileName: "app/routes/hostel/$hostelId.tsx",
                                          lineNumber: 103,
                                          columnNumber: 27
                                        }, this),
                                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                          children: "2"
                                        }, void 0, !1, {
                                          fileName: "app/routes/hostel/$hostelId.tsx",
                                          lineNumber: 104,
                                          columnNumber: 27
                                        }, this)
                                      ]
                                    }, void 0, !0, {
                                      fileName: "app/routes/hostel/$hostelId.tsx",
                                      lineNumber: 102,
                                      columnNumber: 25
                                    }, this),
                                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                                      className: "d-flex justify-content-between",
                                      children: [
                                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
                                          children: "Garage:"
                                        }, void 0, !1, {
                                          fileName: "app/routes/hostel/$hostelId.tsx",
                                          lineNumber: 107,
                                          columnNumber: 27
                                        }, this),
                                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                          children: "1"
                                        }, void 0, !1, {
                                          fileName: "app/routes/hostel/$hostelId.tsx",
                                          lineNumber: 108,
                                          columnNumber: 27
                                        }, this)
                                      ]
                                    }, void 0, !0, {
                                      fileName: "app/routes/hostel/$hostelId.tsx",
                                      lineNumber: 106,
                                      columnNumber: 25
                                    }, this)
                                  ]
                                }, void 0, !0, {
                                  fileName: "app/routes/hostel/$hostelId.tsx",
                                  lineNumber: 75,
                                  columnNumber: 23
                                }, this)
                              }, void 0, !1, {
                                fileName: "app/routes/hostel/$hostelId.tsx",
                                lineNumber: 74,
                                columnNumber: 21
                              }, this)
                            ]
                          }, void 0, !0, {
                            fileName: "app/routes/hostel/$hostelId.tsx",
                            lineNumber: 66,
                            columnNumber: 19
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/hostel/$hostelId.tsx",
                        lineNumber: 55,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "col-md-7 col-lg-7 section-md-t3",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "row",
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                              className: "col-sm-12",
                              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                className: "title-box-d",
                                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
                                  className: "title-d",
                                  children: "Property Description"
                                }, void 0, !1, {
                                  fileName: "app/routes/hostel/$hostelId.tsx",
                                  lineNumber: 118,
                                  columnNumber: 25
                                }, this)
                              }, void 0, !1, {
                                fileName: "app/routes/hostel/$hostelId.tsx",
                                lineNumber: 117,
                                columnNumber: 23
                              }, this)
                            }, void 0, !1, {
                              fileName: "app/routes/hostel/$hostelId.tsx",
                              lineNumber: 116,
                              columnNumber: 21
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/routes/hostel/$hostelId.tsx",
                            lineNumber: 115,
                            columnNumber: 19
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "property-description",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                                className: "description color-text-a",
                                children: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Cras ultricies ligula sed magna dictum porta. Curabitur aliquet quam id dui posuere blandit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar quam id dui posuere blandit."
                              }, void 0, !1, {
                                fileName: "app/routes/hostel/$hostelId.tsx",
                                lineNumber: 123,
                                columnNumber: 21
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                                className: "description color-text-a no-margin",
                                children: "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec rutrum congue leo eget malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada."
                              }, void 0, !1, {
                                fileName: "app/routes/hostel/$hostelId.tsx",
                                lineNumber: 130,
                                columnNumber: 21
                              }, this)
                            ]
                          }, void 0, !0, {
                            fileName: "app/routes/hostel/$hostelId.tsx",
                            lineNumber: 122,
                            columnNumber: 19
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "row section-t3",
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                              className: "col-sm-12",
                              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                className: "title-box-d",
                                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
                                  className: "title-d",
                                  children: "Amenities"
                                }, void 0, !1, {
                                  fileName: "app/routes/hostel/$hostelId.tsx",
                                  lineNumber: 139,
                                  columnNumber: 25
                                }, this)
                              }, void 0, !1, {
                                fileName: "app/routes/hostel/$hostelId.tsx",
                                lineNumber: 138,
                                columnNumber: 23
                              }, this)
                            }, void 0, !1, {
                              fileName: "app/routes/hostel/$hostelId.tsx",
                              lineNumber: 137,
                              columnNumber: 21
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/routes/hostel/$hostelId.tsx",
                            lineNumber: 136,
                            columnNumber: 19
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "amenities-list color-text-a",
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
                              className: "list-a no-margin",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                                  children: "Balcony"
                                }, void 0, !1, {
                                  fileName: "app/routes/hostel/$hostelId.tsx",
                                  lineNumber: 145,
                                  columnNumber: 23
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                                  children: "Outdoor Kitchen"
                                }, void 0, !1, {
                                  fileName: "app/routes/hostel/$hostelId.tsx",
                                  lineNumber: 146,
                                  columnNumber: 23
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                                  children: "Cable Tv"
                                }, void 0, !1, {
                                  fileName: "app/routes/hostel/$hostelId.tsx",
                                  lineNumber: 147,
                                  columnNumber: 23
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                                  children: "Deck"
                                }, void 0, !1, {
                                  fileName: "app/routes/hostel/$hostelId.tsx",
                                  lineNumber: 148,
                                  columnNumber: 23
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                                  children: "Tennis Courts"
                                }, void 0, !1, {
                                  fileName: "app/routes/hostel/$hostelId.tsx",
                                  lineNumber: 149,
                                  columnNumber: 23
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                                  children: "Internet"
                                }, void 0, !1, {
                                  fileName: "app/routes/hostel/$hostelId.tsx",
                                  lineNumber: 150,
                                  columnNumber: 23
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                                  children: "Parking"
                                }, void 0, !1, {
                                  fileName: "app/routes/hostel/$hostelId.tsx",
                                  lineNumber: 151,
                                  columnNumber: 23
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                                  children: "Sun Room"
                                }, void 0, !1, {
                                  fileName: "app/routes/hostel/$hostelId.tsx",
                                  lineNumber: 152,
                                  columnNumber: 23
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                                  children: "Concrete Flooring"
                                }, void 0, !1, {
                                  fileName: "app/routes/hostel/$hostelId.tsx",
                                  lineNumber: 153,
                                  columnNumber: 23
                                }, this)
                              ]
                            }, void 0, !0, {
                              fileName: "app/routes/hostel/$hostelId.tsx",
                              lineNumber: 144,
                              columnNumber: 21
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/routes/hostel/$hostelId.tsx",
                            lineNumber: 143,
                            columnNumber: 19
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/hostel/$hostelId.tsx",
                        lineNumber: 114,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/hostel/$hostelId.tsx",
                    lineNumber: 54,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/hostel/$hostelId.tsx",
                  lineNumber: 52,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "col-md-10 offset-md-1",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
                      className: "nav nav-pills-a nav-pills mb-3 section-t3",
                      id: "pills-tab",
                      role: "tablist",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                          className: "nav-item",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                            className: "nav-link active",
                            id: "pills-video-tab",
                            "data-bs-toggle": "pill",
                            href: "#pills-video",
                            role: "tab",
                            "aria-controls": "pills-video",
                            "aria-selected": "true",
                            children: "Video"
                          }, void 0, !1, {
                            fileName: "app/routes/hostel/$hostelId.tsx",
                            lineNumber: 162,
                            columnNumber: 19
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/hostel/$hostelId.tsx",
                          lineNumber: 161,
                          columnNumber: 17
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                          className: "nav-item",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                            className: "nav-link",
                            id: "pills-plans-tab",
                            "data-bs-toggle": "pill",
                            href: "#pills-plans",
                            role: "tab",
                            "aria-controls": "pills-plans",
                            "aria-selected": "false",
                            children: "Floor Plans"
                          }, void 0, !1, {
                            fileName: "app/routes/hostel/$hostelId.tsx",
                            lineNumber: 165,
                            columnNumber: 19
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/hostel/$hostelId.tsx",
                          lineNumber: 164,
                          columnNumber: 17
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                          className: "nav-item",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                            className: "nav-link",
                            id: "pills-map-tab",
                            "data-bs-toggle": "pill",
                            href: "#pills-map",
                            role: "tab",
                            "aria-controls": "pills-map",
                            "aria-selected": "false",
                            children: "Ubication"
                          }, void 0, !1, {
                            fileName: "app/routes/hostel/$hostelId.tsx",
                            lineNumber: 168,
                            columnNumber: 19
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/hostel/$hostelId.tsx",
                          lineNumber: 167,
                          columnNumber: 17
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/hostel/$hostelId.tsx",
                      lineNumber: 160,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "tab-content",
                      id: "pills-tabContent",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "tab-pane fade show active",
                          id: "pills-video",
                          role: "tabpanel",
                          "aria-labelledby": "pills-video-tab",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("iframe", {
                            src: "https://player.vimeo.com/video/73221098",
                            width: "100%",
                            height: "460",
                            frameBorder: "0",
                            allowFullScreen: !0
                          }, void 0, !1, {
                            fileName: "app/routes/hostel/$hostelId.tsx",
                            lineNumber: 173,
                            columnNumber: 19
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/hostel/$hostelId.tsx",
                          lineNumber: 172,
                          columnNumber: 17
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "tab-pane fade",
                          id: "pills-plans",
                          role: "tabpanel",
                          "aria-labelledby": "pills-plans-tab",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                            src: "assets/img/plan2.jpg",
                            alt: "",
                            className: "img-fluid"
                          }, void 0, !1, {
                            fileName: "app/routes/hostel/$hostelId.tsx",
                            lineNumber: 176,
                            columnNumber: 19
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/hostel/$hostelId.tsx",
                          lineNumber: 175,
                          columnNumber: 17
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "tab-pane fade",
                          id: "pills-map",
                          role: "tabpanel",
                          "aria-labelledby": "pills-map-tab",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("iframe", {
                            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1ses-419!2sve!4v1510329142834",
                            width: "100%",
                            height: "460",
                            frameBorder: "0",
                            style: { border: 0 },
                            allowFullScreen: !0
                          }, void 0, !1, {
                            fileName: "app/routes/hostel/$hostelId.tsx",
                            lineNumber: 179,
                            columnNumber: 19
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/hostel/$hostelId.tsx",
                          lineNumber: 178,
                          columnNumber: 17
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/hostel/$hostelId.tsx",
                      lineNumber: 171,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/hostel/$hostelId.tsx",
                  lineNumber: 159,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "col-md-12",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "row section-t3",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "col-sm-12",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "title-box-d",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
                            className: "title-d",
                            children: "Contact Agent"
                          }, void 0, !1, {
                            fileName: "app/routes/hostel/$hostelId.tsx",
                            lineNumber: 187,
                            columnNumber: 21
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/hostel/$hostelId.tsx",
                          lineNumber: 186,
                          columnNumber: 19
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/hostel/$hostelId.tsx",
                        lineNumber: 185,
                        columnNumber: 17
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/hostel/$hostelId.tsx",
                      lineNumber: 184,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "row",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "col-md-6 col-lg-4",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                            src: "assets/img/agent-4.jpg",
                            alt: "",
                            className: "img-fluid"
                          }, void 0, !1, {
                            fileName: "app/routes/hostel/$hostelId.tsx",
                            lineNumber: 193,
                            columnNumber: 19
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/hostel/$hostelId.tsx",
                          lineNumber: 192,
                          columnNumber: 17
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "col-md-6 col-lg-4",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "property-agent",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
                                className: "title-agent",
                                children: "Anabella Geller"
                              }, void 0, !1, {
                                fileName: "app/routes/hostel/$hostelId.tsx",
                                lineNumber: 197,
                                columnNumber: 21
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                                className: "color-text-a",
                                children: "Nulla porttitor accumsan tincidunt. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Quisque velit nisi, pretium ut lacinia in, elementum id enim."
                              }, void 0, !1, {
                                fileName: "app/routes/hostel/$hostelId.tsx",
                                lineNumber: 198,
                                columnNumber: 21
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
                                className: "list-unstyled",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                                    className: "d-flex justify-content-between",
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
                                        children: "Phone:"
                                      }, void 0, !1, {
                                        fileName: "app/routes/hostel/$hostelId.tsx",
                                        lineNumber: 205,
                                        columnNumber: 25
                                      }, this),
                                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                        className: "color-text-a",
                                        children: "(222) 4568932"
                                      }, void 0, !1, {
                                        fileName: "app/routes/hostel/$hostelId.tsx",
                                        lineNumber: 206,
                                        columnNumber: 25
                                      }, this)
                                    ]
                                  }, void 0, !0, {
                                    fileName: "app/routes/hostel/$hostelId.tsx",
                                    lineNumber: 204,
                                    columnNumber: 23
                                  }, this),
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                                    className: "d-flex justify-content-between",
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
                                        children: "Mobile:"
                                      }, void 0, !1, {
                                        fileName: "app/routes/hostel/$hostelId.tsx",
                                        lineNumber: 209,
                                        columnNumber: 25
                                      }, this),
                                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                        className: "color-text-a",
                                        children: "777 287 378 737"
                                      }, void 0, !1, {
                                        fileName: "app/routes/hostel/$hostelId.tsx",
                                        lineNumber: 210,
                                        columnNumber: 25
                                      }, this)
                                    ]
                                  }, void 0, !0, {
                                    fileName: "app/routes/hostel/$hostelId.tsx",
                                    lineNumber: 208,
                                    columnNumber: 23
                                  }, this),
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                                    className: "d-flex justify-content-between",
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
                                        children: "Email:"
                                      }, void 0, !1, {
                                        fileName: "app/routes/hostel/$hostelId.tsx",
                                        lineNumber: 213,
                                        columnNumber: 25
                                      }, this),
                                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                        className: "color-text-a",
                                        children: "annabella@example.com"
                                      }, void 0, !1, {
                                        fileName: "app/routes/hostel/$hostelId.tsx",
                                        lineNumber: 214,
                                        columnNumber: 25
                                      }, this)
                                    ]
                                  }, void 0, !0, {
                                    fileName: "app/routes/hostel/$hostelId.tsx",
                                    lineNumber: 212,
                                    columnNumber: 23
                                  }, this),
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                                    className: "d-flex justify-content-between",
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
                                        children: "Skype:"
                                      }, void 0, !1, {
                                        fileName: "app/routes/hostel/$hostelId.tsx",
                                        lineNumber: 217,
                                        columnNumber: 25
                                      }, this),
                                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                        className: "color-text-a",
                                        children: "Annabela.ge"
                                      }, void 0, !1, {
                                        fileName: "app/routes/hostel/$hostelId.tsx",
                                        lineNumber: 218,
                                        columnNumber: 25
                                      }, this)
                                    ]
                                  }, void 0, !0, {
                                    fileName: "app/routes/hostel/$hostelId.tsx",
                                    lineNumber: 216,
                                    columnNumber: 23
                                  }, this)
                                ]
                              }, void 0, !0, {
                                fileName: "app/routes/hostel/$hostelId.tsx",
                                lineNumber: 203,
                                columnNumber: 21
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                className: "socials-a",
                                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
                                  className: "list-inline",
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                                      className: "list-inline-item",
                                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                                        href: "#",
                                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                                          className: "bi bi-facebook",
                                          "aria-hidden": "true"
                                        }, void 0, !1, {
                                          fileName: "app/routes/hostel/$hostelId.tsx",
                                          lineNumber: 225,
                                          columnNumber: 29
                                        }, this)
                                      }, void 0, !1, {
                                        fileName: "app/routes/hostel/$hostelId.tsx",
                                        lineNumber: 224,
                                        columnNumber: 27
                                      }, this)
                                    }, void 0, !1, {
                                      fileName: "app/routes/hostel/$hostelId.tsx",
                                      lineNumber: 223,
                                      columnNumber: 25
                                    }, this),
                                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                                      className: "list-inline-item",
                                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                                        href: "#",
                                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                                          className: "bi bi-twitter",
                                          "aria-hidden": "true"
                                        }, void 0, !1, {
                                          fileName: "app/routes/hostel/$hostelId.tsx",
                                          lineNumber: 230,
                                          columnNumber: 29
                                        }, this)
                                      }, void 0, !1, {
                                        fileName: "app/routes/hostel/$hostelId.tsx",
                                        lineNumber: 229,
                                        columnNumber: 27
                                      }, this)
                                    }, void 0, !1, {
                                      fileName: "app/routes/hostel/$hostelId.tsx",
                                      lineNumber: 228,
                                      columnNumber: 25
                                    }, this),
                                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                                      className: "list-inline-item",
                                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                                        href: "#",
                                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                                          className: "bi bi-instagram",
                                          "aria-hidden": "true"
                                        }, void 0, !1, {
                                          fileName: "app/routes/hostel/$hostelId.tsx",
                                          lineNumber: 235,
                                          columnNumber: 29
                                        }, this)
                                      }, void 0, !1, {
                                        fileName: "app/routes/hostel/$hostelId.tsx",
                                        lineNumber: 234,
                                        columnNumber: 27
                                      }, this)
                                    }, void 0, !1, {
                                      fileName: "app/routes/hostel/$hostelId.tsx",
                                      lineNumber: 233,
                                      columnNumber: 25
                                    }, this),
                                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                                      className: "list-inline-item",
                                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                                        href: "#",
                                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                                          className: "bi bi-linkedin",
                                          "aria-hidden": "true"
                                        }, void 0, !1, {
                                          fileName: "app/routes/hostel/$hostelId.tsx",
                                          lineNumber: 240,
                                          columnNumber: 29
                                        }, this)
                                      }, void 0, !1, {
                                        fileName: "app/routes/hostel/$hostelId.tsx",
                                        lineNumber: 239,
                                        columnNumber: 27
                                      }, this)
                                    }, void 0, !1, {
                                      fileName: "app/routes/hostel/$hostelId.tsx",
                                      lineNumber: 238,
                                      columnNumber: 25
                                    }, this)
                                  ]
                                }, void 0, !0, {
                                  fileName: "app/routes/hostel/$hostelId.tsx",
                                  lineNumber: 222,
                                  columnNumber: 23
                                }, this)
                              }, void 0, !1, {
                                fileName: "app/routes/hostel/$hostelId.tsx",
                                lineNumber: 221,
                                columnNumber: 21
                              }, this)
                            ]
                          }, void 0, !0, {
                            fileName: "app/routes/hostel/$hostelId.tsx",
                            lineNumber: 196,
                            columnNumber: 19
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/hostel/$hostelId.tsx",
                          lineNumber: 195,
                          columnNumber: 17
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "col-md-12 col-lg-4",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "property-contact",
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
                              className: "form-a",
                              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                className: "row",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                    className: "col-md-12 mb-1",
                                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                      className: "form-group",
                                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                                        type: "text",
                                        className: "form-control form-control-lg form-control-a",
                                        id: "inputName",
                                        placeholder: "Name *",
                                        required: !0
                                      }, void 0, !1, {
                                        fileName: "app/routes/hostel/$hostelId.tsx",
                                        lineNumber: 253,
                                        columnNumber: 29
                                      }, this)
                                    }, void 0, !1, {
                                      fileName: "app/routes/hostel/$hostelId.tsx",
                                      lineNumber: 252,
                                      columnNumber: 27
                                    }, this)
                                  }, void 0, !1, {
                                    fileName: "app/routes/hostel/$hostelId.tsx",
                                    lineNumber: 251,
                                    columnNumber: 25
                                  }, this),
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                    className: "col-md-12 mb-1",
                                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                      className: "form-group",
                                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                                        type: "email",
                                        className: "form-control form-control-lg form-control-a",
                                        id: "inputEmail1",
                                        placeholder: "Email *",
                                        required: !0
                                      }, void 0, !1, {
                                        fileName: "app/routes/hostel/$hostelId.tsx",
                                        lineNumber: 258,
                                        columnNumber: 29
                                      }, this)
                                    }, void 0, !1, {
                                      fileName: "app/routes/hostel/$hostelId.tsx",
                                      lineNumber: 257,
                                      columnNumber: 27
                                    }, this)
                                  }, void 0, !1, {
                                    fileName: "app/routes/hostel/$hostelId.tsx",
                                    lineNumber: 256,
                                    columnNumber: 25
                                  }, this),
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                    className: "col-md-12 mb-1",
                                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                      className: "form-group",
                                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
                                        id: "textMessage",
                                        className: "form-control",
                                        placeholder: "Comment *",
                                        name: "message",
                                        cols: 45,
                                        rows: 8,
                                        required: !0
                                      }, void 0, !1, {
                                        fileName: "app/routes/hostel/$hostelId.tsx",
                                        lineNumber: 263,
                                        columnNumber: 29
                                      }, this)
                                    }, void 0, !1, {
                                      fileName: "app/routes/hostel/$hostelId.tsx",
                                      lineNumber: 262,
                                      columnNumber: 27
                                    }, this)
                                  }, void 0, !1, {
                                    fileName: "app/routes/hostel/$hostelId.tsx",
                                    lineNumber: 261,
                                    columnNumber: 25
                                  }, this),
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                    className: "col-md-12 mt-3",
                                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                                      type: "submit",
                                      className: "btn btn-a",
                                      children: "Send Message"
                                    }, void 0, !1, {
                                      fileName: "app/routes/hostel/$hostelId.tsx",
                                      lineNumber: 267,
                                      columnNumber: 27
                                    }, this)
                                  }, void 0, !1, {
                                    fileName: "app/routes/hostel/$hostelId.tsx",
                                    lineNumber: 266,
                                    columnNumber: 25
                                  }, this)
                                ]
                              }, void 0, !0, {
                                fileName: "app/routes/hostel/$hostelId.tsx",
                                lineNumber: 250,
                                columnNumber: 23
                              }, this)
                            }, void 0, !1, {
                              fileName: "app/routes/hostel/$hostelId.tsx",
                              lineNumber: 249,
                              columnNumber: 21
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/routes/hostel/$hostelId.tsx",
                            lineNumber: 248,
                            columnNumber: 19
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/hostel/$hostelId.tsx",
                          lineNumber: 247,
                          columnNumber: 17
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/hostel/$hostelId.tsx",
                      lineNumber: 191,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/hostel/$hostelId.tsx",
                  lineNumber: 183,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/hostel/$hostelId.tsx",
              lineNumber: 51,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/hostel/$hostelId.tsx",
          lineNumber: 34,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/hostel/$hostelId.tsx",
        lineNumber: 33,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/hostel/$hostelId.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/sign-in/$.tsx
var __exports = {};
__export(__exports, {
  default: () => SignInRoute
});
var import_react12 = require("@chakra-ui/react"), import_remix2 = require("@clerk/remix"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function SignInRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.Center, {
    height: "100vh",
    p: 10,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix2.SignIn, {
      routing: "path",
      path: "/sign-in",
      signUpUrl: "/sign-up"
    }, void 0, !1, {
      fileName: "app/routes/sign-in/$.tsx",
      lineNumber: 7,
      columnNumber: 13
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/sign-in/$.tsx",
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

// app/routes/sign-up/$.tsx
var __exports2 = {};
__export(__exports2, {
  default: () => SignUpRoute
});
var import_react13 = require("@chakra-ui/react"), import_remix3 = require("@clerk/remix"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function SignUpRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react13.Center, {
    height: "100vh",
    p: 10,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix3.SignUp, {
      routing: "path",
      path: "/sign-up",
      signInUrl: "/sign-in"
    }, void 0, !1, {
      fileName: "app/routes/sign-up/$.tsx",
      lineNumber: 7,
      columnNumber: 13
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/sign-up/$.tsx",
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  action: () => action,
  default: () => Index,
  loader: () => loader2
});
var import_react36 = require("@remix-run/react"), import_node = require("@remix-run/node"), import_remix4 = require("@clerk/remix"), import_ssr3 = require("@clerk/remix/ssr.server"), import_react37 = require("@chakra-ui/react");

// app/utils/db.server.ts
var import_ssr2 = require("@clerk/remix/ssr.server"), import_supabase_js = require("@supabase/supabase-js"), getDB = async (request) => {
  try {
    let { userId, getToken } = await (0, import_ssr2.getAuth)(request);
    if (!userId)
      return null;
    let secret = await getToken({ template: "supabase" });
    if (!secret)
      return null;
    let supabaseUrl = process.env.SUPABASE_URL || "", supabaseKey = process.env.SUPABASE_ANON_KEY || "", client = (0, import_supabase_js.createClient)(supabaseUrl, supabaseKey);
    return client.auth.setAuth(secret), client;
  } catch {
    return null;
  }
};

// node_modules/hero-slider/dist/HeroSlider.js
var import_react23 = __toESM(require("react"));

// node_modules/hero-slider/dist/node_modules/.pnpm/style-inject@0.3.0/node_modules/style-inject/dist/style-inject.es.js
function styleInject(css, ref) {
  ref === void 0 && (ref = {});
  var insertAt = ref.insertAt;
  if (!(!css || typeof document > "u")) {
    var head = document.head || document.getElementsByTagName("head")[0], style = document.createElement("style");
    style.type = "text/css", insertAt === "top" && head.firstChild ? head.insertBefore(style, head.firstChild) : head.appendChild(style), style.styleSheet ? style.styleSheet.cssText = css : style.appendChild(document.createTextNode(css));
  }
}

// node_modules/hero-slider/dist/HeroSlider.module.css.js
var css_248z = `.HeroSlider-module_Wrapper__TaeBr {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  /* Removes gray highlight when clicked on safari/mobile. */
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  animation: HeroSlider-module_fade-in__5as8N var(--slider-fade-in-duration, 100) ease-in;
}

@keyframes HeroSlider-module_fade-in__5as8N {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.HeroSlider-module_Container__EBtOP {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  pointer-events: none;
}

/* \`pointer-events\` manipulation to allow clicking inner children AND children inside the Container. */
.HeroSlider-module_Container__EBtOP * {
  pointer-events: auto;
}

/**
* ------------------------------------
* ----------ANIMATIONS----------------
* ------------------------------------
*/

.HeroSlider-module_Sliding_Fade_In__mRgKX {
  /* keyframe name | duration | timing function | delay */
  animation: HeroSlider-module_slide-fade-in__s5eQJ var(--sliding-duration, 600ms) ease-in-out var(--sliding-delay, 0ms);
}

@keyframes HeroSlider-module_slide-fade-in__s5eQJ {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.HeroSlider-module_Sliding_Left_To_Right__XPZWw {
  /* keyframe name | duration | timing function | delay */
  animation: HeroSlider-module_slide-left-to-right__mPnzQ var(--sliding-duration, 600ms) ease-in-out var(--sliding-delay, 0ms);
}

@keyframes HeroSlider-module_slide-left-to-right__mPnzQ {
  0% {
    clip-path: inset(0% 100% 0% 0%);
    -webkit-clip-path: inset(0% 100% 0% 0%);
  }
  100% {
    clip-path: inset(0% 0% 0% 0%);
    -webkit-clip-path: inset(0% 0% 0% 0%);
  }
}

.HeroSlider-module_Sliding_Right_To_Left__62-PD {
  /* keyframe name | duration | timing function | delay */
  animation: HeroSlider-module_slide-right-to-left__qlxI2 var(--sliding-duration, 600ms) ease-in-out var(--sliding-delay, 0ms);
}

@keyframes HeroSlider-module_slide-right-to-left__qlxI2 {
  0% {
    clip-path: inset(0% 0% 0% 100%);
    -webkit-clip-path: inset(0% 0% 0% 100%);
  }
  100% {
    clip-path: inset(0% 0% 0% 0%);
    -webkit-clip-path: inset(0% 0% 0% 0%);
  }
}

.HeroSlider-module_Sliding_Top_To_Bottom__9qXf- {
  /* keyframe name | duration | timing function | delay */
  animation: HeroSlider-module_slide-top-to-bottom__2AGIn var(--sliding-duration, 600ms) ease-in-out var(--sliding-delay, 0ms);
}

@keyframes HeroSlider-module_slide-top-to-bottom__2AGIn {
  0% {
    clip-path: inset(0% 0% 100% 0%);
    -webkit-clip-path: inset(0% 0% 100% 0%);
  }
  100% {
    clip-path: inset(0% 0% 0% 0%);
    -webkit-clip-path: inset(0% 0% 0% 0%);
  }
}

.HeroSlider-module_Sliding_Bottom_To_Top__fuFNk {
  /* keyframe name | duration | timing function | delay */
  animation: HeroSlider-module_slide-bottom-to-top__fkZ3m var(--sliding-duration, 600ms) ease-in-out var(--sliding-delay, 0ms);
}

@keyframes HeroSlider-module_slide-bottom-to-top__fkZ3m {
  0% {
    clip-path: inset(100% 0% 0% 0%);
    -webkit-clip-path: inset(100% 0% 0% 0%);
  }
  100% {
    clip-path: inset(0% 0% 0% 0%);
    -webkit-clip-path: inset(0% 0% 0% 0%);
  }
}
`, HeroSliderModuleCss = { Wrapper: "HeroSlider-module_Wrapper__TaeBr", "fade-in": "HeroSlider-module_fade-in__5as8N", Container: "HeroSlider-module_Container__EBtOP", Sliding_Fade_In: "HeroSlider-module_Sliding_Fade_In__mRgKX", "slide-fade-in": "HeroSlider-module_slide-fade-in__s5eQJ", Sliding_Left_To_Right: "HeroSlider-module_Sliding_Left_To_Right__XPZWw", "slide-left-to-right": "HeroSlider-module_slide-left-to-right__mPnzQ", Sliding_Right_To_Left: "HeroSlider-module_Sliding_Right_To_Left__62-PD", "slide-right-to-left": "HeroSlider-module_slide-right-to-left__qlxI2", Sliding_Top_To_Bottom: "HeroSlider-module_Sliding_Top_To_Bottom__9qXf-", "slide-top-to-bottom": "HeroSlider-module_slide-top-to-bottom__2AGIn", Sliding_Bottom_To_Top: "HeroSlider-module_Sliding_Bottom_To_Top__fuFNk", "slide-bottom-to-top": "HeroSlider-module_slide-bottom-to-top__fkZ3m" };
styleInject(css_248z);

// node_modules/hero-slider/dist/components/Buttons/index.js
var import_react17 = __toESM(require("react"));

// node_modules/hero-slider/dist/components/Buttons/index.module.css.js
var css_248z2 = `.index-module_Wrapper__ZIVLd {
  position: absolute;
  z-index: 3;
}

@media (max-width: 744px) {
  .index-module_Wrapper__ZIVLd {
    display: none;
  }
}

.index-module_Wrapper__ZIVLd,
.index-module_Wrapper__ZIVLd * {
  /* To disable double-tap zoom */
  touch-action: manipulation;
  pointer-events: none;
}

.index-module_Container__mtjRh {
  position: absolute;
  display: block;
  height: 100%;
  width: 100%;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: none;
  transition: all 400ms;
  pointer-events: none;
  will-change: transform;
}

/* \`pointer-events\` manipulation to allow clicking inner children AND children inside the Container. */
.index-module_Wrapper__ZIVLd *:not(.index-module_Container__mtjRh),
.index-module_Container__mtjRh * {
  pointer-events: auto;
}

.index-module_Button__hkx4Z {
  width: 100%;
  /* Disabling button styling */
  background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}

.index-module_Button__hkx4Z svg {
  opacity: 0.5;
  width: 60px;
  height: 60px;
  transition: all 200ms ease-in-out;
  color: #FFF; 
}

.index-module_Button__hkx4Z:hover svg {
  opacity: 1;
  width: 80px;
  height: 80px;
  color: #FFF; 
}

/**
* --------------------------------------
* -------------HORIZONTAL---------------
* --------------------------------------
*/

.index-module_Horizontal__8-P70.index-module_Wrapper__ZIVLd {
  top: 0;
  width: 20%;
  height: 100%;
  min-width: 45px;
  max-width: 120px;
}

.index-module_Horizontal__8-P70.index-module_Previous__TaJVT {
  left: 0;
}

.index-module_Horizontal__8-P70.index-module_Next__sFCHR {
  right: 0;
}

.index-module_Horizontal__8-P70 .index-module_Container__mtjRh:hover {
  --shadow: 100%;
}

.index-module_Horizontal__8-P70.index-module_Previous__TaJVT .index-module_Container__mtjRh {
  left: 33%;
  transform: translateX(-50%) scaleX(-1);
  background: linear-gradient(
    90deg,
    var(--c1, transparent) 40%,
    var(--c2, rgb(37, 37, 37, .05)) 60%,
    var(--c3, rgb(37, 37, 37, 0.5)) 85%
  ) var(--shadow, 0) / 200%;
}

.index-module_Horizontal__8-P70.index-module_Next__sFCHR .index-module_Container__mtjRh {
  right: 33%;
  transform: translateX(50%);
  background: linear-gradient(
    90deg,
    var(--c1, transparent) 40%,
    var(--c2, rgb(37, 37, 37, .05)) 60%,
    var(--c3, rgb(37, 37, 37, 0.5)) 85%
  ) var(--shadow, 0) / 200%;
}

/**
* ------------------------------------
* -------------VERTICAL---------------
* ------------------------------------
*/

.index-module_Vertical__VyL0Y.index-module_Wrapper__ZIVLd {
  width: 100%;
  height: 15%;
  max-height: 200px;
}

.index-module_Vertical__VyL0Y.index-module_Previous__TaJVT {
  top: 0;
}

.index-module_Vertical__VyL0Y.index-module_Next__sFCHR {
  bottom: 0;
}

.index-module_Vertical__VyL0Y .index-module_Container__mtjRh:hover {
  --shadow: 0;
}

.index-module_Vertical__VyL0Y.index-module_Previous__TaJVT .index-module_Container__mtjRh {
  background: linear-gradient(to bottom,
    rgb(37, 37, 37, 0.66) 0%,
    rgb(37, 37, 37, 0.33) 50%,
    rgb(37, 37, 37, 0.15) 75%,
    rgb(37, 37, 37, 0.01) 100%) no-repeat 0px var(--shadow, -200px);
}

.index-module_Vertical__VyL0Y.index-module_Previous__TaJVT svg {
  transform: rotate(-90deg);
}

.index-module_Vertical__VyL0Y.index-module_Next__sFCHR .index-module_Container__mtjRh {
  background: linear-gradient(to top,
    rgb(37, 37, 37, 0.66) 0%,
    rgb(37, 37, 37, 0.33) 50%,
    rgb(37, 37, 37, 0.15) 75%,
    rgb(37, 37, 37, 0.01) 100%) no-repeat 0px var(--shadow, 200px);
}

.index-module_Vertical__VyL0Y.index-module_Next__sFCHR svg {
  transform: rotate(90deg);
}
`, ButtonsModuleCss = { Wrapper: "index-module_Wrapper__ZIVLd", Container: "index-module_Container__mtjRh", Button: "index-module_Button__hkx4Z", Horizontal: "index-module_Horizontal__8-P70", Previous: "index-module_Previous__TaJVT", Next: "index-module_Next__sFCHR", Vertical: "index-module_Vertical__VyL0Y" };
styleInject(css_248z2);

// node_modules/hero-slider/dist/modules/Manager.js
var import_react14 = __toESM(require("react"));
function isMobile() {
  return typeof window < "u" ? !!(navigator && /Mobi|Android/i.test(navigator.userAgentData || navigator.userAgent)) : !1;
}
var defaultProps2 = {
  isMobile: isMobile()
}, ManagerStateContext = import_react14.default.createContext(void 0);
function managerReducer(state, action2) {
  switch (action2.type) {
    case "update-is-mobile":
      return Object.assign(Object.assign({}, state), { isMobile: state.isMobile });
    case "register-slide": {
      let { slides } = state;
      return slides.set(action2.payload.ref, {
        ref: action2.payload.ref,
        number: slides.size + 1,
        label: action2.payload.label
      }), { isMobile: state.isMobile, slides, totalSlides: slides.size };
    }
    case "remove-slide": {
      let { slides } = state;
      return slides.delete(action2.payload), { isMobile: state.isMobile, slides, totalSlides: slides.size };
    }
    default:
      throw new Error(`Unhandled action: [${JSON.stringify(action2, null, 2)}]`);
  }
}
function ManagerProvider({ children, manager }) {
  var _a;
  let [state, dispatch] = import_react14.default.useReducer(managerReducer, {
    isMobile: (_a = manager == null ? void 0 : manager.isMobile) !== null && _a !== void 0 ? _a : defaultProps2.isMobile,
    slides: /* @__PURE__ */ new Map(),
    totalSlides: 0
  }), getSlide = (ref) => state.slides.get(ref), registerSlide = (ref, label) => {
    dispatch({
      type: "register-slide",
      payload: {
        ref,
        label
      }
    });
  }, removeSlide = (ref) => {
    dispatch({
      type: "remove-slide",
      payload: ref
    });
  };
  import_react14.default.useEffect(() => {
    typeof (manager == null ? void 0 : manager.isMobile) == "boolean" && dispatch({
      type: "update-is-mobile",
      payload: manager == null ? void 0 : manager.isMobile
    });
  }, [manager == null ? void 0 : manager.isMobile]);
  let value = { state, getSlide, registerSlide, removeSlide };
  return import_react14.default.createElement(ManagerStateContext.Provider, { value }, children);
}
function useManager() {
  let context = import_react14.default.useContext(ManagerStateContext);
  if (context === void 0)
    throw new Error("useManager must be used within a ManagerProvider");
  return context;
}

// node_modules/hero-slider/dist/modules/Accessability.js
var import_react16 = __toESM(require("react"));

// node_modules/hero-slider/dist/modules/Controller.js
var import_react15 = __toESM(require("react"));
var defaultProps3 = {
  slidingDuration: 500,
  slidingDelay: 200,
  initialSlide: 1
}, ControllerStateContext = import_react15.default.createContext(void 0);
function settingsReducer(state, action2) {
  switch (action2.type) {
    case "start-sliding":
      return Object.assign(Object.assign({}, state), { isSliding: !0, activeSlide: action2.payload.nextSlide, prevActiveSlide: state.activeSlide, slidingDirection: action2.payload.slidingDirection });
    case "finish-sliding":
      return Object.assign(Object.assign({}, state), { isSliding: !1, slidingDirection: void 0 });
    case "set-delay-timeout":
      return Object.assign(Object.assign({}, state), { delayTimeout: action2.payload });
    case "set-sliding-timeout":
      return Object.assign(Object.assign({}, state), { slidingTimeout: action2.payload });
    default:
      throw new Error(`Unhandled action: [${JSON.stringify(action2, null, 2)}]`);
  }
}
function ControllerProvider({ children, controller }) {
  var _a, _b;
  let params = {
    slidingDuration: (_a = controller == null ? void 0 : controller.slidingDuration) !== null && _a !== void 0 ? _a : defaultProps3.slidingDuration,
    slidingDelay: (_b = controller == null ? void 0 : controller.slidingDelay) !== null && _b !== void 0 ? _b : defaultProps3.slidingDelay,
    initialSlide: (controller == null ? void 0 : controller.initialSlide) || defaultProps3.initialSlide
  }, [state, dispatch] = import_react15.default.useReducer(settingsReducer, {
    activeSlide: params.initialSlide,
    prevActiveSlide: 0,
    isSliding: !1,
    slidingDirection: void 0,
    delayTimeout: void 0,
    slidingTimeout: void 0
  }), { state: manager } = useManager(), getNextSlide = (aSlide = state.activeSlide) => {
    let lastSlide = manager.totalSlides, isNotLastSlide = aSlide <= lastSlide - 1, nextSlide;
    return isNotLastSlide ? nextSlide = aSlide + 1 : nextSlide = 1, nextSlide;
  }, getPreviousSlide = (aSlide = state.activeSlide) => {
    let lastSlide = manager.totalSlides, isNotFirstSlide = aSlide > 1, nextSlide;
    return isNotFirstSlide ? nextSlide = aSlide - 1 : nextSlide = lastSlide, nextSlide;
  }, getSlidingCycleDuration = () => (params.slidingDuration + params.slidingDelay) * 1.1, changeSlide = (nextSlide, slidingDirection) => {
    state.isSliding || (controller != null && controller.onBeforeSliding && controller.onBeforeSliding(state.activeSlide, nextSlide), dispatch({
      type: "start-sliding",
      payload: {
        nextSlide,
        slidingDirection
      }
    }));
  }, goToNextSlide = () => {
    changeSlide(getNextSlide(state.activeSlide), "forward");
  }, goToPreviousSlide = () => {
    changeSlide(getPreviousSlide(state.activeSlide), "backward");
  };
  import_react15.default.useEffect(() => {
    controller != null && controller.goToNextSlidePointer && (controller.goToNextSlidePointer.current = goToNextSlide);
  }, [controller == null ? void 0 : controller.goToNextSlidePointer, goToNextSlide]), import_react15.default.useEffect(() => {
    controller != null && controller.goToPreviousSlidePointer && (controller.goToPreviousSlidePointer.current = goToPreviousSlide);
  }, [controller == null ? void 0 : controller.goToPreviousSlidePointer, goToNextSlide]), import_react15.default.useEffect(() => (dispatch({
    type: "set-delay-timeout",
    payload: setTimeout(() => {
      controller != null && controller.onSliding && controller.onSliding(state.activeSlide, state.prevActiveSlide);
    }, params.slidingDelay)
  }), dispatch({
    type: "set-sliding-timeout",
    payload: setTimeout(() => {
      dispatch({ type: "finish-sliding" }), controller != null && controller.onAfterSliding && controller.onAfterSliding(state.activeSlide, state.prevActiveSlide);
    }, getSlidingCycleDuration())
  }), () => {
    state.delayTimeout && clearTimeout(state.delayTimeout), state.slidingTimeout && clearTimeout(state.slidingTimeout);
  }), [state.activeSlide]);
  let value = {
    state,
    slidingDuration: params.slidingDuration,
    slidingDelay: params.slidingDelay,
    getNextSlide,
    getPreviousSlide,
    getSlidingCycleDuration,
    changeSlide,
    goToNextSlide,
    goToPreviousSlide
  };
  return import_react15.default.createElement(ControllerStateContext.Provider, { value }, children);
}
function useController() {
  let context = import_react15.default.useContext(ControllerStateContext);
  if (context === void 0)
    throw new Error("useController must be used within a ControllerProvider");
  return context;
}

// node_modules/hero-slider/dist/modules/Accessability.js
var AccessabilityOrientation;
(function(AccessabilityOrientation2) {
  AccessabilityOrientation2.VERTICAL = "vertical", AccessabilityOrientation2.HORIZONTAL = "horizontal";
})(AccessabilityOrientation || (AccessabilityOrientation = {}));
var defaultProps4 = {
  shouldDisplayButtons: !0,
  shouldSlideOnArrowKeypress: !0,
  orientation: AccessabilityOrientation.HORIZONTAL,
  thresholdToSlide: 50
}, AccessabilityStateContext = import_react16.default.createContext(void 0);
function accessabilityReducer(state, action2) {
  switch (action2.type) {
    case "start-motion":
      return {
        initialX: action2.payload.x,
        initialY: action2.payload.y,
        currentX: void 0,
        currentY: void 0
      };
    case "update-motion":
      return {
        initialX: state.initialX,
        initialY: state.initialY,
        currentX: action2.payload.x,
        currentY: action2.payload.y
      };
    case "end-motion":
      return {
        initialX: void 0,
        initialY: void 0,
        currentX: void 0,
        currentY: void 0
      };
    default:
      throw new Error(`Unhandled action: [${JSON.stringify(action2, null, 2)}]`);
  }
}
function AccessabilityProvider({ children, accessability }) {
  var _a, _b, _c;
  let params = {
    shouldDisplayButtons: (_a = accessability == null ? void 0 : accessability.shouldDisplayButtons) !== null && _a !== void 0 ? _a : defaultProps4.shouldDisplayButtons,
    shouldSlideOnArrowKeypress: (_b = accessability == null ? void 0 : accessability.shouldSlideOnArrowKeypress) !== null && _b !== void 0 ? _b : defaultProps4.shouldSlideOnArrowKeypress,
    orientation: (accessability == null ? void 0 : accessability.orientation) || defaultProps4.orientation,
    thresholdToSlide: (_c = accessability == null ? void 0 : accessability.thresholdToSlide) !== null && _c !== void 0 ? _c : defaultProps4.thresholdToSlide
  }, [state, dispatch] = import_react16.default.useReducer(accessabilityReducer, {
    initialX: void 0,
    initialY: void 0,
    currentX: void 0,
    currentY: void 0
  }), { goToNextSlide, goToPreviousSlide } = useController(), onTouchStartHandler = (event) => {
    dispatch({
      type: "start-motion",
      payload: {
        x: event.touches[0].clientX,
        y: event.touches[0].clientY
      }
    });
  }, onTouchMoveHandler = (event) => {
    dispatch({
      type: "update-motion",
      payload: {
        x: event.touches[0].clientX,
        y: event.touches[0].clientY
      }
    });
  }, onTouchEndHandler = () => {
    let diffX = Number(state.initialX) - Number(state.currentX), diffY = Number(state.initialY) - Number(state.currentY), isSlidingHorizontally = Math.abs(diffX) > Math.abs(diffY), isSliderSetHorizontally = params.orientation === AccessabilityOrientation.HORIZONTAL, isSliderVertically = params.orientation === AccessabilityOrientation.VERTICAL;
    isSlidingHorizontally && isSliderSetHorizontally && Math.abs(diffX) >= params.thresholdToSlide ? diffX > 0 ? goToNextSlide() : goToPreviousSlide() : isSliderVertically && Math.abs(diffY) >= params.thresholdToSlide && (diffY > 0 ? goToNextSlide() : goToPreviousSlide()), dispatch({ type: "end-motion" });
  }, onArrowKeypressHandler = (e) => {
    if (!params.shouldSlideOnArrowKeypress)
      return;
    let isHorizontal = params.orientation === AccessabilityOrientation.HORIZONTAL;
    switch (!0) {
      case (isHorizontal && e.keyCode === 37):
        goToPreviousSlide();
        break;
      case (isHorizontal && e.keyCode === 39):
        goToNextSlide();
        break;
      case (!isHorizontal && e.keyCode === 38):
        goToPreviousSlide();
        break;
      case (!isHorizontal && e.keyCode === 40):
        goToNextSlide();
        break;
    }
  };
  import_react16.default.useEffect(() => (window.addEventListener("keydown", onArrowKeypressHandler), () => {
    window.removeEventListener("keydown", onArrowKeypressHandler);
  }), [onArrowKeypressHandler]);
  let value = {
    state,
    shouldDisplayButtons: params.shouldDisplayButtons,
    orientation: params.orientation,
    onTouchStartHandler,
    onTouchMoveHandler,
    onTouchEndHandler
  };
  return import_react16.default.createElement(AccessabilityStateContext.Provider, { value }, children);
}
function useAccessability() {
  let context = import_react16.default.useContext(AccessabilityStateContext);
  if (context === void 0)
    throw new Error("useAccessability must be used within a AccessabilityProvider");
  return context;
}

// node_modules/hero-slider/dist/utils/composeCssClasses.js
function composeCssClasses(...classes) {
  return classes.filter((i) => i ? typeof i == "string" ? !0 : typeof i.useIf == "boolean" ? i.useIf : !0 : !1).map((i) => typeof i == "string" ? i : i.className).join(" ");
}

// node_modules/hero-slider/dist/components/Buttons/index.js
function ArrowSvg() {
  return import_react17.default.createElement(
    "svg",
    { width: "60px", height: "60px", strokeWidth: "5", version: "1.1", viewBox: "0 0 129 129" },
    import_react17.default.createElement(
      "g",
      { fill: "currentColor" },
      import_react17.default.createElement("path", { d: "m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z" })
    )
  );
}
function Buttons() {
  let { state: { isMobile: isMobile2 } } = useManager(), { orientation } = useAccessability(), { goToPreviousSlide, goToNextSlide } = useController();
  if (isMobile2)
    return null;
  let isHorizontal = orientation === AccessabilityOrientation.HORIZONTAL;
  return import_react17.default.createElement(
    import_react17.default.Fragment,
    null,
    import_react17.default.createElement(
      "div",
      { className: composeCssClasses("hero-slider-previous", ButtonsModuleCss.Previous, ButtonsModuleCss.Wrapper, { className: ButtonsModuleCss.Horizontal, useIf: isHorizontal }, { className: ButtonsModuleCss.Vertical, useIf: !isHorizontal }) },
      import_react17.default.createElement(
        "div",
        { className: composeCssClasses("hero-slider-previous-container", ButtonsModuleCss.Container) },
        import_react17.default.createElement(
          "button",
          { className: composeCssClasses("hero-slider-previous-button", ButtonsModuleCss.Button), onClick: goToPreviousSlide },
          import_react17.default.createElement(ArrowSvg, null)
        )
      )
    ),
    import_react17.default.createElement(
      "div",
      { className: composeCssClasses("hero-slider-next", ButtonsModuleCss.Next, ButtonsModuleCss.Wrapper, { className: ButtonsModuleCss.Horizontal, useIf: isHorizontal }, { className: ButtonsModuleCss.Vertical, useIf: !isHorizontal }) },
      import_react17.default.createElement(
        "div",
        { className: composeCssClasses("hero-slider-next-container", ButtonsModuleCss.Container) },
        import_react17.default.createElement(
          "button",
          { className: composeCssClasses("hero-slider-next-button", ButtonsModuleCss.Button), onClick: goToNextSlide },
          import_react17.default.createElement(ArrowSvg, null)
        )
      )
    )
  );
}

// node_modules/hero-slider/dist/modules/Settings.js
var import_react18 = __toESM(require("react"));

// node_modules/hero-slider/dist/modules/ConsoleLogger.js
var ConsoleLogger = class {
  constructor(levels) {
    this.levels = levels;
  }
  log(...data) {
    this.levels.verbose && console.log(...data);
  }
  info(...data) {
    this.levels.info && console.info(...data);
  }
  debug(...data) {
    this.levels.debug && console.debug(...data);
  }
  warn(...data) {
    this.levels.warnings && console.warn(...data);
  }
  error(...data) {
    this.levels.errors && console.error(...data);
  }
  static new(levels = {
    verbose: !1,
    info: !1,
    debug: !1,
    warnings: !0,
    errors: !0
  }) {
    return this.instance ? this.instance.levels = levels : this.instance = new ConsoleLogger(levels), this.instance;
  }
};

// node_modules/hero-slider/dist/modules/Settings.js
var defaultProps5 = {
  sliderColor: "inherit",
  sliderStyle: {},
  navbarStyle: {
    color: void 0,
    activeColor: void 0
  }
}, SettingsStateContext = import_react18.default.createContext(void 0);
function SettingsProvider({ children, settings }) {
  let params = {
    sliderColor: (settings == null ? void 0 : settings.sliderColor) || defaultProps5.sliderColor,
    sliderStyle: (settings == null ? void 0 : settings.sliderStyle) || defaultProps5.sliderStyle,
    navbarStyle: (settings == null ? void 0 : settings.navbarStyle) || defaultProps5.navbarStyle,
    debug: settings == null ? void 0 : settings.debug
  };
  import_react18.default.useEffect(() => {
    ConsoleLogger.new(params.debug);
  }, [params.debug]);
  let value = params;
  return import_react18.default.createElement(SettingsStateContext.Provider, { value }, children);
}
function useSettings() {
  let context = import_react18.default.useContext(SettingsStateContext);
  if (context === void 0)
    throw new Error("useSettings must be used within a SettingsProvider");
  return context;
}

// node_modules/hero-slider/dist/modules/Animations.js
var import_react19 = __toESM(require("react"));
var SlidingAnimation;
(function(SlidingAnimation2) {
  SlidingAnimation2.TOP_TO_BOTTOM = "top_to_bottom", SlidingAnimation2.BOTTOM_TO_TOP = "bottom_to_top", SlidingAnimation2.LEFT_TO_RIGHT = "left_to_right", SlidingAnimation2.RIGHT_TO_LEFT = "right_to_left", SlidingAnimation2.FADE = "fade";
})(SlidingAnimation || (SlidingAnimation = {}));
var SlidingAnimationCssClassMap = {
  [SlidingAnimation.FADE]: HeroSliderModuleCss.Sliding_Fade_In,
  [SlidingAnimation.TOP_TO_BOTTOM]: HeroSliderModuleCss.Sliding_Top_To_Bottom,
  [SlidingAnimation.BOTTOM_TO_TOP]: HeroSliderModuleCss.Sliding_Bottom_To_Top,
  [SlidingAnimation.LEFT_TO_RIGHT]: HeroSliderModuleCss.Sliding_Left_To_Right,
  [SlidingAnimation.RIGHT_TO_LEFT]: HeroSliderModuleCss.Sliding_Right_To_Left
}, defaultProps6 = {
  slidingAnimation: "wipe",
  sliderFadeInDuration: 100,
  navbarFadeInDuration: 1e3,
  navbarFadeInDelay: 500,
  shouldManageAnimationSequence: !0
}, AnimationsStateContext = import_react19.default.createContext(void 0);
function AnimationsProvider({ children, animations }) {
  var _a, _b, _c, _d;
  let { orientation } = useAccessability(), params = {
    slidingAnimation: (animations == null ? void 0 : animations.slidingAnimation) || defaultProps6.slidingAnimation,
    sliderFadeInDuration: (_a = animations == null ? void 0 : animations.sliderFadeInDuration) !== null && _a !== void 0 ? _a : defaultProps6.sliderFadeInDuration,
    navbarFadeInDuration: (_b = animations == null ? void 0 : animations.navbarFadeInDuration) !== null && _b !== void 0 ? _b : defaultProps6.navbarFadeInDuration,
    navbarFadeInDelay: (_c = animations == null ? void 0 : animations.navbarFadeInDelay) !== null && _c !== void 0 ? _c : defaultProps6.navbarFadeInDelay,
    shouldManageAnimationSequence: (_d = animations == null ? void 0 : animations.shouldManageAnimationSequence) !== null && _d !== void 0 ? _d : defaultProps6.shouldManageAnimationSequence
  }, getSlidingAnimationCssClass = (activeSlide, prevActiveSlide, slidingDirection) => SlidingAnimationCssClassMap[(() => {
    switch (params.slidingAnimation) {
      case "fade":
        return SlidingAnimation.FADE;
      case "wipe": {
        let direction;
        return slidingDirection ? direction = slidingDirection : direction = activeSlide > prevActiveSlide ? "forward" : "backward", direction === "forward" ? orientation === AccessabilityOrientation.HORIZONTAL ? SlidingAnimation.RIGHT_TO_LEFT : SlidingAnimation.BOTTOM_TO_TOP : orientation === AccessabilityOrientation.HORIZONTAL ? SlidingAnimation.LEFT_TO_RIGHT : SlidingAnimation.TOP_TO_BOTTOM;
      }
      default:
        throw new Error(`Unhandled sliding animation: [${params.slidingAnimation}]`);
    }
  })()], value = {
    sliderFadeInDuration: params.sliderFadeInDuration,
    navbarFadeInDuration: params.sliderFadeInDuration,
    navbarFadeInDelay: params.sliderFadeInDuration,
    getSlidingAnimationCssClass
  };
  return import_react19.default.createElement(AnimationsStateContext.Provider, { value }, children);
}
function useAnimations() {
  let context = import_react19.default.useContext(AnimationsStateContext);
  if (context === void 0)
    throw new Error("useAnimations must be used within a AnimationsProvider");
  return context;
}

// node_modules/hero-slider/dist/modules/Layout.js
var import_react20 = __toESM(require("react")), mobileThreshold = 1024, LayoutStateContext = import_react20.default.createContext(void 0);
function layoutReducer(state, action2) {
  var _a, _b;
  switch (action2.type) {
    case "update-slider-dimensions":
      return {
        slider: state.slider,
        width: (_a = state.slider.current) === null || _a === void 0 ? void 0 : _a.clientWidth,
        height: (_b = state.slider.current) === null || _b === void 0 ? void 0 : _b.clientHeight
      };
    default:
      throw new Error(`Unhandled action: [${JSON.stringify(action2, null, 2)}]`);
  }
}
function LayoutProvider({ children }) {
  let [state, dispatch] = import_react20.default.useReducer(layoutReducer, {
    slider: import_react20.default.useRef(null),
    width: void 0,
    height: void 0
  });
  import_react20.default.useEffect(() => {
    function updateSliderDimensions() {
      state.slider.current && dispatch({ type: "update-slider-dimensions" });
    }
    return updateSliderDimensions(), window.addEventListener("resize", updateSliderDimensions), () => {
      window.removeEventListener("resize", updateSliderDimensions);
    };
  }, [state.slider.current]);
  let value = { state, mobileThreshold };
  return import_react20.default.createElement(LayoutStateContext.Provider, { value }, children);
}
function useLayout() {
  let context = import_react20.default.useContext(LayoutStateContext);
  if (context === void 0)
    throw new Error("useLayout must be used within a LayoutProvider");
  return context;
}

// node_modules/hero-slider/dist/modules/Autoplay.js
var import_react22 = __toESM(require("react"));

// node_modules/hero-slider/dist/modules/IntervalTimer.js
var IntervalState;
(function(IntervalState2) {
  IntervalState2[IntervalState2.IDLE = 0] = "IDLE", IntervalState2[IntervalState2.RUNNING = 1] = "RUNNING", IntervalState2[IntervalState2.PAUSED = 2] = "PAUSED", IntervalState2[IntervalState2.RESUME = 3] = "RESUME";
})(IntervalState || (IntervalState = {}));
var IntervalTimer = class {
  constructor(callback, interval, maxFires) {
    this.callback = callback, this.interval = interval, this.maxFires = maxFires, this.state = IntervalState.IDLE, this.remaining = 0, this.fires = 0, this.pausedTime = 0, this.intervalHandler = () => {
      this.maxFires != null && this.fires !== 0 && this.fires >= this.maxFires ? this.stop() : (this.lastTimeFired = new Date(), this.fires += 1, this.callback());
    }, this.timeoutHandler = () => {
      this.state === IntervalState.RESUME && (this.pausedTime = 0, this.intervalHandler(), this.start());
    }, this.start = () => {
      this.timerId = setInterval(this.intervalHandler, this.interval), this.lastTimeFired = new Date(), this.state = IntervalState.RUNNING;
    }, this.stop = () => {
      this.state !== 0 && (clearInterval(this.timerId), clearTimeout(this.resumeId), this.state = IntervalState.IDLE);
    }, this.reset = () => {
      this.stop(), this.start();
    }, this.pause = () => {
      this.state !== IntervalState.RUNNING && this.state !== IntervalState.RESUME || (this.remaining = +this.interval - (+new Date() - +(this.lastTimeFired || 0)) + +this.pausedTime, this.lastPauseTime = new Date(), clearInterval(this.timerId), clearTimeout(this.resumeId), this.state = IntervalState.PAUSED);
    }, this.resume = () => {
      if (this.state !== IntervalState.PAUSED)
        return;
      let currentDate = new Date();
      this.pausedTime = +this.pausedTime + +currentDate - +(this.lastPauseTime || 0), this.state = IntervalState.RESUME, this.resumeId = setTimeout(this.timeoutHandler, this.remaining);
    }, this.setInterval = (newInterval) => {
      this.state === 1 ? (this.pause(), this.interval = newInterval, this.resume()) : this.interval = newInterval;
    }, this.setMaxFires = (newMax) => {
      newMax != null && this.fires >= newMax && this.stop(), this.maxFires = newMax;
    };
  }
  static new(callback, interval, maxFires = void 0) {
    return this.instance ? (this.instance.callback = callback, this.instance.interval = interval, this.instance.maxFires = maxFires) : this.instance = new IntervalTimer(callback, interval, maxFires), this.instance;
  }
};

// node_modules/hero-slider/dist/modules/IntersectionObserver.js
var import_react21 = __toESM(require("react"));

// node_modules/hero-slider/dist/node_modules/.pnpm/react-intersection-observer@9.4.0_react@18.2.0/node_modules/react-intersection-observer/react-intersection-observer.modern.mjs.js
var React3 = __toESM(require("react")), observerMap = /* @__PURE__ */ new Map(), RootIds = /* @__PURE__ */ new WeakMap(), rootId = 0, unsupportedValue;
function getRootId(root) {
  return root ? (RootIds.has(root) || (rootId += 1, RootIds.set(root, rootId.toString())), RootIds.get(root)) : "0";
}
function optionsToId(options) {
  return Object.keys(options).sort().filter((key) => options[key] !== void 0).map((key) => `${key}_${key === "root" ? getRootId(options.root) : options[key]}`).toString();
}
function createObserver(options) {
  let id = optionsToId(options), instance = observerMap.get(id);
  if (!instance) {
    let elements = /* @__PURE__ */ new Map(), thresholds, observer = new IntersectionObserver((entries) => {
      entries.forEach((entry2) => {
        var _elements$get;
        let inView = entry2.isIntersecting && thresholds.some((threshold) => entry2.intersectionRatio >= threshold);
        options.trackVisibility && typeof entry2.isVisible > "u" && (entry2.isVisible = inView), (_elements$get = elements.get(entry2.target)) == null || _elements$get.forEach((callback) => {
          callback(inView, entry2);
        });
      });
    }, options);
    thresholds = observer.thresholds || (Array.isArray(options.threshold) ? options.threshold : [options.threshold || 0]), instance = {
      id,
      observer,
      elements
    }, observerMap.set(id, instance);
  }
  return instance;
}
function observe(element, callback, options = {}, fallbackInView = unsupportedValue) {
  if (typeof window.IntersectionObserver > "u" && fallbackInView !== void 0) {
    let bounds = element.getBoundingClientRect();
    return callback(fallbackInView, {
      isIntersecting: fallbackInView,
      target: element,
      intersectionRatio: typeof options.threshold == "number" ? options.threshold : 0,
      time: 0,
      boundingClientRect: bounds,
      intersectionRect: bounds,
      rootBounds: bounds
    }), () => {
    };
  }
  let {
    id,
    observer,
    elements
  } = createObserver(options), callbacks = elements.get(element) || [];
  return elements.has(element) || elements.set(element, callbacks), callbacks.push(callback), observer.observe(element), function() {
    callbacks.splice(callbacks.indexOf(callback), 1), callbacks.length === 0 && (elements.delete(element), observer.unobserve(element)), elements.size === 0 && (observer.disconnect(), observerMap.delete(id));
  };
}
function useInView({
  threshold,
  delay,
  trackVisibility,
  rootMargin,
  root,
  triggerOnce,
  skip,
  initialInView,
  fallbackInView,
  onChange
} = {}) {
  var _state$entry;
  let [ref, setRef] = React3.useState(null), callback = React3.useRef(), [state, setState] = React3.useState({
    inView: !!initialInView,
    entry: void 0
  });
  callback.current = onChange, React3.useEffect(
    () => {
      if (skip || !ref)
        return;
      let unobserve = observe(ref, (inView, entry2) => {
        setState({
          inView,
          entry: entry2
        }), callback.current && callback.current(inView, entry2), entry2.isIntersecting && triggerOnce && unobserve && (unobserve(), unobserve = void 0);
      }, {
        root,
        rootMargin,
        threshold,
        trackVisibility,
        delay
      }, fallbackInView);
      return () => {
        unobserve && unobserve();
      };
    },
    [
      Array.isArray(threshold) ? threshold.toString() : threshold,
      ref,
      root,
      rootMargin,
      triggerOnce,
      skip,
      trackVisibility,
      fallbackInView,
      delay
    ]
  );
  let entryTarget = (_state$entry = state.entry) == null ? void 0 : _state$entry.target;
  React3.useEffect(() => {
    !ref && entryTarget && !triggerOnce && !skip && setState({
      inView: !!initialInView,
      entry: void 0
    });
  }, [ref, entryTarget, triggerOnce, skip, initialInView]);
  let result = [setRef, state.inView, state.entry];
  return result.ref = result[0], result.inView = result[1], result.entry = result[2], result;
}

// node_modules/hero-slider/dist/modules/IntersectionObserver.js
var IntersectionObserverStateContext = import_react21.default.createContext(void 0);
function IntersectionObserverProvider({ children }) {
  let [ref, inView] = useInView({ threshold: 0 }), value = {
    elementObservedRef: ref,
    isInView: inView
  };
  return import_react21.default.createElement(IntersectionObserverStateContext.Provider, { value }, children);
}
function useIntersectionObserver() {
  let context = import_react21.default.useContext(IntersectionObserverStateContext);
  if (context === void 0)
    throw new Error("useIntersectionObserver must be used within a IntersectionObserverProvider");
  return context;
}

// node_modules/hero-slider/dist/modules/Autoplay.js
var logger = ConsoleLogger.new(), defaultProps7 = {
  autoplayDuration: 8e3,
  autoplayDebounce: 4e3
}, AutoplayStateContext = import_react22.default.createContext(void 0);
function autoplayReducer(state, action2) {
  switch (action2.type) {
    case "pause":
      return Object.assign(Object.assign({}, state), { isPausedByUser: !0 });
    case "resume":
      return Object.assign(Object.assign({}, state), { isPausedByUser: !1 });
    case "set-debounce-timeout":
      return Object.assign(Object.assign({}, state), { debounceTimeout: action2.payload });
    default:
      throw new Error(`Unhandled action: [${JSON.stringify(action2, null, 2)}]`);
  }
}
function AutoplayProvider({ children, autoplay }) {
  var _a, _b;
  let params = {
    autoplayDuration: (_a = typeof autoplay == "object" ? autoplay == null ? void 0 : autoplay.autoplayDuration : void 0) !== null && _a !== void 0 ? _a : defaultProps7.autoplayDuration,
    autoplayDebounce: (_b = typeof autoplay == "object" ? autoplay == null ? void 0 : autoplay.autoplayDebounce : void 0) !== null && _b !== void 0 ? _b : defaultProps7.autoplayDebounce
  }, [state, dispatch] = import_react22.default.useReducer(autoplayReducer, {
    isPausedByUser: !1,
    debounceTimeout: void 0
  }), { state: controller, changeSlide, getNextSlide, getSlidingCycleDuration } = useController(), slidingCycleDuration = getSlidingCycleDuration(), autoplayCycleDuration = Math.max(slidingCycleDuration, params.autoplayDuration);
  params.autoplayDuration < getSlidingCycleDuration() && logger.warn("[Autoplay] The `autoplayDuration` is lower than the sliding cycle duration (the result of `slidingDuration + slidingDelay`).", "The sliding cycle duration will be used instead for the autoplay intervals.");
  let autoplayInstance = IntervalTimer.new(() => {
    changeSlide(getNextSlide(controller.activeSlide));
  }, autoplayCycleDuration), { isInView } = useIntersectionObserver(), debounce = () => {
    autoplayInstance.state === IntervalState.IDLE || state.isPausedByUser || (autoplayInstance.pause(), state.debounceTimeout && clearTimeout(state.debounceTimeout), dispatch({
      type: "set-debounce-timeout",
      payload: setTimeout(autoplayInstance.resume, params.autoplayDebounce)
    }));
  }, pause = () => {
    logger.debug("[Autoplay] Paused by user."), autoplayInstance.pause(), dispatch({ type: "pause" });
  }, resume = () => {
    logger.debug("[Autoplay] Resumed by user."), autoplayInstance.resume(), dispatch({ type: "resume" });
  };
  import_react22.default.useEffect(() => (state.isPausedByUser && clearTimeout(state.debounceTimeout), () => {
  }), [state.isPausedByUser]), import_react22.default.useEffect(() => {
    if (autoplay)
      switch (!0) {
        case state.isPausedByUser:
          break;
        case (!isInView && autoplayInstance.state !== IntervalState.IDLE):
          autoplayInstance.stop(), logger.debug("[Autoplay] Stopped.");
          break;
        case (isInView && autoplayInstance.state === IntervalState.IDLE): {
          autoplayInstance.start(), logger.debug("[Autoplay] Started.");
          break;
        }
        case (isInView && autoplayInstance.state === IntervalState.PAUSED): {
          autoplayInstance.resume(), logger.debug("[Autoplay] Resumed.");
          break;
        }
      }
    else
      autoplayInstance.state !== IntervalState.IDLE && (autoplayInstance.stop(), logger.info("[Autoplay] Stopped."));
  }, [autoplay, isInView]), import_react22.default.useEffect(() => () => {
    clearTimeout(state.debounceTimeout), autoplayInstance.stop();
  }, []), import_react22.default.useEffect(() => (clearTimeout(state.debounceTimeout), () => {
  }), [controller.activeSlide]);
  let value = {
    state,
    autoplayState: autoplayInstance.state,
    debounce,
    pause,
    resume
  };
  return import_react22.default.createElement(AutoplayStateContext.Provider, { value }, children);
}
function useAutoplay() {
  let context = import_react22.default.useContext(AutoplayStateContext);
  if (context === void 0)
    throw new Error("useAutoplay must be used within a AutoplayProvider");
  return context;
}

// node_modules/hero-slider/dist/HeroSlider.js
var logger2 = ConsoleLogger.new();
function Orchestrator({ className, width = "100%", height = "100vh", style, children }) {
  logger2.info("[Orchestrator] rerender");
  let { shouldDisplayButtons } = useAccessability(), { sliderFadeInDuration, navbarFadeInDuration, navbarFadeInDelay } = useAnimations(), { state: layout } = useLayout(), { slidingDuration, slidingDelay, getSlidingCycleDuration } = useController(), settings = useSettings(), { debounce } = useAutoplay(), { onTouchStartHandler, onTouchMoveHandler, onTouchEndHandler } = useAccessability(), { elementObservedRef } = useIntersectionObserver(), CSSVariables = {
    "--sliding-duration": `${slidingDuration}ms`,
    "--sliding-delay": `${slidingDelay}ms`,
    "--slide-transition-delay": `${getSlidingCycleDuration()}ms`,
    "--slider-width": layout.width ? `${layout.width}px` : void 0,
    "--slider-height": layout.height ? `${layout.height}px` : void 0,
    "--slider-color": settings.sliderColor,
    "--slider-fade-in-duration": `${sliderFadeInDuration}ms`,
    "--nav-fade-in-duration": `${navbarFadeInDuration}ms`,
    "--nav-fade-in-delay": `${navbarFadeInDelay}ms`,
    "--nav-background-color": settings.navbarStyle ? settings.navbarStyle.color : void 0,
    "--nav-active-color": settings.navbarStyle ? settings.navbarStyle.activeColor : void 0,
    "--mask-duration": `${getSlidingCycleDuration()}ms`
  };
  return import_react23.default.createElement(
    "div",
    { className: composeCssClasses("hero-slider-root", className), ref: elementObservedRef },
    import_react23.default.createElement(
      "div",
      { ref: layout.slider, className: composeCssClasses("hero-slider-wrapper", HeroSliderModuleCss.Wrapper), onTouchStart: onTouchStartHandler, onTouchMove: onTouchMoveHandler, onTouchEnd: onTouchEndHandler, onMouseMoveCapture: debounce, style: Object.assign(Object.assign(Object.assign({}, CSSVariables), style), { width, height }) },
      children,
      shouldDisplayButtons && import_react23.default.createElement(Buttons, null)
    )
  );
}
function HeroSlider(props) {
  return import_react23.default.createElement(
    LayoutProvider,
    null,
    import_react23.default.createElement(
      ManagerProvider,
      { manager: props.manager },
      import_react23.default.createElement(
        SettingsProvider,
        { settings: props.settings },
        import_react23.default.createElement(
          ControllerProvider,
          { controller: props.controller },
          import_react23.default.createElement(
            AccessabilityProvider,
            { accessability: props.accessability },
            import_react23.default.createElement(
              AnimationsProvider,
              { animations: props.animations },
              import_react23.default.createElement(
                IntersectionObserverProvider,
                null,
                import_react23.default.createElement(
                  AutoplayProvider,
                  { autoplay: props.autoplay },
                  import_react23.default.createElement(Orchestrator, { className: props.className, width: props.width, height: props.height, style: props.style }, props.children)
                )
              )
            )
          )
        )
      )
    )
  );
}

// node_modules/hero-slider/dist/components/AutoplayButton/index.js
var import_react24 = __toESM(require("react"));

// node_modules/hero-slider/dist/components/AutoplayButton/index.module.css.js
var css_248z3 = `.index-module_Button__Lw9Oe {
  z-index: 4;
  position: absolute;
  color: inherit;
  /* Placeholders */
  width: 62px;
  height: 62px;
  /* Disabling default button CSS. */
  padding: 0;
  margin: 0;
  outline: none;
  background: transparent;
  border: 0;
}

.index-module_Button__Lw9Oe svg path {
  transition: d 200ms;
}
`, AutoplayButtonModuleCss = { Button: "index-module_Button__Lw9Oe" };
styleInject(css_248z3);

// node_modules/hero-slider/dist/components/AutoplayButton/index.js
var ButtonType;
(function(ButtonType2) {
  ButtonType2.PLAY = "play", ButtonType2.PAUSE = "pause";
})(ButtonType || (ButtonType = {}));
var AutoplaySvg = class {
  static getPath(buttonType) {
    return buttonType === ButtonType.PAUSE ? AutoplaySvg.pausePath : AutoplaySvg.playPath;
  }
};
AutoplaySvg.playPath = "M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z";
AutoplaySvg.pausePath = "M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z";
function AutoplayButton(props) {
  let { className, style, position = {
    bottom: "0",
    left: "0"
  } } = props, { state: { isPausedByUser }, autoplayState, resume, pause } = useAutoplay(), [buttonType, setButtonType] = import_react24.default.useState(autoplayState !== IntervalState.IDLE ? ButtonType.PAUSE : ButtonType.PLAY), onClickHandler = (event) => {
    event.stopPropagation(), isPausedByUser ? resume() : pause();
  };
  return import_react24.default.useEffect(() => {
    isPausedByUser && autoplayState === IntervalState.IDLE || isPausedByUser && autoplayState === IntervalState.PAUSED ? setButtonType(ButtonType.PLAY) : setButtonType(ButtonType.PAUSE);
  }, [isPausedByUser, autoplayState]), import_react24.default.createElement(
    "button",
    { className: composeCssClasses("hero-slider-autoplay-button", AutoplayButtonModuleCss.Button, className), onClick: onClickHandler, style: Object.assign(Object.assign({}, position), style) },
    import_react24.default.createElement(
      "svg",
      { fill: "currentColor", height: "100%", width: "100%", viewBox: "0 0 36 36" },
      import_react24.default.createElement("path", { d: AutoplaySvg.getPath(buttonType) })
    )
  );
}
AutoplayButton.displayName = "hero-slider/autoplay-button";

// node_modules/hero-slider/dist/components/ButtonsNav/index.js
var import_react26 = __toESM(require("react"));

// node_modules/hero-slider/dist/components/ButtonsNav/index.module.css.js
var css_248z4 = `.index-module_Wrapper__wU5EB {
  position: absolute;
  display: inline-flex;
  z-index: 4;
  margin: 0 auto;
  padding: 0;
  cursor: pointer;
  user-select: none;
  opacity: 0;
  animation: index-module_fade-in__YcH32 var(--nav-fade-in-duration, 500) ease-in var(--nav-fade-in-delay, 1000) forwards;
}

@keyframes index-module_fade-in__YcH32 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.index-module_Container__YnfKU {
  display: flex;
  position: relative;
  max-width: 100%;
  height: 54px;
  margin: 0;
  padding: 0;
  white-space: nowrap;
}

.index-module_Button__vb0cm,
.index-module_ExtraButton__wTZEw {
  display: inline-flex;
  align-items: center;
  position: relative;
  width: 240px;
  height: 48px;
  list-style: none;
  cursor: pointer;
  background-color: transparent;
  color: var(--nav-color, #FFF);
  flex-basis: 0;
  flex-grow: 1;
  transition: all 200ms ease-in-out;
  outline: 0;
  padding: 0;
  font-weight: 600;
}

.index-module_ExtraButton__wTZEw {
  align-items: unset;
}

/* Backgrounds set in :before to allow for opacity */
.index-module_Button__vb0cm:not(.index-module_Active__5slZ5)::before,
.index-module_ExtraButton__wTZEw:not(.index-module_Active__5slZ5)::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background-color: var(--nav-background-color, rgba(255, 255, 255, 0.8));
  z-index: -1;
  transition: all 200ms ease-in-out;
}

.index-module_Button__vb0cm:hover:not(.index-module_Active__5slZ5),
.index-module_ExtraButton__wTZEw:hover:not(.index-module_Active__5slZ5) {
  background-color: var(--nav-color, #FFF);
  color: var(--nav-active-color, rgb(59, 62, 69));
}

.index-module_ExtraButton__wTZEw {
  color: var(--nav-color, #FFF);
}

.index-module_Button__vb0cm:not(.index-module_Active__5slZ5):not(:first-child),
.index-module_ExtraButton__wTZEw {
  box-shadow: -1px 0px 0px 0px var(--nav-background-color, rgba(215, 225, 235, 0.8));
}

.index-module_Description__ZaqVb {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 0.5rem;
}

.index-module_Text__rKn0C {
  width: 95%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: center;
  text-transform: uppercase;
  color: inherit;
  letter-spacing: 0.1rem;
  font-size: 0.75rem;
  line-height: 1rem;
}

.index-module_Active__5slZ5 {
  height: 54px;
  cursor: default;
  color: var(--nav-color, #FFF);
  background-color: transparent;
}

/* Backgrounds set in :before to allow for opacity */
.index-module_Active__5slZ5:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.95;
  box-shadow: -1px 0px 0px 0px var(--nav-active-color, rgb(59, 62, 69));
  background-color: var(--nav-active-color, rgb(59, 62, 69));
  z-index: -1;
  transition: all 200ms ease-in-out;
}

.index-module_Active__5slZ5 + .index-module_Button__vb0cm,
.index-module_Active__5slZ5 + .index-module_ExtraButton__wTZEw {
  box-shadow: -1px 0px 0px 0px transparent !important;
}
`, ButtonsNavModuleCss = { Wrapper: "index-module_Wrapper__wU5EB", "fade-in": "index-module_fade-in__YcH32", Container: "index-module_Container__YnfKU", Button: "index-module_Button__vb0cm", ExtraButton: "index-module_ExtraButton__wTZEw", Active: "index-module_Active__5slZ5", Description: "index-module_Description__ZaqVb", Text: "index-module_Text__rKn0C" };
styleInject(css_248z4);

// node_modules/hero-slider/dist/components/Nav/index.js
var import_react25 = __toESM(require("react"));

// node_modules/hero-slider/dist/components/Nav/index.module.css.js
var css_248z5 = `.index-module_Wrapper__xqqKi {
  display: inline-flex;
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  z-index: 4;
  opacity: 0;
  animation: index-module_fade-in__Y7AOI var(--nav-fade-in-duration, 500) ease-in var(--nav-fade-in-delay, 1000) forwards;
}

@keyframes index-module_fade-in__Y7AOI {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.index-module_Button__Xnq8E {
  position: relative;
  color: currentColor;
  height: 50px;
  max-width: 60px;
  min-width: 50px;
  width: 15%;
  margin: 0 6px;
  border-bottom: 2px solid var(--nav-color, rgba(200, 215, 235, 0.6));
  cursor: pointer;
  transition: all 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.index-module_Active__l5OO4 {
  border-color: var(--nav-active-color, rgba(200, 215, 235, 1))
}

@media (max-width: 744px) {
  .index-module_Button__Xnq8E {
    display: block;
    cursor: pointer;
    color: currentColor;
    outline: none;
    height: 14px;
    width: 14px;
    min-width: 14px;
    max-width: 14px;
    margin: 0 9px;
    border: 0;
    font-size: 0;
    line-height: 0;
    background: var(--nav-color, rgba(200, 215, 235, 0.6));
    border-radius: 50%;
  }

  .index-module_Active__l5OO4 {
    background: var(--nav-active-color, rgba(200, 215, 235, 1));
  }
}
`, NavModuleCss = { Wrapper: "index-module_Wrapper__xqqKi", "fade-in": "index-module_fade-in__Y7AOI", Button: "index-module_Button__Xnq8E", Active: "index-module_Active__l5OO4" };
styleInject(css_248z5);

// node_modules/hero-slider/dist/components/Nav/index.js
function Nav({ color, activeColor, position = {
  bottom: "1.5rem",
  left: "50%",
  transform: "translateX(-50%)"
} }) {
  let { state: { slides, totalSlides } } = useManager(), { state: { activeSlide }, changeSlide } = useController();
  function renderButtons() {
    if (!totalSlides)
      return [];
    let onClickHandler = (slideNumber) => {
      slideNumber !== activeSlide && changeSlide(slideNumber);
    };
    return Array.from(slides.values()).map(({ number }) => import_react25.default.createElement("li", { key: number, className: composeCssClasses("hero-slider-nav-button", NavModuleCss.Button, { className: NavModuleCss.Active, useIf: activeSlide === number }), onClick: () => onClickHandler(number) }));
  }
  let CSSVariables = {
    "--nav-color": color,
    "--nav-active-color": activeColor
  };
  return import_react25.default.createElement("ul", { className: composeCssClasses("hero-slider-nav-wrapper", NavModuleCss.Wrapper), style: Object.assign(Object.assign({}, position), CSSVariables) }, renderButtons());
}
Nav.displayName = "hero-slider/nav";

// node_modules/hero-slider/dist/components/ButtonsNav/index.js
function ButtonsNav(props) {
  let { color, activeColor, backgroundColor, position = {
    bottom: "0",
    left: "50%",
    transform: "translateX(-50%)"
  }, justifyContent, alignItems, mobileThreshold: componentMobileThreshold, isNullAfterThreshold = !1, extraButton, isExtraButtonRight } = props, { state: { width }, mobileThreshold: mobileThreshold2 } = useLayout(), { state: { slides, totalSlides } } = useManager(), { state: { activeSlide }, changeSlide } = useController(), CSSVariables = {
    "--nav-color": color,
    "--nav-background-color": backgroundColor,
    "--nav-active-color": activeColor
  };
  if (Number(width) <= (componentMobileThreshold ?? mobileThreshold2))
    return isNullAfterThreshold ? null : import_react26.default.createElement(Nav, Object.assign({}, props));
  function renderButtons() {
    if (!totalSlides)
      return [];
    let onClickHandler = (slideNumber) => {
      slideNumber !== activeSlide && changeSlide(slideNumber);
    };
    return Array.from(slides.values()).map(({ number, label }) => {
      let description = label;
      return import_react26.default.createElement(
        "li",
        { key: number, className: composeCssClasses("hero-slider-buttons-nav-button", ButtonsNavModuleCss.Button, {
          className: ButtonsNavModuleCss.Active,
          useIf: activeSlide === number
        }), onClick: () => onClickHandler(number) },
        import_react26.default.createElement(
          "div",
          { className: composeCssClasses("hero-slider-buttons-nav-button-description", ButtonsNavModuleCss.Description) },
          import_react26.default.createElement("div", { className: composeCssClasses("hero-slider-buttons-nav-button-text", ButtonsNavModuleCss.Text) }, description)
        )
      );
    });
  }
  return import_react26.default.createElement(
    "div",
    { className: composeCssClasses("hero-slider-buttons-nav-wrapper", ButtonsNavModuleCss.Wrapper), style: Object.assign(Object.assign({}, position), CSSVariables) },
    import_react26.default.createElement(
      "ul",
      { className: composeCssClasses("hero-slider-buttons-nav-container", ButtonsNavModuleCss.Container), style: {
        justifyContent: justifyContent || "center",
        alignItems: alignItems || (position.top !== void 0 ? "flex-start" : "flex-end")
      } },
      renderButtons(),
      extraButton && import_react26.default.createElement("div", { className: composeCssClasses("hero-slider-buttons-nav-extra-button", ButtonsNavModuleCss.ExtraButton), style: {
        order: isExtraButtonRight ? 1 : 0
      } }, extraButton)
    )
  );
}
ButtonsNav.displayName = "hero-slider/buttons-nav";

// node_modules/hero-slider/dist/components/MenuNav/index.js
var import_react27 = __toESM(require("react"));

// node_modules/hero-slider/dist/components/MenuNav/index.module.css.js
var css_248z6 = `.index-module_Wrapper__-jUiF {
  position: absolute;
  display: flex;
  z-index: 4;
  width: 90%; /* May be placeholder. */
  margin: 0 auto;
  padding: 0;
  cursor: pointer;
  user-select: none;
  opacity: 0;
  animation: index-module_fade-in__HoAls var(--nav-fade-in-duration, 500) ease-in var(--nav-fade-in-delay, 1000) forwards;
}

@keyframes index-module_fade-in__HoAls {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.index-module_Container__3Qf2J {
  display: flex;
  flex-grow: 1;
  position: relative;
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--nav-color, rgba(215, 225, 235, 0.6));
}

.index-module_Extra__1b50U {
  display: flex;  
  min-width: 50px;
  margin: 0;
  padding: 0;
  color: var(--nav-active-color, #FFF);
  border-top: 1px solid var(--nav-color, rgba(215, 225, 235, 0.6));
  /* border-left: 1px solid var(--nav-color, rgba(215, 225, 235, 0.6));s */
}

.index-module_Bar__TdlPr {
  position: absolute;
  top: 0px;
  height: 4px;
  background-color: var(--nav-active-color, #FFF);
  opacity: 0.75;
  transition: transform 400ms ease;
}

.index-module_Button__F3ERg {
  list-style: none;
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  color: var(--nav-active-color, #FFF);
  min-height: 15%;
  height: auto;
  margin: 1rem 0;
  padding: 0.5rem 0.75rem;
}

.index-module_ExtraButton__j1mUn {
  flex: 1;
  color: var(--nav-active-color, #FFF);
  min-height: 15%;
  height: auto;
  margin: 1rem 0;
  padding: 0;
}

.index-module_Button__F3ERg:not(:first-child):not(:last-child) {
  border-left: 1px solid var(--nav-color, rgba(215, 225, 235, 0.6));
}

.index-module_Description__gzcNp {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 0.5rem;
}

.index-module_Number__jaqYr {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-width: 36px;
  width: 36px;
  height: 36px;
  line-height: 36px;
  backface-visibility: hidden;
  color: var(--nav-active-color, #FFF);
  font-size: 12px;
}

.index-module_Number__jaqYr .index-module_Square__wq3HS {
  background-color: transparent;
  border-radius: 5px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.18);
  display: block;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: rotate(45deg) translate(-50%, -50%);
  transform-origin: 0px 0px;
  width: 24px;
  height: 24px;
  z-index: -1;
  border: 1px solid #fff;
  opacity: 0.5;
}

.index-module_Text__d-WKC {
  width: 80%;
  padding-left: 1.4rem;
  font-weight: 700;
  font-size: 12px;
}
`, MenuNavModuleCss = { Wrapper: "index-module_Wrapper__-jUiF", "fade-in": "index-module_fade-in__HoAls", Container: "index-module_Container__3Qf2J", Extra: "index-module_Extra__1b50U", Bar: "index-module_Bar__TdlPr", Button: "index-module_Button__F3ERg", ExtraButton: "index-module_ExtraButton__j1mUn", Description: "index-module_Description__gzcNp", Number: "index-module_Number__jaqYr", Square: "index-module_Square__wq3HS", Text: "index-module_Text__d-WKC" };
styleInject(css_248z6);

// node_modules/hero-slider/dist/components/MenuNav/index.js
function MenuNav(props) {
  let { color, activeColor, position = {
    bottom: "0",
    left: "50%",
    transform: "translateX(-50%)"
  }, justifyContent = "center", mobileThreshold: componentMobileThreshold, isNullAfterThreshold, extraButton, isExtraButtonRight = !0 } = props, { state: { width }, mobileThreshold: mobileThreshold2 } = useLayout(), { state: { slides, totalSlides } } = useManager(), { state: { activeSlide }, changeSlide } = useController();
  if (Number(width) <= (componentMobileThreshold ?? mobileThreshold2))
    return isNullAfterThreshold ? null : import_react27.default.createElement(Nav, Object.assign({}, props));
  function renderButtons() {
    if (!totalSlides)
      return [];
    let onClickHandler = (slideNumber) => {
      slideNumber !== activeSlide && changeSlide(slideNumber);
    };
    return Array.from(slides.values()).map(({ label, number }, index) => {
      let description = label;
      return import_react27.default.createElement(
        "li",
        { key: index, className: composeCssClasses("hero-slider-menu-nav-button", MenuNavModuleCss.Button, {
          className: MenuNavModuleCss.Active,
          useIf: activeSlide === number
        }), onClick: () => onClickHandler(number) },
        import_react27.default.createElement(
          "div",
          { className: composeCssClasses("hero-slider-menu-nav-button-description", MenuNavModuleCss.Description) },
          import_react27.default.createElement(
            "div",
            { className: composeCssClasses("hero-slider-menu-nav-button-number", MenuNavModuleCss.Number) },
            number,
            import_react27.default.createElement("span", { className: composeCssClasses("hero-slider-menu-nav-button-square", MenuNavModuleCss.Square) })
          ),
          import_react27.default.createElement("div", { className: composeCssClasses("hero-slider-menu-nav-button-text", MenuNavModuleCss.Text) }, description)
        )
      );
    });
  }
  let CSSVariables = {
    "--nav-color": color,
    "--nav-active-color": activeColor
  };
  return import_react27.default.createElement(
    "div",
    { className: composeCssClasses("hero-slider-menu-nav-wrapper", MenuNavModuleCss.Wrapper), style: Object.assign(Object.assign(Object.assign({}, position), CSSVariables), { justifyContent }) },
    extraButton && import_react27.default.createElement(
      "div",
      { className: composeCssClasses("hero-slider-menu-nav-extra", MenuNavModuleCss.Extra), style: {
        order: isExtraButtonRight ? 1 : 0
      } },
      import_react27.default.createElement("span", { className: composeCssClasses("hero-slider-menu-nav-extra-button", MenuNavModuleCss.ExtraButton), style: {
        borderLeft: isExtraButtonRight ? "1px solid var(--nav-color, rgba(215, 225, 235, 0.6))" : void 0,
        borderRight: isExtraButtonRight ? void 0 : "1px solid var(--nav-color, rgba(215, 225, 235, 0.6))"
      } }, extraButton)
    ),
    import_react27.default.createElement(
      "ul",
      { className: composeCssClasses("hero-slider-menu-nav-container", MenuNavModuleCss.Container) },
      renderButtons(),
      import_react27.default.createElement("span", { className: composeCssClasses("hero-slider-menu-nav-bar", MenuNavModuleCss.Bar), style: {
        width: `${100 / totalSlides}%`,
        transform: `translate3d(${activeSlide - 1}00%, 0, 0)`
      } })
    )
  );
}
MenuNav.displayName = "hero-slider/menu-nav";

// node_modules/hero-slider/dist/components/Overlay/index.js
var import_react28 = __toESM(require("react"));

// node_modules/hero-slider/dist/components/Overlay/index.module.css.js
var css_248z7 = `.index-module_Container__uwyVd {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  pointer-events: none;
}

.index-module_Container__uwyVd * {
  pointer-events: auto;
}
`, OverlayModuleCss = { Container: "index-module_Container__uwyVd" };
styleInject(css_248z7);

// node_modules/hero-slider/dist/components/Overlay/index.js
function Overlay(props) {
  return import_react28.default.createElement("div", { className: composeCssClasses("hero-slider-overlay", OverlayModuleCss.Container) }, props.children);
}
Overlay.displayName = "hero-slider/overlay";

// node_modules/hero-slider/dist/components/SideNav/index.js
var import_react29 = __toESM(require("react"));

// node_modules/hero-slider/dist/components/SideNav/index.module.css.js
var css_248z8 = `.index-module_Wrapper__jT-Cn {
  width: 60px;
  position: absolute;
  margin: 0;
  padding: 0;
  list-style: none;
  z-index: 4;
  opacity: 0;
  animation: index-module_fade-in__5i5FF var(--nav-fade-in-duration, 500) ease-in var(--nav-fade-in-delay, 1000) forwards;
}

@keyframes index-module_fade-in__5i5FF {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.index-module_Button__rDMSg {
  display: flex;
  align-items: center;
  position: relative;
  margin: 0 auto;
  padding: 0.5rem 0;
  text-align: right;
  color: var(--nav-color, #C8D7EB);
  cursor: pointer;
  transition: all 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.index-module_Active__uEbtj {
  color: var(--nav-active-color, #FFF);
}

.index-module_Line__btiyM {
  width: 20px;
  height: 1px;
  background-color: currentColor;
  transition: all ease 200ms;
}

.index-module_Number__YPUv6 {
  width: 10px;
  font-size: 19px;
  margin: 0;
  transform: scaleX(0);
  transition: all ease 200ms;
}

.index-module_Active__uEbtj .index-module_Line__btiyM {
  width: 50px;
}

.index-module_Active__uEbtj .index-module_Number__YPUv6 {
  margin: 0 0.5ch;
  transform: scaleX(1);
}
`, SideNavModuleCss = { Wrapper: "index-module_Wrapper__jT-Cn", "fade-in": "index-module_fade-in__5i5FF", Button: "index-module_Button__rDMSg", Active: "index-module_Active__uEbtj", Line: "index-module_Line__btiyM", Number: "index-module_Number__YPUv6" };
styleInject(css_248z8);

// node_modules/hero-slider/dist/components/SideNav/index.js
function SideNav({ color, activeColor, left, right, isPositionedRight = !0, position = {
  bottom: void 0,
  top: "50%",
  left: isPositionedRight ? void 0 : left || "1rem",
  right: isPositionedRight ? right || "1rem" : void 0,
  transform: "translateY(-50%)"
} }) {
  let { state: { slides, totalSlides } } = useManager(), { state: { activeSlide }, changeSlide } = useController();
  function renderButtons() {
    if (!totalSlides)
      return [];
    let onClickHandler = (slideNumber) => {
      slideNumber !== activeSlide && changeSlide(slideNumber);
    };
    return Array.from(slides.values()).map(({ number }) => import_react29.default.createElement(
      "li",
      { key: number, className: composeCssClasses("hero-slider-side-nav-button", SideNavModuleCss.Button, {
        className: SideNavModuleCss.Active,
        useIf: activeSlide === number
      }), onClick: () => onClickHandler(number), style: {
        justifyContent: isPositionedRight ? "flex-end" : "flex-start"
      } },
      import_react29.default.createElement("span", { className: composeCssClasses("hero-slider-side-nav-button-line", SideNavModuleCss.Line) }),
      import_react29.default.createElement("span", { className: composeCssClasses("hero-slider-side-nav-button-number", SideNavModuleCss.Number) }, number.toLocaleString())
    ));
  }
  let CSSVariables = {
    "--nav-color": color,
    "--nav-active-color": activeColor
  };
  return import_react29.default.createElement("ul", { className: composeCssClasses("hero-slider-side-nav-wrapper", SideNavModuleCss.Wrapper), style: Object.assign(Object.assign({}, position), CSSVariables) }, renderButtons());
}
SideNav.displayName = "hero-slider/nav";

// node_modules/hero-slider/dist/components/Slide/index.js
var import_react32 = __toESM(require("react"));

// node_modules/hero-slider/dist/components/Slide/index.module.css.js
var css_248z9 = `.index-module_Slide__vy4u2,
.index-module_Container__zFpuF  {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translate3d(0, 0, 0);
  overflow: hidden;
}

.index-module_Wrapper__tE11B {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.index-module_Active__5-5Mj {
  z-index: 2; /* NOTE: It is imperative for z-index to be here, do not remove. */
  transform: translate3d(0, 0, 0);
  transition-delay: var(--sliding-delay, 0ms);
}

.index-module_Slide__vy4u2 {
  /* property name | duration | timing function | delay */
  transition: transform 0ms ease-in-out var(--sliding-delay, 0ms);
  will-change: transform;
}

.index-module_Slide__vy4u2:not(.index-module_Active__5-5Mj) {
  z-index: 1;
  transform: translate3d(100%, 0, 0);
  transition-delay: var(--slide-transition-delay, 600ms);
  user-select: none;
}

.index-module_Container__zFpuF {
  backface-visibility: hidden;
  /* property name | duration | timing function | delay */
  transition: all 300ms ease-in-out var(--sliding-delay, 200ms);
  will-change: transform;
}

.index-module_Container__zFpuF:not(.index-module_Active__5-5Mj) {
  z-index: 1;
  opacity: 0;
  /* property name | duration | timing function | delay */
  transition: all 200ms ease-in-out var(--sliding-delay, 200ms);
}
`, SlideModuleCss = { Slide: "index-module_Slide__vy4u2", Container: "index-module_Container__zFpuF", Wrapper: "index-module_Wrapper__tE11B", Active: "index-module_Active__5-5Mj" };
styleInject(css_248z9);

// node_modules/hero-slider/dist/node_modules/.pnpm/@rollup_plugin-typescript@8.5.0_jm3lfwhp2n3nxb4wwf6zz565he/node_modules/tslib/tslib.es6.js
function __rest(s, e) {
  var t = {};
  for (var p in s)
    Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0 && (t[p] = s[p]);
  if (s != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)
      e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]) && (t[p[i]] = s[p[i]]);
  return t;
}

// node_modules/hero-slider/dist/components/Slide/Background/index.js
var import_react30 = __toESM(require("react"));

// node_modules/hero-slider/dist/components/Slide/Background/index.module.css.js
var css_248z10 = `.index-module_Background__hqV3F {
  position: absolute;
  width: 100%;
  height: 100%;
}

.index-module_Image__-UrHA {
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
}

.index-module_Loading__jqajH,
.index-module_Loaded__6nMLk {
  position: absolute;
  top: 0;
  left: 0;
}

.index-module_Loading__jqajH {
  visibility: hidden;
}

/* Animations when loaded */

.index-module_FadeIn__iDwzu {
  opacity: 0;
  animation: index-module_fade-in__M3j53 var(--background-animation-duration, 300ms) ease-in-out var(--background-animation-delay, 0ms) forwards;
}

.index-module_ZoomOut__V4Peh {
  transform: scale(1.5);
  animation: 
    index-module_fade-in__M3j53 300ms ease-in-out 0ms forwards, 
    index-module_zoom-out__QDhiM var(--background-animation-duration, 30000ms) ease-in-out var(--background-animation-delay, 100ms) forwards;
}

@keyframes index-module_fade-in__M3j53 {
  0% {
    opacity: 0
  }
  100% {
    opacity: 1;
  }
}

@keyframes index-module_zoom-out__QDhiM {
  0% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
`, BackgroundModuleCss = { Background: "index-module_Background__hqV3F", Image: "index-module_Image__-UrHA", Loading: "index-module_Loading__jqajH", Loaded: "index-module_Loaded__6nMLk", FadeIn: "index-module_FadeIn__iDwzu", "fade-in": "index-module_fade-in__M3j53", ZoomOut: "index-module_ZoomOut__V4Peh", "zoom-out": "index-module_zoom-out__QDhiM" };
styleInject(css_248z10);

// node_modules/hero-slider/dist/components/Slide/Background/index.js
var BackgroundAnimation;
(function(BackgroundAnimation2) {
  BackgroundAnimation2.FADE = "fade", BackgroundAnimation2.ZOOM = "zoom";
})(BackgroundAnimation || (BackgroundAnimation = {}));
function Background(props) {
  let {
    backgroundAnimation = BackgroundAnimation.FADE,
    backgroundImageClassName,
    backgroundImageBlendMode,
    backgroundImageSizes,
    backgroundImageSrcSet,
    backgroundImageSrc,
    backgroundImageAlt,
    backgroundImageStyle,
    maskBackgroundBlendMode: _,
    shouldLazyLoad = !0,
    onLoad
  } = props, background = __rest(props, ["backgroundAnimation", "backgroundImageClassName", "backgroundImageBlendMode", "backgroundImageSizes", "backgroundImageSrcSet", "backgroundImageSrc", "backgroundImageAlt", "backgroundImageStyle", "maskBackgroundBlendMode", "shouldLazyLoad", "onLoad"]), [isLoaded, setIsLoaded] = import_react30.default.useState(!1), onLoadHandler = (event) => {
    onLoad && onLoad(event), setIsLoaded(!0);
  }, imageBackgroundClassNames = [];
  if (isLoaded)
    switch (imageBackgroundClassNames.push(BackgroundModuleCss.Loaded), backgroundAnimation) {
      case BackgroundAnimation.ZOOM:
        imageBackgroundClassNames.push(BackgroundModuleCss.ZoomOut);
        break;
      case BackgroundAnimation.FADE:
        imageBackgroundClassNames.push(BackgroundModuleCss.FadeIn);
        break;
    }
  else
    imageBackgroundClassNames.push(BackgroundModuleCss.Loading);
  return import_react30.default.createElement(
    "div",
    { className: composeCssClasses("hero-slider-slide-background", backgroundImageClassName, BackgroundModuleCss.Background), style: background },
    import_react30.default.createElement("img", { className: composeCssClasses("hero-slider-slide-background-image", backgroundImageClassName, BackgroundModuleCss.Image, ...imageBackgroundClassNames), sizes: backgroundImageSizes, srcSet: backgroundImageSrcSet, src: backgroundImageSrc, alt: backgroundImageAlt, style: Object.assign({ mixBlendMode: backgroundImageBlendMode }, backgroundImageStyle), onLoad: onLoadHandler, loading: shouldLazyLoad ? "lazy" : "eager" })
  );
}

// node_modules/hero-slider/dist/components/Slide/Mask/index.js
var import_react31 = __toESM(require("react"));

// node_modules/hero-slider/dist/components/Slide/Mask/index.module.css.js
var css_248z11 = `.index-module_Mask__i5n4j {
  overflow: hidden;
  position: absolute;
  left: 25%;
  top: 50%;
  width: calc(var(--slider-widht, 100vw) * 0.66);
  height: calc(var(--slider-height, 100vh) * 0.66);
  max-width: 33%;
  max-height: 50%;
  -webkit-clip-path: polygon(0% 0%, 0% 100%, 16% 100%, 15% 15%, 85% 15%, 85% 85%, 15% 85%, 16% 100%, 100% 100%, 100% 0%);
  clip-path: polygon(0% 0%, 0% 100%, 16% 100%, 15% 15%, 85% 15%, 85% 85%, 15% 85%, 16% 100%, 100% 100%, 100% 0%);
  transform: translate3d(-33.33%, -50%, 0);
  transition: all calc(var(--mask-duration, 200ms) * 1.5) ease 0s;
  will-change: transform;
}

.index-module_Mask__i5n4j:not(.index-module_Active__1mWg7) {
  opacity: 0;
  z-index: 1;
  transform: translate3d(33.33%, -50%, 0);
  /* property name | duration | timing function | delay */
  transition: all var(--mask-duration, 200ms) ease 0s;
}

.index-module_Inner__FmWan {
  z-index: -1;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 200%;
  height: 200%;
  transform: translate3d(-50%, -50%, 0);
  background-size: cover;
  background-position: center center;
  -webkit-transform-origin: 50% 16.5vh;
  transform-origin: 50% 16.5vh;
  transition: all calc(var(--mask-duration, 200ms) * 1.66) ease 0s;
  will-change: transform;
}

.index-module_Inner__FmWan.index-module_Sliding__vU2M1 {
  transition: all var(--mask-duration, 200ms) ease 0s;
  transform: translate3d(-85%, -50%, 0);
}

@media (max-width: 1024px) {
  .index-module_Mask__i5n4j {
    max-width: 50% !important;
  }
  .index-module_Inner__FmWan {
    width: calc(var(--slider-width, 100vw) * 0.66);
    height: calc(var(--slider-height, 100vh) * 0.66);
  }
}

/* Mask LazyLoad */

.index-module_Loader__w-3j4 {
  opacity: 0;
  z-index: -1;
}

.index-module_Loading__53rJo {
  opacity: 0;
}

.index-module_Loaded__vpiHK {
  opacity: 0;
  animation-name: index-module_slide-in__wP0IR;
  animation-timing-function: cubic-bezier(0.6, -0.28, 0.735, 0.045);
  animation-fill-mode: forwards;
  animation-duration: var(--background-fade-in-duration, 1500ms);
  animation-delay: var(--background-fade-in-delay, 100ms);
}

@keyframes index-module_slide-in__wP0IR {
  0% {
    opacity: 0;
  }
  10% {
    -webkit-clip-path: inset(50% 50% 50% 50%);
    clip-path: inset(50% 50% 50% 50%);
  }
  100% {
    opacity: 1;
    -webkit-clip-path: inset(0 0 0 0);
    clip-path: inset(0 0 0 0);
  }
}
`, MaskModuleCss = { Mask: "index-module_Mask__i5n4j", Active: "index-module_Active__1mWg7", Inner: "index-module_Inner__FmWan", Sliding: "index-module_Sliding__vU2M1", Loader: "index-module_Loader__w-3j4", Loading: "index-module_Loading__53rJo", Loaded: "index-module_Loaded__vpiHK", "slide-in": "index-module_slide-in__wP0IR" };
styleInject(css_248z11);

// node_modules/hero-slider/dist/components/Slide/Mask/index.js
function Mask({ background, isActive }) {
  let { state: { isSliding } } = useController(), [className, setClassName] = import_react31.default.useState(MaskModuleCss.Loading), onLoadHandler = () => {
    setClassName(MaskModuleCss.Loaded);
  }, style = {
    backgroundColor: background == null ? void 0 : background.backgroundColor,
    backgroundBlendMode: background == null ? void 0 : background.maskBackgroundBlendMode,
    backgroundImage: `url('${background == null ? void 0 : background.backgroundImageSrc}')`
  }, isLoaded = className === MaskModuleCss.Loaded;
  return import_react31.default.createElement(
    "div",
    { className: composeCssClasses("hero-slider-slide-mask", MaskModuleCss.Mask, { className: MaskModuleCss.Active, useIf: isActive && !isSliding }, { className: MaskModuleCss.Inactive, useIf: !(isActive && !isSliding) }) },
    import_react31.default.createElement("img", { alt: (background == null ? void 0 : background.backgroundImageAlt) || "", className: MaskModuleCss.Loader, onLoad: onLoadHandler, src: background == null ? void 0 : background.backgroundImageSrc, loading: background != null && background.shouldLazyLoad ? "lazy" : "eager" }),
    isLoaded && import_react31.default.createElement("div", { className: composeCssClasses("hero-slider-slide-mask-inner", className, MaskModuleCss.Inner, { className: MaskModuleCss.Sliding, useIf: isSliding }), style })
  );
}

// node_modules/hero-slider/dist/components/Slide/index.js
var logger3 = ConsoleLogger.new();
function Slide(props) {
  let { className, shouldRenderMask = !1, style, background, onBackgroundLoad, children, label } = props, { getSlide, registerSlide, removeSlide } = useManager(), { state: { activeSlide, isSliding, prevActiveSlide, slidingDirection } } = useController(), { getSlidingAnimationCssClass } = useAnimations(), slideRef = import_react32.default.useRef(null), slide = getSlide(slideRef);
  logger3.info("[Slide] rerender", "slide.number: ", slide == null ? void 0 : slide.number);
  let [classNames, setClassNames] = import_react32.default.useState(composeCssClasses("hero-slider-slide", SlideModuleCss.Slide, className)), isActive = activeSlide === (slide == null ? void 0 : slide.number);
  if (import_react32.default.useEffect(() => {
    slide && setClassNames(composeCssClasses("hero-slider-slide", SlideModuleCss.Slide, { className: SlideModuleCss.Active, useIf: isActive }, { className: SlideModuleCss.Sliding, useIf: isActive && !isSliding }, {
      className: getSlidingAnimationCssClass(slide.number, prevActiveSlide, slidingDirection),
      useIf: isActive && isSliding
    }));
  }, [isActive, isSliding]), import_react32.default.useEffect(() => (slideRef && registerSlide(slideRef, label), () => {
    slideRef && removeSlide(slideRef);
  }), []), !slide)
    return null;
  let CSSVariables = {
    "--background-animation-duration": background != null && background.backgroundAnimationDuration ? `${background.backgroundAnimationDuration}ms` : null,
    "--background-animation-delay": background != null && background.backgroundAnimationDelay ? `${background.backgroundAnimationDelay}ms` : null
  };
  return import_react32.default.createElement(
    "div",
    { ref: slideRef, className: classNames, style: Object.assign(Object.assign({}, style), CSSVariables) },
    import_react32.default.createElement(Background, Object.assign({}, background, { onLoad: onBackgroundLoad })),
    import_react32.default.createElement(
      "div",
      { className: composeCssClasses("hero-slider-slide-wrapper", SlideModuleCss.Wrapper) },
      shouldRenderMask ? import_react32.default.createElement(Mask, { background, isActive }) : null,
      import_react32.default.createElement("div", { className: composeCssClasses("hero-slider-slide-container", SlideModuleCss.Container, { className: SlideModuleCss.Active, useIf: isActive && !isSliding }) }, children)
    )
  );
}
Slide.displayName = "hero-slider/slide";

// app/components/UI/Wrapper/Wrapper.tsx
var import_styled2 = __toESM(require("@emotion/styled")), import_prop_types = __toESM(require("prop-types")), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), WrapperDiv = import_styled2.default.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexFlow: "column",
  width: "100%",
  height: "100%",
  margin: 0,
  padding: 0,
  pointerEvents: "none"
}), wrapper = ({ children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperDiv, {
  children
}, void 0, !1, {
  fileName: "app/components/UI/Wrapper/Wrapper.tsx",
  lineNumber: 20,
  columnNumber: 5
}, this);
wrapper.propTypes = {
  children: import_prop_types.default.oneOfType([
    import_prop_types.default.any,
    import_prop_types.default.object,
    import_prop_types.default.element
  ])
};
var Wrapper_default = wrapper;

// app/components/ZeroSlider/ZeroSlider.tsx
var import_react33 = require("@chakra-ui/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), hallstatt = "https://images.unsplash.com/photo-1667470928088-57bfc3f28cf8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1452&q=80", poolTable = "https://images.unsplash.com/photo-1661242686756-de9bdeb69ad8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80", windowView = "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80";
var app = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeroSlider, {
  height: "100vh",
  autoplay: !0,
  controller: {
    initialSlide: 1,
    slidingDuration: 500,
    slidingDelay: 100,
    onSliding: (nextSlide) => console.debug("onSliding(nextSlide): ", nextSlide),
    onBeforeSliding: (previousSlide, nextSlide) => console.debug(
      "onBeforeSliding(previousSlide, nextSlide): ",
      previousSlide,
      nextSlide
    ),
    onAfterSliding: (nextSlide) => console.debug("onAfterSliding(nextSlide): ", nextSlide)
  },
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Overlay, {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react33.Center, {
        h: "100%",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react33.Stack, {
          alignItems: "center",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Wrapper_default, {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react33.Heading, {
                  fontSize: "9xl",
                  color: "hostelloRed.700",
                  children: "Hostello"
                }, void 0, !1, {
                  fileName: "app/components/ZeroSlider/ZeroSlider.tsx",
                  lineNumber: 47,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react33.Text, {
                  fontSize: "4xl",
                  color: "hostelloRed.600",
                  children: "Hostel finding made easy"
                }, void 0, !1, {
                  fileName: "app/components/ZeroSlider/ZeroSlider.tsx",
                  lineNumber: 48,
                  columnNumber: 21
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/components/ZeroSlider/ZeroSlider.tsx",
              lineNumber: 46,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react33.Button, {
              backgroundColor: "hostelloRed.500",
              maxWidth: "-webkit-fit-content",
              children: "Explore Now"
            }, void 0, !1, {
              fileName: "app/components/ZeroSlider/ZeroSlider.tsx",
              lineNumber: 52,
              columnNumber: 17
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/ZeroSlider/ZeroSlider.tsx",
          lineNumber: 45,
          columnNumber: 13
        }, this)
      }, void 0, !1, {
        fileName: "app/components/ZeroSlider/ZeroSlider.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/components/ZeroSlider/ZeroSlider.tsx",
      lineNumber: 43,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Slide, {
      label: "Giau Pass - Italy",
      background: {
        backgroundImageSrc: hallstatt,
        backgroundAnimation: "zoom"
      }
    }, void 0, !1, {
      fileName: "app/components/ZeroSlider/ZeroSlider.tsx",
      lineNumber: 59,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Slide, {
      label: "Bogliasco - Italy",
      background: {
        backgroundImageSrc: poolTable,
        backgroundAnimation: "zoom"
      }
    }, void 0, !1, {
      fileName: "app/components/ZeroSlider/ZeroSlider.tsx",
      lineNumber: 67,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Slide, {
      label: "County Clare - Ireland",
      background: {
        backgroundImageSrc: windowView
      }
    }, void 0, !1, {
      fileName: "app/components/ZeroSlider/ZeroSlider.tsx",
      lineNumber: 75,
      columnNumber: 5
    }, this)
  ]
}, void 0, !0, {
  fileName: "app/components/ZeroSlider/ZeroSlider.tsx",
  lineNumber: 24,
  columnNumber: 5
}, this), ZeroSlider_default = app;

// app/components/HostelsList/HostelsList.tsx
var import_react34 = require("@chakra-ui/react"), import_icons = require("@chakra-ui/icons"), import_react35 = require("react");

// app/components/HostelsList/hostels.json
var hostels_default = [
  {
    city: "Helsinki",
    country: "Finland",
    superHost: !1,
    title: "Stylist apartment in center of the city",
    rating: 4.4,
    maxGuests: 3,
    type: "Entire apartment",
    beds: 2,
    photo: "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80"
  },
  {
    city: "Turku",
    country: "Finland",
    superHost: !1,
    title: "Nice apartment in center of Helsinki",
    rating: 4.2,
    maxGuests: 5,
    type: "Entire apartment",
    beds: 3,
    photo: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
  },
  {
    city: "Helsinki",
    country: "Finland",
    superHost: !0,
    title: "Arty interior in 1900 wooden house",
    rating: 4.5,
    maxGuests: 10,
    type: "Entire house",
    beds: 6,
    photo: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
  },
  {
    city: "Helsinki",
    country: "Finland",
    superHost: !1,
    title: "Apartment next to market spuare",
    rating: 4.48,
    maxGuests: 3,
    type: "Entire apartment",
    beds: null,
    photo: "https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
  },
  {
    city: "Turku",
    country: "Finland",
    superHost: !0,
    title: "Villa Aurora guest-house",
    rating: 4.75,
    maxGuests: 9,
    type: "Entire house",
    beds: null,
    photo: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2249&q=80"
  },
  {
    city: "Vaasa",
    country: "Finland",
    superHost: !0,
    title: "A cosy family house",
    rating: 4.95,
    maxGuests: 6,
    type: "Entire house",
    beds: null,
    photo: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
  },
  {
    city: "Vaasa",
    country: "Finland",
    superHost: !1,
    title: "Lovely Studio near Railway Station",
    rating: 4.68,
    maxGuests: 2,
    type: "Private room",
    beds: null,
    photo: "https://images.unsplash.com/photo-1505693314120-0d443867891c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2591&q=80"
  },
  {
    city: "Oulu",
    country: "Finland",
    superHost: !1,
    title: "Peaceful little home in city center",
    rating: 4.12,
    maxGuests: 6,
    type: "Entire house",
    beds: 3,
    photo: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
  },
  {
    city: "Oulu",
    country: "Finland",
    superHost: !1,
    title: "Beautiful new studio apartment nearby the center",
    rating: 4.49,
    maxGuests: 2,
    type: "Entire apartment",
    beds: 1,
    photo: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2255&q=80"
  },
  {
    city: "Oulu",
    country: "Finland",
    superHost: !0,
    title: "Cozy woodhouse flat with wooden sauna",
    rating: 4.38,
    maxGuests: 4,
    type: "Entire house",
    beds: null,
    photo: "https://images.unsplash.com/photo-1522156373667-4c7234bbd804?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=930&q=80"
  },
  {
    city: "Vaasa",
    country: "Finland",
    superHost: !1,
    title: "Brand new studio apartment near the harbour",
    rating: 4.89,
    maxGuests: 6,
    type: "Entire apartment",
    beds: 3,
    photo: "https://images.unsplash.com/photo-1494203484021-3c454daf695d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
  },
  {
    city: "Helsinki",
    country: "Finland",
    superHost: !1,
    title: "Beautiful and comfortable old wooden house",
    rating: 4.63,
    maxGuests: 10,
    type: "Entire house",
    beds: null,
    photo: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
  },
  {
    city: "Turku",
    country: "Finland",
    superHost: !1,
    title: "Turku Nordic Home near city center",
    rating: 4.24,
    maxGuests: 5,
    type: "Entire apartment",
    beds: 3,
    photo: "https://images.unsplash.com/photo-1519643381401-22c77e60520e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE3MzYxfQ&auto=format&fit=crop&w=2253&q=80"
  },
  {
    city: "Turku",
    country: "Finland",
    superHost: !0,
    title: "Nice 2 room apartment close to everything",
    rating: 4.34,
    maxGuests: 6,
    type: "Entire apartment",
    beds: 3,
    photo: "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1275&q=80"
  }
];

// app/components/HostelsList/HostelsList.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), HostelsList = () => {
  let [location, setLocation] = (0, import_react35.useState)(null), [guests, setGuests] = (0, import_react35.useState)(0), filteredStays = hostels_default.filter((stay) => (location === null || stay.city + ", " + stay.country === location) && stay.maxGuests >= guests), staysList = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react34.Stack, {
    width: "100%",
    paddingX: "60px",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react34.Grid, {
      templateColumns: "repeat(12, 1fr)",
      gap: 8,
      paddingY: 2,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react34.GridItem, {
          colSpan: 12,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react34.Box, {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react34.Text, {
                variant: "h5",
                as: "h2",
                sx: { fontWeight: "bold" },
                children: "All stays"
              }, void 0, !1, {
                fileName: "app/components/HostelsList/HostelsList.tsx",
                lineNumber: 16,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react34.Text, {
                variant: "body2",
                as: "span",
                children: filteredStays.length + " stay" + (filteredStays.length !== 1 ? "s" : "")
              }, void 0, !1, {
                fileName: "app/components/HostelsList/HostelsList.tsx",
                lineNumber: 20,
                columnNumber: 17
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/HostelsList/HostelsList.tsx",
            lineNumber: 15,
            columnNumber: 15
          }, this)
        }, void 0, !1, {
          fileName: "app/components/HostelsList/HostelsList.tsx",
          lineNumber: 14,
          columnNumber: 13
        }, this),
        filteredStays.map((stay) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react34.GridItem, {
          colSpan: [12, 6, 4],
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react34.Card, {
            sx: { border: 0, boxShadow: 0, background: "unset", height: "100%" },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react34.CardHeader, {
                padding: 0,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                  src: stay.photo,
                  alt: stay.title,
                  width: "100%",
                  style: { borderRadius: "16px", aspectRatio: "394/267", objectFit: "cover" }
                }, void 0, !1, {
                  fileName: "app/components/HostelsList/HostelsList.tsx",
                  lineNumber: 30,
                  columnNumber: 23
                }, this)
              }, void 0, !1, {
                fileName: "app/components/HostelsList/HostelsList.tsx",
                lineNumber: 29,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react34.CardBody, {
                sx: { padding: 0, paddingTop: "0.5em" },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react34.Box, {
                    display: "flex",
                    justifyContent: "space-between",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react34.Box, {
                        children: [
                          stay.superHost && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react34.Button, {
                            variant: "outlined",
                            size: "small",
                            sx: { fontSize: "0.7em", borderRadius: "20px", lineHeight: 1.3, textTransform: "uppercase", fontWeight: "bold", marginRight: "1em" },
                            children: "Super host"
                          }, void 0, !1, {
                            fileName: "app/components/HostelsList/HostelsList.tsx",
                            lineNumber: 36,
                            columnNumber: 29
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react34.Text, {
                            variant: "body2",
                            as: "span",
                            sx: { opacity: 0.7 },
                            children: stay.type + (stay.beds ? " \xB7 " + stay.beds + " beds" : "")
                          }, void 0, !1, {
                            fileName: "app/components/HostelsList/HostelsList.tsx",
                            lineNumber: 40,
                            columnNumber: 27
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/components/HostelsList/HostelsList.tsx",
                        lineNumber: 34,
                        columnNumber: 25
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react34.Stack, {
                        direction: "row",
                        alignItems: "center",
                        gap: 0.5,
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_icons.StarIcon, {
                            color: "secondary"
                          }, void 0, !1, {
                            fileName: "app/components/HostelsList/HostelsList.tsx",
                            lineNumber: 45,
                            columnNumber: 27
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react34.Text, {
                            variant: "body2",
                            as: "span",
                            children: stay.rating
                          }, void 0, !1, {
                            fileName: "app/components/HostelsList/HostelsList.tsx",
                            lineNumber: 46,
                            columnNumber: 27
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/components/HostelsList/HostelsList.tsx",
                        lineNumber: 44,
                        columnNumber: 25
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/components/HostelsList/HostelsList.tsx",
                    lineNumber: 33,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react34.Text, {
                    variant: "h6",
                    as: "p",
                    children: stay.title
                  }, void 0, !1, {
                    fileName: "app/components/HostelsList/HostelsList.tsx",
                    lineNumber: 52,
                    columnNumber: 23
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/HostelsList/HostelsList.tsx",
                lineNumber: 32,
                columnNumber: 21
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/HostelsList/HostelsList.tsx",
            lineNumber: 28,
            columnNumber: 19
          }, this)
        }, void 0, !1, {
          fileName: "app/components/HostelsList/HostelsList.tsx",
          lineNumber: 27,
          columnNumber: 17
        }, this))
      ]
    }, void 0, !0, {
      fileName: "app/components/HostelsList/HostelsList.tsx",
      lineNumber: 13,
      columnNumber: 11
    }, this)
  }, void 0, !1, {
    fileName: "app/components/HostelsList/HostelsList.tsx",
    lineNumber: 12,
    columnNumber: 9
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: staysList
  }, void 0, !1, {
    fileName: "app/components/HostelsList/HostelsList.tsx",
    lineNumber: 64,
    columnNumber: 5
  }, this);
}, HostelsList_default = HostelsList;

// app/routes/index.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), dbErrorMessage = 'Something is missing.<br/>Did you set up Supabase yet?<br/>You can find the <a href="https://github.com/clerkinc/remix-bossa-nova-stack#configuring-the-database" target="_blank">instructions in the README file</a>.', loader2 = async ({ request }) => {
  let { userId } = await (0, import_ssr3.getAuth)(request);
  if (!userId)
    return null;
  let db = await getDB(request);
  if (!db)
    return (0, import_node.json)({ error: dbErrorMessage });
  let { data } = await db.from("songs").select();
  return data ? (0, import_node.json)({ songs: data }) : (0, import_node.json)({ error: dbErrorMessage });
}, action = async ({ request }) => {
  let formData = await request.formData(), { userId } = await (0, import_ssr3.getAuth)(request), song = formData.get("add-song"), db = await getDB(request);
  return db && await db.from("songs").insert({ body: song, user_id: userId }), null;
};
function Index() {
  let { signOut } = (0, import_remix4.useAuth)(), data = (0, import_react36.useLoaderData)(), headingSize = (0, import_react37.useBreakpointValue)({ base: "lg", sm: "2xl", lg: "4xl" });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react37.Stack, {
        justify: "center",
        textAlign: "center",
        h: "100vh",
        flex: 1,
        color: "white",
        gap: 20,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ZeroSlider_default, {}, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 72,
          columnNumber: 17
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 64,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HostelsList_default, {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 74,
        columnNumber: 13
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 63,
    columnNumber: 9
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "98fb67ac", entry: { module: "/build/entry.client-54QDP5ML.js", imports: ["/build/_shared/chunk-RFR2BVBZ.js", "/build/_shared/chunk-U7PDLUNP.js", "/build/_shared/chunk-36S4JRLM.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-ECXCB5GP.js", imports: ["/build/_shared/chunk-V5RMJA44.js", "/build/_shared/chunk-6AZZXBV6.js", "/build/_shared/chunk-3WKBNXIS.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/hostel/$hostelId": { id: "routes/hostel/$hostelId", parentId: "root", path: "hostel/:hostelId", index: void 0, caseSensitive: void 0, module: "/build/routes/hostel/$hostelId-AUKC2TL5.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-GXHKC4IW.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-in/$": { id: "routes/sign-in/$", parentId: "root", path: "sign-in/*", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-in/$-EOIJ7FOZ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-up/$": { id: "routes/sign-up/$", parentId: "root", path: "sign-up/*", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-up/$-PSSTIFSB.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-98FB67AC.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/hostel/$hostelId": {
    id: "routes/hostel/$hostelId",
    parentId: "root",
    path: "hostel/:hostelId",
    index: void 0,
    caseSensitive: void 0,
    module: hostelId_exports
  },
  "routes/sign-in/$": {
    id: "routes/sign-in/$",
    parentId: "root",
    path: "sign-in/*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports
  },
  "routes/sign-up/$": {
    id: "routes/sign-up/$",
    parentId: "root",
    path: "sign-up/*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports2
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
