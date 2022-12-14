import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JokesService {
  urlLink = 'https://v2.jokeapi.dev/joke/Any?type=twopart&amount=4';

  constructor(private http: HttpClient) {}

  getJokes(){
    return this.http.get<any>(this.urlLink);
  }

}
