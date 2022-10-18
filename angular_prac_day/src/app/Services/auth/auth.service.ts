import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
const API_URL = 'https://edeaf-api-staging.azurewebsites.net/connect/token'; 

//used to convert variables to convet client and secret to basic auth 
const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: 'Basic ' + btoa(environment.client_id + ':' + environment.client_secret)
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient) { }

  getToken(loginUsername:string, loginPassword:string):Observable<any>{
    //this is the api call to get token for login user

    const body = new HttpParams()
    .set('username', loginUsername)
    .set('password',loginPassword)
    .set('grant_type',environment.grantType)
    .set('client_id',environment.client_id)
    .set('client_secret',environment.client_secret)
    .set('scope',environment.scope)
    console.log(body)
    //let body = [{grant_type:environment.grantType},{client_id:environment.client_id},{client_secret:environment.client_secret},{scope:environment.scope},{username:loginUsername},{password:loginPassword}]
    return this.httpClient.post(API_URL,body.toString(),{
          headers: new HttpHeaders().set('Content-Type',  'application/x-www-form-urlencoded')
    });
  }
}
