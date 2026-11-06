import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environment'
import { environmentProd } from 'environment.prod'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/api';
  //  private apiUrl = environmentProd.apiUrl || environment.apiUrl;

  constructor(private http: HttpClient) {}

  signup(data: any) {
    console.log("signup",data)
    return this.http.post(`${this.apiUrl}/signup`, data);
  }

  login(data: any) {
    console.log("data",data,JSON.stringify(data))
    return this.http.post(`${this.apiUrl}/login`, data);
  }
  
  getUser(){
    const user = localStorage.getItem('user')
    console.log("data",user)
    return localStorage.getItem;
  }

  getFortune() {
    return this.http.get(`${this.apiUrl}/fortune`); // or any API above
  }

}
