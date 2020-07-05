import React from "react";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const TextContainer = ({users, setAt})=>{
    return(
        <div>
            <Typography variant="subtitle1" color="initial">Users in Room: {users.length}</Typography>
            {users 
            ?<List dense>
                {users.map((user)=>
                    <ListItem button key={user.id} onClick={(event)=>{
                        setAt(event.target.textContent);}}>
                        <ListItemText primary={user.name} />
                    </ListItem>
                )}
            </List>
            : null}
            
        </div>
    );
};

export default TextContainer;