import "./UploadPage.scss";
import { Link, useNavigate } from "react-router-dom";
import bikeImage from "../../assets/images/Upload-video-preview.jpg";
import { useRef } from "react";
import axios from "axios";

function UploadPage() {
  const input = useRef();
  const textInput = useRef();
  let navigate = useNavigate();

  // listen for change in input field, remove error border.
  const changeBorderColTitle = (e) => {
    // console.log(e.target);

    if (e.target.value.length > 0) input.current.style.borderColor = "#e1e1e1";
  };

  const changeBorderColText = (e) => {
    if (e.target.value.length > 0)
      textInput.current.style.borderColor = "#e1e1e1";
  };

  // submit post req on click, form validation
  const btnClick = (e) => {
    e.preventDefault();
    const title = e.target.titlebox.value;
    const textarea = e.target.textarea.value;

    let newVideo = {
      title: title,
      description: textarea,
    };

    if (title === "") input.current.style.borderColor = "#D22D2D";
    if (textarea === "") textInput.current.style.borderColor = "#D22D2D";
    if (title === "" || textarea === "") return;

    axios.post("http://localhost:9999/", newVideo).then((res) => {
      if (res.status >= 200 && res.status < 300) {
        navigate("/UploadComp", { replace: true });
      }
    });
  };

  return (
    <form onSubmit={btnClick} className="Upload__container">
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
            onChange={changeBorderColTitle}
            ref={input}
            className="Upload__video-title"
            type="text"
            placeholder="Add a title to your video"
            name="titlebox"
          />
          <label
            className="Upload__description-label"
            htmlFor="video-description"
          >
            ADD A VIDEO DESCRIPTION
          </label>
          <textarea
            ref={textInput}
            onChange={changeBorderColText}
            id="video-description"
            className="Upload__video-description"
            type="text"
            placeholder="Add a description to your video"
            name="textarea"
          />
        </div>
      </div>
      <hr className="Upload__divider-bottom" />
      <div className="Upload__btn-container">
        <div className="Upload__publish-container">
          <button className="Upload__publish">PUBLISH</button>
        </div>

        <div className="Upload__cancel-container">
          <Link to="/">
            <button className="Upload__cancel">CANCEL</button>
          </Link>
        </div>
      </div>
    </form>
  );
}

export default UploadPage;
