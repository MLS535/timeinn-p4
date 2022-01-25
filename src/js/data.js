//Base de datos de la aplicación


export const news = [
    {
        id: 1,
        title: 'Imagine Dragons Mercury Tour',
        description: 'Con 46 millones de álbumes, 55 millones de canciones vendidas en todo el mundo y 74.000 millones de reproducciones acumuladas, Imagine Dragons reinventó el género con su enorme éxito a lo largo de la década de 2010 y sigue siendo una de las bandas de rock con más récords de venta. ',
        publication_date: '2022-01-01',
        imgUrl: 'https://cdn.pixabay.com/photo/2016/08/15/16/56/singer-1595864_960_720.jpg',
        destacado: true,
        patrocinada: "Noticia patrocinada"
    },

        {   id: 2,
            title: 'Concierto de Roberto Fonseca',
            description: 'El concierto estará basado en gran medida en su disco Yesun. “Es el álbum que siempre quise hacer”, dice Fonseca sobre un disco que combina todo, desde jazz hasta electrónica, saltándose las normas por el camino.',
            publication_date: '2022-01-22',
            imgUrl: 'https://cdn.pixabay.com/photo/2016/11/19/11/11/dua-lipa-1838653_960_720.jpg',
            destacado: false,
            patrocinada: ""
        },

        {   id: 3,
            title: 'David Rees',
            description: 'David Rees es un cantante y youtuber español, cuyos inicios en la plataforma de contenido audiovisual vinieron motivados por una voluntad de expresar su talento musical.Sus vídeos tienen miles de reproducciones y, gracias a su naturalidad y cercanía, ha conseguido un gran número de fans incondicionales. Cuenta con más de 200 mil suscriptores en su canal de Youtube.',
            publication_date: '2022-06-22',
            imgUrl: 'https://cdn.pixabay.com/photo/2015/05/07/11/02/guitar-756326_960_720.jpg',
            destacado: false,
            patrocinada: ""
        },
    {
        id: 4,
        title: 'United se reunen de nuevo',
        description: 'EL grupo United se reune de nuevo despues de una decada sin tocar, debido a las discrepancias entre ellos, ahora volverán a tocar sus canciones más famosas',
        publication_date: '2022-07-22',
        imgUrl: 'https://cdn.pixabay.com/photo/2016/11/22/21/36/audience-1850665_960_720.jpg',
        destacado: true,
        patrocinada: "Noticia patrocinada"
    },

    {   id: 5,
        title: 'Chopin Sessions 2022',
        description: 'Las Chopin Sessions se llevarán a cabo en la plaza Los Caidos. En este se tocaran varias de las mas famosas obras de Chopin',
        publication_date: '2022-05-22',
        imgUrl: 'https://cdn.pixabay.com/photo/2016/09/16/15/56/manhattan-1674404_960_720.jpg',
        destacado: false,
        patrocinada: ""
    },
    {
        id: 6,
        title: 'Mariah Carey en Concierto',
        description: 'Este año la Navidad llega antes de tiempo. La superestrella global, fenómeno vocal e icono internacional, ' +
            'MARIAH CAREY, anuncia su concierto para el próximo 17 de diciembre en el WiZink Center de Madrid, después de 18 años ' +
            'desde su último show en la capital, con su exitoso  All I want for Christmas is you Tour',
        publication_date: '2021-12-12',
        imgUrl: 'https://cdn.pixabay.com/photo/2013/10/04/21/13/woman-190897_960_720.jpg',
        destacado: true,
        patrocinada: "Noticia patrocinada"
    },

    {   id: 7,
        title: 'El Funeral',
        description: 'El funeral es un original espectáculo de música y teatro. El humor y la espectacularidad se fusionan para concluir una propuesta diferente en la que la ironía da alas a la risa caminando entre la comicidad y la tragedia.',
        publication_date: '2021-12-22',
        imgUrl: 'https://cdn.pixabay.com/photo/2016/04/28/01/08/stage-1357961_960_720.jpg',
        destacado: false,
        patrocinada: ""
    },
    {
        id:8,
        title: 'Nuevo videoclip de Bruno Mars',
        description: 'Bruno Mars y Anderson Paak, han creado una banda de puro R&B, llamada Silk Sonic. El pasado marzo, ya sacaron un primer adelanto, «Leave the Door Open» y luego lanzaron, «Skate». Así llevan, durante meses, publicando alguna que otra pista de lo que será su nuevo proyecto, «An Evening With Silk Sonic».',
        publication_date: '2022-10-22',
        imgUrl: 'https://cdn.pixabay.com/photo/2018/03/06/06/58/performance-3202707_960_720.jpg',
        destacado: false,
        patrocinada: " "
    },

    {
        id: 9,
        title: 'Subasta de guitarras con fines benéficos',
        description: 'Radiohead , Paul McCartney , U2 , Green Day , Dave Grohl , Noel Gallagher y muchos más artistas están subastando guitarras para ayudar a los músicos afectados por la pandemia de COVID .',
        publication_date: '2022-07-22',
        imgUrl: 'https://cdn.pixabay.com/photo/2018/07/26/17/48/musician-3564169_960_720.jpg',
        destacado: false,
        patrocinada: " "
    },
    {
        id: 10,
        title: 'El día que el primer supergrupo de la historia dijo adiós',
        description: 'Poco más de dos años de exstencia fueron suficientes para pasar a la historia de la música',
        publication_date: '2022-06-22',
        imgUrl: 'https://cdn.pixabay.com/photo/2016/08/01/11/28/rock-1560867_960_720.jpg',
        destacado: true,
        patrocinada: "Noticia patrocinada"
    }

];

