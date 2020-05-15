import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  user = {
    firstName : '',
    lastName : '',
    email : '',
    password : '',
    gender : ''
  }
  onSubmit(f){ 
    console.log(f);
  }
}
