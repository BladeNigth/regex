import React from 'react'
import img from '../images/password.png'

function Navegacion() {
    return ( 
        <div class="navegacion">
            <div class="navegacion__left">

                <img src={img} alt="password"/>
                <h1>R<span>e</span>g<span>e</span>x<span>_</span></h1>
            </div>
            <div class="navegacion__right">
                <h2> <span>U</span>nimagdalena <span>2</span>0<span>2</span>0</h2>
                <p class="navegacion__right__instrucciones">Instrucciones</p>
            </div>
        </div>
)

}

export default Navegacion