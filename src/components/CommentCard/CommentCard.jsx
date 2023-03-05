import ImageDefault from "../../assets/icons/placeholder.png";
import "./CommentCard.scss";

function CommentCard({ comment }) {
  return (
    <>
      <div className="comments-archieve__outer">
        <hr className="comments-archieve__hr" />
        <div className="comments-archieve__comment">
          <img className="comments-archieve__icon" src={ImageDefault} alt="" />
          <div className="comments-archieve__com-container">
            <div className="comments-archieve__name-date">
              <span>{comment.name}</span>
              <span className="comments-archieve__span-right">
                {new Date(comment.timestamp).toLocaleDateString("en-US", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </span>
            </div>
            <div className="comments-archieve__text">{comment.comment}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CommentCard;
