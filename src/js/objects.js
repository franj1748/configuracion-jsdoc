/**
 * Todos los objetos del programa.
 * @module Objetos
 */

/**
 * Objeto 
 * @type {{make: string, model: string, year: number | string}}
 */
const myCar = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969
};


/**
 * Tipo de dato objeto.
 * @typedef {object} Producto
 * @property {string} id - Id del producto.
 * @property {number} cantidad - Cuantos productos se han seleccionado.
 * @property {string} [img] - Opcional. URL de la imagen del producto seleccionado.
 * @property {string} nombre - Nombre del producto.
 * @property {string | number} precio - Precio del producto seleccionado. 
*/

/**
 * @type {Producto}
 */
const infoProducto = {
    id       : '5',
    cantidad : 1,
    img      : 'https://',
    nombre   : 'Producto',
    precio   : 5000
};