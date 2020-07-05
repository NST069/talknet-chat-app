import React from "react";

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';

const MessageSender = ({message, setMessage, sendMessage})=>{
    return(
        <FormControl fullWidth style={{ margin: 8 }}>
            <Input
                placeholder="Type message"
                value={message} 
                onChange={(event)=>setMessage(event.target.value)}
                onKeyPress={event=>event.key==="Enter"?sendMessage(event):null}
                multiline
                fullwidth="true"
                endAdornment={<IconButton type="submit" aria-label="search" onClick={(event)=>sendMessage(event)}>
                <SendIcon/>
            </IconButton>}
            />
        </FormControl>

    );
};

export default MessageSender;