import React, { useEffect, useState } from "react";
import TvTopRatedHome from './TvTopRatedHome';

const TopRatedTV = () => {   

const [ movies, setMovies ] = useState([]);

useEffect(() => {
    fetch('http://localhost:8080/tv/topRatedTV')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setMovies(data.results);
    });
}, []);

return(    
  <div className='movie-container'>
     {movies.length > 0 && movies.map((movie) => 
         <TvTopRatedHome key={movie.id} {...movie} />)}
  </div>
);
}

export default TopRatedTV;