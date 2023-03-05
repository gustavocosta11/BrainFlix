import BrainFlixlogo from "../../assets/logo/BrainFlix-logo.svg";
import Avatar from "../../assets/images/Mohan-muruge.jpg";

import "./Header.scss";

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__logo-container">
          <a href="home">
            <img
              className="header__logo"
              src={BrainFlixlogo}
              alt={"BrainFlix"}
            />
          </a>
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
            <button className="header__btn">UPLOAD</button>
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
