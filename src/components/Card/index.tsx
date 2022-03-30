import React, { Component, useEffect, useState } from "react";
import { connect } from "react-redux";

import { getMovies } from "../../services/api";

import "./styles.scss";

interface CardProps {
    imdbID: number;
    Poster: string;
    Title: string;
}

const Card = ({imdbID, Poster, Title}: CardProps) => {
    console.log(Poster)
    return (
          <div className="card" key={imdbID}>
            <div
              className="card__bg"
              style={{
                backgroundImage: `url(${Poster})`,
                backgroundSize: "cover",
              }}
            ></div>
            <h6>{Title}</h6>
          </div>
    )
}

export default Card;

{/* {movies.Search.map((movie) => (
          <div className="card" key={movie.imdbID}>
            <div
              className="card__bg"
              style={{
                backgroundImage: `url(${movie.Poster})`,
                backgroundSize: "cover",
              }}
            ></div>
            <h3>{movie.Title}</h3>
          </div>
            ))} */}
