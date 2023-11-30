import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const LocalVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/data/videos-data/videosdata.json");
        setVideos(response.data.articles);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          {videos &&
            videos.map((article, index) => (
              <div key={index} className="col-md-4 mb-4">
                <Link to={`/VideoPage/${article.source.id}`}>
                  <div className="card">
                    <img
                      className="card-img-top thumbnail"
                      src={article.urlToImage}
                      alt={article.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{article.title}</h5>
                      <p className="card-text">{article.author}</p>
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

export default LocalVideos;
