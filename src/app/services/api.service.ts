import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../models/characters';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiURL: string = 'https://rickandmortyapi.com/api/character';
  constructor(private http: HttpClient) {}

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.apiURL);
  }

  getCharacterById(id: number): Observable<Character> {
    return this.http.get<Character>(`${this.apiURL}/${id}`);
  }
}
