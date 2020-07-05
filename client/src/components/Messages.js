import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";

import { Paper } from "@material-ui/core";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import Message from "./Message";

const Messages = ({messages, name, setAt, isOnline})=>{

   return(
        <Paper variant="outlined">
            <ScrollToBottom>
            <List component="nav">
                {messages.map((message, i)=>
                    <ListItem key = {i}>
                        <Message 
                            message={message} 
                            name={name}
                            setAt={setAt}
                            isOnline={isOnline}
                        />
                    </ListItem>
                )}
            </List>
            </ScrollToBottom>
        </Paper>
   );


};

export default Messages;