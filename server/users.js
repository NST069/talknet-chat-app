const users = [];

const addUser = ({id, name, room})=>{
    name=name.trim().toLowerCase();
    room=room.trim().toLowerCase();

    const userExists = users.find((user)=>user.room===room&&user.name===name);

    if(userExists){
        return {error: "Username is taken"};
    }

    const user = {id, name, room};
    users.push(user);
    return {user};
};

const getUser = (id)=>users.find((user)=>user.id===id);

const getUserByName = (name)=>{
    name=name.trim().toLowerCase();
    return users.find((user)=>user.name===name);
}

const getUsersInRoom = (room)=>users.filter((user)=>user.room===room);

const removeUser = (id)=>{
    const index = users.findIndex((user)=>user.id===id);
    if(index !== -1){
        return users.splice(index, 1)[0];
    }
};

module.exports = {addUser, getUser, getUserByName, getUsersInRoom, removeUser};