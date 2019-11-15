import { Component, OnInit } from '@angular/core';
import {FriendsService} from '../friends.service';
import {HomeService} from '../home.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {

  constructor(private abc: HomeService) { }
  friends;
  user;

  ngOnInit() {
    this.abc.getFollowers().subscribe(data1 => {
      this.friends = data1;
      //console.log(data1);
    });
  }
  deleteFollower(id) {
    alert('Are you sure you want to delete follower');
    this.abc.deleteUser(id).subscribe(data2 => {
      console.log(data2);
      this.ngOnInit();
    });
  }
  follow(id) {
    this.abc.followUser(id).subscribe( data4 => {
      console.log(data4);
    });
    this.ngOnInit();
  }

}
