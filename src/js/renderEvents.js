
import* as data from './data.js';
import {events, news} from "./data.js";


const porfolioEvents = document.querySelector('#portfolio-events');
const btnEdit = document.getElementById("boton_editar");

//Crea una copia de eventos en otro array
const eventos = [...events];

//function_events crea una función que recorre el parametro de eventos que será un objeto y lo recorre con un map
const function_events = function (events){
    const event_news =  Object.values(events).map(post =>
        `
   <div class="event">
         <img class="image" src="${post.imgUrl}" alt="${post.title}" />
          <div class="content-overlay">
                <div class="title">${post.title}</div>
                <div class="event_favicon">
                 <div class="date-destacado"><i class="far fa-calendar-alt"></i> <a class="dates">${post.publication_date}</a> </div>
            <div class="hora"><i class="far fa-clock"></i> Hora: <a class="hour">${post.time}</a></div>
            <div class="precio"><i class="fas fa-hand-holding-usd"></i> Precio: <a class="price">${post.price}</a>€</div>
            <div class="location"><i class="fas fa-map-marked-alt"></i> <a class="place">${post.location}</a></div>
                </div>
               
                <div class="text">${post.description}</div>
            </div>
             <div class="buttons">
                <div class="edit"><i class="fas fa-pencil-alt"></i></div>
                <div class="delete"><i class="fas fa-trash-alt"></i></div>
            </div>
      </div>    
    `
    )
    return event_news;
}

// Pinta la función function_events en el id de portfolio.events que está en el html
    porfolioEvents.innerHTML = function_events(eventos).join('\n');



//todo EDITAR OTRA FUNCION IGUAL QUE ESTÁ BUSCAR LA CLASE EDITAR.
//TODO AÑADIR UN NUEVO BOTON AL FORMULARIO QUE SEA DE EDITAR Y AL CLICKAR ESE BOTON SE EJECUTE ESA FUNCION QUE TE MODIFIQUE EL CONTENIDO DEL EVENTO.
//

//Al hacer click en la basurita que tiene la clase .delete te borrará el elemento seleccionado.
const removeEvents =function (){
    porfolioEvents.addEventListener('click', evt => {
        //devuelve el ascendiente más cercano al elemento actual que coincida con el selector proporcionado por parámetro.
        const papelera = evt.target.closest('.delete');
        if ( !papelera ) return
        //devolverá el elemento padre, en este caso busca el primer div y despues el segundo dentro de papelera que sería event y lo borrará con la función remove()
        papelera.parentElement.parentElement.remove()

    })
}
//Llama la función borrar
removeEvents();

let new_event = document.querySelector(".button_event");

//Al hacer click a nuevo evento del html borrará el boton de editar y aplicará el botón de guardar
new_event.addEventListener("click", function (){
    btnEdit.style.display ="none";
    document.querySelector(".submit").style.display ="block";
})


var formOverlay = document.getElementById("formOverlay");

//Con está función añadimos nuevos eventos
formOverlay.addEventListener("click", function(evt) {
    evt.preventDefault();
    let submit = evt.target.closest(".submit");
      //Si submit es distinto
    if ( !submit ) return

    //Hace aparecer el boton de crear evento en el formulario
    document.querySelector(".submit").style.display ="block";


//Selecciona los inputs del formulario
     let title = document.getElementById("title");
     let location = document.getElementById("location");
    let publication_date = document.getElementById("date_form");
    let time = document.getElementById("time_form");
     let price = document.getElementById("price");
     let description = document.getElementById("description");
     let imgUrl = document.getElementById("imgUrl");
     let id = Math.floor(Math.random() * 999.999)

    //Inserta en eventAdd los nuevos elementos
    const eventAdd = {id,title: title.value,description: description.value, publication_date: publication_date.value, imgUrl: imgUrl.value
        , time: time.value, price: price.value, location: location.value};

        //condicion
        if (title.value != "" && location.value != "" && publication_date.value != "" && time.value != "" && price.value != "" && description.value != "" && imgUrl.value != "") {
     //Añade eventAdd al objeto eventos
    eventos.push(eventAdd);
    //Inserta eventos al principio de portfolio y la renderiza con la función function_events
   porfolioEvents.insertAdjacentHTML("afterbegin", function_events([eventAdd]).join("\n"));
     //Al hacer click en el boton quitará el formulario
     window.location.replace("eventPage.html#");
     //borra los campos del formulario
     title.value = "";
     location.value = "";
     publication_date.value = "";
     time.value = "";
     price.value = "";
     description.value = "";
    } 
    }
    );



