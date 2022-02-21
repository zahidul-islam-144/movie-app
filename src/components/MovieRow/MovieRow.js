import React, { useState, useRef } from "react";
import { useGetMoviesQuery } from "../../services/movieApi";
import SingleMovie from "../SingleMovie/SingleMovie";
import "./MovieRow.scss";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

// const MovieRow = ({title}) => {codes}
const MovieRow = (props) => {
  const { title, fetchURI } = props;
  const { data, isLoading } = useGetMoviesQuery(fetchURI);
  const [isMoved, setIsMoved] = useState(false);
  const [indexNumber, setIndexNumber] = useState(0);

  const movieRef = useRef();
  // console.log("data:", data);

  if (isLoading) {
    return (
      <div>
        <h1 style={{ textAlign: "center", marginTop: "250px" }}>Loading...</h1>
      </div>
    );
  }
  // slider
  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = movieRef.current.getBoundingClientRect().x - 20;
    if (direction === "left" && indexNumber > 0) {
      setIndexNumber(indexNumber - 1);
      movieRef.current.style.transform = `translateX(${
        window.innerWidth + distance
      }px)`;
    }
    
    if (direction === "right" && indexNumber < 3 ){
      setIndexNumber(indexNumber + 1);
      movieRef.current.style.transform = `translateX(${
        -window.innerWidth + distance
      }px)`;
      // setIsMoved(true);
    }
  };
  return (
    <>
      <div className="movie-row-container">
        <h1>{title}</h1>

        <div className="row-wrapper">
          <MdArrowForwardIos
            className="movieSlider right-arrow"
            onClick={() => handleClick("right")}
          />
          <div className="movie-row-block" ref={movieRef}>
            {data?.results.map((movie, index) => (
              <SingleMovie key={movie?.id} singleMovie={movie} index={index} />
            ))}
          </div>
          <MdArrowBackIos
            className="movieSlider left-arrow"
            onClick={() => handleClick("left")}
            style={{ display: !isMoved && "none" }}
          />
        </div>
      </div>
    </>
  );
};

export default MovieRow;
