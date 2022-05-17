/**
 *Permite crear un programador - Descripción de la clase.
 * @class
 * 
 * Puedes aprender más en {@tutorial tutorial}
 * 
 * @example
 * 
 * const programador = new Programador('Karla', 'JavaScript', 29, 'Programadora');
 *  
 * programador.getinfoProgramador();
 *
 * @see https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes
 * 
 * @todo Agregar un nuevo método a la clase. 
 */
class Programador{
    
    /**
     * Crear una instancia de la clase.
     * @param {string} nombre - parámetro tipo string.
     * @param {string} lenguaje - parámetro tipo string.
     * @param {number} edad - parámetro tipo número.
     * @param {string} [titulo = 'No posee'] - parámetro tipo string.
     * @memberof Programador
     */
    constructor(nombre, lenguaje, edad , titulo){
        this.nombre = nombre;
        this.titulo = titulo;
        this.lenguaje = lenguaje;
        this.edad = edad;
    }

    /**
     *Obtener información con los datos del constructor. 
     * @return {string} 
     * @memberof Programador
     */
    getinfoProgramador(){
        return `Nombre: ${this.nombre} | Titulo: ${this.titulo} | Edad: ${this.edad} | Lenguaje: ${this.lenguaje}`
    }

}

    /** 
    * Ver clase completa en {@link Programador}
    */
    const programador = new Programador('Karla', 'JavaScript', 29, 'Programadora');
    programador.getinfoProgramador();
   
