/*
    FILE: News.js
    작성자: 20212143 김채희
    23.11.26
*/
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/News.css";
import { Link } from "react-router-dom";

const LocalNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get("/data/news-data/newsdata.json")
      .then((response) => setNews(response.data.articles))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          {news &&
            news.map((article, index) => (
              <div key={index} className="col-md-4 mb-4">
                <Link
                  to={`/ArticlePage/${article.source.id}`}
                  className="text-decoration-none"
                >
                  <div className="card">
                    <img
                      className="card-img-top thumbnail"
                      src={article.urlToImage}
                      alt={article.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{article.title}</h5>
                      <p className="card-text">{article.author}</p>
                      <p className="card-date">{article.publishedAt}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default LocalNews;
