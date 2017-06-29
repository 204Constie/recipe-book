/**
 * Created by constie on 27.06.2017.
 */
import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class AuthService {
  public token: string = '';

  constructor(private http: Http) {}

  isUserLoggedIn() {
    return this.token != '';
  }

  logout() {
    this.token = '';
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
