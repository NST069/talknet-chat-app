import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";

import Message from "./Message";

const Messages = ({messages, name})=>{
    return(
        <ScrollToBottom>
            <ul className="list-group">
                {messages.map((message, i)=>
                    <div key = {i}>
                        <Message message={message} name={name}/>
                    </div>
                )}
            </ul>
            
        </ScrollToBottom>
    );

};

export default Messages;