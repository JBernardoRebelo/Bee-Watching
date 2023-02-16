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
export const _nav_style = styled.section `
    position: relative;
    top: 0;
    right: 0;
    left: 0;
    padding-bottom: 30;

    .img_style{
        position: absolute;
        top: 0;
        left: 100px;
    }

    .opt_Bar{
        position: absolute;
        top: 20;
        right: 0;
    }
`
export const _previousMovies = styled.section`
    
    display: flex;
    margin: 20px;

    .moviePreviousMovie{
        position: relative;
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
    text-align: center;
    font-weight: bold;

    .flex{
        margin: 50px;
        display: flexbox;
        justify-content: center;
        word-spacing: 5px;
    }

    .currentMovieInfo{
        margin: 20px;
        font-size:x-large;
    }

    .movieCover{
        border-radius: 15px;
    }

    .title{
        font-style: italic;
        font-size: xx-large;
        font-weight: bolder;
    }
`

export const _par = styled.section`

    padding-left: 20px;
    padding-right: 20px;

`