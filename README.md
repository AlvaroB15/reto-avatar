# OnePieceAlvaro

Web desarrollada en Angular2+, quer permite consumir los 3 enpoints de 

```
https://api.jikan.moe/v4/anime?q=one piece&type=Movie
https://api.jikan.moe/v4/anime/{{mal_id}}/characters
https://api.jikan.moe/v4/characters/{{character_mal_id}}/full
```

Para poder correr de forma local el proyecto, debe clonar el proyecto,
debe tener instalado el node y el angular, se está usando la última version lts

```
git clone https://github.com/AlvaroB15/reto-avatar.git
npm install
cd nameFolder
ng s
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
