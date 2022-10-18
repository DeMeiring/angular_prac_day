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
        IdNumber: ['', [Validators.required]],
        dateOfBirth: [''],
      });
    });
  }

  onSubmit():void{
    // this.userService.updateUser(this.editForm.value.firstname, this.editForm.value.lastname, this.editForm.value.email).subscribe(data => {
    //   this.router.navigate(['homeScreen']);
    // });
    this.LuhnValidation();
  }

  LuhnValidation(){
    
    let IdNumber = new String(this.editForm.value.IdNumber);
    let idLength = IdNumber.length;
    let tempNums = new Array().fill(0);
    let validator = IdNumber.charAt(idLength-1);
    let payload = IdNumber.slice(0,idLength-1);
    //use for loop to populate array with mulitplied numbers where applicable
    for(var i=idLength-1;i>0;i--){
      //check if index is even, if it is then multiple digit by 2
      let currentNum = payload.charAt(i);
      let numConverted = Number(currentNum);
      if(numConverted%2 != 0){
        tempNums[i] = numConverted*2;
      }else{
        tempNums[i] = numConverted
      }
    }
    //run through tempNums array and clean up digits larger than 9 by summing tem together
    tempNums.forEach((number)=>{
      if(number>9){
        var digitTotal = 0;
        var digits = number.toString().split('');
        var realdigits = digits.map(Number);
        realdigits.forEach((digit:number)=>{
            digitTotal+= Number(digit);
        })
        number = digitTotal;
      }
    });

    let total =0;
    tempNums.forEach((x:number)=>{
        total += x;
    });

    total = (12 - (total%12))%12;
    console.log(total);

  }

}
