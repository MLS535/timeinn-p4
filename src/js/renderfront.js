import* as data from './data.js';

import { news, events} from "./data.js";

//Filtrado de las noticias por news patrocinadas primero y luego los eventos más cercanos en el tiempo
let sort_news = news.sort(function(a,b) {
    return b.destacado - a.destacado || new Date(a.publication_date).getTime() - new Date(b.publication_date).getTime()
    });

//Renderizado de las noticias
const front_card = sort_news.map(post => `
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
`)

document.querySelector('.card-content').innerHTML = front_card.join('\n');

//cards de eventos

const front_event = events.map(post => `
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
`)

document.querySelector('.event-content').innerHTML = front_event.join('\n');

const event_news = Object.values([events[0],events[2]]).map(post => `
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
`)

document.querySelector('#portfolio-events').innerHTML = event_news.join('\n');

const event_news2 = Object.values([events[4],events[5]]).map(post => `
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
`)

document.querySelector('#portfolio-events2').innerHTML = event_news2.join('\n');

//Filtrado de eventos destacados y eventos más próximos
    let filter =  events.filter(event => event.destacado === true ).
    sort(function(a,b) {
        return new Date(a.publication_date).getTime() - new Date(b.publication_date).getTime()
    })


//renderizado de eventos destacados del mes
let destacados = filter.map(eventfilter => {
        return ` <div class="destacado">
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
    </div>`
}

);
document.querySelector('#destacado').innerHTML = destacados.join('\n');
