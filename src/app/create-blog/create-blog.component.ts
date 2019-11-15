import { Component, OnInit } from '@angular/core';
import {CreateBlogService} from '../create-blog.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }
  name;
  about;
  image;
  content;
  category;
  access;
  ngOnInit() { }
   saveData() {
    if (this.image != null && this.category != null && this.content != null && this.name != null && this.access != null) {
      alert('Thanku for adding data');
      const token = sessionStorage.getItem('token');
      const headers = new HttpHeaders({Authorization: 'Basic ' + token});
      return this.http.post('http://localhost:2021/blogs/addBlog', {
      name: this.name,
      about: this.about,
       image: this.image,
       content: this.content,
       category: this.category,
       access: this.access
     }, {headers}).subscribe(data => {
       console.log(data);
       this.router.navigate(['/home']);

     });
   } else {
    alert('Re-enter details!!');
}}
}
