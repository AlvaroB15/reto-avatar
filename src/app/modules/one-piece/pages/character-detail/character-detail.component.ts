import {Component, OnInit} from '@angular/core';
import {OnePieceService} from "../../services/one-piece.service";
import {ActivatedRoute} from "@angular/router";
import {MoviesCharacters} from "../../../../core/models/MoviesCharacters.model";
import {CharacterFull} from "../../../../core/models/CharacterFull.model";

@Component({
    selector: 'app-character-detail',
    templateUrl: './character-detail.component.html',
    styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

    dataCharacterDetail!: CharacterFull;
    arrayDataAbout: String[];

    constructor(private onePieceService: OnePieceService, private activatedRoute: ActivatedRoute) {
        this.arrayDataAbout = [];
    }

    ngOnInit(): void {
        this.onePieceService.getCharacterDetail(this.activatedRoute.snapshot.params['id']).subscribe((resp) => {
            this.dataCharacterDetail = resp;
            const dataArray: string[] = this.dataCharacterDetail.data.about.split("\n");
            this.arrayDataAbout = dataArray.filter(data => data != "");
        });
    }

}
