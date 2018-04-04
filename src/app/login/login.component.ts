import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private authentication: AuthService, private router:Router ){ }

  login(){
    this.authentication.login();
    this.router.navigate(['home']);
  }

  logout(){
    this.authentication.logout();
    alert('Sikeres kijelentkezés');
    this.router.navigate(['home']);
  }

}
