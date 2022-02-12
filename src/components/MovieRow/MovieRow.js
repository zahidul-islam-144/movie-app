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
  const [slideNumber, setSlideNumber] = useState(0);

  const listRef = useRef();
  console.log("data:", data);

  if (isLoading) {
    return (
      <div>
        <h1 style={{ textAlign: "center", marginTop: "250px" }}>Loading...</h1>
      </div>
    );
  }
  const handleClick = (direction) => {
    // setIsMoved(true);
    // let distance = listRef.current.getBoundingClientRect().x ;
    // console.log(distance);
    // if (direction === "left" && slideNumber > 0) {
    //   setSlideNumber(slideNumber - 1);
    //   listRef.current.style.transform = `translateX(${230 + distance}px)`;
    // }
    // if (direction === "right" && slideNumber < 5) {
    //   setSlideNumber(slideNumber + 1);
    //   listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    // }
  };
  return (
    <>
      <div className="movie-row-container">
        <h1>{title}</h1>

        <div className="row-wrapper">
          <MdArrowForwardIos className="movieSlider right-arrow" />
          <div className="movie-row-block">
            {data?.results.map((movie, index) => (
              <SingleMovie key={movie?.id} singleMovie={movie} index={index} />
            ))}
          </div>
          <MdArrowBackIos className="movieSlider left-arrow" />
        </div>
      </div>
    </>
  );
};

export default MovieRow;
