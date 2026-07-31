import React from "react";
import "./Sidebar.css";
import home from "../../assets-yt clone/home.png";
import game_icon from "../../assets-yt clone/game_icon.png";
import automobiles from "../../assets-yt clone/automobiles.png";
import sports from "../../assets-yt clone/sports.png";
import entertainment from "../../assets-yt clone/entertainment.png";
import tech from "../../assets-yt clone/tech.png";
import music from "../../assets-yt clone/music.png";
import blogs from "../../assets-yt clone/blogs.png";
import news from "../../assets-yt clone/news.png";
import jack from "../../assets-yt clone/jack.png";
import simon from "../../assets-yt clone/simon.png";
import tom from "../../assets-yt clone/tom.png";
import megan from "../../assets-yt clone/megan.png";
import cameron from "../../assets-yt clone/cameron.png";

const Sidebar = ({ sidebar, category, setCategory }) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="shortcut-links">
        <div className="side-link" onClick={() => setCategory(0)}>
          <img src={home} alt="" />
          <p>Home</p>
        </div>
        <div className="side-link" onClick={() => setCategory(0)}>
          <img src={game_icon} alt="" />
          <p>Gaming</p>
        </div>
        <div className="side-link" onClick={() => setCategory(0)}>
          <img src={automobiles} alt="" />
          <p>Automobiles</p>
        </div>
        <div className="side-link" onClick={() => setCategory(0)}>
          <img src={sports} alt="" />
          <p>Sports</p>
        </div>
        <div className="side-link" onClick={() => setCategory(0)}>
          <img src={entertainment} alt="" />
          <p>Entertainment</p>
        </div>
        <div className="side-link" onClick={() => setCategory(0)}>
          <img src={tech} alt="" />
          <p>Technology</p>
        </div>
        <div className="side-link" onClick={() => setCategory(0)}>
          <img src={music} alt="" />
          <p>Music</p>
        </div>
        <div className="side-link" onClick={() => setCategory(0)}>
          <img src={blogs} alt="" />
          <p>Blogs</p>
        </div>
        <div className="side-link" onClick={() => setCategory(0)}>
          <img src={news} alt="" />
          <p>News</p>
        </div>
        <hr />
      </div>
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-link">
          <img src={jack} alt="" />
          <p>PewDiePie</p>
        </div>
        <div className="side-link">
          <img src={simon} alt="" />
          <p>Mr. Beast</p>
        </div>
        <div className="side-link">
          <img src={tom} alt="" />
          <p>Justin Bieber</p>
        </div>
        <div className="side-link">
          <img src={megan} alt="" />
          <p>5-Minute Crafts</p>
        </div>
        <div className="side-link">
          <img src={cameron} alt="" />
          <p>Nas Daily</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
