import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }
  getBlogs() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:2021/blogs/getBlogs';
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
  deleteUser(id) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:2021/f/delete/UserId/' + id;
    return this.http.get(url, {headers});
  }
  allUser() {
    const url = 'http://localhost:2021/users/getUsers';
    return this.http.get(url);
  }
  searchProduct(name) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:2021/blogs/search/' + name;
    return this.http.get(url, {headers});
  }
  followUser(id) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:2021/f/new/UserId/' + id;
    return this.http.get(url, {headers});
  }
}
