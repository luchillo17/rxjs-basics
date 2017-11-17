# Rxjs-basics

Este workshop le enseñara paso a paso las bases de `Rxjs`, para empezar vamos a configurar el ambiente de desarrollo, vamos a usar un archivo `index.html` para cargar `Rxjs` desde un cdn:

* Primero cree un archivo `index.html` con el boilerplate basico, si no tiene ninguno, copie el que esta disponible en esta carpeta como `index-example.html` repositorio.
* Primero importe `Rxjs` desde el cdn (revise las notas para saber como): https://unpkg.com/rxjs@5.5.2/bundles/Rx.min.js
* Tambien importe el map por si quiere debuguear errores: https://unpkg.com/rxjs@5.5.2/bundles/Rx.min.js.map
* Por ultimo, para estilizar los ejemplos un poco importe bootstrap desde el cdn: https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js
* Tambien necesitaremos el css de bootstrap: https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css

## Notas:
* Para importar un script desde html, inserte la url en la propiedad `src` del siguiente template:
```html
<script src='' />
```
