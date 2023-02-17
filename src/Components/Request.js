import React from "react";
import { Link } from "react-router-dom";
export default function Request()
{
    return(
        <div>
            <div>
                <h1>Request page</h1>
                <h2><Link className="linkStyle" to="/">Home</Link></h2>
            </div>
        </div>
    )
}