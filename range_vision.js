/* Crear la función range_vision() que, dado un entero no negativo, determine si hay al menos un dígito 1 en el entero que tiene el valor de visualización más bajo de todos los dígitos del entero. La función debe devolver un booleano: true cuando un dígito 1 tiene el valor de vista más bajo en el número dado, false de lo contrario.


Imagine un número entero no negativo, digamos 34315. Cada dígito en el número entero tiene un llamado rango de visión . El primer dígito, 3, tiene un rango de visión de 3. En otras palabras, puede 3 "ver" 3 dígitos a cada lado de sí mismo. En nuestro ejemplo, puede mirar a la derecha de sí mismo y ver 4, 3 y 1. A la izquierda, no hay nada. El rango de visión de cada dígito es su propio valor.

Ahora bien, el rango de visión de un dígito define el llamado valor de visión, que es la suma de los dígitos dentro del rango de visión. Entonces, el valor de visión del primer dígito, 3 es 4+3+1=8. Para el segundo dígito, 4 el valor de visión es 3+3+1+5=12.

¿Hay un dígito 1 en el número entero para el cual el valor de visión es mínimo?

Sí, 8 es el valor mínimo de visión, tanto para el primer 3 como para el 1. Eso satisface los criterios, por lo que la función devuelve true.*/

function range_vision(n) {
    let numeroEnString = n.toString(); //convierto cada numero en string para poder acceder a los digitos   individualmente 

        /* recorro cada digito del numero y calculo su valor de vision */
    for (let i = 0; i < numeroEnString.length; i++) {
        let digito = parseInt(numeroEnString[i]);
        let digitosIzq = numeroEnString.substring(0, i);
        let digitosDer = numeroEnString.substring(i + 1);
        let visionValue = digito + sumDigits(digitosIzq) + sumDigits(digitosDer);

            if (digito === 1 && visionValue === minVisionValue(n)) {
                return true;
            }   
    }

    return false;
}
        /* calcula el valor de vision de cada digito */
    function sumDigits(str) {   
    let sum = 0;

    for (let i = 0; i < str.length; i++) {
        sum += parseInt(str[i]);
    }

    return sum;
}
    /* calculo el valor de visión de cada dígito y encuentro el valor mínimo de visión entre todos los dígitos. */
    function minVisionValue(n) {
    let numeroEnString = n.toString();
    let minValue = Infinity;

    for (let i = 0; i < numeroEnString.length; i++) {
        let digito = parseInt(numeroEnString[i]);
        let digitosIzq = numeroEnString.substring(0, i);
        let digitosDer = numeroEnString.substring(i + 1);
        let visionValue = digito + sumDigits(digitosIzq) + sumDigits(digitosDer);

        if (visionValue < minValue) {   // Actualizo el valor mínimo de visión si el valor actual es menor
            minValue = visionValue;
        }
    }

    return minValue;
}

console.log(range_vision(34315)); // Devuelve true
console.log(range_vision(12345)); // Devuelve true
console.log(range_vision(9876)); // Devuelve false
