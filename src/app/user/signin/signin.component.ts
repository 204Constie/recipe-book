import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private userService: UserService, private authService: AuthService) { }

  ngOnInit() {
  }


  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
    if(f.valid){
      this.userService.addUser(f.value).subscribe(
        (response) => {
          console.log('response: ', response);
          this.authService.token = response.token;
        },
        (error) => console.log('error: ', error)
      )
    }
  }
}
