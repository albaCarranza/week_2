// Realizar una función que imprima los números impares existentes hasta el número
// indicado como parámetro de entrada.
// La cabecera de la función tendrá el siguiente aspecto: function evenNumbers(num)

function evenNumbers(num) {
    for (let i = 0; i <= num; i++) {
        if ((i % 2) !== 0) {
            console.log(i);
        }
    }
}
console.log('---Numeros impares hasta el 50----')
evenNumbers(50);

// Realizar una función que como parámetro de entrada reciba un array y como salida
// devuelva el array revertido. No se puede utilizar el método revert de la clase array
// La cabecera de la función tendrá el siguiente aspecto: function myRevert(myArr)

function myRevert(myArr) {
    let revert = new Array;
    for (let i = myArr.length - 1; i >= 0; i--) {
        revert.push(myArr[i]);
    }
    return revert;
}

let myArr = [ 6, 5, 4, 3, 2, 1, 0 ];
let revert = myRevert(myArr);

console.log('---Array inverso----')
console.log(revert);

// Realizar una función que reciba como parámetro un array de strings que contenga
// nombres de colores y te imprima en cada caso si el color está en el arcoíris o no.
// La cabecera de la función tendrá el siguiente aspecto: function isRainbow(colors)

function isRainbow(colors){
    const coloresArcoIris = ["rojo", "naranja", "amarillo", "verde", "añil", "azul", "violeta"]

    for (let element of colors) {
        let encontrado = false;
        for (let element2 of coloresArcoIris) {
            if (element == element2) {
                encontrado = true;
            }
        }
        if(encontrado == true){
            console.log("El color " + element + " pertenece al arcoiris");
        } else {
            console.log("El color " + element + " NO pertenece al arcoiris")}
    }
}


console.log('---Array de colores del arcorires----')
let colors = ['morado','negro','naranja','burdeos','añil']
isRainbow(colors);


// Realizar una función que te devuelva la suma del numero de caracteres de las palabras
// almacenadas en un array.
// La cabecera de la función tendrá el siguiente aspecto: function add(myWords)

function add(myWords) {
    let total = 0

    for (let i = 0; i < myWords.length; i++) {
        total = total + myWords[i].length
    }
    return total;
}

let array = ["fewe", "fefg", "fergre"];

console.log('---Suma longitud de palabras----')

console.log(add(array));
