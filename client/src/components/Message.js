import React from "react";
import Reactemoji from "react-emoji";

const Message = ({message: {user, text}, name, setAt})=>{
    const trimmedName= name.trim().toLowerCase();

    let sentByCurrentUser = user===trimmedName;
    let sentToCurrentUser = text.includes(` @${name} `) || text.includes(` @${trimmedName} `);
    let sentBySystem = user===null;
    
    return(
        sentBySystem
        ?<li className="list-group-item list-group-item-light">
            <small className="text-muted">{text}</small>
        </li>
        :sentByCurrentUser
            ?<li className="list-group-item list-group-item-primary">
                <p className="mb-1">{Reactemoji.emojify(text)}</p>
            </li>
            : sentToCurrentUser
                ?<li className="list-group-item list-group-item-warning">
                    <p className="mb-1">{Reactemoji.emojify(text)}</p>
                    <small className="text-muted" onClick={(event)=>{
                        setAt(event.target.textContent);
                    }}>{user}</small>
                </li>
                :<li className="list-group-item">
                    <p className="mb-1">{Reactemoji.emojify(text)}</p>
                    <small className="text-muted" onClick={(event)=>{
                        setAt(event.target.textContent);
                    }}>{user}</small>
              </li>
    );

};

export default Message;