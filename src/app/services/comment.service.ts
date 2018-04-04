import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore'
import { Comment } from '../models/app-comment';

@Injectable()
export class CommentService {
  commentCollection: AngularFirestoreCollection<Comment>

  constructor(private angularFireStore: AngularFirestore) { 
    this.commentCollection = this.angularFireStore.collection('comments');
  }

  getComments(){
    return this.commentCollection.snapshotChanges().map(action =>{
      return action.map(a=>{
        const data = a.payload.doc.data() as Comment
        const id = a.payload.doc.id
        return {id, ...data}
      })
    })
  }

  createComments(data:Comment){
    this.commentCollection.add(data);
  }



}

