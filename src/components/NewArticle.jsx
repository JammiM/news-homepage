function NewArticle({ title, description }) {
  return (
    <article>
      <header>
        <h3>{title}</h3>
      </header>
      <p>{description}</p>
    </article>
  );
}

export default NewArticle;
