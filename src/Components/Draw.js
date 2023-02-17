import React from "react";
import { Link } from "react-router-dom";

export default function Draw()
{
    return(
        <div>
            <h1>Draw page</h1>
            <h2><Link className="linkStyle" to="/">Home</Link></h2>
        </div> 
    )
}