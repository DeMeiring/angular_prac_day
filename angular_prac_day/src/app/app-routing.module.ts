import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditInfoComponent } from './Components/edit-info/edit-info.component';
import { LoginComponent } from './Components/Login/login/login.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'editInfo' , component:EditInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
