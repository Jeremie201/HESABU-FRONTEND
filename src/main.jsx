import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import App from "./App";
import "./index.css";
import StructuredData from "./components/StructuredData";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <HelmetProvider>

      <StructuredData />

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
        }}
      />

      <App />

    </HelmetProvider>
  </React.StrictMode>
);