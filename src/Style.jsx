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

    .linkStyle{
        text-decoration: none;
        color: white;
    }

`
export const _navStyle = styled.section `
    
    display: flexbox;
    text-align: center;
    padding: 3%;
    justify-content: space-between;

    .seasonStyle{
        margin-top: -35px;
        margin-right: 50px;
        font-size: medium;
        font-weight: bolder;
    }
    
    .seasonLayout{
        position: absolute;
        margin-top: -20px;
        margin-left: 25px;
    }

    .navBarClick{
        display: flexbox;
        align-items: center;
    }

    .navBarElement:hover{
        color: rgb(240, 255, 36);
    }

    .SeasonsHover:hover{
        color: rgb(240, 255, 36);
    }
    .navBarElement{
        margin: 20px;
        font: bold;
        color: white;
        text-decoration: none;
    }

    .clickSeasonSyle{
        margin: 20px;
        font: bold;
        color: white;
        cursor: pointer;
    }

    .seasonIcon{
        margin-bottom: -25px;
        margin-left: -10px;
    }
`
export const _previousMovies = styled.section`
    
    text-align: center;
    font-weight: bold;
    display: flex;
    margin: 20px;

    .flexbox{
        padding-top: 20px;
        padding-left: 5px;
        margin-left: 10px;
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
        bottom: 115px;
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
    }

    .navBarElement{
        color: white;
        text-decoration: none;
    }

    .navBarElement:hover{
        color: rgb(240, 255, 36);
    }

    .moviePicker{
        margin: 20px;
    }

    `

export const _currentMovie = styled.section`

    margin: 50px;
    text-align: center;
    font-weight: bold;

    .flex{
        margin: 50px;
        display: flexbox;
        justify-content: center;
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
        text-shadow: 2px 2px #1117;
    }

    .navBarElement{
        color: white;
        text-decoration: none;
    }

    .navBarElement:hover{
        color: rgb(240, 255, 36);
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

export const _flexBox = styled.section`

    display: flexbox;

`