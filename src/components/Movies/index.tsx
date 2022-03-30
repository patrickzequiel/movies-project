import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";


import { useTypedSelector } from "../../hooks/useTypeSelector";
import { getMovies } from "../../redux/actionCreators/index";
import Card from "../Card";

interface IProps {
  getMovies: () => any;
  movies: any;
}

export const Movies = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useTypedSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getMovies());
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
