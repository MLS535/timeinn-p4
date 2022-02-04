let emailLogin = document.querySelector ( '#userlogin' );
let passwordLogin = document.querySelector ( '#passwd1' );
let loginButton = document.querySelector ( '.loginButton' );
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
    document.cookie = `token=${token}; path=/; expires=${expiry.toGMTString ()}`
    window.location.replace("index.html")

}

export const getTokenCookie =  function () {
    if ( document.cookie.startsWith ( 'token=' ) ) {
        return document.cookie.split ( '=' )[1]
    }
}

async function generateNewsRender() {

   const data = await fetch ( `http://localhost:3001/news`, {

        method: "GET",
        headers: {
            Authorization: `Bearer ${getTokenCookie ()}`
        },
    } )
        .then ( (res) => {
            if ( !res.ok ) {
                throw new Error ( "HTTP error " + res.status );
            }

           return res.json ()

        } ).catch ( error => {
            return console.log ( "Ha habido un error "+ error );
        } );
   return data;
}

export async function renderCardsNews(){
    let render = '';
    const data = await generateNewsRender();

        data.sort ( function (a, b) {
            return b.destacado - a.destacado || new Date ( a.publication_date ).getTime () - new Date ( b.publication_date ).getTime ()
        } ).map ( post => {
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
        console.log (data)
}


