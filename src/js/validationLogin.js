function checkData(username, password, errores){
    var users1 = [];
    var localStorageKeyName = 'data';
    var dataInLocalStorage = localStorage.getItem(localStorageKeyName);
    users1 = JSON.parse(dataInLocalStorage);
     let resultado =  users1.find( a => (a.username === username ||a.email === username) && a.password === password);
     if ( resultado ){
         //todo Aquí añadir funcion de la cookie
         storeValues();
         /* TODO mensajes del login correcto
             redireccionamos a front page y se muestra un mensaje como “Hola, Maria” (por ejemplo, si la usuaria es Maria) */
         window.location.replace("index.html");
   }else
        /* TODO mensajes del login incorrecto
            Saldrá un mensaje de error en el formulario (los errores tendrán el color de error de la Paleta de Colores) */
       errores.innerHTML = 'Usuario o contraseña erronea'
   }

   var submit = document.querySelector('.loginButton');
   
   submit.addEventListener("click", function (e){
       e.preventDefault();
       let errores = document.getElementById('erroreslogin');
       //Añadir preventDefault y cambiar a submit el boton para que no se actualice y se pierda info
       let username = document.getElementById('userlogin').value;
       let passwd1 = document.getElementById('passwd1').value;
       checkData(username, passwd1, errores);
   });

   /* TODO Crear Cookies del nombre de usuario
    El nombre de usuario se guarda en una Cookie. Así al refrescar la página, seguirá saliendo el mensaje “Hola, Maria” */

//al darle al boton de submit, crear una cookie con el nombre de usuario
function createCookie(name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}
function storeValues(){
    let username = document.getElementById('userlogin').value;
    createCookie('username', username, 1);
}





