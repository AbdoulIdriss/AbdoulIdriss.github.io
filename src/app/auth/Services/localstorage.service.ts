import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  //add something in the local storage
  insert(key: string, data:any):void {

    const stringConverter = JSON.stringify(data)

    localStorage.setItem(key , stringConverter)
  }

  //retrieve something in the local storage
  select(key:string):any{
    
    const content = localStorage.getItem(key);

    if (content) {

      const jsonConverter = JSON.parse(content);

      return jsonConverter;
    }
    
    return content
  }

  //Remove something in the local storage
  removeitem(key: string) {
    localStorage.removeItem(key)
  }

}
