import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { ServerService } from '../server.service';
// import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
	constructor(private serverService: ServerService){}

	onSave(){
		this.serverService.saveRecipes().subscribe(
			(response) => console.log(response),
			(error) => console.log(error)
		);
	}
	onFetch(){
		this.serverService.fetchRecipes();
	}
}
