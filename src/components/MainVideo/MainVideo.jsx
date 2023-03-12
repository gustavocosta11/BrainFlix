import viewIcon from "../../assets/icons/views.svg";
import heartIcon from "../../assets/icons/likes.svg";

import HeroVideo from "../HeroVideo/HeroVideo";
import AddComment from "../AddComment/AddComment";
import NextVideoList from "../NextVideoList/NextVideoList";
import CommentCardContainer from "../CommentCardContainer/CommentCardContainer";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./MainVideo.scss";

// Hero vid, main vid details, parent component for AddComments, CommentCardContainer
function MainVideo() {
  const apiKey = "b1331a26-07a6-4e02-bba7-b46d21fc5516";
  const [selectedIndex, setSelectedIndex] = useState();
  const [videoDetails, setVideoDetails] = useState();

  const { videoId } = useParams();

  // NextVideoList state
  const [videos, setVideos] = useState();

  // Get first video
  useEffect(() => {
    const nextVideoListInfo = () => {
      axios
        .get(`https://project-2-api.herokuapp.com/videos/?api_key=${apiKey}`)
        .then((res) => {
          const videoIdInfo = res.data[0].id;
          setSelectedIndex(videoIdInfo);

          const nextVideoData = res.data;
          setVideos(nextVideoData);
        })
        .catch((err) => console.log("ERROR: ", err));
    };

    nextVideoListInfo();
  }, []);

  //  Video Details Data
  useEffect(() => {
    const videoDetails = videoId ? videoId : selectedIndex;

    const videoDetailsInfo = () => {
      axios
        .get(
          `https://project-2-api.herokuapp.com/videos/${videoDetails}?api_key=${apiKey}`
        )
        .then((res) => {
          const vidData = res.data;
          setVideoDetails(vidData);
        })
        .catch((err) => console.log("ERROR: ", err));
    };
    videoDetailsInfo();
  }, [selectedIndex, videoId]);

  if (!videoDetails) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <HeroVideo details={videoDetails} />

      <div className="main-section">
        <div className="main-section__left">
          <div className="video-details">
            <h2 className="video-details__title">{videoDetails.title}</h2>
            <hr className="video-details__divider-top" />
            <div className="video-details__main-container">
              <div className="video-details__author-info">
                <div className="video-details__author">
                  By {videoDetails.channel}
                </div>
                <div className="video-details__date">
                  {new Date(videoDetails.timestamp).toLocaleDateString(
                    "en-US",
                    {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    }
                  )}
                </div>
              </div>
              <div className="video-details__userInfo">
                <div className="video-details__views">
                  <img
                    className="video-details__views-icon"
                    src={viewIcon}
                    alt="user views"
                  />
                  {videoDetails.views}
                </div>
                <div className="video-details__likes-container">
                  <img
                    className="video-details__likes-icon"
                    src={heartIcon}
                    alt="like icon"
                  />
                  {videoDetails.likes}
                </div>
              </div>
            </div>
            <hr className="video-details__divider-bottom" />
            <div className="video-details__description">
              {videoDetails.description}
            </div>
          </div>

          <AddComment commentsArrayLength={videoDetails.comments} />

          <CommentCardContainer commentsArray={videoDetails.comments} />
        </div>
        <div className="main-section__right">
          <NextVideoList videos={videos} videoId={videoId} />
        </div>
      </div>
    </>
  );
}

export default MainVideo;
