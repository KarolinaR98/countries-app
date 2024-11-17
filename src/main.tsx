import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { HashRouter } from "react-router-dom";
import { CountriesProvider } from "./context/countriesContext.tsx";
import { DarkModeProvider } from "./context/darkModeContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
    <DarkModeProvider>
      <CountriesProvider>
      <App />
    </CountriesProvider>   
    </DarkModeProvider>       
    </HashRouter>
  </StrictMode>
);
