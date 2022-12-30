// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  const arrayB = [];
  for (const clave in objeto) {
    const array = (objeto[clave])
    arrayB.push([clave,array])
  }
  return arrayB
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  const arrayCaracteres = string.split("");
  let repeticiones ={}

  arrayCaracteres.forEach((letra)=> {

    if(repeticiones[letra] === undefined){
      repeticiones[letra] = 1;
    }
    else repeticiones[letra]+=1
  });
  
  return repeticiones
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let array2=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  let strResult="";
  let stringMayus="";
  let stringMin="";
  for (let index = 0; index < s.length; index++) {

    const element = s[index];

    const result= array2.find(item=>item===element);

    if (result!==undefined) {
      stringMayus+=result 
    }
    else if(result!==element){
      stringMin+=element
    }
    strResult=stringMayus+stringMin
  }

  return strResult;

}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let i = str.length;
  let result = "";
  while (i >= 0 ) {
    i--
    result += str.charAt(i);
  }
  return result.split(" ").reverse().join(" ")
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  
  let string = numero.toString();
  let  result = string.split("").reverse().join("");
  let parseNum = parseInt(result)
  if(numero === parseNum){
    return "Es capicua"
  }
  else return "No es capicua"
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let result="";
  for(i = 0; i < cadena.length; i++ ){
    const element = cadena[i];
    if(element !== "a" && element !== "b" && element !== "c"){
      result+=element;
    }
  }
  return result
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  return arr.sort((a,b)=>(a.length - b.length));
  
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  let arrayResult = [];
  for (let index = 0; index < arreglo1.length; index++) {
    const element = arreglo1[index];
    result = arreglo2.find(item=>item === element); 
    if(result !== undefined){
      arrayResult.push(result);
    }
  } 
  return arrayResult
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

