import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { AppUser } from '../models/app-user';

@Injectable()
export class UserService {

  constructor(private angularFireDatabase: AngularFireDatabase) { }


  save(user: firebase.User) {
    this.angularFireDatabase.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }


  get(uid: string): AngularFireObject<AppUser> {
    return this.angularFireDatabase.object('/users/' + uid);
  }


}
