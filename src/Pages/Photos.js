
import React, { useEffect, useState } from "react";
import axios from "axios";
import '../Styles/Photos.css';
import { Link } from "react-router-dom";

const LocalPhotos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get("/data/photos-data/photosdata.json")
      .then((response) => setPhotos(response.data.articles))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
    <div className="container">
      <div className="row">
        {photos &&
          photos.map((article, index) => (
            <div key={index} className="col-md-4 mb-4">
              <Link to={`/PhotosPage/${article.source.id}`} className="text-decoration-none">
                <div className="">
                  <img className="thumbnail" src={article.urlToImage} alt={article.title} />
                  <h5 className="">{article.title}</h5>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
    </>
  );
}

export default LocalPhotos;