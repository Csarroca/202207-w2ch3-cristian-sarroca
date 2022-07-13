/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-console */
/* eslint-disable no-alert */
let vuelos;
vuelos = [
  { id: 0, to: "Bilbao", from: "Barcelona", cost: 1600, scale: false },

  { id: 1, to: "New York", from: "Barcelona", cost: 700, scale: false },

  { id: 2, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },

  { id: 3, to: "Paris", from: "Barcelona", cost: 210, scale: false },

  { id: 4, to: "Roma", from: "Barcelona", cost: 150, scale: false },

  { id: 5, to: "London", from: "Madrid", cost: 200, scale: false },

  { id: 6, to: "Madrid", from: "Barcelona", cost: 90, scale: false },

  { id: 7, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },

  { id: 8, to: "Shangai", from: "Barcelona", cost: 800, scale: true },

  { id: 9, to: "Sydney", from: "Barcelona", cost: 150, scale: true },

  { id: 10, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];
let nombreUsuario;
let idSeleccionada;
let rol;
let preguntaUser;
function bienvenida() {
  do {
    nombreUsuario = prompt(
      "Hola, Bienvenido a Sarroka's Airlines. Introduce tu nombre a continuación. "
    );
    if (
      nombreUsuario !== null &&
      nombreUsuario !== "" &&
      Number.isNaN(nombreUsuario)
    ) {
      alert(`¡Bienvenido ${nombreUsuario} ! Gracias por confiar en nosotros.`);
    } else {
      alert("Introduce tu nombre, porfavor. No pueden ser solo números.  ");
    }
  } while (
    nombreUsuario === null ||
    nombreUsuario === "" ||
    !Number.isNaN(nombreUsuario)
  );
  console.log(`Ecantando de atenderte: ${nombreUsuario}`);
}

function infoVuelos(array) {
  let salidaVuelos = "";
  for (let i = 0; i < array.length; i++) {
    if (array[i].scale) {
      salidaVuelos += `\n El vuelo con ID: ${array[i].id} con su origen en: ${array[i].from}, y destino: ${array[i].to} tiene un coste de ${array[i].cost} € y realiza escala.`;
    } else {
      salidaVuelos += `\n El vuelo con ID: ${array[i].id} con su origen en: con origen: ${array[i].from}, y destino: ${array[i].to} tiene un coste de ${array[i].cost} € y no realiza ninguna escala.`;
    }
  }
  console.log(`Los vuelos disponibles son: ${salidaVuelos}`);
  return salidaVuelos;
}

function calcularCosteMedio() {
  let costeMedio = 0;
  let costeTotal = 0;
  let i;
  for (i = 0; i < vuelos.length; i++) {
    costeTotal += vuelos[i].cost;
    costeMedio = costeTotal / vuelos.length;
  }
  console.log(`El coste medio de los vuelos es: ${costeMedio.toFixed(2)}`);
  return costeMedio.toFixed(2);
}

function vuelosConEscala() {
  let vuelosConEscala2 = "";
  const vuelosConEscalas = vuelos.filter((vuelo) => vuelo.scale === true);
  for (let i = 0; i < vuelosConEscalas.length; i++) {
    vuelosConEscala2 += `\n El vuelo con origen: ${vuelos[i].from}, y destino: ${vuelos[i].to} y con un coste  ${vuelos[i].cost} €. `;
  }
  console.log(`Los vuelos siguientes son con escala: ${vuelosConEscala2}`);
  return vuelosConEscala2;
}

function ultimosCincoVuelos() {
  let ultimosVuelos = "";
  for (let i = vuelos.length - 5; i < vuelos.length; i++) {
    ultimosVuelos += `\n Vuelo con origen: ${vuelos[i].from}, y destino: ${vuelos[i].to}. y con un coste de ${vuelos[i].cost} €. `;
  }
  console.log(`Estos son los ultimos cinco vuelos: ${ultimosVuelos}`);
  return ultimosVuelos;
}

const preguntarRol = () => {
  do {
    preguntaUser = prompt(`Hola ${nombreUsuario}, ¿eres ADMIN o USER?`);

    rol = preguntaUser
      ? preguntaUser.toLowerCase()
      : alert("Solo puedes introducir ADMIN o USER");
    if (rol === "admin") {
      return rol;
    }
    if (rol === "user") {
      return rol;
    }
  } while (rol !== "admin" && rol !== "user");
};

const preguntarAccion = () => {
  let accion;
  do {
    accion = prompt(
      `¿Qué quieres hacer? ¿Crear o eliminar vuelos? (Escribe "crear" o "eliminar" para acceder a las opciones de administrador. )`
    );
    if (accion === null || accion === "") {
      return alert("Hasta pronto!");
    }
  } while (accion !== "crear" && accion !== "eliminar" && accion === null);

  if (accion) accion = accion.toLowerCase();
  return accion;
};

const opcionesAdmin = () => {
  const accionRespondida = preguntarAccion();
  if (accionRespondida === null || accionRespondida === "") {
    return alert("Cerrando consola. ");
  }
  if (accionRespondida === "crear") {
    let nuevoVuelo = {};
    let añadirOtroVuelo;
    do {
      nuevoVuelo = {};
      nuevoVuelo.id = vuelos.length;
      nuevoVuelo.to = prompt("Destino?");
      nuevoVuelo.from = prompt("Salida?");
      nuevoVuelo.cost = +prompt("Coste?");
      nuevoVuelo.scale = confirm(
        "Tiene escala? Si tiene, pulsa aceptar.\n Si no tiene, pulsa cancelar."
      );
      vuelos.push(nuevoVuelo);
      infoVuelos(vuelos);
      añadirOtroVuelo = confirm(
        "Quieres añadir un nuevo vuelo? Pulsa aceptar para añadir otro o cancelar para salir."
      );
    } while (vuelos.length <= 14 && añadirOtroVuelo);
    alert("Has añadido el numero de vuelos");
  } else if (accionRespondida === "eliminar") {
    let id;
    do {
      id = prompt("Que vuelo desear eliminar? Escribe su ID a continuación ");
      vuelos = vuelos.filter((vuelo) => vuelo.id !== Number(id));
      infoVuelos(vuelos);
    } while (id !== null && vuelos.length > 0);
    alert("ya has eliminado todos los vuelos.");
  } else {
    alert(`Cerrando consola.`);
  }
};

const idDeVuelosFiltrados = [];

const seleccionUsuario = () => {
  idSeleccionada = prompt(
    "¿Qué número de vuelo quieres comprar? Indica el número de ID correspondiente al vuelo. Pulsa cancelar para salir "
  );
  if (!idSeleccionada) {
    return alert(`Gracias por consultar nuestras aerolineas.`);
  }
  if (idDeVuelosFiltrados.includes(Number(idSeleccionada))) {
    alert(
      `Gracias por la compra del vuelo ID: ${idSeleccionada}, vuelve pronto.`
    );
    console.log(
      `Gracias por la compra del vuelo ID: ${idSeleccionada}, vuelve pronto.`
    );
  } else {
    alert("Debes de introducir un id válido (valor numérico)");
    seleccionUsuario();
  }
};

const opcionesUsuario = () => {
  const precio = prompt(
    "¿Cuál es el precio máximo que quieres pagar por tu viaje? Escribe un número."
  );

  if (precio < 90) {
    alert(`Debes introducir un precio minimo valido.`);
    return opcionesUsuario();
  }
  if (precio === null && isNaN(precio)) {
    alert(`Gracias por visitar nuestras aerolineas.`);
    return opcionesAdmin();
  }
  const precioNum = parseFloat(precio);
  const vuelosFiltrados = vuelos.filter((vuelo) => vuelo.cost <= precioNum);

  for (let i = 0; i < vuelosFiltrados.length; i++) {
    idDeVuelosFiltrados.push(vuelosFiltrados[i].id);
    vuelosFiltrados[i].scale
      ? console.log(
          `ID del vuelo: ${vuelosFiltrados[i].id}. El vuelo con origen ${vuelosFiltrados[i].from} y destino ${vuelosFiltrados[i].to} tiene un coste de ${vuelosFiltrados[i].cost}€ y tiene escala.`
        )
      : console.log(
          `ID del vuelo: ${vuelosFiltrados[i].id}. El vuelo con origen ${vuelosFiltrados[i].from} y destino ${vuelosFiltrados[i].to} tiene un coste de ${vuelosFiltrados[i].cost}€ y no tiene escala.`
        );
  }

  seleccionUsuario();
};

const main = () => {
  bienvenida();
  infoVuelos(vuelos);
  calcularCosteMedio();
  vuelosConEscala();
  ultimosCincoVuelos();

  const respuestaRol = preguntarRol();

  if (respuestaRol === "admin") {
    opcionesAdmin();
  } else if (respuestaRol === "user") {
    opcionesUsuario();
  }
};

main();
