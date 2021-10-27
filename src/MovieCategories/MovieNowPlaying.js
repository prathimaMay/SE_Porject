import React from "react";

const Img_API = "https://image.tmdb.org/t/p/w1280";


const MovieNowPlaying = ({ title, poster_path, overview, vote_average}) => ( 
        
<div className='movie'>
<img src={Img_API + poster_path} alt={title} />   
<div className="movie-info">
  <h3>{title}</h3>
  <span>{vote_average}</span>
</div>
                    
</div>
);
    
export default MovieNowPlaying;