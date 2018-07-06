import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { UserInfoService } from '../../core/user-info.service';

@Injectable()
export class UsernameResolver implements Resolve<Observable<string>> {
  constructor(private userInfoService: UserInfoService) {}

  resolve() {
    return this.userInfoService.getUser();
  }
}
