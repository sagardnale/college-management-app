import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

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
  constructor(private readonly fb: FormBuilder,private readonly authService:AuthService){

 }
 get f(){
  return this.signupForm.controls;
 }
 onSignup(){
  if(this.signupForm.valid){
    this.authService.signup(this.signupForm.value as any);
     alert('Signup successful! Please login.');
  }
  console.log(this.signupForm.value);
 }
}
