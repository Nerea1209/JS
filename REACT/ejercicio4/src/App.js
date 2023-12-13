import React from 'react';
import UserList from './componentes/UserList';
import UserForm from './componentes/UserForm';

class App extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      users: [
        {id: 1, name:"perico", email: "perico@myfpschool.com"},
        {id: 2, name:"juanico", email: "juanico@myfpschool.com"},
        {id: 3, name:"andrés", email: "andres@myfpschool.com"}
      ],
    }
  }

  handlerOnAddUser(event){
    event.preventDefault();
    console.log(event.target.name.value + " " + event.target.email.value);
  }

  render () {
    return (
      <div className="App">
        <h2>Me mola Myfpschool</h2>
        <div>
          <p><strong>Añade usuarios</strong></p>
          <UserList users={this.state.users} />
        </div>
        <UserForm onAddUsser={(e) => this.handlerOnAddUser(e)} />
      </div>
    );
  }
}

export default App;