export const events = [
    {   title: 'MAD COOL FESTIVAL 2022',
        description: 'La organización del festival ha comunicado que Mad Cool Festival 2022 regresará a Madrid el próximo verano, ocupando de nuevo el recinto ubicado en Valdebebas – Ifema concebido para albergar a 60.000 personas y que ofrece una extensión de 100.000 metros cuadrados.',
        publication_date: '28/06/2022',
        imgUrl: 'https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_960_720.jpg',
        time: '21:30',
        price: 50.00,
        location: 'Madrid',
        destacado: false
    },
    {   title: 'ES GREMI SOUNDS 2021',
        description: 'Es Gremi celebra su 18º aniversario y para ello han preparado un sábado muy especial para poder disfrutar de los mejores conciertos de indie rock del momento.\n' +
            '\n' +
            'Ginebras, el cuarteto femenino afincado en Madrid, actuará por primera vez en Palma presentando su primer disco "Ya dormiré cuando me muera" (Vanana Records, 2020). Diversión y buen rollo a raudales con alta dosis de guitarras poperas y dicharacheras que hacen de su directo una fiesta constante de espíritu festivalero',
        publication_date: '10/07/2021',
        imgUrl: 'https://cdn.pixabay.com/photo/2018/06/17/10/38/artist-3480274_960_720.jpg',
        time: '17:30',
        price: 45.00,
        location: 'Palma de Mallorca',
        destacado: true
    },
    { title: 'Mallorca Live Festival 2022',
        description: 'El festival internacional de música más importante de las Islas Baleares. Mallorca Live Festival regresa en 2022 a su formato original para que puedas seguir bailando y disfrutando de lo que más nos gusta: los mejores directos nacionales e internacionales del momento.',
        publication_date: '05/07/2022',
        imgUrl: 'https://cdn.pixabay.com/photo/2016/11/19/13/57/drum-set-1839383_960_720.jpg',
        time: '22:00',
        price: 125.00,
        location: 'Baleares',
        destacado: false
    },
    {   title: 'ES GREMI SOUNDS 2021',
        description: 'Es Gremi celebra su 18º aniversario y para ello han preparado un sábado muy especial para poder disfrutar de los mejores conciertos de indie rock del momento.\n' +
            '\n' +
            'Ginebras, el cuarteto femenino afincado en Madrid, actuará por primera vez en Palma presentando su primer disco "Ya dormiré cuando me muera" (Vanana Records, 2020). Diversión y buen rollo a raudales con alta dosis de guitarras poperas y dicharacheras que hacen de su directo una fiesta constante de espíritu festivalero',
        publication_date: '18/09/2021',
        imgUrl: 'https://cdn.pixabay.com/photo/2017/04/11/22/56/stage-2223130_960_720.jpg',
        time: '18:00',
        price: 45.00,
        location: 'Palma de Mallorca',
        destacado: false
    },
    {   title: 'FESTIVAL EIVISSA JAZZ',
        description: 'Vuelve el Festival Eivissa Jazz, uno de los eventos culturales más importantes del año en la isla, que celebra su 33ª edición del 1 al 4 de septiembre de 2021, recuperando una jornada respecto al año pasado.\n' +
            '\n' +
            'Una esperada cita con algunos de los mejores artistas nacionales e internacionales de jazz que este año nos ofrece ocho estupendos conciertos al aire libre.',
        publication_date: '26/08/2022',
        imgUrl: 'https://cdn.pixabay.com/photo/2016/09/10/11/11/jazz-1658886_960_720.jpg',
        time: '20:30',
        price: 30.00,
        location: 'Ibiza',
        destacado: true
    },
    {   title: 'Mike Triste en concierto',
        description: 'Mike Triste artista actual del panorama musical indie rock tocará en concierto en son Moix, entre sus canciones más famosas se encuentra la balada "No puedo mas" y "Quiero terminar ya" que seguro que el público cantará con toda la ilusión del mundo ',
        publication_date: '22/06/2022',
        imgUrl: 'https://cdn.pixabay.com/photo/2017/08/01/12/42/concert-2565099_960_720.jpg',
        time: '21:30',
        price: 30.00,
        location: 'Palma de Mallorca',
        destacado: true
    }
]

//no lo hemos utilizado porque utilizamos LOCALSTORAGE

export const users = [
    {
        usuario: 'maite.ls',
        email: 'maiteladaria@gmail.com',
        password: 'Pepito123!?'
    },
    {
        usuario: 'ignacioakrich',
        email: 'Ignacioakrich@gmail.com',
        password: 'Pepita123!?'
    },
    {
        usuario: 'joansonsardina',
        email: 'joandesoncarrio@gmail.com',
        password: 'santLlorenç123!?'
    },
    {
        usuario: 'juanluis.ls',
        email: 'juanluis.ladaria@gmail.com',
        password: 'CrownDeWorld123_!'
    },
    {
        usuario: 'Ignaliete',
        email: 'kikorivera@hotmail.com',
        password: 'soyLoMas123!?'
    }

]