import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { PostsService } from './posts.service';
import {Post} from './post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  constructor(private postsService: PostsService, private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Boilerplate - Posts');
    this.postsService.getAll().then(posts => {
      this.posts = posts;
      });
  }

}
