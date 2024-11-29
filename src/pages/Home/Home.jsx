import React from "react";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import AllNews from "./AllNews";
import Footer from "../Shared/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="border ">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="lg:col-span-2 border"><AllNews></AllNews></div>
        <div className="border">
          <RightSideNav></RightSideNav>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
