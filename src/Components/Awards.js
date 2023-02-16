import React from "react";
import { Link } from "react-router-dom";

export default function Awards()
{
    return(
        <div>
            <h1>Awards page</h1>
            <h2><Link className="linkStyle" to="/">Home</Link></h2>
        </div>
    )
}