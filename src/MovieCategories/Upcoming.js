import React, { useEffect, useState } from "react";
import MovieUpcoming from './MovieUpcoming';

const BaseURL = "https://api.themoviedb.org/3";
const Search_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const APIKEY = '04c35731a5ee918f014970082a0088b1'

const Upcoming = () => {   

const [ movies, setMovies ] = useState([]);

useEffect(() => {
    fetch(''.concat(BaseURL, '/movie/upcoming?api_key=', APIKEY, '&language=en-US&page=1'))
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