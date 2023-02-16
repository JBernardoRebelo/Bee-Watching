/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import Info from "./Info";

import img_1 from '../Images/icon_imdb.png'
import img_2 from '../Images/clock-icon.png'
import img_3 from '../Images/icon_rt.png'
import img_4 from '../Images/icon_metacritic.png'
import img_5 from '../Images/icon_play.png'

import { _previousMovies } from "../Style";
import { _currentMovie } from "../Style";
import { _par } from "../Style";

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
                {/* <img src={Info[listIndex].coverImg} className="movieCover" height={600} width={400} alt="Movie Cover"/> */}
                <div className="currentMovieInfo">
                    <p className="title">{Info[listIndex].title}</p>
                    <div className="flex">
                        <_par>{Info[listIndex].year}</_par>
                        <_par>{Info[listIndex].genres}</_par>
                        <img src={img_2} height={30} width={30} alt="clock icon"/>
                        <_par>{Info[listIndex].duration}</_par>
                    </div>
                    <div className="flex">
                        <div>
                            <img src={img_1} height={40} width={40} alt="imdb icon"/>
                            <_par>{Info[listIndex].rate}</_par>
                        </div>
                        <div>
                            <img src={img_3} height={40} width={40} alt="rotten tomatoes icon"/>
                            <_par>{Info[listIndex].rateRT}</_par>
                        </div>
                        <div>
                            <img src={img_4} height={40} width={40} alt="metacritic icon"/>
                            <_par>{Info[listIndex].rateMT}</_par>
                        </div>
                        <div>
                            <img src={img_5} height={40} width={40} alt="trailer icon"/>
                            <a href={Info[listIndex].trailer}><_par>Trailer</_par></a>
                        </div>
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