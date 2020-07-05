import React from "react";
import Reactemoji from "react-emoji";

import {Chip, Avatar, Typography} from "@material-ui/core";

const reactStringReplace = require('react-string-replace')

const Message = ({message: {user, text}, name, setAt, isOnline})=>{

    const trimmedName= name.trim().toLowerCase();

    const Text = ({txt})=>{
        txt = reactStringReplace(txt, /@(\w+)/g, (match, i) => (
            isOnline(match)
            ? <span className="text-primary" onClick={(event)=>{
                setAt(event.target.textContent.substring(1));
            }}>@{match}</span>
            : <span className="text-muted">@{match}</span>
          ));
        return(
            <Typography>{txt}</Typography>
        );

    }

    let sentByCurrentUser = user===trimmedName;
    //let sentToCurrentUser = text.includes(` @${name} `) || text.includes(` @${trimmedName} ` || text.includes(` @all `));
    let rg = new RegExp(`@${name} +`,"i");
    let sentToCurrentUser = text.match(rg) || text.match(/@all/g);
    let sentBySystem = user===null;

    text = Reactemoji.emojify(text);

    return(
        sentBySystem
        ?<Chip variant="outlined" size="small" label={<Text txt={text}/>} />
        :sentByCurrentUser
            ?<Chip color="primary" label={<Text txt={text}/>} />
            : sentToCurrentUser
                ?<Chip color="secondary" avatar={<Avatar  onClick={(event)=>{
                    setAt(event.target.textContent);}}>{user}</Avatar>} label={<Text txt={text}/>} />
                :<Chip avatar={<Avatar  onClick={(event)=>{
                    setAt(event.target.textContent);}}>{user}</Avatar>} label={<Text txt={text}/>} />
        
    );
};

export default Message;