import { Injectable } from '@angular/core';
import {BaseRequestOptions, ConnectionBackend, Http, RequestOptions} from '@angular/http';

@Injectable()
export class ContentService {

  constructor(private http:Http) { }
  getHeroes(i:number): Promise<String[]> {
    return this.http.get(`../../assets/api/${i}.json`)
    .toPromise()
    .then(response =>{
      return response.json().page;
    } )
    .catch(e => console.log("error",e));
}
}
