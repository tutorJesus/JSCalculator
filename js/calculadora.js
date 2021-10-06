const dataBoton = document.querySelectorAll("button")
const dataDisplay = document.querySelector("#visor");
let operador;
let punto;
let numero;
dataDisplay.value= '0';

function resetCalc() {
    operador = false;
    punto = false;
    numero = true;
    dataDisplay.value="0";
}
resetCalc();
dataBoton.forEach(element => {
    element.addEventListener('click', e => {
        let buttonText = e.target.innerText;

        if (buttonText === "C") {
            resetCalc();

        } else if (buttonText === '.' && !punto) {
            dataDisplay.value += buttonText;
            punto = true;

        } else if (buttonText === '+' && operador) {
            if (dataDisplay.value != '0') {
                dataDisplay.value += buttonText;
            } else {
                dataDisplay.value = buttonText;
            }
            operador = false;
            punto = false;
            numero = true;

        } else if (buttonText === '-' && operador) {
            if (dataDisplay.value != '0') {
                dataDisplay.value += buttonText;
            } else {
                dataDisplay.value = buttonText;
            }
            operador = false;
            punto = false;
            numero = true;

        } else if (buttonText === '*' && operador) {
            if (dataDisplay.value != '0') {
                dataDisplay.value += buttonText;
                operador = false;
                punto = false;
                numero = true;
            }

        } else if (buttonText === '/' && operador) {
            if (dataDisplay.value != '0') {
                dataDisplay.value += buttonText;
                operador = false;
                punto = false;
                numero = true;
            }

        } else if (buttonText >= '0' && buttonText <= 9 && numero) {
            if (buttonText === '0' && dataDisplay.value === '0') {
                numero = true;
            } else if (dataDisplay.value === '0') {
                dataDisplay.value = buttonText;
            } else {
                dataDisplay.value += buttonText;
            }
            operador = true;

        } else if (buttonText === '=') {
            dataDisplay.value = eval(dataDisplay.value)
            numero = false;
        }

    })

});