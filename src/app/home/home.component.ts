import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';
import {HomeService} from '../home.service';
import {ProfileService} from '../profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private service: AppService, private router: Router, private  authService: AuthenticationService, private abc: HomeService, private u: ProfileService) { }
   blogs;
  users;
  followers;
  uv;
  see;
  access1 = [];
  follower1 = [];
  follower2 = [];
  ngOnInit() {
    if (!this.service.checkLogin()) {
      this.router.navigate(['login']);
    }
    this.abc.getBlogs().subscribe(data => {
      this.blogs = data;
      console.log(this.blogs);
      for (let i = 0; i < this.blogs.length; i++) {
        let b;
        if (this.blogs[i].access === 'public') {
           b = {number: 1};
        } else {
           b = {number: 0 };
        }
        this.access1.push(b);
      }
      console.log(this.access1);
    });
    this.u.getProfile().subscribe(data1 => {
      this.users = data1;
    });
    this.abc.currentUser().subscribe(data3 => {
      this.uv = data3;
      //console.log(this.uv);
      //console.log(this.uv.id);
    });
    this.abc.getFollowers().subscribe( data2 => {
      this.followers = data2;
      //console.log(this.uv.id);
      for (let i = 0; i < this.followers.length; i++) {
        if (this.followers[i].users.id === this.uv.id) {
          //console.log('y');
          let c;
          let abc = this.followers[i].users1.id;
          //console.log(abc);
          for( let j = 0; j < this.blogs.length; j++) {
            //console.log(this.blogs[j].users.id);
            if (abc === this.blogs[j].users.id) {
              //console.log(this.followers[i].users1.id);
              console.log(this.blogs[j].users.id);
              c = 1; } else {
              c = 0;
            } this.follower1.push(c); }
        } else {
            console.log('No match');
          }
        }
      console.log(this.follower1.length);
      console.log(this.follower1[0]);
      let au = this.follower1.length / 2;
      let du = 0;
      console.log(this.follower1[0]);
     for (let j = 0 ;j < this.follower1.length/2; j++) {
       du = this.follower1[j] + this.follower1[j + (this.follower1.length / 2)];
       let en = {number : du};
       this.follower2.push(en);
     }
      console.log(this.follower2);
    });
  }
  logout() {
    this.service.isLoggedIn(false);
    this.router.navigate(['login']);
  }
  onSelect(blog) {
    this.router.navigate(['/home' , blog.id]);
    console.log(blog.id);
  }
  seename() {
    this.abc.searchProduct(this.see).subscribe((data) => {
      this.blogs = data;
    });
}}
