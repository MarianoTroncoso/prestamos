import React, { Fragment, useState } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';

function App() {

  // definir el state
  const [cantidad, guardarCantidad ] = useState(0);


  return (
    <Fragment>
      <Header 
        titulo="Cotizador de Prestamos"
      />
      <div className="container">
        <Formulario
          cantidad={cantidad}
          guardarCantidad={guardarCantidad}
        />
      </div>
    </Fragment>
  );
}

export default App;
