import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TrendingPage from "./pages/TrendingPage";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import NavBar from "./component/Navbar";
import SpacePage from "./pages/SpacePage";
import StartupsPage from "./pages/StartupsPage";
import CryptoPage from "./pages/CryptoPage";
import AIPage from "./pages/AIPage";
import PodcastsAndInterviewsPage from "./pages/PodcastsAndInterviewsPage";
import ArticlePage from "./pages/ArticlePage";
import Footer from "./component/Footer";

function App() {
  return (
    <div
      className="App bg-[#F7F7F7] min-h-screen font-sans
    "
    >
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/trending" element={<TrendingPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/space" element={<SpacePage />} />
          <Route path="/startups" element={<StartupsPage />} />
          <Route path="/crypto" element={<CryptoPage />} />
          <Route path="/ai" element={<AIPage />} />
          <Route path="/article/:articleId" element={<ArticlePage />} />

          <Route
            path="/podcasts-and-interviews"
            element={<PodcastsAndInterviewsPage />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
