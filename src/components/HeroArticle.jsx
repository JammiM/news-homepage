import heroArticleData from "../data/hero-data.json";

function HeroArticle() {
  const heroImageLgUrl = new URL(
    `/src/assets/images/${heroArticleData.image}`,
    import.meta.url,
  ).href;

  return (
    <main>
      <figure>
        <img src={heroImageLgUrl} alt="Hero Article" />
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
