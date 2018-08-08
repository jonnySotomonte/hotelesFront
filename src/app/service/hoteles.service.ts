import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class HotelesService {

  apiUrl: string = `http://localhost:3000/`;

  constructor(private http: Http) { }

  getAllHotels(): Observable<any> {
    return this.http.get(this.apiUrl).map(response => response.json());
  }

  getHotelByName(hotelName: string): Observable<any> {
    const resource = this.apiUrl + 'byName?name=' + hotelName;
    return this.http.get(resource).map(response => response.json());
  }

  getHotelByStars(stars: number): Observable<any> {
    const resource = this.apiUrl + 'byStars?stars=' + stars;
    return this.http.get(resource).map(response => response.json());
  }
}
