import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const AllNews = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("/public/fakeNews.json")
      .then((res) => res.json())
      .then((data) => {
        setNews(data);
      });
  }, []);
  return (
    <div className="w-full p-10">
      {news.map((news) => (
        <NavLink  key={news.id}>
          <h2 className="mt-5">{news.name}</h2>
          <img className="w-full h-52" src={news.image} alt="" />
          <p>{news.description}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default AllNews;
