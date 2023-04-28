import {Component, OnInit} from '@angular/core';
import {OnePieceService} from "../../services/one-piece.service";
import {MovieList} from "../../../../core/models/MovieList.model";

@Component({
    selector: 'app-movies-list',
    templateUrl: './movies-list.component.html',
    styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

    dataMovieList!: MovieList;
    hayData: boolean = false;

    constructor(private onePieceService: OnePieceService) {
    }

    ngOnInit(): void {
        this.onePieceService.getMoviesList().subscribe((resp) => {
            console.log(resp)
            this.dataMovieList = resp;
            this.hayData = this.dataMovieList.data.length === 0;
        })
    }

}
