import React from "react";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import Footer from "../Shared/Footer/Footer";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const Home = () => {
  const news = useLoaderData()
  console.log(news);
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="lg:col-span-2">
          {
            news.map(aNews => <NewsCard key={aNews.id} aNews={aNews}></NewsCard>)
          }
        </div>
        <div className="">
          <RightSideNav></RightSideNav>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
