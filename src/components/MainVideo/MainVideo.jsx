import video from "../../data/videos.json";
import videoDetails from "../../data/video-details.json";
import viewIcon from "../../assets/icons/views.svg";
import heartIcon from "../../assets/icons/likes.svg";

import HeroVideo from "../HeroVideo/HeroVideo";
import AddComment from "../AddComment/AddComment";
import NextVideoList from "../NextVideoList/NextVideoList";
import CommentCardContainer from "../CommentCardContainer/CommentCardContainer";

import { useState } from "react";

function MainVideo() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      <HeroVideo selectedIndex={videoDetails[selectedIndex]} />

      <div className="main-section">
        <div className="main-section__left">
          <div className="video-details">
            <h2 className="video-details__title">
              {videoDetails[selectedIndex].title}
            </h2>
            <hr className="video-details__divider-top" />
            <div className="video-details__main-container">
              <div className="video-details__author-info">
                <div className="video-details__author">
                  By {videoDetails[selectedIndex].channel}
                </div>
                <div className="video-details__date">
                  {new Date(
                    videoDetails[selectedIndex].timestamp
                  ).toLocaleDateString("en-US", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </div>
              </div>
              <div className="video-details__userInfo">
                <div className="video-details__views">
                  <img
                    className="video-details__views-icon"
                    src={viewIcon}
                    alt="user views"
                  />
                  {videoDetails[selectedIndex].views}
                </div>
                <div className="video-details__likes-container">
                  <img
                    className="video-details__likes-icon"
                    src={heartIcon}
                    alt=""
                  />
                  {videoDetails[selectedIndex].likes}
                </div>
              </div>
            </div>
            <hr className="video-details__divider-bottom" />
            <div className="video-details__description">
              {videoDetails[selectedIndex].description}
            </div>
          </div>

          <AddComment
            commentsArrayLength={videoDetails[selectedIndex].comments}
          />

          <CommentCardContainer
            commentsArray={videoDetails[selectedIndex].comments}
          />
        </div>
        <div className="main-section__right">
          <NextVideoList
            videos={video}
            selectedIndex={selectedIndex}
            setSelectedIndex={(index) => setSelectedIndex(index)}
          />
        </div>
      </div>
    </>
  );
}

export default MainVideo;
