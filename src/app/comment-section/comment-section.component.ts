import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Comment } from './../models/app-comment';
import { CommentService } from './../services/comment.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.scss']
})
export class CommentSectionComponent implements OnInit {

  comments: Observable<Comment[]>
  title: string;
  content: string;
  constructor(private commentService: CommentService, private auth: AuthService) { }

  ngOnInit() {
    this.comments = this.commentService.getComments();
  }

  createComment(){
    const data = {
      content: this.content,
      title: this.title
    };
    this.commentService.createComments(data);
  }


}
