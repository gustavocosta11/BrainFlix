import BrainFlixlogo from "../../assets/logo/BrainFlix-logo.svg";
import Avatar from "../../assets/images/Mohan-muruge.jpg";
import { Link } from "react-router-dom";

import "./Header.scss";
import UploadPage from "../../pages/UploadPage/UploadPage";
import HomePage from "../../pages/HomePage/HomePage";

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__logo-container">
          <Link to="/" element={<HomePage />}>
            <img
              className="header__logo"
              src={BrainFlixlogo}
              alt={"BrainFlix"}
            />
          </Link>
        </div>

        <form className="header__search-form">
          <div className="header__search-input-container">
            <label htmlFor="search"> </label>
            <input
              id="search"
              className="header__search-input"
              type="text"
              placeholder="Search"
            />
            <div>
              <img
                className="header__login-avatar"
                src={Avatar}
                alt={"Login Avatar"}
              />
            </div>
          </div>
          <div className="header_btn-container">
            <Link
              to="/upload"
              className="header__btn-link"
              element={<UploadPage />}
            >
              <button className="header__btn">UPLOAD</button>
            </Link>
          </div>
          <div>
            <img
              className="header__login-avatar-tablet"
              src={Avatar}
              alt={"Login Avatar"}
            />
          </div>
        </form>
      </header>
    </>
  );
}

export default Header;
