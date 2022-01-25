
/*
TODO Crear una funcion para mostrar y ocultar las contraseñas al clicar en el icono, tambien cambiar el icono al ocultar
*/

function showOcultPassword(num) {
    const input = document.querySelector('#passwd'+num);
    const button = document.querySelector('.passwd'+num);
    if (input.type === 'password') {
      input.type = 'text';
      button.innerHTML = '<i class="fas fa-eye-slash"></i>';
    } else {
      input.type = 'password';
      button.innerHTML = '<i class="fas fa-eye"></i>';
    }
  }
    
function clickEye(num){
    const buttons = document.querySelectorAll('.passwd'+num);
    buttons.forEach(button => {
      button.addEventListener('click', function(){
        showOcultPassword(num);
      });
    });
}

window.addEventListener("DOMContentLoaded", function () {
  clickEye(1);
  clickEye(2);
});


/*
TODO VOLVER A PONER
 */
