import React, { useEffect, useState } from "react";
import MovieTopRated from './MovieTopRated';

const TopRated = () => {   

const [ movies, setMovies ] = useState([]);

useEffect(() => {
    fetch('http://localhost:8080/movie/topRatedMovies')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setMovies(data.results);
    });
}, []);

return(    
  <div className='movie-container'>
     {movies.length > 0 && movies.map((movie) => 
         <MovieTopRated key={movie.id} {...movie} />)}
  </div>
);
}

export default TopRated;