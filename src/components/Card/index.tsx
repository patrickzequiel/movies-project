import React, { Component, useEffect, useState } from "react";
import { connect } from "react-redux";

import { getMovies } from "../../services/api";

interface IProps {
  getMovies: () => void;
  movies: any;
}

class movies extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
    this.props.getMovies();
  }

  render() {
    const { movies } = this.props.movies;
    // JSON.stringify(movies)

    console.log(movies.Search);
    return (
      <div>
        {movies.Search.map((movie) => (
          <React.Fragment key={movie.imdbID}>
            <h6>{movie.Title}</h6>
          </React.Fragment>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ movies: state.movies });

export default connect(mapStateToProps, { getMovies })(movies);
