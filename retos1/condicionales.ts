// 1. Realizar una función que dada una fecha de nacimiento te devuelva el signo zodiacal.
// 2. La fecha de nacimiento vendrá indicada por dos números: dia y mes.
// La cabecera de la función tendrá el siguiente aspecto: function zodiac(day, month)

function zodiac(day : number, month : number) {

    if ((day >= 21 && month == 1) || (day <= 19 && month == 2)){
        return "Acuario";
    }

    if ((day >= 20 && month == 2) || (day <= 20 && month == 3)){
        return "Piscis";
    }
    
    if ((day >= 21 && month == 3) || (day <= 20 && month == 4)){
        return "Aries";
    }
    
    if ((day >= 21 && month == 4) || (day <= 21 && month == 5)){
        return "Tauro";
    }

    if ((day >= 22 && month == 5) || (day <= 21 && month == 6)){
        return "Geminis";
    }

    if ((day >= 21 && month == 6) || (day <= 23 && month == 7)){
        return "Cancer";
    }

    if ((day >= 24 && month == 7) || (day <= 23 && month == 8)){
        return "Leo";
    }

    if ((day >= 24 && month == 8) || (day <= 23 && month == 9)){
        return "Virgo";
    }

    if ((day >= 24 && month == 9) || (day <= 23 && month == 10)){
        return "Libra";
    }

    if ((day >= 24 && month == 10) || (day <= 22 && month == 11)){
        return "Escorpio";
    }

    if ((day >= 23 && month == 11) || (day <= 21 && month == 12)){
        return "Sagitario";
    }

    if ((day >= 22 && month == 12) || (day <= 20 && month == 1)){
        return "Capricornio";
    }
}

console.log('---Resultado del Zodiaco----')
console.log(zodiac(10,2));

// 3. Realizar un procedimiento que dado el nombre de un país te imprima en que continente
// estás. (Max 5 países por continente).
// La cabecera del procedimiento tendrá el siguiente aspecto: function continent(country)

function continent(country)
{
    // declaramos los continentes con sus paises
    const continentes = [
        {nombre: 'Asia', paises: ["Japon", "Indonesia", "China", "India", "Tailandia"]},
        {nombre: 'Africa', paises: ["Sudafrica", "Nigeria", "Kenia", "Sudan", "Ghana"]},
        {nombre: 'Europa', paises: ["España", "Alemania", "Reino Unido", "Francia", "Grecia"]},
        {nombre: 'America', paises: ["Canada", "Brasil", "Mexico", "Argentina", "Colombia"]},
        {nombre: 'Oceania', paises: ["Nueva Zelanda", "Australia", "Fiyi", "Samoa", "Vanuata"]},
    ];

    for(let continente of continentes) {
        for(let pais of continente.paises) {
           if(country == pais){
            console.log(continente.nombre);
           }
        }
    }
}

console.log('---Resultado del Continente----')
continent('China')

// 4. Realizar una función que te imprima por consola el siguiente mensaje:
// - “El numero es par”, si el numero introducido como parámetro de entrada es par
// - “El numero es impar”, si el numero introducido como parámetro de entrada es impar
// 5. La cabecera de la función tendrá el siguiente aspecto: function isEven(number)

function isEven(number) {
    if (number % 2 == 0) {
        console.log("El numero es par");
    } else {
        console.log("El numero es impar");
    } 
}

console.log('---Resultado de is Even----')
isEven(7)


