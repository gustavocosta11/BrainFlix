import UserImage from "../../assets/images/Mohan-muruge.jpg";
import "./AddComment.scss";

function AddComment({ commentsArrayLength }) {
  return (
    <section className="comments">
      <div className="comments__counter">
        <h4>{commentsArrayLength.length} comments</h4>
      </div>
      <div className="comments__main-container">
        <img className="comments__comment-icon" src={UserImage} alt="" />

        <form className="comments__form-container" action="" method="#">
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
            />
          </div>
        </form>
      </div>
    </section>
  );
}

export default AddComment;
