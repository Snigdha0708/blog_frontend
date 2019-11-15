import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private service: AppService, private router: Router, private  authService: AuthenticationService) { }

  ngOnInit() {
  }
  logout() {
    this.service.isLoggedIn(false);
    this.router.navigate(['login']);
  }
}
