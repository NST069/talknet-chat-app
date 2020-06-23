import React from "react";

const Header = ({room})=>{
    return(
        <div>
            <div className="Left">
                <div className="OnlineIcon"></div>
                <h1>{room}</h1>
            </div>
            <div className="Right">
                <a href="/">Leave chat</a>
            </div>
        </div>
    );

};

export default Header;