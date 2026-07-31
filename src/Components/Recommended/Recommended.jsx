import React from "react";
import "./Recommended.css";
import thumbnail1 from "../../assets-yt clone/thumbnail1.png";
import thumbnail2 from "../../assets-yt clone/thumbnail2.png";
import thumbnail3 from "../../assets-yt clone/thumbnail3.png";
import thumbnail4 from "../../assets-yt clone/thumbnail4.png";
import thumbnail5 from "../../assets-yt clone/thumbnail5.png";
import thumbnail6 from "../../assets-yt clone/thumbnail6.png";
import thumbnail7 from "../../assets-yt clone/thumbnail7.png";
import thumbnail8 from "../../assets-yt clone/thumbnail8.png";

const Recommended = () => {
  return (
    <div className="recommended">
      <div className="side-video-list">
        <img src={thumbnail1} alt="" />
        <div className="vid-info">
          <h4>Best channel that help you to be a web developer</h4>
          <p>GreatStack</p>
          <p>199k Views</p>
        </div>
      </div>
      <div className="side-video-list">
        <img src={thumbnail2} alt="" />
        <div className="vid-info">
          <h4>Best channel that help you to be a web developer</h4>
          <p>GreatStack</p>
          <p>199k Views</p>
        </div>
      </div>
      <div className="side-video-list">
        <img src={thumbnail3} alt="" />
        <div className="vid-info">
          <h4>Best channel that help you to be a web developer</h4>
          <p>GreatStack</p>
          <p>199k Views</p>
        </div>
      </div>
      <div className="side-video-list">
        <img src={thumbnail4} alt="" />
        <div className="vid-info">
          <h4>Best channel that help you to be a web developer</h4>
          <p>GreatStack</p>
          <p>199k Views</p>
        </div>
      </div>
      <div className="side-video-list">
        <img src={thumbnail5} alt="" />
        <div className="vid-info">
          <h4>Best channel that help you to be a web developer</h4>
          <p>GreatStack</p>
          <p>199k Views</p>
        </div>
      </div>
      <div className="side-video-list">
        <img src={thumbnail6} alt="" />
        <div className="vid-info">
          <h4>Best channel that help you to be a web developer</h4>
          <p>GreatStack</p>
          <p>199k Views</p>
        </div>
      </div>
      <div className="side-video-list">
        <img src={thumbnail7} alt="" />
        <div className="vid-info">
          <h4>Best channel that help you to be a web developer</h4>
          <p>GreatStack</p>
          <p>199k Views</p>
        </div>
      </div>
      <div className="side-video-list">
        <img src={thumbnail8} alt="" />
        <div className="vid-info">
          <h4>Best channel that help you to be a web developer</h4>
          <p>GreatStack</p>
          <p>199k Views</p>
        </div>
      </div>
    </div>
  );
};

export default Recommended;
