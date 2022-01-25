//TODO La validacion de los campos a de ser con expresiones regulares siempre que sea posible
/* 
TODO validar el name 
    - no puede estar vacío
    - numero de caracteres entre 3 y 20
    - no debe existir en la Tabla de Usuarios
*/
 export function  validarNombre(username,users) {
    if (username.length < 3 || username.length > 20) return "El nombre debe tener entre 3 y 20 caracteres";
    if (users.find(a => a.username  === username)) return "El usuario ya existe";
    let dataName ={
        username: username
    };
    return dataName;

    }

/* 
TODO validar el email 
    - valida al salir del campo (al perder el foco) 
    - no puede estar vacío
    - no debe existir en la Tabla de Usuarios
    - Patron de validacion:
        nombre@nombreorganizacion.tipo
        - nombre: solo la primera letra puede estar en mayúscula y el resto en minúscula
        - nombre de la organización: entre 5 y 10 minusculas
        - tipo: Solo pudeden ser com, net o gov
        - Solo puede haber una @ y un punto
*/
export function validarEmail(email,users) {
    //la primera letra puede estar en mayúscula y el resto en minúscula
    if (email.substring(1).toLowerCase() != email.substring(1)) return "El email solo puede tener la primera letra en mayúscula";

    //Solo pueden haber una @ y un punto
    if (email.indexOf("@") == -1) return "El email debe tener una @";
    if (email.indexOf(".") == -1) return "El email debe tener un punto";
    if (email.indexOf("@") > email.indexOf(".")) return "El email debe tener una @ antes del punto";
    // entr el @ y el punto, debe haber entre 5 y 10 minusculas
    if (email.substring(email.indexOf("@")+1, email.indexOf(".")).length < 5 ||
        email.substring(email.indexOf("@")+1, email.indexOf(".")).length > 10) return "entre el @ y el punto, debe haber entre 5 y 10 minusculas";
    //despues del punto, solo puede haber com, net o gov
    if (email.substring(email.indexOf(".")+1) != "com" && email.substring(email.indexOf(".")+1) != "net" && email.substring(email.indexOf(".")+1) != "gov") return "despues del punto, solo puede haber com, net o gov";
    //Validar que el email no exista en la tabla de usuarios
    if ( users.find(a => a.email  === email ) ) return "Email ya existe";
    let dataEmail = {
        email: email
    };
    return dataEmail;
}

/*
TODO validar el password
    - valida al salir del campo (al perder el foco)
    - Muestra mensajes debajo de los campos para los errores que puedan suceder.
    - Patron de validacion:
        - Longitud mínima de siete caracteres
        - Incluir letras mayúsculas y minúsculas
        - Incluir números
        - Incluir caracteres espespeciales (por ejemplo, !, $, %, &, etc.)
*/
export function validarPassword(password){
    //Longitud mínima de siete caracteres
    if (password.length < 6) return "La contraseña debe tener al menos 7 caracteres";
    //Incluir letras mayúsculas y minúsculas
    if (!password.match(/[a-z]/)) return "La contraseña debe incluir al menos una letra minúscula";
    if (!password.match(/[A-Z]/)) return "La contraseña debe incluir al menos una letra mayúscula";
    //Incluir números
    if (!password.match(/\d/)) return "La contraseña debe incluir al menos un número";
    //Incluir caracteres espespeciales (por ejemplo, !, $, %, &, etc.)
    if (!password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/)) return "La contraseña debe incluir al menos un caracter especial";

    let dataPassword = {
        password: password
    };
    return dataPassword;

}