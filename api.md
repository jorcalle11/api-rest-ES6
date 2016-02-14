## Métodos Http permitidos

    **Método**      **Descripción**
    `GET`       Obtener una pelicula o una lista de peliculas
    `POST`      Crear una pelicula
    `PUT`       Actualizar una pelicula
    `DELETE`    ELiminar una pelicula

## Códigos de respuesta

    **Código**      **Descripción**
    `200`       Success
    `201`       Success - nueva pelicula creada
    `204`       Success - no hay contenido para responder
    `400`       Bad Request - Su solicitud no se pudo evaluar
    `401`       Unauthorizated - Usuario no esta autenticado para este recurso
    `404`       Not Found - Recurso no existe
    `422`       Unprocesable Entity - errores de validación
    `429`       Limite de uso excedido, intente mas tarde
    `500`       Error de servidor
    `503`       Servidor no disponible

## Crear una pelicula nueva
    solictud **POST** /movies
    {
        movie:{
            "title": "The avengers",
            "age" 2015,
            "duration": "02:21:18",
            "country" : "Estados Unidos",
            "director": "Joss Whedon",
            "producer": "Marvel Studios",
            "genre": "['Fantastico','Acción','Ciencia Ficción']",
            "3d": true,
            "language": ['Ingles'],
            "subtitles": ['Español latino','Ingles'],
            "synopsis": "Cuando Tony Stark intenta reactivar un programa caído en desuso cuyo objetivo es mantener la paz....",
            "cover": "http://miimage.jpg"
        }
    }

    respuesta
    {
        data: {
            "id": "1",
            "title": "The avengers",
            "age" 2015,
            "duration": "02:21:18",
            "country" : "Estados Unidos",
            "director": "Joss Whedon",
            "producer": "Marvel Studios",
            "genre": "['Fantastico','Acción','Ciencia Ficción']",
            "3d": true,
            "language": ['Ingles'],
            "subtitles": ['Español latino','Ingles'],
            "synopsis": "Cuando Tony Stark intenta reactivar un programa caído en desuso cuyo objetivo es mantener la paz....",
            "cover": "http://miimage.jpg"            
        }
    }

## Obtener todas las peliculas
    solictud **GET** /movies

    respuesta
    {
        data: [{
            "id": "1",
            "title": "The avengers",
            "age" 2015,
            "duration": "02:21:18",
            "country" : "Estados Unidos",
            "director": "Joss Whedon",
            "producer": "Marvel Studios",
            "genre": "['Fantastico','Acción','Ciencia Ficción']",
            "3d": true,
            "language": ['Ingles'],
            "subtitles": ['Español latino','Ingles'],
            "synopsis": "Cuando Tony Stark intenta reactivar un programa caído en desuso cuyo objetivo es mantener la paz....",
            "cover": "http://miimage.jpg"            
        }]
    }

## Obtener una pelicula
    solictud **GET** /movies/1

    respuesta
    {
        data: {
            "id": "1",
            "title": "The avengers",
            "age" 2015,
            "duration": "02:21:18",
            "country" : "Estados Unidos",
            "director": "Joss Whedon",
            "producer": "Marvel Studios",
            "genre": "['Fantastico','Acción','Ciencia Ficción']",
            "3d": true,
            "language": ['Ingles'],
            "subtitles": ['Español latino','Ingles'],
            "synopsis": "Cuando Tony Stark intenta reactivar un programa caído en desuso cuyo objetivo es mantener la paz....",
            "cover": "http://miimage.jpg"            
        }
    }    

## Actualizar una pelicula
    solictud **PUT** /movies/1

    {
        movie:{
            "title": "The avengers",
            "age" 2015,
            "duration": "02:29:03",
            "country" : "Estados Unidos",
            "director": "Joss Whedon",
            "producer": "Marvel Studios",
            "genre": "['Fantastico','Acción','Ciencia Ficción','Superheroes']",
            "3d": true,
            "language": ['Ingles'],
            "subtitles": ['Español latino','Ingles'],
            "synopsis": "Cuando Tony Stark intenta reactivar un programa caído en desuso cuyo objetivo es mantener la paz....",
            "cover": "http://miimage.jpg"
        }
    }

    respuesta
    {
        data:{
            "title": "The avengers",
            "age" 2015,
            "duration": "02:29:03",
            "country" : "Estados Unidos",
            "director": "Joss Whedon",
            "producer": "Marvel Studios",
            "genre": "['Fantastico','Acción','Ciencia Ficción','Superheroes']",
            "3d": true,
            "language": ['Ingles'],
            "subtitles": ['Español latino','Ingles'],
            "synopsis": "Cuando Tony Stark intenta reactivar un programa caído en desuso cuyo objetivo es mantener la paz....",
            "cover": "http://miimage.jpg"
        }
    }

## ELiminar una nota
    solictud **DELETE** /movies/1

    respuesta
    {
        data:{
            "title": "The avengers",
            "age" 2015,
            "duration": "02:29:03",
            "country" : "Estados Unidos",
            "director": "Joss Whedon",
            "producer": "Marvel Studios",
            "genre": "['Fantastico','Acción','Ciencia Ficción','Superheroes']",
            "3d": true,
            "language": ['Ingles'],
            "subtitles": ['Español latino','Ingles'],
            "synopsis": "Cuando Tony Stark intenta reactivar un programa caído en desuso cuyo objetivo es mantener la paz....",
            "cover": "http://miimage.jpg"
        }
    }
