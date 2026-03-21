import { jsx } from "react/jsx-runtime";
import { RouterProvider } from "react-router";
import { router } from "./routes";
function App() {
  return /* @__PURE__ */ jsx(RouterProvider, { router });
}
export {
  App as default
};
