import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { ConvexReactClient } from "convex/react";
import App from "./App.tsx";
import "./index.css";
import { convexUrl } from "@/lib/env";

const convexClient = convexUrl ? new ConvexReactClient(convexUrl) : null;

const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    {convexClient ? (
      <ConvexAuthProvider client={convexClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ConvexAuthProvider>
    ) : (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )}
  </StrictMode>
);
