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
import { _par2 } from "../Style";

// Movie object
// creates movie instance from info

function Movie(){

    const [listIndex, setListIndex] = useState(0);
    
    const setCurrentMovie= (index)=>{ setListIndex(index)
        console.log(index)
    }	  
    
    return(
        <div>
            <_currentMovie>
                {/* SHOWCASE ALL INFO */}
                {/* <img src={Info[listIndex].coverImg} className="movieCover" height={600} width={300} alt="Movie Cover"/> */}
                <div className="currentMovieInfo">
                    <p className="title">{Info[listIndex].title}</p>
                    <div className="flex">
                        <_par>{Info[listIndex].year}</_par>
                        <_par>{Info[listIndex].genres}</_par>
                        <img src={img_2} height={12} width={12} alt="clock icon"/>
                        {Info[listIndex].duration}
                    </div>
                    <div className="flex">
                        <div>
                            <img src={img_1} height={25} width={25} alt="imdb icon"/>
                            <_par2>{Info[listIndex].rate}</_par2>
                        </div>
                        <div>                      
                            <img src={img_3} height={25} width={25} alt="rotten tomatoes icon"/>
                            <_par2>{Info[listIndex].rateRT}</_par2>
                        </div>
                        <div>
                            <img src={img_4} height={25} width={25} alt="metacritic icon"/>
                            <_par2>{Info[listIndex].rateMT}</_par2>
                        </div>
                        <div>
                            <img src={img_5} height={25} width={25} alt="trailer icon"/>
                            <a href={Info[listIndex].trailer} className="navBarElement"><_par2>Trailer</_par2></a>
                        </div>
                    </div>
                    <div>
                        <img className ="portraits" src={Info[listIndex].profilePic} height={30} width={30} alt="profile"/>
                        <p>{Info[listIndex].moviePicker}</p>
                    </div>
                </div>
            </_currentMovie>
            <h3 className="italic">Previous Movies</h3>
            <_previousMovies>
                <div className="listStyle">
                    {Info.map((item, index) => {
                    return(
                        <div className="moviePreviousMovie" onClick={()=> setCurrentMovie(index) }>
                            <img src={item.coverImg} className="movieCover" height={210} width={140} alt="Movie Cover"/>
                            <div className="overlay">
                                <p className="title">{item.title}</p>
                                <p>{item.genres}</p>
                                <p>{item.duration}</p>
                                <div>
                                    <div>
                                        <img src={img_5} height={15} width={15} alt="trailer icon"/>
                                        <a href={item.trailer} className="navBarElement"><_par>Trailer</_par></a>
                                    </div>
                                    <div className="flexbox">
                                        <div>
                                            <img src={img_1} height={20} width={20} alt="imdb icon"/>
                                            <_par>{item.rate}</_par>
                                        </div>
                                        <div>
                                            <img src={img_3} height={20} width={20} alt="rotten tomatoes icon"/>
                                            <_par>{item.rateRT}</_par>
                                        </div>
                                        <div>
                                            <img src={img_4} height={20} width={20} alt="metacritic icon"/>
                                            <_par>{item.rateMT}</_par>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="moviePicker">
                                <img className="portraits" src={item.profilePic} height={30} width={30} alt="profile"/>
                                <p>{item.moviePicker}</p>
                            </div>
                        </div>        
                    )
                    })}
                </div>
            </_previousMovies>
        </div>
    )
}

export default Movie;