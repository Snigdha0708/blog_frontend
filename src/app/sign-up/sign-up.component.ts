import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AppService} from '../app.service';
import {SignUpService} from '../sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private http: HttpClient, private abc: AppService, private router: Router, private a: SignUpService) { }

  email;
  password;
  name;
  address;
  contact;
  cemail;
  dob;
  allUsers;
  flag = 0;
  ngOnInit() {
    if (this.abc.checkLogin()) {
      this.router.navigate(['/home']);
    }
    this.a.checkSame().subscribe( data1 => {
      this.allUsers = data1;
      console.log(data1);
      console.log(this.allUsers[0].email);
    });
  }

  finalData() {
    if (this.contact.length === 10) {
    return this.http.post('http://localhost:2021/abc/somedata', {
      email: this.email,
      password: this.password,
      name: this.name,
      address: this.address,
      contact: this.contact,
      dob: this.dob
    }).subscribe(data => {
      if (this.email == null || this.cemail == null || this.password == null || this.name == null || this.address == null || this.contact == null || this.dob == null) {
        alert('Re-enter details!!!');
      } else {
        for (let i = 0; i < this.allUsers.length; i++) {
          if (this.allUsers[i].email == this.email) {
            alert('Email id taken!!');
            break;
          } else {
            if (this.email != this.cemail) {
              alert('Wrong email id');
            } else {
              this.router.navigate(['/login']);
            }
          }
        }
      }
    });} else {
      alert('Re-enter contact!!!');
    }
  }
}
