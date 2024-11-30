import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ aNews }) => {
  const { title, thumbnail, image, author, details, id } = aNews;
  return (
    <div className="card card-compact bg-base-100 shadow-xl mb-16 border-b-2">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        {details.length > 200 ? (
          <p>
            {details.slice(0, 150)}
            <Link to={`/news/${id}`} className="text-blue-400 font-bold"> Read More...</Link>
          </p>
        ) : (
          <p>{details}</p>
        )}

        <div className="card-actions justify-end">
          <button className="btn btn-primary">{author}</button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
