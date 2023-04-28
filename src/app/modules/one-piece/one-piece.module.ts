import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import {OnePieceRoutingModule} from './one-piece-routing.module';
import {MoviesListComponent} from './pages/movies-list/movies-list.component';
import {MoviesCharactersComponent} from './pages/movies-characters/movies-characters.component';
import {CharacterDetailComponent} from './pages/character-detail/character-detail.component';
import {MaterialModule} from "../../material/material.module";
import {HomeComponent} from './pages/home/home.component';
import {NgxSpinnerModule} from "ngx-spinner";
import {InfoCardComponent} from './components/info-card/info-card.component';
import {SharedModule} from "../../shared/shared.module";
import {ShowInfoModalComponent} from './components/show-info-modal/show-info-modal.component';
import {RouterModule} from "@angular/router";

@NgModule({
    declarations: [
        MoviesListComponent,
        MoviesCharactersComponent,
        CharacterDetailComponent,
        HomeComponent,
        InfoCardComponent,
        ShowInfoModalComponent
    ],
    imports: [
        CommonModule,
        OnePieceRoutingModule,
        MaterialModule,
        NgxSpinnerModule,
        SharedModule,
        NgOptimizedImage,
        RouterModule
    ]
})
export class OnePieceModule {
}
