import React, { useEffect, useState } from "react";
import MovieNowPlaying from './MovieNowPlaying';

const NowPlaying = () => {   

const [ movies, setMovies ] = useState([]);

useEffect(() => {
    fetch('http://localhost:8080/movie/nowShowing')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setMovies(data.results);
    });
}, []);

return(    
  <div className='movie-container'>
     {movies.length > 0 && movies.map((movie) => 
         <MovieNowPlaying key={movie.id} {...movie} />)}
  </div>
);
}

export default NowPlaying;