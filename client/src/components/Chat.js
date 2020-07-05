import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import Header from "./Header";
import MessageSender from "./MessageSender";
import Messages from "./Messages";
import TextContainer from "./TextContainer";

import { Paper, Grid } from "@material-ui/core";

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

    const Search = (event, sname)=>{
        event.preventDefault();

        if(sname){
            socket.emit("search", sname, (user)=>{
                (user===null)
                ? alert(`${sname} is offline`)
                : alert(`${user.name} is in room ${user.room}`);
            });
        }
    };
    
   return(
       <div>
            <Header room={room} Search={Search}/>
            <Paper elevation={3}>
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        <Messages 
                            messages={messages} 
                            name={name}
                            setAt={setAt}
                            isOnline={isOnline}
                        />
                        <MessageSender
                            message={message}
                            setMessage={setMessage}
                            sendMessage={sendMessage}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextContainer 
                            users={users}
                            setAt={setAt}
                        />
                    </Grid>
                </Grid>
            </Paper>
    </div>
   );
}

export default Chat;