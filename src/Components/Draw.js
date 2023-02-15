import React from "react";
import { Link } from "react-router-dom";

export default function Draw()
{
    return(
        <div>
            <h1>I am in the Draw page</h1>
            <Link to="/">Home</Link>
        </div>
        
    )
}