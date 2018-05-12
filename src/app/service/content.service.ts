import { Injectable } from '@angular/core';
import {BaseRequestOptions, ConnectionBackend, Http, RequestOptions} from '@angular/http';

@Injectable()
export class ContentService {
 
 data=[];

  constructor(private http:Http)  {

    for (let index = 1; index <=3; index++) {
      this.http.get(`../../assets/api/${index}.json`)
      .toPromise()
      .then(response =>{
        this.data.push(...response.json().page['content-items'].content) ;
      } )
      .catch(e => console.log("error",e));
    }
   
   }

  getHeroes(i:number): Promise<String[]> {
    return this.http.get(`../../assets/api/${i}.json`)
    .toPromise()
    .then(response =>{
      return response.json().page;
    } )
    .catch(e => console.log("error",e));
}

   searchcontent(searchtxt:String){
      return this.data.filter((content)=>content.name.toLowerCase().includes(searchtxt.toLowerCase())
    )
   } 
}
