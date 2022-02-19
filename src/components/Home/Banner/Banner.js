import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useBannerImageQuery } from "../../../services/movieApi";
import "./Banner.scss";
import { AiOutlinePlus } from "react-icons/ai";
import { GrPlayFill } from "react-icons/gr";
const Banner = () => {
  const { data, isLoading } = useBannerImageQuery();
  const [banner, setBanner] = useState([]);
  // console.log(data?.results[0]?.backdrop_path);
  console.log(data?.results);

  const index = Math.floor(Math.random() * data?.results.length - 1);
  const baseURI = "https://image.tmdb.org/t/p/original";
  const endpoint = `${data?.results[index]?.backdrop_path}`;
  const bannerTitle = `${
    data?.results[index]?.original_name ||
    data?.results[index]?.name ||
    data?.results[index]?.title ||
    data?.results[index]?.original_title
  }`;
const description = `${data?.results[index]?.overview}`;
  // const truncate = (str, n) => {
  // 	return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  // };
  if (isLoading) {
    return (
      <div>
        <h1 style={{ textAlign: "center", marginTop: "250px" }}>Loading...</h1>
      </div>
    );
  }
  return (
    <>
      <div className="banner-container">
        <img
          className="banner-img"
          src={`${baseURI}${endpoint}`}
          alt="movie-anner-img"
        />
        <div className="banner-content">
          <h1>{`${bannerTitle}`}</h1>
          <div className="buttons">
            <span>
              <GrPlayFill
                className="mylist-btn"
                style={{ marginRight: "8px", color: "white" }}
              />
              Play
            </span>
            <span>
              <AiOutlinePlus
                className="mylist-btn"
                style={{ marginRight: "8px", color: "white" }}
              />
              My List
            </span>
          </div>

          <div className="description">
            <p>{`${description}`}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
