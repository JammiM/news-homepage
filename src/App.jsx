import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

import Navbar from "./components/Navbar";
import HeroArticle from "./components/HeroArticle";
import NewsSection from "./components/NewsSection";
import PopularArticle from "./components/PopularArticle";
import popularArticleData from "./data/popular-articles.json";

import "./js/axeTestingHandler";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="main-content">
        <Navbar />

        <HeroArticle />

        <NewsSection />

        {popularArticleData.map((article) => (
          <PopularArticle
            key={article.id}
            id={article.id}
            title={article.title}
            description={article.description}
            imageUrl={article.image}
          />
        ))}
      </main>
    </>
  );
}

export default App;
