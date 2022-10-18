import { Component, OnInit } from '@angular/core';
import { FormBuilder,ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.scss']
})
export class EditInfoComponent implements OnInit {

  editForm = this.formBuilder.group({
    
  });

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

}
