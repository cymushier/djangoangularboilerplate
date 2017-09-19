import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { PostsService } from './posts.service';
import {Post} from './post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: Post;
  constructor(
    private postsService: PostsService,
    private activatedRoute: ActivatedRoute,
    private title: Title,
  private router: Router) { }

  ngOnInit() {
    this.title.setTitle('Boilerplate - Post Details');
    this.activatedRoute.paramMap.subscribe(next => {
      this.postsService.getPost(next.get('id')).then(post => this.post = post);
    });
  }

}
