import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  url = 'http://localhost:3000/user'

  constructor(private http: HttpClient) { }
  addData(FirstName,lastname,email,subject,message){
  const obj = { FirstName,lastname,email,subject,message };
   this 
     .http
     .post(`${this.url}/add`,obj)
     .subscribe(res => console.log(res));
     console.log("working")
  }

getData() {
  return(  
  this
      .http
      .get(`${this.url}`)
  );
  }
  upData(id, FirstName) {
    const obj = { FirstName };
    this
        .http
        .post(`${this.url}/update/${id}`, obj)
        .subscribe(res => console.log(res));
}
delData(id) {
    return this.http.get(`${this.url}/delete/${id}`).subscribe();
}
editData(id) {
  return this
          .http
          .get(`${this.url}/edit/${id}`);
  }


  up_data(FirstName,lastanme, email,subject,message, id) {

    const obj = {
        FirstName: FirstName,
        lastname: lastanme,
        email: email,
        subject: subject,
        message:message
      };
    this
      .http
      .post(`${this.url}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }
}

