import React, { useEffect, useState } from "react";
import Movie from './MoviePopular.js';

const Popular = () => {   

const [ movies, setMovies ] = useState([]);

useEffect(() => {
    fetch('http://localhost:8080/movie/popularMovies')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setMovies(data.results);
    });
}, []);

return(    
  <div className='movie-container'>
     {movies.length > 0 && movies.map((movie) => 
         <Movie key={movie.id} {...movie} />)}
  </div>
);
}

export default Popular;