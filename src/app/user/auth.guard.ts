/**
 * Created by constie on 28.06.2017.
 */
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';


import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService){}

  canActivate() {
    if(this.authService.token !== ''){
      console.log('canActivate true');
      return true;
    } else {
      console.log('canActivate false');
      return false;
    }
  }
  // isLoggedIn = function(){
  //   if(this.authService.token !== ''){
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
}
