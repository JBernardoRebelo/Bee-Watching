import React from "react";

// Movie object
// creates movie instance from info

export default function Movie(prop){
    return(
        <div>
            {/* // Something */}

            {/* // Movie Instance */}
            <div className="movie">
                {/* DEBUGGING INFO */}
                <img src={prop.coverImg} height={300} width={200} alt="Movie Cover"/>
                <p>Title: {prop.title}</p>
                <p>Movie Picker: {prop.moviePicker}</p>
                <p>Genre: {prop.genres}</p>
                <p>Duration: {prop.duration}</p>
                <p>Rate: {prop.rate}</p>
            </div>
        </div>
    )
}
