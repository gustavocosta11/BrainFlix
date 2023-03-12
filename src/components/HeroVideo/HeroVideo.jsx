function HeroVideo({ details }) {
  return (
    <div className="main-video">
      <div className="main-video__container">
        <video
          className="main-video__video-control"
          poster={details.image}
          type="video/mp4"
          src="#"
          alt={details.title}
          controls
        />
      </div>
    </div>
  );
}

export default HeroVideo;
