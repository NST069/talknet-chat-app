import React from "react";

const TextContainer = ({users, setAt})=>{
    return(
        <ul className="list-group list-group-flush">
            <li className="list-group-item active">Users in Room: {users.length}</li>
            {users 
            ?<div>
                {users.map((user)=>
                    <li key={user.id} className="list-group-item" onClick={(event)=>{
                        setAt(event.target.textContent);
                    }}>{user.name}</li>
                )}
            </div>
            : null}
        </ul>
        
    );

};

export default TextContainer;