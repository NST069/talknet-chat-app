import React , { useState } from "react";
import { Link } from "react-router-dom";

import { Container, Paper } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import Button from '@material-ui/core/Button';

const Join=()=>{
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");   
    
   return(
        <Container maxWidth="sm">
            <Paper variant="outlined" align="center" style={{maxWidth: "250px"}}>
            <TextField
                id="username"
                label="Username"
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    <AccountCircle />
                    </InputAdornment>
                ),
                }}
                onChange={(event)=>{setName(event.target.value)}}
            />
            <TextField
                id="room"
                label="Room"
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    <ChatBubbleIcon />
                    </InputAdornment>
                ),
                }}
                onChange={(event)=>{setRoom(event.target.value)}}
            />
            <Link onClick={event=>(!name||!room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                <Button variant="outlined">Sign In</Button>
            </Link>
            </Paper>
        </Container>
   );
}

export default Join;