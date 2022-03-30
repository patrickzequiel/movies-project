import { useEffect, useState } from "react";
import { connect } from "react-redux";

import { getMovies } from "../../services";
import Card from "../Card";

interface IProps {
  getMovies: () => any;
  movies: any;
}

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then((movies) => setMovies(movies));
  }, []);

  return (
    <>
      {movies.map((movie) => (
        <Card
          imdbID={movie.id}
          Poster={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          Title={movie.title}
        />
      ))}
    </>
  )
};

const mapStateToProps = (state) => ({ movies: state.movies });

export default connect(mapStateToProps, { getMovies })(Movies);
