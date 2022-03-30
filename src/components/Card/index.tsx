
import { Link } from "react-router-dom";
import "./styles.scss";

interface CardProps {
    imdbID: number;
    Poster: string;
    Title: string;
}

const Card = ({imdbID, Poster, Title}: CardProps) => {
    console.log(Poster)
    return (
          <Link className="card" key={imdbID} to="/">
            <div
              className="card__bg"
              style={{
                backgroundImage: `url(${Poster})`,
                backgroundSize: "cover",
              }}
            ></div>
            <h6>{Title}</h6>
          </Link>
    )
}

export default Card;
