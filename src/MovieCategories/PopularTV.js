import React, { useEffect, useState } from "react";
import TvPopularHome from './TvPopularHome';

const PopularTv = () => {   

const [ movies, setMovies ] = useState([]);

useEffect(() => {
    fetch('http://localhost:8080/tv/popularTV')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setMovies(data.results);
    });
}, []);

return(    
  <div className='movie-container'>
     {movies.length > 0 && movies.map((movie) => 
         <TvPopularHome key={movie.id} {...movie} />)}
  </div>
);
}

export default PopularTv;