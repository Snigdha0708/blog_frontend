import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username;
  password;
  constructor(private service: AppService, private router: Router, private  authService: AuthenticationService) { }

  ngOnInit() {
    if (this.service.checkLogin()) {
      this.router.navigate(['home']);
    }
  }
  login() {
    this.authService.authenticate(this.username, this.password).subscribe(
      data => {
        this.service.isLoggedIn(true);
        alert('Thank you for logging in');
        this.router.navigate(['home']);
      }, (err) => {
        alert('Invalid details!!');
      }
    );
  }
  logout() {
    this.service.isLoggedIn(false);
  }


}
