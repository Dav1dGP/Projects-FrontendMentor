function mostrarDesplegable () {
  const desplegable = document.getElementById('desplegable')
  if (desplegable.style.display === 'block') {
    desplegable.style.display = 'none'
  } else {
    desplegable.style.display = 'block'
  }
}

function redireccionar (url) {
  window.location.href = url
}
