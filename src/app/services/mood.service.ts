import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoodService {

  url: string = 'http://localhost:8000';

  constructor(private http: HttpClient) { } // inject HttpClient in constructor

  listMoods(){
    console.log(this.url+ '/api/moods');
    return this.http.get<any>(this.url+ '/api/moods');
  }
}
