import React from "react";

const Input = ({message, setMessage, sendMessage})=>{
    return(
        <div className="input-group mb-3">
            <input
                className="form-control"
                type="text"
                placeholder="Type message"
                value={message} 
                onChange={(event)=>setMessage(event.target.value)}
                onKeyPress={event=>event.key==="Enter"?sendMessage(event):null}
                aria-label="New Message" aria-describedby="button-send"/>
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" 
                    type="button" 
                    id="button-send" 
                    onClick={(event)=>sendMessage(event)}
                >Send</button>
            </div>
        </div>
    );

};

export default Input;