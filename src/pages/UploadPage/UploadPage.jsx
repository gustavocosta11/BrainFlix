import "./UploadPage.scss";
import { Link } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import bikeImage from "../../assets/images/Upload-video-preview.jpg";

function UploadPage() {
  const btnClick = (e) => {
    e.preventDefault();
    alert("Video successfully uploaded!");
  };
  return (
    <div className="Upload__container">
      <hr className="Upload__divider" />
      <div className="Upload__header">Upload Video</div>
      <hr className="Upload__divider-top" />
      <div className="Upload__desktop-Container">
        <div className="Upload__img-container">
          <label className="Upload__thumbnail-label" htmlFor="video-thumbnail">
            VIDEO THUMBNAIL
          </label>

          <img className="Upload__img" src={bikeImage} alt="upload thumbnail" />
        </div>
        <div className="Upload__inputs">
          <label className="Upload__title-label" htmlFor="title-label">
            TITLE YOUR VIDEO
          </label>
          <input
            id="title-label"
            className="Upload__video-title"
            type="text"
            placeholder="Add a title to your video"
          />
          <label
            className="Upload__description-label"
            htmlFor="video-description"
          >
            ADD A VIDEO DESCRIPTION
          </label>
          <textarea
            id="video-description"
            className="Upload__video-description"
            type="text"
            placeholder="Add a description to your video"
          />
        </div>
      </div>
      <hr className="Upload__divider-bottom" />
      <div className="Upload__btn-container">
        <div className="Upload__publish-container">
          <button onClick={btnClick} className="Upload__publish">
            PUBLISH
          </button>
        </div>
        <div className="Upload__cancel-container">
          <Link to="/" element={<HomePage />}>
            <button className="Upload__cancel">CANCEL</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UploadPage;
