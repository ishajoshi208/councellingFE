import { Http,Headers } from '@angular/http';
import { Injectable } from '@angular/core';
// import { RequestOptions, URLSearchParams } from '@angular/http';


/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
  token: any;
  userId: any;

  constructor(public http: Http) {
    console.log('Hello UserProvider Provider');
  }

  async signup(data) {
    console.log("data in service", data);
    return this.http.post('http://localhost:3000/user', data).toPromise();
  }

  async login(data) {
    return this.http.post('http://localhost:3000/login', data).toPromise();
  }

  dataPassing(token, userId) {
    this.token = token;
    this.userId = userId
  }

  eventSubmit(data) {
    let headers = new Headers();
    let tokenValue = 'Bearer ' + this.token;
    headers.append('Content-Type', 'application/json');  
    headers.append('Authorization',tokenValue); 
    return this.http.post('http://localhost:3000/events/'+this.userId,data,{headers: headers}).toPromise();
  }
   
  consequenceSubmit(data){
  let headers = new Headers();
  let tokenValue = 'Bearer ' + this.token;
  headers.append('Content-Type', 'application/json');  
  headers.append('Authorization',tokenValue); 
  return this.http.post('http://localhost:3000/consequences/'+this.userId,data,{headers: headers}).toPromise();
  }

  beliefSubmit(data){
    let headers = new Headers();
    let tokenValue = 'Bearer ' + this.token;
    headers.append('Content-Type', 'application/json');  
    headers.append('Authorization',tokenValue); 
    return this.http.post('http://localhost:3000/beliefs/'+this.userId,data,{headers: headers}).toPromise();
    }

  disputeSubmit(data){
    let headers = new Headers();
    let tokenValue = 'Bearer ' + this.token;
    headers.append('Content-Type', 'application/json');  
    headers.append('Authorization',tokenValue); 
    return this.http.post('http://localhost:3000/disputes/'+this.userId,data,{headers: headers}).toPromise();
  }
}
