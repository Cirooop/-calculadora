const operando1 = document.getElementById('operando1')
const operando2 = document.getElementById('operando2')
const resultado = document.getElementById('resultado')

const buttons = document.querySelectorAll('.botones button')

function calcular() {
    const num1 = parseFloat(operando1.value);
    const num2 = parseFloat(operando2.value);
  
    if (isNaN(num1) || isNaN(num2)) {
      resultado.value = "Error : Por favor, ingresa solo números.";
      return;
    }
  
    let operacion;
    const buttonClicked = event.target;  // Get the button that was clicked
  
    if (buttonClicked.textContent === "+") {
      operacion = num1 + num2;
    } else if (buttonClicked.textContent === "-") {
      operacion = num1 - num2;
    } else if (buttonClicked.textContent === "X") {
      operacion = num1 * num2;
    } else if (buttonClicked.textContent === "/") {
      if (num2 === 0) {
        resultado.value = "Error: No se puede dividir por cero";
        return;
      }
      operacion = num1 / num2;
    }
  
    resultado.value = operacion;
    operando1.value = ""; // Clear operando1 after calculation
    operando2.value = ""; // Clear operando2 after calculation
    crearTarjeta(`${num1} ${buttonClicked.textContent} ${num2}`, operacion);
  }
  
  // Add click event listener to each button
  buttons.forEach(button => button.addEventListener('click', calcular));


  // tarjetas
  function crearTarjeta(operacion, resultado) {
    const historial = document.getElementById('historial');

    const tarjeta = document.createElement('div');
    tarjeta.classList.add('tarjeta');                     // Agrega una clase para estilos
    tarjeta.textContent = `${operacion} = ${resultado}`;

    historial.appendChild(tarjeta);

    if (historial.children.length > 4) {
        historial.removeChild(historial.firstChild);                //Aca vaciamos el
    }
}


