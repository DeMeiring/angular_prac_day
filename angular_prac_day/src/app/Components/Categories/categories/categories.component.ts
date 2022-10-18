import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  constructor(private router:Router) { }
  @Input() categoryName='';

  ngOnInit(): void {
  }

  determineRoute(){
    switch(this.categoryName){
      case 'Alphabet':{
        this.router.navigate(['Alphabet']);
        break;
      }
      case 'Calender':{
        this.router.navigate(['Calender']);
        break;
      }
      case 'Emergency Services':{
        this.router.navigate(['Emergency']);
        break;
      }
      case 'Greetings':{
        this.router.navigate(['Greetings']);
        break;
      }
      case 'Medical':{
        this.router.navigate(['Medical']);
        break;
      }
      case 'Numbers':{
        this.router.navigate(['Numbers']);
        break;
      }
      case 'Workplace Signs':{
        this.router.navigate(['Workplace']);
        break;
      }
      default:{
        this.router.navigate(['Alphabet']);
        break;
      }
    }
  }

}
