// Realizar una función que te devuelva si existe un numero par en el array de números que
// introduces como parámetro de entrada.
// La cabecera de la función tendrá el siguiente aspecto: function hasEven(myNums)
function hasEven(myNums) {
    var i = 0;
    while (i < myNums.length && myNums[i] % 2 != 0) {
        i++;
    }
    if (i == myNums.length) {
        return "No hay pares";
    }
    else {
        return "Se han encontrado pares, y el primero es: " + myNums[i];
    }
}
console.log('---Indicar si existe un numero par----');
var numeros = [5, 4, 3, 6, 8];
console.log(hasEven(numeros));
// Realizar una función que reciba un array de nombres y te devuelva verdadero si y solo si
// todos los nombres empiezan por M.
// La cabecera de la función tendrá el siguiente aspecto: function startWithM(myNames)
function startWithM(myNames) {
    var i = 0;
    var encontrados = 0;
    while (i < myNames.length) {
        if (myNames[i][0] === 'M') {
            encontrados++;
        }
        i++;
    }
    if (myNames.length == encontrados) {
        return true;
    }
    else {
        return false;
    }
}
console.log('---Indicar si todos los nombres empiezan por M----');
var nombres = ['María', 'Marcelo', 'Marta', 'Paco'];
var resultM = startWithM(nombres);
if (resultM == true) {
    console.log('Todos los nombres empiezan por M');
}
else {
    console.log('NO todos los nombres empiezan por M');
}
