/*---------------------------*/
let num = Number(prompt("Pick a number"));

if (num < 10) {
  console.log("Small");
} else if (num < 100) {
  console.log("Medium");
} else {
  console.log("Large");
}
/*---------------------------*/
//Sentencias
if(condition){
    //Code Block 
}else{ 
    //Code Block. 
}

for(i=0; i<n; i++){ 
    //Code Block 
}

try{ 
    //Code Block 
}catch(err){ 
    //Code Block 
}

switch(variable){
    case value1: 
        //Code Block 
    break; 
    default: 
        //Code Block 
}

while(condition){
      //Code Block 
}

do{
    //Code Block 
}while(condition);
/*---------------------------*/
//Funciones
var procesoA = function (i,j){ 
      return i*j; 
}

elementX.onclick(function (i,j){ 
      return (i*j)/(i); 
});
//Funcion en notacion flecha =>
var procesoA = (i,j) => { 
      return i*j; 
}

elementX.onclick((i,j) => { 
      return (i*j)/(i); 
});

/* 

Acceso por índice a un elemento del arreglo.
Se hace uso de la sintaxis básica de acceso a un elemento dentro un arreglo. Ejemplo:

var firstLetter = listLetters[0]; 
// Almacena 'A' 

var lastLetter = listLetters[listLetters.lenght - 1]; 
// Almacena 'F'

----------------------------------------------------------------------------------------------------.lenght;

Este atributo corresponde a la cantidad de datos que tiene actualmente un arreglo. Ejemplo:

let cantLetters = listLetters.lenght; 
console.log(cantLetters); //Imprimirá 5.

------------------------------------------------------------------------------------.forEach(function);

Método que recorre todos los elementos un arreglo y realiza una función específica por cada uno de ellos. Ejemplo:

listLetters.forEach((letter, index)=>{ 

  console.log("Letra "+index+": "+letter);
  //Imprimirá cada valor en la consola 

});
------------------------------------------------------------------------------------.push(value);

Método que añade un elemento al final del arreglo. Ejemplo:

listLetters.push('z');
//['A','h','e','v','F','z']

-------------------------------------------------------------------------------------.pop();

Método que elimina el elemento final del arreglo. Este valor es retornado. Ejemplo:

var lastItem = listLetters.pop(); //Almacena 'z' 
//['A','h','e','v','F']

----------------------------------------------------------------------------------.shift();

Método que elimina el elemento inicial de un arreglo. De igual forma el valor es retornado. Ejemplo:

var firstItem = listLetters.shift(); //Almacena 'A'
//['h','e','v','F']

------------------------------------------------------------------------------.unshift();

Método que inserta un nuevo elemento en la primera posición del arreglo. Ejemplo:

listLetters.unshift('x'); 
//['x','h','e','v','F']

------------------------------------------------------------------------.splice(index, n);

Método que elimina una cantidad específica de elementos en un arreglo. Recibe por parametros el índice donde se iniciará a eliminar, y la cantidad de datos a eliminar. Ejemplo:

listLetters.splice(2,1);
//['x','h','v','F'] 

listLetters.splice(1,2);
//['x','F']

*/