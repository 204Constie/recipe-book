import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';

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

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
    if(f.valid){
      this.userService.loginUser(f.value).subscribe(
        (response) => {
          console.log('response: ', response.json());
          let json = response.json();
          console.log('response.token: ', json.token);
          this.authService.token = json.token;
          if(json.success){
            this.router.navigate(['/']);
          }

        },
        (error) => console.log('error: ', error)
      )


    }
  }

}
