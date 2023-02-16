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
        margin: 10px;
    }

    .movieCover{
        border-radius: 15px;
      }
    
    .previousMovies{
        display: flex;
        margin: 20px;
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