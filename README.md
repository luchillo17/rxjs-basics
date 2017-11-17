# Rxjs-basics paso #1

En este paso vamos a añadir un archivo js, un lindo boton con bootstrap, asociarle un evento con Rxjs y asi ejecutar una acción, en este caso una alerta:

* Primero cree un archivo JS llamado `main.js`, un archivo CSS llamado `main.css` y añadalos con un script tag y un link tag a la cabecera de `index.html`.

* Añada el boton como se ve a continuación:
```html
<div id='container'>
  <button type="button" class="btn btn-primary">Contar click</button>
</div>
```

* El boton esta en la esquina superior derecha, centremosla en la pagina, en `main.css` añada este css:
```css
#container {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
```


* En `main.js` cree una función y asociela a el evento `onload` de la ventana:
```js
window.onload = function start() {

}
```

* En dicha función guarde en una variable una referencia al boton, obtenida a travez de un query al DOM:
```js
var button = document.querySelector('#container button');
```

* Ahora vamos a asociar el evento de click con Rxjs a una alerta de esta manera:
```js
  Rx
    .Observable
    .fromEvent(button, 'click')
    .subscribe((event) => {
      window.alert('Click de boton');
    })
```

* En este punto, todo click del boton generará una alerta en la ventana.

## Notas:
* El JS completo se ve asi:
```js
window.onload = function start() {
  var button = document.querySelector('button');

  Rx
    .Observable
    .fromEvent(button, 'click')
    .subscribe((event) => {
      window.alert('Click de boton');
    })
}
```


# Siguiente paso
Dirijase a la rama `#1` de este repositorio para continuar, e aqui la url: https://github.com/luchillo17/rxjs-basics/tree/%232
