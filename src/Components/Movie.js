/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import Info from "./Info";
import img_1 from '../Images/icon_imdb.png'

import { _previousMovies } from "../Style";
import { _currentMovie } from "../Style";

// Movie object
// creates movie instance from info

function Movie({isCurrent}){

    const [listIndex, setListIndex] = useState(0);
    const [ShowInfo, setShowInfo] = useState(false);
    
    const setCurrentMovie= (index)=>{ setListIndex(index)
        console.log(index)
    }	  
    
    return(
        <div>
            <_currentMovie>
                {/* SHOWCASE ALL INFO */}
                <img src={Info[listIndex].coverImg} className="movieCover" height={600} width={400} alt="Movie Cover"/>
                <div className="currentMovieInfo">
                    <p>{Info[listIndex].title}</p>
                    <div>
                        <img src={Info[listIndex].profilePic} height={40} width={40} alt="profile"/>
                        <p>{Info[listIndex].moviePicker}</p>
                    </div>
                    <p>{Info[listIndex].genres}</p>
                    <p>{Info[listIndex].duration}</p>
                    <div>
                        <img src={img_1} alt="imdb icon"/>
                        <p>{Info[listIndex].rate}</p>
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