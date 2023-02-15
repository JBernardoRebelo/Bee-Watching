import React, { useState } from "react";
import Info from "./Info";
import img_1 from '../Images/icon_imdb.png'

// Movie object
// creates movie instance from info

function Movie({isCurrent}){

    const [listIndex, setListIndex] = useState(0);
    
    const setCurrentMovie= (index)=>{ setListIndex(index)
        console.log(index)
    }	  
    
    return(
        <div>
            <div className="currentMovie">
                {/* SHOWCASE ALL INFO */}
                <img src={Info[listIndex].coverImg} className="movieCover" height={300} width={200} alt="Movie Cover"/>
                <div className="currentMovieInfo">
                    <p>{Info[listIndex].title}</p>
                    <p>{Info[listIndex].moviePicker}</p>
                    <p>{Info[listIndex].genres}</p>
                    <p>{Info[listIndex].duration}</p>
                    <div>
                    <img src={img_1} alt="imdb icon"/>
                    <p>{Info[listIndex].rate}</p>
                    </div>
                </div>
            </div>
            <h2>Previous Movies</h2>
            <div className="previousMovies">
                {Info.map((item, index) => {
                return(
                    <div className="moviePreviousMovie" onClick={()=> setCurrentMovie(index) }>
                        <img src={item.coverImg} className="movieCover" height={300} width={200} alt="Movie Cover"/>
                        <p classname="title">{item.title}</p>
                        <img src={item.profilePic} height={30} width={30} alt="profile"/>
                        <p>{item.moviePicker}</p>
                    </div>        
                    )
                })}
            </div>
        </div>
    )
}

export default Movie;