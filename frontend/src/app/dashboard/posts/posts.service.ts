import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { CommonService } from '../../common.service';

import { Post } from './post';

@Injectable()
export class PostsService {
  headers = new Headers(
    {'Content-Type': 'application/json', 'Authorization': 'JWT ' + sessionStorage.getItem('token')});
  options = new RequestOptions({headers: this.headers});
  constructor(private http: Http, private commonService: CommonService) { }

  getAll(): Promise<Post[]> {
    return this.http.get(
      this.commonService.rootURL() + '/api/posts/', this.options)
      .toPromise()
      .then(response => response.json().results as Post[])
      .catch(this.handleError);
  }

  getPost(id: string): Promise<Post> {
    return this.getAll()
    .then(posts => posts.find(post => post.id.toString() === id));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}

