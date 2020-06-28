import React, { useState } from "react";

const Header = ({room, Search})=>{
    const [name, setName] = useState("");

    return(
        <div>
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="/">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-house-door" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z"/>
                        <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                    </svg>
                </a>
                <form className="form-inline my-2 my-lg-0">
                    <div className="input-group mb-3">
                        <input className="form-control mr-sm-2" type="search" 
                            placeholder="Search" aria-label="Search" aria-describedby="button-search"
                            onChange={(event)=>setName(event.target.value)}
                            onKeyPress={event=>event.key==="Enter"?Search(event, name):null}/>
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" 
                                type="button" id="button-search"
                                onClick={(event)=>Search(event, name)}>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                                    <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </form>
            </nav>
        </div>
    );

};

export default Header;