import { Injectable } from '@angular/core';
import {BaseRequestOptions, ConnectionBackend, Http, RequestOptions} from '@angular/http';

@Injectable()
export class ContentService {
 
 data=[];
 maxpage=0;
  constructor(private http:Http)  {
   }
//This method will fetch data for the content Lisr
   getContent(i:number): Promise<String[]> {
    return this.http.get(`../../assets/api/${i}.json`)
    .toPromise()
    .then(response =>{
      var result=response.json().page;
      this.maxpage=Math.ceil(result['total-content-items']/result['page-size-requested'])
      return result;
    } )
    .catch(e => console.log("error",e));
}

//Search match values from api
   searchcontent(searchtxt:String){
    this.data=[];
    let index = 1
    for (index; index <=this.maxpage; index++) {
      this.http.get(`../../assets/api/${index}.json`)
      .toPromise()
      .then(response =>{
        //it will chech trough each page and update the object
        this.data.push(...response.json().page['content-items'].content.filter((content)=>content.name.toLowerCase().includes(searchtxt.toLowerCase()))) ;
      } )
      .catch(e => console.log("error",e));

      if(index==this.maxpage)//when itration complete it will return the search result
      {
        return this.data
      }

    }
      
      
   } 
}
