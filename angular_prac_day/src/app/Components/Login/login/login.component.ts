import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
    username: [''],
    password: [''],
  });

  get username() {
    return this.loginForm.get('username');
  }
 
  get password() {
    return this.loginForm.get('password');
  }

  constructor(private formBuilder:FormBuilder,private auth:AuthService) {
   }

  ngOnInit(): void {
  }

  onSubmit():void{
    if(this.username != null && this.password != null){
        this.auth.getToken(this.loginForm.value.username!, this.loginForm.value.password!).subscribe(data=>{
            //console.log(data.access_token);
            localStorage.setItem('token',data.access_token);

        });
    }
  }

}
