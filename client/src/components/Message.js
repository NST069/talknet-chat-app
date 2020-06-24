import React from "react";
import Reactemoji from "react-emoji";

const Message = ({message: {user, text}, name})=>{
    const trimmedName= name.trim().toLowerCase();

    let sentByCurrentUser = user===trimmedName;
    let sentToCurrentUser = text.includes(`@${name}`) || text.includes(`@${trimmedName}`);
    
    return(
        sentByCurrentUser
        ?<li className="list-group-item list-group-item-primary">
            <p className="mb-1">{Reactemoji.emojify(text)}</p>
        </li>
        : sentToCurrentUser
            ?<li className="list-group-item list-group-item-warning">
                <p className="mb-1">{Reactemoji.emojify(text)}</p>
                <small className="text-muted">{user}</small>
            </li>
            :<li className="list-group-item">
                <p className="mb-1">{Reactemoji.emojify(text)}</p>
                <small className="text-muted">{user}</small>
            </li>
    );

};

export default Message;