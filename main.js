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

// Obtener referencia al elemento de imagen
const profileImage = document.getElementById('profile-image');

// Guardar la URL de la primera imagen
const firstImageURL = 'img/foto1.jpg';

// Guardar la URL de la segunda imagen
const secondImageURL = 'img/foto2.png';

// Guardar la fuente original de la imagen
const originalImageSource = profileImage.src;

// Agregar el evento 'mouseenter' al elemento de imagen
profileImage.addEventListener('mouseenter', function() {
  // Cambiar la fuente de la imagen al pasar el cursor por encima
  profileImage.src = secondImageURL;
});

// Agregar el evento 'mouseleave' al elemento de imagen
profileImage.addEventListener('mouseleave', function() {
  // Restaurar la fuente de la imagen cuando el cursor se aleja
  profileImage.src = originalImageSource;
});

