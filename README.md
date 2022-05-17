# Archivos de configuración para JSDoc

Encontrarás todos los archivos de configuración necesarios para empezar a utilizar la documentación con JSDoc. Además, encontrarás archivos .js con ejemplos para documentar cada tipo. 

## Instalación 

Inicia npm para que instale los archivos necesarios, que ya encontrará en el `package.json`: 

```
npm init -y
```
Si por alguna razón no ves la dependencia en el archivo de configuración: 

```
"dependencies": {
    "clean-jsdoc-theme": "^3.3.4",
    "jsdoc": "^3.6.10"
}
```
Entonces puedes instalarla localmente, con el siguiente comando: 

```
npm install --save-dev jsdoc
```

## Contenido

Encontraras ejemplos de cómo documentar cada tipo de dato en los archivos `.js` de la carpeta `src` separados con cada nombre de tipo de dato, objetos, funciones y clases. 

Los ejemplos se ven asi: 

* Primitivos:
!['ejemplo_primitivos'](https://accesoweb.online/images/code_primitivos.png)

* Funciones: 
!['ejemplo_funciones'](https://accesoweb.online/images/code_funciones.png)

* Clases: 
!['ejemplo_funciones'](https://accesoweb.online/images/code_clases.png)

Puedes cambiar la configuración de JSDoc desde el archivo `jsdoc.json`. Para saber más de cómo hacerlo visita [esta página](https://jsdoc.app/about-configuring-jsdoc.html).

## Crear la documentación

En el archivo `package.json`, encontrarás un script con el comando necesario para generar la documentación. 

```
"docs": "jsdoc -c jsdoc.json"
```
De la siguiente forma: 

```
npm run docs
```

## Tema 

Se cambió el tema por defecto y se aplicó el tema `clean-jsdoc-theme`. Para aprender más sobre cómo modificarlo visita [esta página](https://www.npmjs.com/package/clean-jsdoc-theme).

Aquí tienes una vista previa de la documentación de este proyecto: 

!['vista_previa_doc'](https://accesoweb.online/images/code_objetos.png)

### Contacto 

[Linkedin](https://www.linkedin.com/in/francisco-elis-24506b209)
