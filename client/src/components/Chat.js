import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import Header from "./Header";
import Input from "./Input";
import Messages from "./Messages";
import TextContainer from "./TextContainer";

let socket;

const Chat=({location})=>{
    const [name, setName] = useState("");
    const [room, setRoom] = useState(""); 
    const [messages, setMessages] = useState([]); 
    const [message, setMessage] = useState(""); 
    const [users, setUsers] = useState([]);    
    //const endpoint = "https://talknet-chat-app.herokuapp.com/";
    const endpoint = "localhost:5000";

    const setAt = (name)=>{
        let atUser = ` @${name} `;
        if(!message.includes(atUser))
            setMessage(message + (message.endsWith(' ')?atUser.substring(1):atUser));
    }
    const isOnline = name => users.find((u)=>u.name===name)!==undefined;

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
        socket.on("systemMessage",(message)=>{
            setMessages([...messages, {user:null, text:message.text}]);
        });
        socket.on("roomData", ({users})=>{
            setUsers(users);
        });
    }, [messages]);
    
    const sendMessage = (event)=>{
        event.preventDefault();

        if(message){
            socket.emit("sendMessage", message, ()=>setMessage(""));
        }
    };

    console.log(message, messages);
    return(
        <div>
            <Header room={room}/>
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title">Room: {room}</h5>
                </div>
                
                <div className="row">
                    <div className="col-8">
                        <div className="card-body">
                            <Messages 
                                messages={messages} 
                                name={name}
                                setAt={setAt}
                                isOnline={isOnline}
                            />
                            <Input 
                                message={message}
                                setMessage={setMessage}
                                sendMessage={sendMessage}
                            />
                        </div>
                    </div>
                    <div className="col-4">
                        <TextContainer 
                            users={users}
                            setAt={setAt}
                            />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;