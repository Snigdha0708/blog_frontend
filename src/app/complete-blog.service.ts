import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompleteBlogService {

  constructor(private http: HttpClient) { }
  getDetails(id) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:2021/blogs/par/' + id;
    return this.http.get(url, {headers});
  }
  followUser(id) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:2021/f/new/UserId/' + id;
    return this.http.get(url, {headers});
  }
  getFollowers() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:2021/f/followers';
    return this.http.get(url, {headers});
  }
  currentUser() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:2021/users/user';
    return this.http.get(url, {headers});
  }
  getComments() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:2021/comments/getComments';
    return this.http.get(url, {headers});
  }
  addComment(id, b) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:2021/comments/addComment/' + id;
    return this.http.post(url, b, {headers});
  }
}
