import React, { useState } from "react";
import img_logo from '../Images/Bee_Watching_Logo.png';
import { Link } from "react-router-dom";
import { _nav_style } from "../Style";

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
        <_nav_style>
                <img src={img_logo} height={80} width={300} className="img_style" alt="logo"/>
                <div className="opt_Bar">
                    <Link to="/">Home</Link>
                    <Link to="/Draw">Draw</Link>
                    <Link to="/Request">Request</Link>
                    <Link to="/Awards">Awards</Link>
                    <div className="showSeason">
                        <h3 onClick={()=> setShowSeason(!showSeaon)}>Season</h3>
                        {Seasons}
                    </div>
                </div>
        </_nav_style>
            
       
    )
}