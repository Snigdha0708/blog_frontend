import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {FormsModule} from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import {AuthenticationService} from './authentication.service';
import {AppService} from './app.service';
import {HttpClientModule} from '@angular/common/http';
import {SignUpService} from './sign-up.service';
import {ProfileService} from './profile.service';
import {HomeService} from './home.service';
import {CreateBlogService} from './create-blog.service';
import { CompleteBlogComponent } from './complete-blog/complete-blog.component';
import {CompleteBlogService} from './complete-blog.service';
import { FriendsComponent } from './friends/friends.component';
import {FriendsService} from './friends.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    ProfileComponent,
    NavBarComponent,
    HomeComponent,
    CreateBlogComponent,
    CompleteBlogComponent,
    FriendsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthenticationService, AppService, SignUpService, ProfileService, HomeService, CreateBlogService, CompleteBlogService, FriendsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
