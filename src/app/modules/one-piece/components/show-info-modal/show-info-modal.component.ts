import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DataMovieList} from "../../../../core/models/MovieList.model";
import {DataCharacterFull} from "../../../../core/models/CharacterFull.model";

@Component({
    selector: 'app-show-info-modal',
    templateUrl: './show-info-modal.component.html',
    styleUrls: ['./show-info-modal.component.css']
})
export class ShowInfoModalComponent {

    constructor(private dialogRef: MatDialogRef<ShowInfoModalComponent>,
                @Inject(MAT_DIALOG_DATA) public dataMovieList: DataMovieList,
                @Inject(MAT_DIALOG_DATA) public dataMovieCharacter: DataCharacterFull) {
    }

    cerrar() {
        this.dialogRef.close();
    }

}
