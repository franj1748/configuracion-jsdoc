## Tutorial de instalación 

En esta sección puedes escribir los tutoriales para el proyecto. 

Dentro de la carpeta donde se encuentren los tutoriales pueden haber varios archivos en: 

* HTML 
* Markdown
* XHTML

Aquí puedes utilizar todas las ventajas de `Markdown` para ilustrar ejemplo del uso de tu código o librería. 

Este es un ejemplo de código de una clase. Desde el archivo donde se encuentra la clase podrás encontrar un enlace para venir aquí si necesitaras explicar algo adicional. 

Este para el link desde la clase:
```javascript
class Programador{
    constructor(nombre, lenguaje, edad , titulo){
        this.nombre = nombre;
        this.titulo = titulo;
        this.lenguaje = lenguaje;
        this.edad = edad;
    }

    getinfoProgramador(){
        return `Nombre: ${this.nombre} | Titulo: ${this.titulo} | Edad: ${this.edad} | Lenguaje: ${this.lenguaje}`
    }

}
    // Instancia
    const programador = new Programador('Karla', 'JavaScript', 29, 'Programadora');
    // Método de la clase
    programador.getinfoProgramador();

```
Este para el link desde la función: 

```javascript
const sumar = (num1, num2) => {

    let resultado = num1 + num2;  

    return resultado;
};

```

