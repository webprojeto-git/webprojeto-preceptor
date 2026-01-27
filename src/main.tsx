import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// Custom domain serves from root "/", GitHub Pages subpath needs "/webprojeto-preceptor"
const isCustomDomain = typeof window !== "undefined" && 
  !window.location.hostname.includes("github.io") &&
  !window.location.hostname.includes("localhost") &&
  !window.location.hostname.includes("lovable.app");

const basename = isCustomDomain ? "/" : "/webprojeto-preceptor";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename={basename}>
    <App />
  </BrowserRouter>
);
