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

    .italic{
        font-style: italic;
    }

`
export const _navStyle = styled.section`
    
    display: flex;
    text-align: center;
    padding: 1%;
    justify-content: space-around;
    margin-top: -15px;

    .seasonStyle{
        margin-top: -35px;
        margin-right: 50px;
        font-size: medium;
        font-weight: bolder;
    }
    
    .seasonLayout{
        visibility: hidden;
        position: absolute;
        transform: translateY(-3em);
        z-index: 0;
        transition: all 0.3s ease 0s, visibility 0s linear 0.3s, z-index 0s linear 0.01s;
        margin-top: -2px;
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
        position: relative;
        display: inline-block;
    }
    .SeasonFit{
        margin: 20px;
        font: bold;
        color: white;
        cursor: pointer;
    }

    .clickSeasonSyle:hover .seasonLayout{
        visibility: visible;
        transform: translateY(0);
        transition-delay: 0s, 0s, 0.3s;
        z-index: 1;
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
    margin: 10px;
    scroll-behavior: smooth;
    position: relative;

    .listStyle{
        width: fit-content;
        display: flex;
        scroll-behavior: smooth;
        overflow: auto;
        margin-left: 100px;
        margin-right: 100px;
    }
    
    .listStyle::after{
        position: absolute;
        top: 10px;
        right: 100px;
        content: "";
        z-index: 99;
        height: 62%;
        width: 100px;
        background-image: linear-gradient(-90deg, #272d2f, transparent);
    }
    
    .listStyle::before{
        position: absolute;
        top: 10px;
        left: 100;
        content: "";
        z-index: 99;
        height: 62%;
        width: 100px;
        background-image: linear-gradient(90deg, #272d2f, transparent);
    }

    .flexbox{
        padding-top: 30px;
        padding-left: 10px;
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
        bottom: 90px;
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
        margin: 10px;
        font-size: small;
    }

    .portraits{
        border-radius: 50%;
    }

    `

export const _currentMovie = styled.section`

    text-align: center;
    font-weight: bold;

    .flex{
        margin: 15px;
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
        font-size: x-large;
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

    .portraits{
        border-radius: 50%;
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