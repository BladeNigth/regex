import React from 'react'

const Form = () =>{

    const expresion = new RegExp("/^[A-Z]{​​1}​​[0-9]{​​3}​​[a-zA-Z]{​​3}​​[!-/,:-@,{​​-~]{​​3}​​$/");

    const handleKeyUp= (e) =>{
        console.log(e.target.value);
        if(expresion.test(e.target.value)){
           document.getElementById("input__password").classList.add("input__correcto");
           document.getElementById("input__password").classList.remove("input__incorrecto");
           document.querySelector("#input__password i").classList.add("fa-check-circle");
           document.querySelector("#input__password i").classList.remove("fa-times-circle");
           document.querySelector("#input__password .input__message__error").classList.remove("input__message__error__activo");
        }
        else{
           document.getElementById("input__password").classList.add("input__incorrecto");
           document.getElementById("input__password").classList.remove("input__correcto");
           document.querySelector("#input__password i").classList.add("fa-times-circle");
           document.querySelector("#input__password i").classList.remove("fa-check-circle");
           document.querySelector("#input__password .input__message__error").classList.add("input__message__error__activo");
        }
    }

    return(
        <div class="contenedor__body__right__target">
                        
            <h3>Ingresa tu password</h3>
            <p>Teniendo en cuenta la sigiente indicación:</p>
            <p class="indicaciones">Una mayúscula seguida de tres números, seguidos de tres caracteres y luego seguidos de tres caracteres especiales.</p>
            <p>Digite en el siguiente input su password</p>

            <div class="input" id="input__password" >
                <label for="password" class="input__label">Password</label>
                <div class="grupo__input">
                    <input onKeyUp={handleKeyUp} type="text" class="input__form" name="password" id="password" placeholder="Ejemplo: A123xyz$%&"/>
                    <i class="validacion__estado fas fa-times-circle"></i>
                </div>
                <p class="input__message__error">Esta contraseña no cumple con las condiciones establecidas...!</p>
            </div>

        </div>
    )
}
export default Form