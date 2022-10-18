import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Components/Login/login/login.component';
import { FormBuilder,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { EditInfoComponent } from './Components/edit-info/edit-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EditInfoComponent,
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
