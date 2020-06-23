import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

let socket;

const Chat=({location})=>{
    const [name, setName] = useState("");
    const [room, setRoom] = useState(""); 
    const [messages, setMessages] = useState([]); 
    const [message, setMessage] = useState("");     
    const endpoint = "localhost:5000";

    useEffect(()=>{
        const {name, room} = queryString.parse(location.search);

        socket = io(endpoint);

        setName(name);
        setRoom(room);

        socket.emit("join", {name, room}, ()=>{});
        
        return ()=>{
            socket.emit("disconnect");
            socket.off();
        };
    }, [endpoint, location.search]);
    
    useEffect(()=>{
        socket.on("message", (message)=>{
            setMessages([...messages, message]);
        });
    }, [messages]);
    
    //sending msg
    const sendMessage = (event)=>{
        event.preventDefault();

        if(message){
            socket.emit("sendMessage", message, ()=>setMessage(""));
        }
    };

    console.log(message, messages);
    return(
        <div>
            <input value={message} 
                onChange={(event)=>setMessage(event.target.value)}
                onKeyPress={event=>event.key==="Enter"?sendMessage(event):null}
            />
        </div>
    );
}

export default Chat;