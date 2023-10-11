import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email:any;
  password:any;

  constructor(
    private router: Router,
    private authService:AuthenticationService
  ) { }

  ngOnInit() {
  }

  login(email:any, password:any){
    
    this.authService.login(email, password).then(data=>{
      if(data){
        this.router.navigate(['/home'])
      }else{
        alert("wrong username or password!")
      }
    })
      
  }

  register(){
    this.router.navigate(['/register'])
  }

}
