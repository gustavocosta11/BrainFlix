function NextVideoCard({ video, index, setSelectedIndex }) {
  return (
    <div onClick={() => setSelectedIndex(index)} className="next-video__card">
      <div className="next-video__image-container">
        <img className="next-video__image" src={video.image} alt="" />
      </div>
      <div className="next-video__info">
        <h4 className="next-video__title">{video.title}</h4>
        <p className="next-video__author">{video.channel}</p>
      </div>
    </div>
  );
}

export default NextVideoCard;
