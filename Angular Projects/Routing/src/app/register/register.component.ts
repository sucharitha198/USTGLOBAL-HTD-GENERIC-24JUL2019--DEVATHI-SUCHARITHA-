import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  get name() {
    return this.registerForm.get('name');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get mbl() {
    return this.registerForm.get('mbl');
  }
  get psd(){
    return this.registerForm.get('psd');
  }
  printForm(registerForm) {
    console.log(registerForm.value);
  }

  constructor() { }
  registerForm = new FormGroup ({
    name: new FormControl('', [Validators.required,Validators.minLength(3)]),
    email: new FormControl('',[Validators.required,Validators.minLength(5)]),
    mbl: new FormControl('',[Validators.required,Validators.minLength(10)]),
    password: new FormControl('',[Validators.required,Validators.pattern('suchi')])
});
  ngOnInit() {
  }

}
