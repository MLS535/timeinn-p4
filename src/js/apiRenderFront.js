

async function getFrontEvents() {
    let url = 'http://localhost:3000/eventos';

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
    console.log(events);
    let container = document.querySelector( '#destacado' );
    console.log(container);
    container.innerHTML = html;
}


window.addEventListener('DOMContentLoaded',()=>{
    renderFrontEvents();

});

async function getFrontEvent(id) {
    let url = `http://localhost:3000/eventos/${id}`;

    try {
        //await bloqueja l’execució del codi fins que no es resolgui la instrucció actual
        let res = await fetch ( url );
        console.log(res.json());
        return await res.json();
    } catch (error) {
        console.log ( error );
    }
}
getFrontEvent(1);
getFrontEvent(1);