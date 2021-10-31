import React, { useEffect, useState } from "react";
import TvOnTheAirHome from './TvOnTheAirHome';

const OnTheAirTV = () => {   

const [ movies, setMovies ] = useState([]);

useEffect(() => {
    fetch('https://api.themoviedb.org/3/tv/on_the_air?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&page=1')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setMovies(data.results);
    });
}, []);

return(    
  <div className='movie-container'>
     {movies.length > 0 && movies.map((movie) => 
         <TvOnTheAirHome key={movie.id} {...movie} />)}
  </div>
);
}

export default OnTheAirTV;