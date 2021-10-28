import React, { useEffect, useState } from "react";
import MovieUpcoming from './MovieUpcoming';

const Upcoming = () => {   

const [ movies, setMovies ] = useState([]);

useEffect(() => {
    fetch('http://localhost:8080/movie/upcomingMovies')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setMovies(data.results);
    });
}, []);

return(    
  <div className='movie-container'>
     {movies.length > 0 && movies.map((movie) => 
         <MovieUpcoming key={movie.id} {...movie} />)}
  </div>
);
}

export default Upcoming;