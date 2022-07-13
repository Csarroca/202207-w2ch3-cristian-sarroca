const questions1 = [
  {
    letter: "a",
    answer: "abducir",
    status: 0,
    question:
      "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
  },

  {
    letter: "b",
    answer: "bingo",
    status: 0,
    question:
      "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
  },

  {
    letter: "c",
    answer: "churumbel",
    status: 0,
    question: "CON LA C. Niño, crío, bebé",
  },

  {
    letter: "d",
    answer: "diarrea",
    status: 0,
    question:
      "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
  },

  {
    letter: "e",
    answer: "ectoplasma",
    status: 0,
    question:
      "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
  },

  {
    letter: "f",
    answer: "facil",
    status: 0,
    question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
  },

  {
    letter: "g",
    answer: "galaxia",
    status: 0,
    question:
      "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
  },

  {
    letter: "h",
    answer: "harakiri",
    status: 0,
    question: "CON LA H. Suicidio ritual japonés por desentrañamiento",
  },

  {
    letter: "i",
    answer: "iglesia",
    status: 0,
    question: "CON LA I. Templo cristiano",
  },

  {
    letter: "j",
    answer: "jabali",
    status: 0,
    question:
      "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
  },

  {
    letter: "k",
    answer: "kamikaze",
    status: 0,
    question:
      "CON LA K. Persona que se juega la vida realizando una acción temeraria",
  },

  {
    letter: "l",
    answer: "licantropo",
    status: 0,
    question: "CON LA L. Hombre lobo",
  },

  {
    letter: "m",
    answer: "misantropo",
    status: 0,
    question:
      "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
  },

  {
    letter: "n",
    answer: "necedad",
    status: 0,
    question: "CON LA N. Demostración de poca inteligencia",
  },

  {
    letter: "ñ",
    answer: "señal",
    status: 0,
    question:
      "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
  },

  {
    letter: "o",
    answer: "orco",
    status: 0,
    question:
      "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
  },

  {
    letter: "p",
    answer: "protoss",
    status: 0,
    question:
      "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
  },

  {
    letter: "q",
    answer: "queso",
    status: 0,
    question:
      "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
  },

  { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor" },

  {
    letter: "s",
    answer: "stackoverflow",
    status: 0,
    question: "CON LA S. Comunidad salvadora de todo desarrollador informático",
  },

  {
    letter: "t",
    answer: "terminator",
    status: 0,
    question:
      "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
  },

  {
    letter: "u",
    answer: "unamuno",
    status: 0,
    question:
      "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
  },

  {
    letter: "v",
    answer: "vikingos",
    status: 0,
    question:
      "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
  },

  {
    letter: "w",
    answer: "sandwich",
    status: 0,
    question:
      "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
  },

  {
    letter: "x",
    answer: "botox",
    status: 0,
    question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
  },

  {
    letter: "y",
    answer: "peyote",
    status: 0,
    question:
      "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
  },

  {
    letter: "z",
    answer: "zen",
    status: 0,
    question:
      "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
  },
];

const questions2 = [
  {
    letter: "a",
    answer: "anticuario",
    status: 0,
    question:
      "Empieza por A: Persona que colecciona o negocia con antigüedades",
  },
  {
    letter: "b",
    answer: "biberon",
    status: 0,
    question:
      "Empieza por B: Utensilio para la lactancia artificial que consiste en una botella pequeña con una tetina de goma",
  },
  {
    letter: "c",
    answer: "capo",
    status: 0,
    question:
      "Empieza por C: Jefe de la mafia, especialmente de narcotraficantes",
  },
  {
    letter: "d",
    answer: "desodorante",
    status: 0,
    question:
      "Empieza por D: Producto que se utiliza para suprimir el olor corporal o de algún recinto",
  },
  {
    letter: "e",
    answer: "efimero",
    status: 0,
    question: "Empieza por E: Pasajero, de corta duración",
  },
  {
    letter: "f",
    answer: "faja",
    status: 0,
    question:
      "Empieza por F: Prenda interior elástica que ciñe la cintura, o la cintura y las caderas",
  },
  {
    letter: "g",
    answer: "gominola",
    status: 0,
    question:
      "Empieza por G: Golosina blanca masticable, generalmente recubierta de azúcar",
  },
  {
    letter: "h",
    answer: "historia",
    status: 0,
    question:
      "Empieza por H: Conjunto de todos los hechos ocurridos en tiempos pasados",
  },
  {
    letter: "i",
    answer: "ilves",
    status: 0,
    question:
      "Empieza por I: Apellido del político que fue presidente de Estonia entre los años 2006 y 2016",
  },
  {
    letter: "j",
    answer: "judion",
    status: 0,
    question:
      "Empieza por J: Variedad de judía de vainas anchas y semilla grande",
  },
  {
    letter: "l",
    answer: "linaje",
    status: 0,
    question:
      "Empieza por L: Ascendencia o descendencia de una familia, especialmente noble",
  },
  {
    letter: "m",
    answer: "madriguera",
    status: 0,
    question:
      "Empieza por M: Cueva en la que habitan ciertos animales, especialmente los conejos",
  },
  {
    letter: "n",
    answer: "navato",
    status: 0,
    question: "Empieza por N: Espinazo de los vertebrados",
  },
  {
    letter: "ñ",
    answer: "acuñar",
    status: 0,
    question: "Contiene la Ñ: Hacer o fabricar moneda",
  },
  {
    letter: "o",
    answer: "onirico",
    status: 0,
    question: "Empieza por O: Perteneciente o relativo a los sueños",
  },
  {
    letter: "p",
    answer: "piolet",
    status: 0,
    question:
      "Empieza por P: Instrumento con forma de pico que utilizan los alpinistas para asegurar sus movimientos sobre la nieve o el hielo",
  },
  {
    letter: "q",
    answer: "equilatero",
    status: 0,
    question: "Contiene la Q: Triángulo que tiene todos sus lados iguales",
  },
  {
    letter: "r",
    answer: "risaralda",
    status: 0,
    question:
      "Empieza por R: Departamento de Colombia con capital en la ciudad de Pereira",
  },
  {
    letter: "s",
    answer: "sentar",
    status: 0,
    question:
      "Empieza por S: Poner o colocar a alguien en una silla o banco, de manera que quede apoyado y descansando sobre las nalgas",
  },
  {
    letter: "t",
    answer: "tipi",
    status: 0,
    question:
      "Empieza por T:  Tienda de piel de forma cónica que utilizaban como vivienda los indios de las praderas de América del Norte",
  },
  {
    letter: "u",
    answer: "unilateral",
    status: 0,
    question:
      "Empieza por U: Que se refiere o se circunscribe solamente a una parte o a un aspecto de algo",
  },
  {
    letter: "v",
    answer: "vilano",
    status: 0,
    question: "Empieza por V: Flor del cardo",
  },
  {
    letter: "x",
    answer: "dux",
    status: 0,
    question:
      "Contiene la X: En las repúblicas de Venecia o Génova, príncipe o magistrado supremo",
  },
  {
    letter: "y",
    answer: "ensayar ",
    status: 0,
    question:
      "Contiene la Y: Preparar el montaje y ejecución de un espectáculo antes de ofrecerlo al público",
  },
  {
    letter: "z",
    answer: "zumbado",
    status: 0,
    question: "Empieza por Z: Participio del verbo zumbar",
  },
];

const questions3 = [
  {
    letter: "a",
    answer: "alcachofa",
    status: 0,
    question:
      "CONTIENE LA A. Planta comestible con tallos blancos y hojas verdes. También está en la ducha",
  },

  {
    letter: "b",
    answer: "botiqu\xEDn",
    status: 0,
    question: "CONTIENE LA B. Caja en la que se guardan medicinas",
  },

  {
    letter: "c",
    answer: "camilla",
    status: 0,
    question:
      "CONTIENE LA  C. Cama en la que se llevan de un lado a otro heridos o enfermos",
  },

  {
    letter: "d",
    answer: "dedicatoria",
    status: 0,
    question:
      "CONTIENE LA D. Palabras que se escriben y se dicen como regalo a alguien",
  },

  {
    letter: "e",
    answer: "empañar",
    status: 0,
    question: "CONTIENE LA E. Mancharse un cristal con el vapor de agua",
  },

  {
    letter: "f",
    answer: "f\xE1bula",
    status: 0,
    question:
      "CONTIENE LA F. Cuento en el que los personajes son animales, con el que se aprende algo a través de una moraleja",
  },

  {
    letter: "g",
    answer: "guisar",
    status: 0,
    question: "CONTIENE LA G. Preparar alimentos cocinándolos con calor",
  },

  {
    letter: "h",
    answer: "hamaca",
    status: 0,
    question:
      "CONTIENE LA H. Tela resistente que se cuelga de sus extremos y se utiliza como cama",
  },

  {
    letter: "i",
    answer: "imperdible",
    status: 0,
    question:
      "CONTIENE LA I. Alfiler que se abrocha quedando su punta dentro de un gancho",
  },

  {
    letter: "j",
    answer: "jinete",
    status: 0,
    question: "CONTIENE LA J. Persona que monta a caballo",
  },

  {
    letter: "k",
    answer: "karaoke",
    status: 0,
    question:
      "CONTIENE LA K. Diversión consistente en interpretar una canción grabada, mientras se sigue la letra que aparece en una pantalla",
  },

  {
    letter: "l",
    answer: "litera",
    status: 0,
    question:
      "CONTIENE LA L. Mueble formado por dos camas puestas una encima de la otra",
  },

  {
    letter: "m",
    answer: "mayonesa",
    status: 0,
    question: "CONTIENE LA M. Salsa que se hace batiendo huevo y aceite",
  },

  {
    letter: "n",
    answer: "nuca",
    status: 0,
    question:
      "CONTIENE LA N. Parte posterior de la cabeza situada encima del cuello",
  },

  {
    letter: "ñ",
    answer: "teñir",
    status: 0,
    question:
      "CONTIENE LA Ñ. Dar color al pelo con un tinte especial, permanente o que se va tras algunos lavadoS",
  },

  {
    letter: "o",
    answer: "orilla",
    status: 0,
    question: "CONTIENE LA O. Borde del mar, de un lago o de un río",
  },

  {
    letter: "p",
    answer: "planchar",
    status: 0,
    question: "CONTIENE LA P. Quitar las arrugar a una prenda",
  },

  {
    letter: "q",
    answer: "quitamanchas",
    status: 0,
    question:
      "CONTIENE LA Q. Producto natural o preparado que sirve para quitar manchas",
  },

  {
    letter: "r",
    answer: "racimo",
    status: 0,
    question: "CONTIENE LA R. Conjunto de uvas sostenidas en un mismo tallo",
  },

  {
    letter: "s",
    answer: "sembrar",
    status: 0,
    question: "CONTIENE LA S. Enterrar semillas en la tierra para que crezcan",
  },

  {
    letter: "t",
    answer: "taburete",
    status: 0,
    question: "CONTIENE LA T. Asiento sin respaldo",
  },

  {
    letter: "u",
    answer: "untar",
    status: 0,
    question: "CONTIENE LA U. Extender mantequilla sobre una rebanada de pan",
  },

  {
    letter: "v",
    answer: "vecino",
    status: 0,
    question:
      "CONTIENE LA V. Persona que vive en el mismo barrio o edificio que otra",
  },

  {
    letter: "w",
    answer: "wifi",
    status: 0,
    question:
      "CONTIENE LA W. Sistema de conexión inalámbrica para conectarse a internet",
  },

  {
    letter: "x",
    answer: "f\xE9nix",
    status: 0,
    question:
      "CONTIENE LA X. Ave fabulosa que los antiguos creyeron que era única y renacía de sus cenizas",
  },

  {
    letter: "y",
    answer: "yunque",
    status: 0,
    question:
      "CONTIENE LA Y. Hueso que se encuentra dentro del oído, situado entre el martillo y el estribo",
  },

  {
    letter: "z",
    answer: "zumbido",
    status: 0,
    question:
      "CONTIENE LA Z. Sonido que producen algunos insectos como la abeja o el mosquito",
  },
];

let userName;
let randomNumber;
let randomQuestions;
let currentAswer;
let nonAnsweredQuestion;
let hits = 0;
let failures = 0;
let endGame = false;

const SaveUserName = () => {
  userName = "";
  do {
    userName = prompt(
      "Bienvenido al Pasapalabra de Skylab coders. Introduce tu nombre aquí. "
    );
    if (userName !== null && userName !== "" && isNaN(userName)) {
      alert(`¡Hola ${userName}! Gracias por jugar a nuestro juego.`);
    } else {
      alert(" Usa un nombre válido, no pueden ser solo números. ");
    }
  } while (userName === null || userName === "" || !isNaN(userName));
  return userName;
  // console.log(gameRules);
};

const ShowRandomNumber = () => {
  randomNumber = Math.ceil(Math.random() * 3);
  console.log(randomNumber);
};

const randomSetOfQuestions = () => {
  randomQuestions = randomNumber;
  if (randomQuestions === 1) {
    randomQuestions = questions1;
  } else if (randomQuestions === 2) {
    randomQuestions = questions2;
  } else {
    randomQuestions = questions3;
  }
};

const readyForStart = () => {
  let startQuestion;

  do {
    startQuestion = confirm(
      "¿Deseas empezar a jugar? pulsa aceptar para comenzar a jugar."
    );
  } while (startQuestion !== true);

  alert(
    `El juego está apunto de empezar, si no sabes la respuesta de alguna pregunta pulsa "PASAPALABRA" para ir a la siguiente pregunta. ¡¡¡¡¡¡¡MUCHA SUERTE!!!!!!!`
  );
};

const testStatus = () => {
  let status = [];
  randomQuestions.forEach((question) => {
    if (question.status !== 0) {
      status.push(question.letter);
    }
  });

  if (status.length >= 27) {
    return true;
  } else {
    return false;
  }
};

const askQuestions = () => {
  for (let i = 0; i < randomQuestions.length; i++) {
    currentAswer = prompt(`Responda: ` + randomQuestions[i].question);

    do {
      if (currentAswer === "" || currentAswer === null) {
        alert(
          `Responda a la pregunta o escribre "pasapalabra" para pasar a la siguiente.`
        );
        currentAswer = prompt(`Responda: ` + randomQuestions[i].question);
      }
    } while (currentAswer === "" || currentAswer === null);
    if (currentAswer.toLowerCase() === randomQuestions[i].answer) {
      hits++;
      randomQuestions[i].status = 1;
      alert("¡¡¡Has acertado la pregunta!!!");
      randomQuestions[i].question;
    } else if (currentAswer.toLowerCase() === "pasapalabra") {
      randomQuestions[i].status = 0;
      alert("Se volverá a mostrar esta pregunta en la siguiente ronda. ");
    } else if (currentAswer.toLowerCase() === "end") {
      alert("El juego a terminado y no contará para el ranking");
      console.log(`Has acertado ${hits} preguntas. `);
      console.log(`Has fallado ${failures} preguntas. `);
      endGame = true;
      return;
    } else {
      failures++;
      randomQuestions[i].status = 2;
      alert(
        `Has fallado la pregunta, la respuesta era: ${randomQuestions[i].answer}. `
      );
    }
  }
};

const pasaPalabra = () => {
  do {
    for (let i = 0; i < randomQuestions.length; i++) {
      if (randomQuestions[i].status === 0) {
        nonAnsweredQuestion = prompt(
          `Responda a la pregunta no respondida: ` + randomQuestions[i].question
        );
        do {
          if (nonAnsweredQuestion === "" || nonAnsweredQuestion === null) {
            alert(
              `Responda a la pregunta o escribre "pasapalabra" para pasar a la siguiente.`
            );
            nonAnsweredQuestion = prompt(
              `Responda: ` + randomQuestions[i].question
            );
          }
        } while (nonAnsweredQuestion === "" || nonAnsweredQuestion === null);

        if (nonAnsweredQuestion.toLowerCase() === randomQuestions[i].answer) {
          hits++;
          randomQuestions[i].status = 1;
          alert("¡¡¡Has acertado la pregunta!!!");
          randomQuestions[i].question;
        } else if (nonAnsweredQuestion.toLowerCase() === "pasapalabra") {
          randomQuestions[i].status = 0;
          alert("Se volverá a mostrar esta pregunta en la siguiente ronda. ");
        } else if (nonAnsweredQuestion.toLowerCase() === "end") {
          alert("El juego a terminado y no contará para el ranking");
          console.log(`Has acertado ${hits} preguntas. `);
          console.log(`Has fallado ${failures} preguntas. `);
          endGame = true;
          return;
        } else {
          failures++;
          randomQuestions[i].status = 2;
          alert(
            `Has fallado la pregunta, la respuesta era: ${randomQuestions[i].answer}. `
          );
        }
      }
    }
  } while (testStatus() === false || endGame === true);
  console.log(` ${userName} has hacertado: ${hits} palabras`);
  console.log(` ${userName} has fallado: ${failures} palabras`);
};

const showPlayersRanking = () => {
  const ranking = [
    { name: "Placer", hits: 25, failures: 2 },
    { name: "Maria Angustias", hits: 26, failures: 3 },
    { name: "Isaura", hits: 23, failures: 4 },
    { name: "O pequenho", hits: 22, failures: 5 },
    { name: "Seberino", hits: 21, failures: 6 },
    { name: userName, hits: hits, failures: failures },
  ];
  console.log("This is the hall of fame in Skylab Pasapalabra! ");

  ranking.sort(function (a, b) {
    return b.hits - a.hits;
  });
  console.table(ranking);
};

main = () => {
  SaveUserName();
  readyForStart();
  ShowRandomNumber();
  randomSetOfQuestions();
  if (endGame === false) {
    askQuestions();
  }
  if (endGame === false) {
    pasaPalabra();
    showPlayersRanking();
  }
};
main();
