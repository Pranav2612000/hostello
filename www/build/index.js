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
var import_react7 = __toESM(require("react")), import_react8 = require("@remix-run/react"), import_ssr = require("@clerk/remix/ssr.server"), import_remix2 = require("@clerk/remix"), import_react9 = require("@chakra-ui/react"), import_react10 = require("@emotion/react");

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
var import_styled = __toESM(require("@emotion/styled")), import_react5 = require("react"), import_react_router_dom = require("react-router-dom"), import_react6 = require("@chakra-ui/react"), import_remix = require("@clerk/remix");

// app/assets/icons/logo.svg
var logo_default = "/build/_assets/logo-JVTAVM6H.svg";

// app/components/Header/Header.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Header({}) {
  let navigate = (0, import_react_router_dom.useNavigate)(), navRef = (0, import_react5.useRef)(null), { isSignedIn, signOut } = (0, import_remix.useAuth)(), { user } = (0, import_remix.useUser)(), headerRef = (0, import_react5.useRef)(null), [scrolled, setScrolled] = (0, import_react5.useState)(!1), [inputFocus, setInputFocus] = (0, import_react5.useState)(!1), primaryLocationRef = (0, import_react5.useRef)(null), secondaryLocationRef = (0, import_react5.useRef)(null), [location, setLocation] = (0, import_react5.useState)(""), [checkInDate, setCheckInDate] = (0, import_react5.useState)(new Date()), [checkOutDate, setCheckOutDate] = (0, import_react5.useState)(new Date()), [numberOfAdults, setNumberOfAdults] = (0, import_react5.useState)(0), [numberOfChildren, setNumberOfChildren] = (0, import_react5.useState)(0), closeDatePicker = () => {
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
              src: logo_default,
              width: "30px"
            }, void 0, !1, {
              fileName: "app/components/Header/Header.tsx",
              lineNumber: 113,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
              children: "hostello"
            }, void 0, !1, {
              fileName: "app/components/Header/Header.tsx",
              lineNumber: 114,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/Header/Header.tsx",
          lineNumber: 112,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
          ref: navRef
        }, void 0, !1, {
          fileName: "app/components/Header/Header.tsx",
          lineNumber: 116,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "profile",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
              href: "/aboutus",
              children: "About us"
            }, void 0, !1, {
              fileName: "app/components/Header/Header.tsx",
              lineNumber: 213,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
              href: "/hostel/list",
              children: "Become a host"
            }, void 0, !1, {
              fileName: "app/components/Header/Header.tsx",
              lineNumber: 214,
              columnNumber: 11
            }, this),
            isSignedIn ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.Stack, {
              className: "user-profile",
              direction: "row",
              justifyContent: "center",
              alignItems: "center",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.Text, {
                  children: user == null ? void 0 : user.firstName
                }, void 0, !1, {
                  fileName: "app/components/Header/Header.tsx",
                  lineNumber: 222,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.Text, {
                  color: "red.300",
                  fontSize: "xs",
                  cursor: "pointer",
                  onClick: () => signOut(),
                  children: "Logout"
                }, void 0, !1, {
                  fileName: "app/components/Header/Header.tsx",
                  lineNumber: 225,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/components/Header/Header.tsx",
              lineNumber: 221,
              columnNumber: 13
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
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
                lineNumber: 231,
                columnNumber: 15
              }, this)
            }, void 0, !1, {
              fileName: "app/components/Header/Header.tsx",
              lineNumber: 230,
              columnNumber: 13
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/Header/Header.tsx",
          lineNumber: 212,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/Header/Header.tsx",
      lineNumber: 111,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/Header/Header.tsx",
    lineNumber: 104,
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
    color: #ab0909;
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
      color: #2e2e48;
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
var styles_default = "/build/_assets/index-4QIFBLOK.css";

// app/root.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader = (args) => (0, import_ssr.rootAuthLoader)(args), CatchBoundary = (0, import_remix2.ClerkCatchBoundary)(), ourTheme = {
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
    {},
    { rel: "stylesheet", href: "assets/vendor/swiper/swiper-bundle.min.css" }
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
var root_default = (0, import_remix2.ClerkApp)(App), Document = (0, import_react10.withEmotionCache)(
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

// app/routes/hostel/list/index.tsx
var list_exports = {};
__export(list_exports, {
  default: () => List
});
var import_layout = require("@chakra-ui/layout"), import_react_router_dom2 = require("react-router-dom"), import_react11 = require("react"), import_react12 = require("@chakra-ui/react");

// app/api/addHostel.tsx
var import_axios = __toESM(require("axios"));

// app/api/constants.ts
var BASE_URL = "http://localhost:8080/";

// app/api/addHostel.tsx
var addHostel = async (hostel) => {
  let config = {
    method: "post",
    url: `${BASE_URL}v1/hostel/save`,
    headers: {
      "Content-Type": "application/json"
    },
    data: hostel
  };
  try {
    return (await (0, import_axios.default)(config)).data;
  } catch (err) {
    throw console.log(err), err;
  }
}, addHostel_default = addHostel;

// app/routes/hostel/list/index.tsx
var import_remix3 = require("@clerk/remix"), import_react_file_base64 = __toESM(require("react-file-base64")), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function List() {
  let navigate = (0, import_react_router_dom2.useNavigate)(), { isSignedIn, signOut } = (0, import_remix3.useAuth)(), [hostel, setHostel] = (0, import_react11.useState)({}), updateProperty = (property, value) => {
    setHostel({
      ...hostel,
      [property]: value
    });
  };
  return (0, import_react11.useEffect)(() => {
    isSignedIn || navigate("/sign-in");
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_layout.Stack, {
    pt: 24,
    px: ["4", "32"],
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_layout.Heading, {
        as: "h1",
        size: "3xl",
        children: "List a hostel"
      }, void 0, !1, {
        fileName: "app/routes/hostel/list/index.tsx",
        lineNumber: 34,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_layout.Text, {
        children: "We're delighted you've decided to list your hostel with us. We just need a few more details"
      }, void 0, !1, {
        fileName: "app/routes/hostel/list/index.tsx",
        lineNumber: 37,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.Grid, {
        templateColumns: "repeat(12, 1fr)",
        pt: 4,
        columnGap: 24,
        rowGap: 12,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.GridItem, {
            colSpan: 12,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_layout.Text, {
              fontSize: "3xl",
              children: "General Details"
            }, void 0, !1, {
              fileName: "app/routes/hostel/list/index.tsx",
              lineNumber: 43,
              columnNumber: 21
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/hostel/list/index.tsx",
            lineNumber: 42,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.GridItem, {
            colSpan: 6,
            flexDir: "row",
            display: "flex",
            alignItems: "center",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_layout.Text, {
                width: "50%",
                children: "Hostel Name: "
              }, void 0, !1, {
                fileName: "app/routes/hostel/list/index.tsx",
                lineNumber: 46,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.Input, {
                size: "md",
                placeholder: "ABC Hostel",
                onChange: (e) => updateProperty("hostelName", e.target.value)
              }, void 0, !1, {
                fileName: "app/routes/hostel/list/index.tsx",
                lineNumber: 47,
                columnNumber: 21
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/hostel/list/index.tsx",
            lineNumber: 45,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.GridItem, {
            colSpan: 6,
            flexDir: "row",
            display: "flex",
            alignItems: "center",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_layout.Text, {
                width: "50%",
                children: "Owner Name: "
              }, void 0, !1, {
                fileName: "app/routes/hostel/list/index.tsx",
                lineNumber: 50,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.Input, {
                size: "md",
                placeholder: "Bob",
                onChange: (e) => updateProperty("ownerName", e.target.value)
              }, void 0, !1, {
                fileName: "app/routes/hostel/list/index.tsx",
                lineNumber: 51,
                columnNumber: 21
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/hostel/list/index.tsx",
            lineNumber: 49,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.GridItem, {
            colSpan: 6,
            flexDir: "row",
            display: "flex",
            alignItems: "center",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_layout.Text, {
                width: "50%",
                children: "Description: "
              }, void 0, !1, {
                fileName: "app/routes/hostel/list/index.tsx",
                lineNumber: 54,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.Input, {
                size: "md",
                placeholder: "Bob",
                onChange: (e) => updateProperty("description", e.target.value)
              }, void 0, !1, {
                fileName: "app/routes/hostel/list/index.tsx",
                lineNumber: 55,
                columnNumber: 21
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/hostel/list/index.tsx",
            lineNumber: 53,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.GridItem, {
            colSpan: 6,
            flexDir: "row",
            display: "flex",
            alignItems: "center",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_layout.Text, {
                width: "50%",
                children: "Hostel Address 1: "
              }, void 0, !1, {
                fileName: "app/routes/hostel/list/index.tsx",
                lineNumber: 58,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.Input, {
                size: "md",
                placeholder: "Bengaluru, India",
                onChange: (e) => updateProperty("address1", e.target.value)
              }, void 0, !1, {
                fileName: "app/routes/hostel/list/index.tsx",
                lineNumber: 59,
                columnNumber: 21
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/hostel/list/index.tsx",
            lineNumber: 57,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.GridItem, {
            colSpan: 6,
            flexDir: "row",
            display: "flex",
            alignItems: "center",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_layout.Text, {
                width: "50%",
                children: "Hostel Address 2: "
              }, void 0, !1, {
                fileName: "app/routes/hostel/list/index.tsx",
                lineNumber: 62,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.Input, {
                size: "md",
                placeholder: "Bengaluru, India",
                onChange: (e) => updateProperty("address2", e.target.value)
              }, void 0, !1, {
                fileName: "app/routes/hostel/list/index.tsx",
                lineNumber: 63,
                columnNumber: 21
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/hostel/list/index.tsx",
            lineNumber: 61,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.GridItem, {
            colSpan: 6,
            flexDir: "row",
            display: "flex",
            alignItems: "center",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_layout.Text, {
                width: "50%",
                children: "City: "
              }, void 0, !1, {
                fileName: "app/routes/hostel/list/index.tsx",
                lineNumber: 66,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.Input, {
                size: "md",
                placeholder: "Bengaluru, India",
                onChange: (e) => updateProperty("city", e.target.value)
              }, void 0, !1, {
                fileName: "app/routes/hostel/list/index.tsx",
                lineNumber: 67,
                columnNumber: 21
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/hostel/list/index.tsx",
            lineNumber: 65,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.GridItem, {
            colSpan: 6,
            flexDir: "row",
            display: "flex",
            alignItems: "center",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_layout.Text, {
                width: "50%",
                children: "State: "
              }, void 0, !1, {
                fileName: "app/routes/hostel/list/index.tsx",
                lineNumber: 70,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.Input, {
                size: "md",
                placeholder: "Bengaluru, India",
                onChange: (e) => updateProperty("state", e.target.value)
              }, void 0, !1, {
                fileName: "app/routes/hostel/list/index.tsx",
                lineNumber: 71,
                columnNumber: 21
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/hostel/list/index.tsx",
            lineNumber: 69,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.GridItem, {
            colSpan: 6,
            flexDir: "row",
            display: "flex",
            alignItems: "center",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_layout.Text, {
                width: "50%",
                children: "Hostel Type"
              }, void 0, !1, {
                fileName: "app/routes/hostel/list/index.tsx",
                lineNumber: 74,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.Input, {
                size: "md",
                placeholder: "Bengaluru, India",
                onChange: (e) => updateProperty("type", e.target.value)
              }, void 0, !1, {
                fileName: "app/routes/hostel/list/index.tsx",
                lineNumber: 75,
                columnNumber: 21
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/hostel/list/index.tsx",
            lineNumber: 73,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/routes/hostel/list/index.tsx",
            lineNumber: 78,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.GridItem, {
            colSpan: 12,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_layout.Text, {
              fontSize: "3xl",
              children: "Inventory Details"
            }, void 0, !1, {
              fileName: "app/routes/hostel/list/index.tsx",
              lineNumber: 80,
              columnNumber: 21
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/hostel/list/index.tsx",
            lineNumber: 79,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.GridItem, {
            colSpan: 6,
            flexDir: "row",
            display: "flex",
            alignItems: "center",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_layout.Text, {
                width: "50%",
                children: "Number of Rooms: "
              }, void 0, !1, {
                fileName: "app/routes/hostel/list/index.tsx",
                lineNumber: 83,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.Input, {
                size: "md",
                placeholder: "Bengaluru, India",
                onChange: (e) => updateProperty("numberofrooms", parseInt(e.target.value))
              }, void 0, !1, {
                fileName: "app/routes/hostel/list/index.tsx",
                lineNumber: 84,
                columnNumber: 21
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/hostel/list/index.tsx",
            lineNumber: 82,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.GridItem, {
            colSpan: 6,
            flexDir: "row",
            display: "flex",
            alignItems: "center",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_layout.Text, {
                width: "50%",
                children: "Occupancy per room: "
              }, void 0, !1, {
                fileName: "app/routes/hostel/list/index.tsx",
                lineNumber: 87,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.Input, {
                size: "md",
                placeholder: "Bengaluru, India",
                onChange: (e) => updateProperty("occupancyperroom", parseInt(e.target.value))
              }, void 0, !1, {
                fileName: "app/routes/hostel/list/index.tsx",
                lineNumber: 88,
                columnNumber: 21
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/hostel/list/index.tsx",
            lineNumber: 86,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.GridItem, {
            colSpan: 6,
            flexDir: "row",
            display: "flex",
            alignItems: "center",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_layout.Text, {
                width: "50%",
                children: "Price per Room: "
              }, void 0, !1, {
                fileName: "app/routes/hostel/list/index.tsx",
                lineNumber: 91,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.Input, {
                size: "md",
                placeholder: "Bengaluru, India",
                onChange: (e) => updateProperty("price", parseInt(e.target.value))
              }, void 0, !1, {
                fileName: "app/routes/hostel/list/index.tsx",
                lineNumber: 92,
                columnNumber: 21
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/hostel/list/index.tsx",
            lineNumber: 90,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.GridItem, {
            colSpan: 6,
            flexDir: "row",
            display: "flex",
            alignItems: "center",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_layout.Text, {
                width: "50%",
                children: "Amenities (Comma seperated): "
              }, void 0, !1, {
                fileName: "app/routes/hostel/list/index.tsx",
                lineNumber: 95,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.Input, {
                size: "md",
                placeholder: "Bengaluru, India",
                onChange: (e) => updateProperty("amenities", e.target.value)
              }, void 0, !1, {
                fileName: "app/routes/hostel/list/index.tsx",
                lineNumber: 96,
                columnNumber: 21
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/hostel/list/index.tsx",
            lineNumber: 94,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/routes/hostel/list/index.tsx",
            lineNumber: 99,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.GridItem, {
            colSpan: 12,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_layout.Text, {
              fontSize: "3xl",
              children: "Assets"
            }, void 0, !1, {
              fileName: "app/routes/hostel/list/index.tsx",
              lineNumber: 101,
              columnNumber: 21
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/hostel/list/index.tsx",
            lineNumber: 100,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.GridItem, {
            colSpan: 6,
            flexDir: "row",
            display: "flex",
            alignItems: "center",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_layout.Text, {
                width: "50%",
                children: "Video: (Link)"
              }, void 0, !1, {
                fileName: "app/routes/hostel/list/index.tsx",
                lineNumber: 104,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.Input, {
                size: "md",
                placeholder: "Bengaluru, India",
                onChange: (e) => updateProperty("videoLink", e.target.value)
              }, void 0, !1, {
                fileName: "app/routes/hostel/list/index.tsx",
                lineNumber: 105,
                columnNumber: 21
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/hostel/list/index.tsx",
            lineNumber: 103,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.GridItem, {
            colSpan: 6,
            flexDir: "row",
            display: "flex",
            alignItems: "center",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_layout.Text, {
                width: "50%",
                children: "Maps: (Link)"
              }, void 0, !1, {
                fileName: "app/routes/hostel/list/index.tsx",
                lineNumber: 108,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.Input, {
                size: "md",
                placeholder: "Bengaluru, India",
                onChange: (e) => updateProperty("maps", e.target.value)
              }, void 0, !1, {
                fileName: "app/routes/hostel/list/index.tsx",
                lineNumber: 109,
                columnNumber: 21
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/hostel/list/index.tsx",
            lineNumber: 107,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.GridItem, {
            colSpan: 6,
            flexDir: "row",
            display: "flex",
            alignItems: "center",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_layout.Text, {
                width: "50%",
                children: "Cover Image: "
              }, void 0, !1, {
                fileName: "app/routes/hostel/list/index.tsx",
                lineNumber: 112,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_file_base64.default, {
                onDone: ({ base64 }) => updateProperty("coverimg", base64)
              }, void 0, !1, {
                fileName: "app/routes/hostel/list/index.tsx",
                lineNumber: 113,
                columnNumber: 21
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/hostel/list/index.tsx",
            lineNumber: 111,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.GridItem, {
            colSpan: 6,
            flexDir: "row",
            display: "flex",
            alignItems: "center",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_layout.Text, {
                width: "50%",
                children: "Room Photo:"
              }, void 0, !1, {
                fileName: "app/routes/hostel/list/index.tsx",
                lineNumber: 116,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_file_base64.default, {
                onDone: ({ base64 }) => updateProperty("roomPhoto", base64)
              }, void 0, !1, {
                fileName: "app/routes/hostel/list/index.tsx",
                lineNumber: 117,
                columnNumber: 21
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/hostel/list/index.tsx",
            lineNumber: 115,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.GridItem, {
            colSpan: 6,
            flexDir: "row",
            display: "flex",
            alignItems: "center",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_layout.Text, {
                width: "50%",
                children: "Bathroom Photo:"
              }, void 0, !1, {
                fileName: "app/routes/hostel/list/index.tsx",
                lineNumber: 120,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_file_base64.default, {
                onDone: ({ base64 }) => updateProperty("bathroomPhoto", base64)
              }, void 0, !1, {
                fileName: "app/routes/hostel/list/index.tsx",
                lineNumber: 121,
                columnNumber: 21
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/hostel/list/index.tsx",
            lineNumber: 119,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.GridItem, {
            colSpan: 6,
            flexDir: "row",
            display: "flex",
            alignItems: "center",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_layout.Text, {
                width: "50%",
                children: "Reception Photo:"
              }, void 0, !1, {
                fileName: "app/routes/hostel/list/index.tsx",
                lineNumber: 124,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_file_base64.default, {
                onDone: ({ base64 }) => updateProperty("receptionPhoto", base64)
              }, void 0, !1, {
                fileName: "app/routes/hostel/list/index.tsx",
                lineNumber: 125,
                columnNumber: 21
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/hostel/list/index.tsx",
            lineNumber: 123,
            columnNumber: 17
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/hostel/list/index.tsx",
        lineNumber: 41,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/hostel/list/index.tsx",
        lineNumber: 128,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/hostel/list/index.tsx",
        lineNumber: 129,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/hostel/list/index.tsx",
        lineNumber: 130,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.Button, {
        onClick: async () => {
          console.log({ hostel });
          let resp = await addHostel_default(hostel);
          alert("Hostel Added Successfully");
        },
        children: "List Hostel"
      }, void 0, !1, {
        fileName: "app/routes/hostel/list/index.tsx",
        lineNumber: 131,
        columnNumber: 13
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/hostel/list/index.tsx",
    lineNumber: 33,
    columnNumber: 9
  }, this);
}

// app/routes/hostel/$hostelId.tsx
var hostelId_exports = {};
__export(hostelId_exports, {
  default: () => HostelListing
});
var import_react13 = require("@chakra-ui/react"), import_react14 = require("react"), import_clsx = __toESM(require("clsx"));

// app/api/getByHostelId.tsx
var import_axios2 = __toESM(require("axios"));
var getByHostelId = async (id) => {
  let config = {
    method: "get",
    url: `${BASE_URL}v1/hostel/findbyId/${id}`,
    headers: {}
  };
  try {
    return (await (0, import_axios2.default)(config)).data;
  } catch (err) {
    throw console.log(err), err;
  }
}, getByHostelId_default = getByHostelId;

// app/routes/hostel/$hostelId.tsx
var import_react15 = require("@remix-run/react"), import_remix4 = require("@clerk/remix");

// app/api/sendHostelInfo.tsx
var import_axios3 = __toESM(require("axios"));
var sendHostelInfo = async ({ firstName, lastName, email, age, hostelId }) => {
  age || (age = 0);
  let config = {
    method: "post",
    url: `${BASE_URL}v1/hostel/email/${hostelId}`,
    headers: {
      "Content-Type": "application/json"
    },
    data: {
      firstName,
      lastName,
      email,
      age
    }
  };
  try {
    return (await (0, import_axios3.default)(config)).data;
  } catch (err) {
    throw console.log(err), err;
  }
}, sendHostelInfo_default = sendHostelInfo;

// app/routes/hostel/$hostelId.tsx
var import_react16 = require("@chakra-ui/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function HostelListing() {
  let [infoTabIndex, setInfoTabIndex] = (0, import_react14.useState)(0), [hostel, setHostel] = (0, import_react14.useState)({}), [imgs, setImgs] = (0, import_react14.useState)([]), [imgIndex, setImgIndex] = (0, import_react14.useState)(0), [isPricingModalOpen, setIsPricingModalOpen] = (0, import_react14.useState)(!1), id = (0, import_react15.useParams)().hostelId, { user } = (0, import_remix4.useUser)();
  (0, import_react14.useEffect)(() => {
    let timer = setInterval(() => {
      setImgIndex((imgIndex2) => (imgIndex2 + 1) % 4);
    }, 3e3);
    return () => clearInterval(timer);
  }, []), (0, import_react14.useEffect)(() => {
    (async () => {
      let hostel2 = await getByHostelId_default(id);
      setHostel(hostel2);
    })();
  }, []), (0, import_react14.useEffect)(() => {
    setImgs([hostel.coverimg, hostel.bathroomPhoto, hostel.ReceptionPhoto, hostel.roomPhoto]);
  }, [hostel]);
  let tabs = [
    {
      name: "Video",
      render: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "tab-pane fade show active",
        id: "pills-video",
        role: "tabpanel",
        "aria-labelledby": "pills-video-tab",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("iframe", {
          src: hostel.videoLink,
          width: "100%",
          height: "460",
          frameBorder: "0",
          allowFullScreen: !0
        }, void 0, !1, {
          fileName: "app/routes/hostel/$hostelId.tsx",
          lineNumber: 53,
          columnNumber: 13
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/hostel/$hostelId.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this)
    },
    {
      name: "Floor Plans",
      render: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
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
          lineNumber: 63,
          columnNumber: 13
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/hostel/$hostelId.tsx",
        lineNumber: 62,
        columnNumber: 11
      }, this)
    },
    {
      name: "Ubication",
      render: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
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
          lineNumber: 73,
          columnNumber: 13
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/hostel/$hostelId.tsx",
        lineNumber: 72,
        columnNumber: 11
      }, this)
    }
  ], onButtonClicked = () => {
    try {
      sendHostelInfo_default({
        firstName: user == null ? void 0 : user.firstName,
        lastName: user == null ? void 0 : user.lastName,
        hostelId: id,
        email: user == null ? void 0 : user.emailAddresses[0].emailAddress
      }), alert("You will receive an email with hostel details soon");
    } catch (err) {
      console.log(err), alert("An error occured! Please try again in some time");
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react16.Modal, {
        isOpen: isPricingModalOpen,
        onClose: () => setIsPricingModalOpen(!1),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react16.ModalOverlay, {}, void 0, !1, {
            fileName: "app/routes/hostel/$hostelId.tsx",
            lineNumber: 98,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react16.ModalContent, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react16.ModalHeader, {
                children: "Pricing"
              }, void 0, !1, {
                fileName: "app/routes/hostel/$hostelId.tsx",
                lineNumber: 100,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react16.ModalCloseButton, {}, void 0, !1, {
                fileName: "app/routes/hostel/$hostelId.tsx",
                lineNumber: 101,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react16.ModalBody, {
                children: [
                  "Choose your payment plan",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react13.TableContainer, {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react13.Table, {
                      size: "lg",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react13.Thead, {
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react13.Th, {
                              children: "Monthly"
                            }, void 0, !1, {
                              fileName: "app/routes/hostel/$hostelId.tsx",
                              lineNumber: 108,
                              columnNumber: 19
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react13.Th, {
                              children: "Annually"
                            }, void 0, !1, {
                              fileName: "app/routes/hostel/$hostelId.tsx",
                              lineNumber: 109,
                              columnNumber: 19
                            }, this)
                          ]
                        }, void 0, !0, {
                          fileName: "app/routes/hostel/$hostelId.tsx",
                          lineNumber: 107,
                          columnNumber: 17
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react13.Tbody, {
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react13.Td, {
                              children: hostel.price
                            }, void 0, !1, {
                              fileName: "app/routes/hostel/$hostelId.tsx",
                              lineNumber: 112,
                              columnNumber: 19
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react13.Td, {
                              children: hostel.price * 12
                            }, void 0, !1, {
                              fileName: "app/routes/hostel/$hostelId.tsx",
                              lineNumber: 113,
                              columnNumber: 19
                            }, this)
                          ]
                        }, void 0, !0, {
                          fileName: "app/routes/hostel/$hostelId.tsx",
                          lineNumber: 111,
                          columnNumber: 17
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/hostel/$hostelId.tsx",
                      lineNumber: 106,
                      columnNumber: 15
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/hostel/$hostelId.tsx",
                    lineNumber: 105,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/hostel/$hostelId.tsx",
                lineNumber: 102,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react16.ModalFooter, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react13.Button, {
                    colorScheme: "blue",
                    mr: 3,
                    onClick: () => setIsPricingModalOpen(!1),
                    children: "Close"
                  }, void 0, !1, {
                    fileName: "app/routes/hostel/$hostelId.tsx",
                    lineNumber: 120,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react13.Button, {
                    variant: "ghost",
                    onClick: onButtonClicked,
                    children: "I'm interested"
                  }, void 0, !1, {
                    fileName: "app/routes/hostel/$hostelId.tsx",
                    lineNumber: 123,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/hostel/$hostelId.tsx",
                lineNumber: 119,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/hostel/$hostelId.tsx",
            lineNumber: 99,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/hostel/$hostelId.tsx",
        lineNumber: 97,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
        className: "intro-single",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react13.Grid, {
          px: ["4", "32"],
          templateColumns: "repeat(12, 1fr)",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react13.GridItem, {
              colSpan: [12, 8],
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "title-single-box",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                    className: "title-single",
                    children: hostel.hostelName
                  }, void 0, !1, {
                    fileName: "app/routes/hostel/$hostelId.tsx",
                    lineNumber: 131,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                    className: "color-text-a",
                    children: hostel.address1
                  }, void 0, !1, {
                    fileName: "app/routes/hostel/$hostelId.tsx",
                    lineNumber: 132,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/hostel/$hostelId.tsx",
                lineNumber: 130,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/hostel/$hostelId.tsx",
              lineNumber: 129,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react13.GridItem, {
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
                        lineNumber: 139,
                        columnNumber: 19
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/hostel/$hostelId.tsx",
                      lineNumber: 138,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                      className: "breadcrumb-item",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                        href: "property-grid.html",
                        children: "Properties"
                      }, void 0, !1, {
                        fileName: "app/routes/hostel/$hostelId.tsx",
                        lineNumber: 142,
                        columnNumber: 19
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/hostel/$hostelId.tsx",
                      lineNumber: 141,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                      className: "breadcrumb-item active",
                      "aria-current": "page",
                      children: hostel.address1
                    }, void 0, !1, {
                      fileName: "app/routes/hostel/$hostelId.tsx",
                      lineNumber: 144,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/hostel/$hostelId.tsx",
                  lineNumber: 137,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/hostel/$hostelId.tsx",
                lineNumber: 136,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/hostel/$hostelId.tsx",
              lineNumber: 135,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/hostel/$hostelId.tsx",
          lineNumber: 128,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/hostel/$hostelId.tsx",
        lineNumber: 127,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
        className: "property-single nav-arrow-b",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react13.Stack, {
          px: ["4", "32"],
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react13.Grid, {
              templateColumns: "repeat(12, 1fr)",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react13.GridItem, {
                colSpan: [12, 8],
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
                            src: imgs[imgIndex],
                            alt: ""
                          }, void 0, !1, {
                            fileName: "app/routes/hostel/$hostelId.tsx",
                            lineNumber: 161,
                            columnNumber: 21
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/hostel/$hostelId.tsx",
                          lineNumber: 160,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "carousel-item-b swiper-slide",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                            src: "assets/img/slide-2.jpg",
                            alt: ""
                          }, void 0, !1, {
                            fileName: "app/routes/hostel/$hostelId.tsx",
                            lineNumber: 164,
                            columnNumber: 21
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/hostel/$hostelId.tsx",
                          lineNumber: 163,
                          columnNumber: 19
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/hostel/$hostelId.tsx",
                      lineNumber: 159,
                      columnNumber: 17
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/hostel/$hostelId.tsx",
                    lineNumber: 158,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "property-single-carousel-pagination carousel-pagination"
                  }, void 0, !1, {
                    fileName: "app/routes/hostel/$hostelId.tsx",
                    lineNumber: 168,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/hostel/$hostelId.tsx",
                lineNumber: 157,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/hostel/$hostelId.tsx",
              lineNumber: 156,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react13.Grid, {
              templateColumns: "repeat(12, 1fr)",
              gap: 8,
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react13.GridItem, {
                  colSpan: [12, 5, 4],
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "property-price d-flex justify-content-center foo",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "card-header-c d-flex relative",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react13.Button, {
                          onClick: () => setIsPricingModalOpen(!0),
                          children: "Book Now!"
                        }, void 0, !1, {
                          fileName: "app/routes/hostel/$hostelId.tsx",
                          lineNumber: 176,
                          columnNumber: 19
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/hostel/$hostelId.tsx",
                        lineNumber: 175,
                        columnNumber: 17
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/hostel/$hostelId.tsx",
                      lineNumber: 174,
                      columnNumber: 15
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
                                lineNumber: 183,
                                columnNumber: 23
                              }, this)
                            }, void 0, !1, {
                              fileName: "app/routes/hostel/$hostelId.tsx",
                              lineNumber: 182,
                              columnNumber: 21
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/routes/hostel/$hostelId.tsx",
                            lineNumber: 181,
                            columnNumber: 19
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/hostel/$hostelId.tsx",
                          lineNumber: 180,
                          columnNumber: 17
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
                                    children: "Location:"
                                  }, void 0, !1, {
                                    fileName: "app/routes/hostel/$hostelId.tsx",
                                    lineNumber: 196,
                                    columnNumber: 23
                                  }, this),
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                    children: hostel.address2
                                  }, void 0, !1, {
                                    fileName: "app/routes/hostel/$hostelId.tsx",
                                    lineNumber: 197,
                                    columnNumber: 23
                                  }, this)
                                ]
                              }, void 0, !0, {
                                fileName: "app/routes/hostel/$hostelId.tsx",
                                lineNumber: 195,
                                columnNumber: 21
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                                className: "d-flex justify-content-between",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
                                    children: "Property Type:"
                                  }, void 0, !1, {
                                    fileName: "app/routes/hostel/$hostelId.tsx",
                                    lineNumber: 200,
                                    columnNumber: 23
                                  }, this),
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                    children: hostel.type
                                  }, void 0, !1, {
                                    fileName: "app/routes/hostel/$hostelId.tsx",
                                    lineNumber: 201,
                                    columnNumber: 23
                                  }, this)
                                ]
                              }, void 0, !0, {
                                fileName: "app/routes/hostel/$hostelId.tsx",
                                lineNumber: 199,
                                columnNumber: 21
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                                className: "d-flex justify-content-between",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
                                    children: "Area:"
                                  }, void 0, !1, {
                                    fileName: "app/routes/hostel/$hostelId.tsx",
                                    lineNumber: 210,
                                    columnNumber: 23
                                  }, this),
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                    children: [
                                      "340m",
                                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("sup", {
                                        children: "2"
                                      }, void 0, !1, {
                                        fileName: "app/routes/hostel/$hostelId.tsx",
                                        lineNumber: 212,
                                        columnNumber: 25
                                      }, this)
                                    ]
                                  }, void 0, !0, {
                                    fileName: "app/routes/hostel/$hostelId.tsx",
                                    lineNumber: 211,
                                    columnNumber: 23
                                  }, this)
                                ]
                              }, void 0, !0, {
                                fileName: "app/routes/hostel/$hostelId.tsx",
                                lineNumber: 209,
                                columnNumber: 21
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                                className: "d-flex justify-content-between",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
                                    children: "Beds:"
                                  }, void 0, !1, {
                                    fileName: "app/routes/hostel/$hostelId.tsx",
                                    lineNumber: 216,
                                    columnNumber: 23
                                  }, this),
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                    children: "4"
                                  }, void 0, !1, {
                                    fileName: "app/routes/hostel/$hostelId.tsx",
                                    lineNumber: 217,
                                    columnNumber: 23
                                  }, this)
                                ]
                              }, void 0, !0, {
                                fileName: "app/routes/hostel/$hostelId.tsx",
                                lineNumber: 215,
                                columnNumber: 21
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                                className: "d-flex justify-content-between",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
                                    children: "Baths:"
                                  }, void 0, !1, {
                                    fileName: "app/routes/hostel/$hostelId.tsx",
                                    lineNumber: 220,
                                    columnNumber: 23
                                  }, this),
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                    children: "2"
                                  }, void 0, !1, {
                                    fileName: "app/routes/hostel/$hostelId.tsx",
                                    lineNumber: 221,
                                    columnNumber: 23
                                  }, this)
                                ]
                              }, void 0, !0, {
                                fileName: "app/routes/hostel/$hostelId.tsx",
                                lineNumber: 219,
                                columnNumber: 21
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                                className: "d-flex justify-content-between",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
                                    children: "Garage:"
                                  }, void 0, !1, {
                                    fileName: "app/routes/hostel/$hostelId.tsx",
                                    lineNumber: 224,
                                    columnNumber: 23
                                  }, this),
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                    children: "1"
                                  }, void 0, !1, {
                                    fileName: "app/routes/hostel/$hostelId.tsx",
                                    lineNumber: 225,
                                    columnNumber: 23
                                  }, this)
                                ]
                              }, void 0, !0, {
                                fileName: "app/routes/hostel/$hostelId.tsx",
                                lineNumber: 223,
                                columnNumber: 21
                              }, this)
                            ]
                          }, void 0, !0, {
                            fileName: "app/routes/hostel/$hostelId.tsx",
                            lineNumber: 188,
                            columnNumber: 19
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/hostel/$hostelId.tsx",
                          lineNumber: 187,
                          columnNumber: 17
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/hostel/$hostelId.tsx",
                      lineNumber: 179,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/hostel/$hostelId.tsx",
                  lineNumber: 173,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react13.GridItem, {
                  colSpan: [12, 7, 8],
                  className: "section-md-t3",
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
                            lineNumber: 235,
                            columnNumber: 21
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/hostel/$hostelId.tsx",
                          lineNumber: 234,
                          columnNumber: 19
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/hostel/$hostelId.tsx",
                        lineNumber: 233,
                        columnNumber: 17
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/hostel/$hostelId.tsx",
                      lineNumber: 232,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "property-description",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                        className: "description color-text-a",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                          dangerouslySetInnerHTML: { __html: hostel.description }
                        }, void 0, !1, {
                          fileName: "app/routes/hostel/$hostelId.tsx",
                          lineNumber: 241,
                          columnNumber: 19
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/hostel/$hostelId.tsx",
                        lineNumber: 240,
                        columnNumber: 17
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/hostel/$hostelId.tsx",
                      lineNumber: 239,
                      columnNumber: 15
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
                            lineNumber: 247,
                            columnNumber: 21
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/hostel/$hostelId.tsx",
                          lineNumber: 246,
                          columnNumber: 19
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/hostel/$hostelId.tsx",
                        lineNumber: 245,
                        columnNumber: 17
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/hostel/$hostelId.tsx",
                      lineNumber: 244,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "amenities-list color-text-a",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
                        className: "list-a no-margin",
                        children: [
                          (hostel.amenities ? hostel.amenities : "").split(", ").map((amenity) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                            children: amenity
                          }, void 0, !1, {
                            fileName: "app/routes/hostel/$hostelId.tsx",
                            lineNumber: 255,
                            columnNumber: 23
                          }, this)),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                            children: "Balcony"
                          }, void 0, !1, {
                            fileName: "app/routes/hostel/$hostelId.tsx",
                            lineNumber: 258,
                            columnNumber: 19
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                            children: "Outdoor Kitchen"
                          }, void 0, !1, {
                            fileName: "app/routes/hostel/$hostelId.tsx",
                            lineNumber: 259,
                            columnNumber: 19
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                            children: "Cable Tv"
                          }, void 0, !1, {
                            fileName: "app/routes/hostel/$hostelId.tsx",
                            lineNumber: 260,
                            columnNumber: 19
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                            children: "Deck"
                          }, void 0, !1, {
                            fileName: "app/routes/hostel/$hostelId.tsx",
                            lineNumber: 261,
                            columnNumber: 19
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                            children: "Tennis Courts"
                          }, void 0, !1, {
                            fileName: "app/routes/hostel/$hostelId.tsx",
                            lineNumber: 262,
                            columnNumber: 19
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                            children: "Internet"
                          }, void 0, !1, {
                            fileName: "app/routes/hostel/$hostelId.tsx",
                            lineNumber: 263,
                            columnNumber: 19
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                            children: "Parking"
                          }, void 0, !1, {
                            fileName: "app/routes/hostel/$hostelId.tsx",
                            lineNumber: 264,
                            columnNumber: 19
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                            children: "Sun Room"
                          }, void 0, !1, {
                            fileName: "app/routes/hostel/$hostelId.tsx",
                            lineNumber: 265,
                            columnNumber: 19
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                            children: "Concrete Flooring"
                          }, void 0, !1, {
                            fileName: "app/routes/hostel/$hostelId.tsx",
                            lineNumber: 266,
                            columnNumber: 19
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/hostel/$hostelId.tsx",
                        lineNumber: 252,
                        columnNumber: 17
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/hostel/$hostelId.tsx",
                      lineNumber: 251,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/hostel/$hostelId.tsx",
                  lineNumber: 231,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react13.GridItem, {
                  colSpan: [12, 10],
                  className: "offset-md-1",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
                      className: "nav nav-pills-a nav-pills mb-3 section-t3",
                      id: "pills-tab",
                      role: "tablist",
                      children: tabs.map((tab, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                        className: "nav-item",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                          className: (0, import_clsx.default)("nav-link", infoTabIndex === index && "active"),
                          id: `pills-${tab.name}-tab`,
                          "data-bs-toggle": "pill",
                          href: `#pills-${tab.name}`,
                          role: "tab",
                          "aria-controls": `pills-${tab.name}`,
                          "aria-selected": infoTabIndex === index,
                          onClick: () => setInfoTabIndex(index),
                          children: tab.name
                        }, void 0, !1, {
                          fileName: "app/routes/hostel/$hostelId.tsx",
                          lineNumber: 275,
                          columnNumber: 23
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/hostel/$hostelId.tsx",
                        lineNumber: 274,
                        columnNumber: 21
                      }, this))
                    }, void 0, !1, {
                      fileName: "app/routes/hostel/$hostelId.tsx",
                      lineNumber: 271,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "tab-content",
                      id: "pills-tabContent",
                      children: tabs[infoTabIndex].render()
                    }, void 0, !1, {
                      fileName: "app/routes/hostel/$hostelId.tsx",
                      lineNumber: 291,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/hostel/$hostelId.tsx",
                  lineNumber: 270,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/hostel/$hostelId.tsx",
              lineNumber: 172,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/hostel/$hostelId.tsx",
          lineNumber: 155,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/hostel/$hostelId.tsx",
        lineNumber: 154,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
        className: "bottom-btn-container",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
          onClick: onButtonClicked,
          children: "I'm interested"
        }, void 0, !1, {
          fileName: "app/routes/hostel/$hostelId.tsx",
          lineNumber: 299,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/hostel/$hostelId.tsx",
        lineNumber: 298,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/hostel/$hostelId.tsx",
    lineNumber: 96,
    columnNumber: 5
  }, this);
}

// app/routes/aboutus/index.tsx
var aboutus_exports = {};
__export(aboutus_exports, {
  default: () => HostelListing2
});
var import_react17 = require("@chakra-ui/react"), import_react18 = require("react"), import_react19 = require("@remix-run/react");

// app/assets/images/Hostello_final.png
var Hostello_final_default = "/build/_assets/Hostello_final-BDCHBNX4.png";

// app/assets/images/Nsrcel_logo.png
var Nsrcel_logo_default = "/build/_assets/Nsrcel_logo-VJNI77YS.png";

// app/routes/aboutus/index.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function HostelListing2() {
  let [infoTabIndex, setInfoTabIndex] = (0, import_react18.useState)(0), params = (0, import_react19.useParams)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
      className: "intro-single",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react17.Grid, {
        px: ["4", "32"],
        templateColumns: "repeat(12, 1fr)",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react17.GridItem, {
          colSpan: [12, 8],
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "title-single-box",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                className: "title-single",
                children: "About us"
              }, void 0, !1, {
                fileName: "app/routes/aboutus/index.tsx",
                lineNumber: 19,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                className: "color-text-a",
                children: "A Pune based start-up founded by Srishti and Samrudhi in February 2022 and pre-incubated by NSRCEL | IIM Bangalore in September 2022."
              }, void 0, !1, {
                fileName: "app/routes/aboutus/index.tsx",
                lineNumber: 20,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "image_aboutus",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                    className: "logo",
                    src: Hostello_final_default,
                    alt: "Hostello logo"
                  }, void 0, !1, {
                    fileName: "app/routes/aboutus/index.tsx",
                    lineNumber: 23,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                    className: "logo",
                    src: Nsrcel_logo_default,
                    alt: "Hostello logo"
                  }, void 0, !1, {
                    fileName: "app/routes/aboutus/index.tsx",
                    lineNumber: 24,
                    columnNumber: 17
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/aboutus/index.tsx",
                lineNumber: 22,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                className: "color-text-a",
                children: "Hostello is a community-driven online space for listing and finding local hostels. We help you find hostels that suit your needs and connect with the hostel. Hostels, on the other hand, can easily fill up and manage their spaces."
              }, void 0, !1, {
                fileName: "app/routes/aboutus/index.tsx",
                lineNumber: 26,
                columnNumber: 15
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/aboutus/index.tsx",
            lineNumber: 18,
            columnNumber: 13
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/aboutus/index.tsx",
          lineNumber: 17,
          columnNumber: 11
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/aboutus/index.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/aboutus/index.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/aboutus/index.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// app/routes/sign-in/$.tsx
var __exports = {};
__export(__exports, {
  default: () => SignInRoute
});
var import_react20 = require("@chakra-ui/react"), import_remix5 = require("@clerk/remix"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function SignInRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react20.Center, {
    height: "100vh",
    p: 10,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix5.SignIn, {
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
var import_react21 = require("@chakra-ui/react"), import_remix6 = require("@clerk/remix"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function SignUpRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react21.Center, {
    height: "100vh",
    p: 10,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix6.SignUp, {
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
var import_react25 = require("@remix-run/react"), import_node = require("@remix-run/node"), import_remix7 = require("@clerk/remix"), import_ssr3 = require("@clerk/remix/ssr.server"), import_react26 = require("@chakra-ui/react");

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
var import_react22 = require("@chakra-ui/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), app = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
  className: "intro hero",
  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react22.Center, {
    h: "100%",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react22.Stack, {
      alignItems: "center",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Wrapper_default, {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react22.Heading, {
              fontSize: "9xl",
              color: "hostelloRed.700",
              children: "Hostello"
            }, void 0, !1, {
              fileName: "app/components/ZeroSlider/ZeroSlider.tsx",
              lineNumber: 19,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react22.Text, {
              fontSize: "4xl",
              color: "hostelloRed.600",
              children: "Hostel finding made easy"
            }, void 0, !1, {
              fileName: "app/components/ZeroSlider/ZeroSlider.tsx",
              lineNumber: 20,
              columnNumber: 21
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/ZeroSlider/ZeroSlider.tsx",
          lineNumber: 18,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react22.Button, {
          backgroundColor: "hostelloRed.500",
          maxWidth: "-webkit-fit-content",
          children: "Explore Now"
        }, void 0, !1, {
          fileName: "app/components/ZeroSlider/ZeroSlider.tsx",
          lineNumber: 24,
          columnNumber: 17
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/ZeroSlider/ZeroSlider.tsx",
      lineNumber: 17,
      columnNumber: 13
    }, this)
  }, void 0, !1, {
    fileName: "app/components/ZeroSlider/ZeroSlider.tsx",
    lineNumber: 16,
    columnNumber: 7
  }, this)
}, void 0, !1, {
  fileName: "app/components/ZeroSlider/ZeroSlider.tsx",
  lineNumber: 15,
  columnNumber: 5
}, this), ZeroSlider_default = app;

// app/components/HostelsList/HostelsList.tsx
var import_react23 = require("@chakra-ui/react"), import_icons = require("@chakra-ui/icons"), import_react24 = require("react"), import_react_router_dom3 = require("react-router-dom");

// app/components/HostelsList/hostels.json
var hostels_default = [
  {
    id: 1,
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
    id: 1,
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
    id: 1,
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
    id: 1,
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
    id: 1,
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
    id: 1,
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
    id: 1,
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
    id: 1,
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
    id: 1,
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
    id: 1,
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
    id: 1,
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
    id: 1,
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
    id: 1,
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
    id: 1,
    city: "Turku",
    country: "Finland",
    superHost: !0,
    title: "Nice 2 room apartment close to everything",
    rating: 4.34,
    maxGuests: 6,
    type: "Entire apartment",
    beds: 3,
    photo: "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1275&q=80"
  },
  {
    id: 1,
    city: "Turku",
    country: "Finland",
    superHost: !1,
    title: "Turku Nordic Home near city center",
    rating: 4.24,
    maxGuests: 5,
    type: "Entire apartment",
    beds: 3,
    photo: "https://images.unsplash.com/photo-1519643381401-22c77e60520e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE3MzYxfQ&auto=format&fit=crop&w=2253&q=80"
  }
];

// app/api/getHostelsByCity.tsx
var import_axios4 = __toESM(require("axios"));
var getHostelsByCity = async (city) => {
  let config = {
    method: "get",
    url: `${BASE_URL}v1/hostel/findall/${city}`,
    headers: {}
  };
  try {
    return (await (0, import_axios4.default)(config)).data;
  } catch (err) {
    throw console.log(err), err;
  }
}, getHostelsByCity_default = getHostelsByCity;

// app/api/getCities.tsx
var import_axios5 = __toESM(require("axios"));
var getCities = async () => {
  let config = {
    method: "get",
    url: `${BASE_URL}v1/hostel/city`,
    headers: {}
  };
  try {
    return (await (0, import_axios5.default)(config)).data;
  } catch (err) {
    throw console.log(err), err;
  }
}, getCities_default = getCities;

// app/components/HostelsList/HostelsList.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), HostelsList = () => {
  let [location, setLocation] = (0, import_react24.useState)(null), [guests, setGuests] = (0, import_react24.useState)(0), [hostels, setHostels] = (0, import_react24.useState)([]), navigate = (0, import_react_router_dom3.useNavigate)(), [cities, setCities] = (0, import_react24.useState)([]), [city, setCity] = (0, import_react24.useState)("");
  (0, import_react24.useEffect)(() => {
    (async () => {
      let cities2 = await getCities_default();
      setCities(cities2.city);
    })();
  }, []), (0, import_react24.useEffect)(() => {
    (async () => {
      let hostels2 = await getHostelsByCity_default(city);
      console.log({ hostels: hostels2 }), setHostels(hostels2 ?? []);
    })();
  }, [city]);
  let filteredStays = hostels, staysList = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react23.Stack, {
    width: "100%",
    paddingX: "60px",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react23.Grid, {
      templateColumns: "repeat(12, 1fr)",
      gap: 8,
      paddingY: 2,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react23.GridItem, {
          colSpan: 12,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react23.Box, {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react23.Text, {
                variant: "h5",
                as: "h2",
                sx: { fontWeight: "bold" },
                children: "All stays"
              }, void 0, !1, {
                fileName: "app/components/HostelsList/HostelsList.tsx",
                lineNumber: 40,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react23.Text, {
                variant: "body2",
                as: "span",
                children: filteredStays.length + " stay" + (filteredStays.length !== 1 ? "s" : "")
              }, void 0, !1, {
                fileName: "app/components/HostelsList/HostelsList.tsx",
                lineNumber: 44,
                columnNumber: 17
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/HostelsList/HostelsList.tsx",
            lineNumber: 39,
            columnNumber: 15
          }, this)
        }, void 0, !1, {
          fileName: "app/components/HostelsList/HostelsList.tsx",
          lineNumber: 38,
          columnNumber: 13
        }, this),
        filteredStays.map((stay, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react23.GridItem, {
          colSpan: [12, 6, 4],
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react23.Card, {
            sx: { border: 0, boxShadow: 0, background: "unset", height: "100%" },
            onClick: () => navigate(`/hostel/${stay.id}`),
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react23.CardHeader, {
                padding: 0,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                  src: hostels_default[index % 15].photo,
                  alt: stay.hostelName,
                  width: "100%",
                  style: { borderRadius: "16px", aspectRatio: "394/267", objectFit: "cover" }
                }, void 0, !1, {
                  fileName: "app/components/HostelsList/HostelsList.tsx",
                  lineNumber: 54,
                  columnNumber: 23
                }, this)
              }, void 0, !1, {
                fileName: "app/components/HostelsList/HostelsList.tsx",
                lineNumber: 53,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react23.CardBody, {
                sx: { padding: 0, paddingTop: "0.5em" },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react23.Box, {
                    display: "flex",
                    justifyContent: "space-between",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react23.Box, {
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react23.Button, {
                            variant: "outlined",
                            size: "small",
                            sx: { fontSize: "0.7em", borderRadius: "20px", lineHeight: 1.3, textTransform: "uppercase", fontWeight: "bold", marginRight: "1em" },
                            children: [
                              "\u20B9 ",
                              stay.price
                            ]
                          }, void 0, !0, {
                            fileName: "app/components/HostelsList/HostelsList.tsx",
                            lineNumber: 59,
                            columnNumber: 27
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react23.Text, {
                            variant: "body2",
                            as: "span",
                            sx: { opacity: 0.7 },
                            children: [
                              stay.numberofrooms * stay.occupancyperroom,
                              " beds"
                            ]
                          }, void 0, !0, {
                            fileName: "app/components/HostelsList/HostelsList.tsx",
                            lineNumber: 62,
                            columnNumber: 27
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/components/HostelsList/HostelsList.tsx",
                        lineNumber: 58,
                        columnNumber: 25
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react23.Stack, {
                        direction: "row",
                        alignItems: "center",
                        gap: 0.5,
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_icons.StarIcon, {
                            color: "secondary"
                          }, void 0, !1, {
                            fileName: "app/components/HostelsList/HostelsList.tsx",
                            lineNumber: 67,
                            columnNumber: 27
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react23.Text, {
                            variant: "body2",
                            as: "span",
                            children: hostels_default[index].rating
                          }, void 0, !1, {
                            fileName: "app/components/HostelsList/HostelsList.tsx",
                            lineNumber: 68,
                            columnNumber: 27
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/components/HostelsList/HostelsList.tsx",
                        lineNumber: 66,
                        columnNumber: 25
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/components/HostelsList/HostelsList.tsx",
                    lineNumber: 57,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react23.Text, {
                    variant: "h6",
                    as: "p",
                    children: stay.hostelName
                  }, void 0, !1, {
                    fileName: "app/components/HostelsList/HostelsList.tsx",
                    lineNumber: 74,
                    columnNumber: 23
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/HostelsList/HostelsList.tsx",
                lineNumber: 56,
                columnNumber: 21
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/HostelsList/HostelsList.tsx",
            lineNumber: 52,
            columnNumber: 19
          }, this)
        }, void 0, !1, {
          fileName: "app/components/HostelsList/HostelsList.tsx",
          lineNumber: 51,
          columnNumber: 17
        }, this))
      ]
    }, void 0, !0, {
      fileName: "app/components/HostelsList/HostelsList.tsx",
      lineNumber: 37,
      columnNumber: 11
    }, this)
  }, void 0, !1, {
    fileName: "app/components/HostelsList/HostelsList.tsx",
    lineNumber: 36,
    columnNumber: 9
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react23.Heading, {
        as: "h2",
        size: "3xl",
        children: "Cities"
      }, void 0, !1, {
        fileName: "app/components/HostelsList/HostelsList.tsx",
        lineNumber: 87,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react23.Tabs, {
        onChange: (index) => setCity(cities[index]),
        colorScheme: "gray",
        bg: "darkgray",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react23.TabList, {
          children: cities.map((city2) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react23.Tab, {
            children: city2.toUpperCase()
          }, void 0, !1, {
            fileName: "app/components/HostelsList/HostelsList.tsx",
            lineNumber: 94,
            columnNumber: 15
          }, this))
        }, void 0, !1, {
          fileName: "app/components/HostelsList/HostelsList.tsx",
          lineNumber: 91,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/HostelsList/HostelsList.tsx",
        lineNumber: 90,
        columnNumber: 7
      }, this),
      staysList
    ]
  }, void 0, !0, {
    fileName: "app/components/HostelsList/HostelsList.tsx",
    lineNumber: 86,
    columnNumber: 5
  }, this);
}, HostelsList_default = HostelsList;

// app/assets/icons/whatsApp.png
var whatsApp_default = "/build/_assets/whatsApp-JRM5L3BQ.png";

// app/components/MessageButton/index.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), MessageButton = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
  href: "#",
  className: "float",
  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
    src: whatsApp_default,
    className: "my-float",
    height: "40px",
    width: "40px"
  }, void 0, !1, {
    fileName: "app/components/MessageButton/index.tsx",
    lineNumber: 5,
    columnNumber: 7
  }, this)
}, void 0, !1, {
  fileName: "app/components/MessageButton/index.tsx",
  lineNumber: 4,
  columnNumber: 5
}, this), MessageButton_default = MessageButton;

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
  let { signOut } = (0, import_remix7.useAuth)(), data = (0, import_react25.useLoaderData)(), headingSize = (0, import_react26.useBreakpointValue)({ base: "lg", sm: "2xl", lg: "4xl" });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react26.Stack, {
        justify: "center",
        textAlign: "center",
        flex: 1,
        color: "white",
        gap: 20,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ZeroSlider_default, {}, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 72,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HostelsList_default, {}, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 73,
            columnNumber: 17
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 65,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MessageButton_default, {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 75,
        columnNumber: 13
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 64,
    columnNumber: 9
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "4e38676a", entry: { module: "/build/entry.client-QTFH6SF3.js", imports: ["/build/_shared/chunk-JZJEIDHO.js", "/build/_shared/chunk-WWWLMXVS.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-TKNW67CL.js", imports: ["/build/_shared/chunk-HOXOEDZ7.js", "/build/_shared/chunk-JP5MKJIL.js", "/build/_shared/chunk-4NGDMIWA.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/aboutus/index": { id: "routes/aboutus/index", parentId: "root", path: "aboutus", index: !0, caseSensitive: void 0, module: "/build/routes/aboutus/index-YDL5VDME.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/hostel/$hostelId": { id: "routes/hostel/$hostelId", parentId: "root", path: "hostel/:hostelId", index: void 0, caseSensitive: void 0, module: "/build/routes/hostel/$hostelId-7QRWJVLP.js", imports: ["/build/_shared/chunk-ODED3MLH.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/hostel/list/index": { id: "routes/hostel/list/index", parentId: "root", path: "hostel/list", index: !0, caseSensitive: void 0, module: "/build/routes/hostel/list/index-WE5C2ZCW.js", imports: ["/build/_shared/chunk-ODED3MLH.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-WYS6YK7K.js", imports: ["/build/_shared/chunk-ODED3MLH.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-in/$": { id: "routes/sign-in/$", parentId: "root", path: "sign-in/*", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-in/$-S6QZKH7K.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-up/$": { id: "routes/sign-up/$", parentId: "root", path: "sign-up/*", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-up/$-QBYLHKQO.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-4E38676A.js" };

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
  "routes/hostel/list/index": {
    id: "routes/hostel/list/index",
    parentId: "root",
    path: "hostel/list",
    index: !0,
    caseSensitive: void 0,
    module: list_exports
  },
  "routes/hostel/$hostelId": {
    id: "routes/hostel/$hostelId",
    parentId: "root",
    path: "hostel/:hostelId",
    index: void 0,
    caseSensitive: void 0,
    module: hostelId_exports
  },
  "routes/aboutus/index": {
    id: "routes/aboutus/index",
    parentId: "root",
    path: "aboutus",
    index: !0,
    caseSensitive: void 0,
    module: aboutus_exports
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
