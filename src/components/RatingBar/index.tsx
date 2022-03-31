import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import approx from "approximate-number";

import "./style.scss";

const RatingBar = (props) => {
  const movie = props.props;
  console.log(movie);
  const vote_count = approx(movie.vote_count)
  return (
    <div className="rating__container">
      <div className="rating__score">
        <AiTwotoneStar
          style={{
            color: "#fcc419",
          }}
        />
        <span className="info__scores">{movie.vote_average}</span>
      </div>
      <div className="rating__vote">
        {" "}
        <AiOutlineStar style={{}} />
        <span className="info__scores">vote</span>
      </div>
      <div className="rating__meta">
      <div className="box__meta">
          <h6 className="font__meta">{vote_count}</h6></div>
        <span className="info__scores">score</span>
      </div>
    </div>
  );
};

export default RatingBar;
