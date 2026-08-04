import React, { useState } from "react";
import "./PlayVideo.css";
import video1 from "../../assets-yt clone/video.mp4";
import like from "../../assets-yt clone/like.png";
import dislike from "../../assets-yt clone/dislike.png";
import share from "../../assets-yt clone/share.png";
import save from "../../assets-yt clone/save.png";
import jack from "../../assets-yt clone/jack.png";
import user_profile from "../../assets-yt clone/user_profile.jpg";

const PlayVideo = ({ videoId }) => {
  const [apiData, setApiData] = useState(null);

  return (
    <div className="play-video">
      {/* <video src={video1} controls autoPlay muted></video> */}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>{" "}
      <h3>Best Youtube Channel To Learn Web Development</h3>
      <div className="play-video-info">
        <p>1525 Views &bull; 2 days ago</p>
        <div>
          <span>
            <img src={like} alt="" />
            125
          </span>
          <span>
            <img src={dislike} alt="" />2
          </span>
          <span>
            <img src={share} alt="" />
            Share
          </span>
          <span>
            <img src={save} alt="" />
            Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt="" />
        <div>
          <p>GreatStack</p>
          <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>Channel that makes learning Easy</p>
        <p>
          Subscribe to GreatStack to Watch More Tutorials on Web Development
        </p>
        <hr />
        <h4>130 Comments</h4>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Nicholson <span>1 day ago</span>
            </h3>
            <p>
              A global computer network providing a variety of information and
              communication of interconnected networks using standardized
              communication protocols.
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Nicholson <span>1 day ago</span>
            </h3>
            <p>
              A global computer network providing a variety of information and
              communication of interconnected networks using standardized
              communication protocols.
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Nicholson <span>1 day ago</span>
            </h3>
            <p>
              A global computer network providing a variety of information and
              communication of interconnected networks using standardized
              communication protocols.
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Nicholson <span>1 day ago</span>
            </h3>
            <p>
              A global computer network providing a variety of information and
              communication of interconnected networks using standardized
              communication protocols.
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
