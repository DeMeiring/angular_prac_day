import { Component, OnInit } from '@angular/core';
import { CategoriesApiService } from 'src/app/Services/categories/categories-api.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {

  constructor(private categoriesService:CategoriesApiService) { }

  categories:any;

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe(data=>{
      this.categories = data.data;
      console.log(this.categories);
    });
  }

}
