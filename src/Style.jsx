import styled from "styled-components";

export const _App = styled.section`

    font: bold;
    color: white;
    text-align: center;

    .App-link {
        color: #61dafb;
    }

    .nav_style{
        position: relative;
        top: 0;
        left: 0px;
    }

`

export const _previousMovies = styled.section`
    
    border: solid red;
    display: flex;
    margin: 20px;

    .moviePreviousMovie{
        border: solid red;
        margin: 10px;
    }

    .movieCover{
        border: red;
        border-radius: 15px;
      }
    
    .previousMovies{
        border: solid red;
        display: flex;
        margin: 20px;
    }

    `;

export const _currentMovie = styled.section`

    border: solid red;
    margin: 20px;
    font-style: italic;
    display: flex;

    .currentMovieInfo{
        margin: 20px;
        font-size:x-large;
    }

    .movieCover{
        border: red;
        border-radius: 15px;
    }
`