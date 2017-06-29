/**
 * Created by constie on 27.06.2017.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { User } from './user.model';
import { AuthService } from './auth.service';



@Injectable()
export class UserService {
  constructor(private http: Http, private authService: AuthService){}

  addUser = function(user: User){
    console.log('adduser');
    //http://localhost:3000/api/users/create
    return this.http.post('http://localhost:3000/api/users/create', user);
  }

  loginUser = function(data){
    console.log('adduser');
    //http://localhost:3000/api/users/create
    return this.http.post('http://localhost:3000/api/auth/signin', data);
  }
}
