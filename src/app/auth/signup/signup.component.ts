import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
 signupForm = this.fb.group({
  name:['',[Validators.required,Validators.minLength(3)]],
  email:['',[Validators.required,Validators.email]],
  password:['',[Validators.required,Validators.minLength(6)]],
  role:['',[Validators.required]],
  className:['']
 })
  constructor(private readonly fb: FormBuilder){

 }
 get f(){
  return this.signupForm.controls;
 }
 onSignup(){
  console.log(this.signupForm.value);
 }
}
