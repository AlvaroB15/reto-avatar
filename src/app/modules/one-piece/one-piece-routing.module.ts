import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MoviesListComponent} from "./pages/movies-list/movies-list.component";
import {MoviesCharactersComponent} from "./pages/movies-characters/movies-characters.component";
import {CharacterDetailComponent} from "./pages/character-detail/character-detail.component";
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        children: [
            {
                path: "movie-list",
                component: MoviesListComponent
            },
            {
                path: "movies-character/:id",
                component: MoviesCharactersComponent
            },
            {
                path: "character-detail/:id",
                component: CharacterDetailComponent
            },
            {
                path: "**",
                redirectTo: "movie-list"
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OnePieceRoutingModule {
}
