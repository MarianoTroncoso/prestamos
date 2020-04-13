import React, { Fragment, useState } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';

function App() {

  // cantidad de prestamos
  const [cantidad, guardarCantidad ] = useState(0);
  // plazo a pagar
  const [plazo, guardarPlazo ] = useState(0);


  return (
    <Fragment>
      <Header 
        titulo="Cotizador de Prestamos"
      />
      <div className="container">
        <Formulario
          cantidad={cantidad}
          guardarCantidad={guardarCantidad}
          plazo={plazo}
          guardarPlazo={guardarPlazo}
        />
      </div>
    </Fragment>
  );
}

export default App;
