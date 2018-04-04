import { Component, OnInit } from '@angular/core';

import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app';
  
  constructor(public authentication: AuthService, private userService: UserService){
    authentication.user$.subscribe(user =>{
      if(user){
        userService.save(user);
      }
      
    });
  }
  
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
}
