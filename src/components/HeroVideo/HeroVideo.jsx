function HeroVideo({ selectedIndex }) {
  return (
    <div className="main-video">
      <div className="main-video__container">
        <video
          className="main-video__video-control"
          poster={selectedIndex.image}
          type="video/mp4"
          src="#"
          alt={selectedIndex.title}
          controls
        />
      </div>
    </div>
  );
}

export default HeroVideo;
