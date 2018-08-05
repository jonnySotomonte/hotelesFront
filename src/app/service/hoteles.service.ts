import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx'; 


@Injectable()
export class HotelesService {

  apiUrl: string = `http://localhost:3000/`;

  constructor(private http: Http) { }

  getAllHotels(): Observable<any> {
    return this.http.get(this.apiUrl).subscribe(this.extractData);
  }

  private extractData(response: Response) {
    console.log(response);
    return response;
}

}
