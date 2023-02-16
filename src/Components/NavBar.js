/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import img_logo from '../Images/Bee_Watching_Logo.png';
import { Link } from "react-router-dom";
import { _navStyle } from "../Style";


export default function NavBar(){
    const[showSeaon, setShowSeason] = useState(false)
    let Seasons;
    if(showSeaon){
        Seasons= (
            <div>
                <p>Season 1</p>
                <p>Season 2</p>
                <p>Season 3</p>
                <p>Season 4</p>
                <p>Season 5</p>
                <p>Season 6</p>
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
                <Link to="/" className="navBarElement">Home</Link>
                <Link to="/Draw" className="navBarElement">Draw</Link>
                <Link to="/Request" className="navBarElement">Request</Link>
                <Link to="/Awards" className="navBarElement">Awards</Link>
                <h3 onClick={()=> setShowSeason(!showSeaon)} className="navBarElement">Season</h3>
                {Seasons}
            </div>
        </_navStyle>
    )
}