import { Component } from '@angular/core';
import { Response } from '@angular/http';



import { ServerService } from '../server.service';
import { UserService } from '../user/user.service';
import {AuthService} from "../user/auth.service";
import {Router} from "@angular/router";
import {AuthGuard} from "../user/auth.guard";
// import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
	constructor(private authService: AuthService, private authGuard: AuthGuard, private router: Router) {
  }

  isUserLoggedIn() {
	  return this.authGuard.canActivate();
  }

  logout() {
	  this.authService.logout();
	  this.router.navigateByUrl('/');
  }

	// onSave(){
	// 	this.serverService.saveRecipes().subscribe(
	// 		(response) => console.log(response),
	// 		(error) => console.log(error)
	// 	);
	// }
	// onFetch(){
	// 	this.serverService.fetchRecipes();
	// }

	// onSignIn(){
  //
  // }
  // onLogin(){
  //
  // }
}
