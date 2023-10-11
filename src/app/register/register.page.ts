import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  email:any;
  password:any;

  constructor(
    private authService:AuthenticationService
  ) { }

  ngOnInit() {
  }
  register(){
    alert(this.email)
    alert(this.password)
    this.authService.register(this.email,this.password)
  }

}
