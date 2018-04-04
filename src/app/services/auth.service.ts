import * as firebase from 'firebase/app';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { UserService } from './user.service';


@Injectable()
export class AuthService {

  authState: any = null;
  user$: Observable<firebase.User>;
  constructor(private router: Router,
    private angularFireAuth: AngularFireAuth,
    private userService: UserService,
    private angularFireDatabase: AngularFireDatabase) {
    this.user$ = this.angularFireAuth.authState;
    this.angularFireAuth.authState.subscribe(data => this.authState = data);
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }

  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : null;
  }

  login() {
    this.angularFireAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.angularFireAuth.auth.signOut();
  }
  /*
    get appUser$() : Observable<AppUser> {
      return this.user$
        .switchMap(user => {
          if (user) return this.userService.get(user.uid);
  
          return Observable.of(null);
        });    
    }*/

}
