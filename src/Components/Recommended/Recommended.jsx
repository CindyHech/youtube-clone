import React, { useEffect, useState } from "react";
import "./Recommended.css";
import thumbnail1 from "../../assets-yt clone/thumbnail1.png";
import thumbnail2 from "../../assets-yt clone/thumbnail2.png";
import thumbnail3 from "../../assets-yt clone/thumbnail3.png";
import thumbnail4 from "../../assets-yt clone/thumbnail4.png";
import thumbnail5 from "../../assets-yt clone/thumbnail5.png";
import thumbnail6 from "../../assets-yt clone/thumbnail6.png";
import thumbnail7 from "../../assets-yt clone/thumbnail7.png";
import thumbnail8 from "../../assets-yt clone/thumbnail8.png";
import { API_KEY } from "../../data";

const Recommended = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    const relatedVideo__url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}0&key=${API_KEY}`;
    await fetch(relatedVideo__url)
      .then((res) => res.json())
      .then((data) => setApiData(data.items));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="recommended">
      {apiData.map((item, index) => (
        <div key={index} className="side-video-list">
          <img src={thumbnail1} alt="" />
          <div className="vid-info">
            <h4>Best channel that help you to be a web developer</h4>
            <p>GreatStack</p>
            <p>199k Views</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recommended;
