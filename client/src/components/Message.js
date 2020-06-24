import React from "react";

const Message = ({message: {user, text}, name})=>{
    const trimmedName= name.trim().toLowerCase();

    let sentByCurrentUser = user===trimmedName;
    
    return(
        sentByCurrentUser?
        (
            <div>
                <p>Me</p>
                <p>{text}</p>
            </div>
        )
        :
        (
            <div>
                <p>{user}</p>
                <p>{text}</p>
            </div>
        )
    );

};

export default Message;