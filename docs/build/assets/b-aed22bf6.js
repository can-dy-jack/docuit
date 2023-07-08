import { r as reactExports, a as jsxs, j as jsx } from "./client-entry-477073e5.js";
function B() {
  const [count, set] = reactExports.useState(0);
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsx("p", {
      children: count
    }), /* @__PURE__ */ jsx("button", {
      onClick: () => set(count + 1),
      children: "count"
    })]
  });
}
export {
  B as default
};
