import React , { useState } from "react";
import { Link } from "react-router-dom";

const Join=()=>{
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");    

    return(
        <div>
            <div className="jumbotron">
                <div className="container container-fluid align-center">
                    <h1 className="display-4">Join</h1>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Username" aria-label="Username"
                        onChange={(event)=>{setName(event.target.value)}}/>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Room" aria-label="Room"
                        onChange={(event)=>{setRoom(event.target.value)}}/>
                    </div>
                    <Link onClick={event=>(!name||!room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                        <button type="button" className="btn btn-primary btn-lg btn-block">Sign In</button>
                    </Link>
                </div>
            </div>
            
        </div>
    );
}

export default Join;