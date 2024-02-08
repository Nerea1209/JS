import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import ReactEcharts from 'echarts-for-react';

function Grafico(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Función para realizar la solicitud GET
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost/Proyectos/fototipos/fotitpos2.php');
        console.log(response.data)
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Llamada a la función para realizar la solicitud cuando el componente se monta
    fetchData();
  }, []);

  const option = {
    title: {
      text: 'Resultados de los fototipos de IES Mar de Alborán'
    },
    tooltip: {},
    xAxis: {
      data: ['Fototipo I', 'Fototipo II', 'Fototipo III', 'Fototipo IV', 'Fototipo V', 'Fototipo VI']
    },
    yAxis: {},
    series: [
      {
        name: 'Respuestas',
        type: 'bar',
        data: data
      }
    ]
  };

  return (
    <ReactEcharts
      option={option}
      style={{ height: '400px', width: '100%' }}
      notMerge={true}
      lazyUpdate={true}
    />
  );

}

function Example(args) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);


  return (
    <React.StrictMode>
      <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>
        Ver resultados
      </Button>
      <Collapse isOpen={isOpen} {...args}>
        <Card>
          <CardBody>
            <Grafico />
          </CardBody>
        </Card>
      </Collapse>
    </React.StrictMode>
  );
}
function App() {
  return (
    <div className="App">
      <h1>Fototipos que hay en I.E.S. Mar de Alborán</h1>
      <section>
        <h2>¿Qué es el fototipo?</h2>
        El fototipo se refiere a la <strong>clasificación</strong> de la respuesta de la piel a la
        exposición solar. Fue desarrollado por el dermatólogo <strong>Thomas B. Fitzpatrick </strong>
        en la década de 1970. El sistema de clasificación de Fitzpatrick tiene en cuenta
        la capacidad de la piel para <strong>broncearse</strong> y su propensión a <strong>quemarse</strong> cuando se
        expone al sol.
      </section>
      <section>
        <h2>Tipos de fototipos</h2>
        <ol>
          <li><strong> Tipo I:</strong>  Piel muy clara, cabello rubio o pelirrojo, ojos claros. Quema fácilmente y raramente se broncea.</li>
          <li><strong> Tipo II:</strong>  Piel clara, cabello rubio o castaño claro, ojos claros. Quema con facilidad y se broncea con dificultad.</li>
          <li><strong> Tipo III:</strong>  Piel clara a intermedia, cabello castaño, ojos de color variable. Quema moderadamente y se broncea gradualmente.</li>
          <li><strong> Tipo IV:</strong>  Piel intermedia, cabello oscuro, ojos de color variable. Quema con dificultad y se broncea con facilidad.</li>
          <li><strong> Tipo V:</strong>  Piel oscura, cabello oscuro, ojos oscuros. Raramente quema y se broncea fácilmente.</li>
          <li><strong> Tipo VI:</strong>  Piel muy oscura, cabello oscuro, ojos oscuros. No suele quemarse y tiene una gran capacidad para broncearse.</li>
        </ol>
        <Example />

      </section>
    </div>
  );
}

export default App;
