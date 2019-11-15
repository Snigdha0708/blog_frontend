import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {ProfileService} from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private abc: ProfileService) { }
  myprofile;
  blogs;
  about;
  content;
  disabled = true;
  disabled1 = true;
  u = 1;
  url = 'http://localhost:2021/myprofile/update';
  ngOnInit() {
    this.abc.getProfile().subscribe( data => {
      this.myprofile = data;
      console.log(data);
      console.log(this.myprofile); });
    this.abc.getBlogs().subscribe( data1 => {
        this.blogs = data1;
      });
  }
  edit() {
    alert('Are you sure to save!!');
    if (this.myprofile.name != null && this.myprofile.contact != null && this.myprofile.dob != null && this.myprofile.address != null) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.http.put(this.url, this.myprofile, {headers}).subscribe(data => {
      console.log(data);
      this.disabled = true;
    }); } else {
      alert('Wrong details!!');
    }
    this.ngOnInit();
  }
  toggle() {
    this.disabled = false;
  }
  clickBlog() {
    this.disabled1 = false;
  }
  editBlog() {
    alert('Are you sure to save');
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.http.post('http://localhost:2021/blogs/updateBlog', {
        name: this.blogs.name,
        about: this.blogs.about,
        content: this.blogs.content,
        access: this.blogs.access
      }
    , {headers}).subscribe(data1 => {
      console.log(data1);
      this.disabled1 = true;
      alert('Blog updated');
      this.router.navigate(['home']);
    });
    //this.u = 1;
    //this.disabled1 = true;
    //this.ngOnInit();
  }
  delBlog(id) {
    this.abc.deleteBlog(id).subscribe(data5 => {
      console.log(data5);
});
    this.ngOnInit();
  }
  e() {
    alert('blog is private');
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.http.post('http://localhost:2021/blogs/updateBlog', {
      name: this.blogs.name,
      about: this.blogs.about,
      content: this.blogs.content,
      access: 'private'
    }, {headers});
    this.ngOnInit();
  }
  f() {
    alert('blog is public');
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.http.post('http://localhost:2021/blogs/updateBlog', {
      name: this.blogs.name,
      about: this.blogs.about,
      content: this.blogs.content,
      access: 'public'
    }, {headers});
    this.ngOnInit();
  }
}
