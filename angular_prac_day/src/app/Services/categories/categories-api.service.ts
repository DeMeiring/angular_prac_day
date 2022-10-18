import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoriesApiService {

  constructor(private httpClient:HttpClient) { }

  getCategories():Observable<any>{
    const authHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization : `Bearer ${localStorage.getItem('token')}`
    });
    
    const categoriesApiUrl = 'https://edeaf-api-staging.azurewebsites.net/v1/admin/categories'
    return this.httpClient.get(categoriesApiUrl,{headers:authHeader});
    
  }
}
