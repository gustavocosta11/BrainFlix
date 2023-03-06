import CommentCard from "../CommentCard/CommentCard";

function CommentCardContainer({ commentsArray }) {
  return (
    <section className="comments-archieve">
      {commentsArray.map((el) => {
        return <CommentCard comment={el} key={el.name + el.timestamp} />;
      })}
    </section>
  );
}

export default CommentCardContainer;
