/**
 * Created by constie on 27.06.2017.
 */
import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {User} from "./user.model";

@Injectable()
export class AuthService {
  public token: string = '';
  private user: User;

  constructor(private http: Http) {
    this.user = null;
  }

  logout() {
    this.token = '';
    this.user = null;
  }

  setUser(user: User) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Bearer ' + this.token);
  }

  get(url, jwt) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      headers: headers
    });
  }

  post(url, data, jwt) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(url, data, {
      headers: headers
    });
  }
}
