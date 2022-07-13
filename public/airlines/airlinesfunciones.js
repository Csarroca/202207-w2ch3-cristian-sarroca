let vuelos = [

    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },
        
    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
        
    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
        
    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
        
    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
        
    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },
        
    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
        
    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
        
    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
        
    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
        
    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }
        ];

 function bienvenida (){
     let nombreUsuario;
     do{
    nombreUsuario = prompt("Hola, introduce tu nombre aquí ");
     if(nombreUsuario !== null && nombreUsuario !== ""){
        alert (`Bienvenido ${nombreUsuario}`);
         }else {
        alert ("Introduce tu nombre, porfavor. ")
        bienvenida();
         };
        }while ( nombreUsuario === null) 
        console.log(`Ecantando de atenderte: ${nombreUsuario}`);
return nombreUsuario;
    };
            
    
   function infoVuelos (){
    let salidaVuelos = "";
    for (let i = 0; i < vuelos.length; i++) {
   
    if(vuelos[i].scale) {
     salidaVuelos += `\n El vuelo con origen: ${vuelos[i].from}, y destino: ${vuelos[i].to} tiene un coste de ${vuelos[i].cost} € y realiza escala.`;
               
     }else {
        salidaVuelos += `\n El vuelo con origen: ${vuelos[i].from}, y destino: ${vuelos[i].to} tiene un coste de ${vuelos[i].cost} € y no realiza ninguna escala.`;
        }
        };
        console.log( `Los vuelos disponibles son: ${salidaVuelos}`);
     return salidaVuelos;
        };


function calcularCosteMedio (){
let costeMedio= 0;
let costeTotal = 0;
    for (i = 0; i<vuelos.length; i++){
costeTotal += vuelos[i].cost;
costeMedio = costeTotal/vuelos.length;
    };
    console.log(`El coste medio de los vuelos es: ${costeMedio.toFixed(2)}`);
return costeMedio.toFixed(2);
};


function vuelosConEscala () {
let vuelosConEscala2 = "";
    let vuelosConEscalas = vuelos.filter((vuelo) => vuelo.scale === true);
    for(let i = 0; i< vuelosConEscalas.length; i++){
        vuelosConEscala2 += `\n El vuelo con origen: ${vuelos[i].from}, y destino: ${vuelos[i].to} y con un coste  ${vuelos[i].cost} €. `;
    }
    console.log(`Los vuelos siguientes son con escala: ${vuelosConEscala2}`);
return vuelosConEscala2;
};


function ultimosCincoVuelos () {
 let ultimosVuelos = "";
    for( let i = vuelos.length -5; i < vuelos.length; i++){
        
     ultimosVuelos += `\n Vuelo con origen: ${vuelos[i].from}, y destino: ${vuelos[i].to}. y con un coste de ${vuelos[i].cost} €. ` ;
    }
    console.log(`Estos son los ultimos cinco vuelos: ${ultimosVuelos}`);
    return ultimosVuelos;  
};

function main(){

    bienvenida();
    infoVuelos();
    calcularCosteMedio();
    vuelosConEscala();
    ultimosCincoVuelos();
};


main();