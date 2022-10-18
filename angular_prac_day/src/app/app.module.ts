import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Components/Login/login/login.component';
import { FormBuilder,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { EditInfoComponent } from './Components/edit-info/edit-info.component';
import { CategoriesComponent } from './Components/Categories/categories/categories.component';
import { HomeScreenComponent } from './Components/HomeScreen/home-screen/home-screen.component';
import { AlphabetComponent } from './Components/Categories/categoriesRoutingEndpoints/Alphabet/alphabet/alphabet.component';
import { CalenderComponent } from './Components/Categories/categoriesRoutingEndpoints/Calender/calender/calender.component';
import { EmergencyComponent } from './Components/Categories/categoriesRoutingEndpoints/Emergency/emergency/emergency.component';
import { GreetingsComponent } from './Components/Categories/categoriesRoutingEndpoints/Greetings/greetings/greetings.component';
import { MedicalComponent } from './Components/Categories/categoriesRoutingEndpoints/Medical/medical/medical.component';
import { NumbersComponent } from './Components/Categories/categoriesRoutingEndpoints/Numbers/numbers/numbers.component';
import { WorkplaceComponent } from './Components/Categories/categoriesRoutingEndpoints/Workplace/workplace/workplace.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EditInfoComponent,
    CategoriesComponent,
    HomeScreenComponent,
    AlphabetComponent,
    CalenderComponent,
    EmergencyComponent,
    GreetingsComponent,
    MedicalComponent,
    NumbersComponent,
    WorkplaceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
