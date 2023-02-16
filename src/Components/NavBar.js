/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";

import img_logo from '../Images/Bee_Watching_Logo.png';
import season_icon from '../Images/icon_season.png';

import { Link } from "react-router-dom";
import { _navStyle } from "../Style";
import { _flexBox } from "../Style";

export default function NavBar(){
    const[showSeason, setShowSeason] = useState(false)
    let Seasons;
    if(showSeason){
        Seasons= (
            <div className="seasonLayout">
                <h4 className="SeasonsHover">Season 1</h4>
                <h4 className="SeasonsHover">Season 2</h4>
                <h4 className="SeasonsHover">Season 3</h4>
                <h4 className="SeasonsHover">Season 4</h4>
                <h4 className="SeasonsHover">Season 5</h4>
                <h4 className="SeasonsHover">Season 6</h4>
            </div>
        )
    }
    return(
        <_navStyle>
            <div>
                <img src={img_logo} height={80} width={300} alt="logo"/>
                <p className="seasonStyle"> Season 2 - 2022</p>  
            </div>
            <div className="navBarClick">
                <h3><Link to="/" className="navBarElement">Home</Link></h3>
                <h3><Link to="/Draw" className="navBarElement">Draw</Link></h3>
                <h3><Link to="/Request" className="navBarElement">Request</Link></h3>
                <h3><Link to="/Awards" className="navBarElement">Awards</Link></h3>
                <div>
                    <_flexBox>
                        <h3 onClick={()=> setShowSeason(!showSeason)} className="clickSeasonSyle">Season</h3>
                        <img src={season_icon} height={13} width={13} className="seasonIcon" alt="season icon"/>
                    </_flexBox>
                    {Seasons}
                </div>
            </div>
        </_navStyle>
    )
}