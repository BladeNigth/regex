import React, {Fragment} from 'react';
import Navegacion from './components/navegacion'
import Cuerpo from './components/cuerpo'
import Footer from './components/footer'


function App() {
  return (
    <Fragment>
      <Navegacion/>
      <Cuerpo/>
      <Footer/>
    </Fragment>
  );
}

export default App;
