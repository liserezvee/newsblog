import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("/public/categories.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategories(data);
      });
  }, []);
  return (
    <div className="space-y-6 text-center">
      <h2 className="text-3xl">All Categories </h2>
      {categories.map((category) => (
        <NavLink
          className="block ml-4 text-left text-xl font-bold"
          key={category.id}
          to={`/category/${category.id}`}
        >
          {category.name}
        </NavLink>
      ))}
    </div>
  );
};

export default LeftSideNav;
