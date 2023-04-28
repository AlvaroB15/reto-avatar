import {Component, OnInit} from '@angular/core';
import {OnePieceService} from "../../services/one-piece.service";
import {MoviesCharacters} from "../../../../core/models/MoviesCharacters.model";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-movies-characters',
    templateUrl: './movies-characters.component.html',
    styleUrls: ['./movies-characters.component.css']
})
export class MoviesCharactersComponent implements OnInit {

    dataMoviesCharacters!: MoviesCharacters;
    hayData: boolean = false;
    titleMovieList: string;

    constructor(private onePieceService: OnePieceService, private activatedRoute: ActivatedRoute) {
        console.log(localStorage.getItem('titleMovie'));
        this.titleMovieList = localStorage.getItem('titleMovie') || "";
    }

    ngOnInit(): void {
        this.onePieceService.getMoviesCharacters(this.activatedRoute.snapshot.params['id']).subscribe((resp) => {
            console.log(resp)
            this.dataMoviesCharacters = resp;
            this.hayData = this.dataMoviesCharacters.data.length === 0;
        });
    }
}
