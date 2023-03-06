import "./NextVideoList.scss";
import NextVideoCard from "../NextVideoCard/NextVideoCard";

function NextVideoList({ videos, selectedIndex, setSelectedIndex }) {
  return (
    <>
      <section className="next-video">
        <hr className="next-video__top-divider" />
        <div className="next-video__header">NEXT VIDEOS</div>

        {videos.map((el, i) => {
          if (i !== selectedIndex) {
            return (
              <NextVideoCard
                video={el}
                index={i}
                setSelectedIndex={(index) => setSelectedIndex(index)}
                key={el.id}
              />
            );
          }
        })}
      </section>
    </>
  );
}

export default NextVideoList;
