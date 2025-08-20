import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(6)]]
  })
  constructor(private readonly fb: FormBuilder,private readonly authService: AuthService){
  }

  get f() { return this.loginForm.controls; }
  onLogin(){
    if(this.loginForm.valid){
      const {email,password} =this.loginForm.value;
      if(!this.authService.login(email!,password!)){
        alert("Invalid credentials");
      }
    }
    console.log(this.loginForm.value);
  }

}
