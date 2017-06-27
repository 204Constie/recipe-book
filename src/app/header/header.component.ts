import { Component } from '@angular/core';
import { Response } from '@angular/http';



import { ServerService } from '../server.service';
import { UserService } from '../user/user.service';
// import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
	constructor() {
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
