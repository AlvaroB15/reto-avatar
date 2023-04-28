import {Injectable} from '@angular/core';
import {MovieList} from "../../../core/models/MovieList.model";
import {MoviesCharacters} from "../../../core/models/MoviesCharacters.model";
import {CharacterFull} from "../../../core/models/CharacterFull.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class OnePieceService {

    url = "https://api.jikan.moe/v4/";

    constructor(private _http: HttpClient) {
    }

    getMoviesList(): Observable<MovieList> {
        return this._http.get<MovieList>(`${this.url}anime?q=one%20piece&type=Movie`);
    }

    getMoviesCharacters(idFilm: number): Observable<MoviesCharacters> {
        return this._http.get<MoviesCharacters>(`${this.url}anime/${idFilm}/characters`);
    }

    getCharacterDetail(idCharacter: number): Observable<CharacterFull> {
        return this._http.get<CharacterFull>(`${this.url}characters/${idCharacter}/full`);
    }

}
