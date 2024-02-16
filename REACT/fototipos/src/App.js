import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import "./App.css";
import Opciones from './Componentes/Opciones';

function App() {
  return (
    <div className="App">
      <h1>Descubre cuál es su fototipo</h1>
      <section className='contenido'>
        <h2>¿Qué es el fototipo?</h2>
        El fototipo se refiere a la <strong>clasificación</strong> de la respuesta de la piel a la
        exposición solar. Fue desarrollado por el dermatólogo <strong>Thomas B. Fitzpatrick </strong>
        en la década de 1970. El sistema de clasificación de Fitzpatrick tiene en cuenta
        la capacidad de la piel para <strong>broncearse</strong> y su propensión a <strong>quemarse</strong> cuando se
        expone al sol.
      </section>
      <section className='contenido'>
        <h2>Tipos de fototipos</h2>
        <ol>
          <li><strong> Tipo I:</strong>  Piel muy clara, cabello rubio o pelirrojo, ojos claros. Quema fácilmente y raramente se broncea.</li>
          <li><strong> Tipo II:</strong>  Piel clara, cabello rubio o castaño claro, ojos claros. Quema con facilidad y se broncea con dificultad.</li>
          <li><strong> Tipo III:</strong>  Piel clara a intermedia, cabello castaño, ojos de color variable. Quema moderadamente y se broncea gradualmente.</li>
          <li><strong> Tipo IV:</strong>  Piel intermedia, cabello oscuro, ojos de color variable. Quema con dificultad y se broncea con facilidad.</li>
          <li><strong> Tipo V:</strong>  Piel oscura, cabello oscuro, ojos oscuros. Raramente quema y se broncea fácilmente.</li>
          <li><strong> Tipo VI:</strong>  Piel muy oscura, cabello oscuro, ojos oscuros. No suele quemarse y tiene una gran capacidad para broncearse.</li>
        </ol>
      </section>
      <h2 id='test'>Test</h2>
      <Opciones />
    </div >
  );
}

export default App;
