import NewArticle from "./NewArticle";
import newArticleData from "../data/new-articles.json";

function NewsSection() {
  return (
    <aside className="news-section">
      <header>
        <h2>New</h2>
      </header>
      {newArticleData.map((article, index) => (
        <NewArticle
          key={index}
          title={article.title}
          description={article.description}
        />
      ))}
    </aside>
  );
}

export default NewsSection;
