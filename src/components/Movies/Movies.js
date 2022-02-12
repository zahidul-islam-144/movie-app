import React from "react";
import './Movies.scss';
import MovieRow from "../MovieRow/MovieRow";
import {uri} from "../../assets/common/API_Keys";
const Movies = () => {
  return (
    <div className="wrapper">
      <MovieRow title="Netflix Original" fetchURI={uri.netflixOriginal}/>
      <MovieRow title="Top Rated" fetchURI={uri.topRated}/>
      <MovieRow title="Trending Now" fetchURI={uri.topRated} className="trending"/>
      {/* ==== */}
      <MovieRow  title="Adventure Movies" fetchURI={uri.adeventure} />
      <MovieRow  title="Fantasy Movies" fetchURI={uri.fantasy} />
      <MovieRow  title="Animation Movies" fetchURI={uri.animation} />
      <MovieRow  title="Drama Movies" fetchURI={uri.drama} />
      <MovieRow  title="Horror Movies" fetchURI={uri.horror} />
      <MovieRow  title="Action Movies" fetchURI={uri.action} />
      <MovieRow  title="Comedy Movies" fetchURI={uri.comedy} />
      <MovieRow  title="History Movies" fetchURI={uri.history} />
      <MovieRow  title="Thriller Movies" fetchURI={uri.thriller} />
      <MovieRow  title="Documentry Movies" fetchURI={uri.documentry} />
      <MovieRow  title="Science Fiction Movies" fetchURI={uri.scienceFiction} />
      <MovieRow  title="Romance Movies" fetchURI={uri.romance} />
      <MovieRow  title="Family Movies" fetchURI={uri.family} />
    </div>
  ); 
};

export default Movies;
