import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css"; // o tu tailwind import
import "./index.css"; // o tu tailwind import
import { ThemeProvider } from "./components/ui/theme-provider"; // si usás dark/light themes

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
