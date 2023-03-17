import "./UploadComplete.scss";
import { Link } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";

function UploadComplete() {
  return (
    <>
      <div className="upload-complete">
        <h1 className="upload-complete__header">
          Video Successfully Uploaded.
        </h1>

        <Link className="upload-complete__btn-cont" to="/" element={HomePage}>
          <button className="upload-complete__btn">Return To Home</button>
        </Link>
      </div>
    </>
  );
}

export default UploadComplete;
