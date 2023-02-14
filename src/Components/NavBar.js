import React from "react";

export default function NavBar(){
    return(
        <div>
            <h1>Fix what's commented -Vegui</h1>
                <nav className="nav_style">
                    <div className="opt_Bar">
                        {/* <link>Home</link>
                        <link>Draw</link>
                        <link>Requests</link>
                        <link>Awards</link> */}
                        <div className="showSeason">
                            <h3>Season</h3>
                        </div>
                    </div>
                </nav>
        </div>
    )
}