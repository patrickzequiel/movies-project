import { Link } from "react-router-dom";
import { AiTwotoneStar } from "react-icons/ai";
import "./styles.scss";

interface CardProps {
  imdbID: number;
  Poster: string;
  Title: string;
  Score: number;
}

const Card = ({ imdbID, Poster, Title, Score }: CardProps) => {
  return (
    <Link className="card" key={imdbID} to={`/movie/${imdbID}`}>
      <div
        className="card__bg"
        style={{
          backgroundImage: `url(${Poster})`,
          backgroundSize: "cover",
        }}
      ></div>
      <p>{Title}</p>
      <div className="card__score">
        <AiTwotoneStar
          style={{
            color: "#fcc419",
          }}
        />
        <span>{Score}</span>
      </div>
    </Link>
  );
};

export default Card;
