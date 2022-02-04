

//Register
let formSignup = document.querySelector('.signupButton');
let emailInput = document.querySelector('#email');
let passwordInput1 = document.querySelector('#passwd1');
let passwordInput2 = document.querySelector('#passwd2');
let errorDiv = document.getElementById ( "errorpasswd2" );



console.log (formSignup);

formSignup.addEventListener('click', function (e) {

    if (passwordInput1.value !== passwordInput2.value) {
        errorDiv.innerHTML = "Las contraseñas no coinciden";
    }else {
        errorDiv.innerHTML= "";
        getNewUserData(emailInput.value, passwordInput2.value)
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
           return alert("Te has registrado");
        } );
}
/*TODO:
-FALTA AÑADIR EVENTLISTENER.
- Falta crear email y password del login.
 */
//LOGIN
