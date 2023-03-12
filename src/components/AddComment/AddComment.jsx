import UserImage from "../../assets/images/Mohan-muruge.jpg";
import "./AddComment.scss";

function AddComment({ commentsArrayLength }) {
  const btnClick = (e) => {
    e.preventDefault();
    alert("Comment successfully posted!");
  };

  return (
    <section className="comments">
      <div className="comments__counter">
        <h4>{commentsArrayLength.length} comments</h4>
      </div>
      <div className="comments__main-container">
        <img
          className="comments__comment-icon"
          src={UserImage}
          alt="user img"
        />

        <form className="comments__form-container">
          <div className="comments__input-wrapper">
            <label className="comments__form-label" htmlFor="comments">
              JOIN THE CONVERSATION
              <textarea
                className="comments__comment-field"
                id="comments"
                type="text"
                placeholder="Add a new comment"
              ></textarea>
            </label>
          </div>
          <div className="comments__btn-wrapper">
            <input
              type="submit"
              className="comments__submit-btn"
              value="COMMENT"
              onClick={btnClick}
            />
          </div>
        </form>
      </div>
    </section>
  );
}

export default AddComment;
