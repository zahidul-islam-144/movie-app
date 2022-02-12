import React from "react";
import "./SingleMovie.scss";

const SingleMovie = (props) => {
  const { singleMovie, index } = props;
  
  // console.log(props);
  const baseURI = "https://image.tmdb.org/t/p/original";

  return (
    <div className="single-movie-container" >
      <div className="movie-poster-block">
        <img
          className="poster-img"
          src={`${baseURI}${singleMovie.poster_path}`}
          alt={singleMovie.title}
        />
      </div>
      <h5 style={{color:"white", textAlign:"center"}}> {index}</h5>
    </div>
  );
};

export default SingleMovie;
