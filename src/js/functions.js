/**
 * Todas las funciones del programa.
 * @module Funciones
 */

/**
 * Parámetros de la función, los tipos de datos que recibe y retorna. 
 * @param {string} n - parámetro de tipo string.
 * @param {string} [o] - parámetro de tipo string opcional.
 * @param {number} [d = 18] - parámetro de tipo número opcional y con valor por defecto.
 * @return {string} 
 *
 * @example
 *
 * saludar('Francisco', 'perro', 29);
 * 
 * return Hola Francisco, enviaste el texto perro, y el número 29.
 * 
 */

function saludar(n, o, d){
    const saludo = `Hola ${n}, enviaste el texto ${o}, y el número ${d}.`;
    return saludo;
}


/**
 * Documentar función flecha de la misma forma. 
 * Encuentra un ejemplo en {@tutorial tutorial}
 * @param {number} num1 - primer número.
 * @param {number} num2 - segundo número.
 * @returns {number} 
 */
const sumar = (num1, num2) => {

    let resultado = num1 + num2;  

    return resultado;
};
  