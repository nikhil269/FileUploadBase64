import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  checkoutForm: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.checkoutForm = this.fb.group({
      name: [''],
      file: ['']
    });
  }

  onSelectFile(event) {
    console.log(event.target.files);
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
     console.log(reader.result);
    };
  }

  onSubmit() {

  }



}
