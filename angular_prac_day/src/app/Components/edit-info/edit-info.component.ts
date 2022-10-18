import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/Services/userService/user-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.scss']
})
export class EditInfoComponent implements OnInit {
  //variable to store user info returned from api
  userInfo:any;

  editForm:any;

  constructor(private router:Router, private formBuilder:FormBuilder, private userService: UserServiceService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(data=>{
      this.userInfo = data.data;
      console.log(this.userInfo);

      this.editForm = this.formBuilder.group({
        firstname: [this.userInfo.name, [Validators.required, Validators.minLength(3),Validators.maxLength(8)]],
        lastname: [this.userInfo.lastName, [Validators.required, Validators.maxLength(15), Validators.maxLength(8)]],
        email: [this.userInfo.email, [Validators.required, Validators.email]],
        IdNumber: [this.userInfo.id, [Validators.required]],
        dateOfBirth: [''],
      });
    });
  }

  onSubmit():void{
    this.userService.updateUser(this.editForm.value.firstname, this.editForm.value.lastname, this.editForm.value.email).subscribe(data => {
      this.router.navigate(['homeScreen']);
    });
  }

}
