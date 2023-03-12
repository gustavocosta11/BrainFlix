function NextVideoCard({ content }) {
  return (
    <div className="next-video__card">
      <div className="next-video__image-container">
        <img className="next-video__image" src={content.image} alt="" />
      </div>
      <div className="next-video__info">
        <h4 className="next-video__title">{content.title}</h4>
        <p className="next-video__author">{content.channel}</p>
      </div>
    </div>
  );
}

export default NextVideoCard;
