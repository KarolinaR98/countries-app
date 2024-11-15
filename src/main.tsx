import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { CountriesProvider } from "./countriesContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
    <CountriesProvider>
      <App />
    </CountriesProvider>      
    </BrowserRouter>
  </StrictMode>
);
