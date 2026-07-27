import React from "react";
import "./Navbar.css";
import menu_icon from "../../assets-yt clone/menu.png";
import logo from "../../assets-yt clone/logo.png";
import search_icon from "../../assets-yt clone/search.png";
import upload_icon from "../../assets-yt clone/upload.png";
import more_icon from "../../assets-yt clone/more.png";
import notification_icon from "../../assets-yt clone/notification.png";
import profile_icon from "../../assets-yt clone/jack.png";

const Navbar = ({ setSidebar }) => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img
          className="menu-icon"
          onClick={() => setSidebar((prev) => (prev === false ? true : false))}
          src={menu_icon}
          alt=""
        />
        <img className="logo" src={logo} alt="" />
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <img src={search_icon} alt="" />
        </div>
      </div>

      <div className="nav-right flex-div">
        <img src={upload_icon} alt="" />
        <img src={more_icon} alt="" />
        <img src={notification_icon} alt="" />
        <img src={profile_icon} className="user_icon" alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
