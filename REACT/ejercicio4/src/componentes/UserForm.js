import React from "react";

class UserForm extends React.Component {
    render () {
        return(
            <>
                <form onSubmit={this.props.onAddUser}>
                    <input type="text" placeholder="Nombre"/>
                    <input type="email" placeholder="Email"/>
                    <input type="submit"  value="Guardar"/>
                </form>
            </>
        );
    }
}

export default UserForm;