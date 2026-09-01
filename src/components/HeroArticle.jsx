import React from "react";
import heroArticleData from "../data/hero-data.json";

function HeroArticle() {
  return (
    <main>
      <figure>
        <img src={heroArticleData.image} alt="Hero Article" />
      </figure>
      <header>
        <h1>{heroArticleData.title}</h1>
      </header>
      <p>{heroArticleData.description}</p>
      <button>Read More</button>
    </main>
  );
}

export default HeroArticle;
