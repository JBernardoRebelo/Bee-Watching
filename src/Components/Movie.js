import React from "react";

// Movie object
// creates movie instance from info

var title;
var coverImg;
var moviePicker;
var genres;
var duration;
var rate;

export default function Movie(prop){

    // coverImg = prop.coverImg; 
    // title = prop.title;
    // moviePicker = prop.moviePicker;
    // genres = prop.genres;
    // duration = prop.duration;
    // rate = prop.rate;

    coverImg = prop.coverImg; 
    title = prop.title;
    moviePicker = prop.moviePicker;
    genres = prop.genres;
    duration = prop.duration;
    rate = prop.rate;
    
    return(
        <div className="movie">
            {/* SHOWCASE ALL INFO */}
            <img src={coverImg} height={300} width={200} alt="Movie Cover"/>
            <p>Title: {title}</p>
            <p>Movie Picker: {moviePicker}</p>
            <p>Genre: {genres}</p>
            <p>Duration: {duration}</p>
            <p>Rate: {rate}</p>
        </div>
    )
}
