<h1>TimeInn P4</h1>

## Tabla de contenidos:
---
- [Cambios_P4](#Cambios-en-P4)
- [Descripción y contexto](#descripción-y-contexto)
- [Dificultades del proyecto](#Dificultades-del-proyecto)
- [Mejoras del proyecto](#Mejoras-proyecto)
- [Autor/es](#autores)

#Cambios en P4:
---
Realizado cambio de objects a api.
El código nuevo está situado en:
- apiEventosPage.js 
- apiLogin.js
- apiRegister.js
- apiRenderFront.js
- project.js
- script.js
En los proyectos llamados api es donde llamo a las apis.
  
En la terminal, para llamar a las apis lo que hago es utilizar dos terminales con los siguientes comandos:
- npm run api_crud
- npm run api_auth_dev

La mayoría de cambios se han realizado en el crud. He tenido que cambiar los botones de editar y de eliminar para que se pudiesen
realizar cambios, ya que de la otra manera como lo tenía no cogía el evento.
  
CRUD: 
Contiene:
-Editar
-Eliminar: He creado un botón que elimina el evento
-Consultar un evento con un id: Esto lo realizo con el filtro del identificador
-Crear un nuevo evento

FRONT:
Los eventos se leen perfectamente. Además sigo utilizando los filtros de destacado y filtro por numero de apariciones.

Auth:
- He creado un validador pequeño y he quitado el que teniamos. 
- Los usuarios se registran correctamente y sale un mensaje de color azul en el apartado de registro que se ha registrado correctamente.
- Los usuarios se loguean correctamente.
- Los usuarios se redireccionan cuando se loguean y aparece el nombre del usuario en el front. Esto está realizado con una cookie secundaria. Ya que tengo dos cookies, la primera la que coge el token y la segunda, es la que muestra el email del usuario.

      
## Descripción y contexto
---
Está es una página de consulta de noticias y eventos de música. Tenemos eventos destacados y noticias patrocinadas. Hay una segunda página que nos permite
crear, editar, filtrar y borrar eventos. Y una tercera pagina que puedes registrarte y loguearte.



## Dificultades del proyecto
---
**Entre otras dificultades que me he encontrado son las siguientes:**

*JavaScript*
- El botón de editar me costó muchisimo ya que funcionaba cambiando un botón con otro y debía jugar con eso. Además al principio solo me creaba.
- Tuve que realizar cambios en el html para que funcionarán algunas cosas como por ejemplo los botones del crud.
!!Importante: a veces la aplicación cuando haces click en el boton de editar por primera vez, te abre el botón de crear, hay que cerrar y volver abrir haciendo click en el botón de editar para que edite correctamente.
También hay que darle doble click a los botones editar y borrar ya que tarda un poco en reaccionar.

- Auth:
Tuve dificultades porque no entendía porque se añadian usuarios en la api pero no se podían registrar. Al final resultó que estaba utilizando la siguiente api:
  npm run api_auth y debía utilizar run api_auth_dev.
  - También tuve dificultades para conseguir que se limitarán las cookies.
  - Renderizar las noticias y pasarle por parametro el token para que pudiese acceder el usuario y se visualizase el contenido.
    
- Otras dificultades:
Por falta de tiempo no he podido cambiar el css y adaptar mejor la página, estos cambios se ven en los botones nuevos añadidos o en la parte de news.
## Mejoras del proyecto
---
Realizada la mejora de las news. Si el usuario no está logueado no aparecerán las news y aparecerá un espacio en blanco sin cards.

## Autor/es

- Maite Ladaria Sanchez

