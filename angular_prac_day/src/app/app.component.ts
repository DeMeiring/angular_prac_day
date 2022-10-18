import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriesApiService } from './Services/categories/categories-api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //create login page for user using oAuth 2 
  title = 'angular_project_day';
  
  constructor(private categoriesService:CategoriesApiService){}

}
