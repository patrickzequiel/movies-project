import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";

import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import { useTypedSelector } from "../../hooks/useTypeSelector";
import { getMovie } from "../../redux/actionCreators";
import { useParams } from "react-router-dom";
import Backdrop from "../../components/Backdrop";
import RatingBar from "../../components/RatingBar";

import "./styles.scss";
import Category from "../../components/Category";
import TextBox from "../../components/TextBox";
import Productors from "../../components/Productors";
import BasicInfo from "../../components/BasicInfo";

const Movie = () => {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const { id } = useParams();
  const { movie, loading, error } = useTypedSelector((state) => state.movie);

  useEffect(() => {
    dispatch(getMovie(id));
  }, []);

  // if (movie !== null) console.log(movie);

  return (
    <>
      {isMobile ? <SideBar /> : <Header />}
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {movie ? (
            <>
              <div className="container">
                <Backdrop props={movie.backdrop_path} />
                <div className="info__movie">
                  <RatingBar props={movie} />
                  <div className="movie__title">{movie.title}</div>
                  <BasicInfo props={movie}/>

                </div>
              </div>

              <div className="movie__container">
                <div className="movie__categories">
                  <Category props={movie.genres} />
                </div>
                <div className="movie__infos">
                  <div className="movie__summary">
                    <h2>Plot Summary</h2>
                    <TextBox props={movie.overview} />
                  </div>
                  <div className="production__companies">
                    <Productors props={movie.production_companies} />
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </>
      )}
    </>
  );
};

export default Movie;
