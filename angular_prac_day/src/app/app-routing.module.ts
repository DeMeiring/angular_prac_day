import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlphabetComponent } from './Components/Categories/categoriesRoutingEndpoints/Alphabet/alphabet/alphabet.component';
import { CalenderComponent } from './Components/Categories/categoriesRoutingEndpoints/Calender/calender/calender.component';
import { EmergencyComponent } from './Components/Categories/categoriesRoutingEndpoints/Emergency/emergency/emergency.component';
import { GreetingsComponent } from './Components/Categories/categoriesRoutingEndpoints/Greetings/greetings/greetings.component';
import { MedicalComponent } from './Components/Categories/categoriesRoutingEndpoints/Medical/medical/medical.component';
import { NumbersComponent } from './Components/Categories/categoriesRoutingEndpoints/Numbers/numbers/numbers.component';
import { WorkplaceComponent } from './Components/Categories/categoriesRoutingEndpoints/Workplace/workplace/workplace.component';
import { EditInfoComponent } from './Components/edit-info/edit-info.component';
import { HomeScreenComponent } from './Components/HomeScreen/home-screen/home-screen.component';
import { LoginComponent } from './Components/Login/login/login.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'editInfo' , component:EditInfoComponent},
  {path: 'homeScreen', component:HomeScreenComponent},
  {path: 'Alphabet',component:AlphabetComponent},
  {path:'Calender',component:CalenderComponent},
  {path: 'Emergency',component:EmergencyComponent},
  {path: 'Greetings',component:GreetingsComponent},
  {path: 'Medical',component:MedicalComponent},
  {path: 'Numbers',component:NumbersComponent},
  {path: 'Workplace',component:WorkplaceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
