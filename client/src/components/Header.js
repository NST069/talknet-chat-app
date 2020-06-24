import React from "react";

const Header = ({room})=>{
    return(
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">{room}</li>
            </ol>
        </nav>
    );

};

export default Header;