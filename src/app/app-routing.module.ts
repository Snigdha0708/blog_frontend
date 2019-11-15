import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {ProfileComponent} from './profile/profile.component';
import {HomeComponent} from './home/home.component';
import {CreateBlogComponent} from './create-blog/create-blog.component';
import {CompleteBlogComponent} from './complete-blog/complete-blog.component';
import {FriendsComponent} from './friends/friends.component';


const routes: Routes = [
  {
    path : 'login',
    component : LoginComponent,
  },
  {
    path : 'sign-up',
    component : SignUpComponent,
  },
  {
    path : 'profile',
    component : ProfileComponent,
  },
  {
    path : 'home',
    component : HomeComponent,
  },
  {
    path : 'create',
    component : CreateBlogComponent,
  },
  {
    path: 'home/:id',
    component: CompleteBlogComponent,
  },
  {
    path: 'friends' ,
    component: FriendsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
