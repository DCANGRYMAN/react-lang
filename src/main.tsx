import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./i18n";

import { Home } from "./pages/Home/Home";
import { ArtificialIntelligence } from "./pages/ArtificialIntelligence";
import { CyberSecurity } from "./pages/CyberSecurity";
import { CloudComputing } from "./pages/CloudComputing";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <nav style={{ padding: "1rem", background: "#f5f5f5" }}>
        <Link to="/">🏠 Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai" element={<ArtificialIntelligence />} />
        <Route path="/cyber" element={<CyberSecurity />} />
        <Route path="/cloud" element={<CloudComputing />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
