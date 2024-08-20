import React, { useEffect, useState } from 'react'
import Loading from '../Loading/Loading'
import myFetch from '../Lib/Lib'
const api_key = "api_key=9b702a6b89b0278738dab62417267c49";
const main_url = "https://api.themoviedb.org/3";
const api_url = main_url + "/discover/movie?sort_by=popularity.desc&" + api_key;
const img_url = "https://image.tmdb.org/t/p/w500";
const searchUrl = main_url + "/search/movie?" + api_key;


function Main() {
    const [moviesRender,setMoviesRender] = useState("")
    useEffect(()=>{
        myFetch(api_url,"GET").then((data)=> setMoviesRender(moviesRender))
    })
  return (
    <main>
        <div class="cont">
            <div class="movie-cont"></div>
        </div>
        <Loading/>
    </main>
  )
}

export default Main