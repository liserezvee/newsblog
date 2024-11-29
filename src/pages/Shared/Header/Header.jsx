import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
const Header = () => {
  return (
    <div className="text-center">
      <img className="mx-auto " src={logo} alt="" />
      <p>Journalism Without Fear of Favour</p>
      <p className="text-xl">
        {moment().format("dddd, MMM Do YYYY, h:mm:ss a")}{" "}
      </p>
    </div>
  );
};

export default Header;
