const operando1 = document.getElementById('operando1')
const operando2 = document.getElementById('operando2')
const resultado = document.getElementById('resultado')

const buttons = document.querySelectorAll('.botones button')

function calcular() {
    const num1 = parseFloat(operando1.value);
    const num2 = parseFloat(operando2.value);
  
    if (isNaN(num1) || isNaN(num2)) {
      resultado.value = "Ingresa solo números.";
      return;
    }
  
    let operacion;
    const buttonClicked = event.target;  // trae el boton clickeado despues lo llamaremos
  
    if (buttonClicked.textContent === "+") {
      operacion = num1 + num2;
    } else if (buttonClicked.textContent === "-") {
      operacion = num1 - num2;
    } else if (buttonClicked.textContent === "X") {
      operacion = num1 * num2;
    } else if (buttonClicked.textContent === "/") {
      if (num2 === 0) {
        resultado.value = "No se puede dividir";
        return;
      }
      operacion = num1 / num2;
    }
  
    resultado.value = operacion;
    operando1.value = ""; // limpia los inputs
    operando2.value = ""; // limpia los inputs
    crearTarjeta(`${num1} ${buttonClicked.textContent} ${num2}`, operacion);
  }
  
  // foreach para recoorer el array buttons y ver en cual de estos se produce un click
  buttons.forEach(button => button.addEventListener('click', calcular));  // una vez clickea se ejecuta la funcion


  // tarjetas
  function crearTarjeta(operacion, resultado) {
    const historial = document.getElementById('historial');

    const tarjeta = document.createElement('div');
    tarjeta.classList.add('tarjeta');                     // agrega una clase para estilos
    tarjeta.textContent = `${operacion} = ${resultado}`;

    historial.appendChild(tarjeta);

    if (historial.children.length > 4) {
        historial.removeChild(historial.firstChild);    //elimina el primero
    }
}


