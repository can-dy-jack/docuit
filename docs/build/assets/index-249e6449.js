import { j as jsx, a as jsxs, F as Fragment } from "./client-entry-477073e5.js";
import B from "./b-aed22bf6.js";
const frontmatter = {
  "title": "docuit"
};
const toc = [{
  "id": "autolink-1",
  "text": "Autolink",
  "depth": 2
}, {
  "id": "代码高亮-1",
  "text": "代码高亮",
  "depth": 2
}, {
  "id": "footer-1",
  "text": "Footer",
  "depth": 2
}];
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    h2: "h2",
    p: "p",
    div: "div",
    span: "span",
    pre: "pre",
    code: "code",
    del: "del"
  }, props.components);
  return jsxs(Fragment, {
    children: [jsx(B, {}), "\n", jsxs(_components.h1, {
      id: "gfm",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#gfm",
        children: "#"
      }), "GFM"]
    }), "\n", jsxs(_components.h2, {
      id: "autolink",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#autolink",
        children: "#"
      }), "Autolink"]
    }), "\n", jsxs(_components.p, {
      children: ["literals ", jsx(_components.a, {
        href: "http://www.example.com",
        children: "www.example.com"
      }), ", ", jsx(_components.a, {
        href: "https://example.com",
        children: "https://example.com"
      }), ", and ", jsx(_components.a, {
        href: "mailto:contact@example.com",
        children: "contact@example.com"
      }), "."]
    }), "\n", jsxs(_components.h2, {
      id: "代码高亮",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#代码高亮",
        children: "#"
      }), "代码高亮"]
    }), "\n", jsxs(_components.div, {
      className: "language-js",
      children: [jsx(_components.span, {
        className: "lang",
        children: "js"
      }), jsx(_components.pre, {
        className: "shiki light-plus",
        style: {
          backgroundColor: "#FFFFFF"
        },
        tabIndex: "0",
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#AF00DB"
              },
              children: "export"
            }), jsx(_components.span, {
              style: {
                color: "#000000"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#0000FF"
              },
              children: "async"
            }), jsx(_components.span, {
              style: {
                color: "#000000"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#0000FF"
              },
              children: "function"
            }), jsx(_components.span, {
              style: {
                color: "#000000"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#795E26"
              },
              children: "build"
            }), jsx(_components.span, {
              style: {
                color: "#000000"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#001080"
              },
              children: "root"
            }), jsx(_components.span, {
              style: {
                color: "#000000"
              },
              children: ": "
            }), jsx(_components.span, {
              style: {
                color: "#267F99"
              },
              children: "string"
            }), jsx(_components.span, {
              style: {
                color: "#000000"
              },
              children: " = "
            }), jsx(_components.span, {
              style: {
                color: "#001080"
              },
              children: "process"
            }), jsx(_components.span, {
              style: {
                color: "#000000"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#795E26"
              },
              children: "cwd"
            }), jsx(_components.span, {
              style: {
                color: "#000000"
              },
              children: "(), "
            }), jsx(_components.span, {
              style: {
                color: "#001080"
              },
              children: "config"
            }), jsx(_components.span, {
              style: {
                color: "#000000"
              },
              children: ": "
            }), jsx(_components.span, {
              style: {
                color: "#267F99"
              },
              children: "SiteConfig"
            }), jsx(_components.span, {
              style: {
                color: "#000000"
              },
              children: ") {"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#000000"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#008000"
              },
              children: "// 1. bundle - client 端 + server 端"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#000000"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#0000FF"
              },
              children: "const"
            }), jsx(_components.span, {
              style: {
                color: "#000000"
              },
              children: " ["
            }), jsx(_components.span, {
              style: {
                color: "#0070C1"
              },
              children: "clientBundle"
            }), jsx(_components.span, {
              style: {
                color: "#000000"
              },
              children: "] = "
            }), jsx(_components.span, {
              style: {
                color: "#AF00DB"
              },
              children: "await"
            }), jsx(_components.span, {
              style: {
                color: "#000000"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#795E26"
              },
              children: "bundle"
            }), jsx(_components.span, {
              style: {
                color: "#000000"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#001080"
              },
              children: "root"
            }), jsx(_components.span, {
              style: {
                color: "#000000"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#001080"
              },
              children: "config"
            }), jsx(_components.span, {
              style: {
                color: "#000000"
              },
              children: ");"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#000000"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#008000"
              },
              children: "// 2. 引入 server-entry 模块"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#000000"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#0000FF"
              },
              children: "const"
            }), jsx(_components.span, {
              style: {
                color: "#000000"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#0070C1"
              },
              children: "serverEntryPath"
            }), jsx(_components.span, {
              style: {
                color: "#000000"
              },
              children: " = "
            }), jsx(_components.span, {
              style: {
                color: "#001080"
              },
              children: "path"
            }), jsx(_components.span, {
              style: {
                color: "#000000"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#795E26"
              },
              children: "join"
            }), jsx(_components.span, {
              style: {
                color: "#000000"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#001080"
              },
              children: "root"
            }), jsx(_components.span, {
              style: {
                color: "#000000"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#A31515"
              },
              children: "'.temp'"
            }), jsx(_components.span, {
              style: {
                color: "#000000"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#A31515"
              },
              children: "'ssr-entry.js'"
            }), jsx(_components.span, {
              style: {
                color: "#000000"
              },
              children: ");"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#000000"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#001080"
              },
              children: "console"
            }), jsx(_components.span, {
              style: {
                color: "#000000"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#795E26"
              },
              children: "log"
            }), jsx(_components.span, {
              style: {
                color: "#000000"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#001080"
              },
              children: "serverEntryPath"
            }), jsx(_components.span, {
              style: {
                color: "#000000"
              },
              children: ");"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#000000"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#0000FF"
              },
              children: "const"
            }), jsx(_components.span, {
              style: {
                color: "#000000"
              },
              children: " { "
            }), jsx(_components.span, {
              style: {
                color: "#0070C1"
              },
              children: "render"
            }), jsx(_components.span, {
              style: {
                color: "#000000"
              },
              children: " } = "
            }), jsx(_components.span, {
              style: {
                color: "#AF00DB"
              },
              children: "await"
            }), jsx(_components.span, {
              style: {
                color: "#000000"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#0000FF"
              },
              children: "import"
            }), jsx(_components.span, {
              style: {
                color: "#000000"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#A31515"
              },
              children: "'file://'"
            }), jsx(_components.span, {
              style: {
                color: "#000000"
              },
              children: " + "
            }), jsx(_components.span, {
              style: {
                color: "#001080"
              },
              children: "serverEntryPath"
            }), jsx(_components.span, {
              style: {
                color: "#000000"
              },
              children: "); "
            }), jsx(_components.span, {
              style: {
                color: "#008000"
              },
              children: "// 'file://'   ???"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#000000"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#008000"
              },
              children: "// 3. 服务端渲染，产出 HTML"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#000000"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#AF00DB"
              },
              children: "try"
            }), jsx(_components.span, {
              style: {
                color: "#000000"
              },
              children: " {"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#000000"
              },
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#AF00DB"
              },
              children: "await"
            }), jsx(_components.span, {
              style: {
                color: "#000000"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#795E26"
              },
              children: "renderPage"
            }), jsx(_components.span, {
              style: {
                color: "#000000"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#001080"
              },
              children: "render"
            }), jsx(_components.span, {
              style: {
                color: "#000000"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#001080"
              },
              children: "root"
            }), jsx(_components.span, {
              style: {
                color: "#000000"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#001080"
              },
              children: "clientBundle"
            }), jsx(_components.span, {
              style: {
                color: "#000000"
              },
              children: ");"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#000000"
              },
              children: "  } "
            }), jsx(_components.span, {
              style: {
                color: "#AF00DB"
              },
              children: "catch"
            }), jsx(_components.span, {
              style: {
                color: "#000000"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#001080"
              },
              children: "e"
            }), jsx(_components.span, {
              style: {
                color: "#000000"
              },
              children: ") {"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#000000"
              },
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#001080"
              },
              children: "console"
            }), jsx(_components.span, {
              style: {
                color: "#000000"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#795E26"
              },
              children: "log"
            }), jsx(_components.span, {
              style: {
                color: "#000000"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#A31515"
              },
              children: "'Render page error."
            }), jsx(_components.span, {
              style: {
                color: "#EE0000"
              },
              children: "\\n"
            }), jsx(_components.span, {
              style: {
                color: "#A31515"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#000000"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#001080"
              },
              children: "e"
            }), jsx(_components.span, {
              style: {
                color: "#000000"
              },
              children: ");"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#000000"
              },
              children: "  }"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#000000"
              },
              children: "}"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.h2, {
      id: "footer",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#footer",
        children: "#"
      }), "Footer"]
    }), "\n", jsx(_components.p, {
      children: jsx(_components.del, {
        children: "删除"
      })
    })]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, Object.assign({}, props, {
    children: jsx(_createMdxContent, props)
  })) : _createMdxContent(props);
}
export {
  MDXContent as default,
  frontmatter,
  toc
};
