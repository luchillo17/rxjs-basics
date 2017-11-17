window.onload = function start() {
  var button = document.querySelector('button');

  Rx
    .Observable
    .fromEvent(button, 'click')
    .subscribe((event) => {
      window.alert('Click de boton');
    })
}
