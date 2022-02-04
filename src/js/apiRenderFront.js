import {renderCardsNews, getTokenCookie} from "./apiLogin.js";

const url = 'http://localhost:3000/eventos';
async function getFrontEvents() {
    try {
        //await bloqueja l’execució del codi fins que no es resolgui la instrucció actual
        let res = await fetch ( url );
        return await res.json ();
    } catch (error) {
        console.log ( error );
    }
}

async function renderFrontEvents() {
    let events = await getFrontEvents();
    let html = '';
    events.filter(event => event.destacado === true ).
    sort(function(a,b) {
        return new Date(a.publication_date).getTime() - new Date(b.publication_date).getTime()
    }).map ( eventfilter => {
        let htmlSegment =
            `
     <div class="destacado">
        <div class="content-destacado">
            <div class="title-destacado">${eventfilter.title}</div>
            
            <div class="favicon-dest">
             <div class="date-destacado"><i class="far fa-calendar-alt"></i> ${eventfilter.publication_date} </div>
            <div ><i class="far fa-clock"></i> Hora: ${eventfilter.time}</div>
            <div><i class="fas fa-hand-holding-usd"></i> Precio: ${eventfilter.price}</div>
            <div><i class="fas fa-map-marked-alt"></i> ${eventfilter.location}</div>
            </div>
           
            <div class="text-dest">${eventfilter.description}</div>
        </div>
        <img class="image-dest" src="${eventfilter.imgUrl}" alt="${eventfilter.title}" />
    </div>

    `
        html += htmlSegment;
    }

    )

    let container = document.querySelector( '#destacado' );
    container.innerHTML = html;
}


window.addEventListener('DOMContentLoaded',()=>{
    renderFrontEvents();
    frontEventsBigSize();
    frontEventslittleSize();
    cardContentfront();
});

function frontEventsBigSize(){
    let html = '';
    fetch(url)
        .then((res) => {
            if (!res.ok) {
                throw new Error("HTTP error " + res.status);
            }
            return res.json()
        })
        .then((data) => {
             data.filter(entry => entry.id)
                .slice(0, 2).map(post => {
                    let htmlSegment =
                        `
     <div class="indexEvent">
         <img class="image" src="${post.imgUrl}" alt="${post.title}" />
          <div class="content">
                 <div class="title">${post.title}</div>
              <div class="date-destacado"><i class="far fa-calendar-alt"></i> ${post.publication_date} </div>
            <div ><i class="far fa-clock"></i> Hora: ${post.time}</div>
            <div><i class="fas fa-hand-holding-usd"></i> Precio: ${post.price}</div>
            <div><i class="fas fa-map-marked-alt"></i> ${post.location}</div>
                <div class="text">${post.description}</div>
            </div>
      </div>

    `
                    html += htmlSegment;
                    let container = document.querySelector( '#portfolio-events' );
                    container.innerHTML = html;
                    console.log(htmlSegment);
            // ...use data...
        })})
        .catch(error => {
        return  "Ha habido un error";
        });

}

function frontEventslittleSize() {
    let html = '';
    fetch ( url )
        .then ( (res) => {
            if ( !res.ok ) {
                throw new Error ( "HTTP error " + res.status );
            }
            return res.json ()
        } )
        .then ( (data) => {
            data.filter ( entry => entry.id )
                .slice ( 3, 5 ).map ( post => {
                let htmlSegment =
                    `
     <div class="indexEvent2">
        <div class="content-overlay">
        <div class="title">${post.title}</div>
              <div class="date-destacado"><i class="far fa-calendar-alt"></i> ${post.publication_date} </div>
            <div ><i class="far fa-clock"></i> Hora: ${post.time}</div>
            <div><i class="fas fa-hand-holding-usd"></i> Precio: ${post.price}</div>
            <div><i class="fas fa-map-marked-alt"></i> ${post.location}</div>
            <div class="text">${post.description}</div>
        </div>
        <img class="image" src="${post.imgUrl}" alt="${post.title}" />
    </div>

    `
                html += htmlSegment;
                let container = document.querySelector ( '#portfolio-events2' );
                container.innerHTML = html;

                // ...use data...
            } )
        } )
        .catch ( error => {
            return "Ha habido un error";
        } );
}


function cardContentfront() {
    let html = '';
    fetch ( url )
        .then ( (res) => {
            if ( !res.ok ) {
                throw new Error ( "HTTP error " + res.status );
            }
            return res.json ()
        } )
        .then ( (data) => {
            data.map ( post => {
                let htmlSegment =
                    `
      <div class="card">
                    <div class="card-img">
                        <img src="${post.imgUrl}" alt="">
                        <img class="blur" src="" alt="">
                    </div>
                    <div class="card-text">
                        <h2>${post.title}</h2>
                        <div class="date-destacado"><i class="far fa-calendar-alt"></i> ${post.publication_date} </div>
                        <div ><i class="far fa-clock"></i> Hora: ${post.time}</div>
                        <div><i class="fas fa-hand-holding-usd"></i> Precio: ${post.price}</div>
                        <div><i class="fas fa-map-marked-alt"></i> ${post.location}</div>
                        <p class="description_news">${post.description}<p>
                    </div>
                </div>
    `
                html += htmlSegment;
                let container = document.querySelector ( '.event-content' );
                container.innerHTML = html;
                console.log ( htmlSegment );

            } )
        } )
        .catch ( error => {
            return "Ha habido un error";
        } );
}

if(document.cookie.startsWith ( `token=${getTokenCookie()}` )){
   renderCardsNews()
}
