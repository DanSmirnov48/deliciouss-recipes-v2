import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./globals.css";
import Footer from "@/components/Footer";
import { SiteHeader } from "./components/site-header.tsx";
import { BrowserRouter } from "react-router-dom";
import { QueryProvider } from "./lib/react-query/QueryProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryProvider>
      <BrowserRouter>
        <SiteHeader />
        <App />
        {/* <Footer/> */}
      </BrowserRouter>
    </QueryProvider>
  </React.StrictMode>
);
