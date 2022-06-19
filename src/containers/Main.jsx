import React from 'react'
import Coment from '../components/Coment';
import Description from '../components/Description';
import Detalle from '../components/Detalle';
import Encabezado from '../components/Encabezado';
import Footer from '../components/Footer';
import SearchsAndBlocks from '../components/SearchsAndBlocks';


const Main = () => {
  return (

    <div>
      <Encabezado />
      <Description />
      <Detalle />
      <Coment />
      <SearchsAndBlocks />
      <Footer />
    </div>

  )
}

export default Main;