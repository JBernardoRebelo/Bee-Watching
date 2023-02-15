import React, { useEffect, useState } from "react";
import Info from "./Info";

// Movie object
// creates movie instance from info

function Movie({isCurrent}){

    const [listIndex, setListIndex] = useState(0);
    
    var showMovie = 0;
    const setCurrentMovie= (index)=>{ setListIndex(index)
        console.log(index)
    }	
    
    
    return(
        <div>
            <div className="movie">
                {console.log("entrei no current movie")}
                {/* SHOWCASE ALL INFO */}
                <img src={Info[listIndex].coverImg} height={300} width={200} alt="Movie Cover"/>
                <p>Title: {Info[listIndex].title}</p>
                <p>Movie Picker: {Info[listIndex].moviePicker}</p>
                <p>Genre: {Info[listIndex].genres}</p>
                <p>Duration: {Info[listIndex].duration}</p>
                <p>Rate: {Info[listIndex].rate}</p>
            </div>
               
            <div className="previousMovies">
                    {console.log("entrei no previous movie")}
                    {Info.map((item, index) => {
                        return(
                            <div className="movie" onClick={()=> setCurrentMovie(index) }>
                                <img src={item.coverImg} height={300} width={200} alt="Movie Cover"/>
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