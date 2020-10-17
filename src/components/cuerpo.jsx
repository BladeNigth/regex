import React from 'react'
import img from '../images/verificacion.png'
import Form from './form'

const Cuerpo = () => {
    return (

        <div class="contenedor">    
            <h2 class="contenedor__titulo">Bienvenido a tu validador</h2>
            
            <div class="contenedor__body">
                <div class="contenedor__body__left">
                    <img src={img}alt="principal"/>
                </div>
                <div class="contenedor__body__right">
                    <Form/>
                </div>
            </div>

        </div>
    )

}

export default Cuerpo;