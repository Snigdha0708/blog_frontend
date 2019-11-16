import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CompleteBlogService} from '../complete-blog.service';
import {AppService} from '../app.service';
import {AuthenticationService} from '../authentication.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-complete-blog',
  templateUrl: './complete-blog.component.html',
  styleUrls: ['./complete-blog.component.scss']
})
export class CompleteBlogComponent implements OnInit {
  id;
  blogDetails;
  id1;
  friends;
  d;
  b;
  com;
  comments;
  f = [];
  constructor(private route: ActivatedRoute, private abc: CompleteBlogService, private service: AppService, private router: Router, private  authService: AuthenticationService, private http: HttpClient) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params.get('id'));
      this.id = id;
    }),
      this.abc.getDetails(this.id).subscribe(data => {
        this.blogDetails = data;
        this.id1 = this.blogDetails.users.id;
        console.log(this.id1);
      });
    this.abc.getFollowers().subscribe(data5 => {
       this.friends = data5;
   });
    this.abc.currentUser().subscribe(data6 => {
      this.d = data6;
    });
    this.abc.getComments().subscribe(data7 => {
    this.com = data7;
    console.log(this.com);
});
  }

  logout() {
    this.service.isLoggedIn(false);
    this.router.navigate(['login']);
  }

  newFollower() {
       this.abc.followUser(this.id1).subscribe(data => {
         console.log(this.id1);
         alert('Thanku for following');
       });
       this.router.navigate(['home']);
     }
     addCo(a) {
    this.b = {
        date : null,
        comment : this.comments
    }
    alert('Thanku for adding comment');
      return this.abc.addComment(a, this.b).subscribe(data10 => {
        this.router.navigate(['/home' , this.id]);
       });

     }}