//Edita el evento
const editEvents =function (){
    porfolioEvents.addEventListener('click', evt => {

        const editar = evt.target.closest('.edit');
        if ( !editar ) return
        const editParent = editar.parentElement.parentElement
        //aplica el boton de editar y quita el boton de nuevo evento
        btnEdit.style.display ="block";
        document.querySelector(".submit").style.display ="none";
        //Al hacer click en el boton añadirá el formulario 
        window.location.replace("eventPage.html#popup1")
        //Al hacer click al boton de editar se editan los eventos
        btnEdit.addEventListener('click', function()
        {
            //Selecciona los id de los inputs
            let title = document.getElementById("title");
            let location = document.getElementById("location");
            let publication_date = document.getElementById("date_form");
            let time = document.getElementById("time_form");
            let price = document.getElementById("price");
            let description = document.getElementById("description");
            let imgUrl = document.getElementById("imgUrl");
            //condicion
            if (title.value != "" && location.value != "" && publication_date.value != "" && time.value != "" && price.value != "" && description.value != "" && imgUrl.value != "") {
            //Pintamos el evento que queremos editar
            const markup = `<img class="image" src="${imgUrl.value}" alt="${title.value}"/>
            <div class="content-overlay">
                <div class="title">${title.value}</div>
                <div class="event_favicon">
                    <div class="date-destacado"><i class="far fa-calendar-alt"></i> ${publication_date.value}
                    </div>
                    <div><i class="far fa-clock"></i> Hora: ${time.value}</div>
                    <div><i class="fas fa-hand-holding-usd"></i> Precio: ${price.value}</div>
                    <div><i class="fas fa-map-marked-alt"></i> ${location.value}</div>
                </div>
          
                <div class="text">${description.value}</div>
            </div>
            <div class="buttons">
                <div class="edit"><i class="fas fa-pencil-alt"></i></div>
                <div class="delete"><i class="fas fa-trash-alt"></i></div>
            </div>`

            editParent.innerHTML = '';
            //Inserta lo nuevo editado
        editParent.insertAdjacentHTML('afterbegin', markup);
        //borra los campos del formulario
         title.value = "";
         location.value = "";
         publication_date.value = "";
         time.value = "";
         price.value = "";
         description.value = "";
         window.location.replace("eventPage.html#");
        }})
    })
}
editEvents();

//filtros
//filtro por titulo
function filterTitle() {
    let input = document.getElementById("titleFilter");
    let filter = input.value.toLowerCase();
    let divElem = document.getElementsByClassName("event");
    let title = document.getElementsByClassName("title");
    for (let i = 0; i < divElem.length; i++) {
      let txtValue = title[i].textContent;
      if (txtValue.toLowerCase() != filter && filter != "") {
        divElem[i].style.display = "none";
      }
    }
  }

  //filtro por precio
  function filterPrice() {
    let input = document.getElementById("priceFilter");
    let filter = input.value;
    let divElem = document.getElementsByClassName("event");
    let price = document.getElementsByClassName("price");
    for (let i = 0; i < divElem.length; i++) {
      let txtValue = price[i].textContent;
      if (txtValue != filter && filter != "") {
        divElem[i].style.display = "none";
      }
    }
  }

  //filtro por fecha
  function filterDate() {
    let input = document.getElementById("dateFilter");
    let filter = input.value;
    let divElem = document.getElementsByClassName("event");
    let date = document.getElementsByClassName("dates");
    for (let i = 0; i < divElem.length; i++) {
      let txtValue = date[i].textContent;
      if (txtValue != filter && filter != "") {
        divElem[i].style.display = "none";
      }
    }
  }

  //filtro por hora
  function filterHour() {
    let input = document.getElementById("timeFilter");
    let filter = input.value;
    let divElem = document.getElementsByClassName("event");
    let hour = document.getElementsByClassName("hour");
    for (let i = 0; i < divElem.length; i++) {
      let txtValue = hour[i].textContent;
      if (txtValue != filter && filter != "") {
        divElem[i].style.display = "none";
      }
    }
  }

  //filtro por lugar
  function filterPlace() {
    let input = document.getElementById("placeFilter");
    let filter = input.value.toLowerCase();
    let divElem = document.getElementsByClassName("event");
    let place = document.getElementsByClassName("place");
    for (let i = 0; i < divElem.length; i++) {
      let txtValue = place[i].textContent;
      if (txtValue.toLowerCase() != filter && filter != "") {
        divElem[i].style.display = "none";
      }
    }
  }

  //boton de filtros
  function filter(){
    const buttons = document.querySelectorAll('.addFilter');

    buttons.forEach(button => {
      button.addEventListener('click', function(){
        let divElem = document.getElementsByClassName("event");
        for (let i = 0; i < divElem.length; i++) {
            divElem[i].style.display = "";
        }
        if(document.getElementById("titleFilter") != ""){
          filterTitle();
        }
        if(document.getElementById("priceFilter") != ""){
          filterPrice();
        }
        if(document.getElementById("dateFilter") != ""){
          filterDate();
        }
        if(document.getElementById("timeFilter") != ""){
          filterHour();
        }
        if(document.getElementById("placeFilter") != ""){
          filterPlace();
        } else {
          alert("No hay filtros");
        }
      });
    });
  }

  function delFilters(){
    const buttons = document.querySelectorAll('.delFilters');

    buttons.forEach(button => {
      button.addEventListener('click', function(){
        let divElem = document.getElementsByClassName("event");
        let input = document.getElementsByTagName("input");
        for (let i = 0; i < divElem.length; i++) {
            divElem[i].style.display = "";
            input[i].value = "";
        }
      });
    });
  }

  filter();
    delFilters();