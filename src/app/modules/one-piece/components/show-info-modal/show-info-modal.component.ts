import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DataMovieList} from "../../../../core/models/MovieList.model";
import {DataMoviesCharacters} from "../../../../core/models/MoviesCharacters.model";

@Component({
    selector: 'app-show-info-modal',
    templateUrl: './show-info-modal.component.html',
    styleUrls: ['./show-info-modal.component.css']
})
export class ShowInfoModalComponent {

    dataMovieList!: DataMovieList;
    dataMoviesCharacters!: DataMoviesCharacters;

    constructor(private dialogRef: MatDialogRef<ShowInfoModalComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any) {

        data.voice_actors ? this.dataMoviesCharacters = data : this.dataMovieList = data;

    }

    cerrar() {
        this.dialogRef.close();
    }

}
