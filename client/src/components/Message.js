import React from "react";
import Reactemoji from "react-emoji";
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
            <p className="mb-1">{txt}</p>
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
        ?<li className="list-group-item list-group-item-light">
            <small className="text-muted">{text}</small>
        </li>
        :sentByCurrentUser
            ?<li className="list-group-item list-group-item-primary">
                <Text txt={text}/>
            </li>
            : sentToCurrentUser
                ?<li className="list-group-item list-group-item-warning">
                    <Text txt={text}/>
                    <small className="text-muted" onClick={(event)=>{
                        setAt(event.target.textContent);
                    }}>{user}</small>
                </li>
                :<li className="list-group-item">
                    <Text txt={text}/>
                    <small className="text-muted" onClick={(event)=>{
                        setAt(event.target.textContent);
                    }}>{user}</small>
              </li>
    );

};

export default Message;