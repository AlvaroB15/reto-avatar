Se cambia a Ejercicio 2 por la no disponibilidad del servicio del Ejercicio 1

--- Ejercicio 2
Usando los frameworks de la preferencia del candidato, se requiere:

Se requiere realizar una aplicación ( ReactJS, NextJS, Angular ) que permita realizar una lista de películas del anime: One Piece

Se proveen los servicios REST
1. Lista de películas
   https://api.jikan.moe/v4/anime?q=one piece&type=Movie

2. Obtiene personajes según películas. (mal_id hace referencia al film obtenido en punto 1)
   https://api.jikan.moe/v4/anime/{{mal_id}}/characters
   31490

3. Obtiene detalle completo de personaje (character_mal_id hace referencia a un personaje del response obtenido en punto 2)
   https://api.jikan.moe/v4/characters/{{character_mal_id}}/full
   5627

Se debe poder ver información de las películas, así como poder más detalle de estos y de sus personajes.

Se evaluará:
- Diseño de aplicación
- Experiencia usuaria
- Código escrito y utilitarios utilizados para lograr el objetivo
- El código debe ser subido al repositorio de GitLab/Github/Bitbucket para revisar el historial de commits realizados.
- Documentar el repo usando README.md
