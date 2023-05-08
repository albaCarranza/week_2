// Realizar una función que imprima los números impares existentes hasta el número
// indicado como parámetro de entrada.
// La cabecera de la función tendrá el siguiente aspecto: function evenNumbers(num)

function evenNumbers(num) {
    num: Number
    let contador;
    for (let i = 0; i <= num; i++) {
        if ((i % 2) !== 0) {
            contador = i;
        }
    }
    return contador;
}
console.log(evenNumbers(50));

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
    console.log(revert);

// Realizar una función que reciba como parámetro un array de strings que contenga
// nombres de colores y te imprima en cada caso si el color está en el arcoíris o no.
// La cabecera de la función tendrá el siguiente aspecto: function isRainbow(colors)


function isRainbow(colors){
let colores : string[];
colores = ["rojo", "naranja", "amarillo", "verde", "añil", "azul", "violeta"]

for (let i = 0; i < colores.length; i++)
{
    if (colores[i] === "amarillo"){
    return colors;
} 
}}
let colores = isRainbow()
console.log(colores);


// Realizar una función que te devuelva la suma del numero de caracteres de las palabras
// almacenadas en un array.
// La cabecera de la función tendrá el siguiente aspecto: function add(myWords)

function add(myWords)
{
    let total= []
    let array = ["fewe", "fefg", "fergre"];
    for(let i = 0; i < array.length; i++) 
    if(total +=array[i];)

    console.log(total);
}