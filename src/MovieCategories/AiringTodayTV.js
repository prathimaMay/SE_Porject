import React, { useEffect, useState } from "react";
import TvAiringTodayHome from './TvAiringTodayHome';

const AiringTodayTV = () => {   

const [ movies, setMovies ] = useState([]);

useEffect(() => {
    fetch('http://localhost:8080/tv/airingToday')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setMovies(data.results);
    });
}, []);

return(    
  <div className='movie-container'>
     {movies.length > 0 && movies.map((movie) => 
         <TvAiringTodayHome key={movie.id} {...movie} />)}
  </div>
);
}

export default AiringTodayTV;