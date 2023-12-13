import React from "react";
import User from "./User";

class UserList extends React.Component {
    render () {
        let lista = this.props.users.map(u =>
            <User 
                key={u.id}
                name = {u.name}
                email = {u.email}
            />
        )
        console.log(lista)
        return(
            <>
            <ul>{lista}</ul>
            </>
        );
    }
}

export default UserList;