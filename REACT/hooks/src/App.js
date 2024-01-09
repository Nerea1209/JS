
import React, { useState, createContext, useContext } from 'react';

const UserContext = createContext();

function App() {
  const [texto, setTexto] = useState("Alboran");
  return (
    <UserContext.Provider value={texto}>
      <h1>{texto}</h1>
      <Componente2 texto={texto} />
    </UserContext.Provider>
  );
}
const Componente2 = (props) => {
  return (
    <>
      <h2>{props.texto}</h2>
      <Componente3 texto={props.texto} />
    </>
  )
}

const Componente3 = (props) => {
  return (
    <>
      <h3>{props.texto}</h3>
      <Componente4 texto={props.texto} />
    </>
  )
}

const Componente4 = (props) => {
  return (
    <>
      <h4>{props.texto}</h4>
      <Componente5 texto={props.texto} />
    </>
  )
}

const Componente5 = () => {
  const t = useContext(UserContext)
  return (
    <>
      <h5>{t}</h5>
    </>
  )
}

export default App;
