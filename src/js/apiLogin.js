let emailLogin = document.querySelector ( '#userlogin' );
let passwordLogin = document.querySelector ( '#passwd1' );
let loginButton = document.querySelector ( '.loginButton' );
let errorbutton = document.querySelector ( '#erroreslogin' );
let today = new Date ();
let expiry = new Date ( today.getTime () + 7 * 24 * 3600 * 1000 );

loginButton?.addEventListener ( 'click', async function (e) {
    await getUsers ( emailLogin.value, passwordLogin.value )

} )


async function getUsers(email, password) {

    const login = "http://localhost:3001/auth/login";

    const token = await fetch ( login, {

        method: "GET",
        headers: {
            Authorization: 'Basic ' + btoa ( `${email}:${password}` )
        },
    } )
        .then ( (response) => response.json () )
        .then ( data => data.access_token )
        .catch ( (err) => {
            console.log ( err );

        } );
    if ( token === undefined ) {
        errorbutton.innerHTML = 'Usuario o contraseña erronea';
    } else {
        document.cookie = `token=${token}; path=/; expires=${expiry.toISOString()}`
        checkData ( emailLogin.value, passwordLogin.value );
        errorbutton.innerHTML = '';
        window.location.replace ( "index.html" )
    }
}

export const getTokenCookie = function () {
    let checkCookie = document.cookie.startsWith ( 'token=' )
    console.log(checkCookie)
    if ( checkCookie ) {
        let replace ='; username'
        let split = document.cookie.replace(replace, '').split ( '=' )[1];
        console.log (split)
        return split
    }
}

async function generateNewsRender() {
//await fetch
    const data = await fetch ( `http://localhost:3001/news`, {

        method: "GET",
        headers: {
            Authorization: `Bearer ${getTokenCookie ()}`
        },
    } )
        // .then ( (res) => {
        //     if ( !res.ok ) {
        //         throw new Error ( "HTTP error " + res.status );
        //     }
        //     console.log(res.json())
        //     return res.json ()
        //
        // } )
        .then(res => res.json())
.catch ( error => {
            return console.log ( "Ha habido un error " + error );
        } );
    return data;
}

export async function renderCardsNews() {
    let render = '';
    const data = await generateNewsRender ();
        console.log(data)
    data.
        // sort ( function (a, b) {
        //     return b.destacado - a.destacado || new Date ( a.publication_date ).getTime () - new Date ( b.publication_date ).getTime ()
        // } )
        map( post => {
            let htmlSegment =
                `
     <div class="card">
                    <div class="card-img">
                        <img src="${post.imgUrl}" alt="">
                        <img class="blur" src="" alt="">
                    </div>
                    <div class="card-text">
                        <h2>${post.title}</h2>
                      <h3><i class="far fa-calendar-alt"></i> ${post.publication_date}</h3>
                        <p class="description_news">${post.description}<p>
                        <div>${post.patrocinada}</div>
                    </div>
                </div>

    `
            render += htmlSegment;
            let container = document.querySelector ( '.card-content' );
            container.innerHTML = render;

        } )

}



function checkData(username, password) {
    var users1 = [];
    users1.push ( [username, password] )
    var localStorageKeyName = 'data';
    var dataInLocalStorage = localStorage.setItem ( localStorageKeyName, JSON.stringify ( users1 ) );
    let somedata = JSON.parse ( localStorage.getItem ( localStorageKeyName ) );

    storeValues ();

}

// TODO añadir la llamada a la función donde se hace el login
function createCookie(name, value, days) {
    var expires;
    if ( days ) {
        var date = new Date ();
        date.setTime ( date.getTime () + (days * 24 * 60 * 60 * 1000) );
        expires = "; expires=" + date.toGMTString ();
    } else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function storeValues() {
    let username = document.getElementById ( 'userlogin' ).value;
    createCookie ( 'username', username, 1 );
}