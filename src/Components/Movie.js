import React, { useState } from "react";
import Info from "./Info";

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
                {console.log("entrei no current movie")}
                {/* SHOWCASE ALL INFO */}
                <img src={Info[listIndex].coverImg} className="movieCover" height={300} width={200} alt="Movie Cover"/>
                <div className="currentMovieInfo">
                    <p>Title: {Info[listIndex].title}</p>
                    <p>Movie Picker: {Info[listIndex].moviePicker}</p>
                    <p>Genre: {Info[listIndex].genres}</p>
                    <p>Duration: {Info[listIndex].duration}</p>
                    <p>Rate: {Info[listIndex].rate}</p>
                </div>
            </div>   
            <div className="previousMovies">
                    {console.log("entrei no previous movie")}
                    {Info.map((item, index) => {
                    return(
                        <div className="moviePreviousMovie" onClick={()=> setCurrentMovie(index) }>
                            <img src={item.coverImg} className="movieCover" height={300} width={200} alt="Movie Cover"/>
                            <p>Title: {item.title}</p>
                            <p>Movie Picker: {item.moviePicker}</p>
                        </div>        
                    )
                    })}
            </div>
        </div>
    )
}

export default Movie;