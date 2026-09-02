function PopularArticle({ id, title, description, imageUrl }) {
  return (
    <div className="popular-article">
      <figure>
        <img src={imageUrl} alt={title} />
      </figure>

      <h3>{title}</h3>
      <p>{description}</p>
      <p className="meta">{id}</p>
    </div>
  );
}

export default PopularArticle;
