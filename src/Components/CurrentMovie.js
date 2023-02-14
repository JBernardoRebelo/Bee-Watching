// recebes filme e fazes display

// aceita filme escolhido a partir da lista
// <div classname= "showMovie">
// 	movie.name
// 	movie.etc

import React from "react";
import Movie from "./Movie";

export default function CurrentMovie(Movie)
{
    return(
        <div className="currentMovie">
            {Movie}
        </div>
    )
}