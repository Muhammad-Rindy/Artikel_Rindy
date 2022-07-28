import { useEffect, useState } from "react";
import axios from "axios";

export default function Blog() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    axios
      .get(`https://api.spaceflightnewsapi.net/v3/articles`)
      .then((response) => {
        document.title = "Blog";
        setArticles(response.data);
        setLoading(false);
      });
  }, []);

  return (
    <section className="section">
      <h1 className="section-title">Blog Page</h1>
      <p className="section-home">
        The following is the result of the article from the API
      </p>

      {loading ? (
        <i>Loading articles ...</i>
      ) : (
        <div className="articles">
          {articles.map(function (article) {
            return (
              <div key={article.id}>
                <h1 className="section-title">{article.title}</h1>
                <h1 className="section-title">{article.newsSite}</h1>
                <img src={article.imageUrl} alt=" " className="articles-img" />
                <article className="articles">{article.title}</article>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
