import React from "react";

const Input = ({message, setMessage, sendMessage})=>{
    return(
        <form className="form">
            <input 
                className="input"
                type="text"
                placeholder="Type message"
                value={message} 
                onChange={(event)=>setMessage(event.target.value)}
                onKeyPress={event=>event.key==="Enter"?sendMessage(event):null}
            />
            <button className="send" onClick={(event)=>sendMessage(event)}>Send</button>
        </form>
    );

};

export default Input;