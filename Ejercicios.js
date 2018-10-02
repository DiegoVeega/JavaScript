/*Palíndromo: Se dice que una palabra es palíndroma cuando se puede leer de la misma
manera tanto de derecha a izquierda y viceversa. Crear una función en JavaScript que reciba
como parámetro una palabra. La función debe retornar si la palabra es palíndroma o no.*/

var palabra=["a","r","a","n","a","r","a"]; //Palindroma

var Palindroma= function(palabra) {
    var inversa="";
    var palabrita="";
    palabra.forEach((letra) => {
        palabrita=palabrita+letra;
        inversa=""+letra+inversa;
    });
    if(inversa==palabrita){
        console.log("La palabra es palindroma:)")
    }
    else{
        console.log("La palabra no es palindroma:(")
    }
}

/*Crear una función en JavaScript que ordene los elementos de un Array en orden ascendente.*/

var arreglo=[5,6,9,1,2];

var OrdenAsc=function(arreglo) {
    console.log(arreglo.sort());
}