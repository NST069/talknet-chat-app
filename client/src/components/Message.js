import React from "react";
import Reactemoji from "react-emoji";

const Message = ({message: {user, text}, name})=>{
    const trimmedName= name.trim().toLowerCase();

    let sentByCurrentUser = user===trimmedName;
    
    return(
        sentByCurrentUser
        ?<li className="list-group-item active">
            <p class="mb-1">{Reactemoji.emojify(text)}</p>
        </li>
        :<li class="list-group-item">
            <p class="mb-1">{Reactemoji.emojify(text)}</p>
            <small class="text-muted">{user}</small>
        </li>
    );

};

export default Message;