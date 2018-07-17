import { Injectable } from '@angular/core';
import {UserInfo} from '../shared/user-info';
//import {Http, Response} from '@angular/http';
import {HttpModule, Http, URLSearchParams, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
//import { HttpClient } from '@angular/common/http';
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

  getUser(): Observable<any> {
   return this.http.get(this._baseUrl + '/userInfo')
      .map(res => {
        return res.json();
      });
  }
}
