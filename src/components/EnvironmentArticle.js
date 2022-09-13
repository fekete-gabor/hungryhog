import useMediaQuery from "../utils/mediaQuery";

const EnvironmentArticle = ({ props }) => {
  const mediaQuery = useMediaQuery("(min-width: 820px)");
  const { article, i } = props;
  const { title, desc } = article.attributes;
  const img = article?.attributes?.img?.data?.attributes?.url;

  if (i % 2 === 0 && mediaQuery) {
    return (
      <article className="env-article">
        <header
          className={`${
            mediaQuery ? "odd-img img-container" : "img-container"
          }`}
        >
          <img src={img} alt={title} />
          <div className="env-mask"></div>
        </header>
        <footer className={`${mediaQuery ? "odd-desc desc" : "desc"}`}>
          <h3>{title}</h3>
          <p>{desc}</p>
        </footer>
      </article>
    );
  } else {
    return (
      <article className="env-article">
        <header className={`${mediaQuery ? "even-desc desc" : "desc"}`}>
          <h3>{title}</h3>
          <p>{desc}</p>
        </header>
        <footer
          className={`${
            mediaQuery ? "even-img img-container" : "img-container"
          }`}
        >
          <img src={img} alt={title} />
          <div className="env-mask"></div>
        </footer>
      </article>
    );
  }
};

export default EnvironmentArticle;
