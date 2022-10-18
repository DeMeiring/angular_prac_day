import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class UserServiceService {

  constructor(private router:Router, private httpClient:HttpClient) { }

  getUser():Observable<any>{
    const authHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization : `Bearer ${localStorage.getItem('token')}`
    });
    const userApi = 'https://edeaf-api-staging.azurewebsites.net/v1/admin/Users/current';
    return this.httpClient.get(userApi, { headers : authHeader});
  }

  updateUser(firstname:string, lastname: string, email:string):Observable<any>{
    const authHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization : `Bearer ${localStorage.getItem('token')}`
    });
    const updateUserApiUrl = 'https://edeaf-api-staging.azurewebsites.net/v1/admin/Users/current';
    let body = {name: firstname, lastName:lastname, email: email};
    return this.httpClient.put(updateUserApiUrl, body, {headers:authHeader});
  }

}
