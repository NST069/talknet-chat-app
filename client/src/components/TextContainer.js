import React from "react";

const TextContainer = ({users})=>{
    return(
        <div>
            {users ?
            <div>
                {users.map((user)=>
                    <div key={user.id}>
                        <p>{user.name}</p>
                    </div>
                )}
            </div>
            : null}
        </div>
    );

};

export default TextContainer;