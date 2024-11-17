import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { CountriesProvider } from "./context/countriesContext.tsx";
import { DarkModeProvider } from "./context/darkModeContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
    <DarkModeProvider>
      <CountriesProvider>
      <App />
    </CountriesProvider>   
    </DarkModeProvider>       
    </BrowserRouter>
  </StrictMode>
);
