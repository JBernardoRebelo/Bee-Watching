import React, { useEffect, useState } from "react";
import Info from "./Info";

// Movie object
// creates movie instance from info

function Movie({isCurrent}){

    const [listIndex, setListIndex] = useState(0);
    
    // useEffect(() => {
    // }, []);

    var showMovie = 0;

    if(isCurrent)
    {
        showMovie =
        <div className="movie">
                    {
                console.log("entrei no current movie")}
                    {/* SHOWCASE ALL INFO */}
                    <img src={Info[listIndex].coverImg} height={300} width={200} alt="Movie Cover"/>
                    <p>Title: {Info[listIndex].title}</p>
                    <p>Movie Picker: {Info[listIndex].moviePicker}</p>
                    <p>Genre: {Info[listIndex].genres}</p>
                    <p>Duration: {Info[listIndex].duration}</p>
                    <p>Rate: {Info[listIndex].rate}</p>
        </div>
    }
    else
    {
        showMovie =
        <div className="previousMovies">
                {console.log("entrei no previous movie")}
                {Info.map((item, index) => {
                    return(
                        <div className="movie" onClick={()=> setListIndex(index++)}>
                            <img src={item.coverImg} height={300} width={200} alt="Movie Cover"/>
                            <p>Title: {item.title}</p>
                            <p>Movie Picker: {item.moviePicker}</p>
                        </div>
                        )
                })}
        </div>
    }

    return(
        <div>
            {showMovie}
        </div>
    )
}

export default Movie;