import "./NextVideoList.scss";
import NextVideoCard from "../NextVideoCard/NextVideoCard";
import { Link } from "react-router-dom";

const NextVideoList = ({ videos, videoId }) => {
  if (videoId === null || videos === null) {
    return <h1>Waiting...</h1>;
  }

  const checkVidId = videos.filter((video) => video.id !== videoId);

  return (
    <>
      <section className="next-video">
        <hr className="next-video__top-divider" />
        <div className="next-video__header">NEXT VIDEOS</div>
        {checkVidId.map((video, i) => {
          return (
            <Link
              className="next-video__link-container"
              to={`/videos/${video.id}`}
              key={i}
            >
              <NextVideoCard content={video} />
            </Link>
          );
        })}
      </section>
    </>
  );
};

export default NextVideoList;
