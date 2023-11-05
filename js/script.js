//valor tickets
const valortickets = 200;

//descuentos
let descuentoEstud = 80;
let descuentoTrainne = 50;
let descuentoJunior = 15;

// variables
let nombre = document.getElementById("nombre");
let divErrorNombre = document.getElementById("mensajeErrorNombre");
let apellido = document.getElementById("apellido");
let divErrorApellido = document.getElementById("mensajeErrorApellido");
let mail = document.getElementById("mail");
let divErrorMail = document.getElementById("mensajeErrorMail");
let cantidadTickets = document.getElementById("cantidadTickets");
let selecCateg = document.getElementById("selecCategoria");
let divErrorCategoria = document.getElementById("mensajeErrorCategoria");

// Funcion para quitar error a los elem del form
const quitarClaseError = () => {
  let listaNodos = document.querySelectorAll(".form-control, .form-select");
  for (let i = 0; i < listaNodos.length; i++) {
    listaNodos[i].classList.remove("is-invalid");
  }
  let listaNodosdiv = document.querySelectorAll(".invalid-feedback");
  for (let i = 0; i < listaNodosdiv.length; i++) {
    listaNodosdiv[i].classList.remove("mostrar");
  }
};

//calculo el monto a pagar
const totalApagar = () => {
  //function total_a_pagar() {

  //ejecuto funcion para que quite todos los estilos de error en los campos que los tuvieron
  quitarClaseError();

  //verifico si lleno los campos,sino que aplique un estilo de error ,hago foco en el campo y que se detenga
  if (nombre.value === "") {
    nombre.classList.add("is-invalid");
    divErrorNombre.classList.add("mostrar");
    nombre.focus();
    return;
  }

  if (apellido.value === "") {
    apellido.classList.add("is-invalid");
    divErrorApellido.classList.add("mostrar"); // AGREGO ELLA MOSTRAR
    apellido.focus();
    return;
  }

  if (mail.value === "") {
    mail.classList.add("is-invalid");
    mail.focus();
    return; ///^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0.test(mail);
  }

  /*para determinar si el correo es valido o no
  const emailValido = (mail) => {
    return;
  };

  if (!emailValido(mail.value)) {
    alert("Por favor ,escribí un correo electrónico válido");
    mail.classList.add("is-invalid");
    mail.focus();
    return;
  }*/
  //verifico si esta ingresando cantidad de tickets ,sino que aplique error y se detenga

  if (cantidadTickets.value == 0 || isNaN(cantidadTickets.value)) {
    alert("Por favor ,ingresa correctamente cantidad de tickets.");
    cantidadTickets.classList.add("is-invalid");
    cantidadTickets.focus();
    return;
  }
  let totalValorTickets = cantidadTickets.value * valortickets;

  switch (selecCateg.value) {
    case "0":
      totalValorTickets = totalValorTickets;
      break;
    case "1":
      totalValorTickets =
        totalValorTickets - (descuentoEstud / 100) * totalValorTickets;
      break;
    case "2":
      totalValorTickets =
        totalValorTickets - (descuentoTrainne / 100) * totalValorTickets;
      break;
    case "3":
      totalValorTickets =
        totalValorTickets - (descuentoJunior / 100) * totalValorTickets;
      break;
  }
  totalPago.innerHTML = totalValorTickets;
};
//boton resumen recibe un escuchador y la funcion del calculo
btnResumen.addEventListener("click", totalApagar);

//function_reset_total_a_pagar(){
const resetTotalAPagar = () => {
  //fuction reset_total_a_pagar() {}
  quitarClaseError();
  totalPago.innerHTML = " ";
};
btnBorrar.addEventListener("click", resetTotalAPagar);
btnResumen.addEventListener("click", totalApagar);
