const changeFontBtn = document.querySelector('#change-font');
changeFontBtn.addEventListener('click', function() {
    document.body.classList.toggle('change-font');
    
})
const enlaceCV = document.getElementById('btn-descargar-cv');

enlaceCV.addEventListener('mouseover', function() {
  // Aquí puedes agregar el efecto que desees, como cambiar el color del texto, agregar una sombra, etc.
  enlaceCV.style.color = '#000'; /* Cambia el color del texto al pasar el cursor por encima */
});

enlaceCV.addEventListener('mouseout', function() {
  // Aquí puedes revertir el efecto o regresar al estado original
  enlaceCV.style.color = '#fff'; /* Regresa al color original del texto */
});

