import React from "react";
import Reactemoji from "react-emoji";

const Message = ({message: {user, text}, name})=>{
    const trimmedName= name.trim().toLowerCase();

    let sentByCurrentUser = user===trimmedName;
    
    return(
        sentByCurrentUser?
        (
            <div>
                <p>Me</p>
                <p>{Reactemoji.emojify(text)}</p>
            </div>
        )
        :
        (
            <div>
                <p>{user}</p>
                <p>{Reactemoji.emojify(text)}</p>
            </div>
        )
    );

};

export default Message;