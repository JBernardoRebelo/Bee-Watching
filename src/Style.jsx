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
        position: relative;
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


    .overlay{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 89px;
        border-radius: 15px;
        opacity: 0;
        transition: opacity 0.4s ease-in-out;
        background: black;
        cursor: pointer;
      }
      
    .moviePreviousMovie:hover .overlay{
        opacity: 0.8;
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
