import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: User[]=[
    {id:1,name:'Principal',email:'p@college.com',password:'123456',role:'principal'},
    {id:2,name:'Teacher A',email:'t@college.com',password:'123456',role:'teacher'},
    {id:3,name:'Student 1',email:'s@college.com',password:'123456',role:'student'}
  ]

  currentUser:User | null = null;
  constructor(private readonly router: Router) { }

  login(email:string,password:string):boolean{
    const user = this.users.find(u => u.email === email && u.password === password);
    if(user){
      this.currentUser = user;
      if(user.role === 'principal') this.router.navigate(['/principal']);
      if(user.role === 'teacher') this.router.navigate(['/teacher']);
      if(user.role === 'student') this.router.navigate(['/student']);
      return true;
    }
    return false;
  }
  signup(newUser: User) {
    newUser.id = this.users.length + 1;
    this.users.push(newUser);
  }
}
