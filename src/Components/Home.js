import React, { Component , useEffect, useState } from "react";
import Navbar from "./Navbar.js";
import Movie from './Movie.js';

const Featured_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const Search_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const Home = () => {   

const [ movies, setMovies ] = useState([]);

useEffect(() => {
    fetch(Featured_API)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setMovies(data.results);
    });
}, []);

return(
    <div>
    <div className='navbar-style'>
        <Navbar />
    </div>
  <div className='movie-container'>
     {movies.length > 0 && movies.map((movie) => 
         <Movie key={movie.id} {...movie} />)}
  </div>
  </div>
);
}

export default Home;