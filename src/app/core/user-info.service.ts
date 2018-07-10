import { Injectable } from '@angular/core';
import {UserInfo} from '../shared/user-info';
import {HttpModule, Http, URLSearchParams, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class UserInfoService {
 _baseUrl = 'http://localhost:3000';
 isLoggedIn;
 userInfo: UserInfo;
 private userInfoSubject = new BehaviorSubject(this.userInfo);

  constructor(private http: Http) {
    this.isLoggedIn = false;
  }

  getUserState() {
    return this.userInfoSubject.asObservable();
  }

  addUser(user: UserInfo) {
    this.userInfo = user;
    this.isLoggedIn = true;
    this.http.post(this._baseUrl + '/userInfo', user).subscribe(
      res => {
        console.log(res);
        this.userInfoSubject.next(user);
      },
      err => {
        console.log('error', err);
      }
    );
  }

  getUser() {
   return this.http.get(this._baseUrl + '/userInfo')
      .map(res => {
        return res.json();
      });
  }
}
