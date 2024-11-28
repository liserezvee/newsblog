import React from "react";
import logo from "../../../assets/10188588.jpg";
import moment from "moment";
const Header = () => {
  return (
    <div className="text-center justify-items-center">
      <img className="w-3/5 h-11 " src={logo} alt="" />
      <p>Journalism Without Fear of Favour</p>
      <p className="text-xl">
        {moment().format("dddd, MMM Do YYYY, h:mm:ss a")}{" "}
      </p>
    </div>
  );
};

export default Header;
