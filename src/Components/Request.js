import React from "react";
import { Link } from "react-router-dom";
export default function Request()
{
    return(
        <div>
            <h1>I am in the Request page</h1>
            <Link to="/">Home</Link>
        </div>

    )
}