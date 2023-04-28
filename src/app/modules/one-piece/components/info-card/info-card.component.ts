import {Component, Input} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DataMovieList} from "../../../../core/models/MovieList.model";
import {DataMoviesCharacters} from "../../../../core/models/MoviesCharacters.model";
import {ShowInfoModalComponent} from "../show-info-modal/show-info-modal.component";
import {Router} from "@angular/router";
import {AnimeElement, Manga, Voice} from "../../../../core/models/CharacterFull.model";

@Component({
    selector: 'app-info-card',
    templateUrl: './info-card.component.html',
    styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent {

    @Input('dataMovieList') dataMovieList?: DataMovieList;
    @Input('dataMoviesCharacters') dataMoviesCharacters?: DataMoviesCharacters;
    @Input('dataVoiceTab') dataVoiceTab?: Voice;
    @Input('dataAnimeTab') dataAnimeTab?: AnimeElement;
    @Input('datamangaTab') datamangaTab?: Manga;

    showMoreText: boolean = false;

    constructor(public dialog: MatDialog, private router: Router) {
    }

    showInfoFullMoviesCharacters(dataCard: DataMoviesCharacters) {
        const dialog = this.dialog.open(ShowInfoModalComponent, {
            width: '700px',
            data: {...dataCard},
            autoFocus: false,
        });

        dialog.afterClosed().subscribe(result => {
            console.log(`Dialog result: `);
        });
    }

    showInfoFullMovieList(dataCard: DataMovieList) {
        const dialog = this.dialog.open(ShowInfoModalComponent, {
            width: '700px',
            data: {...dataCard},
            autoFocus: false,
        });

        dialog.afterClosed().subscribe(result => {
            console.log(`Dialog result: `);
        });
    }

    showMore() {
        this.showMoreText = !this.showMoreText;
    }

    goToMovieCharacters(dataMovieList: DataMovieList): void {
        localStorage.setItem('titleMovie', dataMovieList.title);
        this.router.navigate(['/one-piece', 'movies-character', dataMovieList.mal_id]);
    }

    goToCharactersDetail(idMal: number): void {
        this.router.navigate(['/one-piece', 'character-detail', idMal]);
    }

}
