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
    border: solid red;
    padding: 3%;

    .img_style{
        border: solid red;
        position: absolute;
        top: 0px;
        left: 100px;
    }

    .opt_Bar{
        border: solid red;
        position: absolute;
        top: 0;
        right: 10px;
        display: flex;
    }

    .links{
        border: solid red;
        padding-left: 30px;
        padding-right: 30px;
    }
`
export const _previousMovies = styled.section`
    
    text-align: center;
    font-weight: bold;
    display: flex;
    margin: 20px;

    .flexbox{
        padding-top: 40px;
        padding-left: 10px;
        display: flexbox;
    }

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
        font-size: 10px;

      }
      
    .moviePreviousMovie:hover .overlay{
        opacity: 0.8;
    }

    .title{
        font-style: italic;
        font-size: large;
        font-weight: bolder;
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
        word-spacing: 10px;
        
    }

    .currentMovieInfo{
        margin: 20px;
        font-size: 15px;

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

    padding-left: 10px;
    padding-right: 10px;

`
export const _par2 = styled.section`

    padding-left: 30px;
    padding-right: 30px;

`