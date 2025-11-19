import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LandingPage } from "./pages/LandingPage";
import { Hero } from "./components/Hero";
import { SolutionsGrid } from "./components/solutionsGrid";
import { FeaturesShowcase } from "./components/FeaturesShowcase";
import { TeamSection } from "./components/TeamSection";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/solutions" element={<SolutionsGrid />} />
        <Route path="/features" element={<FeaturesShowcase />} />
        <Route path="/team" element={<TeamSection />} />
        <Route path="/contact" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
}
