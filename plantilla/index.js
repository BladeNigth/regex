const input = document.getElementById("password");

const expresion = /[A-Z]{1}[0-9]{3}[a-zA-Z]{3}\W{3}/

// console.log(expresion.test("a"));

input.addEventListener("keyup", e => {
   // console.log(e.target.value);
   if(expresion.test(e.target.value)){
      console.log("coincide");

      document.getElementById("input__password").classList.add("input__correcto");
      document.getElementById("input__password").classList.remove("input__incorrecto");
      document.querySelector("#input__password i").classList.add("fa-check-circle");
      document.querySelector("#input__password i").classList.remove("fa-times-circle");
      document.querySelector("#input__password .input__message__error").classList.remove("input__message__error__activo");

   }
   else{
      console.log("no coincide");

      document.getElementById("input__password").classList.add("input__incorrecto");
      document.getElementById("input__password").classList.remove("input__correcto");
      document.querySelector("#input__password i").classList.add("fa-times-circle");
      document.querySelector("#input__password i").classList.remove("fa-check-circle");
      document.querySelector("#input__password .input__message__error").classList.add("input__message__error__activo");

   }
})