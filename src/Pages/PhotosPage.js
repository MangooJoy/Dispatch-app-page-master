import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


const PhotosPage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    axios.get("/data/photos-data/photosdata.json")
      .then((response) => {
        const foundArticle = response.data.articles.find(article => article.source.id === parseInt(id));
        foundArticle.content = foundArticle.content.replace(/\\n/g, '\n');
        setArticle(foundArticle);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className="article-container">
      <h1>{article.title}</h1>
      <p>{article.publishedAt}</p>
      <hr/>
      <img src={article.urlToImage}/>
      <p>{article.content && article.content.split('\n').map((paragraph, index) => (
        <span key={index}>
          {paragraph}
          <br />
        </span>
      ))}</p>
    </div>
  );
}

export default PhotosPage;