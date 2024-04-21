import React, { useState, useEffect } from 'react';
import { fetchArticles } from '../utils/fetchArticles';  // 正しいパスに注意してください
import 'bootstrap/dist/css/bootstrap.min.css';

const Article = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const initFetch = async () => {
      const articlesData = await fetchArticles();
      setArticles(articlesData);
    };

    initFetch();
  }, []);

  return (
    <div className="container">
      <h1>Articles</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <tr key={article.id}>
              <td>{article.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Article;
