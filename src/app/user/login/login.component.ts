import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';
import {User} from "../user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService,
              private router:Router,
              private authService: AuthService
              ) { }

  showError: boolean;

  ngOnInit() {
    this.showError = false;
  }

  onSubmit(f: NgForm) {
    // console.log(f.value);  // { first: '', last: '' }
    // console.log(f.valid);  // false
    if(f.valid){
      this.userService.loginUser(f.value).subscribe(
        (response) => {
          // console.log('RESPONSE ALL', response.json());
          let json = response.json();
          if (json.success == false) {
            this.showError = true;
            console.log("ERROR, couldn't log in")
          } else {
            console.log('response.token: ', json.token);
            console.log('RESPONSE USER: ', json.user);
            this.authService.token = json.token;
            let user = json.user as User;
            this.authService.setUser(user);
            if(json.success){
              this.router.navigate(['/']);
            }
          }
        },
        (error) => console.log('error: ', error)
      )
    }
  }

}
