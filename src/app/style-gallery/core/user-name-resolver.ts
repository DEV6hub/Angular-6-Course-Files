import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';

import { Observable } from 'rxjs';


import { UserInfoService } from '../../core/user-info.service';

@Injectable()
export class UsernameResolver implements Resolve<Observable<string>> {
  constructor(private userInfoService: UserInfoService) {}

  resolve() {
    return this.userInfoService.getUser();
  }
}
