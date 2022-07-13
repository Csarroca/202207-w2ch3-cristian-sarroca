/* eslint-disable no-console */
/* eslint-disable no-alert */

const resultados = [];
let raizCuadradaDec;
const limpiarResultados = () => {
  resultados.splice(0, resultados.length);
};

function calculatorPro() {
  let nuevoNumero;
  const listaNumeros = [];

  function nuevaOperacion() {
    const otraOperacion = prompt(
      "Deseas realizar otra operación? Porfavor, respon si o no ."
    );

    if (otraOperacion === null) {
      alert("Gracias por usar la calculadora!. ");
    } else {
      switch (otraOperacion.toLowerCase()) {
        case "si":
          calculatorPro();
          break;
        case "no":
          alert("Gracias por usar la calculadora!.");
          break;
        default:
          alert("Error al responder, volviendo a introducir nuevos valores.");
          nuevaOperacion();
          break;
      }
    }
  }

  do {
    nuevoNumero = prompt(
      "Introduce varios números y realizaré la suma, resta, producto y división entre ellos. Si introduces solo un número y se calculará su raiz. Pulsa cancelar cuando no quieras introducir mas. "
    );
    if (!Number.isNaN(nuevoNumero)) {
      listaNumeros.push(Number(nuevoNumero));
    } else {
      alert(
        "Debes introducir solo números y usar un punto para los decimales. "
      );
    }
  } while (nuevoNumero !== null);
  listaNumeros.pop();

  if (listaNumeros.length === 1) {
    const raizCuadrada = Math.sqrt(parseFloat(listaNumeros[0]));

    if (raizCuadrada % 1 !== 0) {
      raizCuadradaDec = raizCuadrada.toFixed(3);
    } else {
      raizCuadradaDec = raizCuadrada;
    }
    console.log(`La raiz cuadrada es:  ${raizCuadradaDec}`);
  } else if (listaNumeros.length > 1) {
    let sumaTotal = listaNumeros[0];
    let restaTotal = listaNumeros[0];
    let multiplicacionTotal = listaNumeros[0];
    let divisionTotal = listaNumeros[0];
    for (let i = 1; i < listaNumeros.length; i++) {
      sumaTotal += parseFloat(listaNumeros[i]);
      restaTotal -= parseFloat(listaNumeros[i]);
      multiplicacionTotal *= parseFloat(listaNumeros[i]);
      divisionTotal /= parseFloat(listaNumeros[i]);
    }

    resultados.push(
      sumaTotal.toFixed(3),
      restaTotal.toFixed(3),
      multiplicacionTotal.toFixed(3),
      divisionTotal.toFixed(3)
    );
  }
  if (resultados.length > 1) {
    console.log(
      `
   El resultado de la  suma es:  ${resultados[0]},
   El resultado de la  resta es:  ${resultados[1]},
   El resultado de la division es:  ${resultados[3]},
   El resultado de la multiplicacion es: ${resultados[2]} .`
    );
  }
  limpiarResultados();
  nuevaOperacion();
}
calculatorPro();
