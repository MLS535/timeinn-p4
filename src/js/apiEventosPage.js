
const formOverlay = document.getElementById("formOverlay");
const portfolioEvents = document.querySelector('#portfolio-events');

//async  permet definir una funcio asíncrona, és a dir, que s’executa de forma paral·lela al codi js
async function getEvents() {
    let url = 'http://localhost:3000/eventos';
    ;
    try {
        //await bloqueja l’execució del codi fins que no es resolgui la instrucció actual
        let res = await fetch ( url );
        return await res.json ();
    } catch (error) {
        console.log ( error );
    }
}

//Renderizar todos los eventos
async function renderEvents(events = null) {
    //Si eventos no existe, entonces cogerá la función get y si es un parametro que existe nos ç
    // devolverá el propio elemento que hay dentro del parametro
   events = events ? events : await getEvents ();
    let html = '';
    events.map ( post => {
        let htmlSegment = `
   <div class="event" data-id="${post.id}">
         <img class="image" src="${post.imgUrl}" alt="${post.title}" />
          <div class="content-overlay">
                
                <div class="title">${post.title}</div>
                <div class="event_favicon">
                 <div class="date-destacado"><i class="far fa-calendar-alt"></i> <a class="dates">${post.publication_date}</a> </div>
            <div class="hora"><i class="far fa-clock"></i> Hora: <a class="hour">${post.time}</a></div>
            <div class="precio"><i class="fas fa-hand-holding-usd"></i> Precio: <a class="price">${post.price}</a>€</div>
             <div class="precio"><i class="fas fa-passport"></i> Id: <a class="price">${post.id}</a></div>
            <div class="location"><i class="fas fa-map-marked-alt"></i> <a class="place">${post.location}</a></div>
                </div>

                <div class="text">${post.description}</div>
            </div>
             <div class="buttons">

                 <div class="edit" data-id=${post.id}><button data-id=${post.id} class="edit-btn"><i class="fas fa-pencil-alt"></i></button></div>
              <div class="delete" data-id=${post.id}><button data-id=${post.id} class="delete-btn"><i class="fas fa-trash-alt"></i></button></div>
            </div>
         </div>

    `
        html += htmlSegment;
    } );

    let container = document.querySelector ( '#portfolio-events' );
    container.innerHTML = html;
}


//Carga todos los elementos del crud
window.addEventListener('DOMContentLoaded',()=>{
    renderEvents();
});

//Borrar Eventos
portfolioEvents.addEventListener("click", function (e) {
    //let eventsCardContainer = document.querySelector(".event")
    if (e.target.className === "delete-btn") {
        let EventsId = e.target.dataset.id
        fetch(`http://localhost:3000/eventos/${EventsId}`, {
            method: "DELETE"
        })
            .then(resp => resp.url)
            .then(function (url) {
                splitUrl = url.split('/')
                console.log (splitUrl);
                urlId = splitUrl[splitUrl.length - 1]
                console.log (urlId);
                allDeleteBtns = document.querySelectorAll(".delete-btn")

                let EventsToDelete;

                allDeleteBtns.forEach(function (EventsButton) {
                    if (EventsButton.dataset.id == urlId) {
                        EventsButton = document.querySelector(".event");
                        EventsToDelete = EventsButton
                        console.log (EventsToDelete);
                    }
                })
                EventsToDelete.remove()
            })
    }
})


