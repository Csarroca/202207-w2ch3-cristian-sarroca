//creamos la funcion y declaramos los promp
function calculadora() {
  const resultados = [];
  let numero1 = prompt("Introduce un primer número y realizaré su raíz.");
  let numero2 = prompt(
    "Introduce un segundo número para realizar la suma,resta,multiplicación y división de ambos números."
  );


  //isNaN mensaje para si no introducen numeros 
  if(isNaN(numero1)|| isNaN(numero2)){
    alert ("Solo puedes introducir números.");
    calculadora();
  }

  // primero if para hacer raiz
  let raizCuadradaDec;

  if (Number(numero1) && numero2 === "") {
    let raizCuadrada = Math.sqrt(parseFloat(numero1));
    console.log(raizCuadrada);
    // hacemos comprobación de decimales para la raiz

    if (raizCuadrada % 1 != 0) {
      raizCuadradaDec = raizCuadrada.toFixed(3);
    } else {
       raizCuadradaDec = raizCuadrada
    }
    console.log("La raiz cuadrada es: " + raizCuadradaDec);   

    

 // segundo if para hacer las operaciones
  } else if (Number(numero1) && Number(numero2)) {


    // ponemos parseFloat para convertir strings en numeros
    let suma = parseFloat(numero1) + parseFloat(numero2);
    let resta = parseFloat(numero1) - parseFloat(numero2);
    let division = parseFloat(numero1) / parseFloat(numero2);
    let multiplicacion = parseFloat(numero1) * parseFloat(numero2);
    // declaramos las nuevas variables para testear si hay decimales o no
    let sumaDec = "";
    let restaDec = "";
    let divisionDec = "";
    let multiplicacionDec = "";
    // if para comprobar decimales
    if (suma % 1 != 0) {
      sumaDec = suma.toFixed(3);
    } else {
       sumaDec = suma;
    }
    if (resta % 1 != 0) {
      restaDec = resta.toFixed(3);
    } else {
       restaDec = resta;
    }
    if (division % 1 != 0) {
      divisionDec = division.toFixed(3);
    } else {
       divisionDec = division;
    }
    if (multiplicacion % 1 != 0) {
      multiplicacionDec = multiplicacion.toFixed(3);
    } else {
      multiplicacionDec = multiplicacion;
    }
    // push de los resultados en la array ponerle `` + ${}
    resultados.push(sumaDec, restaDec, divisionDec, multiplicacionDec);
    console.log(
   `
    La suma es:  ${resultados[0]},
    La resta es:  ${resultados[1]},
    La division es:  ${resultados[2]},
    La multiplicacion es: ${resultados[3]} .`);
    // mensaje de alerta si se introducen otros valores que no sean numeros
  } else {
    alert(
      "Porfavor, introduzca otro valor numerico o pulse aceptar en el segundo recuadro si desea solo el cálculo de la raiz."
    );
  }
}
// llamamos a la funcion
calculadora();
