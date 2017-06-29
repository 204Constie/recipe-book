import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { AuthGuard } from '../../user/auth.guard';
import {AuthService} from "../../user/auth.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  authguard: Boolean;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router,
              private authGuard: AuthGuard,
              private authService: AuthService
  ) {
  }

  ngOnInit() {
    this.authguard = this.authGuard.canActivate();
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      );
  }

  canEdit() {
    return this.authService.getUser().username == this.recipe.user.username;
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id, this.recipe._id)
      .subscribe((res) => res.json());
    this.router.navigate(['/recipes']);
  }

}
