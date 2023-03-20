import ImageDefault from "../../assets/icons/placeholder.png";
import "./CommentCard.scss";

function CommentCard({ comment }) {
  return (
    <>
      <div className="comments-archive__outer">
        <hr className="comments-archive__hr" />
        <div className="comments-archive__comment">
          <img className="comments-archive__icon" src={ImageDefault} alt="" />
          <div className="comments-archive__com-container">
            <div className="comments-archive__name-date">
              <span>{comment.name}</span>
              <span className="comments-archive__span-right">
                {new Date(comment.timestamp).toLocaleDateString("en-US", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </span>
            </div>
            <div className="comments-archive__text">{comment.comment}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CommentCard;
