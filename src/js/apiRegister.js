

//Register
let formSignup = document.querySelector('.signupButton');
let emailInput = document.querySelector('#email');
let passwordInput1 = document.querySelector('#passwd1');
let passwordInput2 = document.querySelector('#passwd2');
let errorDiv = document.getElementById ( "errorpasswd2" );

let users1 = [];
var localStorageKeyName = 'data';
//function to store user name and password
var dataInLocalStorage = localStorage.getItem(localStorageKeyName);
if (dataInLocalStorage != null) {
    users1 = JSON.parse(dataInLocalStorage);
}

console.log (formSignup);

formSignup.addEventListener('click', function (e) {

    if (passwordInput1.value !== passwordInput2.value) {
     return   errorDiv.innerHTML = "Las contraseñas no coinciden";
    }
    if (passwordInput1.value === "") {
      return   errorDiv.innerHTML = "Las contraseña no puede estar vacia";
    }
    if (passwordInput2.value === "") {
     return    errorDiv.innerHTML = "Las contraseña no puede estar vacia";
    }
        if (emailInput.value === "") {
          return errorDiv.innerHTML = "El email no puede estar vacio";}
            if (!emailInput.value.includes('@')) {
           return errorDiv.innerHTML = "El email debe tener una @";
    }else {
        errorDiv.innerHTML= "";
        getNewUserData(emailInput.value, passwordInput2.value)
        const usuario = {
            email      : emailInput.value,
            password   : passwordInput2.value,
        };

        //Hacemos un push de usuarios a usuario
        users1.push(usuario);
        localStorage.setItem(localStorageKeyName, JSON.stringify(users1));

    }
})

function getNewUserData(email, password) {
    fetch ( `http://localhost:3001/auth/register`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "accept": "application/json"
        },
        body: JSON.stringify ( {
            email: email,
            password: password,
        } )
    } )
        .then ( res => res.json () )
        .then ( post => {
           return errorDiv.innerHTML= `Registro Completado`;
        } ).catch(error=>
        console.log(error)
    );
}

