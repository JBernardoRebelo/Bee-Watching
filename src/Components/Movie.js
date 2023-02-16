/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import Info from "./Info";

import img_1 from '../Images/icon_imdb.png'
import img_2 from '../Images/clock-icon.png'
import img_3 from '../Images/icon_rt.png'
import img_4 from '../Images/icon_metacritic.png'

import { _previousMovies } from "../Style";
import { _currentMovie } from "../Style";

// Movie object
// creates movie instance from info

function Movie({isCurrent}){

    const [listIndex, setListIndex] = useState(0);
    
    const setCurrentMovie= (index)=>{ setListIndex(index)
        console.log(index)
    }	  
    
    return(
        <div>
            <_currentMovie>
                {/* SHOWCASE ALL INFO */}
                {/* <img src={Info[listIndex].coverImg} className="movieCover" height={600} width={400} alt="Movie Cover"/> */}
                <div className="currentMovieInfo">
                    <p>{Info[listIndex].title}</p>
                    <div className="flex">
                        <p>{Info[listIndex].year}</p>
                        <p>{Info[listIndex].genres}</p>
                        <img src={img_2} height={30} width={30} alt="clock icon"/>
                        <p>{Info[listIndex].duration}</p>
                    </div>
                    <div className="ratings-style">
                        <img src={img_1} alt="imdb icon"/>
                        <p>{Info[listIndex].rate}</p>
                        <img src={img_3} alt="rotten tomatoes icon"/>
                        <p>{Info[listIndex].rateRT}</p>
                        <img src={img_4} alt="metacritic icon"/>
                        <p>{Info[listIndex].rateMT}</p>
                    </div>
                    <div>
                        <img src={Info[listIndex].profilePic} height={40} width={40} alt="profile"/>
                        <p>{Info[listIndex].moviePicker}</p>
                    </div>
                </div>
            </_currentMovie>
            <h2>Previous Movies</h2>
            <_previousMovies>
                {Info.map((item, index) => {
                return(
                    <div className="moviePreviousMovie" onClick={()=> setCurrentMovie(index) }>
                
                            <img src={item.coverImg} className="movieCover" height={300} width={200} alt="Movie Cover"/>
                            <div className="overlay">
                                <p classname="title">{item.title}</p>
                                <p>{item.genres}</p>
                                <p>{item.duration}</p>
                            </div>

                        <img src={item.profilePic} height={30} width={30} alt="profile"/>
                        <p>{item.moviePicker}</p>
                    </div>        
                )
                })}
            </_previousMovies>
        </div>
    )
}

export default Movie;