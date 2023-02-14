// mostra filmes fornecidos

// showcase each movie with info
// <div geral (layout, fade, etc)>
// 	<div each movie (hover)>

import React from "react";

export default function PreviousMovies(movies)
{
    return(
        <div className="previousMovies">
            {movies}
        </div>
    )
}