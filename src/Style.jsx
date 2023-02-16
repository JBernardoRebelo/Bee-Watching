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
    
    display: flex;
    margin: 20px;

    .moviePreviousMovie{
        position: relative;
        border: solid red;
        margin: 10px;
    }

    .movieCover{
        border-radius: 15px;
      }
    
    .previousMovies{
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

    margin: 50px;
    font-style: italic;
    text-align: center;

    .flex{
        display: flex;
        justify-content: center;
        padding-left: 10px;
    }

    .currentMovieInfo{
        margin: 20px;
        font-size:x-large;
    }

    .movieCover{
        border-radius: 15px;
    }
`