//Crea nuevos eventos
function getNewEventData(NewEventData) {
    fetch(`http://localhost:3000/eventos`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "accept": "application/json"
        },
        body: JSON.stringify({
            title: NewEventData.titulo.value,
            location: NewEventData.lugar.value,
            description: NewEventData.description.value,
            publication_date: NewEventData.date.value,
            imgUrl: NewEventData.image.value,
            time: NewEventData.time.value,
            price: NewEventData.price.value
        })
    })
        .then(res => res.json())
        .then(post => {
            portfolioEvents.insertAdjacentHTML("afterbegin", `
 <div class="event" data-id="${post.id}">
         <img class="image" src="${post.imgUrl}" alt="${post.title}" />
          <div class="content-overlay">
                <div class="title">${post.title}</div>
                <div class="event_favicon">
                 <div class="date-destacado"><i class="far fa-calendar-alt"></i> <a class="dates">${post.publication_date}</a> </div>
            <div class="hora"><i class="far fa-clock"></i> Hora: <a class="hour">${post.time}</a></div>
            <div class="precio"><i class="fas fa-hand-holding-usd"></i> Precio: <a class="price">${post.price}</a>€</div>
            <div class="precio"><i class="fas fa-passport"></i> Id: <a class="price">${post.id}</a></div>
            <div class="location"><i class="fas fa-map-marked-alt"></i> <a class="place">${post.location}</a></div>
                </div>

                <div class="text">${post.description}</div>
            </div>
             <div class="buttons">
<!--                <div class="edit"><i class="fas fa-pencil-alt"></i></div>-->
  <div class="edit" data-id=${post.id}><button data-id=${post.id} class="edit-btn"><i class="fas fa-pencil-alt"></i></button></div>
              <div class="delete" data-id=${post.id}><button data-id=${post.id} class="delete-btn"><i class="fas fa-trash-alt"></i></button></div>
            </div>
         </div>

    `

            )})
//Cerramos el formulario una vez creado el evento
    window.location.replace("eventPage.html#");
    title.value = "";
    NewEventData.lugar.value = "";
    NewEventData.date.value = "";
    NewEventData.time.value = "";
    NewEventData.price.value = "";
    NewEventData.time.value = "";
    description.value = "";
        }



const btnEdit = document.getElementById("boton_editar");
const btnEditar = document.querySelector(".editarBoton");

let EventsId = "";

portfolioEvents.addEventListener("click", function(evt) {
    if (evt.target.className === "edit-btn") {
        EventsId = evt.target.dataset.id;
     document.querySelector(".submit").style.display ="none";
        document.querySelector(".editarBoton").style.display ="block";
        window.location.replace("eventPage.html#popup1")

 }});

formOverlay.addEventListener("submit", function (evt){
    evt.preventDefault ();

    let botonclickado = document.activeElement.getAttribute('name');
    if ( botonclickado === 'add' ){
        document.querySelector(".submit").style.display ="block";
        getNewEventData ( evt.target )

    }
    if ( botonclickado === 'edit' ){
        // let EventsId = evt.target.dataset;
        console.log(EventsId);
        document.querySelector(".submit").style.display ="none";
       return editarEventos(evt.target,EventsId)
    }
});




let new_event = document.querySelector(".button_event");

//Al hacer click a nuevo evento del html borrará el boton de editar y aplicará el botón de guardar
new_event.addEventListener("click", function (){
    btnEdit.style.display ="none";
    document.querySelector(".submit").style.display ="block";
})

function editarEventos(eventosEditados, EventosID) {
    fetch(`http://localhost:3000/eventos/${EventosID}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json",
            "accept": "application/json"
        },
        body: JSON.stringify({
            title: eventosEditados.titulo.value,
            location: eventosEditados.lugar.value,
            description: eventosEditados.description.value,
            publication_date: eventosEditados.date.value,
            imgUrl: eventosEditados.image.value,
            time: eventosEditados.time.value,
            price: eventosEditados.price.value
        })
    })
        .then(res => res.json())
        .then(eventos => {
             renderEvents();
          //  eventosEditados.reset()

        })
    window.location.replace("eventPage.html#")
}


//TODO COGER EL EVENTO
async function getFrontEvent(id) {
   const data = await fetch(`http://localhost:3000/eventos/${id}`)
        .then(response => response.json())
        .then(json => json)
    return data;

}


var filterOneElement = document.querySelector('.addFilter');

filterOneElement.addEventListener('click', async function (e){

  let valor = document.getElementById('idFilter').value;
   const data = [await getFrontEvent(valor)]
   await renderEvents(data);
})


var filterAllElements = document.querySelector('.delFilters');

filterAllElements.addEventListener('click', async  function (){
    renderEvents();
})