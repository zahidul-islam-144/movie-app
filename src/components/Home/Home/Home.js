import React from "react";
import './Home.scss';
import Navigation from "../../Header/Navigation/Navigation";
import Movies from "../../Movies/Movies";
import Banner from "../Banner/Banner";


const Home = () => {
  return (
    <div className="home-page">
      <Navigation/>
      <Banner/>
      <Movies/>
    </div>
  );
};

export default Home;
